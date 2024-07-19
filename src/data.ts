
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
    icon: "src/assets/images/icon-reaction.svg",
    variant: "red"
  },
  {
    category: "Memory",
    score: 92,
    icon: "src/assets/images/icon-memory.svg",
    variant: "yellow"
  },
  {
    category: "Verbal",
    score: 61,
    icon: "src/assets/images/icon-verbal.svg",
    variant: "green"
  },
  {
    category: "Visual",
    score: 72,
    icon: "src/assets/images/icon-visual.svg",
    variant: "blue"
  },
];
