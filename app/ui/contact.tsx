'use client'

import React from "react";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const res = await fetch('/api/mailer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
    
        if (res.ok) {
          alert('Message sent successfully');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        } else {
          alert('Failed to send message');
        }
      };
    
      return (

          <main id="contact" className="bg-white  flex flex-col items-center justify-center py-16 w-full flex-1 text-center">
            <h1 className="text-4xl font-bold mb-8 text-black">Contact Me</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="mb-4">
                <label className="text-black block text-left mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="text-black w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-left mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="text-black w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-left mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="text-black w-full px-3 py-2 border border-gray-300 rounded"
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
            </form>
          </main>
      );
    };