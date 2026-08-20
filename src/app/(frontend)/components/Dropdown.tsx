import React from "react";

interface DropdownProps{
    name:string;
}
const Dropdown:React.FC<DropdownProps> = ({name}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-base font-medium text-gray-700 translate-x-3 translate-y-5"
      >
        <span className="bg-white p-2">
         {name} <span className="text-red-500">*</span>
        </span>
      </label>
      <select
        className={`mt-1 block w-[350px] pt-5 pb-5 px-4 border text-black border-black rounded-lg focus:ring-black focus:border-black placeholder:text-[10px]`}
        name={name}
        id={name}
      >
        <option value="">Select outlet</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
    </div>
  );
};

export default Dropdown;
