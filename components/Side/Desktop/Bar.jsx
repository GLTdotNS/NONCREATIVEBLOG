import React, { useState } from "react";
import { FcClearFilters } from "react-icons/fc";
import { FaLink, FaRegFolderOpen, FaStar, FaReddit } from "react-icons/fa";
import { GiSupersonicArrow } from "react-icons/gi";
import gif from "../../../styles/fehu.png";
import BlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import { useRouter } from "next/router";
const Bar = ({ posts, categories, author, initialCategory }) => {
  const [category, setCategory] = useState(initialCategory);
  const router = useRouter();
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    router.push({
      pathname: "/",
      query: { category: newCategory }, // Add the new category to the query
    });
  };

  return (
    <div className="p-4 sticky top-24">
      <div className="mb-8 p-4 w-full rounded-lg">
        <h2 className="text-xl text-white font-bold mb-4 flex items-center">
          <FaRegFolderOpen className="mr-2" /> Категории
        </h2>
        <ul className="text-white text-lg cursor-pointer">
          {["Ауси", "Вани", "Гиганти", "Космология", "Искрено § Лично"].map(
            (category) => (
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
                      categories.find((x) => x.title === category)?.image?.asset
                        ?.url || ""
                    }
                    alt={category}
                  />
                  {category}
                </span>
              </li>
            )
          )}
          <li className="mb-2 mt-12">
            <a
              href="/"
              className="text-yellow-500 font-bold  flex items-center justify-center border border-gray-300 rounded-md p-1 hover:bg-yellow-200 transition"
            >
              <FcClearFilters className="mr-2" /> Изчисти филтрите
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8 p-4 w-full rounded-lg">
        <h2 className="text-xl text-white font-bold mb-4 flex items-center">
          <GiSupersonicArrow className="mr-2 text-red-400" /> Най-четени
        </h2>
        <ul className="text-white">
          {posts
            ?.slice()
            .sort((x, b) => b.likes - x.likes)
            .map((c, index) => (
              <li key={index} className="mb-2 list-disc">
                <a
                  href={`/post/${c.slug.current}`}
                  className="text-white flex items-center hover:underline"
                >
                  {c.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Bar;
