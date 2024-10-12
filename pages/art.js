import { client } from "../library/mythologyClient";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ArtPosts({ posts }) {
  const [visiblePosts, setVisiblePosts] = useState(6); // Start with 6 visible posts

  // Initialize AOS on page load
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  // Handle 'See More' button click
  const showMorePosts = () => {
    setVisiblePosts((prev) => prev + 3); // Show 3 more posts when clicked
  };

  return (
    <div className="relative w-full mb-20">
      {/* Cover Image Section using the first post's image */}
      {posts.length > 0 && (
        <div className="relative w-full h-80 bg-black">
          <Image
            src={posts[0].mainImage.asset.url} // Use the first post's image as the cover
            alt="Art Cover"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold shadow-lg text-center px-4">
            „Рисувам не това, което виждам, а това, което се вижда от мен.“{" "}
            <br />— Аноним
          </h1>
        </div>
      )}

      {/* Posts Section */}
      <div className="mt-12 w-full  mx-auto flex flex-col items-center justify-center">
        {/* 2-Column Grid of Art Posts */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-screen-xl mx-auto">
            {posts.slice(0, visiblePosts).map((post, index) => (
              <Link
                key={post.slug.current}
                href={`/post/art/${post.slug.current}`}
                className="relative block overflow-hidden rounded-xl group"
                data-aos="zoom-in"
              >
                {/* Main Image */}
                <div className="relative w-full h-[32rem] overflow-hidden rounded-xl bg-black">
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                </div>

                {/* Post Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-6 px-8 text-center">
                  <h2 className="text-2xl font-bold text-white transition-colors duration-300 ease-in-out group-hover:text-yellow-500">
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 'See More' Button */}
        {visiblePosts < posts.length && (
          <button
            onClick={showMorePosts}
            className="mt-8 bg-gray-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-gray-600"
          >
            Виж повече
          </button>
        )}
      </div>
    </div>
  );
}

// Fetch all posts from the "Art" category
export async function getServerSideProps() {
  const query = `*[_type == "post" && categories[0]->title == "Art"]{
      title,
      slug,
      "category": categories[0]->title,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      "name": author->name,
      "authorImage": author->image,
    }`;

  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
}

export default ArtPosts;
