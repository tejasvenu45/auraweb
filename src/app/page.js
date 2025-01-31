import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Event Registration</h1>
            <p className="text-lg text-gray-600 mb-8">Manage your team registrations with ease.</p>
            
            <div className="flex space-x-4">
                <Link href="/register">
                    <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                        Register a Team
                    </button>
                </Link>

                <Link href="/details">
                    <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                        View Registered Teams
                    </button>
                </Link>
            </div>
        </div>
    );
}
