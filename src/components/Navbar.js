"use client";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <div className="bg-black sm:h-40 sm:pb-18" data-theme="forest">
      <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-6 lg:px-8 pb-2 sm:pb-4">
        {/* Left Logos */}
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
          <div className="flex-grow scale-125  sm:flex-none flex justify-center items-center mt-2 sm:mt-0">
            <ul className="gap-4 scale-150 sm:rounded-3xl flex flex-wrap sm:flex-nowrap justify-center sm:justify-start">
              {["Home", "Articles", "Login", "Signup", "Chat"].map((item, index) => (
                <li key={index} className="sm:m-2 scale-150 sm:scale-125 hover:font-bold hover:text-green-700 hover:underline hover:scale-125">
                  <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Logo */}
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
