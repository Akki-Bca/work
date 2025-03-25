"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type BusinessRegisterForm = {
  username: string;
  cname: string;
  email: string;
  contact: string;
  password: string;
  location: string;
};

export default function BusinessRegister() {
  const [formData, setFormData] = useState<BusinessRegisterForm>({
    username: "",
    cname: "",
    email: "",
    contact: "",
    password: "",
    location: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/auth"); // Redirect on successful registration
      } else {
        setErrorMessage(result.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Business Account Registration</h2>
      {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="text"
          name="cname"
          placeholder="Company Name"
          value={formData.cname}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Business Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Business Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          pattern="[0-9]+"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          minLength={6}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link href="/auth/selllogin" className="text-blue-500">Login here</Link>
      </p>
    </div>
  );
}
