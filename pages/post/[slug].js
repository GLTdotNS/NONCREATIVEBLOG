import React, { useState } from "react";
import { client as sanityClient } from "../../library/mythologyClient";
import BlockContent from "@sanity/block-content-to-react";

import { serializers } from "../../serializers/serializers";
import PostInfo from "../../components/PostInfo/PostInfo";
import Navigation from "../../components/Breadcrumbs/Navigation";
import PostFooter from "../../components/PostFooter/PostFooter";
import moment from "moment/moment";
import { useContext } from "react";
import MyContext from "../../Context/context";
import RelatedPosts from "../../components/Related/Related";
import AllComments from "../../components/Comment/AllComments";
import CommentSection from "../../components/Comment/CommentSection";
import Slug from "../../utils/NorseQueries/Slug";
import AllPosts from "../../utils/NorseQueries/AllPosts";
import { CLIENT_STATIC_FILES_PATH } from "next/dist/shared/lib/constants";
const Cats = ({ post, posts }) => {
  const { isOpenSection, setSisOpenSection } = useContext(MyContext);

  const [comments, setComments] = useState(post.comments);
  const [category, setCategory] = useState(
    post.categories || post.qualification
  );

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
  switch (category) {
    case "Aesir":
      setCategory("Ауси ");

      break;
    case "Vani":
      setCategory("Вани");

      break;
    case "Giants":
      setCategory("Гиганти");
      break;
    case "Cosmology":
      setCategory("Космология");
      break;
    case "Worlds":
      setCategory("Светове");
      break;
    case null:
      setCategory("Няма информация");
      break;
    default:
      break;
  }
  return (
    <div className="relative">
      <div
        key={post._id}
        className="w-full    lg:w-10/12  mt-12 shadow-lg mx-auto text-gray-700 p-2 overflow-hidden"
      >
        <div className=" max-w-4xl mx-auto">
          {" "}
          <Navigation post={post} category={category} link={"/norse"} />{" "}
          <PostInfo post={post} />
          <div className=" p-4 block-content flex text-gray-700">
            <BlockContent
              serializers={serializers}
              blocks={post.body}
              projectId="6kqgsbl2"
              dataset="production"
            />
          </div>
          <div class="container mx-auto max-w-4xl border-t-2 border-gray-300 py-8">
            <PostFooter />
          </div>
        </div>
        <AllComments comments={comments} />

        <RelatedPosts
          path={""}
          posts={posts
            .filter((x) => x.qualification === post.category)
            .filter((x) => x.slug.current !== post.slug.current)}
        />
      </div>
      {isOpenSection && <CommentSection post={post} />}
    </div>
  );
};

const isServerReq = (req) => !req.url.startsWith("/_next");
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
  const post = isServerReq ? await sanityClient.fetch(query, { slug }) : null;
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
