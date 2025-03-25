"use client";

import React, { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Elegant Gold Necklace",
    price: "$250",
    image: "/assets/necklace.jpg",
  },
  {
    id: 2,
    name: "Silver Diamond Ring",
    price: "$180",
    image: "/assets/ring.jpg",
  },
  {
    id: 3,
    name: "Luxury Pearl Bracelet",
    price: "$120",
    image: "/assets/bracelet.jpg",
  },
  {
    id: 4,
    name: "Stylish Earrings Set",
    price: "$95",
    image: "/assets/earrings.jpg",
  },
];

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}