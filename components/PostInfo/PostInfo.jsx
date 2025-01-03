import React from "react";
import Image from "next/image";
import moment from "moment";
import { FaRegCalendarCheck, FaShareAlt } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  TelegramShareButton,
  ViberShareButton,
  FacebookIcon,
  TwitterIcon,
  ViberIcon,
  RedditIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";

const PostInfo = ({ post }) => {
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

  return (
    <div>
      <a
        href="/"
        className="flex items-center text-gray-300 px-2 border-gray-300 rounded-full w-[100px]"
      >
        <IoMdArrowRoundBack className="mr-4" size={20} />
        Назад
      </a>
      <div className="relative group">
        <button className="button-with-icon rounded-md font-bold text-sm flex items-center text-gray-300 hover:text-gray-600 transition-colors duration-300">
          <FaShareAlt />
          <span className="ml-2">Сподели</span>
        </button>
        <ul className="absolute right-0 z-50 cursor-pointer rounded-lg bg-gray-200 shadow-2xl hidden group-hover:block">
          <div className="z-50 p-6 rounded-t-xl">
            <h2 className="text-lg text-center font-semibold mb-4">
              Сподели с приятели
            </h2>
            <div className="grid grid-cols-3 w-64 gap-4">
              <li>
                <FacebookShareButton
                  url={`https://noncreativeblog.net/post/${post?.slug?.current}`}
                  quote={`${post.title}`}
                  hashtag={post.rowTitle}
                >
                  <FacebookIcon size={50} />
                </FacebookShareButton>
              </li>
              <li>
                <LinkedinShareButton
                  url={`https://noncreativeblog.net/post/${post?.slug?.current}`}
                >
                  <LinkedinIcon size={50} />
                </LinkedinShareButton>
              </li>
              <li>
                <RedditShareButton
                  url={`https://noncreativeblog.net/post/${post?.slug?.current}`}
                  quote={`${post.title}`}
                >
                  <RedditIcon size={50} />
                </RedditShareButton>
              </li>
              <li>
                <TwitterShareButton
                  url={`https://noncreativeblog.net/post/${post?.slug?.current}`}
                >
                  <TwitterIcon size={50} />
                </TwitterShareButton>
              </li>
              <li>
                <TelegramShareButton
                  url={`https://noncreativeblog.net/post/${post?.slug?.current}`}
                >
                  <TelegramIcon size={50} />
                </TelegramShareButton>
              </li>
              <li>
                <ViberShareButton
                  url={`https://noncreativeblog.net/post/${post?.slug?.current}`}
                >
                  <ViberIcon size={50} />
                </ViberShareButton>
              </li>
            </div>
          </div>
        </ul>
      </div>
      <div className="items-center justify-center mb-4 relative border-b-[1px] border-[#333] px-2 md:p-4 mt-4">
        <p className="mb-4">Публикувана от</p>
        <div className="flex items-center">
          <Image
            src={post?.authorImage?.asset?.url}
            alt={post?.authorName || "Author"}
            width={500}
            height={500}
            className="w-24 h-16 rounded-full mr-3 md:mr-4"
          />
          <div>
            <p className="font-semibold text-base md:text-lg">
              {post.authorName}
            </p>
            <div className="flex items-center">
              <FaRegCalendarCheck size={20} className="mr-2" />
              <span className="text-sm md:text-base text-gray-600">
                {moment(post.publishedAt).format("MMMM D, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
