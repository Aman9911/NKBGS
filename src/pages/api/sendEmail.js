import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to send to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      text: `You have a new message from ${name} (${email}):${phone}\n\n${message}`,
    };

    // Confirmation email to send to the user
    const userConfirmationOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Message!",
      text: `Hi ${name},\n\nThank you for reaching out! We received your message and will get back to you soon.\n\nBest regards,\nNKBGS`,
    };

    try {
      // Send both emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(userConfirmationOptions);
      res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
