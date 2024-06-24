"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
const ClientSay = () => {
  return (
    <>
      <div className=" space-y-20">
        <h1 className="heading text-center">What our clients say</h1>
        <div className="max-w-[426px] h-[200px] w-full flex justify-center mx-auto mb-20">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            pagination={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="text-center space-y-4 ">
                <p className="font-normal text-lg text-midnight font-quattrocento">
                  “I would absolutely recommend Arcus to the next person whether
                  they{`'`}re just starting out or looking for a new set of eyes
                  to keep watch.”
                </p>
                <h4 className="text-base font-bold font-montserrat text-coral">
                  Nolan Cash
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center space-y-4">
                <p className="font-normal text-lg text-midnight font-quattrocento">
                  “I would absolutely recommend Arcus to the next person whether
                  they{`'`}re just starting out or looking for a new set of eyes
                  to keep watch.”
                </p>
                <h4 className="text-base font-bold font-montserrat text-coral">
                  Nolan Cash
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center space-y-4">
                <p className="font-normal text-lg text-midnight font-quattrocento">
                  “I would absolutely recommend Arcus to the next person whether
                  they{`'`}re just starting out or looking for a new set of eyes
                  to keep watch.”
                </p>
                <h4 className="text-base font-bold font-montserrat text-coral">
                  Nolan Cash
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center space-y-4">
                <p className="font-normal text-lg text-midnight font-quattrocento">
                  “I would absolutely recommend Arcus to the next person whether
                  they{`'`}re just starting out or looking for a new set of eyes
                  to keep watch.”
                </p>
                <h4 className="text-base font-bold font-montserrat text-coral">
                  Nolan Cash
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientSay;
