// pages/art/index.js
import { client } from "../library/mythologyClient";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ArtPosts({ posts }) {
  // Инициализиране на AOS при зареждане на страницата
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen mt-12 w-full lg:w-10/12 mx-auto flex flex-col items-center justify-center py-10 px-6">
      <h1
        className="text-3xl font-extrabold  mb-4 tracking-wide shadow-sm rounded full text-center"
        data-aos="fade-up"
      >
        „Рисувам не това, което виждам, а това, което се вижда от мен.“
        <br />— Аноним
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            className="bg-white bg-opacity-10 rounded-sm shadow-sm p-6 hover:scale-105 transform transition-transform duration-500 ease-in-out relative overflow-hidden"
            key={post.slug.current}
            data-aos="zoom-in"
          >
            {/* Main Image */}
            {post.mainImage && (
              <div className="w-full h-48 relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out hover:scale-110 transform rounded-xl"
                />
              </div>
            )}

            {/* Post Title */}
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">
              {post.title}
            </h2>

            {/* Author Name */}
            <p className="text-gray-600 text-sm italic mb-4">By {post.name}</p>

            {/* Navigation Button */}
            <Link
              className="inline-block bg-gradient-to-r from-yellow-100  to-yellow-400 text-black px-6 py-2 rounded-full font-bold  transition-all duration-300 ease-in-out hover:from-yellow-300 hover:to-yellow-100"
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

// Извличане на всички постове от категорията "Aesir"
export async function getServerSideProps() {
  const query = `*[_type == "post" && categories[0]->title == "TheGods"]{
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
