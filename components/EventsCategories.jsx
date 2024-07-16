import Image from "next/image";

const EventsCategories = () => {
  return (
    <section className="paddings inner-width">
      <div className="w-full relative">
        <div className="absolute top-[0%] right-[3%] flex flex-col gap-2">
          <span className="xl:text-5xl lg:text-[45px] font-urbanist font-bold text-customBlue pl-12">
            Variety of Our
          </span>

          <span className="xl:text-5xl lg:text-[45px] top-[11%] font-urbanist font-bold text-customBlue">
            Events Categories
          </span>
        </div>
        <div className="relative">
          <Image
            src="/assets/eventCategorie.png"
            alt="event-image"
            width={1700}
            height={300}
            priority={true}
            className="w-full sm:h-full object-contain hidden sm:block"
          />

          <Image
            src="/assets/eventCategorieMobile.png"
            alt="event-image"
            width={1700}
            height={750}
            priority={true}
            className="w-full sm:h-full object-contain block sm:hidden"
          />

          <div className="absolute w-[261px] h-[52px] flex sm:flex-row flex-col gap-2 bottom-[0%] left-[16%] pt-2">
            <Image
              src="/assets/arrowLeft.svg"
              alt="arrowLeft"
              width={97}
              height={97}
              priority={true}
              className="pt-2"
            />
            <Image
              src="/assets/arrowRight.svg"
              alt="arrowRight"
              width={97}
              height={97}
              priority={true}
              className="pt-2"
            />
          </div>

          <h3 className="absolute bottom-[0%] right-[3%] font-urbanist font-extrabold text-customGray text-[75px]">
            Weddings
          </h3>

          <p className="absolute left-[3%] top-[13%] font-urbanist font-medium text-customGray text-[20px] leading-[30px]">
            Make Your Dream <br />
            Come True Today
          </p>

          <button className="absolute left-[3%] top-[6.5%] rounded-full border border-customGray bg-transparent py-1 px-5 text-customGray transition-all hover:bg-customBlue hover:text-white text-center font-urbanist text-[12px] font-light flex items-center justify-center">
            Let’s Do It!
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsCategories;
