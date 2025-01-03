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
    <div className="px-2">
      {/* Линк за връщане назад */}
      

      {/* Информация за публикацията */}
      <div className="items-center justify-center mb-4 relative border-b-[1px] border-[#333] px-2 pb-1 md:p-4 mt-4">
        <p className="mb-4">Публикувана от</p>
        <div className="flex items-center">
          {/* Снимка на автора */}
          <Image
            src={post?.authorImage?.asset?.url}
            alt={post?.authorName}
            width={500}
            height={500}
            className="w-24 h-16 rounded-full mr-3 md:mr-4"
          />
          {/* Текстова информация */}
          <div>
            <p className="font-semibold text-base md:text-lg">{post.authorName}</p>
            <div className="flex items-center">
              <span className="text-sm md:text-base text-gray-600 mr-2">
                <FaRegCalendarCheck size={20} />
              </span>
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
