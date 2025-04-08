import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto p-5">
      <div className="flex flex-row justify-between items-center lg:mt-10">
        {/* Logo */}
        <div>
          <h1 className="text-White text-2xl font-bold font-alata tracking-wide sm:text-4xl">
            loopstudios
          </h1>
        </div>

        {/* Links */}
        <div className="hidden text-White font-josefin items-center gap-12 lg:flex lg:flex-row">
          <a className="link">About</a>
          <a className="link">Careers</a>
          <a className="link">Events</a>
          <a className="link">Products</a>
          <a className="link">Support</a>
        </div>

        {/* Hamburger Menu */}
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes size={25} color="#fff" />
          ) : (
            <FaBars size={25} color="#fff" />
          )}
          <div
            className={`${
              isOpen ? "absolute" : "hidden"
            } bg-Black w-full h-screen top-0 left-0 z-10 overflow-hidden`}
          >
            <div className="flex flex-row justify-between items-center p-5">
              <h1 className="text-White text-2xl font-bold font-alata tracking-wide sm:text-4xl">
                loopstudios
              </h1>
              <div
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaTimes size={25} color="#fff" />
              </div>
            </div>
            <div className="flex flex-col items-left ml-5 justify-center h-full gap-8 text-White font-josefin text-2xl">
              <a className="link">About</a>
              <a className="link">Careers</a>
              <a className="link">Events</a>
              <a className="link">Products</a>
              <a className="link">Support</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
