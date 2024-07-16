import ArrowedImage from "@components/ArrowedImage";
import { Header } from "@components/index";
import Image from "next/image";

const Services = () => {
  const images = [
    { src: "/assets/image4.png", alt: "image4", width: 1700, height: 300 },
    { src: "/assets/image5.png", alt: "image5", width: 1700, height: 300 },
    { src: "/assets/image6.png", alt: "image6", width: 1700, height: 300 },
    { src: "/assets/image4.png", alt: "image4", width: 1700, height: 300 },
    { src: "/assets/image7.png", alt: "image7", width: 1700, height: 300 },
  ];
  return (
    <section>
      <Header
        title="Categories"
        description="Make Your Dream Come True Today And be one of our best buddies we afford high level treatment for our customers and we provide them with high level Quality services"
      />
      <div className="paddings inner-width">
        <div className="flex-center sm:flex-row flex-col">
          <div className="flex flex-col sm:w-[30%] w-full gap-3">
            <span className="text-3xl md:text-4xl lg:text-5xl font-urbanist font-semibold text-customBlue">
              Variety Of
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-urbanist font-semibold text-customBlue">
              Our Categories
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

        <div className="grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-4 sm:mt-8 mt-4">
          {images.map((image, index) => (
            <div
              className={`relative ${
                index === images.length - 1 ? "sm:col-span-2 col-span-2" : ""
              }`}
              key={index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-contain"
              />
              <ArrowedImage />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
