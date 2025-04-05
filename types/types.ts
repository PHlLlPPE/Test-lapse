export type Gauge = {
  name: string;
  value: number;
};

export type Card = {
  id: number;
  title: string;
  description: string;
  optionA: string;
  optionB: string;
  effectsA: Partial<Record<string, number>>;
  effectsB: Partial<Record<string, number>>;
  image_url?: string;
};
