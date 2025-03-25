/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type UserProfileData = {
  username: string;
  email: string;
  avatar: string;
};

export default function UserProfile() {
  const router = useRouter();
  const [user] = useState<UserProfileData>({
    username: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/100", // Replace with real profile pic URL
  });

  const handleLogout = () => {
    // Handle logout (clear user session, redirect, etc.)
    router.push("/auth/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4 flex-grow">
          <a href="/" className="block p-3 rounded hover:bg-gray-700">
            Home
          </a>
          <a href="/auth/userprofile" className="block p-3 rounded bg-gray-700">
            Profile
          </a>
          <a href="/settings" className="block p-3 rounded hover:bg-gray-700">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Profile Section */}
      <main className="flex-1 p-10 flex justify-center">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-8 text-center">
          {/* Profile Picture */}
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />

          {/* User Details */}
          <h1 className="text-3xl font-bold">{user.username}</h1>
          <p className="text-gray-600 text-lg">{user.email}</p>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-6 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
