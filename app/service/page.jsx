import Carrousel from "@components/service/Carousel";
import Map from "@components/service/Map";
import ServiceCalendar from "@components/service/ServiceCalendar";

const Service = () => {
  return (
    <section className="inner-width paddings">
      <Carrousel />
      <div className="w-full flex xl:flex-row flex-col gap-4 mt-4">
        <ServiceCalendar />
        <Map />
      </div>
    </section>
  );
};

export default Service;
