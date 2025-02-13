"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Download, Loader2 } from "lucide-react";
import * as XLSX from 'xlsx';

const DetailsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [exporting, setExporting] = useState(false);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch("/api/getDetails");
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

    const exportToExcel = async () => {
        setExporting(true);
        try {
            const excelData = events.flatMap(event => 
                event.teamDetails.map(member => ({
                    'Team Name': event.teamName,
                    'Problem Statement': event.problemStatement,
                    'System Architecture': event.systemArchiture,
                    'Documentation Link': event.docLink,
                    'Member Name': member.name,
                    'Member Email': member.email,
                    'Member SRN': member.srn,
                    'Hostellite': member.hostellite ? 'Yes' : 'No',
                    'Parents Phone Number': member.parentsPhNo
                }))
            );

            const ws = XLSX.utils.json_to_sheet(excelData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Teams Data");
            XLSX.writeFile(wb, "teams_registration_data.xlsx");
        } catch (error) {
            console.error("Error exporting to Excel:", error);
            alert("Failed to export data to Excel");
        } finally {
            setExporting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6 animate-fade-in">
                    <h1 className="text-4xl font-bold text-white">Registered Teams</h1>
                    {events.length > 0 && (
                        <Button
                            onClick={exportToExcel}
                            disabled={exporting}
                            className="bg-[#329D36] hover:bg-[#267d2a] text-white transition-all duration-300 transform hover:scale-105"
                        >
                            {exporting ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Exporting...
                                </>
                            ) : (
                                <>
                                    <Download className="w-4 h-4 mr-2" />
                                    Export to Excel
                                </>
                            )}
                        </Button>
                    )}
                </div>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <Loader2 className="w-12 h-12 animate-spin text-[#329D36]" />
                    </div>
                ) : events.length === 0 ? (
                    <p className="text-center text-white text-xl">No teams registered yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event, index) => (
                            <Card 
                                key={event._id} 
                                className="border-2 border-[#329D36] bg-black text-white shadow-lg hover:shadow-[#329D36]/20 transition-all duration-300 animate-slide-up"
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                <CardHeader>
                                    <h2 className="text-2xl font-semibold text-[#329D36]">{event.teamName}</h2>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <p className="text-gray-300"><strong className="text-white">Problem Statement:</strong> {event.problemStatement}</p>
                                        <p className="text-gray-300"><strong className="text-white">Architecture:</strong> {event.systemArchiture}</p>
                                        <p className="text-gray-300">
                                            <strong className="text-white">Documentation:</strong> 
                                            <a 
                                                href={event.docLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-[#329D36] hover:text-[#267d2a] underline ml-1 transition-colors"
                                            >
                                                View Document
                                            </a>
                                        </p>

                                        <h3 className="font-semibold text-xl text-[#329D36] mt-6">Team Members</h3>
                                        <div className="space-y-4">
                                            {event.teamDetails.map((member) => (
                                                <div 
                                                    key={member.email} 
                                                    className="p-4 border border-[#329D36] rounded-lg bg-black/50 hover:bg-[#329D36]/10 transition-colors"
                                                >
                                                    <p><strong>Name:</strong> {member.name}</p>
                                                    <p><strong>Email:</strong> {member.email}</p>
                                                    <p><strong>SRN:</strong> {member.srn}</p>
                                                    <p><strong>Hostellite:</strong> {member.hostellite ? "Yes" : "No"}</p>
                                                    <p><strong>Parent's Phone:</strong> {member.parentsPhNo}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default DetailsPage;