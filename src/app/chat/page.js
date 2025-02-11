'use client';

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/navigation";

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
    try {
      const res = await fetch(`/api/chat/askQuestion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error("Error in fetch!");
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
    try {
      const res = await fetch(`/api/chat/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ answer, id }),  
      });
      if (!res.ok) throw new Error("Error sending answer!");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap bg-black text-white">
      <div className="max-w-4xl mx-auto p-6 w-full sm:w-1/2">
        <h1 className="text-4xl font-bold mb-8 text-green-700">Public Questions</h1>
        {faqData.length > 0 ? (
          faqData.map((item, index) => (
            <div key={item._id} className="mb-4">
              <div
                className="cursor-pointer p-4 bg-purple-800 text-white rounded"
                onClick={() => toggleAnswer(index)}
              >
                <h1 className="font-black text-3xl">{item.question}</h1>
              </div>
              {activeIndex === index && (
                <div className="mt-2 text-3xl p-4 bg-orange-400 text-black font-bold rounded">
                  {Array.isArray(item.answer) ? (
                    item.answer.map((ans, idx) => (
                      <div key={idx} className="mb-2">{ans.answer}</div>
                    ))
                  ) : (
                    <div>{item.answer}</div> 
                  )}
                  {allowedEmails.includes(user?.email) && (
                    <form onSubmit={(e) => handleAnswer(e, item._id)} className="mt-4">
                    <textarea
                      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-700"
                      rows="4"
                      placeholder="Type your answer here..."
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <button
                      type="submit"
                      className="mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                    >
                      Answer
                    </button>
                  </form>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="w-full sm:w-1/2 p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula magna at diam convallis.
        </p>
        {isAuthenticated ? (
          <form method="post" onSubmit={handleSubmit} className="w-full">
            <textarea
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-700"
              rows="4"
              placeholder="Type your question here..."
              name="question"
              id="question"
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
            <button type="submit" className="mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
              Submit
            </button>
          </form>
        ) : (
          <p className="text-red-500">You must be logged in to ask a question.</p>
        )}
      </div>
    </div>
  );
};

export default withAuth(Chat);
