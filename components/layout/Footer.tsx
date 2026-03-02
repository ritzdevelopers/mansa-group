import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="w-full bg-[#144168] px-18 py-[56px] flex flex-col justify-center items-center gap-6">
            {/* Top Container  */}
            <div className="flex justify-center items-center gap-4">
                {
                    [IoLogoYoutube, FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center" key={index}>
                            <Icon className="text-[#652A27] text-[30px]" />
                        </div>
                    ))
                }
            </div>

            {/* Centered Align Container  */}
            <div className="py-4 border-b border-t border-[#194D7A] flex justify-between gap-4 w-full">
                {/* Left Side Container  */}
                <div className="flex justify-between gap-12">
                    {/* Col 1  */}
                    <div className="flex flex-col justify-start items-start gap-2">
                        <p className="font-[600] text-[16px] text-white">About Us</p>
                        <ul className="font-[400] text-[15px] text-[#FFFFFF99] flex flex-col gap-2">
                            <li>Overview</li>
                            <li>Vision & Mission</li>
                            <li>Meet the Founder</li>
                            <li>Customer Relationship</li>
                            <li>Podcast</li>
                        </ul>
                    </div>

                    {/* Col 2  */}
                    <div className="flex flex-col justify-start items-start gap-2">
                        <p className="font-[600] text-[16px] text-white">Projects</p>
                        <ul className="font-[400] text-[15px] text-[#FFFFFF99] flex flex-col gap-2">
                            <li>Residential</li>
                            <li>Commercial</li>
                        </ul>
                    </div>


                    {/* Col 3  */}
                    <div className="flex flex-col justify-start items-start gap-2">
                        <p className="font-[600] text-[16px] text-white">About Us</p>
                        <ul className="font-[400] text-[15px] text-[#FFFFFF99] flex flex-col gap-2">
                            <li>Overview</li>
                            <li>Vision & Mission</li>
                            <li>Meet the Founder</li>
                            <li>Customer Relationship</li>
                            <li>Podcast</li>
                        </ul>
                    </div>

                    {/* Col 4  */}
                    <div className="flex flex-col justify-start items-start gap-2">
                        <p className="font-[600] text-[16px] text-white">Media</p>
                        <ul className="font-[400] text-[15px] text-[#FFFFFF99] flex flex-col gap-2">
                            <li>In The Media</li>
                            <li>Awards & Recognition</li>
                            <li>Events</li>
                            <li>Blogs</li>
                        </ul>
                    </div>

                    {/* Col 5  */}
                    <div className="flex flex-col justify-start items-start gap-2">
                        <p className="font-[600] text-[16px] text-white">Quick Links</p>
                        <ul className="font-[400] text-[15px] text-[#FFFFFF99] flex flex-col gap-2">
                            <li>NRI Corner</li>
                            <li>Customer Support</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side Container */}
                <div className="flex flex-col gap-4">
                    <div className="py-2 border-b border-[#E8BB7E]">
                        <p className="font-[700] text-[36px] text-white uppercase">Stay connected</p>
                    </div>
                    <div className="w-[179px]">
                        <img src="/layout/google-review.png" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Bottom Container  */}
            <div className="w-full flex justify-center items-center">
                <img src="/layout/mansha-logo2.png" className="w-[530px] h-auto" alt="" />
            </div>
        </footer>
    );
}
export default Footer;