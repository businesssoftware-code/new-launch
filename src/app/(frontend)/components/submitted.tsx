"use client";

import React from "react";
import { ResultProps } from "../types/types";

interface SubmittedProps {
  result: ResultProps;
  startFresh: () => void;
  anotherReview: () => void;
}

const Submitted: React.FC<SubmittedProps> = ({
  result,
  startFresh,
  anotherReview,
}) => {
  const { customerName } = result;

  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <div className="bg-white w-full rounded-[40px] p-8 flex flex-col items-center justify-evenly text-[#05070B]">
        <div className="flex flex-col justify-center gap-5 items-center text-center">
          <h1 className="text-[20px] font-bold">
            Thank you{customerName ? `, ${customerName}` : ""}!
          </h1>

          <p className="text-[18px] font-semibold w-[80%]">
            Your sampling form has been submitted successfully.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 w-full mt-8">
          <button
            onClick={anotherReview}
            className="w-[90%] rounded-[10.9px] bg-[#05070B] text-white py-3 text-[14px] font-bold"
          >
            Fill Another Sampling Form
          </button>

          <button
            onClick={startFresh}
            className="w-[90%] rounded-[10.9px] border border-[#05070B] py-3 text-[14px] font-bold text-[#05070B]"
          >
            Start Fresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submitted;