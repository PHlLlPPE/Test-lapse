import { useEffect, useState } from "react";
import { cards as allCards } from "@/data/cards";
import { Gauge, Card as CardType } from "@/types/types";
import Card from "@/components/Card";
import IntroScreen from "@/components/IntroScreen";
import GameOverScreen from "@/components/GameOverScreen";
import VictoryScreen from "@/components/VictoryScreen";
import AnimatedGauge from "@/components/AnimatedGauge";

const STORAGE_KEY = "dynastie-progress";

function saveProgress(state: {
  gauges: Gauge[];
  deck: CardType[];
  cardIndex: number;
}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProgress(): { gauges: Gauge[]; deck: CardType[]; cardIndex: number } | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [gauges, setGauges] = useState<Gauge[]>([
    { name: "Ressources", value: 50 },
    { name: "Popularité", value: 50 },
    { name: "Armement", value: 50 },
    { name: "Finance", value: 50 },
  ]);

  const [deltas, setDeltas] = useState<Record<string, number>>({});
  const [deck, setDeck] = useState<CardType[]>([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [badEnding, setBadEnding] = useState<{ pillar: string; value: number } | null>(null);

  const handleRestart = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsStarted(false);
    setDeck([]);
    setCardIndex(0);
    setBadEnding(null);
    setDeltas({});
    setGauges([
      { name: "Ressources", value: 50 },
      { name: "Popularité", value: 50 },
      { name: "Armement", value: 50 },
      { name: "Finance", value: 50 },
    ]);
  };

  useEffect(() => {
    if (isStarted) {
      const saved = loadProgress();
      if (saved) {
        setGauges(saved.gauges);
        setDeck(saved.deck);
        setCardIndex(saved.cardIndex);
      } else {
        const shuffled = [...allCards].sort(() => Math.random() - 0.5);
        setDeck(shuffled);
        setCardIndex(0);
      }
    }
  }, [isStarted]);

  const handleChoice = (effects: Partial<Record<string, number>>) => {
    const newDeltas: Record<string, number> = {};
    const newGauges = gauges.map((g) => {
      const change = effects[g.name] || 0;
      newDeltas[g.name] = change;
      return {
        ...g,
        value: Math.max(0, Math.min(100, g.value + change)),
      };
    });

    setDeltas(newDeltas);

    const critical = newGauges.find((g) => g.value === 0 || g.value === 100);
    if (critical) {
      localStorage.removeItem(STORAGE_KEY);
      setGauges(newGauges);
      setBadEnding({ pillar: critical.name, value: critical.value });
      return;
    }

    setGauges(newGauges);
    setCardIndex((prev) => {
      const newIndex = prev + 1;
      saveProgress({ gauges: newGauges, deck, cardIndex: newIndex });
      return newIndex;
    });
  };

  const currentCard: CardType | undefined = deck[cardIndex];

  if (!isStarted) {
    return <IntroScreen onStart={() => setIsStarted(true)} />;
  }

  if (badEnding) {
    return (
      <GameOverScreen
        pillar={badEnding.pillar}
        value={badEnding.value}
        onRestart={handleRestart}
      />
    );
  }

  if (cardIndex >= deck.length && isStarted && !badEnding) {
    localStorage.removeItem(STORAGE_KEY);
    return <VictoryScreen gauges={gauges} onRestart={handleRestart} />;
  }

  return (
    <main className="min-h-screen bg-[url('/bg-paper.jpg')] bg-cover bg-center text-gray-900 px-4 py-6 sm:p-8">
      <div className="w-full max-w-xl mx-auto bg-white/90 rounded-xl shadow-xl p-4 sm:p-6 border border-yellow-900">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-yellow-900 mb-6">
          Dynastie Khmer
        </h1>

        <div className="mb-6">
          {gauges.map((g) => (
            <AnimatedGauge
              key={g.name}
              name={g.name}
              value={g.value}
              delta={deltas[g.name]}
            />
          ))}
        </div>

        {currentCard && (
          <Card card={currentCard} onChoose={handleChoice} />
        )}
      </div>
    </main>
  );
}
