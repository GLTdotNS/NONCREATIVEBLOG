import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Changed to POST
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  try {
    const { ip } = req.body;

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "georgitonkow@gmail.com",
        pass: process.env.NEXT_PUBLIC_GMAIL.replace(/\\n/g, "\n"),
      },
    });

    // Send email
    let info = await transporter.sendMail({
      from: "georgitonkow@gmail.com", // Replace with your email
      to: "noncreativeblog@gmail.com", // Replace with the recipient's email
      subject: "IP Address",
      text: `The IP address is: ${ip}`,
    });

    console.log("Message sent: %s", info.messageId);

    res.status(200).json({ message: "Email sent successfully", ip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email", error });
  }
}
