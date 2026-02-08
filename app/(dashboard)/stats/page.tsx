"use client";

import { motion } from "framer-motion";

export default function StatsPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-white">Your Progress</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Weekly Activity Chart Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                    <h3 className="text-lg font-semibold text-white mb-6">Weekly Activity</h3>
                    <div className="h-48 flex items-end justify-between gap-2">
                        {[40, 70, 30, 85, 50, 60, 90].map((h, i) => (
                            <div key={i} className="w-full relative group">
                                <div
                                    className="bg-purple-600/20 w-full rounded-t-lg transition-all group-hover:bg-purple-500/40"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500 rounded-t-lg shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                </div>
                                <div className="text-center mt-2 text-xs text-slate-500">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Radar Mockup (simplified as bars) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                    <h3 className="text-lg font-semibold text-white mb-6">Skill Breakdown</h3>
                    <div className="space-y-6">
                        {[
                            { label: "Vocabulary", val: 80, color: "bg-blue-500" },
                            { label: "Grammar", val: 65, color: "bg-pink-500" },
                            { label: "Fluency", val: 75, color: "bg-green-500" },
                            { label: "Logic", val: 90, color: "bg-orange-500" },
                        ].map((skill, i) => (
                            <div key={skill.label}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-300">{skill.label}</span>
                                    <span className="text-white font-medium">{skill.val}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.val}%` }}
                                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                                        className={`h-full rounded-full ${skill.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
