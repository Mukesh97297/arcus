import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-screen">
      <img
        src="/images/homepage.png"
        alt="Hero Background"
        className="object-cover w-full h-full"
      />
      <div className="absolute z-10 p-16 text-skyblue">
        <h1 className="sm:text-6xl text-4xl font-montserrat font-bold mb-4">
          You were born to build something good.
        </h1>
        <h1 className="sm:text-6xl text-4xl font-montserrat font-bold text-coral mb-4">
          Let’s make it great.
        </h1>
        <p className="sm:text-2xl text-lg font-bold font-quattrocento max-w-[773px] text-wheat">
          Exceptional business coaching and accounting support for entrepreneurs
          with big hearts and big goals.
        </p>
      </div>
    </section>
  );
};

export default Hero;
