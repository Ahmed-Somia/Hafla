import ArrowedImage from "@components/ArrowedImage";
import Image from "next/image";

const Services = () => {
  const images = [
    { src: "/assets/image4.png", alt: "image4", width: 1700, height: 300 },
    { src: "/assets/image5.png", alt: "image5", width: 1700, height: 300 },
    { src: "/assets/image6.png", alt: "image6", width: 1700, height: 300 },
  ];
  return (
    <section className="paddings inner-width">
      <div className="flex-center sm:flex-row flex-col">
        <div className="flex flex-col sm:w-[30%] w-full gap-3">
          <span className="text-3xl md:text-4xl lg:text-5xl font-urbanist font-semibold text-customBlue">
            Variety Of
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl font-urbanist font-semibold text-customBlue">
            Our Services
          </span>
        </div>
        <div className="flex flex-wrap gap-1 sm:h-[50px] sm:w-[70%] w-full xl:pt-6">
          <div className="flex gap-2">
            <button className="blue_btn">Decorating</button>
            <button className="outline_btn">Organizing</button>
            <button className="outline_btn">Beverage & Food</button>
          </div>
          <div className="flex gap-2">
            <button className="outline_btn">Dressing & Makup</button>
            <button className="outline_btn">Photography</button>
            <button className="outline_btn">Booking</button>
          </div>
        </div>
      </div>

      <div className="flex-center sm:flex-row flex-col gap-2 sm:mt-8 mt-4">
        {images.map((image, index) => (
          <div className="relative" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full sm:h-full -z-[1] object-contain"
            />
            <ArrowedImage />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
