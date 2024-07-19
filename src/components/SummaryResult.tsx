import { summary, SummaryItemProps } from "../data.ts";
import SummaryItem from "./SummaryItem";

const SummaryResult = () => {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:w-[736px] md:h-[524px] bg-white md:shadow-[0_19px_50px_14px_rgba(0,0,0,0.25)] md:shadow-n-pale-blue md:rounded-[30px]">
      <div
        id="result"
        className="bg-gradient-blue flex flex-col gap-4 md:gap-8 items-center text-center justify-center text-white rounded-b-[30px] md:rounded-[30px]"
      >
        <h2 className="text-2xl opacity-50">Your Result</h2>
        <div className="flex flex-col gap-3 justify-center items-center size-[173px] rounded-full bg-gradient-circle">
          <h3 className="text-6xl font-extrabold">76</h3>
          <p className="opacity-50">of 100</p>
        </div>
        <h3 className="text-[2rem]">Great</h3>
        <p className="opacity-50 w-8/12">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div
        id="summary"
        className="md:rounded-tr-[30px] md:rounded-br-[30px] flex flex-col justify-start gap-4 p-8 md:p-12"
      >
        <h2 className="text-2xl	text-n-gray-blue font-bold">Summary</h2>
        <div className="flex flex-col gap-4">
          {summary.map((item: SummaryItemProps, index: number) => (
            <SummaryItem key={index} {...item}></SummaryItem>
          ))}
        </div>

        <button className="bg-n-gray-blue rounded-full text-white p-4">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SummaryResult;
