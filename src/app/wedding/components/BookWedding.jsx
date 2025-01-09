import Link from "next/link";

const BookWedding = () => {
  return (
    <div className="w-full h-full text-center flex flex-col justify-center items-center gap-4 px-3 lg:px-[27rem] py-5 text-casa_8">
      <p className="text-[15px] leading-[22.5px]">{`Celebrate your special day by a ceremony surrounded by nature in our olive groves with views on the mountains. Feast on a farm to fork supper and dance the night away under the stars.`}</p>
      <Link
        href="#"
        className="z-10 bg-casa_8 hover:bg-casa_7 text-casa_1 text-[15px] px-16 py-4 lg:py-7 my-5 lg:mt-20 cursor-pointer transition-all duration-100"
      >
        BOOK YOUR WEDDING
      </Link>
    </div>
  );
};

export default BookWedding;
