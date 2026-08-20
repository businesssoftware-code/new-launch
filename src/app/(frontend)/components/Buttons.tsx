interface ButtonsProps {
  onNext: () => void;
  onClear: () => void;
  isDisabled?: boolean;
  isSubmitting?: boolean;
}

const Buttons: React.FC<ButtonsProps> = ({
  onNext,
  onClear,
  isDisabled = false,
  isSubmitting = false,
}) => {
  return (
    <div className="pt-3 w-[100vw] m-auto flex justify-center gap-5 pb-5 bg-[#F8F5E9]">
      <button
        type="button"
        onClick={onClear}
        className="w-[40%] rounded-[11.71px] h-[46.84px] flex items-center justify-center text-black"
      >
        Clear Form
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isDisabled || isSubmitting}
        className={`w-[40%] rounded-[11.71px] h-[46.84px] text-white flex items-center justify-center ${
          isDisabled || isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default Buttons;