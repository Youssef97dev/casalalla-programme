import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-full lg:h-[120vh] flex justify-center items-center">
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/e_improve:outdoor/c_crop,g_center,h_2080,w_4160/casalalla-v2/e28ypfnpoadluzx8wtsy"
        height={500}
        width={1600}
        className="object-cover w-full"
      />
      <div className="absolute inset-0 bg-casa_1 opacity-10"></div>
      <div className="absolute w-full h-full flex justify-center top-60 text-casa_1 text-[78px] leading-[90px]">
        WEDDINGS
      </div>
    </div>
  );
};

export default Hero;
