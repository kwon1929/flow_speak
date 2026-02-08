"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export default function ChatPage() {
    const [messages, setMessages] = useState([
        { role: "ai", content: "Hi there! Are you ready to practice 'Hit the nail on the head'?" },
    ]);
    const [input, setInput] = useState("");

    return (
        <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white">Pracice Session</h1>
                    <p className="text-slate-400 text-sm">Focus: "Hit the nail on the head"</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                    Live
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-4 mb-4 custom-scrollbar">
                {messages.map((msg, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={clsx(
                            "flex w-full",
                            msg.role === "user" ? "justify-end" : "justify-start"
                        )}
                    >
                        <div
                            className={clsx(
                                "max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed",
                                msg.role === "user"
                                    ? "bg-purple-600 text-white rounded-br-none"
                                    : "bg-white/10 text-slate-200 rounded-bl-none border border-white/5"
                            )}
                        >
                            {msg.content}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Input Area */}
            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full bg-black/40 border border-white/10 rounded-full pl-6 pr-14 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
                <button
                    className="absolute right-2 top-2 bottom-2 aspect-square rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
