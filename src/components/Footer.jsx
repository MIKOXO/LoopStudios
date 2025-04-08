import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-Black text-white mt-10">
      <div className="mx-auto container py-10 px-5">
        <div className="flex flex-col justify-between items-center lg:flex-row">
          {/* COL 1 */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-White text-2xl font-bold font-alata tracking-wide sm:text-4xl">
              loopstudios
            </h1>
            <div className="flex flex-col text-White font-josefin items-center gap-5 lg:gap-12 lg:flex lg:flex-row">
              <a className="link">About</a>
              <a className="link">Careers</a>
              <a className="link">Events</a>
              <a className="link">Products</a>
              <a className="link">Support</a>
            </div>
          </div>

          {/* COL 2 */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex flex-row items-center gap-5 mt-5 lg:mt-0">
              <a href="#">
                <FaFacebook size={20} />
              </a>
              <a href="#">
                <FaTwitter size={20} />
              </a>
              <a href="#">
                <FaPinterest size={20} />
              </a>
              <a href="#">
                <FaInstagram size={20} />
              </a>
            </div>
            <div>
              <p className="text-Grey200 mt-5">
                {new Date().getFullYear()} Loopstudios. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
