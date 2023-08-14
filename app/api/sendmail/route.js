// /app/api/sendmail/route.js
// import nodemailer module
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'; // import dotenv module
import { NextResponse } from 'next/server'; // import NextResponse object

// load environment variables from .env.local file
dotenv.config();

// create a transporter object using Nodemailer with your SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // your Gmail address
    pass: process.env.GMAIL_PASS, // your app password
  },
});


// export a function that handles a POST request
export async function POST(req) {
    // get the form data from the request body
    const body = await req.json();
    const { fullName, email, message } = body;
  
    // create an email object with the sender, receiver, subject, and content of your email
    const mailOptions = {
      from: 'newmercies2021@gmail.com', // sender address
      to: 'newmercies2021@gmail.com', // list of receivers
      subject: 'Contact Form Submission', // Subject line
      text: `Full name: ${fullName}
  Email: ${email}
  Message: ${message}`, // plain text body with form data
      html: `<p>Full name: <strong>${fullName}</strong></p>
  <p>Email: <a href="mailto:${email}">${email}</a></p>
  <p>Message: ${message}</p>`, // html body with form data
    };
  
    try {
      // send mail with defined transport object and await for the result
      let mailResult = await transporter.sendMail(mailOptions);
  
      // return a success response with the message id as a JSON object
      return NextResponse.json({ message: `Message sent: ${mailResult.messageId}` });
    } catch (mailError) {
      // return an error response with the error message as a JSON object
      console.error(mailError);
      return new NextResponse(
        JSON.stringify({ message: `Error: ${mailError.message}` }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }
