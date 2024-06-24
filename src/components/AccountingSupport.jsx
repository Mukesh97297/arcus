import React from "react";
import { UnderLine } from "./common/Icons";
import BanifitSupport from "./BanifitSupport";

const AccountingSupport = () => {
  return (
    <>
      <section className="max-w-[1164px] w-full mx-auto">
        <div className="bg-white p-8 flex md:flex-row flex-col items-center ">
          <div className="mb-8 md:mb-0">
            <div className="relative sm:w-[376px] w-auto sm:h-[479px] h-auto mr-4">
              <img
                src="/images/twoyoung.png"
                alt="Support"
                className="rounded-lg w-full shadow-lg"
              />
              <img
                src="/images/Arcussolid.png"
                alt="Support"
                className="absolute w-36 h-36 bottom-1 right-1"
              />
            </div>
          </div>
          <div className="text-left md:px-7 px-0 space-y-7">
            <h1 className="heading">
              Accounting{" "}
              <span className="bg-coral px-2">support and coaching</span> for
              family-loving, community-serving, ambitious small businesses.
            </h1>
            <p className="text-midnight sm:text-lg text-sm fond-normal font-quattrocento">
              Our clients are proud, ambitious entrepreneurs who want to grow
              their businesses while building a wealth-creation vehicle for
              themselves and the people around them. Sound like you?{" "}
              <b>Awesome.</b> Kick off the process by filling out our form.
            </p>
            <a className="pb-2 flex flex-col font-bold sm:text-lg text-sm text-midnight font-montserrat tracking-20p relative group">
              Get started{" "}
              <span>
                <UnderLine className="h-[6px] w-[130px]" />
              </span>
            </a>
          </div>
        </div>
      </section>
      <BanifitSupport />
    </>
  );
};

export default AccountingSupport;
