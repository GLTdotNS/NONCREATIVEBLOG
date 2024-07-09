const AllPosts = () => {
  const posts = `*[_type == "post" ]{
        body,
    title,
    author,
        publishedAt,
        slug,
        "name": author->name,
        "category": categories[]->title,
              "related": *[_type == "post" && count(postCategory[@._ref in ^.^.postCategory[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
        title,
        slug
      },
        "authorImage": author->image,
      'comments': *[_type == "comment" && post._ref == ^._id] && approved == nullse | order(_createdAt desc){
            _id, 
            name, 
            email, 
            comment, 
            upvotes,
            downvotes,
            _createdAt,
            approved
        },
      
        mainImage{
          asset->{
          _id,
          url
        },
      
    }
      }`;

  return posts;
};

export default AllPosts;
