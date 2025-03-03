



//-------------------------------- home page carousel form 

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




//-------------------------------- ABout page carousel form 


// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { name, phone, email, country, toDate, persons, itinerary } = req.body;

//   // Check if required fields are present
//   if (!name || !phone || !email || !country || !toDate || !persons || !itinerary) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   // Create SMTP transporter using Elastic Email
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: false, // Elastic Email does not use TLS
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"Car Coach Rentals" <${process.env.SMTP_USER}>`, 
//       to: process.env.RECEIVER_EMAIL, 
//       subject: "New Contact Form Submission",
//       html: `
//         <h2>Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Country:</strong> ${country}</p>
//         <p><strong>To Date:</strong> ${toDate}</p>
//         <p><strong>Number of Persons:</strong> ${persons}</p>
//         <p><strong>Tour Itinerary:</strong> ${itinerary}</p>
//       `,
//     });

//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email send error:", error);
//     res.status(500).json({ message: "Failed to send email", error: error.message });
//   }
// }





//-------------------------------- Contact page carousel form 




// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ message: "Method Not Allowed" });
//     }

//     const { name, email, number, subject, message } = req.body;

//     if (!name || !email || !number || !subject || !message) {
//         return res.status(400).json({ message: "All fields are required." });
//     }

//     try {
//         const transporter = nodemailer.createTransport({
//             service: "Gmail",
//             auth: {
//                 user: process.env.EMAIL_USER, // Your email
//                 pass: process.env.EMAIL_PASS, // Your email password
//             },
//         });

//         const mailOptions = {
//             from: email,
//             to: process.env.EMAIL_USER, // Send email to yourself
//             subject: `New Contact Form Submission: ${subject}`,
//             text: `Name: ${name}\nEmail: ${email}\nPhone: ${number}\n\nMessage:\n${message}`,
//         };

//         await transporter.sendMail(mailOptions);

//         return res.status(200).json({ message: "Message sent successfully!" });
//     } catch (error) {
//         return res.status(500).json({ message: "Failed to send message", error: error.message });
//     }
// }


//-------------------------------- Travel page carousel form

// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { name, email, phone, passengers, date, message, package: selectedPackage } = req.body;

//   if (!name || !email || !phone || !passengers || !date || !selectedPackage) {
//     return res.status(400).json({ error: "All fields are required!" });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.SMTP_USER,
//       to: process.env.RECEIVER_EMAIL, // Change this to your email where you want to receive inquiries
//       subject: "New Tour Package Inquiry",
//       html: `
//         <h2>New Tour Inquiry</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Number of Passengers:</strong> ${passengers}</p>
//         <p><strong>Travel Date:</strong> ${date}</p>
//         <p><strong>Selected Package:</strong> ${selectedPackage}</p>
//         <p><strong>Message:</strong> ${message || "No additional message."}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ success: true, message: "Email sent successfully!" });

//   } catch (error) {
//     console.error("Email sending error:", error);
//     return res.status(500).json({ error: "Failed to send email. Please try again later." });
//   }
// }

