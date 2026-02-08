"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sessions = [
    { id: 1, date: "Feb 07", topic: "Ordering Coffee", score: 92, feedback: "Great flow!" },
    { id: 2, date: "Feb 06", topic: "Job Interview", score: 85, feedback: "Watch your tense." },
    { id: 3, date: "Feb 05", topic: "Travel Plans", score: 88, feedback: "Good vocabulary." },
];

export default function ReviewPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Review History</h1>

            <div className="grid gap-4">
                {sessions.map((session, idx) => (
                    <motion.div
                        key={session.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 transition-all hover:border-purple-500/30 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                                        {session.topic}
                                    </h3>
                                    <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                                        {session.date}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400">"{session.feedback}"</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Score</div>
                                    <div className="text-2xl font-bold text-white">{session.score}</div>
                                </div>
                                <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-purple-500 group-hover:text-purple-400 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
