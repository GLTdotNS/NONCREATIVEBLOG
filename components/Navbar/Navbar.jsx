import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { FaHome, FaLink } from "react-icons/fa"; // Import icons
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiBuymeacoffee } from "react-icons/si";

import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { FaPatreon } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";

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
          pathname == "/" && !scrolled
            ? "bg-zinc-900"
            : "bg-gray-900/70 backdrop-blur-md backdrop-opacity-100 "
        } fixed left-1/2 transform  -translate-x-1/2 ${
          isMenuOpen ? "top-0" : "top-4 "
        }} transition duration-500 flex items-center justify-center w-full lg:w-5/6  z-50 ${
          scrolled && (pathname == "/" || pathname == "/blog")
            ? "border-[1px] border-yellow-200 transition-color"
            : ""
        } p-4 px-4 mb-24  w-1/2 m-auto z-50  rounded-full`}
      >
        <div className="w-full   flex h-12 ">
          <a href={"/"}>
            {" "}
            <div className="top-6 absolute   mr-32">
              <Image
                alt="Georgi Tonkov  "
                className="h-auto w-full block lg:hidden"
                height={50}
                width={300}
                src={logo}
              />
            </div>
          </a>
          <div className="hidden lg:flex    flex-grow items-center justify-start ">
            <a
              href="/"
              className={`${
                (pathname === "/" || pathname === "/profile") && !scrolled
                  ? "text-white"
                  : "text-pink-200"
              } font-bold text-lg hover-1 mx-4 hover-1`}
            >
              <div className="flex items-center">
                <FaHome className="mr-2" />
                <span>Начало </span>
              </div>
            </a>

            <Link
              href={"/about"}
              className={`${
                (pathname === "/" || pathname === "/profile") && !scrolled
                  ? "text-white"
                  : "text-pink-200"
              } font-bold text-lg hover-1 mx-4 hover-1`}
            >
              <div className="flex items-center">
                <FaRegFaceSmileBeam className="mr-2" />
                <span>За мен</span>
              </div>
            </Link>

            <Link
              href={"/contact"}
              className={`${
                (pathname === "/" || pathname === "/profile") && !scrolled
                  ? "text-white"
                  : "text-pink-200"
              } font-bold text-lg hover-1 mx-4 hover-1`}
            >
              <div className="flex items-center">
                <FaMessage className="mr-2" />
                <span>Пиши ми</span>
              </div>
            </Link>
            <div class="group relative">
              <button
                className={`${
                  pathname === "/" && !scrolled ? "text-white" : "text-pink-200"
                } font-bold text-lg mx-4 hover-1 inline-flex  text-gray-800 mx-4 hover-1`}
              >
                Повече <RiArrowDropDownLine size={25} />
              </button>
              <div className="origin-top-right fade-in absolute left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
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
                    ? "text-white"
                    : "text-pink-300"
                }  rounded-full absolute top-6 right-[10px] w-20`}
              >
                <div className="ml-1 uppercase text-xl  flex items-center">
                  <span className="rubik-moonrocks-regular">Меню</span>
                </div>
              </div>
            </button>
          </div>

          <div className="hidden lg:flex   text-2xl mr-24">
            <a href="/soon">
              <button
                className={`${
                  scrolled ? " bg-[#FFDD00] text-gray-900" : " text-gray-100"
                } font-bold hover:text-gray-300 ${
                  scrolled ? 500 : 400
                } transition text-gray-100 border-2 border-[#FFDD00] p-2 rounded-full text-lg font-bold slide-in-from-top  flex items-center`}
              >
                <SiBuymeacoffee className="mr-2" />
                Buy me a coffe
              </button>
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className=" modal ">
            <div className=" slide-in-from-left  z-10 lg:hidden fixed  top-[0] left-0 w-2/3 h-[100vh] bg-gradient-to-b from-gray-900 via-gray-950 via-gray-950 to-orange-300 flex flex-col items-start justify-start ">
              <div className="bg-orange-200 border-b-2 p-4 w-full">
                {" "}
                <a href={"/"}>
                  {" "}
                  <div className="h-[50px] absolute ml-4 top-4 left-0">
                    <Image src={logo} height={200} width={200} />
                  </div>
                </a>
                <button
                  className="bg-slate-100 bg-red-500 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <div className=" uppercase font-bold rounded-full absolute top-2 right-0  ">
                    <div className="ml-1 flex items-center">
                      <span className="t p-2 rubik-moonrocks-regular ">
                        Затвори{" "}
                      </span>
                    </div>
                  </div>
                </button>{" "}
              </div>
              <div className=" items-center justify-center mt-4 p-4">
                <a
                  href="/"
                  className={`${
                    (pathname === "/" || pathname === "/profile") && !scrolled
                      ? "text-white"
                      : "text-pink-200"
                  } font-bold text-lg mt-2 hover-1`}
                >
                  <div className="flex items-center">
                    <FaHome className="mr-2" />
                    <span>Начало </span>
                  </div>
                </a>

                <Link
                  href={"/about"}
                  className={`${
                    (pathname === "/" || pathname === "/profile") && !scrolled
                      ? "text-white"
                      : "text-pink-200"
                  } font-bold text-lg mt-12 `}
                >
                  <div className="flex items-center">
                    <FaRegFaceSmileBeam className="mr-2" />
                    <span>За мен</span>
                  </div>
                </Link>

                <a
                  href="/contact"
                  className="font-bold text-lg  my-2 hover-1 text-pink-100"
                  role="menuitem"
                >
                  <div className="flex items-center">
                    <FaMessage className="mr-2" />
                    <span>Пиши ми</span>
                  </div>{" "}
                </a>
                <div class="group relative">
                  <button className="text-gray-100  w-full  text-lg font-bold hover:text-gray-600   flex items-center">
                    <CiCircleMore size={20} className="mr-2" />
                    Виж повече
                  </button>
                  <div className="origin-top-right fade-in absolute left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <div className="py-1" role="menu">
                      <a
                        href="/https://www.strivenex.com"
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
              <div className="flex justify-center mt-24 bottom-[20px] w-full">
                <Link href={"/soon"}>
                  <button
                    className={` font-bold hover:text-gray-100 text-gray-100 mx-4 mt-4 border-2 border-orange-200
                    
                     transition  rounded-full text-lg font-bold p-2 flex items-center`}
                  >
                    <SiBuymeacoffee className="mr-2 text-orange-500" />
                    Buy me a coffe
                  </button>
                </Link>
              </div>
              <div className="flex justify-center p-4 mt-24 bottom-[20px] w-full">
                <div className="w-full h-[150px] bg-gradient-to-b from-white to-orange-200 p-4 rounded-lg shadow-lg">
                  <p className="text-center text-gray-800 text-lg font-bold mb-2">
                    Дигитално присъствие от StriveNex
                  </p>
                  <Link href="/joinus">
                    <button className="bg-orange-500 w-full hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none">
                      Заяви тук
                    </button>
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
