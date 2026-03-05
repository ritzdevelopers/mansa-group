import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import styles from "./page.module.css";

function Footer() {
    return (
        <footer className="w-full bg-[#144168] pb-6 sm:pb-6 md:pb-8 lg:pb-[30px] pt-8 sm:pt-10 md:pt-12 lg:pt-[56px] flex justify-center items-center">
            {/* Top Container  */}
            <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-12 w-full">
                <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 flex-wrap px-4">
                    {
                        [IoLogoYoutube, FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[80px] lg:h-[80px] bg-white rounded-full flex justify-center items-center shrink-0 transition-transform duration-300 ease-out hover:scale-110 hover:shadow-lg cursor-pointer" key={index}>
                                <Icon className="text-[#652A27] text-lg sm:text-xl md:text-[26px] lg:text-[30px]" />
                            </div>
                        ))
                    }
                </div>
            {/* Centered Align Container  */}
            <div className="py-6 px-4 sm:py-7 sm:px-6 md:px-10 lg:py-8 lg:px-20 border-b border-t border-[#194D7A] flex flex-col lg:flex-row justify-between gap-8 w-full">
                {/* Left Side Container  */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between gap-6 sm:gap-8 lg:gap-26">
                    {/* Col 1  */}
                    <div className="flex flex-col justify-start items-start gap-4 sm:gap-6">
                        <p style={{
                            fontWeight: 400
                            }} className={`${styles.fontOpenSans} text-sm sm:text-base lg:text-[16px] text-white uppercase`}>About Us</p>
                        <ul style={{

                        }} className="text-xs sm:text-sm lg:text-[15px] text-[#FFFFFF99] flex flex-col gap-3 sm:gap-4">
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Overview</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Vision & Mission</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Meet the Founder</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Customer Relationship</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Podcast</li>
                        </ul>
                    </div>

                    {/* Col 2  */}
                    <div className="flex flex-col justify-start items-start gap-4 sm:gap-6">
                        <p style={{
                            fontWeight: 400
                        }} className={`${styles.fontOpenSans} text-sm sm:text-base lg:text-[16px] text-white uppercase`}>Projects</p>
                        <ul style={{
                            fontWeight: 300
                        }} className="text-xs sm:text-sm lg:text-[15px] text-[#FFFFFF99] flex flex-col gap-3 sm:gap-4">
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Residential</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Commercial</li>
                        </ul>
                    </div>

                    {/* Col 4  */}
                    <div className="flex flex-col justify-start items-start gap-4 sm:gap-6">
                        <p style={{
                            fontWeight: 400
                        }} className={`${styles.fontOpenSans} text-sm sm:text-base lg:text-[16px] text-white uppercase`}>Media</p>
                        <ul style={{

                        }} className="text-xs sm:text-sm lg:text-[15px] text-[#FFFFFF99] flex flex-col gap-3 sm:gap-4">
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">In The Media</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Awards & Recognition</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Events</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Blogs</li>
                        </ul>
                    </div>

                    {/* Col 5  */}
                    <div className="flex flex-col justify-start items-start gap-4 sm:gap-6">
                        <p style={{
                            fontWeight: 400
                        }} className={`${styles.fontOpenSans} text-sm sm:text-base lg:text-[16px] text-white uppercase`}>Quick Links</p>
                        <ul style={{

                        }} className="text-xs sm:text-sm lg:text-[15px] text-[#FFFFFF99] flex flex-col gap-3 sm:gap-4">
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">NRI Corner</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Customer Support</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Careers</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-white hover:translate-x-1 w-fit">Contact Us</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side Container */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="py-2 lg:max-w-auto max-w-[281px] border-b border-[#E8BB7E]">
                        <p style={{
                            fontWeight: 700
                        }} className={`${styles.fontopensans} text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] text-white uppercase`}>Stay connected</p>
                    </div>
                    <div className="w-32 sm:w-40 lg:w-[179px] transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <img src="/layout/google-review.png" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Bottom Container  */}
            <div className="w-full flex justify-center items-center px-4">
                <img src="/layout/mansha-logo2.png" className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[530px] lg:w-[530px] h-auto transition-opacity duration-300 hover:opacity-90 cursor-pointer" alt="" />
            </div>
            </div>
        </footer>
    );
}
export default Footer;