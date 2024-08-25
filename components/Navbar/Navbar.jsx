import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { SiBuymeacoffee } from "react-icons/si";
import { FaWindowClose } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { GiNinjaHead } from "react-icons/gi";
import rune from "../../styles/rune.svg";
import { FaMessage } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import vegvisir from "../../styles/vegvisir.svg";
import blog from "../../styles/blog.png";
import myths from "../../styles/myths.svg";
import art from "../../styles/art.svg";
import more from "../../styles/more.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", closeMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          !scrolled || isMenuOpen
            ? "bg-black border-gray-700 rounded-sm top-0 p-6"
            : "bg-gray-700/90 border-[1px] border-yellow-400 top-4"
        } fixed top-0 left-1/2 transform lg:p-8 transition duration-500 h-12 -translate-x-1/2 ${
          !isMenuOpen ? "top-0" : "0"
        } flex items-center justify-center w-full lg:w-11/12 z-50 ${
          scrolled && (pathname === "/" || pathname === "/")
            ? "transition-color text-gray-100"
            : "text-white"
        } mb-24 w-1/2 m-auto ${scrolled ? "rounded-full" : "rounded-md"}`}
      >
        <div className="w-full flex h-12 justify-start items-center">
          <a href={"/"}>
            <div className="absolute left-4 md:left-auto lg:right-4 top-2 lg:top-4 w-48 md:w-36">
              <Image src={blog} alt="Georgi Tonkov" className="w-full h-auto" />
            </div>
          </a>
          <div className="hidden lg:flex uppercase flex-grow items-center justify-start">
            <a
              href="/"
              className="font-bold text-md hover-1 border-r-[1px] p-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={myths}
                  width={1000}
                  height={1000}
                  alt=""
                />
                Митология
              </div>
            </a>
            <Link
              href={"/runes"}
              className="font-bold text-md hover-1 mx-2 border-r-[1px] p-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={rune}
                  width={1000}
                  height={1000}
                  alt=""
                />
                <span>Руни</span>
              </div>
            </Link>
            <Link
              href={"https://voluspa.noncreativeblog.net/"}
              target="__blank"
              className="font-bold text-md hover-1 mx-2 border-r-[1px] p-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={vegvisir}
                  width={1000}
                  height={1000}
                  alt=""
                />
                <span>VÖLUSPIRA</span>
              </div>
            </Link>
            <Link
              href={"/art"}
              className="font-bold text-md hover-1 mx-2 border-r-[1px] p-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={art}
                  width={1000}
                  height={1000}
                  alt=""
                />
                <span>Изкуство</span>
              </div>
            </Link>
            <div className="group relative">
              <button className="font-bold text-md mx-2 hover-1 inline-flex flex items-center uppercase mx-4">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={more}
                  width={1000}
                  height={1000}
                  alt=""
                />
                Повече
              </button>
              <div className="origin-top-right text-gray-700 fade-in absolute left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1" role="menu">
                  <a
                    href={"/authors/georgi-tonkov"}
                    className="block px-4 py-2 text-lg"
                    role="menuitem"
                  >
                    <div className="flex items-center">
                      <GiNinjaHead className="mr-2" />
                      <span>За мен</span>
                    </div>
                  </a>
                  <Link
                    href={"/contact/email"}
                    className="block px-4 p-2 text-md hover-1"
                  >
                    <div className="flex items-center">
                      <FaMessage className="mr-2" />
                      <span>Контакти</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            title="menu"
            id="menu"
            name="Menu"
            aria-label="Menu"
            onClick={toggleMenu}
            className="p-1 text-orange-300"
          >
            <CgMenuGridO size={30} />
          </button>
        </div>
        <div
          className={`fixed modal top-0 right-0 h-full transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0 bg-black" : "translate-x-full"
          }`}
          ref={menuRef}
        >
          <div className="bg-gradient-to-r rounded-lg flex items-center p-4 justify-center from-gray-700 via-gray-800 to-gray-900 border-b-2 border-gray-700 w-full">
            <a href={"/"}>
              <div className="w-10/12 mx-auto ml-2 top-6 left-0">
                <Image
                  src={blog}
                  alt="Georgi Tonkov"
                  className="w-full h-full"
                />
              </div>
            </a>
            <button className="focus:outline-none p-2 " onClick={toggleMenu}>
              <FaWindowClose size={30} className="text-white" />
            </button>
          </div>
          <div className="mt-4 p-4">
            <a
              href="/"
              className="text-gray-100 block text-2xl mt-2 hover-1 border-b border-gray-700 pb-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={myths}
                  width={1000}
                  height={1000}
                  alt=""
                />
                Митология
              </div>
            </a>
            <Link
              href={"/runes"}
              className="block text-gray-100 text-2xl mt-2 hover-1 border-b border-gray-700 pb-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={rune}
                  width={1000}
                  height={1000}
                  alt=""
                />
                <span>Руни</span>
              </div>
            </Link>
            <Link
              href={"https://voluspa.noncreativeblog.net/"}
              target="__blank"
              className="block text-gray-100 text-2xl mt-2 hover-1 border-b border-gray-700 pb-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={vegvisir}
                  width={1000}
                  height={1000}
                  alt=""
                />
                <span>VÖLUSPIRA</span>
              </div>
            </Link>
            <a
              href="/art"
              className="text-gray-100 block text-2xl mt-2 hover-1 border-b border-gray-700 pb-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={art}
                  width={1000}
                  height={1000}
                  alt=""
                />
                <span>Изкуство</span>
              </div>
            </a>
            <div className="group relative border-b border-gray-700 pb-2">
              <button className="text-gray-100 text-2xl mt-2 hover-1 flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full"
                  src={more}
                  width={1000}
                  height={1000}
                  alt=""
                />
                Повече
              </button>
              <div className="origin-top-right absolute left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  <a href="/contact/email" className="block px-4 py-2 text-lg">
                    <div className="flex items-center">
                      <FaMessage className="mr-2" />
                      <span>Контакти</span>
                    </div>
                  </a>
                  <Link
                    href={"/authors/georgi-tonkov"}
                    className="block text-lg py-2 px-4 hover-1"
                  >
                    <div className="flex items-center">
                      <GiNinjaHead className="mr-2" />
                      <span>За мен</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center fixed bottom-0 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full"
            >
              <path
                fill="#1e293b"
                fill-opacity="1"
                d="M0,288L30,277.3C60,267,120,245,180,218.7C240,192,300,160,360,165.3C420,171,480,213,540,202.7C600,192,660,128,720,117.3C780,107,840,149,900,186.7C960,224,1020,256,1080,261.3C1140,267,1200,245,1260,213.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
