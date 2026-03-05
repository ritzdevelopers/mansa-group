"use client";
import Image from "next/image";
import { forwardRef } from "react";
import styles from "../../page.module.css"

const S3Card = forwardRef<HTMLDivElement, { index: number; isActive?: boolean }>(function S3Card({ index, isActive = false }, ref) {
    return (
        <div
            ref={ref}
            className={`${isActive ? "blur-0" : "filter blur-sm"} lg:w-[633px] lg:h-[633px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] shrink-0 border border-[#BABABA] rounded-full flex justify-center items-center origin-center`}
            style={{
                transform: isActive ? "scale(1)" : "scale(0.94)",
                transition: "width 0.35s ease-out, height 0.35s ease-out, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
        >
            <div className="relative w-[95%] h-[95%] rounded-full overflow-hidden">
                <Image
                    src={`/home/s3/s3-slider-img${index + 1}.jpg`}
                    alt="S3 Card"
                    fill
                    className="object-cover transition-transform duration-500 ease-out"
                    style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
                />

                <div className="absolute inset-0  w-full h-full flex justify-center items-center text-center">
                    <div className={`${styles.glassCard} w-[362px]`}>
                        <h2 className={`font-[400] text-[33px] text-white uppercase font-optima ${isActive ? "opacity-100 transform transition-all duration-500 ease-out" : "opacity-0 transform transition-all duration-500 ease-out"}`}>
                            Aagman by mansha
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default S3Card; 