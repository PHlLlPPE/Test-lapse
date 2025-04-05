import { Card as CardType } from "@/types/types";
import Image from "next/image";

type Props = {
  card: CardType;
  onChoose: (effects: Partial<Record<string, number>>) => void;
};

export default function Card({ card, onChoose }: Props) {
  return (
    <div className="relative bg-yellow-100/90 border-4 border-yellow-900 p-4 sm:p-6 rounded-xl shadow-xl animate-fade-in w-full">
      
      {/* Image illustrative */}
      {card.image_url && (
        <div className="mb-4 overflow-hidden rounded-md shadow">
          <Image
            src={card.image_url}
            alt={card.title}
            width={800}
            height={400}
            className="w-full h-48 object-cover sm:h-56"
          />
        </div>
      )}

      {/* Titre & description */}
      <h2 className="text-xl sm:text-2xl font-bold text-yellow-900 mb-2">
        {card.title}
      </h2>
      <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
        {card.description}
      </p>

      {/* Choix */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <button
          onClick={() => onChoose(card.effectsA)}
          className="flex-1 bg-yellow-800 hover:bg-yellow-700 active:scale-95 transition-all duration-200 text-white font-semibold py-3 px-4 rounded-lg shadow-md"
        >
          {card.optionA}
        </button>
        <button
          onClick={() => onChoose(card.effectsB)}
          className="flex-1 bg-yellow-900 hover:bg-yellow-800 active:scale-95 transition-all duration-200 text-white font-semibold py-3 px-4 rounded-lg shadow-md"
        >
          {card.optionB}
        </button>
      </div>
    </div>
  );
}
