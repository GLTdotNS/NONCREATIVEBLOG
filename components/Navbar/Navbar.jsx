import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import logo from "../../styles/blog.webp";
import myths from "../../styles/myths.svg"; // Myth icon path
import more from "../../styles/more.svg"; // Contacts icon path
import runes from "../../styles/rune.svg"; // Rune icon path
import art from "../../styles/art.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-[#f6c451] fixed top-0 w-full mx-auto z-50 p-2 transition-all duration-300">
      <div className="flex items-center">
        <Link href="/">
          <div className="h-[50px] ml-0 lg:ml-12">
            <Image src={logo} alt="Logo" height={50} width={200} />
          </div>
        </Link>

        <div className="hidden lg:flex flex-grow items-center justify-center">
          <Link
            href="/"
            className={`flex items-center px-4 py-2 rounded-md transition-colors duration-300 ${
              pathname === "/"
                ? "border-b-2 border-[#f6c451] text-[#f6c451]"
                : ""
            }`}
          >
            <Image
              src={myths}
              alt="Митове"
              height={20}
              width={20}
              className="mr-2 bg-white rounded-full"
            />
            Начало
          </Link>

          <Link
            href="/runes"
            className={`flex items-center px-4 py-2 rounded-md transition-colors duration-300 ${
              pathname === "/runes"
                ? "border-b-2 border-[#f6c451] text-[#f6c451]"
                : ""
            }`}
          >
            <Image
              src={runes}
              alt="Руни"
              height={20}
              width={20}
              className="mr-2 bg-white rounded-full"
            />
            Руни
          </Link>

          <Link
            href="/art"
            className={`flex items-center px-4 py-2 rounded-md transition-colors duration-300 ${
              pathname === "/art"
                ? "border-b-2 border-[#f6c451] text-[#f6c451]"
                : ""
            }`}
          >
            <Image
              src={art}
              alt="Art"
              height={20}
              width={20}
              className="mr-2 bg-white rounded-full"
            />
            Арт
          </Link>

          <Link
            href="/contact/email"
            className={`flex items-center px-4 py-2 rounded-md transition-colors duration-300 ${
              pathname === "/contact/email"
                ? "border-b-2 border-[#f6c451] text-[#f6c451]"
                : ""
            }`}
          >
            <Image
              src={more}
              alt="Контакти"
              height={20}
              width={20}
              className="mr-2 bg-white rounded-full"
            />
            Контакти
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            className="px-4 py-2 mr-12 rounded-full border-2 border-transparent bg-[#f6c451] text-black font-bold transition-colors duration-300 hover:border-[#191A23] hover:bg-[#f6c45180]"
            href="/contact/email"
          >
            Свържи се
          </Link>
        </div>

        <div className="block fixed top-4 right-4 lg:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <IoMdMenu size={30} className="text-[#f6c451]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-30 lg:hidden"
            onClick={toggleMenu}
          >
            {/* Close Button on Overlay */}
          </div>
        )}

        <div
          className={`fixed top-0 right-0 w-5/6 md:w-1/2 h-full bg-black flex flex-col items-center p-4 transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-40 lg:hidden`}
        >
          <button
            className={`absolute top-6 ${
              isMenuOpen ? "left-[-10%]" : ""
            } text-[#f6c451] focus:outline-none z-50 bg-white`}
            onClick={toggleMenu}
          >
            <IoMdClose size={30} />
          </button>
          <div className="w-full mb-4 text-center border-b-2 pb-1">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                height={50}
                width={150}
                className="w-64 mx-auto"
              />
            </Link>
          </div>

          <Link
            href="/"
            className="text-[#f6c451] text-lg mt-12 border-b-2 w-full flex items-center py-2"
          >
            <Image
              src={myths}
              alt="Митове"
              height={30}
              width={30}
              className="mr-2 bg-white rounded-full"
            />
            Начало
          </Link>

          <Link
            href="/runes"
            className="text-[#f6c451] text-lg mt-4 border-b-2 w-full flex items-center py-2"
          >
            <Image
              src={runes}
              alt="Руни"
              height={30}
              width={30}
              className="mr-2 bg-white rounded-full"
            />
            Руни
          </Link>

          <Link
            href="/contact/email"
            className="text-[#f6c451] text-lg mt-4 border-b-2 w-full flex items-center py-2"
          >
            <Image
              src={more}
              alt="Контакти"
              height={30}
              width={30}
              className="mr-2 bg-white rounded-full"
            />
            Контакти
          </Link>

          <Link
            href="/art"
            className="text-[#f6c451] text-lg mt-4 border-b-2 w-full flex items-center py-2"
          >
            <Image
              src={art}
              alt="Арт"
              height={30}
              width={30}
              className="mr-2 bg-white rounded-full"
            />
            Арт
          </Link>

          <div className="flex justify-center mt-24 mb-4 w-full">
            <Link
              className="bg-[#f6c451] text-black hover:bg-[#f6c45180] rounded-full text-lg font-bold py-2 px-4 border-2 border-[#191A23]"
              href="/contact/email"
            >
              Свържи се
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
