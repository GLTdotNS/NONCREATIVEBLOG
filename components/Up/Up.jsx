// components/PopupMessage.js
import { useEffect, useState } from "react";

const PopupMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the pop-up has already been shown in this session
    const hasShownPopup = sessionStorage.getItem("hasShownPopup");
    if (!hasShownPopup) {
      // Set a timeout to show the popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("hasShownPopup", "true");
      }, 5000);

      // Clear the timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleRedirect = () => {
    window.location.href = "https://old.noncreativeblog.net"; // Replace with the actual URL of the old site
  };

  if (!isVisible) return null;

  return (
    <div className="fixed slide-in-from-left left-0 top-1/2 transform z-50 -translate-y-1/2 bg-yellow-500 text-white p-4 rounded shadow-lg w-80">
      <p className="mb-4">
        Сайтът е в процес на обновяване. Само разделът{" "}
        <a href="/norse" className="underline text-blue-600">
          Митология
        </a>{" "}
        е готов.
      </p>
      <div className="flex items-center justify-center flex-col ">
        <button
          onClick={handleClose}
          className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200"
        >
          Разбирам
        </button>
        <button
          onClick={handleRedirect}
          className="bg-white text-blue-500 mt-4 py-2 px-4 rounded hover:bg-gray-200"
        >
          Отидете на стария сайт
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
