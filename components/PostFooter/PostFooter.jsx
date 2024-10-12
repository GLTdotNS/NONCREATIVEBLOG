import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

const PostFooter = () => {
  return (
    <div>
      {" "}
      <p class="text-gray-300 mb-4 md:mb-0 text-left">
        Благодаря за четенето! Надявам се тази статия да ви е била полезна и
        интересна. Вашата подкрепа ми помага да продължа да предоставям полезна
        информация и съвети за всички, които я търсят. Благодаря ви подкрепата!
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
  );
};

export default PostFooter;
