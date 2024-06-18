// pages/success.js
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import img from "../../styles/4N8.gif";
import Image from "next/image";
import { SiBuymeacoffee } from "react-icons/si";
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

const SuccessPage = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const { innerWidth, innerHeight } = window;
      setWindowDimensions({ width: innerWidth, height: innerHeight });
    };

    // Update dimensions on component mount
    updateWindowDimensions();

    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", updateWindowDimensions);

    // Clean up function to remove event listener
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    let timer;

    // Start confetti effect on component mount
    setConfettiActive(true);

    // Stop confetti after 3 seconds
    timer = setTimeout(() => {
      setConfettiActive(false);
    }, 3000);

    // Clean up function to clear timeout
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center shadow-lg w-full lg:w-10/12 mx-auto">
      <div className="h-64 ">
        <Image src={img} className="w-full h-full" />
      </div>

      <h1 className="text-4xl font-bold mb-4 text-green-600">
        Съобщението е изпратено успешно.
      </h1>
      <p className="text-lg mb-8 text-gray-700">
        Ще Ви отговаря при първа възможност.
      </p>

      {confettiActive && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={1000}
          recycle={false}
          run={true}
        />
      )}

      <div className="flex gap-4 mt-8">
        <a
          href="https://www.buymeacoffee.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-300 text-gray-700 flex items-center px-6 py-2 rounded-lg transition"
        >
          <SiBuymeacoffee className="mr-2" /> Buy me a coffee
        </a>
      </div>
      <a href="/" className="mt-4 px-2 bg-yellow-100 p-2 rounded-full">
        Назад към начална страница
      </a>
    </div>
  );
};

export default SuccessPage;
