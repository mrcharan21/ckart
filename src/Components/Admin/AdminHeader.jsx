import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="w-full bg-blue-300 border-b border-white p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-3 mb-3 md:mb-0">
          <h4 className="text-red-600 text-xl font-semibold">Ckart</h4>
          <FaUser className="text-red-600 text-lg" />
        </div>

        {/* Right Side: Search + User Menu */}
        <div className="flex items-center w-full md:w-auto space-x-3">
          {/* Search Input */}
          <form className="flex w-full md:w-80">
            <input
              type="text"
              placeholder="Search here"
              className="flex-grow px-3 py-2 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button
              type="button"
              className="px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
            >
              <FaSearch />
            </button>
          </form>

          {/* User Dropdown */}
          <div className="relative">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-gray-700">
              <FaUser />
            </button>
            {/* Dropdown Menu (hidden by default) */}
            <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block">
              <li>
                <Link
                  to="/admin-login/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-login/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="block px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
