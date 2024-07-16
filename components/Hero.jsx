import Image from "next/image";
import ArrowedImage from "@components/ArrowedImage";

const Hero = () => {
  return (
    <section className="paddings inner-width">
      <div className="w-full relative sm:flex-none flex flex-col gap-3">
        <div className="relative">
          <Image
            src="/assets/image1.png"
            alt="main-image"
            width={1700}
            height={300}
            priority={true}
            className="w-full sm:h-full -z-[1] object-contain hidden sm:block"
          />

          <Image
            src="/assets/image3.png"
            alt="main-image"
            width={1700}
            height={750}
            priority={true}
            className="w-full sm:h-full object-contain block sm:hidden"
          />

          <button className="rounded-full border border-customBlue bg-transparent py-2 px-5 text-customBlue transition-all hover:bg-customBlue hover:text-white text-center font-urbanist flex items-center justify-center xl:text-3xl md:text-xl sm:text-sm text-2xl leading-tight absolute sm:left-[3%] left-[6%] sm:top-[8%] top-[9%]">
            Dream Event
          </button>
          <span className="absolute sm:left-[3%] left-[6%] sm:top-[21%] top-[18%] font-urbanist font-bold xl:text-7xl lg:text-6xl md:text-5xl text-3xl leading-tight text-customBlue">
            Make Your Dream
          </span>
          <span className="absolute sm:left-[3%] left-[6%] sm:top-[34%] top-[24%] font-urbanist font-bold xl:text-7xl lg:text-6xl md:text-5xl text-3xl leading-tight text-customBlue">
            Come True Today
          </span>
          <span className="absolute sm:left-[0%] left-[6%] sm:bottom-[15%] bottom-[47%] font-urbanist font-bold text-6xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl leading-tight text-customBlue">
            Modern
          </span>
          <span className="absolute sm:left-[0%] left-[6%] sm:bottom-[0%] bottom-[35%] font-urbanist font-bold text-6xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl leading-tight text-customBlue">
            Weddings
          </span>
          <button className="rounded-full border border-customBlue bg-transparent sm:py-1.5 sm:px-3 py-3 px-5 text-customBlue transition-all hover:bg-customBlue hover:text-white text-center font-urbanist flex items-center justify-center xl:text-2xl lg:text-xl md:text-base sm:text-xs text-2xl leading-tight absolute sm:left-[0%] left-[6%] sm:bottom-[30%] bottom-[60%] xl-bottom[31%]">
            Live Dream
          </button>
        </div>
        <div className="sm:absolute sm:top-[0%] sm:right-[0%] sm:h-[47%] sm:-z-[1] relative">
          <Image
            src="/assets/image2.png"
            alt="main-image2"
            width={350}
            height={350}
            className="w-full h-full"
          />
          <ArrowedImage />
          <button className="rounded-full border border-white bg-transparent sm:py-1 sm:px-3 py-2 px-5 text-white transition-all hover:bg-customBlue hover:text-customBlue text-center font-urbanist flex items-center justify-center xl:text-2xl lg:text-xl md:text-base sm:text-sm text-base leading-tight absolute sm:left-[3%] left-[6%] sm:top-[5%] top-[8%]">
            Services
          </button>
          <span className="text-white font-urbanist font-light xl:text-2xl lg:text-xl md:text-lg sm:text-base text-3xl leading-tight absolute sm:left-[3%] left-[6%] top-[25%]">
            Become Your
          </span>
          <span className="uppercase text-white font-urbanist font-light xl:text-2xl lg:text-xl md:text-base sm:text-sm text-2xl leading-tight absolute sm:left-[3%] left-[6%] top-[38%] md:top-[35%] sm:top-[40%]">
            own event planner
          </span>
          <span className="text-white font-urbanist font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-base text-3xl leading-tight absolute sm:left-[3%] left-[6%] md:bottom-[40%] sm:bottom-[32%] bottom-[35%]">
            Enter in the
          </span>
          <span className="text-white font-urbanist font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-base text-3xl leading-tight absolute sm:left-[3%] left-[6%] md:bottom-[25%] sm:bottom-[20%] bottom-[25%]">
            organizing world
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
