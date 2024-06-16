import React, { useEffect, useState } from "react";
import { client as sanityClient, urlForImg } from "../../library/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { FaRegCalendarCheck } from "react-icons/fa";
import { serializers } from "../../serializers/serializers";
import { FaHeart, FaShare } from "react-icons/fa";
import { FacebookIcon, TwitterIcon, ViberIcon } from "react-share";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  TwitterShareButton,
  ViberShareButton,
} from "react-share";
import Head from "next/head";
const Cats = ({ post, posts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const router = useRouter();
  return (
    <div>
      <div
        key={post._id}
        className="max-w-4xl  mt-12 shadow-2xl mx-auto text-gray-100 p-2 overflow-hidden"
      >
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
                  Статия
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
                <span class="ms-1 text-sm font-medium text-pink-700 md:ms-2 ">
                  {post.title.slice(0, 13)}...
                </span>
              </div>
            </li>
          </ol>
        </nav>
        {/* Blog Title */}
        {/* Author Info */}
        <h1 className="text-xl font-bold text-center py-4">{post.title}</h1>
        <a
          href="/"
          className="flex items-center text-gray-700 px-2 border-[1px]  border-gray-700 rounded-full w-[100px] "
        >
          <IoMdArrowRoundBack className="mr-4 " size={20} />
          Назад
        </a>
        <div className=" items-center justify-center mb-4   border-b-[1px] border-gray-700 p-2 px-8 md:p-4 mt-12 ">
          <p className="mb-4">Published by</p>

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
                  {/* {moment(post.publishedAt).format("MMMM Do YYYY, h:mm:ss a")} */}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-2 text-gray-700">
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

      <button
        onClick={openModal}
        className="flex fixed bottom-0 left-0 right-0 w-64 bg-pink-100 mx-auto items-center justify-center  px-4 sm:px-6 rounded-t-full text-base sm:text-lg hover:bg-slate-100 transition duration-300"
      >
        <FaShare className="mr-1" />
        SHARE
      </button>
      {isOpen && (
        <div className=" fixed inset-0 bg-black bg-opacity-50  z-50 flex justify-center items-center">
          <div className="bg-white animate-slide-in  absolute bottom-0 z-100 p-6 rounded-t-xl w-[300px]  ">
            <h2 className="text-lg text-center font-semibold mb-4">
              Share with your friends
            </h2>
            <div className="flex justify-center">
              <FacebookShareButton
                className="flex ml-2 items-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                url={`https://georgitonkov.com/post/${post.slug.current}`}
                quote={`${post.title}`}
                hashtag={post.rowTitle}
              >
                <FacebookIcon size={50} color="blue" />
              </FacebookShareButton>

              <TwitterShareButton
                className="flex ml-2 items-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                url={`https://georgitonkov.com/post/${post.slug.current}`}
              >
                <TwitterIcon size={50} color="blue" />
              </TwitterShareButton>

              <ViberShareButton
                onShareWindowClose={() => window.close()}
                className="flex ml-2 items-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                appId="585823522989597"
                url={`https://georgitonkov.com/post/${post.slug.current}`}
              >
                <ViberIcon size={50} />
              </ViberShareButton>
            </div>
            <button
              onClick={closeModal}
              className="mt-8 text-lg bg-slate-200  border p-2 rounded-full justify-center w-full text-center text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              Close window
            </button>
          </div>
        </div>
      )}
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
    "categories": categories[]->title,
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
    author,
    "name": author->name,
        "authorImage": author->image,
    "categories": categories[]->title,


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
