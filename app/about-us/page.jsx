import { Services } from "@components/index";
import Hero from "@components/about-us/Hero";
import WhereWeCome from "@components/about-us/WhereWeCome";
import WhoWeAre from "@components/about-us/WhoWeAre";

const AboutUs = () => {
  return (
    <section className="mb-4">
      <Hero />
      <WhoWeAre />
      <WhereWeCome />
      <Services />
    </section>
  );
};

export default AboutUs;
