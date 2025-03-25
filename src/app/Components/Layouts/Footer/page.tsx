'use client';

import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400 leading-relaxed">Discover exquisite jewelry from top vendors worldwide. Shop with confidence and elegance.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li><Link href="/shop" className="hover:text-white transition duration-300">Shop</Link></li>
            <li><Link href="/vendors" className="hover:text-white transition duration-300">Vendors</Link></li>
            <li><Link href="/contact" className="hover:text-white transition duration-300">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-white transition duration-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FiFacebook size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FiInstagram size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FiTwitter size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} JewelryStore. All rights reserved.
      </div>
    </footer>
  );
}
