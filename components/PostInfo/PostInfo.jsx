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
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  ViberIcon,
  RedditIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";
import { urlForImg } from "../../library/sanityClient";
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
      {" "}
      <h1 className="text-xl font-bold text-center py-4 ">{post.title}</h1>
      <div className="flex items-center justify-between">
        {" "}
        <a
          href="/"
          className="flex items-center text-gray-300 px-2 border-gray-300 rounded-full w-[100px] "
        >
          <IoMdArrowRoundBack className="mr-4 " size={20} />
          Назад
        </a>
        <div className="relative group ">
          <button className="button-with-icon rounded-md font-bold text-sm flex items-center text-gray-300 hover:text-gray-600 transition-colors duration-300">
            <FaShareAlt /> <span className="ml-2">Сподели</span>
          </button>

          <ul className=" absolute right-0  z-50 cursor-pointer rounded-lg bg-gray-200 shadow-2xl hidden group-hover:block">
            <div className="    z-100 p-6 rounded-t-xl  ">
              <h2 className="text-lg text-center font-semibold mb-4">
                Сподели с приятели{" "}
              </h2>
              <div className="grid grid-cols-3  w-64 gap-4">
                <FacebookShareButton
                  url={`https://noncreativeblog.net/post/${post?.slug?.current}`}
                  quote={`${post.title}`}
                  hashtag={post.rowTitle}
                >
                  <FacebookIcon size={50} color="blue" />
                </FacebookShareButton>

                <li>
                  <LinkedinShareButton
                    onShareWindowClose={() => window.close()}
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
                    url={`https://noncreativeblog.com/post/${post?.slug?.current}`}
                  >
                    <TwitterIcon size={50} color="blue" />
                  </TwitterShareButton>
                </li>
                <li>
                  <TelegramShareButton
                    onShareWindowClose={() => window.close()}
                    url={`https://noncreativeblog.net/post/${post?.slug?.current}`}
                  >
                    <TelegramIcon size={50} />
                  </TelegramShareButton>
                </li>
                <li>
                  <ViberShareButton
                    onShareWindowClose={() => window.close()}
                    url={`https://noncreativeblog.net/post/`}
                  >
                    <ViberIcon size={50} />
                  </ViberShareButton>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className=" items-center justify-center mb-4 relative   border-b-[1px] border-[#333] p-2 px-8 md:p-4 mt-12 ">
        <p className="mb-4">Публикувана от</p>

        <div className="flex items-center ">
          <Image
            src={post?.authorImage?.asset.url}
            alt={post?.authorName}
            width={500}
            height={500}
            className="w-24 h-16 rounded-full mr-3 md:mr-4"
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
                {moment(post.publishedAt).format("MMMM D, YYYY ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
