import React, { useState } from "react";
import logo from "../assets/images/logo-inverted.png";
import { Hero } from "./Hero";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavigation = (section) => {
    // Add your navigation logic here
    console.log(`Navigating to ${section}`);
    setOpen(false); // Close mobile menu after navigation
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {" "}
      <header id="header">
        <nav className="sticky flex top-3 p-0 bg-gradient-to-r from-[#5f0101] to-[#ba0000] relative z-20">
          <div className="flex item-center p-2 gap-2">
            <img src={logo} width={50} alt="logo" />
            <div className="text-2xl font-bold flex items-center font-quicksand font-sans text-[#ba0000]">
              last:<span className="text-white">fm</span>
            </div>
          </div>
          <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer">
            <button
              id="mobile-menu-button"
              className="relative w-8 h-8"
              onClick={() => setOpen(!open)}
              aria-label="Toggle mobile menu"
              aria-expanded={open}
            >
              <div
                className={`absolute w-8 h-1 bg-white rounded-full transition-all duration-300 ${
                  open ? "rotate-45 top-4" : "top-2"
                }`}
              ></div>
              <div
                className={`absolute w-8 h-1 bg-white rounded-full transition-all duration-300 ${
                  open ? "opacity-0" : "top-4"
                }`}
              ></div>
              <div
                className={`absolute w-8 h-1 bg-white rounded-full transition-all duration-300 ${
                  open ? "-rotate-45 top-4" : "top-6"
                }`}
              ></div>
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            className={`bg-gradient-to-r from-rose-500 to-pink-500 w-full top-[63px] left-0 md:hidden mt-0 absolute z-20 ${
              open ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <div
                className="nav-link text-2xl cursor-pointer relative flex justify-center w-full items-center font-bold hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out duration-300 p-5 m-0"
                onClick={() => handleNavigation("header")}
              >
                <span>Home</span>
              </div>
              <div
                className="nav-link text-2xl cursor-pointer relative flex justify-center w-full items-center font-bold hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out duration-300 p-5 m-0"
                onClick={() => handleNavigation("headliners")}
              >
                <span>Headliners</span>
              </div>
              <div
                className="nav-link text-2xl cursor-pointer relative flex justify-center w-full items-center font-bold hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out duration-300 p-5 m-0"
                onClick={() => handleNavigation("lineup")}
              >
                <span>Lineup</span>
              </div>
              <div
                className="nav-link text-2xl cursor-pointer relative flex justify-center w-full items-center font-bold hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out duration-300 p-5 m-0"
                onClick={() => handleNavigation("tickets")}
              >
                <span>Tickets</span>
                <div className="shadow-lg absolute top-full right-0 bg-pink-500 whitespace-nowrap rounded-b text-right cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div
                    className="p-4 font-bold hover:bg-white/5 hover:text-zinc-800 transition-colors ease-in-out cursor-pointer text-pink-200"
                    onClick={() => handleNavigation("single-day-ticket")}
                  >
                    <span>Single day ticket</span>
                  </div>
                  <div
                    className="p-4 font-bold hover:bg-white/5 hover:text-zinc-800 transition-colors ease-in-out cursor-pointer text-pink-200"
                    onClick={() => handleNavigation("seven-day-ticket")}
                  >
                    <span>7 day ticket</span>
                  </div>
                </div>
              </div>
              <div
                className="nav-link text-2xl cursor-pointer relative flex justify-center w-full items-center font-bold hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out duration-300 p-5 m-0"
                onClick={() => handleNavigation("form")}
              >
                <span>Subscribe to our club</span>
              </div>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden flex-1 items-center justify-end md:flex">
            <div
              className="nav-link cursor-pointer"
              onClick={() => handleNavigation("header")}
            >
              <span>Home</span>
            </div>
            <div
              className="nav-link cursor-pointer"
              onClick={() => handleNavigation("headliners")}
            >
              <span>Headliners</span>
            </div>
            <div
              className="nav-link cursor-pointer"
              onClick={() => handleNavigation("tickets")}
            >
              <span>Tickets</span>
            </div>
            <div
              className="nav-link cursor-pointer"
              onClick={() => handleNavigation("lineup")}
            >
              <span>Lineup</span>
            </div>

            <div
              className="nav-link cursor-pointer"
              onClick={() => handleNavigation("form")}
            >
              <span>Subscribe to our club</span>
            </div>
          </div>
        </nav>
      </header>
      <Hero />
    </>
  );
};

export default Header;
