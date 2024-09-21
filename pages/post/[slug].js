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
  const [isTocOpen, setIsTocOpen] = useState(true); // Keep TOC open by default

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
      .querySelectorAll(".block-content h2, .block-content h3")
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

  const toggleToc = () => {
    setIsTocOpen((prev) => !prev);
  };

  return (
    <div className="w-11/12 mt-24 mx-auto flex flex-col lg:flex-row">
      <div
        className={`lg:w-1/4 pl-4 lg:sticky order-2 top-24 lg:h-screen overflow-y-auto transition-transform duration-300 ${
          isTocOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <div className="bg-gray-100 p-4 rounded shadow mb-4">
          <h3 className="font-semibold mb-4">Съдържание</h3>
          <ul>
            {toc.map((item) => (
              <li key={item.id} className={`ml-${item.level === "h3" ? 4 : 0}`}>
                <a
                  href={`#${item.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Ad Banner */}
        <div className="bg-yellow-300 p-4 rounded shadow">
          <h4 className="font-semibold">Рекламирайте тук</h4>
          <Image
            src="/path/to/your/placeholder-image.jpg" // Replace with your image path
            alt="Ad Banner"
            width={300}
            height={200}
            className="rounded"
          />
          <p className="mt-2">Вашето рекламно съдържание тук.</p>
        </div>
      </div>

      {/* Left Column: Block Content */}
      <div className="flex-1 pr-4 order-2 lg:order-1">
        <Navigation post={post} category={category} link={"/"} />
        <PostInfo post={post} />
        <div className="block-content w-full  mx-auto text-gray-700 p-4 border-r-2 border-gray-100">
          <BlockContent
            serializers={serializers}
            blocks={post.body}
            projectId="6kqgsbl2"
            dataset="production"
          />
        </div>
        <div className="container mx-auto max-w-4xl border-t-2 border-gray-300 py-8">
          <PostFooter />
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
