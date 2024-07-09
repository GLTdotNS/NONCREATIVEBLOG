import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for Image component
import play from "../../styles/ad.png";
import logo from "../../styles/blog.png";
const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white mt-4 ">
      <div className="container text-white mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Links Section */}
        <div>
          <h5 className="text-lg font-bold mb-4">Полезни линкове</h5>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Интересно
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Митология
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                За мен
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Поверителност
              </a>
            </li>
          </ul>
        </div>

        {/* Advertisement Banner Section */}
        <div className="md:col-span-2 bg-gray-700 p-4  ">
          <h5 className="text-lg font-bold mb-4">Реклама</h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.bulgarianhistory.roleplaying&hl=bg&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="block  h-auto"
          >
            <Image src={play} />
          </a>
        </div>
        <Image
          className="h-16 w-full lg:w-1/2"
          width={500}
          height={500}
          src={logo}
        />
      </div>

      <div className="bg-black py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2024 NONCREATIVEBLOG. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
