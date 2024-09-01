import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js for Image component
import play from "../../styles/ad.png";
import logo from "../../styles/blog.png";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast.success(`🦄 Успешно абониране - !`, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setEmail("");
      } else {
        alert("Failed to subscribe.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full lg:w-10/12 bg-slate-50 mt-4 bg-opacity-90 text-gray-900 mx-auto border-t-2 border-t-gray-300 rounded-tl-lg rounded-tr-lg">
      <div className=" mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
        {/* Links Section */}
        <div>
          <h5 className="text-lg font-bold mb-4">Допълнителни линкове</h5>
          <ul className="text-gray-700">
            <li className="mb-2">
              <a
                href="/norse"
                className=" hover:text-white transition-colors duration-300"
              >
                Митология
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/runes"
                className=" hover:text-white transition-colors duration-300"
              >
                Руни
              </a>
            </li>

            <li className="mb-2">
              <a
                href="/art"
                className=" hover:text-white transition-colors duration-300"
              >
                Изкуство
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/cookies&privacy"
                className=" hover:text-white transition-colors duration-300"
              >
                Поверителност
              </a>
            </li>
          </ul>
        </div>

        {/* Advertisement Banner Section */}
        <div className="md:col-span-2 bg-gray-400 w-full lg:w-10/12 mx-auto p-4 rounded-lg shadow-lg">
          <h5 className="text-lg font-bold mb-4 ml-4">Реклама</h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.bulgarianhistory.roleplaying&hl=bg&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-auto transition-transform duration-300 transform hover:scale-105"
          >
            <Image
              className="lg:h-48 h-auto w-full rounded-lg"
              src={play}
              alt="Advertisement"
            />
          </a>
        </div>

        {/* Subscription Section */}
        <div className="w-full mx-auto">
          <h5 className="text-lg font-bold mb-4">Абонирайте се</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Вашият имейл адрес"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-lg mb-4 text-black"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 rounded-lg text-gray-700"
              disabled={loading}
            >
              {loading ? "Зареждане..." : "Абонирай се"}
            </button>
          </form>
        </div>

        {/* Social Icons */}
      </div>
      <div className="flex justify-center">
        <Image
          className="h-16 w-full lg:w-1/3 p-2 mb-4"
          width={500}
          height={500}
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="flex justify-center mt-6 space-x-4 mb-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-white transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-white transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="bg-gray-700/90 py-4 rounded-tl-lg rounded-tr-lg">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2024 by Georgi Tonkov.</p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
