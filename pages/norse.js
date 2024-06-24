import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaLink, FaRegFolderOpen, FaStar, FaReddit } from "react-icons/fa";
import cover from "../styles/viking.png";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { GiSupersonicArrow } from "react-icons/gi";
import { FcClearFilters } from "react-icons/fc";
import Head from "next/head";
import { CgLastpass } from "react-icons/cg";
import Link from "next/link";
import { GiVikingLonghouse } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import gif from "../styles/36ae.gif";
import { CgCloseR } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import {
  MdOutlineSentimentDissatisfied,
  MdOutlineSentimentVerySatisfied,
} from "react-icons/md";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import design from "../styles/cover.png";
import { GiSettingsKnobs } from "react-icons/gi";

export function Blog({ posts, initialCategory, author, categories }) {
  const router = useRouter();
  const [category, setCategory] = useState(initialCategory);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, category: newCategory }, // Add the new category to the query
    });
  };
  const handleSortChange = (sortBy) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sortBy },
    });
  };
  switch (category) {
    case "Aesir":
      setCategory("Ауси");

      break;
    case "Vani":
      setCategory("Вани");

      break;
    case "Giants":
      setCategory("Гиганти");
      break;
    case "Cosmology":
      setCategory("Космология");
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
        <div class="relative w-full absolute top-0 mx-auto mt-4 lg:mt-16 ">
          <Image
            src={cover}
            alt="noncreativeblog"
            class="w-full lg:w-10/12 h-auto  lg:h-[380px]  mx-auto   object-cover rounded-b-lg "
            quality={75}
            priority={true}
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
                  Категории
                </button>
              </li>
            </ul>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 border-t-[1px] border-gray-100 ">
            {/* Left side column */}
            <div className="flex">
              <div className="hidden lg:block border-r-[1px] border-gray-400 sticky top-40 h-screen overflow-auto">
                <div className="p-4">
                  <div className="mb-8 p-4 bg-gray-100 backdrop-blur-lg bg-opacity-40 w-full rounded-lg">
                    <h2 className="text-xl text-gray-700 font-bold mb-4 flex items-center">
                      <FaRegFolderOpen className="mr-2" /> Категории
                    </h2>
                    <ul className="text-gray-700 text-lg">
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
                              categories.filter((x) => x.title == "Aesir")[0]
                                .image.asset.url
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
                              categories.filter((x) => x.title == "Vani")[0]
                                .image.asset.url
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
                              categories.filter((x) => x.title == "Giants")[0]
                                .image.asset.url
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
                              categories.filter(
                                (x) => x.title == "Cosmology"
                              )[0].image.asset.url
                            }
                          />{" "}
                          Космология
                        </span>
                      </li>
                      <li className="mb-2 mt-12 bg-yellow-300 rounded-md w-64 p-1">
                        <a
                          href="/norse"
                          className="hover:underline font-bold flex items-center"
                        >
                          <FcClearFilters className="mr-2" /> Изчисти филтрите
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-8 p-4 bg-gray-100 backdrop-blur-xl bg-opacity-30 w-full rounded-lg">
                    <h2 className="text-xl text-gray-700 font-bold mb-4 flex items-center">
                      <GiSupersonicArrow className="mr-2 text-red-400" />{" "}
                      Най-четени
                    </h2>
                    <ul className="text-gray-700">
                      {posts?.map((c, index) => (
                        <li key={index} className="mb-2">
                          <a
                            href={`/post/${c.slug.current}`}
                            className="text-gray-700 flex items-center"
                          >
                            <FaLink className="mr-2" /> {c.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full bg-gray-100 backdrop-blur-xl bg-opacity-30 p-2 shadow-lg rounded-lg overflow-hidden mb-2">
                    <div className="max-w-full shadow-lg rounded-lg overflow-hidden p-2">
                      <div className="text-left sm:text-left text-gray-700">
                        <Image
                          src={gif}
                          alt="noncreativeblog"
                          className="w-full h-full"
                        />
                        <div>
                          <p className="text-xl mb-4 text-center bg-gradient-to-r from-yellow-200 via-orange-600 to-pink-700 bg-clip-text text-transparent text-4xl font-bold">
                            {author?.name}
                          </p>
                          <BlockContent
                            className="text-gray-700"
                            blocks={author?.bio}
                          />

                          <a
                            href="/about"
                            className="rounded-full p-1 mb-2 flex items-center justify-center border-2 bg-yellow-300 font-bold text-gray-700 w-full"
                          >
                            Виж повече за мен
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {menuOpen && (
                <div className="lg:hidden fixed w-10/12 left-0 flex items-center justify-center slide-in-from-left overflow-x-scroll top-0 z-50 bg-gray-800 backdrop-blur-xl bg-opacity-70">
                  <div className="relative">
                    <button
                      onClick={handleMenuToggle}
                      className="text-gray-200 font-bold flex items-center justify-between w-full p-1 right-0 top-2 mt-2 absolute z-50 focus:outline-none lg:hidden slide-in-from-top"
                    >
                      Категории
                      <CgCloseR size={30} className="mr-2" />
                    </button>
                    <div
                      className={`${
                        menuOpen
                          ? "transition h-[100vh]"
                          : "hidden h-0 duration"
                      }`}
                    >
                      <div className="p-2 border-gray-700">
                        <div className="mb-8 p-4 mt-24 w-full rounded-lg  bg-gray-700 bg-opacity-50 text-gray-100">
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
                                    categories.filter(
                                      (x) => x.title == "Aesir"
                                    )[0].image.asset.url
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
                                    categories.filter(
                                      (x) => x.title == "Vani"
                                    )[0].image.asset.url
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
                                    categories.filter(
                                      (x) => x.title == "Giants"
                                    )[0].image.asset.url
                                  }
                                />{" "}
                                Гиганти
                              </span>
                            </li>
                            <li
                              onClick={() => handleCategoryChange("Cosmology")}
                            >
                              <span className="hover:underline flex items-center">
                                <Image
                                  className="h-8 w-8 mr-2 rounded-full"
                                  width={100}
                                  height={100}
                                  src={
                                    categories.filter(
                                      (x) => x.title == "Cosmology"
                                    )[0].image.asset.url
                                  }
                                />{" "}
                                Космология
                              </span>
                            </li>
                            <li className="mb-2 mt-12 bg-yellow-300 text-gray-700 rounded-md w-64 p-1">
                              <a
                                href="/norse"
                                className="hover:underline font-bold flex items-center"
                              >
                                <FcClearFilters className="mr-2" /> Изчисти
                                филтрите
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mb-4 p-4 bg-gray-700 bg-opacity-50 w-full rounded-lg">
                          <h2 className="text-xl text-gray-100 font-bold mb-4 flex items-center">
                            <GiSupersonicArrow className="mr-2 text-red-200" />{" "}
                            Най-четени
                          </h2>
                          <ul className="text-gray-400">
                            {posts?.map((c, index) => (
                              <li key={index} className="mb-2">
                                <a
                                  href={`/post/${c.slug.current}`}
                                  className="hover:underline text-blue-400 flex items-center"
                                >
                                  <FaLink className="mr-2 text-sm" />{" "}
                                  {c.title.slice(0, 30)}...
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
              )}
            </div>

            {/* Right side column */}
            <div className="lg:col-span-2 p-4">
              <h1 className="p-2 w-full mb-8  bg-gradient-to-r from-yellow-100 via-yellow-100 to-orange-200     rounded-md text-center font-bold text-xl text-gray-900 ">
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

              <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  flex items-center ">
                {posts?.map((c, index) => (
                  <>
                    {" "}
                    <a
                      key={c.slug}
                      className="relative group "
                      href={`/post/${c.slug.current}`}
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
                          {c.readingTime}min
                        </div>
                      </div>
                      <div className="  top-0 left-0 text-slate-900 font-semibold rounded-b-md text-lg bg-gray-100  bg-opacity-100 p-4">
                        {c.title.slice(0, 30)}...
                      </div>
                    </a>{" "}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto w-full border-t-2 border-gray-300 py-8">
        <p class="text-gray-600 mb-4 md:mb-0 text-left">
          Благодаря за четенето! Надявам се тази статия да ви е била полезна и
          интересна. Вашата подкрепа ми помага да продължа да предоставям
          полезна информация и съвети за всички, които я търсят. Благодаря ви
          подкрепата!
        </p>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <a
            target="__blank"
            href="https://www.buymeacoffee.com/tonkoff"
            className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-full flex items-center sm:mb-0 "
          >
            <SiBuymeacoffee className="mr-2" />
            Buy me a coffee
          </a>
          <a
            href="/contact/email"
            className="bg-yellow-200 hover:bg-yellow-100 text-gray-700 bg-opacity-50 px-4 py-2 flex items-center rounded-full"
          >
            Свържи се с мен
          </a>
        </div>
      </div>
    </>
  );
}
import { client } from "../library/mythologyClient";
export const getServerSideProps = async (context) => {
  const { query } = context;
  const category = query.category || null;
  const sortBy = query.sortBy || "latest";
  let handleCategoryChange;
  if (category) {
    handleCategoryChange = `&& "${category}" in categories[]->title`;
  }
  const postQuery = `*[_type == "post" ${
    handleCategoryChange ? handleCategoryChange : ""
  } ]
  {
    description,
    slug,
    title,
    duration,
    "category": categories[0]->title,
    body,
    "name": author->name,
    "authorImage": author->image,
    publishedAt,
    model,
    mainImage {
      asset->{
        _id,
        url
      }
    }
  }`;

  const totalPostsPromise = client.fetch(postQuery).catch(() => []);
  const categoriesPromise = client
    .fetch(
      `*[_type == "category"]{
      title,
      slug,
      description,
      _id,
      image{
        asset->{
          _id,
          url
        }
      }
    }`
    )
    .catch(() => []);

  const authorPromise = client
    .fetch(
      `*[_type == "author"]{
      name,
      slug,
      bio,
      image{
        asset->{
          _id,
          url
        }
      }
    }`
    )
    .catch(() => []);

  let [totalPosts, categories, authorExport] = await Promise.all([
    totalPostsPromise,
    categoriesPromise,
    authorPromise,
  ]);

  // Calculate reading time for each post
  totalPosts.forEach((post) => {
    // Assuming average reading speed of 200 words per minute
    const wordsPerMinute = 200;
    const words = post.description.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    post.readingTime = readingTime;
  });

  // Sort the posts based on the selected sorting option
  if (sortBy === "latest") {
    // Sort by publishedAt in descending order
    totalPosts.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  } else if (sortBy === "readingTime") {
    totalPosts.sort((a, b) => a.readingTime - b.readingTime);
  } else if (sortBy === "longest") {
    totalPosts.sort((a, b) => b.readingTime - a.readingTime);
  }
  const author = authorExport[2];
  return {
    props: {
      posts: totalPosts,
      initialCategory: category,
      categories,
      author,
    },
  };
};

export default Blog;
