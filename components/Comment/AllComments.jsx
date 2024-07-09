import React from "react";
import { FaComment } from "react-icons/fa";
import moment from "moment";
import MyContext from "../../Context/context";
import { useContext } from "react";
const AllComments = (comments) => {
  const { isOpenSection, setSisOpenSection } = useContext(MyContext);

  return (
    <div>
      {" "}
      <div className="w-full max-w-lg mt-12 mx-auto ">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Коментари {/* Comments */}
        </h3>
        <div className="space-y-4 relative">
          {comments?.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-300 relative"
              >
                <div className="flex items-center mb-2 border-b-2 border-gray-100 p-2">
                  <div className="h-8 w-8 flex items-center justify-center bg-gray-200 text-gray-700 font-semibold rounded-full text-lg mr-3">
                    {comment.name.charAt(0)}
                  </div>

                  <div className="flex">
                    <span className="text-gray-900 font-semibold mr-2">
                      {comment.name}
                    </span>
                    |{" "}
                    <span className="ml-2">
                      {moment(comment._createdAt).fromNow()}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">{comment.comment}</p>
                {/* <div className="flex mt-4">
              Rating {Number(comment.upvotes)}
              {!isVote ? (
                <button
                  onClick={() => handleUpvote(comment._id)}
                  className="flex items-center text-gray-600 hover:text-gray-900 mr-2"
                >
                  <FaThumbsUp className="mr-1" />
                </button>
              ) : (
                <button
                  onClick={() => handleDownvote(comment._id)}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <FaThumbsDown className="mr-1" />{" "}
                </button>
              )}
            </div> */}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-700">
              Все още няма коментари по темата {/* No comments yet */}
            </div>
          )}
        </div>
        <span
          onClick={() => setSisOpenSection(true)}
          className="text-center w-full  flex items-center justify-center mt-12 cursor-pointer"
        >
          <FaComment className="mr-2" /> Напиши коментар
        </span>
      </div>
    </div>
  );
};

export default AllComments;
