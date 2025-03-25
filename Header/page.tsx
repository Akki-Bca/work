"use client";

import Link from "next/link";

interface HeaderProps {
  user?: { username: string }; // Define user prop type
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white p-4 shadow-md">
      {/* Left: Company Name */}
      <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition">
        RKC Jewelry
      </Link>

      {/* Right: User Greeting or Authentication Links */}
      <div>
        {user ? (
          <span className="text-lg font-medium">Welcome, {user.username}!</span>
        ) : (
          <div className="space-x-4">
            <Link href="/auth/login" className="text-gray-300 hover:text-white transition">
              Login
            </Link>
            <Link
              href="/auth/register"
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
