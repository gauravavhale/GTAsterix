"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="shrink-0 text-2xl font-bold text-blue-600">
            SwiftCart
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 font-medium transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 font-medium transition">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-200 transition"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-6 py-4 space-y-2 shadow-lg">
          <Link href="/" className="block hover:text-blue-600 font-medium transition">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-600 font-medium transition">
            About
          </Link>
          <Link href="/contact" className="block hover:text-blue-600 font-medium transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
