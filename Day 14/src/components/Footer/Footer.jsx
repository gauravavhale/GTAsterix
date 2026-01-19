import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-md border-t shadow-inner mt-80">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-blue-600">SwiftCart</h2>
          <p className="text-gray-500 text-sm">
            Your one-stop e-commerce dashboard for managing products, orders, and analytics.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Products</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-500 text-sm">support@swiftcart.com</p>
          <p className="text-gray-500 text-sm">+91 12345 67890</p>
          <p className="text-gray-500 text-sm">Chhatrapati Sambhajinagar, India</p>
        </div>

      </div>

      <div className="border-t border-gray-200 mt-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SwiftCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
