// "use client";

// import { useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Plus, UserPlus, Send, Loader2 } from "lucide-react";
// import DashboardPage from "@/components/DashboardPage";
// import Footer from "@/components/Footer";
// // import withAuth from "@/hoc/withAuth";

// function RegisterPage() {
//     const [isLoading, setIsLoading] = useState(false);
//     const [formData, setFormData] = useState({
//         teamName: "",
//         problemStatement: "",
//         systemArchiture: "",
//         docLink: "",
//         teamDetails: [{ name: "", email: "", srn: "", hostellite: false, parentsPhNo: "" }]
//     });

//     const handleChange = (e, index = null, field = null) => {
//         if (index !== null && field) {
//             const updatedTeamDetails = [...formData.teamDetails];
//             updatedTeamDetails[index][field] = e.target.value;
//             setFormData({ ...formData, teamDetails: updatedTeamDetails });
//         } else {
//             setFormData({ ...formData, [e.target.name]: e.target.value });
//         }
//     };

//     const handleAddMember = () => {
//         if (formData.teamDetails.length >= 4) {
//             alert("Maximum team size is 4 members!");
//             return;
//         }

//         setFormData({
//             ...formData,
//             teamDetails: [
//                 ...formData.teamDetails,
//                 { name: "", email: "", srn: "", hostellite: false, parentsPhNo: "" }
//             ]
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         try {
//             const response = await fetch("/api/register", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 alert("Registration successful!");
//                 setFormData({
//                     teamName: "",
//                     problemStatement: "",
//                     systemArchiture: "",
//                     docLink: "",
//                     teamDetails: [{ name: "", email: "", srn: "", hostellite: false, parentsPhNo: "" }]
//                 });
//             } else {
//                 alert("Registration failed!");
//             }
//         } catch (error) {
//             alert("An error occurred during registration.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#201723] text-white py-8 px-4">
//             <DashboardPage />

//             <div className="max-w-4xl mx-auto">
//                 <Card className="bg-white/5 border-[#329D36]/20">
//                     <CardHeader>
//                         <CardTitle className="text-3xl font-bold text-center text-[#329D36]">
//                             Team Registration
//                         </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="space-y-4">
//                                 <Input
//                                     type="text"
//                                     name="teamName"
//                                     placeholder="Team Name"
//                                     required
//                                     value={formData.teamName}
//                                     onChange={handleChange}
//                                     className="bg-black/50 border-[#329D36]/30 focus:border-[#329D36] focus:ring-1 focus:ring-[#329D36] text-white transition-colors"
//                                     disabled={isLoading}
//                                 />
//                                 <Input
//                                     type="text"
//                                     name="problemStatement"
//                                     placeholder="Problem Statement"
//                                     required
//                                     value={formData.problemStatement}
//                                     onChange={handleChange}
//                                     className="bg-black/50 border-[#329D36]/30 focus:border-[#329D36] focus:ring-1 focus:ring-[#329D36] text-white transition-colors"
//                                     disabled={isLoading}
//                                 />
//                                 <Input
//                                     type="text"
//                                     name="systemArchiture"
//                                     placeholder="System Architecture"
//                                     required
//                                     value={formData.systemArchiture}
//                                     onChange={handleChange}
//                                     className="bg-black/50 border-[#329D36]/30 focus:border-[#329D36] focus:ring-1 focus:ring-[#329D36] text-white transition-colors"
//                                     disabled={isLoading}
//                                 />
//                                 <Input
//                                     type="text"
//                                     name="docLink"
//                                     placeholder="Documentation Link"
//                                     required
//                                     value={formData.docLink}
//                                     onChange={handleChange}
//                                     className="bg-black/50 border-[#329D36]/30 focus:border-[#329D36] focus:ring-1 focus:ring-[#329D36] text-white transition-colors"
//                                     disabled={isLoading}
//                                 />
//                             </div>

//                             <div className="mt-8">
//                                 <h3 className="text-xl font-semibold text-[#329D36] mb-4 flex items-center gap-2">
//                                     <UserPlus size={24} />
//                                     Team Members
//                                 </h3>
//                                 <div className="space-y-4">
//                                     {formData.teamDetails.map((member, index) => (
//                                         <Card key={index} className="bg-black/30 border-[#329D36]/20">
//                                             <CardContent className="pt-6">
//                                                 <div className="grid gap-4">
//                                                     <Input
//                                                         type="text"
//                                                         placeholder="Name"
//                                                         required
//                                                         value={member.name}
//                                                         onChange={(e) => handleChange(e, index, "name")}
//                                                         className="bg-black/50 border-[#329D36]/30 focus:border-[#329D36] focus:ring-1 focus:ring-[#329D36] text-white transition-colors"
//                                                         disabled={isLoading}
//                                                     />
//                                                     <Input
//                                                         type="email"
//                                                         placeholder="Email"
//                                                         required
//                                                         value={member.email}
//                                                         onChange={(e) => handleChange(e, index, "email")}
//                                                         className="bg-black/50 border-[#329D36]/30 focus:border-[#329D36] focus:ring-1 focus:ring-[#329D36] text-white transition-colors"
//                                                         disabled={isLoading}
//                                                     />
//                                                     <Input
//                                                         type="text"
//                                                         placeholder="SRN"
//                                                         required
//                                                         value={member.srn}
//                                                         onChange={(e) => handleChange(e, index, "srn")}
//                                                         className="bg-black/50 border-[#329D36]/30 focus:border-[#329D36] focus:ring-1 focus:ring-[#329D36] text-white transition-colors"
//                                                         disabled={isLoading}
//                                                     />
//                                                     <Input
//                                                         type="tel"
//                                                         placeholder="Parent's Phone Number"
//                                                         required
//                                                         value={member.parentsPhNo}
//                                                         onChange={(e) => handleChange(e, index, "parentsPhNo")}
//                                                         className="bg-black/50 border-[#329D36]/30 focus:border-[#329D36] focus:ring-1 focus:ring-[#329D36] text-white transition-colors"
//                                                         disabled={isLoading}
//                                                     />
//                                                     <div className="flex items-center space-x-2">
//                                                         <Checkbox
//                                                             checked={member.hostellite}
//                                                             onCheckedChange={(checked) =>
//                                                                 handleChange({ target: { value: checked } }, index, "hostellite")
//                                                             }
//                                                             className="border-[#329D36] data-[state=checked]:bg-[#329D36]"
//                                                             disabled={isLoading}
//                                                         />
//                                                         <label className="text-sm text-gray-200">Hostellite</label>
//                                                     </div>
//                                                 </div>
//                                             </CardContent>
//                                         </Card>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="flex flex-col gap-4 mt-6">
//                                 <Button
//                                     type="button"
//                                     onClick={handleAddMember}
//                                     disabled={formData.teamDetails.length >= 4 || isLoading}
//                                     className="bg-[#329D36] text-white hover:bg-[#329D36]/80 active:bg-[#329D36]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     <Plus className="w-4 h-4 mr-2" />
//                                     Add Team Member
//                                 </Button>
//                                 <Button
//                                     type="submit"
//                                     disabled={isLoading}
//                                     className="bg-[#329D36] text-white hover:bg-[#329D36]/80 active:bg-[#329D36]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     {isLoading ? (
//                                         <>
//                                             <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                                             Registering...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Send className="w-4 h-4 mr-2" />
//                                             Submit Registration
//                                         </>
//                                     )}
//                                 </Button>
//                             </div>
//                         </form>
//                     </CardContent>
//                 </Card>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default RegisterPage;
"use client";
import DashboardPage from "@/components/DashboardPage"
function RegisterPage() {
    return (
        <div>
            <DashboardPage/>
        </div>
    )
}

export default RegisterPage;