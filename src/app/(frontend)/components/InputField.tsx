
interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  fieldName: string;
  onChange: (field: string, value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  type = "text",
  fieldName,
  onChange,
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    // Only allow up to 10 digits if the type is 'tel'
    if (type === "tel") {
      newValue = newValue.replace(/\D/g, ""); // Remove non-numeric characters
      newValue = newValue.slice(0, 10); // Limit to 10 digits
    }

    onChange(fieldName, newValue);
  };


  return (
    <div className="mt-4">
      <label className="block text-[13px] leading-[18.69px] font-[600] text-[#05070B] translate-x-3 translate-y-5">
        <span className="bg-[#F8F5E9] p-2">{label}</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={`mt-1 block pt-5 pb-5 px-4 border text-[12px] leading-[18.69px] font-[600] text-[#05070B] border-black rounded-lg focus:ring-black focus:border-black placeholder:text-[10px] w-full bg-[#F8F5E9]`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
