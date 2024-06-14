// pages/api/sendCollaborationEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, type, website, subject, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "georgitonkow@gmail.com",
        pass: process.env.NEXT_PUBLIC_GMAIL,
      },
      secure: true, // Use SSL
    });

    try {
      // Send email
      await transporter.sendMail({
        from: "georgitonkow@gmail,com",
        to: "noncreativeblog@gmail.com",
        subject: `${name} wants to collaborate - ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Website:</strong> <a href="${website}">${website}</a></p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
