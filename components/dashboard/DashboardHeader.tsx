"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", href: "/home" },
    { name: "Learn", href: "/learn" },
    { name: "Chat", href: "/chat" },
    { name: "Review", href: "/review" },
    { name: "Stats", href: "/stats" },
];

export default function DashboardHeader() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/home" className="flex items-center gap-2">
                            <span className="text-xl font-bold text-white">FlowSpeak</span>
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                                AI
                            </span>
                        </Link>
                        <nav className="hidden md:flex gap-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={clsx(
                                            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                            isActive
                                                ? "text-white"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-bg"
                                                className="absolute inset-0 rounded-full bg-white/10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-medium text-slate-300">
                                Online
                            </span>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[1px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold text-white">
                                KH
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
