import { summary, SummaryItemProps } from "../data.ts";
import SummaryItem from "./SummaryItem";

const SummaryResult = () => {
  return (
    <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full md:w-[736px] md:h-[524px] bg-white md:shadow-[0_19px_50px_14px_rgba(0,0,0,0.25)] md:shadow-n-pale-blue md:rounded-[30px]">
      <div
        id="result"
        className="bg-gradient-blue flex flex-col gap-4 md:gap-8 items-center text-center justify-center text-white rounded-b-[30px] md:rounded-[30px]"
      >
        <h1 className="text-2xl opacity-70">Your Result</h1>
        <div className="flex flex-col gap-3 justify-center items-center size-[195px] rounded-full bg-gradient-circle">
          <h2 className="text-6xl font-extrabold">76</h2>
          <p className="opacity-70">of 100</p>
        </div>
        <h2 className="text-[2rem]">Great</h2>
        <p className="opacity-70 w-8/12">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div
        id="summary"
        className="md:rounded-tr-[30px] md:rounded-br-[30px] flex flex-col justify-start gap-4 p-8 md:p-12"
      >
        <h1 className="text-2xl	text-n-gray-blue font-bold">Summary</h1>
        <div className="flex flex-col gap-4 mb-4">
          {summary.map((item: SummaryItemProps, index: number) => (
            <SummaryItem key={index} {...item}></SummaryItem>
          ))}
        </div>

        <button className="group bg-n-gray-blue rounded-full text-white p-4 relative overflow-hidden">
          <span className="relative z-10">Continue</span>
          <span className="absolute inset-0 bg-gradient-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
        </button>
      </div>
    </section>
  );
};

export default SummaryResult;
