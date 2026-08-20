import { Check } from 'lucide-react';
import React from 'react';

interface StepTrackerProps {
  currentStep: number;
}
const StepTracker:React.FC<StepTrackerProps> = ({currentStep}) => {
  return (
    <div className="flex w-full justify-around items-center font-dm-sans">
      {/* Step 1 */}
      <div className="flex flex-col items-start gap-1">
        <div className={`flex justify-center items-center w-[50px] h-[50px] text-[11.46px] font-[700] leading-[15.46px] ${currentStep === 1 ? 'bg-[#05070B]' : 'bg-[#7CC810]'} text-[#FFFFFF] font-bold rounded-full shadow-md`}>
        {currentStep === 1 ? "01" : <Check color='black'/>}
        </div>
        <p className="text-[8.19px] text-[#545454] font-[700] leading-[15.46px]">STEP 01</p>
        <p className="text-[9.82px] font-[700] text-[#05070B] leading-[15.46px]">Outlet Details</p>
      </div>

      {/* Dashed Line */}
      <div className="w-[40%] border-t-2 border-dashed border-[#05070B] absolute top-[105px] z-5 "></div>

      {/* Step 2 */}
      <div className="flex flex-col items-end gap-1">
        <div  className={`flex justify-center items-center w-[50px] h-[50px] text-[11.46px] font-[700] leading-[15.46px] ${currentStep === 2 ? 'bg-[#05070B]' : 'bg-[#A19E9E] text-[#05070B]'}  font-bold rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}>
          02
        </div>
        <p className="text-[8.19px] text-[#545454] font-[700] leading-[15.46px]">STEP 02</p>
        <p className="text-[9.82px] font-[700] text-[#05070B] leading-[15.46px]">Customer Review</p>
      </div>
    </div>
  );
};

export default StepTracker;
