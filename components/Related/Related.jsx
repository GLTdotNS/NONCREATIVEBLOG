import { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const RelatedPostsCarousel = ({ posts, path }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full p-8 shadow-inner mx-auto bg-transparent rounded-lg">
      <h1 className="p-4 bg-yellow-100">Подобни постове</h1>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scroll-smooth no-scrollbar gap-12"
      >
        {posts.map((post) => (
          <a
            key={post.slug.current}
            className="relative group"
            href={`/post/${path}${post.slug.current}`}
          >
            <div className="mx-auto w-[400px] h-[300px] shadow-md overflow-hidden">
              <Image
                className="h-full w-full object-cover transition-transform transform hover:scale-110 mt-2"
                src={post.mainImage.asset.url}
                alt={post.title}
                width={400}
                height={300}
                priority={true}
                quality={75}
              />
              <div className="absolute bottom-12 left-0 right-0 bg-gradient-to-t from-gray-700 to-transparent p-4">
                <button className="mt-2 absolute text-sm right-8 bottom-4 text-yellow-300 bg-gray-700 backdrop-blur-sm bg-opacity-30 translate-x-4 transition-transform transform hover:scale-100 md:transform-none text-center px-4 py-2 rounded-lg flex items-center">
                  Прочети
                  <FaArrowRight className="h-6 w-6 ml-2" />
                </button>
              </div>
            </div>
            <div className="top-0 left-0 text-slate-900 font-semibold rounded-b-md text-lg bg-opacity-100 p-4">
              {post.title.slice(0, 30)}...
            </div>
          </a>
        ))}
      </div>
      {posts.length > 1 && (
        <div className="flex justify-between items-center px-4 py-2 absolute top-1/2 transform -translate-y-1/2 left-0 w-full z-10">
          <button
            className="text-gray-700 bg-gray-100 bg-opacity-10 p-4 focus:outline-none"
            onClick={scrollLeft}
          >
            <GrPrevious size={40} className="text-red-100" />
          </button>
          <button
            className="text-gray-700 bg-gray-100 bg-opacity-10 p-4 focus:outline-none"
            onClick={scrollRight}
          >
            <GrNext size={40} className="text-red-100" />
          </button>
        </div>
      )}
    </div>
  );
};

export default RelatedPostsCarousel;
