import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { FaHome, FaLink } from "react-icons/fa"; // Import icons
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiBuymeacoffee } from "react-icons/si";
import { FaWindowClose } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { GiNinjaHead } from "react-icons/gi";
import { CgMoreVertical } from "react-icons/cg";

import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";

import Link from "next/link";
import Image from "next/image";
import logo from "../../styles/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  const router = useRouter();
  const { pathname } = router;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`${
          !scrolled || isMenuOpen
            ? "bg-black border-b-[1px] border-gray-700 rounded-sm top-0 p-6 "
            : "bg-gray-700/90 border-[1px] border-yellow-400 top-4 "
        } fixed top-0 left-1/2 transform lg:p-8 transition duration-500 h-12 -translate-x-1/2 ${
          !isMenuOpen ? "top-0" : "0"
        }}  flex items-center justify-center w-full lg:w-5/6  z-50 ${
          scrolled && (pathname == "/" || pathname == "/")
            ? " transition-color text-gray-100"
            : "text-white"
        }  mb-24  w-1/2 m-auto   ${scrolled ? "rounded-full " : "rounded-md"}`}
      >
        {" "}
        <div className="w-full   flex h-12 ">
          <a href={"/"}>
            {" "}
            <div className=" absolute top-1 lg:hidden   left-2">
              <Image src={logo} className="w-2/3 h-auto" />
            </div>
          </a>

          <div className="hidden lg:flex   uppercase flex-grow items-center justify-start ">
            <a href="/" className={` font-bold text-md hover-1 mx-4 hover-1`}>
              <div className="flex items-center">
                <FaHome className="mr-2" />
                <span>Начало </span>
              </div>
            </a>

            <Link
              href={"/about"}
              className={` font-bold text-md hover-1 mx-4 hover-1`}
            >
              <div className="flex items-center">
                <GiNinjaHead className="mr-2" />
                <span>Tonkoff G.</span>
              </div>
            </Link>

            <Link
              href={"/contact/email"}
              className={` font-bold text-md hover-1 mx-4 hover-1`}
            >
              <div className="flex items-center">
                <FaMessage className="mr-2" />
                <span>Контакти</span>
              </div>
            </Link>
            <div class="group relative">
              <button
                className={` font-bold text-md mx-4 hover-1 inline-flex flex items-center uppercase  mx-4 hover-1`}
              >
                <CgMoreVertical className="m" />
                Повече
              </button>
              <div className="origin-top-right text-gray-700 fade-in absolute left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1" role="menu">
                  <a
                    href="https://www.strivenex.com"
                    className="block px-4 py-2 text-lg "
                    role="menuitem"
                  >
                    <div className="flex items-center">
                      <FaLink className="mr-2" />
                      <span>StriveNex</span>
                    </div>
                  </a>
                  <a
                    href="https://github.com/GLTdotNS"
                    className="block px-4 py-2 text-lg"
                    role="menuitem"
                  >
                    <div className="flex items-center">
                      <IoLogoGithub className="mr-2" />
                      <span>GitHub</span>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/georgi-tonkov/"
                    className="block px-4 py-2 text-lg"
                    role="menuitem"
                  >
                    <div className="flex items-center">
                      <FaLinkedin className="mr-2" />
                      <span>LinkedIn</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="block lg:hidden ">
            <button className=" focus:outline-none" onClick={toggleMenu}>
              <div
                className={`"border-gray-300  mr-2  ${
                  (pathname === "/" || pathname === "/profile") && !scrolled
                    ? "text-gray-700"
                    : "text-orange-300"
                }  rounded-full absolute top-3 right-[10px] `}
              >
                <div className="ml-1 uppercase   flex items-center">
                  <CgMenuGridO size={23} />
                </div>
              </div>
            </button>
          </div>

          <div className="hidden lg:flex   mr-12">
            <a href="https://buymeacoffee.com/tonkoff">
              <button
                className={`${
                  scrolled ? " bg-[#FFDD00] text-gray-900" : " text-gray-700"
                } font-bold hover:bg-yellow-200 ${
                  scrolled ? 500 : 400
                } transition mt-1 border-2 border-[#FFDD00] bg-yellow-300 p-2 rounded-full text-sm font-bold slide-in-from-top  flex items-center`}
              >
                <SiBuymeacoffee className="mr-2" />
                Buy me a coffee
              </button>
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div className=" modal ">
            <div className=" slide-in-from-left   z-10 lg:hidden fixed shadow-4xl top-[40px] left-[14px]  w-5/6 rounded-lg bg-gradient-to-b from-gray-900 via-gray-950 via-gray-950 to-orange-300 flex flex-col items-start justify-start ">
              <div className="bg-gradient-to-r rounded-lg flex items-center p-4 justify-center  from-gray-700 via-gray-800 via-gray-900 to-gray-900 border-b-2 border-gray-700  w-full  ">
                {" "}
                <a href={"/"}>
                  {" "}
                  <div className=" w-10/12 mx-auto ml-2  top-6  left-0">
                    <Image src={logo} className="w-full h-full" />
                  </div>
                </a>
                <button
                  className="bg-slate-100  focus:outline-none"
                  onClick={toggleMenu}
                >
                  <div className=" uppercase  text-white font-bold rounded-full absolute top-[-15px] right-0  ">
                    <div className="ml-1 flex items-center">
                      <FaWindowClose size={20} />
                    </div>
                  </div>
                </button>{" "}
              </div>
              <div className=" items-center justify-center mt-4 p-4">
                <a
                  href="/"
                  className={`text-gray-100 block font-bold text-2xl mt-2 hover-1`}
                >
                  <div className="flex items-center">
                    <FaHome className="mr-2" />
                    <span>Начало </span>
                  </div>
                </a>

                <Link
                  href={"/about"}
                  className={`block text-gray-100  font-bold text-2xl mt-2 hover-1`}
                >
                  <div className="flex items-center">
                    <GiNinjaHead className="mr-2" />
                    <span>Tonkoff G.</span>
                  </div>
                </Link>

                <a
                  href="/contact/email"
                  className={`text-gray-100 block font-bold text-2xl mt-2 hover-1`}
                  role="menuitem"
                >
                  <div className="flex items-center">
                    <FaMessage className="mr-2" />
                    <span>Контакти</span>
                  </div>{" "}
                </a>
                <div class="group relative">
                  <button
                    className={`text-gray-100  font-bold text-2xl mt-2 hover-1 flex items-center`}
                  >
                    <CgMoreVertical size={20} className="mr-2" />
                    Повече
                  </button>
                  <div className="origin-top-right fade-in absolute left-0 text-gray-700 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <div className="py-1" role="menu">
                      <a
                        href="https://www.strivenex.com"
                        className="block px-4 py-2 text-lg"
                        role="menuitem"
                      >
                        <div className="flex items-center">
                          <FaLink className="mr-2" />
                          <span>StriveNex</span>
                        </div>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/georgi-tonkov/"
                        className="block px-4 py-2 text-md "
                        role="menuitem"
                      >
                        <div className="flex items-center">
                          <FaLinkedin className="mr-2" />
                          <span>LinkedIn</span>
                        </div>
                      </a>
                      <a
                        href="https://github.com/GLTdotNS"
                        className="block px-4 py-2 text-lg "
                        role="menuitem"
                      >
                        <div className="flex items-center">
                          <IoLogoGithub className="mr-2" />
                          <span>GitHub</span>
                        </div>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center  bottom-[20px] w-full">
                <Link href={"https://buymeacoffee.com/tonkoff"}>
                  <button
                    className={` font-bold border-2 border-[#FFDD00] bg-yellow-300 text-gray-700 mx-4 mt-4
                    
                     transition  rounded-full text-lg font-bold p-2 px-4 flex items-center`}
                  >
                    <SiBuymeacoffee className="mr-2" />
                    Buy me a coffee
                  </button>
                </Link>
              </div>
              <div className="flex justify-center p-4 mt-8 bottom-[20px] w-5/6 mx-auto">
                <div className="w-full  bg-gradient-to-b from-white to-orange-200 p-4 rounded-lg shadow-lg">
                  <p className="text-center text-gray-800 text-lg font-bold mb-2">
                    Рекламирай тук
                  </p>
                  <Link
                    className="bg-orange-300 w-10/12 flex items-center justify-center mx-auto hover:bg-pink-600 text-gray-700 font-bold py-2  rounded-full focus:outline-none"
                    href="/joinus"
                  >
                    Научи повече
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
