import React from "react";
import { RightArrowIcon, UnderLine } from "./common/Icons";
import { cardsData } from "./common/Helper";
import TeamMeat from "./TeamMeat";
import ClientSay from "./ClientSay";
import GetStarted from "./GetStarted";

const SheHowWe = () => {
  return (
    <>
      <section className="max-w-[1164px] w-full mx-auto px-4 space-y-12 mt-12">
        <div className="flex justify-center">
          <h2 className="pb-2 flex flex-col font-bold sm:text-lg text-sm text-midnight font-montserrat tracking-20p relative group capitalize">
            see how we do it{" "}
            <span>
              <UnderLine className="h-[6px] w-[210px]" />
            </span>
          </h2>
        </div>
        <div className="flex gap-4 md:flex-row flex-col items-center ">
          <div className="md:w-2/5 w-full space-y-7">
            <h1 className="heading">
              You’re juggling so much more than you think.
            </h1>
            <p className="text-midnight text-lg font-quattrocento font-normal">
              When you’re an entrepreneur and you’ve got a family, life moves
              pretty fast. It can also become overwhelming pretty quickly too. 
            </p>
            <p className="text-midnight text-lg font-quattrocento font-normal flex items-center gap-4">
              Here’s what we hear from clients{" "}
              <span>
                <RightArrowIcon />
              </span>
            </p>
          </div>
          <div className="md:w-3/5 w-full">
            <div className="flex flex-wrap">
              {cardsData.map((card) => (
                <div key={card.id} className="w-full sm:w-1/2 p-4">
                  <div
                    className={`sm:max-w-[333px] h-[174px] px-2 flex items-center justify-center ${
                      card.id === 1 || card.id === 4
                        ? "bg-skyblue"
                        : card.id === 2 || card.id === 5
                        ? "bg-coral"
                        : card.id === 3 || card.id === 6
                        ? "bg-wheat"
                        : ""
                    }  rounded-2xl`}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <img src={card.imageUrl} alt="" />
                      </div>
                      <p className="text-midnight font-bold text-center text-[15px] font-quattrocento">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TeamMeat />
      <ClientSay />
      <GetStarted />
    </>
  );
};

export default SheHowWe;
