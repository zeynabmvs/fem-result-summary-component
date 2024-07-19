import { SummaryItemProps } from "src/data";

const SummaryItem: React.FC<SummaryItemProps> = ({ item }) => {
  return (
    <div
      className={`w-full flex justify-between items-center bg-primary-${item.variant} rounded-xl bg-opacity-5 p-4`}
    >
      <div className="flex gap-2">
        <img src={item.icon} alt="Icon" />
        <h4 className={`text-primary-${item.variant}`}>{item.category}</h4>
      </div>
      <span className="text-n-gray-blue">{item.score}
        <span className="opacity-50"> / 100</span>
      </span>
    </div>
  );
};

export default SummaryItem;
