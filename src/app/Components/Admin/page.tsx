"use client";

import { useState } from "react";
import Sidebar from "./Layouts/Sidebar/page";
import Navbar from "./Layouts/Navbar/page";
import DashboardCard from "./Dashboard/DashboardCard/page";
import { FiUsers, FiShoppingBag, FiDollarSign, FiBarChart2, FiMenu } from "react-icons/fi";

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar - Toggles Open/Close */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"} bg-gray-800`}>
        <Sidebar />
      </div>

      <div className="flex-1 bg-gray-100 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Sidebar Toggle Button */}
        <button
          className="absolute top-5 left-5 bg-gray-800 text-white p-2 rounded-md focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FiMenu size={24} />
        </button>

        {/* Dashboard Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Total Users" value="5,432" icon={<FiUsers />} />
          <DashboardCard title="Total Orders" value="2,345" icon={<FiShoppingBag />} />
          <DashboardCard title="Revenue" value="$12,340" icon={<FiDollarSign />} />
          <DashboardCard title="Sales Analytics" value="8.2%" icon={<FiBarChart2 />} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
