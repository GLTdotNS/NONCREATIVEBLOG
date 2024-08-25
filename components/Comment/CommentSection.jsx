import React, { useContext } from "react";
import MyContext from "../../Context/context";
import CommentForm from "./Form";

const CommentSection = ({ post }) => {
  const { isOpenSection, setIsOpenSection } = useContext(MyContext);

  return (
    <div className="relative bg-white z-50">
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-[#e7e6e3] w-full md:w-1/2 bg-opacity-40 shadow-2xl border-t-2 mx-auto p-4
          transition-transform transition-opacity duration-500 ease-in-out ${
            isOpenSection
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
      >
        <button
          onClick={() => setIsOpenSection(false)}
          className="flex items-center bg-white  text-gray-900 font-bold rounded-md hover:bg-opacity-[0.9] hover:bg-gray-300 transition text-center hover:text-gray-900 p-2"
        >
          Затвори
        </button>
        <CommentForm id={post._id} />
      </div>
    </div>
  );
};

export default CommentSection;
