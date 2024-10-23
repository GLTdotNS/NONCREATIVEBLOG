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

  if (isVisible) return null;

  return (
    <div className="fixed top-0 slide-in-from-left h-screen left-0  transform z-50  bg-white text-gray-700 rounded shadow-lg w-full md:w-96">
      <img
        className="object-cover"
        src="https://pavelandreev.org/webp/uploads/uploads/pomosht-za-dmytro_66027d29b6711.webp"
        alt=""
      />

      <div className=" p-4 ">
        <p className="mb-4 mt-4">
          <strong className="text-yellow-600"> NONCREATIVEBLOG </strong> се
          ангажира с каузата <strong> "Помощ за Дмитро"</strong>. <br /> <br />{" "}
          Благодарение на вашата помощ първата интервенция е покрита, както и
          успешна. Сега отново малкият боец се нуждае от нас! Кампанията за
          събиране на средства е част от{" "}
          <a
            className="text-blue-500"
            href="https://pavelandreev.org/"
            target="_blank"
          >
            {" "}
            https://pavelandreev.org/
          </a>
          <br />
          <br />
          <strong>
            {" "}
            Диагнозата му е тежка форма на епилепсия. Поради сериозното и тежко
            състояние трябва спешно да му се направи операция на мозъка, за да
            има шанс да оживее и да се развива нормално.
          </strong>
        </p>
        <div className="flex items-center justify-center flex-col">
          <a
            href="https://pavelandreev.org/bg/campaign/pomosht-za-dmytro"
            target="_blank"
            onClick={handleClose}
            className="bg-gray-900 flex items-center text-white font-bold justify-center gap-4 border-[1px] border-black  rounded-full w-96 max-w-full mx-auto text-gray-700 py-2 px-4 rounded hover:opacity-[0.8]"
          >
            <img
              height={30}
              width={30}
              src="https://pavelandreev.org/v3/img/logos/logo.svg"
              alt=""
            />{" "}
            Дарение
          </a>

          <button className="mt-4 absolute bottom-4" onClick={handleClose}>
            Затвори
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
