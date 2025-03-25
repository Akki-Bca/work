"use client";

import React, { useState } from "react";
import Link from "next/link";
import Analytics from "../../Analystics/page"; // Fixed spelling
import DashboardCard from "../../Dashboard/DashboardCard/page";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBarChart2,
  FiShoppingBag,
} from "react-icons/fi";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white md:hidden"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64 transition-transform duration-300 ease-in-out z-40`}
      >
        <h2 className="text-2xl font-bold p-5">Admin Panel</h2>
        <ul className="space-y-4 p-5">
          <li
            className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
            onClick={() => setShowDashboard(!showDashboard)}
          >
            <FiHome size={20} />
            <span className="w-full">Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <FiUser size={20} />
            <Link href="/admin/Dashboard" className="w-full">
              Users
            </Link>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <FiShoppingBag size={20} />
            <Link href="/admin/orders" className="w-full">
              Orders
            </Link>
          </li>
          <li
            className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
            onClick={() => setShowAnalytics(!showAnalytics)}
          >
            <FiBarChart2 size={20} />
            <span className="w-full">Analytics</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <FiSettings size={20} />
            <Link href="/admin/settings" className="w-full">
              Settings
            </Link>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <FiLogOut size={20} />
            <button className="w-full text-left">Logout</button>
          </li>
        </ul>
      </aside>

      {/* Sales Analytics Section */}
      {showAnalytics && (
        <div className="p-5">
          <Analytics />
        </div>
      )}

      {/* Dashboard Section */}
      {showDashboard && (
        <div className="p-5">
          <DashboardCard title="Total Users" value={'1200'} icon={<FiUser />} />
          <DashboardCard title="Total Sales" value={'4500'} icon={<FiShoppingBag />} />
          <DashboardCard title="Active Orders" value={'320'} icon={<FiBarChart2 />} />
        </div>
      )}

      {/* Overlay (Closes Sidebar on Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
