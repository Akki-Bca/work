"use client";

import React, { useState } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiShoppingBag, FiSettings } from "react-icons/fi";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Icon */}
      <div className="p-4 text-gray-600 fixed top-4 left-4 z-50">
        {isOpen ? (
          <FiX size={30} onClick={toggleSidebar} />
        ) : (
          <FiMenu size={30} onClick={toggleSidebar} />
        )}
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <h2 className="text-xl font-bold p-5">Dashboard</h2>
        <ul className="space-y-4 p-5">
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <FiHome size={20} />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <FiUser size={20} />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <FiShoppingBag size={20} />
            <span>Orders</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <FiSettings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
