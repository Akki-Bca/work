"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";
import LoginForm from "@/app/Components/auth/login/page";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  // Check authentication status (from local storage)
  useEffect(() => {
    const user = localStorage.getItem("user"); 
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle Profile Click
  const handleProfileClick = () => {
    if (isAuthenticated) {
      router.push("/Buyer/clientComponents/Profile/page"); 
    } else {
      setShowLoginModal(true); 
    }
  };

  // Handle Successful Login
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLoginModal(false);
    localStorage.setItem("user", "true");
    router.push("/Buyer/clientComponents/Profile/page");
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800 cursor-pointer">JewelryStore</span>
        </Link>

        {/* Search Bar */}
        <div className="relative w-64 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-500 cursor-pointer" size={18} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-gray-900 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-gray-900 transition duration-300">About</Link>
          
          {/* Profile Icon */}
          <button onClick={handleProfileClick} className="focus:outline-none">
            <FiUser size={24} className="cursor-pointer hover:text-gray-900 transition duration-300" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4">
          <Link href="/" className="text-gray-700 text-lg hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" className="text-gray-700 text-lg hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</Link>
          <button onClick={handleProfileClick} className="text-gray-700 hover:text-gray-900">
            <FiUser size={24} />
          </button>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
            <button
              onClick={() => setShowLoginModal(false)}
              className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
