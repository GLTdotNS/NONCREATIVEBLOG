// pages/Post.js

import React, { useEffect, useState, useContext } from "react";
import { client as sanityClient } from "../../../library/mythologyClient.js";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "../../../serializers/serializers.js";
import Image from "next/image.js";
import MyContext from "../../../Context/context";
import { MdOutlineZoomOutMap } from "react-icons/md";
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

  const openFullScreen = (imageUrl) => {
    const overlay = document.createElement("div");
    const img = document.createElement("img");
    const closeButton = document.createElement("button");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    overlay.style.zIndex = "9999";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.overflow = "hidden";
    overlay.style.cursor = "pointer";

    img.src = imageUrl;
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";
    img.style.objectFit = "contain";
    img.style.transition = "transform 0.3s ease-in-out";
    img.style.cursor = "zoom-in";

    closeButton.innerHTML = "✖";
    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "20px";
    closeButton.style.background = "rgba(255, 255, 255, 0.7)";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "50%";
    closeButton.style.width = "30px";
    closeButton.style.height = "30px";
    closeButton.style.fontSize = "20px";
    closeButton.style.cursor = "pointer";

    closeButton.onclick = () => document.body.removeChild(overlay);

    img.onclick = () => {
      img.style.transform =
        img.style.transform === "scale(2)" ? "scale(1)" : "scale(2)";
    };

    overlay.appendChild(img);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
  };

  return (
    <div className="mt-12 p-6 lg:p-12">
      <div className="container mx-auto max-w-7xl rounded-lg shadow-sm p-4">
        {/* Post Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          {post.title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-full lg:w-1/2 h-80 lg:h-[600px]">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl cursor-pointer"
              onClick={() => openFullScreen(post.mainImage.asset.url)}
            />
            <MdOutlineZoomOutMap
              onClick={() => openFullScreen(post.mainImage.asset.url)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer"
              size={30}
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <BlockContent blocks={post.body} serializers={serializers} />
            </div>

            <div className="text-center">
              <a
                target="__blank"
                href={post.url}
                className="bg-yellow-300 p-2 w-full px-4 rounded-full"
              >
                Поръчай
              </a>
            </div>
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
