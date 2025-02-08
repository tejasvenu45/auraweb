import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full py-10">
            <div className=" mx-auto px-6 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    {/* Club Info */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <Image
                            src="/aiml.png"
                            alt="AIML Club Logo"
                            width={120}
                            height={120}
                            className="mx-auto md:mx-0"
                        />

                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-green-400 mt-3">
                            AURA Club - PES University
                        </h2>
                        <h2 className="text-xl font-bold text-green-400 mt-3">
                            Dept of AIML
                        </h2>

                    </div>
                    <p className=" text-gray-400 max-w-md mt-2 leading-relaxed">
                        A community of AI & ML enthusiasts at PES University, fostering learning,
                        research, and innovation in Machine Learning and Artificial Intelligence.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex space-x-6">
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/instagram.svg"
                                alt="Instagram"
                                width={40}
                                height={40}
                                className="hover:opacity-80 transition-all"
                            />
                        </Link>

                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/linkedin.svg"
                                alt="LinkedIn"
                                width={40}
                                height={40}
                                className="hover:opacity-80 transition-all"
                            />
                        </Link>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} AIML Club, PES University. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
