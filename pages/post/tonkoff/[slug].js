import React, { useEffect, useState } from "react";
import { client as sanityClient } from "../../../library/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "../../../serializers/serializers.normal.js";
import {
  FaHeart,
  FaShareAlt,
  FaComment,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

import { useRouter } from "next/router";
import moment from "moment/moment";
import { useContext } from "react";
import MyContext from "../../../Context/context";

import RelatedPostsCarousel from "../../../components/Related/Related";
import PostInfo from "../../../components/PostInfo/PostInfo.jsx";
import Navigation from "../../../components/Breadcrumbs/Navigation.jsx";
import PostFooter from "../../../components/PostFooter/PostFooter.jsx";
import AllComments from "../../../components/Comment/AllComments.jsx";
import CommentSection from "../../../components/Comment/CommentSection.jsx";
import Slug from "../../../utils/PostQueries/Slug.js";
import PostQuery from "../../../utils/PostQueries/PostQuery.js";
const Post = ({ post, posts }) => {
  const { isOpenSection, setSisOpenSection } = useContext(MyContext);

  const [comments, setComments] = useState(post?.comments);
  const [category, setCategory] = useState(post?.categories);
  const [isVote, setVote] = useState();

  useEffect(() => {
    setVote(localStorage.getItem("isVote"));
  }, []);

  const handleUpvote = async (commentId) => {
    try {
      const response = await fetch("/api/upvote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: commentId, action: "upvote" }),
      });

      if (!response.ok) {
        throw new Error("Failed to upvote comment");
      }
      const { comments } = await response.json();

      setComments(comments);
      localStorage.setItem("isVote", true);
      setVote(true);
    } catch (error) {
      console.error("Error upvoting comment:", error);
    }
  };

  const handleDownvote = async (commentId) => {
    try {
      const response = await fetch("/api/upvote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: commentId, action: "downvote" }),
      });

      if (!response.ok) {
        throw new Error("Failed to upvote comment");
      }

      const { comments } = await response.json();
      localStorage.setItem("isVote", false);
      setVote(false);
      setComments(comments);

      // Update local storage if needed
      // localStorage.setItem(`commentVotes_${comment.id}`, JSON.stringify({ upvotes: comment.upvotes, downvotes: comment.downvotes }));
    } catch (error) {
      console.error("Error upvoting comment:", error);
    }
  };

  switch (category[0]) {
    case "Georgis stories":
      setCategory("Лични истории");

      break;
    case "bullshits":
      setCategory("Разни теми");

      break;
    case "books&movies":
      setCategory("Любимо");
      break;
    case "cooking":
      setCategory("Готварски рецепти");
      break;
    case null:
      setCategory("Всички постове");
      break;
    default:
      break;
  }
  const router = useRouter();
  return (
    <div className="">
      <div
        key={post._id}
        className="w-full   lg:w-10/12  mt-12 shadow-lg mx-auto text-gray-700 p-2 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <Navigation post={post} link={"/"} category={category} />

          <PostInfo post={post} />
          <div className="block-content p-4  text-gray-700">
            {" "}
            <BlockContent
              serializers={serializers}
              blocks={post.body}
              projectId="gay8otka"
              dataset="production"
            />
          </div>
        </div>
        <div class="container mx-auto max-w-4xl border-t-2 border-gray-300 py-8">
          <PostFooter />
        </div>
        <AllComments comments={comments} />
        <RelatedPostsCarousel posts={post.related} />
      </div>
      {isOpenSection && <CommentSection post={post} />}{" "}
    </div>
  );
};

const isServerReq = (req) => !req.url.startsWith("/_next");
export async function getStaticPaths() {
  const postsQuery = PostQuery();

  const post = await sanityClient.fetch(postsQuery);
  const paths = post.map((v) => ({ params: { slug: v.slug.current } }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const query = Slug();
  const { slug = "" } = context.params;
  const post = isServerReq ? await sanityClient.fetch(query, { slug }) : null;
  const postsQuery = PostQuery();
  const posts = await sanityClient.fetch(postsQuery);

  return {
    props: {
      post,
      posts,
    },
    revalidate: 10,
  };
}

export default Post;
