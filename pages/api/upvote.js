import { client } from "../../library/sanityClient";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
      message: "Only POST requests are allowed",
    });
  }

  try {
    const { id, action } = req.body;

    // Fetch the comment from Sanity
    const comment = await client.getDocument(id);
    const query = `*[_type == "comment" ]{
      name,
      email,
      comment,
      upvotes,
      downvotes,
      _createdAt,
      _id,
       post,
     
   
     }`;

    let data;
    let rating;
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    if (action == "upvote") {
      const updatedComment = await client
        .patch(id)
        .set({ upvotes: (comment.upvotes += 1) })
        .commit()
        .then(async () => {
          data = await client.fetch(query);
        });
      return res
        .status(200)
        .json({ comment: updatedComment, comments: data, rating: rating });
    } else {
      const updatedComment = await client
        .patch(id)
        .set({ upvotes: (comment.upvotes -= 1) })
        .commit()
        .then(async () => {
          data = await client.fetch(query);
        });
      rating = comment.upvotes;
      return res
        .status(200)
        .json({ comment: updatedComment, comments: data, rating: rating });
    }

    // Save updated comment to database
  } catch (error) {
    console.error("Error upvoting comment:", error);
    return res.status(500).json({ error: "Failed to upvote comment" });
  }
}
