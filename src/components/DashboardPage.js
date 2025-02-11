import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Database, Brain, ArrowRight } from "lucide-react";
import withAuth from "@/hoc/withAuth";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
const img1 = "/epoch.jpg"
const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-[#201723] text-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center w-full mb-8">
                    <div className="h-36 w-40 mb-6">
                        <img
                            src={img1}
                            alt="AURA Logo"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div className="text-center space-y-6 max-w-2xl">
                        <h1 className="text-5xl font-bold text-[#329D36]">
                            AURA Datathon 2025
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-[#329D36]">
                            <div className="flex items-center gap-2">
                                <Clock className="w-6 h-6" />
                                <span className="font-semibold">10 Hours</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Database className="w-6 h-6" />
                                <span className="font-semibold">Data Analysis</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Brain className="w-6 h-6" />
                                <span className="font-semibold">AI/ML</span>
                            </div>
                        </div>

                        <Card className="bg-white/5 border-[#329D36]/20">
                            <CardContent className="p-6">
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    🚀 <span className="text-[#329D36] font-semibold">Exciting News!</span> 🚀
                                    <br />
                                    Calling all data enthusiasts! AURA, the epicenter of innovation
                                    in the CSE-AIML verticle, is thrilled to announce our first-ever event:
                                    a 10-hour datathon right on campus! Get ready to dive deep into the world
                                    of data and AI.
                                </p>
                            </CardContent>
                        </Card>

                        <Button
                            className="bg-[#329D36] text-white hover:bg-[#329D36]/80 active:bg-[#329D36]/90 transition-colors mt-4 text-lg px-8 py-6"
                        >
                            Register Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Event Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    <Card className="bg-white/5 border-[#329D36]/20">
                        <CardContent className="p-6 text-center">
                            <Clock className="w-12 h-12 text-[#329D36] mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-[#329D36] mb-2">Duration</h3>
                            <p className="text-gray-300">10-hour intensive hackathon experience</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-[#329D36]/20">
                        <CardContent className="p-6 text-center">
                            <Database className="w-12 h-12 text-[#329D36] mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-[#329D36] mb-2">Focus</h3>
                            <p className="text-gray-300">Real-world data analysis challenges</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-[#329D36]/20">
                        <CardContent className="p-6 text-center">
                            <Brain className="w-12 h-12 text-[#329D36] mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-[#329D36] mb-2">Domain</h3>
                            <p className="text-gray-300">AI/ML-powered solutions</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-[#329D36] mb-8">Frequently Asked Questions</h2>
                    <Card className="bg-white/5 border-[#329D36]/20">
                        <CardContent className="p-6">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className="border-[#329D36]/20">
                                    <AccordionTrigger className="text-[#329D36] hover:text-[#329D36]/80">
                                        What is the team size requirement?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300">
                                        Teams must have a minimum of 3 and a maximum of 4 members. No exceptions will be made to these limits.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border-[#329D36]/20">
                                    <AccordionTrigger className="text-[#329D36] hover:text-[#329D36]/80">
                                        Who can participate?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300">
                                        All undergraduate students from CSE-AIML branch are eligible to participate. Each team member must be currently enrolled.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border-[#329D36]/20">
                                    <AccordionTrigger className="text-[#329D36] hover:text-[#329D36]/80">
                                        What should we bring?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300">
                                        Participants should bring their own laptops, chargers, and any necessary peripherals. We'll provide power outlets, internet connectivity, and refreshments.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="border-[#329D36]/20">
                                    <AccordionTrigger className="text-[#329D36] hover:text-[#329D36]/80">
                                        Will there be any pre-requisites?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300">
                                        Basic knowledge of Python, data analysis libraries (pandas, numpy), and machine learning concepts is recommended. Familiarity with data visualization tools would be helpful.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default withAuth(DashboardPage);