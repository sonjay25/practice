import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Instagram } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Contact Me</h2>
        <p className="text-gray-600 text-center mt-2">Feel free to reach out!</p>

        {/* Contact Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-500" />
            <p className="text-gray-700">jayson2596@example.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-green-500" />
            <p className="text-gray-700">+63 912 345 6789</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-red-500" />
            <p className="text-gray-700">Manila, Philippines</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 h-32"
          ></textarea>
          <button className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          {[
            { Icon: Linkedin, link: "https://www.linkedin.com/in/jayson2596", hover: "hover:text-blue-500" },
            { Icon: Github, link: "https://github.com/jayson2596", hover: "hover:text-gray-600" },
            { Icon: Facebook, link: "https://facebook.com/jayson2596", hover: "hover:text-blue-600" },
            { Icon: Instagram, link: "https://instagram.com/jayson2596", hover: "hover:text-pink-500" },
          ].map(({ Icon, link, hover }, idx) => (
            <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
              <Icon className={`w-7 h-7 text-gray-800 ${hover} transition`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
