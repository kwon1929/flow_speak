"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export default function DashboardHome() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const supabase = createClient();
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });
    }, []);

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold text-white">
                    Hello, <span className="text-purple-400">{user?.email?.split("@")[0] || "Student"}</span>!
                </h1>
                <p className="mt-2 text-slate-400">
                    Ready to improve your English today?
                </p>
            </motion.div>

            {/* Main Action Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/5 p-8"
            >
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Daily Session</h2>
                        <p className="text-slate-300 max-w-md">
                            Start your daily practice with a new topic and expression. Consistent practice is key!
                        </p>
                    </div>
                    <Link
                        href="/learn"
                        className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-600 transition-transform active:scale-95"
                    >
                        <span>Start Learning</span>
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            </motion.div>

            {/* Stats / Recent Activity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Current Streak", value: "3 Days", icon: "🔥", color: "text-orange-400" },
                    { title: "Expressions Learned", value: "12", icon: "📚", color: "text-blue-400" },
                    { title: "Total Talk Time", value: "45m", icon: "⏱️", color: "text-green-400" },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        className="rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{stat.icon}</span>
                            <h3 className="text-sm font-medium text-slate-400">{stat.title}</h3>
                        </div>
                        <p className={clsx("text-2xl font-bold", stat.color)}>{stat.value}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
