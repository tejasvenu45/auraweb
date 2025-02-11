"use client";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/auth/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 bg-black text-white border-4 border-green-500 rounded-2xl shadow-xl shadow-green-500 p-10"
      >
        <h2 className="text-3xl font-bold text-green-400 text-center">SIGN UP</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-center text-2xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-center text-2xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-center text-2xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full bg-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-3xl font-extrabold text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
