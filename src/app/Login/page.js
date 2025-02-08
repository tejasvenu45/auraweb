"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Assuming this is where your AuthContext is

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setIsAuthenticated } = useAuth(); // Get the auth function to set user authentication state
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Make POST request to the backend for signIn
    const res = await fetch("/api/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure proper content type
      },
      body: JSON.stringify(formData),
    });

    // Check for successful login and set authentication state
    if (res.ok) {
      setIsAuthenticated(true); // Update context to reflect the user is authenticated
      router.push("/"); // Redirect to home page
    } else {
      // Handle error - maybe show a message to the user
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
