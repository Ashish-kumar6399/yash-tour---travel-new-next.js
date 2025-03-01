import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, mobile, description, Passengers } = req.body;

  // Create SMTP Transporter
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `"Yash Tour and Travels" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Enquiry from Yash Tour and Travels",
      html: `
        <h3>New Enquiry Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Passengers:</strong> ${Passengers}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!", info });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ success: false, message: "Email failed to send!", error });
  }
}
