import React from "react";
import { UnderLine } from "./common/Icons";

const TeamMeat = () => {
  return (
    <section className="relative py-24">
      <div className="sm:bg-wheat bg-transparent w-full h-[286px] ">
        <div className="max-w-[1166px] mx-auto px-4">
          <div className="flex flex-wrap absolute top-16 items-center">
            <div className="sm:w-1/2 w-full">
              <div className="flex">
                <img src="/images/businessmeeting.png" alt="" />
              </div>
            </div>
            <div className="space-y-7 sm:w-1/2 w-full justify-center">
              <p className="font-normal text-lg font-quattrocento sm:pt-0 pt-4">
                What you need is a team to support you with <b>all of it.</b>{" "}
                Want to meet the people behind the strategy and the numbers?
              </p>
              <h2 className="pb-2 flex flex-col font-bold text-lg text-midnight font-montserrat tracking-20p relative group capitalize">
                meet the team
                <span>
                  <UnderLine className="h-[6px] w-[185px]" />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMeat;
