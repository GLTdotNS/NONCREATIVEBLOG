const Slug = () => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      publishedAt,
      "related": *[_type == "post" && count(postCategory[@._ref in ^.^.postCategory[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      },
      author,
      _id,
      "authorImage": author->image{
        asset->{
          _id,
          url
        }
      },
      "categories": postCategory[]->title,
      'comments': *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc){
        _id,
        name,
        email,
        comment,
        _createdAt,
        downvotes,
        upvotes,
        approved
      },
      "authorName": author->name,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      }
    }`;

  return query;
};

export default Slug;
