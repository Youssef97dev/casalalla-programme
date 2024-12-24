"use client";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const events = [
  {
    id: 1,
    img_src: "",
    title: "Traditional Christmas Lunch",
    date_: "Wednesday 25th December",
    para_1:
      "HoHoHo! Chef Aniss MEski will be serving up a wonderful Christmas Feast, on festive tablescaped settinga.",
    para_2: "Christmas Sweaters and Festive Attire very much encourages!",
    para_3: "800.00dhs per person",
    book: true,
  },
  {
    id: 2,
    img_src:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ua80x5nvez8bkevotcf9",
    title: "Belle & Bowie Pop Up & Styling Lounge",
    date_: "Saturday 28th December",
    para_1:
      "Founded by former stylist Meriem Khaldi, Belle & Bowie was born in Morocco and inspired by the vibrant energy of the studio 54 era, where Rock & Roll and Disco nights seamlessly blended.",
    para_2:
      "Just in time for New Year's Eve, we'll gather around the latest B&B pieces as Mimi shares her insights on day-to-night styling, offering tips on how to adapt trends and fashion to fit each body type using our current wardrobes.",
    book: false,
  },
  {
    id: 3,
    img_src: "",
    title: "Festive Brunch with DJ ans special guests",
    date_: "Sunday 29th December",
    para_1: "",
    para_2: "",
    book: false,
  },
  {
    id: 4,
    img_src: "",
    title: "New Year Brunch",
    date_: "Wednesday 1st Junuary",
    para_1:
      "If you like to ease your way into the New Year a recovery Bloody MAry or if you prefer to start the new year with a bang on the 1st, our annual New Year Day Brunch is ideal for all. Last year we danced through the sunset and we intend to have another great day to start 2025.",
    para_2: "800.00dhs per person",
    book: true,
  },
];

const Events = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center mt-8 gap-3 text-casa_8 px-2">
      <h1 className="mb-5 text-[34.548px] leading-[42.5631px] lg:text-[60px] lg:leading-[73.92px]">
        Upcoming Events
      </h1>
      <div className="w-full h-full block lg:hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1400}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="swiper w-full h-full"
          id="slider1"
        >
          <div className="swiper-wrapper">
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="w-full flex flex-col justify-center items-start gap-2 px-3">
                  <img
                    src={`https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/izirylze8wxm7adeaewb`}
                    className="w-full h-full object-cover"
                    alt="itemImage"
                  />
                  <h1 className="text-3xl">{event.title}</h1>
                  <h2 className="text-lg mb-3">{event.date_}</h2>
                  <p>{event.para_1}</p>
                  <p>{event.para_2}</p>
                  <p>{event.para_3}</p>
                  {event.book && (
                    <Link
                      href="#"
                      className="bg-casa_8 text-white px-12 py-5 text-[18px] font-medium mt-3"
                    >
                      BOOK
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="w-full h-full hidden lg:block">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          speed={1400}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="swiper w-full h-full"
          id="slider1"
        >
          <div className="swiper-wrapper">
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="w-full flex flex-col justify-center items-start gap-2 px-3 lg:px-8">
                  <img
                    src={`https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/izirylze8wxm7adeaewb`}
                    className="w-full h-full object-cover"
                    alt="itemImage"
                  />
                  <h1 className="text-3xl">{event.title}</h1>
                  <h2 className="text-lg mb-3">{event.date_}</h2>
                  <p>{event.para_1}</p>
                  <p>{event.para_2}</p>
                  <p>{event.para_3}</p>
                  {event.book && (
                    <Link
                      href="/booking"
                      className="bg-casa_8 text-white px-12 py-5 text-[18px] font-medium mt-3"
                    >
                      BOOK
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
