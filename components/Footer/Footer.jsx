import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"; // Importing icons from react-icons library
import Image from "next/image";
import { FcReddit } from "react-icons/fc";

import rta from "../../styles/rta.gif";
const Footer = () => {
  return (
    <footer className="bg-zinc-400 bg-opacity-10 w-full mt-24 p-4 rounded-lg shadow-xl lg:w-5/6 mx-auto text-gray-700 py-8 ">
      <div className="w-5/6 mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        {/* Left side: Motivational quote */}
        <div className="w-full sm:w-auto mb-8 sm:mb-0 sm:mr-auto text-center sm:text-left">
          <p className="text-lg font-semibold">
            “Luck is what happens when preparation meets opportunity.”
            <br />― Seneca
          </p>
        </div>

        {/* Center: Links */}
        <nav className="w-full sm:w-auto mb-8 sm:mb-0 flex justify-center sm:justify-start">
          <a href="#" className="text-gray-700 px-4 py-2">
            Cookies & Privacy
          </a>
        </nav>

        {/* Right side: Subscribe button */}
        <div className="w-full sm:w-auto text-center sm:text-right">
          <button className="bg-yellow-300 text-gray-700 font-semibold py-2 px-6 rounded-full shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
