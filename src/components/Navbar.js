"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Slide } from "react-awesome-reveal";
import { useAuth } from "../context/AuthContext"; 

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          method: "GET",
          credentials: "include", 
        });

        if (res.ok) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, [setIsAuthenticated]);

  // Handle logout
  const handleLogout = async () => {
    await fetch("/api/auth/logOut", {
      method: "POST",
      credentials: "include",
    });
    setIsAuthenticated(false); 
    router.push("/login"); 
  };

  return (
    <div className="bg-black sm:h-40 sm:pb-18" data-theme="forest">
      <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-6 lg:px-8 pb-2 sm:pb-4">
        {/* Left Logo Section */}
        <div className="flex items-center">
          <Slide>
            <Image
              src="/pes.png"
              alt="pes"
              width={100}
              height={100}
              className="h-28 w-auto mr-2 sm:mr-4 hidden sm:block"
            />
            <Image
              src="/aura.png"
              alt="aura"
              width={100}
              height={100}
              className="h-12 sm:h-28 w-auto hidden sm:block"
            />
          </Slide>
        </div>

        {/* Navigation Links */}
        <div className="border-6 border-green-600">
          <div className="flex-grow scale-125 sm:flex-none flex justify-center items-center mt-2 sm:mt-0">
            <ul className="gap-4 scale-150 sm:rounded-3xl flex flex-wrap sm:flex-nowrap justify-center sm:justify-start">
              <li className="sm:m-2 scale-150 sm:scale-125 hover:font-bold hover:text-green-700 hover:underline hover:scale-125">
                <Link href="/">Home</Link>
              </li>
              <li className="sm:m-2 scale-150 sm:scale-125 hover:font-bold hover:text-green-700 hover:underline hover:scale-125">
                <Link href="/Articles">Articles</Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li className="sm:m-2 scale-150 sm:scale-125 hover:font-bold hover:text-green-700 hover:underline hover:scale-125">
                    <Link href="/Epoch">Epoch</Link>
                  </li>
                  <li className="sm:m-2 scale-150 sm:scale-125 hover:font-bold hover:text-green-700 hover:underline hover:scale-125">
                    <Link href="/Chat">Chat</Link>
                  </li>
                  <li>
                    <button
                      className="sm:m-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="sm:m-2 scale-150 sm:scale-125 hover:font-bold hover:text-green-700 hover:underline hover:scale-125">
                    <Link href="/Login">Login</Link>
                  </li>
                  <li className="sm:m-2 scale-150 sm:scale-125 hover:font-bold hover:text-green-700 hover:underline hover:scale-125">
                    <Link href="/Signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="hidden sm:block">
          <Slide>
            <Image
              src="/aiml.png"
              alt="aiml"
              width={100}
              height={100}
              className="h-48 w-auto mr-2 sm:mr-4"
            />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
