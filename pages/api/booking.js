import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "georgitonkow@gmail.com",
    pass: process.env.NEXT_PUBLIC_GMAIL,
  },
  secure: true, // Use SSL
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const { name, email, budget, websiteType, message } = req.body;

  if (!name || !email || !budget || !websiteType || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: "georgitonkow@gmail.com",
      to: "noncreativeblog@gmail.com",
      subject: "Booking Request for Demo",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Website Type:</strong> ${websiteType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Booking request sent successfully" });
  } catch (error) {
    console.error("Error sending booking request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
