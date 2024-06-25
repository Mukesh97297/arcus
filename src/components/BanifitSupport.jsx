"use client";
import React from "react";
import { useState } from "react";
import { banifititems } from "./common/Helper";

const BanifitSupport = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="max-w-[912px] w-full mx-auto space-y-12">
      <div className="w-full max-w-[871px] mx-auto">
        <h1 className="heading text-center">
          Benefit from support rooted in trust, communication, and the total
          belief <span className="px-1 bg-skyblue">you’ve got</span> what it
          takes.
        </h1>
      </div>
      <div className="relative flex items-center justify-center max-h-[521px] w-full h-full">
        <span className="bg-coral h-14 w-6 absolute top-14 lg:block hidden -z-30 -left-4"></span>
        <img
          src="/images/imagery.png"
          alt="Hero Background"
          className="object-cover h-full w-full"
        />
        <div className="absolute z-10 py-9 px-4 grid h-full overflow-y-auto">
          {banifititems.map((item, index) => (
            <div className="flex md:gap-7 gap-4 items-center mb-2" key={index}>
              <h1 className="text-coral sm:text-[65px] text-2xl font-bold font-montserrat">
                {item.number}
              </h1>
              <p
                className={`p-2 ${
                  activeIndex === index
                    ? "bg-white max-w-[440px] w-full bg-opacity-10"
                    : ""
                } text-wheat sm:text-lg text-xs font-bold font-quattrocento cursor-pointer`}
                onClick={() => setActiveIndex(index)}
              >
                {item.heading}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[831px] mx-auto justify-center">
        <p className="font-normal sm:text-lg text-sm text-midnight text-center font-quattrocento">
          In a nutshell? We{`'`}re advisors and business coaches who love
          strategy, a good plan, and watching our clients hit their targets and
          goals. We can also assist with your accounting, your projects, and all
          of the financial obligations that come with running a business.
        </p>
      </div>
    </section>
  );
};

export default BanifitSupport;
