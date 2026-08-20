interface RootLayoutProps {
  children: React.ReactNode;
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  isExpanded,
  setIsExpanded,
}) => {
  return (
    <div
      id="drawer-container"
      className={`fixed bottom-0 left-0 w-full bg-[#F8F5E9] rounded-t-[40px] shadow-lg transition-all duration-500 ease-in-out
        ${isExpanded ? "h-[90vh]" : "h-[70vh]"} max-h-[90vh] overflow-y-auto`}
    >
      {/* Sticky Header */}
      <div className="sticky top-0 bg-[#F8F5E9] z-10 p-4">
        <div
          className="w-[20%] h-1 bg-[#F8F5E9] mx-auto rounded-full mb-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <h2 className="text-xl text-black font-semibold text-center font-jakarta mb-2">
          Welcome to Basil! 👋
        </h2>
        <p className="text-sm text-black font-semibold text-center font-jakarta">
          Real food. Complete transparency. No added sugar. No preservatives.
          Every ingredient is listed on our menu because we believe you should
          always know what's going into your food.
        </p>
        <p className="text-sm text-black font-semibold text-center font-jakarta">
          We'd love to know what you think! It takes less than a minute.
        </p>
      </div>

      {children}
    </div>
  );
};

export default RootLayout;
