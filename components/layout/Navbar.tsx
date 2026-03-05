"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

const NAV_LINKS = [
  { label: "About Us", href: "" },
  { label: "COMMUNITIES", href: "" },
  { label: "PROJECTS", href: "" },
  { label: "Blog", href: "" },
  { label: "Contact Us", href: "" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`font-optima fixed top-0 left-0 w-full z-50 flex justify-center items-center transition-colors duration-300 px-4 sm:px-6 xl:px-18 ${
        isScrolled ? "bg-black py-2 transition-all duration-300" : "bg-transparent py-4 transition-all duration-300"
      }`}
    >
      <div className={`${styles.container} w-full flex justify-between items-center`}>
        {/* Logo */}
        <div className="w-14 sm:w-[70px] lg:w-[87px] shrink-0">
          <img src="/layout/mansha-logo.png" className="w-full h-auto" alt="Mansha" />
        </div>

        {/* Desktop: Center nav links */}
        <div className="hidden lg:flex justify-between gap-6 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="font-[500] text-[16px] uppercase text-white font-optima whitespace-nowrap transition-all duration-200 hover:opacity-80 hover:underline underline-offset-4 cursor-pointer">
              {label}
            </a>
          ))}
        </div>

        {/* Desktop: Right section */}
        <div className="hidden lg:flex gap-4 items-center shrink-0">
          <button type="button" aria-label="Search" className="text-white p-1 transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="white" />
            </svg>
          </button>
          <button type="button" className="w-[159px] h-[37px] font-[500] text-[16px] uppercase text-white font-optima bg-[#144168] shrink-0 transition-all duration-200 hover:scale-105 hover:bg-[#1a5280] active:scale-[0.98] cursor-pointer">
            Enquire Now
          </button>
        </div>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((o) => !o)}
          className="lg:hidden flex flex-col z-100 justify-center gap-1.5 w-10 h-10 text-white p-2"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-0 left-0 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto z-40" : "opacity-0 pointer-events-none z-[-1]"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-black shadow-xl flex flex-col gap-8 pt-24 pb-8 px-6 transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-[500] text-[18px] uppercase text-white font-optima transition-all duration-200 hover:opacity-80 hover:translate-x-1 cursor-pointer w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-auto">
            <button type="button" aria-label="Search" className="flex items-center gap-2 text-white font-optima text-[16px] transition-all duration-200 hover:opacity-80 cursor-pointer w-fit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="white" />
              </svg>
              Search
            </button>
            <button type="button" className="w-full h-12 font-[500] text-[16px] uppercase text-white font-optima bg-[#144168] transition-all duration-200 hover:scale-[1.02] hover:bg-[#1a5280] active:scale-[0.98] cursor-pointer">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;