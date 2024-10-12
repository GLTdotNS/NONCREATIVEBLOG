import React, { useState, useEffect, useContext } from "react";
import { client as sanityClient } from "../../library/mythologyClient";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "../../serializers/serializers";
import PostInfo from "../../components/PostInfo/PostInfo";
import Navigation from "../../components/Breadcrumbs/Navigation";
import PostFooter from "../../components/PostFooter/PostFooter";
import moment from "moment/moment";
import MyContext from "../../Context/context";
import AllPosts from "../../utils/NorseQueries/AllPosts";
import Image from "next/image"; // Import Next.js Image component
import Slug from "../../utils/NorseQueries/Slug";
import CommentSection from "../../components/Comment/CommentSection";

const Cats = ({ post, posts }) => {
  const { isOpenSection } = useContext(MyContext);
  const [comments, setComments] = useState(post.comments);
  const [category, setCategory] = useState(
    post.categories || post.qualification
  );
  const [toc, setToc] = useState([]);

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

  useEffect(() => {
    const categoryMapping = {
      Aesir: "Ауси",
      Vani: "Вани",
      Giants: "Гиганти",
      Cosmology: "Космология",
      Worlds: "Светове",
      null: "Няма информация",
    };
    setCategory(categoryMapping[category] || category);
  }, [category]);

  useEffect(() => {
    const extractedToc = [];
    document
      .querySelectorAll(
        ".block-content h2, .block-content h3, .block-content h4"
      )
      .forEach((heading, index) => {
        heading.id = `heading-${index}`;
        extractedToc.push({
          id: heading.id,
          text: heading.innerText,
          level: heading.tagName.toLowerCase(),
        });
      });
    setToc(extractedToc);
  }, [post]);

  return (
    <div className="bg-gray-900 text-white w-full flex flex-col">
      {/* Cover Image Section */}
      <div className="relative w-full h-60 lg:h-96 mb-4">
        <Image
          src={post.mainImage.asset.url || "/path/to/your/default-image.jpg"} // Use post cover image or a default placeholder
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>{" "}
        {/* Dark overlay for text readability */}
        <h1 className="absolute bottom-0 left-0 p-6 text-white text-3xl font-bold">
          {post.title}
        </h1>
      </div>

      {/* Main Content and TOC Section */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Right Sidebar for TOC and Ad Banner */}
        <div className="lg:w-1/4 lg:pl-4 sticky top-24">
          {/* Sticky TOC Section moved to the top */}
          <div className=" top-24 lg:top-20 mb-4">
            <div className="bg-gray-800 p-4 rounded shadow-md">
              <h3 className="font-semibold mb-4">Съдържание</h3>
              <ul>
                {toc.map((item) => (
                  <li
                    key={item.id}
                    className={`ml-${
                      item.level === "h3" ? 4 : item.level === "h4" ? 8 : 0
                    }`}
                  >
                    <a
                      href={`#${item.id}`}
                      className="text-gray-300 hover:underline"
                    >
                      #{item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ad Banner */}
          <div className="bg-gray-800 p-4 rounded shadow-md">
            <h4 className="font-semibold">Рекламирайте тук</h4>
            <img
              src="https://via.placeholder.com/150"
              alt="Ad Banner"
              className="w-full h-full object-cover rounded"
            />
            <p className="mt-2">Вашето рекламно съдържание тук.</p>
          </div>
        </div>

        {/* Main Blog Content Area */}
        <div className="flex-1 p-4 lg:p-8">
          <Navigation post={post} category={category} link={"/"} />
          <PostInfo post={post} />
          <div className="block-content w-full mx-auto text-gray-300 p-6 border-b border-gray-700">
            <BlockContent
              serializers={serializers}
              blocks={post.body}
              projectId="6kqgsbl2"
              dataset="production"
            />
          </div>
          <div className="container mx-auto max-w-4xl border-t-2 border-gray-700 py-8">
            <PostFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

// Fetch static props and paths as before
export async function getStaticPaths() {
  const posts = AllPosts();
  const post = await sanityClient.fetch(posts);
  const paths = post.map((v) => ({ params: { slug: v.slug.current } }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const query = Slug();
  const post = await sanityClient.fetch(query, { slug });
  const postsQuery = AllPosts();
  const posts = await sanityClient.fetch(postsQuery);
  return {
    props: {
      post,
      posts,
    },
    revalidate: 10,
  };
}

export default Cats;
