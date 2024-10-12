import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaLink, FaRegFolderOpen, FaStar, FaReddit } from "react-icons/fa";
import cover from "../styles/cover.png";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { GiSupersonicArrow } from "react-icons/gi";
import { FcClearFilters } from "react-icons/fc";
import { RxTimer } from "react-icons/rx";
import { CgLastpass } from "react-icons/cg";
import Link from "next/link";
import { GiVikingLonghouse } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import gif from "../styles/jojo.JPG";
import { CgCloseR } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import {
  MdOutlineSentimentDissatisfied,
  MdOutlineSentimentVerySatisfied,
} from "react-icons/md";
import Image from "next/image";

import { GiSettingsKnobs } from "react-icons/gi";

export function Blog({ posts, initialCategory, author }) {
  const router = useRouter();
  const [category, setCategory] = useState(initialCategory);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    router.push({
      pathname: "/", // Assuming the pathname is '/posts'
      query: { ...router.query, category: newCategory }, // Add the new category to the query
    });
  };
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: {
        search: searchInput,
      },
    });
  };

  const handleSortChange = (sortBy) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sortBy },
    });
  };
  switch (category) {
    case "Georgis stories":
      setCategory("Лични истории");

      break;
    case "bullshits":
      setCategory("Разни теми");

      break;
    case "books&movies":
      setCategory("Любимо");
      break;
    case "cooking":
      setCategory("Готварски рецепти");
      break;
    case null:
      setCategory("Всички постове");
      break;
    default:
      break;
  }
  return (
    <>
      {" "}
      <div className="mx-auto bg-gray-900 text-gray-100">
        <div className="relative w-full absolute top-0 mx-auto mt-4 lg:mt-16">
          <Image
            src={cover}
            alt="noncreativeblog"
            className="w-full lg:w-10/12 h-auto lg:h-[380px] mx-auto object-cover rounded-lg border-[2px] border-yellow-500 shadow-xl"
          />
        </div>

        <div className="container mx-auto">
          {/* Sub-navigation menu */}
          <nav className="sticky top-[60px] lg:top-[80px] text-gray-300 mx-auto mb-12 z-10 flex justify-center border-b-2 border-gray-700 bg-gray-800 bg-opacity-60 rounded-b-lg">
            <ul className="flex w-11/12 lg:w-5/6 flex-wrap justify-center space-x-4 px-2 p-2">
              <li className="relative group">
                <button className="button-with-icon border-[1px] bg-gray-800 border-gray-400 rounded-md flex items-center p-1 font-bold text-sm text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                  <FaSortAmountDownAlt />
                  <span className="ml-2">Сортирай</span>
                </button>

                <ul className="absolute left-[-35px] w-64 z-50 cursor-pointer rounded-lg bg-gray-700 shadow-2xl hidden group-hover:block">
                  <li className="border-b-[1px] border-gray-500 hover:bg-gray-600 transition">
                    <span
                      onClick={() => handleSortChange("latest")}
                      className="block flex items-center px-4 py-2 text-md text-gray-300 hover:text-yellow-300"
                    >
                      <CgLastpass size={20} className="mr-2 text-white" />
                      Последно добавени
                    </span>
                  </li>
                  <li className="border-b-[1px] border-gray-500 hover:bg-gray-600 transition">
                    <span
                      onClick={() => handleSortChange("readingTime")}
                      className="block flex items-center px-4 py-2 text-md text-gray-300 hover:text-yellow-300"
                    >
                      <MdOutlineSentimentDissatisfied
                        size={20}
                        className="mr-2"
                      />
                      Най-кратки
                    </span>
                  </li>
                  <li className="hover:bg-gray-600 transition">
                    <span
                      onClick={() => handleSortChange("longest")}
                      className="block flex items-center px-4 py-2 text-md text-gray-300 hover:text-yellow-300"
                    >
                      <MdOutlineSentimentVerySatisfied
                        size={20}
                        className="mr-2"
                      />
                      Най-дълги
                    </span>
                  </li>
                </ul>
              </li>

              <li onClick={handleMenuToggle} className="relative group">
                <button className="text-gray-300 border-[1px] bg-gray-800 border-gray-400 rounded-md flex items-center font-bold text-sm p-1 focus:outline-none lg:hidden">
                  <GiSettingsKnobs size={20} className="mr-2" />
                  Филтри
                </button>
              </li>
            </ul>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 border-t-[2px] border-gray-800">
            {/* Left side column */}
            <div>
              <div className="hidden lg:block border-r-[2px] border-gray-800 pr-4">
                <div className="mb-4">
                  <h2 className="text-lg text-yellow-400 font-semibold mb-2 text-center">
                    Който търси, намира.
                  </h2>
                  <div className="relative text-center w-full">
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Потърси..."
                        className="w-full p-3 w-[480px] rounded-full bg-gray-800 border-[1px] border-yellow-300 focus:outline-none text-gray-300"
                      />
                      <button
                        type="submit"
                        className="absolute inset-y-0 right-0 px-3 w-24 bg-yellow-500 text-gray-900 rounded-r-full flex items-center justify-center"
                      >
                        <FaSearch />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="p-4 bg-gray-800 backdrop-blur-lg bg-opacity-40 rounded-lg border-[1px] border-gray-700 shadow-lg">
                  <h2 className="text-xl text-yellow-400 font-bold mb-4 flex items-center">
                    <FaRegFolderOpen className="mr-2" /> Категории
                  </h2>
                  <ul className="text-gray-300 text-lg cursor-pointer">
                    <li className="mb-2 cursor-pointer hover:text-yellow-400">
                      <span className="hover:underline flex items-center">
                        <GiKnifeFork className="mr-2 text-yellow-500" />
                        Готварски рецепти
                      </span>
                    </li>
                    <li className="mb-2 hover:text-yellow-400">
                      <span className="hover:underline flex items-center">
                        <MdOutlineFavorite className="mr-2 text-red-500" />
                        Любимо
                      </span>
                    </li>
                    <li className="mb-2 hover:text-yellow-400">
                      <span className="hover:underline flex items-center">
                        <RxTimer className="mr-2 text-yellow-500" />
                        Хрониките на времето
                      </span>
                    </li>

                    <li className="mb-2 mt-12 bg-yellow-500 text-gray-900 rounded-md w-64 p-1">
                      <a
                        href="/"
                        className="font-bold flex justify-center items-center"
                      >
                        <FcClearFilters className="mr-2" /> Изчисти филтрите
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-gray-800 bg-opacity-50 rounded-lg border-[1px] border-gray-700 shadow-md">
                  <h2 className="text-xl text-yellow-400 font-bold mb-4 flex items-center">
                    <GiSupersonicArrow className="mr-2 text-red-400" />{" "}
                    Най-четени
                  </h2>
                  <ul className="text-gray-300">
                    {posts?.map((c, index) => (
                      <li key={index} className="mb-2">
                        <a
                          href={`/post/tonkoff/${c.slug.current}`}
                          className="hover:underline text-yellow-400 flex items-center"
                        >
                          <FaLink className="mr-2" /> {c.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side column */}
            <div className="lg:col-span-2 p-4">
              <h1 className="p-4 mb-8 bg-gray-800 bg-opacity-50 rounded-md text-center font-bold text-2xl text-yellow-500 border-[1px] border-gray-700">
                {category}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {posts?.map((c, index) => (
                  <a
                    key={c.slug}
                    className="group"
                    href={`/post/tonkoff/${c.slug.current}`}
                  >
                    <div className="relative h-[400px] w-full mx-auto rounded-lg border-[2px] border-gray-700 shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                      <Image
                        className="h-full w-full object-cover center transition-transform transform group-hover:scale-110"
                        src={c?.mainImage.asset.url}
                        alt={c.title}
                        width={500}
                        height={500}
                        priority={true}
                        quality={75}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                        <button className="mt-2 absolute right-8 bottom-4 text-gray-100 bg-yellow-600 backdrop-blur-sm bg-opacity-50 text-center px-4 py-2 rounded-lg flex items-center">
                          Прочети
                          <FaArrowRight className="ml-2" />
                        </button>
                      </div>
                      <div className="absolute bottom-0 left-0 bg-gray-800 text-gray-100 px-2 rounded-md">
                        {c.readingTime} минути
                      </div>
                    </div>
                    <div className="mt-2 text-gray-100 font-semibold text-lg">
                      {c.title.slice(0, 30)}...
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
