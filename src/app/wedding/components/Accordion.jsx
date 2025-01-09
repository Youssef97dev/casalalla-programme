"use client";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = () => {
  const [active, setActive] = useState("1");
  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <div className="w-full">
      <div className=" font-normal text-casa_1">
        <div className="border-t  border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[13.5px]`}
            onClick={() => togglePara("1")}
          >
            {`R E C E P T I O N`}
            <div className={`ml-auto`}>
              {active === "1" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-b border-[#d3d3d3]">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[13.5px]`}
            onClick={() => togglePara("2")}
          >
            {`C A N A P É`}
            <div className={`ml-auto`}>
              {active === "2" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "2" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-b border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[13.5px]`}
            onClick={() => togglePara("3")}
          >
            {`C O C K T A I L S`}
            <div className={`ml-auto`}>
              {active === "3" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "3" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
