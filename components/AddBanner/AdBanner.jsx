import Link from "next/link";
import { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const PoemBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    // Hide the banner and update session storage
    setIsVisible(false);
    sessionStorage.setItem("poemBannerVisible", "false");
  };

  return (
    <div
      className={`fixed z-50 w-11/12 lg:w-1/2 rounded-lg text-gray-700 mx-auto inset-x-0  bottom-0 bg-opacity-90 transition-transform transform ${
        isVisible ? "translate-y-[-24px]" : "translate-y-[124%]"
      } bg-yellow-400  p-4 md:p-6 lg:p-8 shadow-2xl`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-md md:text-xl lg:text-2xl font-bold">
            "Предсказанието на Пророчицата"
          </h2>
          <h2 className="text-sm">Онлайн версия</h2>
          <p className="mt-1 text-sm md:text-base lg:text-lg">
            Седнаха тогава боговете...
          </p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <img
            src="https://voluspa.noncreativeblog.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvoluspa.0c3d8755.png&w=2048&q=75"
            alt="Voluspa Banner"
            className="w-full h-24 md:h-48 w-full w-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
      <Link
        target="blank"
        className="font-bold  md:mt-12 ml-12 px-8 md:px-24 md:py-2 text-white rounded-md bg-yellow-700 "
        href={"https://voluspa.noncreativeblog.net/voluspa"}
      >
        Чети
      </Link>
      <button
        onClick={handleClose}
        className=" absolute text-sky-700 font-bold text-4xl top-[-30px] right-[-15px] bg-yellow-300 bg-opacity-100 hover:bg-yellow-700 rounded-full p-2 md:p-3 lg:p-4"
      >
        <RiCloseLargeLine size={30} />
      </button>
    </div>
  );
};

export default PoemBanner;
