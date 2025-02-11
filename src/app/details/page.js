"use client"; // Required in Next.js App Router for client-side data fetching

import { useEffect, useState } from "react";
import isAdmin from "@/hoc/isAdmin";

function DetailsPage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch("/api/getDetails"); // Ensure the leading '/'
                const data = await res.json();
                setEvents(data.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Registered Teams</h1>

            {loading ? (
                <p className="text-center text-gray-600">Loading...</p>
            ) : events.length === 0 ? (
                <p className="text-center text-gray-600">No teams registered yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div key={event._id} className="bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-blue-600">{event.teamName}</h2>
                            <p className="text-gray-700"><strong>Problem Statement:</strong> {event.problemStatement}</p>
                            <p className="text-gray-700"><strong>Architecture:</strong> {event.systemArchiture}</p>
                            <p className="text-gray-700">
                                <strong>Documentation:</strong> 
                                <a href={event.docLink} target="_blank" className="text-blue-500 underline ml-1">
                                    View Document
                                </a>
                            </p>

                            <h3 className="font-semibold mt-3 text-gray-800">Team Members:</h3>
                            <ul className="mt-2 space-y-2">
                                {event.teamDetails.map((member) => (
                                    <li key={member.email} className="p-2 border rounded-md bg-gray-50">
                                        <p><strong>Name:</strong> {member.name}</p>
                                        <p><strong>Email:</strong> {member.email}</p>
                                        <p><strong>SRN:</strong> {member.srn}</p>
                                        <p><strong>Hostellite:</strong> {member.hostellite ? "Yes" : "No"}</p>
                                        <p><strong>Parent's Phone No:</strong> {member.parentsPhNo}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default isAdmin(DetailsPage)