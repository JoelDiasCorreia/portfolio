
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request,) {
    console.log(req.json());
    
  if (req.method === 'POST') {
    const { name, email, message } = await req.json();;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'dias.correia.joel@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      NextResponse.json({ message: 'Error sending email' });
    }
  } else {
    NextResponse.json({ message: 'Method not allowed' });
  }
}