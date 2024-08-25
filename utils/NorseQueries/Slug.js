const Slug = () => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        url,
      body,
      author,
      publishedAt,
          _id,
          "authorImage":   author->image{
            asset->{
            _id,
            url
          },
        
        },
        "categories": categories[1]->title,
          "qualification": categories[0]->title,
      
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
        },
      
      }
      }`;

  return query;
};

export default Slug;
