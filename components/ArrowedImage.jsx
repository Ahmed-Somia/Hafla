import Image from "next/image";

const ArrowedImage = () => (
  <div className="border bg-customBlue rounded-full w-[93px] h-[93px] max-w-[93px] max-h-[93px] flex-center flex justify-center items-center absolute bottom-[1%] right-[0%]">
    <Image
      src="/assets/Arrow1.svg"
      alt="arrow"
      width={20}
      height={20}
      priority={true}
      className="w-auto h-auto"
    />
  </div>
);

export default ArrowedImage;
