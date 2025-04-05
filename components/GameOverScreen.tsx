type Props = {
  pillar: string;
  value: number;
  onRestart: () => void;
};

const endings: Record<string, { zero: string; hundred: string }> = {
  Ressources: {
    zero: "Le royaume meurt de faim. Votre peuple vous abandonne.",
    hundred: "La surexploitation détruit la terre. Une famine s'abat sur le royaume.",
  },
  Popularité: {
    zero: "Le peuple se soulève. Vous êtes renversé.",
    hundred: "Vous devenez un tyran adulé. Le pouvoir vous consume.",
  },
  Armement: {
    zero: "Désarmé, le royaume est conquis sans résistance.",
    hundred: "Vos généraux prennent le pouvoir par la force.",
  },
  Finance: {
    zero: "Ruine totale. Plus aucune décision possible.",
    hundred: "Trop de richesses mènent à la corruption et à la décadence.",
  },
};

export default function GameOverScreen({ pillar, value, onRestart }: Props) {
  const reason = value === 0 ? endings[pillar].zero : endings[pillar].hundred;

  return (
    <div className="min-h-screen bg-[url('/bg-paper.jpg')] bg-cover bg-center flex items-center justify-center text-yellow-900 px-4">
      <div className="bg-white/90 p-4 sm:p-8 rounded-xl shadow-xl w-full max-w-xl text-center border border-yellow-900">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Fin de règne</h1>

        <p className="mb-4 text-lg sm:text-xl text-red-800 font-semibold">
          {pillar} : {value}
        </p>

        <p className="mb-6 text-base sm:text-lg leading-relaxed italic">{reason}</p>

        <button
          onClick={onRestart}
          className="w-full sm:w-auto bg-yellow-800 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow transition-all duration-200 text-lg font-semibold"
        >
          Rejouer
        </button>
      </div>
    </div>
  );
}
