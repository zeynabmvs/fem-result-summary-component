import { SummaryItemProps } from "../data";

const SummaryItem: React.FC<SummaryItemProps> = ({ category, score, icon, variant }) => {
  const bgColor = `bg-primary-${variant}`
  const textColor = `text-primary-${variant}`

  console.log(bgColor, textColor)

  return (
    <div
      className={`w-full flex justify-between items-center ${bgColor} rounded-xl bg-opacity-5 p-4`}
    >
      <div className="flex gap-2">
        <img src={icon} alt={`${category} icon`} />
        <h4 className={textColor}>{category}</h4>
      </div>
      <span className="text-n-gray-blue">{score}
        <span className="opacity-50"> / 100</span>
      </span>
    </div>
  );
};

export default SummaryItem;
