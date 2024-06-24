import React from "react";
import { UnderLine } from "./common/Icons";
import BanifitSupport from "./BanifitSupport";

const GetStarted = () => {
  return (
    <>
      <section className="max-w-[1164px] w-full mx-auto px-4 space-y-6">
        <div className="flex gap-4 md:flex-row flex-col items-center ">
          <div className="sm:w-1/2 w-full">
            <img src="/images/fistbump.png" alt="" />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-7">
              <h1 className="heading">
                This is what we do 24/7 and man,{" "}
                <span className="bg-coral px-1">we love it.</span>
              </h1>
              <p className="sm:text-lg text-sm font-normal text-midnight font-quattrocento">
                Are you ready? Because we are. 
              </p>
              <a className="pb-2 flex flex-col font-bold sm:text-lg text-sm text-midnight font-montserrat tracking-20p relative group">
                Get started{" "}
                <span>
                  <UnderLine className="h-[6px] w-[130px]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
