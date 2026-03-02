"use client"
import Image from "next/image";
import { useState } from "react";
function S3Card({ index }: { index: number }) {
    const [activeCard, setActiveCard] = useState(1);
    return (
        <div className={`${index !== activeCard ? "h-[377px] w-[377px] " : "w-[633px] h-[633px]"}  shrink-0  border border-[#BABABA] rounded-full flex justify-center items-center`}>
            <div className="relative w-[95%] h-[95%] rounded-full overflow-hidden">
                <Image src="/home/s3/s3-slider-img1.jpg" alt="S3 Card" fill className="object-cover" />
            </div>
        </div>
    )
}

export default S3Card; 