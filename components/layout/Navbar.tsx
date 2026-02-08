"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/5 bg-black/20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <span className="text-lg font-bold text-white">
                            FlowSpeak
                        </span>
                        <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                            AI
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/auth"
                            className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 text-sm font-semibold transition-colors shadow-lg shadow-purple-500/20"
                        >
                            Login
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        type="button"
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            className="block w-5 h-0.5 bg-slate-200 rounded-full origin-center"
                            animate={
                                mobileOpen
                                    ? { rotate: 45, y: 4 }
                                    : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block w-5 h-0.5 bg-slate-200 rounded-full"
                            animate={
                                mobileOpen
                                    ? { opacity: 0 }
                                    : { opacity: 1 }
                            }
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block w-5 h-0.5 bg-slate-200 rounded-full origin-center"
                            animate={
                                mobileOpen
                                    ? { rotate: -45, y: -4 }
                                    : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.2 }}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-col gap-1 px-6 py-4">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm font-medium text-slate-300 hover:text-white py-2.5 transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="/auth"
                                className="mt-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 text-sm font-semibold text-center transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Login
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
