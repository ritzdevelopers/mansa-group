"use client";

import Image from "next/image";
import { forwardRef } from "react";

const STACK_OFFSET_PX = 30;
const SCALES = [1, 0.95, 0.9] as const;
const ROTATE_X_DEG = 2;

const S6Card = forwardRef<HTMLDivElement, { index: number; totalCards: number; activeCard: number }>(
    function S6Card({ index, totalCards, activeCard }, ref) {
        const position = (index - activeCard + totalCards) % totalCards;
        const translateY = position * STACK_OFFSET_PX;
        const scale = SCALES[position] ?? 0.9;
        const zIndex = 10 - position;
        const rotateX = position === 0 ? 0 : -ROTATE_X_DEG * position;

        return (
            <div
                ref={ref}
                className="h-[360px] sm:h-[400px] md:h-[430px] lg:h-[450px] absolute left-[50%] bottom-0 w-full max-w-[864px] lg:w-[750px] xl:w-[864px] rounded-[10px] flex bg-white justify-center items-center origin-bottom"
                style={{
                    boxShadow: "0px 20px 60px 0px #2E213D14",
                    zIndex,
                    transform: `translate(-50%, 0) translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), z-index 0s",
                }}
            >
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-0">
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] lg:w-[106px] lg:h-[106px] relative shrink-0 rounded-full overflow-hidden">
                            <Image src="/home/s6/dm-dp.jpg" alt="S6 Avatar" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col mt-2 sm:mt-4 justify-center items-center text-center">
                            <p className="font-[550] text-sm sm:text-base lg:text-[18px] font-optima uppercase">Stephan Louis</p>
                            <p className="font-[400] text-xs sm:text-sm lg:text-[14px] text-[#333333] font-open-sans">Developer</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center">
                        <p className="font-[400] text-xs sm:text-sm lg:text-[16px] text-[#666666] max-w-[700px] font-open-sans">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</p>
                    </div>
                </div>
            </div>
        );
    }
);

export default S6Card;
