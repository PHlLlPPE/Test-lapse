type GaugeProps = {
  name: string;
  value: number;
};

export default function Gauge({ name, value }: GaugeProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-semibold">{name}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-2 bg-gray-300 rounded">
        <div
          className="h-2 bg-green-500 rounded transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
