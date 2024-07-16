import Image from "next/image";

const BlogCard = ({ src, alt, title }) => {
  return (
    <div className="relative max-w-[416px] max-h-[841px] overflow-hidden rounded-3xl shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={416}
        height={841}
        className="w-full h-full object-contain"
      />
      <div className="absolute bottom-0 w-full bg-white bg-opacity-40 backdrop-blur-sm text-white p-4 border border-white flex items-center justify-between rounded-b-3xl">
        <h2 className="m-0 xl:text-lg lg:text-base md:text-sm text-xs font-normal">
          {title}
        </h2>
        <Image
          src="/assets/cardArrow.svg"
          alt="cardArrow"
          height={8}
          width={8}
        />
      </div>
    </div>
  );
};

export default BlogCard;
