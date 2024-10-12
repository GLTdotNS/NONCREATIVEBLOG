import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaLink, FaRegFolderOpen, FaStar, FaReddit } from "react-icons/fa";
import cover from "../styles/cover.webp";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiSupersonicArrow } from "react-icons/gi";
import { FcClearFilters } from "react-icons/fc";
import Head from "next/head";
import { CgLastpass } from "react-icons/cg";
import AddBanner from "../components/AddBanner/AdBanner";
import gif from "../styles/fehu.png";
import { CgCloseR } from "react-icons/cg";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import {
  MdOutlineSentimentDissatisfied,
  MdOutlineSentimentVerySatisfied,
} from "react-icons/md";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import { GiSettingsKnobs } from "react-icons/gi";
import Pagination from "../components/Pagination/Pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
export function Blog({
  posts,
  initialCategory,
  author,
  categories,
  currentPage,
  totalPages,
}) {
  const router = useRouter();
  const [category, setCategory] = useState(initialCategory);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: router.pathname,
      query: {
        search: searchInput,
      },
    });
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    router.push({
      pathname: "/",
      query: { category: newCategory },
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
      <div className="mx-auto bg-gray-900 text-gray-100">
        <div className="relative w-full absolute top-0 mx-auto mt-4 lg:mt-16">
          <Image
            src={cover}
            alt="noncreativeblog"
            className="w-full h-auto lg:h-[380px] mx-auto object-cover rounded-lg border-[2px] border-yellow-500 shadow-xl"
          />
        </div>
        <div className="container mx-auto">
          {/* Sub-navigation menu */}
          <nav className="sticky top-[60px] lg:top-[80px] text-gray-300 mx-auto mb-12 z-10 flex justify-center mb-4 border-b-2 border-gray-700 bg-gray-800 bg-opacity-60 rounded-b-lg">
            <ul className="flex w-11/12 lg:w-5/6 flex-wrap justify-center space-x-4 px-2 p-2 bg-gray-800 bg-opacity-60 rounded-b-full">
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

              <li
                onClick={handleMenuToggle}
                className="relative group text-gray-300"
              >
                <button className="text-gray-300 border-[1px] bg-gray-800 border-gray-400 rounded-md flex items-center font-bold text-sm p-1 focus:outline-none lg:hidden">
                  <GiSettingsKnobs size={20} className="mr-2" />
                  Филтри
                </button>
              </li>
            </ul>
          </nav>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 border-t-[2px] border-gray-800">
            <div className="flex">
              <div className="hidden lg:block border-r-[2px] border-gray-800">
                <div className="w-full mb-4 flex justify-center items-center">
                  <div>
                    <h2 className="text-lg text-yellow-400 font-semibold mb-2 text-center">
                      Който търси, намира.
                    </h2>
                    <div className="relative text-center">
                      <form onSubmit={handleSearch}>
                        <input
                          type="text"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                          placeholder="Потърси..."
                          className="w-[300px] p-3 h-18 rounded-full bg-gray-800 border-[1px] border-yellow-300 focus:outline-none text-gray-300"
                        />
                        <button
                          type="submit"
                          className="absolute inset-y-0 right-0 px-3 w-12 bg-yellow-500 text-gray-900 rounded-r-full flex items-center justify-center"
                        >
                          <FaSearch />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <Bar
                  posts={posts}
                  categories={categories}
                  author={author}
                  initialCategory={initialCategory}
                />
              </div>

              {/* Mobile Filter Menu */}
              {menuOpen && (
<<<<<<< HEAD
                <div className="lg:hidden fixed w-10/12 h-screen z-50 left-0 flex items-center justify-center  overflow-scroll top-0 z-50 bg-gray-800 bg-opacity-95">
                  <div className="relative">
=======
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-95 overflow-scroll">
                  <div className="relative w-full h-full max-w-2xl mx-auto p-4 flex flex-col">
>>>>>>> dfdd6b2 (Add files)
                    <button
                      onClick={handleMenuToggle}
                      className="text-gray-200 font-bold flex items-center justify-between w-full p-1 mt-4 absolute top-4 right-4 z-50 focus:outline-none lg:hidden"
                    >
                      Филтри
                      <CgCloseR size={30} className="mr-2" />
                    </button>

                    <div className="flex-grow flex flex-col justify-center items-center mt-24 mb-4">
                      <h2 className="text-lg text-gray-100 font-semibold mb-2 text-center">
                        Който търси, намира.
                      </h2>
                      <form
                        onSubmit={handleSearch}
                        className="relative w-full mb-4"
                      >
                        <input
                          type="text"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                          placeholder="Потърси..."
                          className="w-full p-2 h-10 rounded-full bg-gray-800 focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="absolute inset-y-0 right-0 px-3 w-12 bg-yellow-500 text-gray-900 rounded-r-full flex items-center justify-center"
                        >
                          <FaSearch />
                        </button>
                      </form>
                    </div>

                    {/* Filters Section */}
                    <div className="p-4 border-gray-700 bg-gray-800 bg-opacity-50 rounded-lg max-h-full  flex-grow">
                      <h2 className="text-xl font-bold mb-4 flex items-center">
                        <FaRegFolderOpen className="mr-2" /> Категории
                      </h2>
                      <ul className="text-white text-lg cursor-pointer">
                        {[
                          "Aesir",
                          "Vani",
                          "Giants",
                          "Cosmology",
                          "TonkovG",
                        ].map((category) => (
                          <li
                            key={category}
                            className="mb-2"
                            onClick={() => handleCategoryChange(category)}
                          >
                            <span className="hover:underline flex items-center">
                              <Image
                                className="h-8 w-8 mr-2 rounded-full"
                                width={100}
                                height={100}
                                src={
                                  categories.find((x) => x.title === category)
                                    .image.asset.url
                                }
                                alt={category}
                              />
                              {category}
                            </span>
                          </li>
                        ))}
                        <li className="mb-2 mt-12">
                          <a
                            href="/norse"
                            className="text-yellow-500 font-bold flex items-center justify-center border border-gray-300 rounded-md p-1 hover:bg-yellow-200 transition"
                          >
                            <FcClearFilters className="mr-2" /> Изчисти филтрите
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Most Read Section */}
                    <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg mt-4 flex-grow">
                      <h2 className="text-xl text-gray-100 font-bold mb-4 flex items-center">
                        <GiSupersonicArrow className="mr-2" /> Най-четени
                      </h2>
                      <ul className="text-white">
                        {posts
                          ?.slice()
                          .sort((x, b) => b.likes - x.likes)
                          .map((c, index) => (
                            <li key={index} className="mb-2">
                              <a
                                href={`/post/${c.slug.current}`}
                                className="text-white flex items-center hover:underline"
                              >
                                <FaLink className="mr-2" /> {c.title}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Articles Column */}
            <div className="lg:w-full mx-auto w-full text-gray-100">
              <div className="w-full flex flex-col justify-center items-center px-4">
                <div className="flex justify-center flex-col w-full">
                  {/* Post listing */}
                  <div className="space-y-4 lg:space-y-8">
                    {posts.map((post, index) => (
                      <div
                        key={index}
                        className="relative shadow-md border-gray-200 bg-gray-900 rounded-xl overflow-hidden"
                      >
                        <div className="px-6 py-8 lg:py-12">
                          <h2 className="text-xl lg:text-2xl font-semibold text-yellow-400 hover:underline">
                            <Link href={`/posts/${post.slug.current}`}>
                              {post.title}
                            </Link>
                          </h2>
                          <p className="mt-4 text-gray-300">{post.excerpt}</p>
                          <div className="mt-8 flex items-center">
                            <span className="text-gray-500">
                              By {post.author}
                            </span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="text-gray-500">
                              {new Date(post.publishedAt).toLocaleDateString(
                                "bg-BG"
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="w-full mt-16 flex flex-col justify-center items-center p-4 bg-gray-800 rounded-t-xl">
                    <div className="flex justify-between w-full lg:w-5/6">
                      <a
                        href="#"
                        className="text-lg font-semibold bg-yellow-300 px-4 py-2 rounded-lg shadow hover:bg-yellow-400 text-gray-900"
                      >
                        Купи ми кафе
                      </a>
                      <Link href="/about">За мен</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
      <AddBanner />
    </>
  );
}
import { client } from "../library/mythologyClient";
import Bar from "../components/Side/Desktop/Bar";
export const getServerSideProps = async (context) => {
  const { query } = context;
  const category = query?.category || null;
  const sortBy = query?.sortBy || "latest";
  const searchQuery = query?.search || "";
  const currentPage = parseInt(query?.page, 10) || 1;
  const postsPerPage = 10;
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  // Construct the category filter to exclude "Art"
  let handleCategoryChange = category
    ? `&& "${category}" in categories[]->title`
    : "";

  // Construct the search query filter
  let handleSearchQuery = searchQuery
    ? `&& (title match "${searchQuery}*" || description match "${searchQuery}*")`
    : "";

  // Refined GROQ Query to exclude posts with category "Art"
  const postQuery = `*[_type == "post" && !("Art" in categories[]->title) ${handleCategoryChange} ${handleSearchQuery}] | order(publishedAt desc) [${start}...${end}] {
    description,
    slug,
    likes,
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

  // Refined GROQ Query to count total posts matching the filters, excluding "Art"
  const totalPostsQuery = `count(*[_type == "post" && !("Art" in categories[]->title) ${handleCategoryChange} ${handleSearchQuery}])`;

  // Fetch data
  const totalPostsPromise = client.fetch(postQuery).catch(() => []);
  const totalPostsCountPromise = client.fetch(totalPostsQuery).catch(() => 0);
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

  // Fetch the latest gods post
  const latestGodsPostQuery = `*[_type == "post" && "Gods" in categories[]->title] | order(publishedAt desc)[0] {
    title,
    slug
  }`;

  const latestGodsPostPromise = client
    .fetch(latestGodsPostQuery)
    .catch(() => null);

  // Await all promises
  let [totalPosts, totalPostsCount, categories, authorExport, latestGodsPost] =
    await Promise.all([
      totalPostsPromise,
      totalPostsCountPromise,
      categoriesPromise,
      authorPromise,
      latestGodsPostPromise,
    ]);

  // Calculate reading time for each post
  totalPosts.forEach((post) => {
    const wordsPerMinute = 200;
    const words = post.description ? post.description.split(/\s+/).length : 0;
    const readingTime = Math.ceil(words / wordsPerMinute);
    post.readingTime = readingTime;
  });

  // Sort posts based on the selected sorting option
  if (sortBy === "latest") {
    totalPosts.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  } else if (sortBy === "readingTime") {
    totalPosts.sort((a, b) => a.readingTime - b.readingTime);
  } else if (sortBy === "longest") {
    totalPosts.sort((a, b) => b.readingTime - a.readingTime);
  }

  // Calculate total pages for pagination
  const totalPages = Math.ceil(totalPostsCount / postsPerPage);

  return {
    props: {
      posts: totalPosts,
      initialCategory: category,
      categories,
      author: authorExport[2] || {},
      currentPage,
      totalPages,
      latestGodsPost,
    },
  };
};

export default Blog;
