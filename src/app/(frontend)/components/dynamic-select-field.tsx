import Image from "next/image";
import React, { useState } from "react";
import { TypeOfSelectField } from "../types/types";

type TypePageProps = {
  labelTitle: string;
  required: boolean;
  placeholder: string;
  onChange: (selectedId: number | null) => void;
  value: number | null;
  error?: boolean;
  errorMessage?: string;
  dropDownData: TypeOfSelectField[];
};

const DynamicSelectField: React.FC<TypePageProps> = ({
  labelTitle,
  required,
  placeholder,
  onChange,
  value,
  dropDownData,
  error ,
  errorMessage = "This field is required",
}) => {
  const [selectBox, setSelectBox] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter dropdown data based on the search term
  const filteredOptions = dropDownData.filter((el) =>
    el.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-[90%]">
      {/* Label */}
      {labelTitle && (
        <label
          className={`absolute -top-3 left-3 bg-white px-1 font-normal ${
            error ? "text-red-500" : "text-black"
          }`}
        >
          {labelTitle} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Select Box */}
      <div
        className={`border-1 border w-full rounded-lg ${
          error ? "border-red-500" : "border-black"
        }`}
        onClick={() => setSelectBox(true)}
      >
        <p
          className={`${
            value ? "text-black" : "text-inputFieldsPlaceholder"
          } text-sm md:text-base m-1 px-2 py-3`}
        >
          {value
            ? dropDownData?.find((el) => el.id === value)?.name
            : placeholder}
        </p>
      </div>

      {/* Validation Error Message */}
      {error && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}

      {/* Dropdown overlay */}
      <div
        className={`fixed top-0 left-0 bg-[rgba(37,37,37,0.8)] h-screen w-screen z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          selectBox ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSelectBox(false)}
      >
        <div
          className="bg-gray-600 h-[40vh] mx-4 w-full max-w-md rounded-lg overflow-y-auto p-4 flex flex-col items-start gap-4"
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            e.stopPropagation()
          }
        >
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-md text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />

          {/* Dropdown Items */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((el: TypeOfSelectField) => (
              <div key={el?.id} className="w-full flex justify-between">
                <div
                  className={`${
                    value === el?.id
                      ? "bg-white text-gray-600 rounded-md"
                      : "text-white"
                  } w-full flex justify-between px-4 py-1`}
                >
                  <button
                    className="cursor-pointer text-base"
                    onClick={() => {
                      onChange(el?.id);
                      setSelectBox(false);
                      setSearchTerm(""); // Reset search on selection
                    }}
                  >
                    {el?.name}
                  </button>

                  {value === el?.id && (
                    <Image
                      src="/close-icon-black.svg"
                      alt="close-icon"
                      height={20}
                      width={20}
                      className="cursor-pointer"
                      onClick={() => {
                        onChange(null);
                        setSearchTerm("");
                      }}
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center w-full">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicSelectField;
