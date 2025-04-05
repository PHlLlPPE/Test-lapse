import { Gauge } from "@/types/types";

type Props = {
  gauges: Gauge[];
  onRestart: () => void;
};

export default function VictoryScreen({ gauges, onRestart }: Props) {
  return (
    <div className="min-h-screen bg-[url('/bg-paper.jpg')] bg-cover bg-center flex items-center justify-center text-yellow-900 px-4">
      <div className="bg-white/90 p-4 sm:p-8 rounded-xl shadow-xl w-full max-w-xl text-center border border-yellow-900">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-yellow-900">
          Fin du règne
        </h1>

        <p className="text-base sm:text-lg italic mb-6">
          Vous avez mené votre peuple jusqu'au bout des épreuves.
        </p>

        <div className="mb-6 text-left text-sm sm:text-base">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">État final des piliers :</h2>
          <ul className="space-y-1">
            {gauges.map((g) => (
              <li key={g.name}>
                <strong>{g.name}</strong> : {g.value}
              </li>
            ))}
          </ul>
        </div>

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
