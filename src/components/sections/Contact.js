import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Form submission logic not implemented)');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-[#071c2f] transition-colors"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm actively seeking internship opportunities in web development and software engineering. 
            Let's discuss how we can create something amazing together!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Details */}
          <div className="space-y-10 text-left bg-blue-50 dark:bg-[#0d2236] p-8 rounded-2xl relative">
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-blue-600 dark:text-orange-400 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-900 dark:text-white">Email</div>
                <a href="mailto:126003104@sastra.ac.in" className="block text-blue-600 dark:text-orange-400 hover:underline">126003104@sastra.ac.in</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-blue-600 dark:text-orange-400 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-900 dark:text-white">Phone</div>
                <a href="tel:+918639286478" className="block text-blue-600 dark:text-orange-400 hover:underline">+91 8639286478</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-blue-600 dark:text-orange-400 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-900 dark:text-white">Location</div>
                <div className="text-gray-800 dark:text-gray-300">Nellore, Andhra Pradesh</div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[#0d2236] p-8 rounded-2xl shadow-xl border-2 border-blue-400 dark:border-orange-500">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-200 dark:bg-[#11243a] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 mb-4"
                required
              />
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-gray-200 dark:bg-[#11243a] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 pr-12"
                  required
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-400 dark:text-orange-300" />
              </div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-gray-200 dark:bg-[#11243a] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 mb-4"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-gray-200 dark:bg-[#11243a] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500 mb-4 min-h-[120px]"
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 