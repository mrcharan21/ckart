import React from "react";
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
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
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
            to="/admin-login/add-centers"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaBuilding />
            <span>Add Customers</span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin-login/add-franchise"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaUserPlus />
            <span>Add </span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin-login/addcourse"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaBook />
            <span>Add </span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin-login/addblogs"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaBlog />
            <span>Add </span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin-login/managereviews"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaStar />
            <span>Manage</span>
          </Link>
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
