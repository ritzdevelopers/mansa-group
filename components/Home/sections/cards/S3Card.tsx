"use client";
import Image from "next/image";
import { forwardRef, memo, ForwardRefExoticComponent, RefAttributes } from "react";
import styles from "../../page.module.css";

export type S3CardProps = {
    index: number;
    img: string;
    title: string;
    cardClassName?: string;
    titleClassName?: string;
};

const S3Card: ForwardRefExoticComponent<S3CardProps & RefAttributes<HTMLDivElement>> = memo(forwardRef<HTMLDivElement, S3CardProps>(function S3Card(
    { index, img, title, cardClassName = "", titleClassName = "" },
    ref
) {
    return (
        <div
            ref={ref}
            className={`${cardClassName} lg:w-[633px] lg:h-[633px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] shrink-0 border border-[#BABABA] rounded-full flex justify-center items-center origin-center`}
        >
            <div className="relative w-[95%] h-[95%] rounded-full overflow-hidden">
                <Image
                    src={img}
                    alt="S3 Card"
                    fill
                    className="object-cover"
                />
                {title && (
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center text-center">
                        <div className={`${styles.glassCard} w-[362px]`}>
                            <h2 className={`${titleClassName} font-normal text-[33px] text-white uppercase font-optima`}>
                                {title}
                            </h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}));

export default S3Card; 