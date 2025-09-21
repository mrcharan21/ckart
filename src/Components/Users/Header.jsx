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
          Zero2pro
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
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/About" },
            { name: "Centers", path: "/Centers" },
            { name: "Franchise", path: "/Franchies" },
            { name: "Our Courses", path: "/Courses" },
            { name: "Placements", path: "/Placements" },
            { name: "Blogs", path: "/Blogs" },
            { name: "Contact Us", path: "/ContactUs" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.path}
                className="text-white hover:text-yellow-300 transition"
              >
                {item.name}
              </Link>

              {/* 🔽 Dropdown (Blank for now) */}
              <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-700 rounded-md shadow-lg hidden group-hover:block">
                {/* Example placeholder items - you can replace or add your own */}
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Dropdown Item 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Dropdown Item 2
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
