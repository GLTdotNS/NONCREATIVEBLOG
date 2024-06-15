import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaLink, FaRegFolderOpen, FaStar, FaReddit } from "react-icons/fa";
import cover from "../styles/cover.png";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { GiSupersonicArrow } from "react-icons/gi";
import { FcClearFilters } from "react-icons/fc";
import Head from "next/head";
import { CgLastpass } from "react-icons/cg";
import Link from "next/link";

import { CgCloseR } from "react-icons/cg";
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
      pathname: "/blog", // Assuming the pathname is '/posts'
      query: { ...router.query, category: newCategory }, // Add the new category to the query
    });
  };
  const handleSortChange = (sortBy) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sortBy },
    });
  };
  return (
    <div className="container   mx-auto ">
      <Head>
        <meta
          name="description"
          content={
            "For those who loves redhead girls. Explore a world of insights and inspiration with our engaging blog. Discover expert  sex tips, thought-provoking discussions, and captivating hot stories on Redheadporn.net. Join us on a journey of discovery to redheaded girls and their beauty!"
          }
        />
        <meta
          name="keywords"
          content="sex tips, sex, redhead girl blog, OnlyFans reviews, personal sex stories"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Sex tips" />
        <meta
          property="og:description"
          content="For those who loves redhead girls. Explore a world of insights and inspiration with our engaging blog. Discover expert  sex tips, thought-provoking discussions, and captivating hot stories on Redheadporn.net. Join us on a journey of discovery to redheaded girls and their beauty!"
        />

        <meta property="og:url" content="https://www.redheadporn.net" />
        <meta property="og:type" content="article" />

        <link rel="canonical" href="https://www.redheadporn.net" />
      </Head>
      <div className="h-20"></div>
      <div className="relative w-full  lg:h-[500px] sm:h-[300px]">
        <header className="relative flex flex-col justify-center items-center h-full">
          <div className="absolute inset-0 ">
            <Image
              src={cover}
              alt="Header Background"
              className="h-full w-full sm:h-[300px] lg:h-[500px] rounded-lg  w-full "
            />
          </div>
          <div className="absolute inset-0  h-full bg-gray-900 opacity-50"></div>
          <div className=" text-gray-100 flex flex-col md:flex-[row] justify-between items-center relative z-10">
            <div className="text-center mb-8 md:mb-0">
              <h1 className="text-2xl p-4 lg:text-5xl font-bold w-full   bg-gradient-to-r from-pink-200 via-red-300 to-pink-400 bg-clip-text text-transparent ">
                Добре дошли в блога на Тонков
              </h1>
              <p className="text-lg md:text-xl">Един некреативен блог </p>
            </div>
          </div>
        </header>
      </div>

      {/* Sub-navigation menu */}
      <nav className="sticky top-[47px] lg:top-[80px] text-gray-700  mx-auto mb-12 z-10 flex justify-center mb-4   border-gray-700">
        <ul className="flex  w-11/12 lg:w-5/6  flex-wrap justify-center space-x-4 px-2 p-2 bg-gray-700 backdrop-blur-xl bg-opacity-30 rounded-b-full ">
          <li className="relative group focus:outline-none hidden lg:block ">
            <Link
              href={"/"}
              class=" flex items-center p-1  border-[1px] bg-yellow-100 border-gray-400 rounded-md  text-gray-700 text-sm font-bold rounded-lg   transition-colors duration-300"
            >
              Лични истории
            </Link>
          </li>
          <li className="relative group">
            <button className="button-with-icon border-[1px] bg-yellow-100 border-gray-400 rounded-md  flex items-center p-1 font-bold text-sm  text-gray-700 hover:text-gray-600 transition-colors duration-300">
              <FaSortAmountDownAlt />
              <span className="ml-2">Сортирай</span>
            </button>

            <ul className="absolute left-[-35px] w-64 z-50 cursor-pointer rounded-lg bg-pink-50 shadow-2xl   hidden group-hover:block">
              <li className="border-b-2 border-red-200 p-2 ">
                <a
                  onClick={() => handleSortChange("latest")}
                  className={`block flex items-center px-4 py-2 text-md text-gray-700 `}
                >
                  <CgLastpass size={20} className="mr-2 text-black" />
                  Последно добавени
                </a>
              </li>
              <li className=" p-2 ">
                <a
                  onClick={() => handleSortChange("readingTime")}
                  className={`block flex items-center px-4 py-2 text-md  text-gray-700 }`}
                >
                  <MdOutlineSentimentDissatisfied size={20} className="mr-2" />
                  Най-кратки
                </a>
              </li>
              <li className=" p-2 ">
                <a
                  onClick={() => handleSortChange("longest")}
                  className={`block flex items-center px-4 py-2 text-md  text-gray-700 }`}
                >
                  <MdOutlineSentimentVerySatisfied size={20} className="mr-2" />
                  Най-дълги
                </a>
              </li>
            </ul>
          </li>

          <li
            onClick={handleMenuToggle}
            className="relative group text-gray-700"
          >
            <button class="text-gray-700 border-[1px] bg-yellow-100 border-gray-400 rounded-md flex items-center font-bold text-sm p-1 focus:outline-none lg:hidden  ">
              <GiSettingsKnobs size={20} className="mr-2" />
              Категории и повече
            </button>
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 border-t-[1px] border-gray-700 ">
        {/* Left side column */}
        <div>
          <div className="hidden lg:block border-r-[1px] border-gray-700">
            <div className="p-4 ">
              {/* <div class="w-full  bg-gray-900  p-2 shadow-lg rounded-lg overflow-hidden  mb-2">
                <div class=" text-center sm:text-left text-gray-100">
                  <Image
                    class=" h-64  w-full object-contain "
                    src={cover}
                    alt="Your Name"
                  />
                  <div class="">
                    <p class="text-xl text-center p-4 leading-tight text-gray-100 bg-gradient-to-r from-pink-200 via-red-300 to-pink-400 bg-clip-text text-transparent text-4xl font-bold">
                      {author[0]?.name}
                    </p>

                    <BlockContent
                      className="text-gray-100"
                      blocks={author[0]?.bio}
                    />
                    <p class="mt-2 mb-8 text-gray-100">
                      Моята мисия е най-вече да се забавлявам и споделям свои
                      лични истории, както и съвети в области, в които имам
                      компетентност (или пък не). Имам разнообразни интереси и
                      познания в различни сфери, най-вече изявани в сферата на
                      добрата стара кухня.
                    </p>
                    <a
                      href="/about"
                      className="rounded-full p-2 flex items-center justify-center  border-2 border-yellow-400  text-gray-300 w-1/2 m-auto mb-4"
                    >
                      Научи повече за мен
                    </a>
                  </div>
                </div>
              </div> */}
              <div className="mb-8 p-4 bg-gray-800 w-full rounded-lg">
                <h2 className="text-xl text-gray-100 font-bold mb-4 flex items-center">
                  <FaRegFolderOpen className="mr-2" /> Категории
                </h2>
                <ul className="text-gray-200 text-lg">
                  <li className="mb-2">
                    <a href="#" className=" hover:underline flex items-center">
                      <MdTipsAndUpdates className="mr-2 text-yellow-300" />
                      Готварски рецепти
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline flex items-center">
                      <FaStar className="mr-2 text-yellow-400" /> Любими книги и
                      филми
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/"
                      className="hover:underline flex items-center cursor-pointer"
                    >
                      <FaHotjar className="mr-2" /> Лични истории
                    </a>
                  </li>

                  <li className="mb-2 mt-12 bg-gray-600 rounded-md w-64 p-1">
                    <a
                      href="/"
                      className="hover:underline font-bold   flex items-center"
                    >
                      <FcClearFilters className="mr-2" /> Изчисти филтрите
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 p-4 bg-gray-800 w-full rounded-lg">
                <h2 className="text-xl text-gray-100 font-bold mb-4 flex items-center">
                  <GiSupersonicArrow className="mr-2 text-red-200" /> Най-четени
                </h2>
                <ul className="text-gray-400">
                  {posts?.map((c, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href={`/post/${c.slug.current}`}
                        className=" hover:underline flex items-center"
                      >
                        {c.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="lg:hidden fixed w-5/6 inset-0 flex items-center justify-center slide-in-from-left fixed overflow-x-scroll top-0 z-50 z w- md:max-w-sm bg-gray-800  text-">
              <div className=" relative ">
                <button
                  onClick={handleMenuToggle}
                  class="text-gray-200 font-bold p-1 flex items-center justify-between   w-full  p-4 right-0 top-2 mt-2 absolute z-50  focus:outline-none lg:hidden slide-in-from-top "
                >
                  Категории и повече
                  <CgCloseR size={30} className="mr-2" />
                </button>
                <div
                  className={`${
                    menuOpen
                      ? "block transition h-[100vh] "
                      : "hidden h-0 duration"
                  } `}
                >
                  <div className="p-2  border-gray-700">
                    <div className="mb-4 p-4 bg-gray-700 mt-24    w-full rounded-lg">
                      <ul className="text-gray-200 text-lg">
                        <li className="mb-2 ">
                          <a
                            href="#"
                            className=" hover:underline flex items-center"
                          >
                            <MdTipsAndUpdates className="mr-2 text-yellow-300" />{" "}
                            Готварски рецепти
                          </a>
                        </li>
                        <li className="mb-2">
                          <a
                            href="#"
                            className="hover:underline flex items-center"
                          >
                            <FaStar className="mr-2 text-yellow-400" /> Любими
                            книги и филми
                          </a>
                        </li>
                        <li className="mb-2">
                          <a
                            href="/"
                            className="hover:underline flex items-center cursor-pointer"
                          >
                            <FaHotjar className="mr-2 text-red-400" /> Лични
                            истории
                          </a>
                        </li>
                        <li className="  ">
                          <Link
                            href={"/"}
                            class=" flex items-center   text-[#00AFF0]   hover:underline rounded-lg   hover:text-pink-300 transition-colors duration-300"
                          >
                            Скандинавска митология
                          </Link>
                        </li>
                        <li className="mb-2 mt-12  rounded-md bg-gray-400  text-center">
                          <a
                            href="/"
                            className="hover:underline font-bold flex items-center justify-center"
                          >
                            <FcClearFilters className="mr-2" /> Изчисти филтрите
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-8 p-4 bg-gray-700 w-full rounded-lg">
                      <h2 className="text-xl text-gray-100 font-bold mb-4 flex items-center">
                        <GiSupersonicArrow className="mr-2 text-red-200" />{" "}
                        Най-четени
                      </h2>
                      <ul className="text-gray-400">
                        {posts?.map((c, index) => (
                          <li key={index} className="mb-2">
                            <a
                              href={`/post/${c.slug.current}`}
                              className=" hover:underline flex items-center"
                            >
                              <FaLink className="mr-2 text-sm" />{" "}
                              {c.title.slice(0, 30)}...
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div class="max-w-full  bg-gray-800 shadow-lg rounded-lg overflow-hidden p-2 ">
                      <div class=" text-center sm:text-left text-gray-100">
                        <Image
                          class="mb-2 w-full object-contain "
                          src={""}
                          alt="Your Name"
                        />
                        <div class="">
                          <p class="text-xl mb-4 text-center  bg-gradient-to-r from-pink-200 via-red-300 to-pink-400 bg-clip-text text-transparent text-4xl font-bold">
                            {author[0]?.name}
                          </p>

                          <BlockContent
                            className="text-gray-100"
                            blocks={author[0]?.bio}
                          />
                          <p class="mt-2 mb-4 text-gray-100 p-  flex-row">
                            Моята мисия е най-вече да се забавлявам и споделям
                            свои лични истории, както и съвети в области, в
                            които имам компетентност (или пък не). Имам
                            разнообразни интереси и познания в различни сфери,
                            най-вече изявани в сферата на добрата стара кухня.
                          </p>
                          <a
                            href="/about"
                            className="rounded-full p-1 mb-2 flex items-center justify-center  border-2 font-bold  text-pink-300 w-full"
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
          <h1 className="p-2 w-full mb-8  bg-gradient-to-r from-yellow-100 via-red-200 to-orange-400 backdrop-blur-4xl bg-opacity-0    rounded-md text-center font-bold text-xl text-gray-900 ">
            {category}
          </h1>
          {/* <div class="w-full mb-4 flex justify-center items-center">
            <div>
              <h2 class="text-lg text-gray-100 font-semibold mb-2 text-center">
                Search
              </h2>
              <div class="relative w-[350px] text-center">
                <input
                  value=""
                  type="text"
                  placeholder="Search..."
                  class="w-full p-2 pr-10 border border-gray-300 bg-gray-100 rounded-md"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 px-3 py-2 bg-pink-500 text-white rounded-md"
                >
                  Search
                </button>
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-1 mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {posts?.map((c, index) => (
              <a
                key={c.slug}
                className="relative group"
                href={`/post/${c.slug.current}`}
              >
                <div className="post-card overflow-hidden rounded-lg h-full shadow-md bg-gray-700 text-gray-300">
                  <div className="w-full h-[300px] rounded-t-lg overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={c.mainImage.asset.url}
                      alt={c.title}
                    />
                  </div>

                  <div className="post-details p-4">
                    <h2 className="post-title text-md font-bold text-gray-100 mb-2">
                      {c.title.length > 50
                        ? c.title.slice(0, 40) + "..."
                        : c.title}
                    </h2>
                    <p className="post-description text-gray-200  text-sm mb-4">
                      {c.description.slice(0, 200)}...
                    </p>
                    <div className="flex items-center justify-between mt-4 ">
                      <div className="flex items-center">
                        <span className="post-duration border-pink-100 text-gray-100 px-2 py-2 text-sm mr-2 underline">
                          {c.readingTime} за четене
                        </span>
                      </div>
                      <span className="read-more bg-yellow-300 text-gray-700  px-4 p-1 rounded-full transition-colors duration-300">
                        Прочети
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div> </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
