import React, { useState, useEffect } from "react";

const Footer = () => {
  // Citati, които да се показват random
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

  // Стейт за текущия цитат
  const [currentQuote, setCurrentQuote] = useState({});

  // Функция за смяна на случайния цитат
  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  // Извикване на функцията за смяна на цитат на всеки 30 секунди
  useEffect(() => {
    changeQuote(); // За да се покаже първоначално случайният цитат
    const interval = setInterval(changeQuote, 3000); // Смяна на цитат на всеки 30 секунди

    // Чистене на интервала при размъкване на компонента
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-zinc-400 bg-opacity-10 w-full mt-24 p-4 rounded-lg shadow-xl lg:w-5/6 mx-auto text-gray-700 py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        {/* Лява страна: Мотивационен цитат */}
        <div className="w-full fade-in-element sm:w-auto mb-4 sm:mb-0 sm:mr-auto text-center sm:text-left">
          <p className="text-lg font-semibold">
            "{currentQuote.text}"
            <br />― {currentQuote.author}
          </p>
        </div>

        {/* Център: Навигационни връзки */}
        <nav className="w-full sm:w-auto mb-4 sm:mb-0 flex justify-center sm:justify-start">
          <a href="/cookies&privacy" className="text-gray-700 px-4 py-2">
            Курабийки & Поверителност
          </a>
          {/* Можете да добавите повече навигационни връзки тук */}
        </nav>

        {/* Дясна страна: Бутон за абонамент и банер за реклама */}
        <div className="w-full sm:w-auto text-center sm:text-right">
          <a
            href="https://buymeacoffee.com/tonkoff"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 mt-2 sm:mt-0 text-gray-700 font-semibold py-2 px-6 rounded-full shadow-lg mr-4"
          >
            Абонирай се
          </a>
          {/* Пример за рекламен банер (може да се промени с реален URL или изображение) */}
          <div className="hidden sm:block">
            <img
              src="https://via.placeholder.com/728x90.png?text=Advertisement"
              alt="Advertisement"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
