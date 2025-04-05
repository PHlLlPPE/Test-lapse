import { useEffect, useState } from "react";

type AnimatedGaugeProps = {
  name: string;
  value: number;
  delta?: number; // Variation temporaire (ex: +10 ou -5)
};

export default function AnimatedGauge({ name, value, delta }: AnimatedGaugeProps) {
  const [showDelta, setShowDelta] = useState(false);

  useEffect(() => {
    if (delta !== undefined) {
      setShowDelta(true);
      const timeout = setTimeout(() => setShowDelta(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [delta]);

  return (
    <div className="mb-4 relative">
      {/* Nom et valeur */}
      <div className="flex justify-between text-sm mb-1">
        <span className="font-semibold">{name}</span>
        <span>{value}</span>
      </div>

      {/* Bulle delta temporaire */}
      {showDelta && delta !== 0 && (
        <div
          className={`absolute -top-5 left-2 text-sm font-bold ${
            (delta ?? 0) > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {(delta ?? 0) > 0 ? `+${delta}` : `${delta}`}
        </div>
      )}

      {/* Barre de jauge */}
      <div className="w-full h-2 bg-gray-300 rounded">
        <div
          className="h-2 bg-green-500 rounded transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
