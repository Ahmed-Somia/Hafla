import Image from "next/image";

const CTA = () => {
  return (
    <section className="paddings inner-width">
      <div className="w-full flex sm:flex-row flex-col gap-4 relative">
        <div className="flex-start flex-col gap-4 flex-[0.75]">
          <Image
            src="/assets/ctaImage1.png"
            alt="ctaImage1"
            width={500}
            height={401}
            className="w-full"
          />

          <button className="outline_btn">Dream Event</button>
          <p className="font-urbanist text-customBlue font-normal text-[25px] leading-8">
            We organize with care
            <br />
            BUILDING BETTER LIFE
          </p>
        </div>

        <div className="relative flex-[1.5] w-full">
          <Image
            src="/assets/ctaImage2.png"
            alt="ctaImage2"
            width={1700}
            height={300}
            priority={true}
            className="w-full object-contain"
          />
          <button className="outline_btn absolute left-[0%] bottom-[22%]">
            Our Team
          </button>
          <span className="absolute left-[0%] bottom-[13%] font-urbanist text-customBlue font-semibold text-[45px] leading-8">
            Great Team of
          </span>
          <span className="absolute left-[3%] bottom-[3%] font-urbanist text-customBlue font-semibold text-[45px] leading-8">
            Experts
          </span>
        </div>

        <div className="flex items-start justify-end flex-col gap-4 flex-[0.75]">
          <button className="outline_btn">Booking Services</button>
          <p className="font-urbanist text-customBlue font-semibold text-[25px] leading-[35px]">
            We are calobariting
            <br />
            with tunis’s best spaces
          </p>
          <Image
            src="/assets/ctaImage3.png"
            alt="ctaImage3"
            width={455}
            height={401}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
