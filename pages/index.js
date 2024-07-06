import React from "react";
import Blog from "./blog";
import Pagination from "../components/Pagination/Pagination";
const Index = ({ posts, initialCategory, author, currentPage, totalPages }) => {
  return (
    <div>
      <Blog posts={posts} initialCategory={initialCategory} author={author} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};
import { client } from "../library/sanityClient";

export const getStaticProps = async (context) => {
  const { query } = context;
  const category = query?.category || null;
  const sortBy = query?.sortBy || "latest";
  const searchQuery = query?.search || "";
  const currentPage = parseInt(query?.page, 10) || 1;
  const postsPerPage = 10;

  let handleCategoryChange = category
    ? `&& "${category}" in postCategory[]->title`
    : "";
  let handleSearchQuery = searchQuery
    ? `&& (title match "${searchQuery}*" || description match "${searchQuery}*")`
    : "";

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const postQuery = `*[_type == "post" ${handleCategoryChange} ${handleSearchQuery}] | order(publishedAt desc) [${start}...${end}] {
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

  const totalPostsQuery = `count(*[_type == "post" ${handleCategoryChange} ${handleSearchQuery}])`;

  const totalPostsPromise = client.fetch(postQuery).catch(() => []);
  const totalPostsCountPromise = client.fetch(totalPostsQuery).catch(() => 0);

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
      `*[_type == "author"] | order(createdAt asc) {
        name,
        slug,
        bio,
        image {
          asset-> {
            _id,
            url
          }
        }
      }`
    )
    .catch(() => []);

  let [totalPosts, totalPostsCount, categories, authorExport] =
    await Promise.all([
      totalPostsPromise,
      totalPostsCountPromise,
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

  const totalPages = Math.ceil(totalPostsCount / postsPerPage);
  const author = authorExport[1];

  return {
    props: {
      posts: totalPosts,
      initialCategory: category,
      categories,
      author,
      currentPage,
      totalPages,
    },
  };
};

export default Index;
