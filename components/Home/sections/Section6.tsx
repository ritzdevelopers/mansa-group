"use client";

import S6Card from "./cards/S6Card";
import { useRef, useState } from "react";
function Section6() {
    const [activeCard, setActiveCard] = useState(1);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    function handleLeftSlide() {

        if (activeCard === 1) {
            setActiveCard(3);
        } else {
            setActiveCard(activeCard - 1);
        }
        console.log(activeCard);
    }

    function handleRightSlide() {
        if (activeCard === 3) {
            setActiveCard(1);
        } else {
            setActiveCard(activeCard + 1);
        }
        console.log(activeCard);
    }

    return (
        <section className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-[56px] pb-20 sm:pb-24 md:pb-20 lg:pb-40 bg-[#F9F9F9]">
            {/* Centered Align Container  */}
            <div className="w-full flex flex-col justify-center items-center gap-0 ">
                {/* Section Heading  */}
                <div className="flex justify-center items-center gap-4 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-[30px] lg:text-[36px] text-black uppercase font-optima">
                        customer feedback
                    </h2>
                </div>
                {/* Main Container  */}
                <div className="flex justify-center items-center gap-22 sm:gap-24 lg:gap-8 w-full flex-col lg:flex-row">

                    {/* Left Slide Button  */}
                    <button
                        onClick={handleLeftSlide}
                        className="w-10 h-10 sm:w-12 sm:h-12 hidden lg:w-[50px] lg:h-[50px] rounded-full border border-[#5F5F5F] lg:flex justify-center items-center cursor-pointer shrink-0 order-2 lg:order-1"
                        aria-label="Previous feedback"
                    >
                        <svg className="w-2 h-3 sm:w-2.5 sm:h-4 lg:w-[8px] lg:h-[13px]" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.8284 6.36398L7.77818 1.41421L6.36396 0L0 6.36398L6.36396 12.7279L7.77818 11.3137L2.8284 6.36398Z" fill="#666666" />
                        </svg>
                    </button>

                    {/* Main Slider Container - min-height so section grows to fit absolute-positioned cards  */}
                    <div className="w-full max-w-[864px] relative min-h-[400px] sm:min-h-[430px] md:min-h-[460px] lg:w-[864px] lg:max-w-none lg:min-h-[490px]  lg:order-2" style={{ perspective: "1200px" }}>
                        {/* Slider Card  */}
                        {
                            (() => {
                                const cards = [1, 2, 3];
                                return cards.map((index) => (
                                    <S6Card
                                        key={index}
                                        index={index}
                                        totalCards={cards.length}
                                        activeCard={activeCard}
                                        ref={(el) => {
                                            cardRefs.current[index] = el;
                                        }}
                                    />
                                ));
                            })()
                        }
                    </div>
                    {/* Right Slide Button  */}
                    <button
                        onClick={handleRightSlide}
                        className="w-10 h-10 sm:w-12 hidden sm:h-12 lg:w-[50px] lg:h-[50px] rounded-full border border-[#5F5F5F] lg:flex justify-center items-center cursor-pointer shrink-0 order-3 lg:order-3"
                        aria-label="Next feedback"
                    >
                        <svg className="w-2 h-3 sm:w-2.5 sm:h-4 lg:w-[8px] lg:h-[13px]" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.94978 6.36398L0 1.41421L1.41422 0L7.77818 6.36398L1.41422 12.7279L0 11.3137L4.94978 6.36398Z" fill="#666666" />
                        </svg>
                    </button>




                    {/* Buttons for mobile / tabs It Will Be Hide in Desktop View  */}
                    <div className="w-full flex justify-center items-center gap-4 lg:hidden">
                        {/* Left Slide Button  */}
                        <button
                            onClick={handleLeftSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12  lg:w-[50px] lg:h-[50px] rounded-full border border-[#5F5F5F] flex justify-center items-center cursor-pointer shrink-0 order-2 lg:order-1"
                            aria-label="Previous feedback"
                        >
                            <svg className="w-2 h-3 sm:w-2.5 sm:h-4 lg:w-[8px] lg:h-[13px]" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.8284 6.36398L7.77818 1.41421L6.36396 0L0 6.36398L6.36396 12.7279L7.77818 11.3137L2.8284 6.36398Z" fill="#666666" />
                            </svg>
                        </button>


                        {/* Right Slide Button  */}
                        <button
                            onClick={handleRightSlide}
                            className="w-10 h-10 sm:w-12  sm:h-12 lg:w-[50px] lg:h-[50px] rounded-full border border-[#5F5F5F] flex justify-center items-center cursor-pointer shrink-0 order-3 lg:order-3"
                            aria-label="Next feedback"
                        >
                            <svg className="w-2 h-3 sm:w-2.5 sm:h-4 lg:w-[8px] lg:h-[13px]" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.94978 6.36398L0 1.41421L1.41422 0L7.77818 6.36398L1.41422 12.7279L0 11.3137L4.94978 6.36398Z" fill="#666666" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section6;