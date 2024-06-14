// pages/partnerships.js

import { FaBlogger, FaCamera, FaBullhorn } from "react-icons/fa";
import monthly from "../styles/monthly.png";
import writer from "../styles/writer.png";
import model from "../styles/model.png";
// import ad from "../styles/ad.png";

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-[#010129] p-8 container mx-auto shadow-4xl">
      <header className="max-w-7xl h-[500px] mx-auto text-gray-100 mb-16 mt-24 ">
        <div className="flex flex-col md:flex-row items-center h-full">
          <div className="md:w-1/2 md:text-left text-left md:mb-0 mb-8">
            <h1 className="text-4xl font-extrabold mb-4">
              Partner with Us <span className="t">🤝</span>
            </h1>
            <p className="text-2xl mb-4">
              Join our thriving community with over{" "}
              <span className="font-bold">70k monthly views</span>. Whether
              you're a blogger, model, or advertiser, we have something for you!
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Getting Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={monthly.src}
              alt="Analytics"
              className="w-full max-w-3xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-black backdrop-blur-lg bg-opacity-50 p-4  rounded-lg shadow-lg">
            <FaBlogger className="text-6xl mx-auto mb-6 text-pink-400" />
            <h2 className="text-3xl font-semibold mb-6">Bloggers ✍️</h2>
            <p className="text-lg mb-8">
              Share your unique voice with our audience. Get featured and grow
              your readership.
            </p>
            <img
              src={writer.src}
              alt="Bloggers"
              className="mx-auto w-full rounded-lg mb-8"
            />
            <button className="px-8 py-3 border border-pink-400 text-pink-400 rounded-full hover:bg-pink-400 hover:text-white transition">
              Learn More
            </button>
          </div>

          <div className="bg-black backdrop-blur-lg bg-opacity-50 p-4  rounded-lg shadow-lg">
            <FaCamera className="text-6xl mx-auto mb-6 text-pink-400" />
            <h2 className="text-3xl font-semibold mb-6 ">Models 📸</h2>
            <p className="text-lg mb-8">
              Showcase your talent and collaborate with top brands. Get
              discovered by our audience.
            </p>
            <img
              src={model.src}
              alt="Models"
              className="mx-auto  rounded-lg mb-8"
            />
            <button className="px-8 py-3 border border-pink-400 text-pink-400 rounded-full hover:bg-pink-400 hover:text-white transition">
              Learn More
            </button>
          </div>

          <div className="bg-black backdrop-blur-lg bg-opacity-50 p-4  rounded-lg shadow-lg">
            <FaBullhorn className="text-6xl mx-auto mb-6 text-pink-400" />
            <h2 className="text-3xl font-semibold mb-6 ">Advertisers 📢</h2>
            <p className="text-lg mb-8">
              Reach a highly engaged audience. Advertise with us and see great
              results.
            </p>
            <img
              src={ad.src}
              alt="Advertisers"
              className="mx-auto rounded-lg mb-8"
            />
            <button className="px-8 py-3 border border-pink-400 text-pink-400 rounded-full hover:bg-pink-400 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
