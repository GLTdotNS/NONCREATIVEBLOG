const postsQuery = () => {
  const query = `*[_type == "post"]{
      title,
      body,
      publishedAt,
      slug,
      description,
      "categories": postCategory[]->title,
      "related": *[_type == "post" && count(postCategory[@._ref in ^.^.postCategory[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
        title,
        slug
      },
      author,
      "name": author->name,
      "authorImage": author->image{
        asset->{
          _id,
          url
        }
      },
      mainImage{
        asset->{
          _id,
          url
        }
      },
      'comments': *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc){
        _id, 
        name, 
        email, 
        comment, 
        _createdAt,
        upvotes,
        downvotes
      }
    }`;

  return query;
};

export default postsQuery;
