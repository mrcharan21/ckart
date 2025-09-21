import React, { useState } from "react";
import {
  FaUser,
  FaToolbox,
  FaBuilding,
  FaUserPlus,
  FaBook,
  FaBlog,
  FaStar,
  FaEnvelope,
  FaCalendarCheck,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <div className="flex flex-col w-64 bg-gray-900 text-white p-4 shadow-lg h-screen">
      <ul className="space-y-3">
        <li>
          <Link
            to="/admin-login/dashboard"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaUser />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin-login/manage-customers"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaToolbox />
            <span>Manage Customers</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin-login/add-Category"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaBuilding />
            <span>Add Category</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin-login/add-Subcategory"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaUserPlus />
            <span>Add Subcategory</span>
          </Link>
        </li>

        {/* Dropdown for Products */}
        <li>
          <button
            onClick={() => setIsProductOpen(!isProductOpen)}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-700 transition"
          >
            <span className="flex items-center gap-2">
              <FaBook />
              <span>Products</span>
            </span>
            {isProductOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {isProductOpen && (
            <ul className="ml-6 mt-2 space-y-2 text-sm">
              <li>
                <Link
                  to="/admin-login/add-products"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
                >
                  ➤ Add Product
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-login/manage-products"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
                >
                  ➤ Manage Products
                </Link>
              </li>
              
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/admin-login/managecontacts"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaEnvelope />
            <span>Manage Contacts</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin-login/manage-feedback"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaBlog />
            <span>Manage Feedback</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin-login/managereviews"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaStar />
            <span>Manage Reviews</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin-login/loggedin"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaCalendarCheck />
            <span>Logged in on :</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
