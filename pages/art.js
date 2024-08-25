// pages/art/index.js
import { client } from "../library/mythologyClient";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ArtPosts({ posts }) {
  // Initialize AOS on page load
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className=" mt-24 mb-20  w-full lg:w-10/12 mx-auto flex flex-col items-center justify-center  ">
      <h1
        className="text-2xl font-bold mb-6 tracking-wide shadow-sm rounded-smg text-center"
        data-aos="fade-up"
      >
        „Рисувам не това, което виждам, а това, което се вижда от мен.“
        <br />— Аноним
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post) => (
          <div
            className="bg-white w-full bg-opacity-20 rounded-lg shadow-lg p-8 hover:scale-105 transform transition-transform duration-500 ease-in-out relative overflow-hidden"
            key={post.slug.current}
            data-aos="zoom-in"
          >
            {/* Main Image */}
            <div className="w-full h-64 relative mb-6 overflow-hidden rounded-lg">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out hover:scale-110 transform rounded-lg"
              />
            </div>

            {/* Post Title */}
            <h2 className="text-3xl font-bold text-yellow-500 mb-3">
              {post.title}
            </h2>

            {/* Author Name */}
            <p className="text-gray-700 text-base italic mb-6">
              By {post.name}
            </p>

            {/* Navigation Button */}
            <Link
              className="inline-block bg-gradient-to-r from-yellow-100 to-yellow-400 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 ease-in-out hover:from-yellow-300 hover:to-yellow-100"
              href={`/post/art/${post.slug.current}`}
            >
              Виж повече
            </Link>
          </div>
        ))}
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
