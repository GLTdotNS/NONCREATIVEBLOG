import { useState, useEffect } from "react";

const PoemBanner = () => {
  const [isVisible, setIsVisible] = useState(() => {
    // Retrieve the visibility state from session storage
    return sessionStorage.getItem("poemBannerVisible") !== "false";
  });

  useEffect(() => {
    if (isVisible) {
      // Show the banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    // Hide the banner and update session storage
    setIsVisible(false);
    sessionStorage.setItem("poemBannerVisible", "false");
  };

  return (
    <div
      className={`fixed w-11/12 lg:w-1/2 rounded-full text-gray-700 mx-auto inset-x-0  bottom-0 bg-opacity-90 transition-transform transform ${
        isVisible ? "translate-y-[-24px]" : "translate-y-full"
      } bg-yellow-400  p-4 md:p-6 lg:p-8 shadow-lg`}
    >
      <div className="container mx-auto flex justify-center items-center">
        <div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
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
            className="h-16 md:h-24 lg:h-32 w-auto object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
      <button
        onClick={handleClose}
        className=" absolute top-[-12px] right-0 bg-yellow-600 hover:bg-yellow-700 rounded-full p-2 md:p-3 lg:p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default PoemBanner;
