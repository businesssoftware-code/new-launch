import React from 'react'

const InputText = () => {
  return (
    <div>
       <label
            htmlFor="name"
            className="block text-base font-medium text-gray-700 translate-x-3 translate-y-5"
          >
            <span className="bg-white p-2">
              Feedback Person Name <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className={`mt-1 block w-[350px] pt-5 pb-5 px-4 border text-black border-black rounded-lg focus:ring-black focus:border-black placeholder:text-[10px]`}
          />
    </div>
  )
}

export default InputText