"use client";

import { useState } from "react";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        teamName: "",
        problemStatement: "",
        systemArchiture: "",
        docLink: "",
        teamDetails: [{ name: "", email: "", srn: "", hostellite: false, parentsPhNo: "" }]
    });

    const handleChange = (e, index = null, field = null) => {
        if (index !== null && field) {
            const updatedTeamDetails = [...formData.teamDetails];
            updatedTeamDetails[index][field] = e.target.value;
            setFormData({ ...formData, teamDetails: updatedTeamDetails });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleAddMember = () => {
        setFormData({
            ...formData,
            teamDetails: [...formData.teamDetails, { name: "", email: "", srn: "", hostellite: false, parentsPhNo: "" }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Registration successful!");
            setFormData({
                teamName: "",
                problemStatement: "",
                systemArchiture: "",
                docLink: "",
                teamDetails: [{ name: "", email: "", srn: "", hostellite: false, parentsPhNo: "" }]
            });
        } else {
            alert("Registration failed!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-green-700 p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Register Team</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="teamName" placeholder="Team Name" required
                        value={formData.teamName} onChange={handleChange}
                        className="w-full p-2 border rounded-md" />

                    <input type="text" name="problemStatement" placeholder="Problem Statement" required
                        value={formData.problemStatement} onChange={handleChange}
                        className="w-full p-2 border rounded-md" />

                    <input type="text" name="systemArchiture" placeholder="System Architecture" required
                        value={formData.systemArchiture} onChange={handleChange}
                        className="w-full p-2 border rounded-md" />

                    <input type="text" name="docLink" placeholder="Documentation Link" required
                        value={formData.docLink} onChange={handleChange}
                        className="w-full p-2 border rounded-md" />

                    <h3 className="font-semibold mt-4">Team Members</h3>
                    {formData.teamDetails.map((member, index) => (
                        <div key={index} className="space-y-2 border p-2 rounded-md">
                            <input type="text" placeholder="Name" required value={member.name}
                                onChange={(e) => handleChange(e, index, "name")}
                                className="w-full p-2 border rounded-md" />

                            <input type="email" placeholder="Email" required value={member.email}
                                onChange={(e) => handleChange(e, index, "email")}
                                className="w-full p-2 border rounded-md" />

                            <input type="text" placeholder="SRN" required value={member.srn}
                                onChange={(e) => handleChange(e, index, "srn")}
                                className="w-full p-2 border rounded-md" />

                            <input type="number" placeholder="Parent's Phone No" required value={member.parentsPhNo}
                                onChange={(e) => handleChange(e, index, "parentsPhNo")}
                                className="w-full p-2 border rounded-md" />

                            <label className="flex items-center space-x-2">
                                <input type="checkbox" checked={member.hostellite}
                                    onChange={(e) => handleChange({ target: { value: e.target.checked } }, index, "hostellite")}
                                    className="form-checkbox" />
                                <span>Hostellite</span>
                            </label>
                        </div>
                    ))}

                    <button type="button" onClick={handleAddMember}
                        className="w-full p-2 bg-blue-500 text-white rounded-md">
                        Add Member
                    </button>

                    <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
