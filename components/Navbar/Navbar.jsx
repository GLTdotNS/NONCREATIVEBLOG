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
    <nav className="bg-gray-900 text-[#f6c451] fixed top-0 w-full mx-auto z-50 p-2 transition-all duration-300 shadow-lg">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="h-[50px] ml-0 lg:ml-12">
            <Image src={logo} alt="Logo" height={50} width={200} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow items-center justify-center">
          {[
            { href: "/", label: "Начало", icon: myths },
            { href: "/runes", label: "Руни", icon: runes },
            { href: "/art", label: "Арт", icon: art },
            { href: "/contact/email", label: "Контакти", icon: more },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center text-sm px-4 py-2 transition-colors duration-300 ${
                pathname === item.href
                  ? "text-[#f6c451] font-bold"
                  : "text-gray-300"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                height={20}
                width={20}
                className="mr-2 bg-white rounded-full"
              />
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center">
          <Link
            className="text-sm px-4 py-2 mr-12 rounded-full bg-[#f6c451] text-black font-bold transition-colors duration-300 hover:bg-[#f6c45180]"
            href="/contact/email"
          >
            Свържи се
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="block fixed top-4 right-4 lg:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <IoMdMenu size={30} className="text-[#f6c451]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-5/6 md:w-1/2 h-full bg-gray-900 flex flex-col items-start p-4 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40 lg:hidden`}
      >
        <button
          className={`absolute top-6 right-4 text-[#f6c451] focus:outline-none z-50 transition-transform duration-300 transform ${
            isMenuOpen ? "rotate-180" : ""
          }`}
          onClick={toggleMenu}
        >
          <IoMdClose size={30} />
        </button>
        <div className="w-full mb-4 text-center">
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

        {[
          { href: "/", label: "Начало", icon: myths },
          { href: "/runes", label: "Руни", icon: runes },
          { href: "/art", label: "Арт", icon: art },
          { href: "/contact/email", label: "Контакти", icon: more },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[#f6c451] text-sm mt-4 flex items-center w-full py-2"
          >
            <Image
              src={item.icon}
              alt={item.label}
              height={30}
              width={30}
              className="mr-2 bg-white rounded-full"
            />
            {item.label}
          </Link>
        ))}

        <div className="flex justify-center mt-auto mb-4 w-full">
          <Link
            className="bg-[#f6c451] text-black hover:bg-[#f6c45180] rounded-full text-lg font-bold py-2 px-4 w-full text-center"
            href="/contact/email"
          >
            Свържи се
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
