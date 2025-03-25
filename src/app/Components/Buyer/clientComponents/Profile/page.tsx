"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Profile Header */}
      <div className="flex items-center space-x-4 border-b pb-4">
        <Image
          src="/images/avatar.png"
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">Order History</h3>
        <div className="border p-4 rounded-md">
          <p className="text-gray-600">No recent orders.</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">Account Settings</h3>
        <div className="flex flex-col space-y-3">
          <Link href="/edit-profile" className="text-blue-600 hover:underline">
            Edit Profile
          </Link>
          <Link href="/change-password" className="text-blue-600 hover:underline">
            Change Password
          </Link>
          <button className="text-red-600 hover:underline">Logout</button>
        </div>
      </div>
    </div>
  );
}
