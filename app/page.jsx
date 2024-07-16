import { EventsCategories, Hero, Services, CTA } from "@components/index";

const Home = () => {
  return (
    <section className="mt-24 mb-4">
      <Hero />
      <Services />
      <EventsCategories />
      <CTA />
    </section>
  );
};

export default Home;
