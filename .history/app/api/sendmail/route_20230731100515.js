import nodemailer from 'nodemailer';

export async function POST(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Set up email options
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Your Gmail account
      subject: `New message from ${name}`,
      text: message,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}