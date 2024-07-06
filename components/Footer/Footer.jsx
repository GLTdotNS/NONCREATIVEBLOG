import React, { useState, useEffect } from "react";
import Image from "next/image";
import play from "../../styles/play.svg"; // Ensure your play.svg is in the public folder

const Footer = () => {
  const quotes = [
    {
      text: "Luck is what happens when preparation meets opportunity.",
      author: "Seneca",
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState({});

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    changeQuote();
    const interval = setInterval(changeQuote, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-100 w-full mt-24 p-4 rounded-lg shadow-xl lg:w-5/6 mx-auto text-gray-700 py-8">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Motivational quote */}
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0 text-center lg:text-left">
          <p className="text-lg font-semibold">
            "{currentQuote.text}"
            <br />― {currentQuote.author}
          </p>
        </div>

        {/* Center: Navigation links */}
        <div className="w-full lg:w-1/3 text-center my-4 lg:my-0">
          <nav>
            <ul className="flex flex-col sm:flex-row md:flex-row">
              <li className="mx-2">
                <a href="/">Интересно</a>
              </li>
              <li className="mx-2">
                <a href="/norse">Митология</a>
              </li>
              <li className="mx-2">
                <a href="/author/georgi-tonkov">За мен</a>
              </li>
              <li className="mx-2">
                <a href="/contact/email">Контакти</a>
              </li>
              <li className="mx-2">
                <a href="/cookies&privacy">Поверителност</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right side: Game promotion */}
        <div className="w-full lg:w-1/3 text-center lg:text-right">
          <a
            href="https://play.google.com/store/apps/details?id=com.bulgarianhistory.roleplaying&hl=bg&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-full h-auto"
          >
            <div className="flex justify-center items-center bg-yellow-100 p-2 rounded-lg">
              <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden flex justify-center items-center">
                <img
                  src="https://play-lh.googleusercontent.com/b0o-oSdu4Lv_cntdFXvZD3t-SM4He2d4deIfzJ_3xI9rHIutbQnU7xNqHno7o7p5m-Y=s48-rw"
                  alt="Play Store"
                  className="h-full w-full"
                />
              </div>

              <div className="ml-4 text-left">
                <p className="text-gray-800 text-lg font-bold">
                  Васил Левски - "Пробуждането"
                </p>
                <p className="flex items-center text-gray-600">
                  Изтеглете играта от{" "}
                  <Image
                    className="ml-2 h-16 w-16"
                    width={100}
                    height={100}
                    src={play}
                  />
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Copyright and Privacy Link */}
      <div className="mt-4 text-center">
        <a
          href="https://buymeacoffee.com/tonkoff"
          className="text-gray-700 bg-yellow-100 px-4 py-2 rounded-lg"
        >
          Абонирай се
        </a>
      </div>

      {/* Copyright Text */}
      <div className="mt-4 text-sm text-gray-600 text-center">
        &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
