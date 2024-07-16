const Header = ({ title, description }) => {
  return (
    <div className="bg-customBlue w-full rounded-b-3xl md:h-[394px] h-[223px] flex justify-center items-center">
      {title && description ? (
        <div className="flex flex-col w-[80%] justify-center items-start gap-3 p-6 md:mt-10 mt-24">
          <h1 className="text-white md:text-[64px] text-[32px] md:leading-[76px] leading-[38px] font-semibold font-urbanist">
            {title}
          </h1>
          <p className="text-white md:text-[24px] text-[12px] md:leading-[28px] leading-[14px] font-normal font-urbanist">
            {description}
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full">
          <h1 className="text-white md:text-[128px] text-[64px] md:leading-[156px] leading-[78px] font-bold font-urbanist text-center">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Header;
