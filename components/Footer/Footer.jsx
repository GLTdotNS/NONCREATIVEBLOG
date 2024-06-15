import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"; // Importing icons from react-icons library
import Image from "next/image";
import { FcReddit } from "react-icons/fc";

import rta from "../../styles/rta.gif";
const Footer = () => {
  return (
    <footer className="bg-gray-400 bg-opacity-10 w-full mt-24 p-4 rounded-lg shadow-xl lg:w-5/6 mx-auto text-gray-400 py-8 ">
      <div className="w-5/6 mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        {/* Left side: Motivational quote */}
        <div className="w-full sm:w-auto mb-8 sm:mb-0 sm:mr-auto text-center sm:text-left">
          <p className="text-lg font-semibold">
            "Your motivational quote here"
          </p>
        </div>

        {/* Center: Links */}
        <nav className="w-full sm:w-auto mb-8 sm:mb-0 flex justify-center sm:justify-start">
          <a href="#" className="text-gray-300 hover:text-white px-4 py-2">
            Cookies & Privacy
          </a>
          <a href="#" className="text-gray-300 hover:text-white px-4 py-2">
            Contact Me
          </a>
          <a href="#" className="text-gray-300 hover:text-white px-4 py-2">
            Buy Me a Coffee
          </a>
        </nav>

        {/* Right side: Subscribe button */}
        <div className="w-full sm:w-auto text-center sm:text-right">
          <button className="bg-white text-gray-700 font-semibold py-2 px-6 rounded-full shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
