import React, { useEffect, useState } from "react";
import { client as sanityClient, urlForImg } from "../../library/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { FaRegCalendarCheck } from "react-icons/fa";
import { serializers } from "../../serializers/serializers";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import {
  FacebookIcon,
  TwitterIcon,
  ViberIcon,
  RedditIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import { SiBuymeacoffee } from "react-icons/si";
import moment from "moment/moment";

import {
  FacebookShareButton,
  TwitterShareButton,
  ViberShareButton,
  RedditShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "react-share";
import Head from "next/head";
const Cats = ({ post, posts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(post.categories);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  moment.locale("custom-locale", {
    months: [
      "Януари",
      "Февруари",
      "Март",
      "Април",
      "Май",
      "Юни",
      "Юли",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември",
    ],
  });

  switch (category[0]) {
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
  const router = useRouter();
  return (
    <div>
      <div
        key={post._id}
        className="w-full   lg:w-10/12  mt-12 shadow-lg mx-auto text-gray-700 p-2 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          {" "}
          <nav
            class="flex px-5 py-3 mt-8 text-gray-700 w-10/11 lg:w-5/6 mx-auto text-xs rounded-lg bg-yellow-100   "
            aria-label="Breadcrumb"
          >
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a
                  href="/"
                  class="inline-flex items-center text-xs font-medium text-gray-700 "
                >
                  <svg
                    class="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Начало
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-700 ">
                    {category}
                  </span>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 ">
                    {post.title.slice(0, 13)}...
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-bold text-center py-4 ">{post.title}</h1>
          <div className="flex items-center justify-between">
            {" "}
            <a
              href="/"
              className="flex items-center text-gray-700 px-2 border-gray-700 rounded-full w-[100px] "
            >
              <IoMdArrowRoundBack className="mr-4 " size={20} />
              Назад
            </a>
            <div className="relative group ">
              <button className="button-with-icon rounded-md font-bold text-sm flex items-center text-gray-700 hover:text-gray-600 transition-colors duration-300">
                <FaShareAlt /> <span className="ml-2">Сподели</span>
              </button>

              <ul className=" absolute right-0  z-50 cursor-pointer rounded-lg bg-gray-200 shadow-2xl hidden group-hover:block">
                <div className="    z-100 p-6 rounded-t-xl  ">
                  <h2 className="text-lg text-center font-semibold mb-4">
                    Сподели с приятели{" "}
                  </h2>
                  <div className="grid grid-cols-3  w-64 gap-4">
                    <FacebookShareButton
                      url={`https://georgitonkov.com/post/${post.slug.current}`}
                      quote={`${post.title}`}
                      hashtag={post.rowTitle}
                    >
                      <FacebookIcon size={50} color="blue" />
                    </FacebookShareButton>

                    <li>
                      <LinkedinShareButton
                        onShareWindowClose={() => window.close()}
                        url={`https://georgitonkov.com/post/${post.slug.current}`}
                      >
                        <LinkedinIcon size={50} />
                      </LinkedinShareButton>
                    </li>
                    <li>
                      <RedditShareButton
                        url={`https://georgitonkov.com/post/${post.slug.current}`}
                        quote={`${post.title}`}
                      >
                        <RedditIcon size={50} />
                      </RedditShareButton>
                    </li>
                    <li>
                      <TwitterShareButton
                        url={`https://georgitonkov.com/post/${post.slug.current}`}
                      >
                        <TwitterIcon size={50} color="blue" />
                      </TwitterShareButton>
                    </li>
                    <li>
                      <TelegramShareButton
                        onShareWindowClose={() => window.close()}
                        url={`https://georgitonkov.com/post/${post.slug.current}`}
                      >
                        <TelegramIcon size={50} />
                      </TelegramShareButton>
                    </li>
                    <li>
                      <ViberShareButton
                        onShareWindowClose={() => window.close()}
                        appId="585823522989597"
                        url={`https://georgitonkov.com/post/${post.slug.current}`}
                      >
                        <ViberIcon size={50} />
                      </ViberShareButton>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className=" items-center justify-center mb-4 relative   border-b-[1px] border-gray-300 p-2 px-8 md:p-4 mt-12 ">
            <p className="mb-4">Публикувана от</p>

            <div className="flex items-center ">
              <img
                src={post.authorImage.asset.url}
                alt="Author Avatar"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4"
              />
              <div>
                <p className="font-semibold text-base md:text-lg">
                  {post.authorName}
                </p>
                <div className="flex items-center">
                  <span className="text-sm md:text-base text-gray-600 mr-2">
                    <FaRegCalendarCheck size={20} />
                  </span>
                  <span className="text-sm md:text-base text-gray-600 ">
                    {moment(post.publishedAt)
                      .locale("fr")
                      .format("MMMM Do YYYY, HH:mm ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-4  text-gray-700">
            {" "}
            <img
              className="mt-4 h-[300px] w-full object-cover "
              src={post.mainImage.asset.url}
            />
            <BlockContent
              serializers={serializers}
              blocks={post.body}
              projectId="gay8otka"
              dataset="production"
            />
          </div>
        </div>
        <div class="container mx-auto max-w-4xl border-t-2 border-gray-300 py-8">
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
      </div>
    </div>
  );
};

const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
body,
author,
    _id,
    "authorImage":   author->image{
      asset->{
      _id,
      url
    },
  
  },
      "categories":postCategory[]->title,

  "authorName": author->name,
  slug,
  mainImage{
    asset->{
    _id,
    url
  },

}
}`;
const isServerReq = (req) => !req.url.startsWith("/_next");
export async function getStaticPaths() {
  const posts = `*[_type == "post" ]{
    body,
title,
author,
    publishedAt,
    slug,
    "name": author->name,
    "categories": postCategory[]->title,
    "authorImage": author->image,

    mainImage{
      asset->{
      _id,
      url
    },
  
}
  }`;
  const post = await sanityClient.fetch(posts);
  const paths = post.map((v) => ({ params: { slug: v.slug.current } }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const post = isServerReq ? await sanityClient.fetch(query, { slug }) : null;
  const postsQuery = `*[_type == "post" ]{
    title,
    body,
    publishedAt,
    slug,
    description,
        "categories": categories[]->title,

    author,
    "name": author->name,
        "authorImage": author->image,
    "categories": postCategory[]->title,


    mainImage{
      asset->{
      _id,
      url
    },
  
}
  }`;
  const posts = await sanityClient.fetch(postsQuery);
  return {
    props: {
      post,
      posts,
    },
    revalidate: 10,
  };
}

export default Cats;
