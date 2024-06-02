
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface Message{
    name: string;
    email: string;
    message: string;
}

export async function POST(req: Request,) {

    const body: Message = await req.json();
    console.log(body);
    
    
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);
    


    const mailOptions = {
      from: body.email,
      to: 'dias.correia.joel@gmail.com',
      subject: `New Contact Form Submission from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
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