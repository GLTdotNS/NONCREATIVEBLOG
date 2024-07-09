import React from "react";
import { useContext } from "react";
import MyContext from "../../Context/context";
import CommentForm from "./Form";
const CommentSection = ({ post }) => {
  const { isOpenSection, setSisOpenSection } = useContext(MyContext);

  return (
    <div>
      {" "}
      <div className="flex-row relative bgwhite  slide-in--bot ">
        {" "}
        <div className="slide-in-from-bot fixed bottom-0 bg-[#e7e6e3] bg-opacity-95 shadow-2xl border-t-2 w-full bg-gray-400 p-4">
          {" "}
          <button
            onClick={() => setSisOpenSection(false)}
            className="flex items-center justify-center  left-0 w-full mx-auto   text-gray-900 font-bold w-full text-center hover:text-gray-900 p-2  "
          >
            Затвори
          </button>{" "}
          <CommentForm id={post._id} />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
