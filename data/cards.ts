import { Card } from "@/types/types";

export const cards: Card[] = [
  {
    id: 1,
    title: "Sécheresse imminente",
    description: "Les paysans demandent de l’aide pour irriguer leurs cultures.",
    optionA: "Investir dans les infrastructures",
    optionB: "Ignorer et espérer la pluie",
    effectsA: { Ressources: -10, Popularité: +5 },
    effectsB: { Popularité: -10, Finance: +5 },
    image_url: "/images/drought.png"
  },
  {
    id: 2,
    title: "Un temple en ruine",
    description: "Les moines demandent des fonds pour restaurer un temple sacré.",
    optionA: "Financer la restauration",
    optionB: "Prioriser l’armée",
    effectsA: { Finance: -15, Popularité: +10 },
    effectsB: { Armement: +10, Popularité: -5 },
    image_url: "/images/temple.png"
  },
  {
    id: 3,
    title: "Marchands étrangers",
    description: "Un accord commercial avantageux est proposé par un royaume voisin.",
    optionA: "Signer l’accord",
    optionB: "Refuser l’ingérence",
    effectsA: { Finance: +10, Ressources: +5 },
    effectsB: { Popularité: +5, Finance: -5 },
    image_url: "/images/merchant.png"
  },
  {
    id: 4,
    title: "Mouvement rebelle",
    description: "Des rebelles s’organisent dans le sud du royaume.",
    optionA: "Envoyer l’armée pour mater la rébellion",
    optionB: "Négocier avec les chefs rebelles",
    effectsA: { Armement: -10, Popularité: -5 },
    effectsB: { Popularité: +5, Ressources: -10 },
    image_url: "/images/rebellion.png"
  },
  {
    id: 5,
    title: "Pluie abondante",
    description: "Les récoltes s’annoncent excellentes cette saison.",
    optionA: "Célébrer avec le peuple",
    optionB: "Stocker les excédents",
    effectsA: { Popularité: +10, Finance: -5 },
    effectsB: { Ressources: +15 },
    image_url: "/images/harvest.png"
  }
];
