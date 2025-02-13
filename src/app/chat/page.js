'use client';

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/navigation";
import { MessageCircle, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Chat = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [question, setQuestion] = useState("");
  const [faqData, setFaqData] = useState([]);
  const [answer, setAnswer] = useState("");
  const allowedEmails = process.env.ALLOWED_EMAILS?.split(",") || [];

  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!question.trim()) return;
    
    try {
      const res = await fetch(`/api/chat/askQuestion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error("Error in fetch!");
      setQuestion(""); // Clear input after successful submission
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const receiveQuestion = async () => {
      try {
        const req = await fetch(`/api/chat/getQuestions`, {
          method: "GET",
          credentials: "include",
        });

        if (!req.ok) throw new Error("Failed to fetch questions");

        const data = await req.json();
        setFaqData(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setFaqData([]);
      }
    };

    receiveQuestion();
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAnswer = async (evt, id) => {
    evt.preventDefault();
    if (!answer.trim()) return;

    try {
      const res = await fetch(`/api/chat/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ answer, id }),
      });
      if (!res.ok) throw new Error("Error sending answer!");
      setAnswer(""); // Clear answer field after submission
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <MessageCircle className="w-8 h-8 text-[#329D36]" />
              <h1 className="text-3xl font-bold text-[#329D36]">Community Questions</h1>
            </div>

            <div className="space-y-4">
              {faqData.length > 0 ? (
                faqData.map((item, index) => (
                  <Card 
                    key={item._id} 
                    className="bg-black border border-[#329D36] hover:border-white transition-colors duration-300"
                  >
                    <CardContent className="p-0">
                      <div
                        className="cursor-pointer p-4 flex justify-between items-center hover:bg-[#329D36]/10 transition-colors duration-300"
                        onClick={() => toggleAnswer(index)}
                      >
                        <h2 className="text-xl font-semibold">{item.question}</h2>
                        {activeIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-[#329D36]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#329D36]" />
                        )}
                      </div>

                      {activeIndex === index && (
                        <div className="p-4 border-t border-[#329D36]/30">
                          <div className="space-y-4">
                            {Array.isArray(item.answer) ? (
                              item.answer.map((ans, idx) => (
                                <div key={idx} className="text-gray-300">{ans.answer}</div>
                              ))
                            ) : (
                              <div className="text-gray-300">{item.answer}</div>
                            )}
                          </div>

                          {allowedEmails.includes(user?.email) && (
                            <form onSubmit={(e) => handleAnswer(e, item._id)} className="mt-6">
                              <div className="relative">
                                <textarea
                                  className="w-full p-4 bg-black border border-[#329D36] rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white resize-none"
                                  rows="4"
                                  placeholder="Add your answer..."
                                  value={answer}
                                  onChange={(e) => setAnswer(e.target.value)}
                                />
                                <button
                                  type="submit"
                                  className="absolute bottom-4 right-4 text-[#329D36] hover:text-white transition-colors duration-300"
                                >
                                  <Send className="w-5 h-5" />
                                </button>
                              </div>
                            </form>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-gray-400 text-center py-8">No questions have been asked yet. Be the first!</p>
              )}
            </div>
          </div>

          {/* Ask Question Section */}
          <div className="lg:pl-8">
            <Card className="bg-black border border-[#329D36] p-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#329D36]">Ask a Question</h2>
                <p className="text-gray-300">
                  Have a question? Feel free to ask! Our community members will help answer it.
                </p>

                {isAuthenticated ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <textarea
                        className="w-full p-4 bg-black border border-[#329D36] rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white resize-none"
                        rows="6"
                        placeholder="Type your question here..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="absolute bottom-4 right-4 bg-[#329D36] text-white p-2 rounded-full hover:bg-[#267d2a] transition-colors duration-300"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-red-500/10 border border-red-500 rounded-lg p-4">
                    <p className="text-red-500">Please log in to ask questions.</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Chat);