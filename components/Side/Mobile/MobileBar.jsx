import React, { useState } from "react";
import { FcClearFilters } from "react-icons/fc";
import { FaLink, FaRegFolderOpen, FaStar, FaSearch } from "react-icons/fa";
import { GiSupersonicArrow } from "react-icons/gi";
import gif from "../../../styles/36ae.gif";
import BlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { CgCloseR } from "react-icons/cg";
const MobileBar = ({ posts, categories, author, initialCategory }) => {
  const [category, setCategory] = useState(initialCategory);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, category: newCategory }, // Add the new category to the query
    });
  };
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: router.pathname,
      query: {
        search: searchInput,
      },
    });
  };
  return (
    <div className="lg:hidden fixed w-10/12 left-0 flex items-center justify-center slide-in-from-left overflow-x-scroll top-0 z-50 bg-gray-800 bg-opacity-95">
      <div className="relative">
        <button
          onClick={handleMenuToggle}
          className="text-gray-200 font-bold flex items-center justify-between w-full p-1 right-0 top-2 mt-2 absolute z-50 focus:outline-none lg:hidden slide-in-from-top"
        >
          Категории
          <CgCloseR size={30} className="mr-2" />
        </button>
        <div className="w-full mb-4 flex justify-center items-center  mt-24">
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
                  className="w-full p-3 w-full  h-18 rounded-full  bg-gray-100 focus:outline-none"
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
        <div
          className={`${
            menuOpen ? "transition h-[100vh]" : "hidden h-0 duration"
          }`}
        >
          <div className="p-2 border-gray-700">
            <div className="mb-8 p-4 mt-4 w-full rounded-lg  bg-gray-700 bg-opacity-50 text-gray-100">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FaRegFolderOpen className="mr-2" /> Категории
              </h2>
              <ul className=" text-lg">
                <li
                  className="mb-2"
                  onClick={() => handleCategoryChange("Aesir")}
                >
                  <span className="hover:underline flex items-center">
                    <Image
                      className="h-8 w-8 mr-2 rounded-full"
                      width={100}
                      height={100}
                      src={
                        categories.filter((x) => x.title == "Aesir")[0].image
                          .asset.url
                      }
                    />{" "}
                    Ауси
                  </span>
                </li>
                <li
                  className="mb-2"
                  onClick={() => handleCategoryChange("Vani")}
                >
                  <span className="hover:underline flex items-center">
                    <Image
                      className="h-8 w-8 mr-2 rounded-full"
                      width={100}
                      height={100}
                      src={
                        categories.filter((x) => x.title == "Vani")[0].image
                          .asset.url
                      }
                    />{" "}
                    Вани
                  </span>
                </li>
                <li
                  className="mb-2"
                  onClick={() => handleCategoryChange("Giants")}
                >
                  <span className="hover:underline flex items-center">
                    <Image
                      className="h-8 w-8 mr-2 rounded-full"
                      width={100}
                      height={100}
                      src={
                        categories.filter((x) => x.title == "Giants")[0].image
                          .asset.url
                      }
                    />{" "}
                    Гиганти
                  </span>
                </li>
                <li onClick={() => handleCategoryChange("Cosmology")}>
                  <span className="hover:underline flex items-center">
                    <Image
                      className="h-8 w-8 mr-2 rounded-full"
                      width={100}
                      height={100}
                      src={
                        categories.filter((x) => x.title == "Cosmology")[0]
                          .image.asset.url
                      }
                    />{" "}
                    Космология
                  </span>
                </li>
                <li className="mb-2 mt-12 bg-yellow-300  text-center flex items-center text-gray-700 rounded-md w-64 p-1">
                  <a
                    href="/norse"
                    className="hover:underline font-bold flex justify-center items-center text-center mx-auto"
                  >
                    <FcClearFilters className="mr-2" /> Изчисти филтрите
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 p-4 bg-gray-700 bg-opacity-50 w-full rounded-lg">
              <h2 className="text-xl text-gray-100 font-bold mb-4 flex items-center">
                <GiSupersonicArrow className="mr-2 text-red-200" /> Най-четени
              </h2>
              <ul className="text-gray-400">
                {posts?.map((c, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={`/post/${c.slug.current}`}
                      className="hover:underline text-blue-400 flex items-center"
                    >
                      <FaLink className="mr-2 text-sm" /> {c.title.slice(0, 30)}
                      ...
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden p-2">
              <div className="text-left sm:text-left text-gray-100">
                <Image
                  src={gif}
                  alt="noncreativeblog"
                  className="w-full h-full"
                />
                <div>
                  <p className="text-xl mb-4 text-center bg-gradient-to-r from-pink-200 via-red-300 to-pink-400 bg-clip-text text-transparent text-4xl font-bold">
                    {author?.name}
                  </p>
                  <BlockContent
                    className="text-gray-100"
                    blocks={author?.bio}
                  />
                  <a
                    href="/about"
                    className="rounded-full mt-2 p-1 mb-2 flex items-center justify-center border-2 border-yellow-300 font-bold text-gray-300 w-full"
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
  );
};

export default MobileBar;
