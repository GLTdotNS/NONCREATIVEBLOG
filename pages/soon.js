// pages/coming-soon.js
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../styles/notfound.png";

export default function ComingSoon() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 ">
      <div className="text-center">
        <div className="flex items-center justify-center">
          {" "}
          {/* Centering container */}
          <Image src={logo} alt="Logo" width={200} height={200} />
        </div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-300 to-pink-500">
          Coming Soon
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We are working hard to bring you a great experience.
        </p>
        <button
          onClick={handleModalToggle}
          className="mt-6 ml-4 px-4 py-2 font-semibold text-white text-black rounded-full border-2 border-pink-300 bg-pink-100 shadow-md hover:from-red-500 hover:to-pink-500 focus:outline-none"
        >
          Learn More
        </button>
        <button
          onClick={() => router.back()}
          className="mt-6 ml-4 px-4 py-2 font-semibold text-white text-black rounded-full border-2 border-pink-300 bg-pink-400 shadow-md hover:from-red-500 hover:to-pink-500 focus:outline-none"
        >
          Go Back
        </button>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                More Information
              </h2>
              <p className="text-gray-700 mb-4">
                We are currently developing the site and will be live soon. Stay
                tuned!
              </p>
              <button
                onClick={handleModalToggle}
                className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-pink-100 to-red-500 rounded-lg shadow-md hover:from-red-500 hover:to-pink-500 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
