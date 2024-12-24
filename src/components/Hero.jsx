import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-[url('https://res.cloudinary.com/dz7wroord/image/upload/ar_9:16,c_crop/casalalla-v2/faynmvyht1juvuvkasun')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row-reverse justify-start lg:justify-between items-center gap-8 lg:gap-24 px-5 lg:px-32 py-5 lg:py-28">
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/dsbquilbyrciyvbfz9uk"
        height={1000}
        width={500}
        className="object-cover mt-32"
      />
      <div className="w-full flex flex-col justify-center items-start text-casa_1 pb-3">
        <h1 className="mb-5 lg:mb-10 text-[34.548px] leading-[42.5631px] lg:text-[60px] lg:leading-[73.92px]">{`Programming`}</h1>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {`Expanding upon the idea of a cabinet of curiosities, the Casa lalla takerkoust becomes a resoundingly ‘live space.’ The carefully curated, ever-evolving programme places fun and inspiration at the forefront, showcasing music, art, design, and ceremony to spark ongoing cultural encounters and conversations.`}
        </p>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {`A natural evolution from the founders’ two decades of experience and expertise helming Boutique Souk, this more permanent footing in Marrakech’s outlying countryside sets the scene for more profound expressions of creative hospitality.`}
        </p>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {`From intimate rooftop concerts staged at sunset, to private, site-specific installations guided by artists, and nocturnal Celtic-ancestry-informed ceremonies, the dynamic year-round programme activates the property like an experiential canvas.`}
        </p>
      </div>
    </div>
  );
};

export default Hero;
