import React from "react";
import { useRouter } from "next/router";
import { FcPrevious, FcNext } from "react-icons/fc";

const Pagination = ({ totalPages, currentPage }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page },
      });
    }
  };
  return (
    <div className="flex justify-center mt-8 mx-auto  ">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 border rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition"
        }`}
      >
        <FcPrevious className="text-gray-700" />
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 mx-1 border rounded ${
            currentPage === index + 1
              ? "bg-yellow-200 text-gray-800"
              : "bg-gray-800 text-white hover:bg-gray-700 transition"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 border rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition"
        }`}
      >
        <FcNext className="text-gray-700" />
      </button>
    </div>
  );
};

export default Pagination;
