import { Star } from 'lucide-react';
import React from 'react';

interface NPSRatingProps {
  value: number;
  onChange: (value: number) => void;
  error?: boolean;
  errorMessage?: string;
}

const NPSRating: React.FC<NPSRatingProps> = ({ value, onChange ,error,errorMessage}) => {
  return (
  <>
    <div className="w-full h-[100px] border mt-[30px] rounded-[15.88px] pt-[15.88px] pr-[12.7px] pb-[6.35px] pl-[12.7px] relative">
      <p className="font-[600] text-[13px] leading-[18.69px] text-[#05070B] absolute top-[-8px]">
        <span className="bg-white">NPS Rating <span className="text-red-500">*</span></span>
      </p>
    
      <div className="flex justify-between items-center text-[#05070B] text-[10px] font-[600]">
        <p>Not Willing <br /> At All</p>
        <p>Will Recommend <br /> Right Away</p>
      </div>

      <div className="flex justify-between mt-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => onChange(index + 1)}
          >
            <Star
              stroke="black"
              strokeWidth={1}
              className="w-6 h-6"
              fill={value > index ? "black" : "none"}
            />
          </div>
        ))}
      </div>
   
    </div>
    {error && <p className="text-red-500 mt-2 text-[13px] leading-[18.69px]">{errorMessage}</p>}
  </>
  );
};

export default NPSRating;
