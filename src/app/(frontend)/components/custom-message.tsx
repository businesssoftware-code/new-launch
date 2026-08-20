import React, { useEffect, useState } from 'react';

interface CustomMessageProps {
  label: string;
  rows?: number;
  translateY?: string;
  value?: string;
  onChange?: (value: string) => void;
  reset:boolean;
}

const CustomMessage: React.FC<CustomMessageProps> = ({ 
  label, 
  rows = 2, 
  translateY = "translate-y-5", 
  value = "", 
  onChange,
  reset
}) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);  // Pass the value to the parent component
    }
  };

  useEffect(() => {
    if(reset){
      setInputValue('');
    }
  },[reset])
  return (
    <div className="w-full">
      <label
        htmlFor="message"
        className={`inline-block text-[13px] leading-[18.69px] font-[600] w-[80%] text-[#05070B] translate-x-3 ${translateY}`}
      >
        <span className="bg-white text-[13px] leading-[18.69px] font-[600] text-[#05070B]">
          {label}
        </span>
      </label>
      <textarea
        id="message"
        placeholder="Write in Detail"
        className="mt-2 block w-full text-[13px] leading-[24px] font-[600] text-[#05070B] p-3 border border-[#05070B] rounded-lg placeholder:text-[11px] focus:outline-none focus:ring-2 focus:ring-[#05070B]"
        rows={rows}
        value={inputValue}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default CustomMessage;
