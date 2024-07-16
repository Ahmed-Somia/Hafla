import BlogCard from "@components/blog/BlogCard";
import { Header } from "@components/index";

const blog = () => {
  const images = [
    { src: "/assets/image13.png", alt: "image13", title: "New Space In Town" },
    {
      src: "/assets/image13.png",
      alt: "image13",
      title: "Fair Ground Is Back",
    },
    {
      src: "/assets/image13.png",
      alt: "image13",
      title: "New Beach Party Concept",
    },
    {
      src: "/assets/image13.png",
      alt: "image13",
      title: "New Way Of Decoration",
    },
  ];

  return (
    <section>
      <Header
        title="Blog"
        description="Lorem ipsum dolor sit amet consectetur. Sed in habitant aliquam odio. Hendrerit adipiscing vel lectus phasellus gravida amet. Ornare arcu in tincidunt massa tincidunt. Arcu arcu amet maecenas aenean rhoncus sit. Neque malesuada urna nibh."
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 sm:mt-8 mt-4 paddings inner-width">
        {images.map((image, index) => (
          <BlogCard
            src={image.src}
            alt={image.alt}
            title={image.title}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default blog;
