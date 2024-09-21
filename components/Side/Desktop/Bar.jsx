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
    <div className="p-4  sticky top-24">
      <div className="mb-8 p-4  bg-gray-100 backdrop-blur-lg bg-opacity-40 w-full rounded-lg">
        <h2 className="text-xl text-gray-700 font-bold mb-4 flex items-center">
          <FaRegFolderOpen className="mr-2" /> Категории
        </h2>
        <ul className="text-gray-700 text-lg cursor-pointer">
          <li className="mb-2" onClick={() => handleCategoryChange("Aesir")}>
            <span className="hover:underline flex items-center">
              <Image
                className="h-8 w-8 mr-2 rounded-full"
                width={100}
                height={100}
                src={
                  categories.filter((x) => x.title == "Aesir")[0].image.asset
                    .url
                }
              />{" "}
              Ауси
            </span>
          </li>
          <li className="mb-2" onClick={() => handleCategoryChange("Vani")}>
            <span className="hover:underline flex items-center">
              <Image
                className="h-8 w-8 mr-2 rounded-full"
                width={100}
                height={100}
                src={
                  categories.filter((x) => x.title == "Vani")[0].image.asset.url
                }
              />{" "}
              Вани
            </span>
          </li>
          <li className="mb-2" onClick={() => handleCategoryChange("Giants")}>
            <span className="hover:underline flex items-center">
              <Image
                className="h-8 w-8 mr-2 rounded-full"
                width={100}
                height={100}
                src={
                  categories.filter((x) => x.title == "Giants")[0].image.asset
                    .url
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
                  categories.filter((x) => x.title == "Cosmology")[0].image
                    .asset.url
                }
              />{" "}
              Космология
            </span>
          </li>
          <li onClick={() => handleCategoryChange("TonkovG")}>
            <span className="hover:underline flex items-center mt-2">
              <Image
                className="h-8 w-8 mr-2 rounded-full"
                width={100}
                height={100}
                src={
                  categories.filter((x) => x.title == "TonkovG")[0].image.asset
                    .url
                }
              />{" "}
              TonkovG
            </span>
          </li>
          <li className="mb-2 mt-12 bg-yellow-300 rounded-md w-64 p-1">
            <a
              href="/norse"
              className="hover:underline font-bold flex items-center justify-center"
            >
              <FcClearFilters className="mr-2" /> Изчисти филтрите
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-8 p-4 bg-gray-100  bg-opacity-30 w-full rounded-lg">
        <h2 className="text-xl text-gray-700 font-bold mb-4 flex items-center">
          <GiSupersonicArrow className="mr-2 text-red-400" /> Най-четени
        </h2>
        <ul className="text-gray-700">
          {posts
            ?.slice()
            .sort((x, b) => b.likes - x.likes)
            .map((c, index) => (
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
      <div className="w-full  bg-gray-100 bg-opacity-30 p-2  rounded-lg overflow-hidden mb-2">
        <div className="max-w-full  rounded-lg overflow-hidden p-2">
          <div className="text-left sm:text-left text-gray-700 ">
            <Image
              src={gif}
              alt="noncreativeblog"
              className="w-64 h-64 flex justify-center items-center mx-auto rounded-full"
            />
            <div>
              <p className="text-xl mb-4 text-center bg-gradient-to-r from-yellow-200 via-orange-600 to-pink-700 bg-clip-text text-transparent text-4xl font-bold">
                Руни
              </p>
              <p>
                Протогерманската писменост е една от най-старите познати на
                човечеството, като първите сведения за нея датират от 160 години
                преди христа, но за първата руническа азбука се сочи Elder
                Futhark ,която е използвана между II и VII век.Тя е широко
                разпространена сред германските народи и най-вече в Скандинавия
                . За произхода и се говори , че Бог Один...
              </p>
              <a
                href="/runes"
                className="rounded-full p-1 mb-2 flex items-center justify-center border-2 bg-yellow-300 font-bold text-gray-700 w-full"
              >
                Виж повече
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
