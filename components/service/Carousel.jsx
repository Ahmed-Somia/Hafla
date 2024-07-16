import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const Carrousel = () => {
  const images = ["image14", "image15", "image16", "image14", "image15"];

  return (
    <div className="bg-customBlue w-full rounded-b-3xl flex justify-center items-center paddings relative">
      <div className="flex-center h-[50%] z-10 mt-20">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center"
              >
                <div className="p-1">
                  <Image
                    src={`/assets/${image}.png`}
                    alt={image}
                    width={827}
                    height={429}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="xl:left-40 left-5 !important lg:flex hidden" />
          <CarouselNext className="xl:right-40 right-5 !important lg:flex hidden" />
        </Carousel>
      </div>
    </div>
  );
};

export default Carrousel;
