"use client";

import React from "react";
import Header from "../Layouts/Header/page";
import Footer from "../Layouts/Footer/page";

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to JewelryStore, a premier multi-vendor marketplace dedicated to exquisite jewelry. Our platform connects independent jewelers and vendors with customers looking for unique and high-quality pieces.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          We aim to empower jewelry artisans and vendors by providing them with a seamless online marketplace to showcase and sell their products while ensuring customers get access to diverse and authentic collections.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Wide selection of handcrafted and designer jewelry</li>
          <li>Trusted vendors and artisans</li>
          <li>Secure transactions and reliable customer support</li>
          <li>Easy vendor onboarding and management</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Join Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Whether you're a jewelry maker looking to expand your business or a customer searching for the perfect piece, JewelryStore is your go-to destination. Join us today and explore a world of elegance and craftsmanship!
        </p>
      </div>
      <Footer/>
    </>
  );
}
