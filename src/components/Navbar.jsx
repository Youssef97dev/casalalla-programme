"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 top-0 z-20 w-full flex flex-row justify-between items-center uppercase px-4 lg:px-10 border-b border-casa_5 bg-casa_2">
        <ul className="w-full lg:flex justify-start items-center gap-8 text-[13.5px] leading-[20.25px] text-casa_6 hidden">
          <li>
            <Link href="https://casalallatakerkoust.com/">Home</Link>
          </li>
          <li>
            <Link href="https://casalallatakerkoust.com/about/">About</Link>
          </li>
          <li>
            <Link href="#">Day pass</Link>
          </li>
        </ul>
        <div className="w-full flex lg:justify-center justify-start items-center">
          <Image
            src="/logo-1.png"
            width={150}
            height={150}
            className="cursor-pointer w-28 h-28 lg:w-36 lg:h-36"
          />
        </div>
        <div className="w-full flex justify-end items-center">
          <Link
            href="/booking"
            className="bg-casa_5 hover:bg-casa_6 text-white px-10 py-5 text-xs hidden lg:block"
          >
            Book Now
          </Link>
          <div
            className="text-primary_11 block lg:hidden  transition-transform duration-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <AiOutlineClose
                size={30}
                className="transform transition-transform duration-500 rotate-180"
              />
            ) : (
              <CiMenuBurger
                size={30}
                className="transform transition-transform duration-300 rotate-0"
              />
            )}
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
        <div className="fixed top-10 right-0 z-10 w-full h-screen bg-casa_2 flex flex-col items-center justify-between">
          <ul className="space-y-5 text-center text-casa_6 leading-[27.88px] text-[30px] mt-44">
            <li>
              <Link href="https://casalallatakerkoust.com/">HOME</Link>
            </li>
            <li>
              <Link href="https://casalallatakerkoust.com/about/">ABOUT</Link>
            </li>
            <li>
              <Link href="#">DAY PASS</Link>
            </li>
          </ul>
          <Link
            href="/booking"
            className="bg-casa_6 fixed bottom-14 text-white px-7 py-4 text-[18px] font-medium"
          >
            Book Now
          </Link>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
