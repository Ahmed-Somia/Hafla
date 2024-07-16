import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="paddings inner-width">
      <div className="flex-center xl:flex-row flex-col gap-3 mt-16">
        <div className="flex-start flex-col gap-3 xl:w-1/2 w-full">
          <h2 className="font-urbanist font-bold text-customBlue lg:text-[64px] md:text-[50px] text-[30px] lg:leading-[76px] md:leading-[66px] leading-[50px]">
            How We Got Created
          </h2>
          <p className="font-urbanist font-light text-customBlue lg:text-[32px] md:text-[20px] text-[15px] lg:leading-[38px] md:leading-[26px] leading-[16px]">
            Mohamed Chiheb Mouelhi, at the age of 23, founded the startup Hafla
            based on his personal experience organizing events. Faced with
            numerous challenges during his own event planning endeavors, Chiheb
            recognized a clear need in the market for a streamlined solution.
            This realization sparked the creation of Hafla, aimed at
            revolutionizing event management and providing a seamless platform
            for organizers.
          </p>
        </div>
        <Image
          src="/assets/image9.png"
          alt="whoweAre-image"
          width={850}
          height={464}
          priority={true}
          className="w-full h-full object-contain xl:w-1/2 xl:mt-0 mt-6"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
