"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const adminEmails = [
    "tejas@gmail.com",
    // Add more admin emails as needed
  ];

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setUserEmail(data.email);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, [setIsAuthenticated]);

  const handleLogout = async () => {
    await fetch("/api/auth/logOut", {
      method: "POST",
      credentials: "include",
    });
    setIsAuthenticated(false);
    setUserEmail("");
    router.push("/login");
  };

  const isAdmin = adminEmails.includes(userEmail);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/pes.png"
                alt="pes"
                width={80}
                height={80}
                className="h-16 w-auto transition-transform duration-300 hover:scale-105"
              />
              <Image
                src="/aura.png"
                alt="aura"
                width={80}
                height={80}
                className="h-16 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#329D36] transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden text-xl text-bold sm:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[#329D36] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/Articles"
              className="text-white hover:text-[#329D36] transition-colors duration-300"
            >
              Articles
            </Link>
            <Link
              href="/Epoch"
              className="text-white hover:text-[#329D36] transition-colors duration-300"
            >
              Epoch
            </Link>

            {/* {isAuthenticated ? (
              <>
                <Link
                  href="/Epoch"
                  className="text-white hover:text-[#329D36] transition-colors duration-300"
                >
                  Epoch
                </Link>
                <Link
                  href="/chat"
                  className="text-white hover:text-[#329D36] transition-colors duration-300"
                >
                  Chat
                </Link>
                {isAdmin && (
                  <Link
                    href="/details"
                    className="text-[#329D36] font-semibold hover:text-white transition-colors duration-300"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-[#329D36] text-white px-4 py-2 rounded-md hover:bg-[#267d2a] transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/Login"
                  className="text-white hover:text-[#329D36] transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/Signup"
                  className="bg-[#329D36] text-white px-4 py-2 rounded-md hover:bg-[#267d2a] transition-colors duration-300"
                >
                  Signup
                </Link>
              </>
            )} */}
          </div>

          {/* Right Logo */}
          <div className="hidden lg:flex items-center">
            <Image
              src="/aiml.png"
              alt="aiml"
              width={80}
              height={80}
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black border-t border-[#329D36]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-[#329D36] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/Articles"
              className="block px-3 py-2 text-white hover:text-[#329D36] transition-colors duration-300"
            >
              Articles
            </Link>
            <Link
              href="/Epoch"
              className="block px-3 py-2 text-white hover:text-[#329D36] transition-colors duration-300"
            >
              Epoch
            </Link>

            {/* {isAuthenticated ? (
              <>
                <Link
                  href="/Epoch"
                  className="block px-3 py-2 text-white hover:text-[#329D36] transition-colors duration-300"
                >
                  Epoch
                </Link>
                <Link
                  href="/chat"
                  className="block px-3 py-2 text-white hover:text-[#329D36] transition-colors duration-300"
                >
                  Chat
                </Link>
                {isAdmin && (
                  <Link
                    href="/details"
                    className="block px-3 py-2 text-[#329D36] font-semibold hover:text-white transition-colors duration-300"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-white bg-[#329D36] rounded-md hover:bg-[#267d2a] transition-colors duration-300 mt-4"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/Login"
                  className="block px-3 py-2 text-white hover:text-[#329D36] transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/Signup"
                  className="block px-3 py-2 text-white bg-[#329D36] rounded-md hover:bg-[#267d2a] transition-colors duration-300 mt-4"
                >
                  Signup
                </Link>
              </>
            )} */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;