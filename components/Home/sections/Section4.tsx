"use client";

import S4Card from "./cards/S4Card";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import styles from "../page.module.css";
function Section4() {
    const [activeTab, setActiveTab] = useState<string>("residential");
    const swiperRef = useRef<SwiperType | null>(null);
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const slides = activeTab === "residential" ? arr1 : arr2;
    return (
        <section className="w-full py-8 sm:py-12 lg:py-[56px] flex justify-center items-center overflow-hidden bg-white px-0">
            {/* Centered Align Container  */}
            <div className={`${styles.container} w-full flex flex-col gap-8 sm:gap-12 lg:gap-18 justify-center items-center pl-4 pr-4 sm:pl-8 sm:pr-8 lg:pl-20  lg:pr-0`}>
                {/* Section Heading  */}
                <div className="w-full flex flex-col sm:flex-row text-center md:text-left justify-center md:justify-between sm:items-center gap-4 lg:pr-10">
                    <h2 className="font-[550] text-2xl sm:text-3xl lg:text-[36px] font-optima uppercase">Our best projects</h2>
                    <div className="flex gap-2 sm:gap-3 justify-center md:justify-start">
                        <div onClick={() => setActiveTab("residential")} className={`px-3 py-1.5 sm:px-4 sm:py-2 cursor-pointer ${activeTab === "residential" ? "border-b-2 border-[#333333]" : "border-b-2 border-transparent"}`}>
                            <p style={{ fontWeight: 500 }} className="text-sm sm:text-base lg:text-[18px] uppercase text-[#333333] font-optima">residential</p>
                        </div>
                        <div onClick={() => setActiveTab("commercial")} className={`px-3 py-1.5 sm:px-4 sm:py-2 cursor-pointer ${activeTab === "commercial" ? "border-b-2 border-[#333333]" : "border-b-2 border-transparent"}`}>
                            <p style={{ fontWeight: 500 }} className="text-sm sm:text-base lg:text-[18px] uppercase text-[#333333] font-optima">commercial</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-start relative overflow-x-hidden items-center min-w-0">
                    <div className="w-full">
                        <Swiper
                            key={activeTab}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            modules={[Navigation]}
                            className="section4-swiper"
                            spaceBetween={32}
                            slidesPerView="auto"
                            allowTouchMove
                        >
                            {slides.map((index) => (
                                <SwiperSlide key={index}>
                                    <S4Card index={index} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Slider Buttons Absolute Positioned */}
                    <div className="w-full absolute inset-0 flex justify-between items-center px-4 sm:px-6 lg:px-8 pointer-events-none [&_button]:pointer-events-auto z-10">
                        <button
                            type="button"
                            aria-label="Previous slide"
                            className="pointer-events-auto cursor-pointer p-1 flex items-center justify-center"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <svg className="w-5 h-9 sm:w-6 sm:h-11 lg:w-[28px] lg:h-[51px]" viewBox="0 0 28 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.0215 0.989864L1.9799 25.0315L26.0215 49.0731" stroke="white" strokeWidth="2.8" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            aria-label="Next slide"
                            className="pointer-events-auto z-10 cursor-pointer p-1 flex items-center justify-center"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <svg className="w-5 h-9 sm:w-6 sm:h-11 lg:w-[28px] lg:h-[51px]" viewBox="0 0 28 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.989986 0.989864L25.0316 25.0315L0.989986 49.0731" stroke="white" strokeWidth="2.8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4;