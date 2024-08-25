import React, { useState, useEffect } from "react";
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
            ? "bg-black  border-gray-700 rounded-sm top-0 p-6 "
            : "bg-gray-700/90 border-[1px] border-yellow-400 top-4 "
        } fixed top-0 left-1/2 transform lg:p-8 transition duration-500 h-12 -translate-x-1/2 ${
          !isMenuOpen ? "top-0" : "0"
        }}  flex items-center justify-center w-full lg:w-11/12  z-50 ${
          scrolled && (pathname == "/" || pathname == "/")
            ? " transition-color text-gray-100"
            : "text-white"
        }  mb-24  w-1/2 m-auto   ${scrolled ? "rounded-full " : "rounded-md"}`}
      >
        {" "}
        <div className="w-full   flex h-12 justify-start items-center">
          <a href={"/"}>
            {" "}
            <div className=" absolute left-4  top-2 lg:top-4  lg:right-2 w-48 md:w-36">
              <Image src={blog} alt="Georgi Tonkov" className="w-full h-auto" />
            </div>
          </a>

          <div className="hidden lg:flex   uppercase flex-grow items-center justify-start ">
            <a
              href="/"
              className="font-bold text-md hover-1  border-r-[1px] p-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full "
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
                  className="mr-2 w-8 h-8 bg-white rounded-full "
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
              {" "}
              <div className="flex items-center  ">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full "
                  src={vegvisir}
                  width={1000}
                  height={1000}
                  alt=""
                />
                <span>VÖLUSPIRA</span>
              </div>
            </Link>
            <Link
              href={"/"}
              className="font-bold text-md hover-1 mx-2 border-r-[1px] p-2"
            >
              <div className="flex items-center">
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full "
                  src={art}
                  width={1000}
                  height={1000}
                  alt=""
                />{" "}
                <span>Изкуство</span>
              </div>
            </Link>

            <div class="group relative">
              <button
                className={` font-bold text-md mx-2 hover-1 inline-flex flex items-center uppercase  mx-4 hover-1`}
              >
                <Image
                  className="mr-2 w-8 h-8 bg-white rounded-full "
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
                    className={`block px-4 p-2  text-md hover-1  hover-1`}
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

          {/* <div className="hidden lg:flex   mr-12">
            <a
              href="https://buymeacoffee.com/tonkoff"
              className={`${
                scrolled ? " bg-[#FFDD00] text-gray-900" : " text-gray-700"
              } font-bold hover:bg-yellow-200 ${
                scrolled ? 500 : 400
              } transition mt-1 border-2 border-[#FFDD00] bg-yellow-300 p-2 rounded-full text-sm font-bold slide-in-from-top  flex items-center`}
            >
              <SiBuymeacoffee className="mr-2" />
              Buy me a coffee
            </a>
          </div> */}
        </div>
        <div className="block lg:hidden ">
          <button
            title="menu"
            id="menu"
            name="Menu"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <div
              className={`"border-gray-300  mr-2 text-orange-300   p-1
                absolute top-1 right-[0px] `}
            >
              <div className="ml-1 uppercase   flex items-center">
                <CgMenuGridO size={30} />
              </div>
            </div>
          </button>
        </div>
        {isMenuOpen && (
          <div className=" modal ">
            <div className=" slide-in-from-left    z-10 lg:hidden fixed shadow-4xl top-[40px] left-4  md:left-[14px] w-11/12 md:w-2/3 rounded-lg bg-gradient-to-b from-gray-900 via-gray-950 via-gray-950 to-orange-300 flex flex-col items-start justify-start ">
              <div className="bg-gradient-to-r rounded-lg flex items-center p-4 justify-center  from-gray-700 via-gray-800 via-gray-900 to-gray-900 border-b-2 border-gray-700  w-full  ">
                {" "}
                <a href={"/"}>
                  {" "}
                  <div className=" w-10/12 mx-auto ml-2  top-6  left-0">
                    <Image
                      src={blog}
                      alt="Georgi Tonkov"
                      className="w-full h-full"
                    />
                  </div>
                </a>
                <button
                  className="bg-slate-100  focus:outline-none"
                  onClick={toggleMenu}
                >
                  <div className=" uppercase  text-white font-bold rounded-full absolute top-[-15px] right-0  ">
                    <div className="ml-1 flex items-center">
                      <FaWindowClose size={30} />
                    </div>
                  </div>
                </button>{" "}
              </div>
              <div className="  items-center justify-center mt-4 p-4">
                <a
                  href="/"
                  className={`text-gray-100 block  text-2xl mt-2 hover-1`}
                >
                  <div className="flex items-center">
                    <Image
                      className="mr-2 w-8 h-8 bg-white rounded-full "
                      src={myths}
                      width={1000}
                      height={1000}
                      alt=""
                    />{" "}
                    Митология
                  </div>
                </a>{" "}
                <Link
                  href={"/runes"}
                  className={`block text-gray-100   text-2xl mt-2 hover-1`}
                >
                  <div className="flex items-center">
                    <Image
                      className="mr-2 w-8 h-8 bg-white rounded-full "
                      src={rune}
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <span>Руни</span>
                  </div>
                </Link>
                <Link
                  target="__blank"
                  href={"https://voluspa.noncreativeblog.net/"}
                  className={`block text-gray-100   text-2xl mt-2 hover-1`}
                >
                  <div className="flex items-center">
                    <Image
                      className="mr-2 w-8 h-8 bg-white rounded-full "
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
                  className={`text-gray-100 block  text-2xl mt-2 hover-1`}
                  role="menuitem"
                >
                  <div className="flex items-center">
                    <Image
                      className="mr-2 w-8 h-8 bg-white rounded-full "
                      src={art}
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <span>Изкуство</span>
                  </div>{" "}
                </a>
                <div class="group relative">
                  <button
                    className={`text-gray-100   text-2xl mt-2 hover-1 flex items-center`}
                  >
                    <Image
                      className="mr-2 w-8 h-8 bg-white rounded-full "
                      src={more}
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    Повече
                  </button>
                  <div className="origin-top-right fade-in absolute left-0 text-gray-700 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <div className="py-1" role="menu">
                      <a
                        href="/contact/email"
                        className="block px-4 py-2 text-lg"
                        role="menuitem"
                      >
                        <div className="flex items-center">
                          <FaMessage className="mr-2" />
                          <span>Контакти</span>
                        </div>
                      </a>
                      <Link
                        href={"/authors/georgi-tonkov"}
                        className={`block   text-lg py-2 px-4 hover-1`}
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
              <div className="flex justify-center  bottom-[20px] w-full">
                <Link href={"https://buymeacoffee.com/tonkoff"}>
                  <button
                    className={` font-bold border-2 mb-8 border-[#FFDD00] bg-yellow-300 text-gray-700 mx-4 mt-4
                    
                     transition  rounded-full text-lg font-bold p-2 px-4 flex items-center`}
                  >
                    <SiBuymeacoffee className="mr-2" />
                    Buy me a coffee
                  </button>
                </Link>
              </div>
              {/* <div className="flex  items-center justify-center  mt-8 h-full  w-5/6 mx-auto">
                <div className="flex w-full bg-yellow-50 bg-opacity-90   p-4 rounded-lg shadow-lg text-center">
                  <img
                    src="https://play-lh.googleusercontent.com/b0o-oSdu4Lv_cntdFXvZD3t-SM4He2d4deIfzJ_3xI9rHIutbQnU7xNqHno7o7p5m-Y=s48-rw"
                    alt="Game Logo"
                    className="h-16 w-16 rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-800 text-lg font-bold ">
                    Васил Левски - "Пробуждането"
                  </p>
                  <div className="flex justify-center items-center ">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.bulgarianhistory.roleplaying&hl=bg&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <Image
                        width={100}
                        height={100}
                        src={play}
                        alt=""
                        className="h-48 w-48"
                      />
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
