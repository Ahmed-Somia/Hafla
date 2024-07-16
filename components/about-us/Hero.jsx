import Image from "next/image";

const Hero = () => {
  return (
    <section className="paddings inner-width relative md:mt-12 lg:mt-5 xl:mt-0">
      <div className="w-full relative">
        <Image
          src="/assets/image8.png"
          alt="main-image"
          width={1700}
          height={300}
          priority={true}
          className="w-full sm:h-full -z-[1] object-contain hidden sm:block"
        />
        <span className="text-customBlue xl:text-[140px] xl:leading-[190px] lg:text-[120px] lg:leading-[150px] md:text-[80px] md:leading-[120px] font-urbanist font-bold absolute right-[25%] bottom-[40%]">
          About Us
        </span>
        {/* <Image
            src="/assets/image3.png"
            alt="main-image"
            width={1700}
            height={750}
            priority={true}
            className="w-full sm:h-full object-contain block sm:hidden"
          /> */}

        <p className="flex flex-col text-customBlue xl:text-[50px] lg:text-[35px] md:text-[25px] font-urbanist font-bold xl:leading-[67px] lg:leading-[40px] md:leading-[30px] absolute xl:top-[10%] lg:top-[12%] md:top-[10%] xl:right-[1.5%] lg:right-[1%] md:right-[1.2%] text-start">
          <span>Swing Into</span>
          <span>Our Categories</span>
        </p>

        <span className="text-customBlue xl:text-[140px] lg:text-[100px] md:text-[80px] font-urbanist font-bold xl:leading-[192px] lg:leading-[150px] md:leading-[120px] absolute xl:bottom-[8%] lg:bottom-[6%] md:bottom-[4%] lg:left-[7%] md:left-[5%]">
          Who
        </span>
        <span className="text-customBlue xl:text-[100px] lg:text-[75px] md:text-[50px] font-urbanist font-normal xl:leading-[144px] lg:leading-[100px] md:leading-[80px] absolute xl:bottom-[-5%] lg:bottom-[-4.5%] md:bottom-[-4.8%] xl:left-[15%] lg:left-[13%] md:left-[16%]">
          Are We?
        </span>
      </div>
    </section>
  );
};

export default Hero;
