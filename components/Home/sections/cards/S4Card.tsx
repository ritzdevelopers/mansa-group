import Image from "next/image";
import styles from "@/components/Home/page.module.css";

function S4Card({ index }: { index: number }) {
    return (
        <div className="group w-[492px] h-[670px] shrink-0 relative overflow-hidden cursor-pointer">
            <div className="w-full h-full relative">
                <Image src={`/home/s4/s4-slider-img2.jpg`} alt="S4 Card" fill className="object-cover" />
            </div>

            {/* Absolute Positioned Overlay – slides up from bottom on hover */}
            <div className={`w-full h-full absolute inset-0 ${styles.s4Card} flex flex-col justify-end items-center gap-6 px-4 py-8 text-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0`}>
                <p className="font-[400] text-[16px] capitalize text-white font-open-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex....</p>
                <div className="flex justify-center items-center gap-2">
                    <p className="font-[600] text-[16px] text-[#C49B64] font-open-sans">Discover more</p>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.1642 12.0001L12.9571 5.79297L11.5429 7.20718L16.3358 12.0001L11.5429 16.793L12.9571 18.2072L19.1642 12.0001ZM13.5143 12.0001L7.30722 5.79297L5.89301 7.20718L10.6859 12.0001L5.89301 16.793L7.30722 18.2072L13.5143 12.0001Z" fill="#C49B64" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default S4Card;