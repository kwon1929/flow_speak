"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LearnPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                    Today's Expression
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    "Hit the nail on the head"
                </h1>
                <p className="text-xl text-slate-300">
                    정확히 맞드, 핵심을 찌르다
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-8 backdrop-blur-sm"
            >
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-purple-400">Definition</h3>
                    <p className="text-slate-300 leading-relaxed">
                        To describe exactly what is causing a situation or problem; to be exactly right about something.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-400">Example</h3>
                    <div className="bg-black/30 rounded-xl p-6 border-l-4 border-blue-500">
                        <p className="text-slate-200 italic">
                            "You really <span className="text-blue-400 font-bold">hit the nail on the head</span> with that analysis."
                        </p>
                        <p className="text-slate-500 text-sm mt-2">
                            그 분석은 정말 정확했어.
                        </p>
                    </div>
                </div>

                <div className="pt-4 flex justify-center">
                    <Link
                        href="/chat"
                        className="group relative inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-500 px-8 py-4 text-base font-semibold text-white transition-all shadow-lg shadow-purple-900/20"
                    >
                        <span>Practice in Chat</span>
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
