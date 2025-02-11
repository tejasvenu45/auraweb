"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Ensure this is correctly set up
import Footer from "@/components/Footer";
export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setIsAuthenticated } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setIsAuthenticated(true);
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
    <div className=" min-h-full bg-black">
      <div className="flex flex-col items-center justify-center w-full  ">
        <form
          onSubmit={handleSubmit}
          className="w-11/12  gap-6 mt-24 mb-12 md:mt-36 md:mb-36 sm:w-3/4 md:w-1/2 lg:w-1/3 bg-black text-white border-4 border-white rounded-2xl shadow-sm shadow-[#329D36] p-10"
        >
          <h2 className="text-7xl font-bold text-[#329D36] text-center">LOGIN</h2>

          <div className="m-2 md:m-11">
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

          <div className="m-3 md:m-11">
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
            className="w-full bg-[#329D36] text-3xl font-extrabold text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>

    </div>
    <Footer/>
    </div>
  );
}
