"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    image: "/home/s2/s2-img1.jpg",
    title: "Aagman",
    subtitle: "by mansha",
  },
  {
    image: "/home/s2/s2-img1.jpg",
    title: "Slide 2",
    subtitle: "coming soon",
  },
  {
    image: "/home/s2/s2-img1.jpg",
    title: "Slide 3",
    subtitle: "",
  },
];

function Section2() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full h-screen min-h-[400px] relative">
      {/* Slider Container */}
      <div className="w-full h-full relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          className="section2-swiper w-full h-full"
          loop
          allowTouchMove
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-full h-full relative">
                <Image
                  src={slide.image}
                  alt={`Slider Card ${index + 1}`}
                  fill
                  className="object-cover z-1"
                />
                <div className="absolute inset-0 w-full h-full flex justify-center pt-8 sm:pt-12 lg:pt-20 z-10 px-4">
                  <h2
                    style={{ fontWeight: "300" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white uppercase font-optima text-center"
                  >
                    {slide.title}{" "}
                    {slide.subtitle ? (
                      <span className="" style={{ fontWeight: "600" }}>
                        {slide.subtitle}
                      </span>
                    ) : null}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slider Buttons - custom styled, control Swiper */}
      <div className="absolute inset-0 w-full h-full flex justify-between items-center z-10 pointer-events-none px-4 sm:px-6 lg:px-10">
        <div className="pointer-events-auto">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[58px] lg:h-[58px] rounded-full border cursor-pointer border-white flex justify-center items-center shrink-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-[42px] lg:h-[42px] bg-white rounded-full flex justify-center items-center">
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M2.8284 6.36398L7.77818 1.41421L6.36396 0L0 6.36398L6.36396 12.7279L7.77818 11.3137L2.8284 6.36398Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="pointer-events-auto">
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[58px] lg:h-[58px] rounded-full border border-white flex cursor-pointer justify-center items-center shrink-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-[42px] lg:h-[42px] bg-white rounded-full flex justify-center items-center">
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.94978 6.36398L0 1.41421L1.41422 0L7.77818 6.36398L1.41422 12.7279L0 11.3137L4.94978 6.36398Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section2;