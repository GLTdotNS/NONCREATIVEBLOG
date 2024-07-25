// pages/api/subscribe.js
import nodemailer from "nodemailer";

export default async function (req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    let transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "georgitonkow@gmail.com",
        pass: process.env.NEXT_PUBLIC_GMAIL.replace(/\\n/g, "\n") || undefined,
      },
      secure: true,
    });

    const mailData = {
      from: "georgitonkow@gmail.com",
      to: "noncreativeblog@gmail.com",
      subject: "New Subscription",
      text: `New subscription from: ${email}`,
      html: `<p>New subscription from: ${email}</p>`,
    };

    try {
      await transporter.sendMail(mailData);
      return res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
