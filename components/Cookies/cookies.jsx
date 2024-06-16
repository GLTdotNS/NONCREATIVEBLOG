// components/CookieBanner.js
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCookieBite } from "react-icons/fa";
import Link from "next/link";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 3); // 3 days from now
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ accepted: true, expiry: expiryDate })
    );
    setShowBanner(false);
  };

  useEffect(() => {
    const consent = JSON.parse(localStorage.getItem("cookieConsent"));
    if (consent) {
      const expiryDate = new Date(consent.expiry);
      if (new Date() > expiryDate) {
        localStorage.removeItem("cookieConsent");
        setShowBanner(true);
      }
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 slide-in-from-bot  left-0 w-full lg:w-1/2 bg-white bg-opacity-50 backdrop-blur-md text-black p-4  shadow-lg">
      <FaCookieBite
        size={50}
        className="text-yellow-500 text-2xl text-center w-full"
      />
      <div className="relative">
        <p>
          Ние използваме бисквитки, за да подобрим вашето изживяване.
          Посещавайки този сайт, вие се съгласявате с нашите{" "}
          <a href="/cookies&privacy" className="underline text-blue-600">
            правила за поверителност
          </a>
          .
        </p>
      </div>
      <div className="flex items-center">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full"
          onClick={acceptCookies}
        >
          Приемам
        </button>
        <AiOutlineClose
          className="ml-4 cursor-pointer text-xl absolute right-4 top-2 "
          onClick={() => setShowBanner(false)}
        />
      </div>
    </div>
  );
};

export default CookieBanner;
