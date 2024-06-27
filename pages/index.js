import React from "react";
import Blog from "./blog";
const Index = ({ posts, initialCategory, author }) => {
  return (
    <div>
      <Blog posts={posts} initialCategory={initialCategory} author={author} />
    </div>
  );
};
import { client } from "../library/sanityClient";

export const getServerSideProps = async (context) => {
  const { query } = context;
  const category = query.category || null;
  const sortBy = query.sortBy || "latest";
  const searchQuery = query.search || "";

  let handleCategoryChange = category
    ? `&& "${category}" in postCategory[]->title`
    : "";
  let handleSearchQuery = searchQuery
    ? `&& (title match "${searchQuery}*" || description match "${searchQuery}*")`
    : "";

  const postQuery = `*[_type == "post" ${handleCategoryChange} ${handleSearchQuery} ]
  {
    description,
    slug,
    title,
    duration,
    postCategory,
    body,
    "name": author->name,
    "authorImage": author->image,
    publishedAt,
    model,
    mainImage {
      asset->{
        _id,
        url
      }
    }
  }`;

  const totalPostsPromise = client.fetch(postQuery).catch(() => []);
  const categoriesPromise = client
    .fetch(
      `*[_type == "post-category"]{
      title,
      slug,
      description,
      _id,
      image{
        asset->{
          _id,
          url
        }
      }
    }`
    )
    .catch(() => []);

  const authorPromise = client
    .fetch(
      `*[_type == "author"]{
      name,
      slug,
      bio,
      image{
        asset->{
          _id,
          url
        }
      }
    }`
    )
    .catch(() => []);

  let [totalPosts, categories, authorExport] = await Promise.all([
    totalPostsPromise,
    categoriesPromise,
    authorPromise,
  ]);

  // Calculate reading time for each post
  totalPosts.forEach((post) => {
    const wordsPerMinute = 200;
    const words = post.description.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    post.readingTime = readingTime;
  });

  // Sort the posts based on the selected sorting option
  if (sortBy === "latest") {
    totalPosts.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  } else if (sortBy === "readingTime") {
    totalPosts.sort((a, b) => a.readingTime - b.readingTime);
  } else if (sortBy === "longest") {
    totalPosts.sort((a, b) => b.readingTime - a.readingTime);
  }

  const author = authorExport[0];
  return {
    props: {
      posts: totalPosts,
      initialCategory: category,
      categories,
      author,
    },
  };
};

export default Index;
