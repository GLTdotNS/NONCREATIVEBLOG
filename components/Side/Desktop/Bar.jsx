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
          <li className="mb-2" onClick={() => handleCategoryChange("Aesir")}>
            <span className="hover:underline flex items-center">
              <Image
                className="h-8 w-8 mr-2 rounded-full"
                width={100}
                height={100}
                src={
                  categories.filter((x) => x.title === "Aesir")[0].image.asset
                    .url
                }
              />
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
                  categories.filter((x) => x.title === "Vani")[0].image.asset
                    .url
                }
              />
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
                  categories.filter((x) => x.title === "Giants")[0].image.asset
                    .url
                }
              />
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
                  categories.filter((x) => x.title === "Cosmology")[0].image
                    .asset.url
                }
              />
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
                  categories.filter((x) => x.title === "TonkovG")[0].image.asset
                    .url
                }
              />
              TonkovG
            </span>
          </li>
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

      <div className="mb-8 p-4 w-full rounded-lg">
        <h2 className="text-xl text-white font-bold mb-4 flex items-center">
          <GiSupersonicArrow className="mr-2 text-red-400" /> Най-четени
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

      <div className="w-full p-2 rounded-lg overflow-hidden mb-2">
        <div className="max-w-full rounded-lg overflow-hidden p-2">
          <div className="text-left">
            <Image
              src={gif}
              alt="noncreativeblog"
              className="w-64 h-64 flex justify-center items-center mx-auto rounded-full"
            />
            <div>
              <p className="text-xl mb-4 text-center font-bold text-4xl">
                Руни
              </p>
              <p className="text-white">
                Протогерманската писменост е една от най-старите познати на
                човечеството, като първите сведения за нея датират от 160 години
                преди христа, но за първата руническа азбука се сочи Elder
                Futhark, която е използвана между II и VII век. Тя е широко
                разпространена сред германските народи и най-вече в Скандинавия.
                За произхода й се говори, че Бог Один...
              </p>
              <a
                href="/runes"
                className="rounded-full p-1 mb-2 flex items-center justify-center border-2 border-yellow-500 font-bold text-white w-full hover:bg-yellow-200 transition"
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
