import React, { useState } from 'react';
import { TypeOfCheckField } from '../types/types';
import CustomMessage from './custom-message';

interface CustomCheckboxProps {
  question: string;
  data: TypeOfCheckField[];
  items: string[];
  onChange: (selected: string[] | string) => void;
  reset?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ question, data, items = [], onChange,reset ,error,errorMessage}) => {
  const [otherInput, setOtherInput] = useState<string>(''); // State for "Other" input

  // Handle checkbox selection logic
  const handleSelection = (itemName: string) => {
    const updatedSelection = items.includes(itemName)
      ? items.filter((item) => item !== itemName) // Remove if already selected
      : [...items, itemName]; // Add if not selected

    onChange(updatedSelection); // Notify parent about the change
  };

  // Handle "Other" input change
  const handleOtherChange = (value: string) => {
    setOtherInput(value);

    // Update parent component with 'Other: value'
    const updatedItems = items.filter((item) => !item.startsWith('Other:'));
    if (value.trim()) {
      updatedItems.push(`Other: ${value}`);
    }
    onChange(updatedItems);
  };

  return (
    <div className="mt-4">
      <p className="font-[600] text-[13px] leading-[18.69px] text-[#05070B]">
        {question}
        <span className="text-red-500">*</span>
      </p>
      {error && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}

      <div className="grid grid-cols-2 w-full gap-[8px] mt-2">
        {data.map((item: TypeOfCheckField) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center items-center rounded-[9.35px] gap-2 border p-3 cursor-pointer 
              ${items.includes(item.name) ? 'border-black bg-gray-100' : 'border-gray-300'}`}
            onClick={() => handleSelection(item.name)}
          >
 <div className="w-8 h-8 flex justify-center items-center">
              {item.icon && <item.icon size={30} color={items.includes(item.name) ? "black" : "gray"} />}
            </div>            <p className={`text-[12px] text-center font-[600] ${items.includes(item.name) ? 'text-black' : 'text-gray-500'}`}>
              {item.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CustomCheckbox;
