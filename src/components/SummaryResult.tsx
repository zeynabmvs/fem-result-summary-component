import { summary, SummaryItemProps } from "src/data.ts";
import SummaryItem from "components/SummaryItem"

const SummaryResult = () => {
    return (
    <div className="grid grid-cols-2 w-[736px] h-[524px] bg-white shadow-[0_19px_50px_14px_rgba(0,0,0,0.25)] shadow-n-pale-blue rounded-[30px]">
      <div
        id="result"
        className="bg-gradient-blue flex flex-col gap-8 items-center  text-center justify-center text-white rounded-[30px]"
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
        className="rounded-tr-[30px] rounded-br-[30px] flex flex-col justify-start gap-4 p-12"
      >
        <h2 className="text-2xl	text-n-gray-blue">Summary</h2>
        <div className="flex flex-col gap-4">
        {summary.map((item:SummaryItemProps, index: number) => (
          <SummaryItem key={index} item={item}></SummaryItem>
        ))}
        </div>

        <button className="bg-n-gray-blue rounded-full text-white p-4">Continue</button>
       
      </div>
    </div>
  );
};

export default SummaryResult;
