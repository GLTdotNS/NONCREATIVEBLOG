import { client } from "../../library/sanityClient";

export default async function createComment(req, res) {
  const { id, name, email, comment, action } = JSON.parse(req.body);

  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: id,
      },
      name,
      action,
      email,
      comment,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }

  return res.status(200).json({ message: "Comment submitted" });
}
