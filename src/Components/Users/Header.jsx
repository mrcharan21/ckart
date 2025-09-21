import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link to="/" className="text-white text-2xl font-bold">
          Ckart
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center gap-4 md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent px-4 py-4 md:py-0`}
        >
          <li className="relative group">
            <Link to="/" className="text-white hover:text-yellow-300 transition">
              Home
            </Link>
          </li>

          <li className="relative group">
            <Link to="/mens-product" className="text-white hover:text-yellow-300 transition">
              Mens Products
            </Link>
          </li>

          <li className="relative group">
            <Link to="/womens-product" className="text-white hover:text-yellow-300 transition">
              Womens Products
            </Link>
          </li>

          <li className="relative group">
            <Link to="/Electronics" className="text-white hover:text-yellow-300 transition">
              Electronics
            </Link>
          </li>

          <li className="relative group">
            <Link to="/kids-products" className="text-white hover:text-yellow-300 transition">
              Kids Products
            </Link>
          </li>

          <li className="relative group">
            <Link to="/home-furniture" className="text-white hover:text-yellow-300 transition">
              Home& Furniture
            </Link>
          </li>

          <li className="relative group">
            <Link to="/ContactUs" className="text-white hover:text-yellow-300 transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
