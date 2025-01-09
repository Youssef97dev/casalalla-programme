import Image from "next/image";
import Accordion from "./Accordion";

const MenuWedding = () => {
  return (
    <div className="w-full h-full bg-casa_6 flex justify-center items-center p-28 gap-5">
      <div className="h-full w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/L-21_j3dlgx"
          height={2250}
          width={1500}
          className="object-cover w-full h-screen"
        />
      </div>
      <div className="h-full w-full flex flex-col justify-start items-center gap-4 text-center text-casa_1 px-3 lg:px-28">
        <h1 className="my-2 lg:my-10 text-[21.51px] lg:text-[30px] leading-[28.91px] lg:leading-[40.32px]">
          {`W E D D I N G`} <br />
          <br /> {`S A M P L E  M E N U S`}
        </h1>
        <Accordion />
      </div>
    </div>
  );
};

export default MenuWedding;
