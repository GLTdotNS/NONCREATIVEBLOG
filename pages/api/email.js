import nodemailer from "nodemailer";

const { NEXT_PUBLIC_GMAIL, NEXT_PUBLIC_GMAIL_PASSWORD } = process.env;

if (!NEXT_PUBLIC_GMAIL || !NEXT_PUBLIC_GMAIL_PASSWORD) {
  throw new Error(
    "Environment variables NEXT_PUBLIC_GMAIL or NEXT_PUBLIC_GMAIL_PASSWORD are not defined"
  );
}

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: NEXT_PUBLIC_GMAIL,
    pass: NEXT_PUBLIC_GMAIL_PASSWORD.replace(/\\n/g, "\n"),
  },
  secure: true, // Use SSL
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required" });
  }

  try {
    await transporter.sendMail({
      from: NEXT_PUBLIC_GMAIL,
      to: "noncreativeblog@gmail.com",
      subject: "From contact form Strive",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
