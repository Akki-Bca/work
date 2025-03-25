/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";

// Define variation type
type Variation = {
  size: string;
  color: string;
  price: string;
};

// Define form input type
type ProductFormData = {
  name: string;
  description: string;
  price: string;
  material: string;
  weight?: string;
  category: string;
};

export default function AddProduct() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [variations, setVariations] = useState<Variation[]>([]);

  const addVariation = () => {
    setVariations([...variations, { size: "", color: "", price: "" }]);
  };

  const updateVariation = (index: number, field: keyof Variation, value: string) => {
    setVariations(prev => prev.map((variation, i) => 
      i === index ? { ...variation, [field]: value } : variation
    ));
  };

  const removeVariation = (index: number) => {
    setVariations(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      
      <form className="space-y-4">
        <input type="text" placeholder="Product Name" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Description" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Price" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Material" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Weight (optional)" className="w-full p-2 border rounded" />
        <select className="w-full p-2 border rounded bg-white">
          <option value="">Select Category</option>
        </select>

        {/* Variations Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Product Variations</h3>
          {variations.map((variation, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input type="text" placeholder="Size" value={variation.size} onChange={(e) => updateVariation(index, "size", e.target.value)} className="w-1/3 p-2 border rounded" />
              <input type="text" placeholder="Color" value={variation.color} onChange={(e) => updateVariation(index, "color", e.target.value)} className="w-1/3 p-2 border rounded" />
              <input type="text" placeholder="Price" value={variation.price} onChange={(e) => updateVariation(index, "price", e.target.value)} className="w-1/3 p-2 border rounded" />
              <button type="button" onClick={() => removeVariation(index)} className="text-red-500 font-bold">X</button>
            </div>
          ))}
          <button type="button" onClick={addVariation} className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600 transition">Add Variation</button>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition">
          Add Product
        </button>
      </form>
    </div>
  );
}
