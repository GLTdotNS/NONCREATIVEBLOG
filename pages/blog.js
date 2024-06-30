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
import gif from "../styles/36ae.gif";
import { CgCloseR } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import {
  MdOutlineSentimentDissatisfied,
  MdOutlineSentimentVerySatisfied,
} from "react-icons/md";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import design from "../styles/cover.png";
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
      setCategory("Книжки и филми");
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
      <div className="   mx-auto ">
        <div class="relative w-full absolute top-0 mx-auto mt-4 lg:mt-16">
          <Image
            src={cover}
            alt="noncreativeblog"
            class="w-full lg:w-10/12 h-auto  lg:h-[380px]  mx-auto   object-cover rounded-lg"
          />
        </div>
        <div className="container mx-auto">
          {" "}
          {/* Sub-navigation menu */}
          <nav className="sticky  top-[60px] lg:top-[80px] text-gray-700  mx-auto mb-12 z-10 flex justify-center mb-4   border-gray-700">
            <ul className="flex  w-11/12 lg:w-5/6  flex-wrap justify-center space-x-4 px-2 p-2 bg-gray-700  bg-opacity-60 rounded-b-full ">
              <li className="relative group">
                <button className="button-with-icon border-[1px] bg-yellow-100 border-gray-400 rounded-md  flex items-center p-1 font-bold text-sm  text-gray-700 hover:text-gray-600 transition-colors duration-300">
                  <FaSortAmountDownAlt />
                  <span className="ml-2">Сортирай</span>
                </button>

                <ul className="absolute left-[-35px] w-64 z-50 cursor-pointer rounded-lg bg-gray-200 shadow-2xl   hidden group-hover:block">
                  <li className="border-b-2 border-gray-100 ">
                    <span
                      onClick={() => handleSortChange("latest")}
                      className={`block flex items-center px-4 py-2 text-md text-gray-700 `}
                    >
                      <CgLastpass size={20} className="mr-2 text-black" />
                      Последно добавени
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => handleSortChange("readingTime")}
                      className={`block flex items-center px-4 border-b-2 border-gray-100 py-2 text-md  text-gray-700 }`}
                    >
                      <MdOutlineSentimentDissatisfied
                        size={20}
                        className="mr-2"
                      />
                      Най-кратки
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => handleSortChange("longest")}
                      className={`block flex items-center px-4 py-2 text-md  text-gray-700 }`}
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

              <li
                onClick={handleMenuToggle}
                className="relative group text-gray-700"
              >
                <button class="text-gray-700 border-[1px] bg-yellow-100 border-gray-400 rounded-md flex items-center font-bold text-sm p-1 focus:outline-none lg:hidden  ">
                  <GiSettingsKnobs size={20} className="mr-2" />
                  Филтри
                </button>
              </li>
            </ul>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 border-t-[1px] border-gray-100 ">
            {/* Left side column */}
            <div>
              <div className="hidden lg:block border-r-[1px] border-gray-400">
                <div className="w-full mb-4 flex justify-center items-center">
                  <div>
                    <h2 className="text-lg text-gray-700 font-semibold mb-2 text-center">
                      Който търси, намира.
                    </h2>
                    <div className="relative text-center w-full">
                      <form onSubmit={handleSearch}>
                        <input
                          type="text"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                          placeholder="Потърси..."
                          className="w-full p-3 w-[480px] h-18 rounded-full  bg-gray-100 focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="absolute inset-y-0 right-0 px-3  w-24 bg-yellow-300 text-gray-700 rounded-r-full flex items-center justify-center"
                        >
                          <FaSearch />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="p-4 ">
                  <div className="mb-8 p-4 bg-gray-100 backdrop-blur-lg bg-opacity-40 w-full rounded-lg">
                    <h2 className="text-xl text-gray-700 font-bold mb-4 flex items-center">
                      <FaRegFolderOpen className="mr-2" /> Категории
                    </h2>
                    <ul className="text-gray-700 text-lg cursor-pointer">
                      <li
                        className="mb-2 cursor-pointer"
                        onClick={() => handleCategoryChange("cooking")}
                      >
                        <span className=" hover:underline flex items-center">
                          <GiKnifeFork className="mr-2 text-slate-700" />
                          Готварски рецепти
                        </span>
                      </li>
                      <li
                        className="mb-2"
                        onClick={() => handleCategoryChange("books&movies")}
                      >
                        <span className="hover:underline flex items-center">
                          <MdOutlineFavorite className="mr-2 text-red-700" />{" "}
                          Любимо
                        </span>
                      </li>
                      <li
                        className="mb-2"
                        onClick={() => handleCategoryChange("Georgis stories")}
                      >
                        <span
                          href="/"
                          className="hover:underline flex items-center cursor-pointer"
                        >
                          <RxTimer className="mr-2 text-yellow-700" />
                          Хрониките на времето
                        </span>
                      </li>
                      <li className="  ">
                        <Link
                          href={"/norse"}
                          class=" flex items-center     hover:underline rounded-lg    transition-colors duration-300"
                        >
                          <GiVikingLonghouse className="mr-2 text-blue-600" />
                          Митология
                        </Link>
                      </li>
                      <li className="mb-2 mt-12 bg-yellow-300 rounded-md w-64 p-1">
                        <a
                          href="/"
                          className="hover:underline font-bold   flex justify-center text-gray-700 items-center"
                        >
                          <FcClearFilters className="mr-2" /> Изчисти филтрите
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-8 p-4  bg-gray-100 backdrop-blur-xl bg-opacity-30 w-full rounded-lg">
                    <h2 className="text-xl text-gray-700 font-bold mb-4 flex items-center">
                      <GiSupersonicArrow className="mr-2 text-red-400" />{" "}
                      Най-четени
                    </h2>
                    <ul className="text-gray-700">
                      {posts?.map((c, index) => (
                        <li key={index} className="mb-2">
                          <a
                            href={`/post/${c.slug.current}`}
                            className=" text-gray-700 flex items-center"
                          >
                            <FaLink className="mr-2" /> {c.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div class="w-full  bg-gray-100 backdrop-blur-xl bg-opacity-30 p-2 shadow-lg rounded-lg overflow-hidden  mb-2">
                  <div class="max-w-full   shadow-lg rounded-lg overflow-hidden p-2 ">
                    <div class=" text-left sm:text-left text-gray-700">
                      <Image
                        src={gif}
                        alt="noncreativeblog"
                        className="w-full h-full"
                      />

                      <div class="">
                        <p class="text-xl mb-4 text-center  bg-gradient-to-r from-yellow-200 via-orange-600 to-pink-700 bg-clip-text text-transparent text-4xl font-bold">
                          {author?.name}
                        </p>

                        <BlockContent
                          className="text-gray-100"
                          blocks={author?.bio}
                        />

                        <a
                          href="/authors/georgi-tonkov"
                          className="rounded-full p-1 mb-2 flex items-center justify-center  border-2 bg-yellow-300 font-bold  text-gray-700 w-full"
                        >
                          Виж повече за мен
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {menuOpen && (
                <div className="lg:hidden fixed w-10/12 h-screen left-0 flex items-center justify-center slide-in-from-left  overflow-x-scroll top-0 z-50 bg-gray-800 backdrop-blur-xl bg-opacity-70 ">
                  <div className=" relative ">
                    <button
                      onClick={handleMenuToggle}
                      class="text-gray-200 font-bold  flex items-center justify-between   w-full p-1 right-0 top-12 mt-2 absolute z-50  focus:outline-none lg:hidden slide-in-from-top "
                    >
                      Филтри
                      <CgCloseR size={30} className="mr-2" />
                    </button>
                    <div
                      className={`${
                        menuOpen
                          ? " transition h-[100vh] "
                          : "hidden h-0 duration"
                      } `}
                    >
                      <div className="w-full mb-4 flex justify-center items-center mt-24">
                        <div>
                          <h2 className="text-lg text-gray-100 font-semibold mb-2 text-center">
                            Който търси, намира.
                          </h2>
                          <div className="relative text-center w-full">
                            <form onSubmit={handleSearch}>
                              <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Потърси..."
                                className="w-full p-2 w-full h-8   rounded-full  bg-gray-100 focus:outline-none"
                              />
                              <button
                                type="submit"
                                className="absolute inset-y-0 right-0 px-3  w-12 bg-yellow-300 text-gray-700 rounded-r-full flex items-center justify-center"
                              >
                                <FaSearch />
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="p-2  border-gray-700">
                        <div className="mb-4 p-4 bg-gray-700 bg-opacity-70 mt-2   w-full rounded-lg cursor-pointer">
                          <ul className="text-gray-100 text-lg">
                            <li
                              className="mb-2"
                              onClick={() => handleCategoryChange("cooking")}
                            >
                              <span className=" hover:underline flex items-center">
                                <GiKnifeFork className="mr-2 text-slate-300" />
                                Готварски рецепти
                              </span>
                            </li>
                            <li
                              className="mb-2"
                              onClick={() =>
                                handleCategoryChange("books&movies")
                              }
                            >
                              <span className="hover:underline flex items-center">
                                <MdOutlineFavorite className="mr-2 text-red-700" />{" "}
                                Любимо
                              </span>
                            </li>
                            <li
                              className="mb-2"
                              onClick={() =>
                                handleCategoryChange("Georgis stories")
                              }
                            >
                              <span className="hover:underline flex items-center cursor-pointer">
                                <RxTimer className="mr-2 text-yellow-700" />
                                Хрониките на времето
                              </span>
                            </li>
                            <li className="  ">
                              <a
                                href={"/norse"}
                                class=" flex items-center     hover:underline rounded-lg    transition-colors duration-300"
                              >
                                <GiVikingLonghouse className="mr-2 text-blue-600" />
                                Митология
                              </a>
                            </li>
                            <li className="mb-2 mt-12 bg-yellow-300 rounded-md w-64 p-1">
                              <a
                                href="/"
                                className="hover:underline font-bold flex items-center text-gray-700 justify-center"
                              >
                                <FcClearFilters className="mr-2" /> Изчисти
                                филтрите
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mb-4 p-4 bg-gray-700 bg-opacity-50    w-full rounded-lg">
                          <h2 className="text-xl text-gray-100 font-bold mb-4 flex items-center">
                            <GiSupersonicArrow className="mr-2 text-red-200" />{" "}
                            Най-четени
                          </h2>
                          <ul className="text-gray-400">
                            {posts?.map((c, index) => (
                              <li key={index} className="mb-2">
                                <a
                                  href={`/post/${c.slug.current}`}
                                  className=" hover:underline text-blue-400 flex items-center"
                                >
                                  <FaLink className="mr-2 text-sm" />{" "}
                                  {c.title.slice(0, 30)}...
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div class="max-w-full  bg-gray-800 shadow-lg rounded-lg overflow-hidden p-2 ">
                          <div class=" text-left sm:text-left text-gray-100">
                            <Image
                              src={gif}
                              alt="noncreativeblog"
                              className="w-full h-full"
                            />

                            <div class="">
                              <p class="text-xl mb-4 text-center  bg-gradient-to-r from-pink-200 via-red-300 to-pink-400 bg-clip-text text-transparent text-4xl font-bold">
                                {author?.name}
                              </p>

                              <BlockContent
                                className="text-gray-100"
                                blocks={author?.bio}
                              />

                              <a
                                href="/authors/georgi-tonkov"
                                className="rounded-full p-1 mb-4 mt-4 bg-yellow-200 text-gray-700 flex items-center justify-center  border-2 border-yellow-300 font-bold  text-gray-300 w-full"
                              >
                                Виж повече за мен
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Right side column */}
            <div className="lg:col-span-2 p-4">
              <h1 className="p-2 w-full mb-8  bg-gradient-to-r from-yellow-100 via-yellow-100 to-orange-200     rounded-md text-center font-bold text-xl text-gray-900 ">
                {category}
              </h1>

              <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  flex items-center ">
                {posts?.map((c, index) => (
                  <>
                    {" "}
                    <a
                      key={c.slug}
                      className="relative group "
                      href={`/post/tonkoff/${c.slug.current}`}
                    >
                      <div className="relative h-[400px] w-full mx-auto  shadow-md overflow-hidden rounded-t-lg ">
                        <Image
                          className="h-full w-full object-cover center transition-transform transform hover:scale-110"
                          src={c.mainImage.asset.url}
                          alt={c.title}
                          width={500}
                          height={500}
                          priority={true}
                          quality={75}
                        />

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t  from-gray-700  to-transparent p-4">
                          <button className="mt-2 absolute text-sm right-8 bottom-4 text-yellow-300 bg-gray-700 backdrop-blur-sm bg-opacity-30  translate-x-4  transition-transform transform hover:scale-100 md:transform-none text-center px-4 py-2 rounded-lg flex items-center">
                            Прочети
                            <FaArrowRight className="h-6 w-6 ml-2" />
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 bg-gradient-to-t  bg-gray-700  text-white  px-2 proxima">
                          {c.readingTime} минути
                        </div>
                      </div>
                      <div className="  top-0 left-0 text-slate-900 font-semibold rounded-b-md text-lg bg-gray-100  bg-opacity-100 p-4">
                        {c.title.slice(0, 30)}...
                      </div>
                    </a>{" "}
                  </>
                ))}
              </div>
              <div> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
