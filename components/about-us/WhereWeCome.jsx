import Image from "next/image";

const WhereWeCome = () => {
  return (
    <section className="inner-width">
      <div className="w-full mt-10">
        <Image
          src="/assets/image12.png"
          alt="wherewecome-image"
          width={1699}
          height={776}
          priority={true}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default WhereWeCome;
