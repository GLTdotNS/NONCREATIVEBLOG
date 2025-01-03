import React from "react";
import Image from "next/image";
import moment from "moment";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";

const PostInfo = ({ post }) => {
  // Настройки на локализацията на moment.js
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
    <div className="px-4 md:px-8 lg:px-16">
      {/* Линк за връщане назад */}
      <a
        href="/"
        className="flex items-center text-gray-500 hover:text-gray-700 transition duration-300 px-4 py-2 border border-gray-300 rounded-full w-[120px] mb-6"
      >
        <IoMdArrowRoundBack className="mr-2" size={20} />
        Назад
      </a>

      {/* Информация за публикацията */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          {/* Снимка на автора */}
          <Image
            src={post?.authorImage?.asset?.url || "/default-avatar.jpg"}
            alt={post?.authorName || "Автор"}
            width={120}
            height={120}
            className="rounded-full mb-4 md:mb-0 md:mr-6"
          />

          {/* Текстова информация */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-800">
              {post.authorName}
            </p>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <FaRegCalendarCheck size={18} className="text-gray-600 mr-2" />
              <span className="text-gray-600 text-sm">
                {moment(post.publishedAt).format("D MMMM YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
