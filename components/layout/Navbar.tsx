"use client";

import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`font-optima fixed top-0 left-0 w-full z-50 px-18 flex justify-center items-center transition-colors duration-300 ${
        isScrolled ? "bg-black py-2 transition-all duration-300" : "bg-transparent py-4 transition-all duration-300"
      }`}
    >
      {/* Centered Align Container  */}
      <div className="w-full flex justify-between">
        {/* Left Side Container  */}
        <div className="w-[87px]">
          <img src="/layout/mansha-logo.png" className="w-full h-auto" alt="" />
        </div>

        {/* Centered Align Container  */}
        <div className="flex justify-between gap-6 items-center">
          <a href="" className="font-[500] text-[16px] uppercase text-white font-optima">About Us</a>
          <a href="" className="font-[500] text-[16px] uppercase text-white font-optima">COMMUNITIES</a>
          <a href="" className="font-[500] text-[16px] uppercase text-white font-optima ">PROJECTS</a>
          <a href="" className="font-[500] text-[16px] uppercase text-white font-optima">Blog</a>
          <a href="" className="font-[500] text-[16px] uppercase text-white font-optima">Contact Us</a>
        </div>

        {/* Right Side Container  */}
        <div className="flex gap-4 items-center">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="white" />
          </svg>
          <button className="w-[159px] h-[37px] font-[500] text-[16px] uppercase text-white font-optima bg-[#144168]">Enquire Now</button>
        </div>


      </div>
    </nav>
  );
}

export default Navbar;