
export interface SummaryItemProps {
  category: string;
  score: number;
  icon: string;
  variant: 'red' | 'blue' | 'green' | 'yellow';
}

export const summary: SummaryItemProps[] = [
  {
    category: "Reaction",
    score: 80,
    icon: "/images/icon-reaction.svg",
    variant: "red"
  },
  {
    category: "Memory",
    score: 92,
    icon: "/images/icon-memory.svg",
    variant: "yellow"
  },
  {
    category: "Verbal",
    score: 61,
    icon: "/images/icon-verbal.svg",
    variant: "green"
  },
  {
    category: "Visual",
    score: 72,
    icon: "/images/icon-visual.svg",
    variant: "blue"
  },
];
