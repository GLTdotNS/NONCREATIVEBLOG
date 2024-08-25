// pages/Post.js

import React, { useEffect, useState, useContext } from "react";
import { client as sanityClient } from "../../../library/mythologyClient.js";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "../../../serializers/serializers.normal.js";

import MyContext from "../../../Context/context";
import AllComments from "../../../components/Comment/AllComments.jsx";
import Slug from "../../../utils/NorseQueries/Slug.js";
import PostQuery from "../../../utils/NorseQueries/AllPosts.js";

const Post = ({ post, posts }) => {
  const { isOpenSection, setSisOpenSection } = useContext(MyContext);

  const [comments, setComments] = useState(post?.comments || []);
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
        throw new Error("Failed to downvote comment");
      }

      const { comments } = await response.json();
      setComments(comments);
      localStorage.setItem("isVote", false);
      setVote(false);
    } catch (error) {
      console.error("Error downvoting comment:", error);
    }
  };

  return (
    <div className=" mt-12 p-6 lg:p-12">
      <div className="container mx-auto max-w-7xl rounded-lg shadow-sm p-8">
        {/* Post Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 ">
          {post.title}
        </h1>

        {/* Post Body */}
        <div className="">
          <BlockContent blocks={post.body} serializers={serializers} />
          <div className="text-center mt-12 max-w-64 mx-auto flex items-center  ">
            <a href="#" className="bg-yellow-300 p-2 w-full px-4 rounded-full">
              Поръчай
            </a>
          </div>
        </div>
      </div>
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
