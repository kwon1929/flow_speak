"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { createClient } from "@/utils/supabase/client";

const AnimatedGrid = () => (
    <motion.div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
        }}
    >
        <div className="h-full w-full [background-image:repeating-linear-gradient(100deg,#64748B_0%,#64748B_1px,transparent_1px,transparent_4%)] opacity-10" />
    </motion.div>
);

export default function AuthPage() {
    const handleLogin = async () => {
        const supabase = createClient();
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div
            className={clsx(
                "relative flex h-screen w-full overflow-hidden",
                "bg-transparent"
            )}
        >
            <AnimatedGrid />
            {/* ── Left: Hero-style branding (mirrors landing page) ── */}
            <div className="relative z-10 hidden lg:flex flex-1 items-center justify-center">
                {/* Animated circles */}
                <motion.div className="absolute h-[520px] w-[520px]">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className={clsx(
                                "absolute inset-0 rounded-full",
                                "border-2 bg-gradient-to-br to-transparent from-purple-500/20",
                                [
                                    "border-purple-500/30",
                                    "border-violet-500/20",
                                    "border-fuchsia-500/10",
                                ][i]
                            )}
                            animate={{
                                rotate: 360,
                                scale: [1, 1.05 + i * 0.05, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 6 + i,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>
                {/* Glow effects (same as hero) */}
                <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-[120px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent)] blur-[80px]" />
                </div>
                {/* Center text */}
                <motion.div
                    className="relative z-10 text-center max-w-md px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                        </span>
                        <span className="text-sm font-medium text-purple-300">
                            AI-Powered TOEFL Preparation
                        </span>
                    </motion.div>
                    <h1
                        className={clsx(
                            "text-5xl font-bold tracking-tight md:text-7xl",
                            "bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
                        )}
                    >
                        FlowSpeak{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                            AI
                        </span>
                    </h1>
                    <motion.p
                        className="mt-5 text-lg text-slate-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        TOEFL Speaking & Writing을 위한
                        <br />
                        나만의 AI 영어 튜터
                    </motion.p>
                </motion.div>
            </div>
            {/* ── Right: Narrow tall auth panel ── */}
            <div className="relative z-10 flex w-full lg:w-[420px] xl:w-[460px] shrink-0 items-center justify-center border-l-0 lg:border-l border-white/10 bg-black/40 backdrop-blur-xl">
                {/* Mobile-only: background circles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none lg:hidden overflow-hidden">
                    <motion.div className="h-[400px] w-[400px] opacity-20">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className={clsx(
                                    "absolute inset-0 rounded-full",
                                    "border-2 bg-gradient-to-br to-transparent from-purple-500/20",
                                    ["border-purple-500/30", "border-violet-500/20", "border-fuchsia-500/10"][i]
                                )}
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 6 + i,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
                <div className="relative z-10 flex flex-col items-center w-full px-6 lg:px-10">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="flex items-center gap-2 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-xl font-bold text-white">
                            FlowSpeak
                        </span>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                            AI
                        </span>
                    </motion.a>
                    {/* Login Card */}
                    <motion.div
                        className="w-full max-w-[340px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white">
                                Welcome Back
                            </h2>
                            <p className="mt-2 text-sm text-slate-400">
                                Sign in to start your AI tutoring
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className={clsx(
                                "mt-8 w-full flex items-center justify-center gap-3",
                                "rounded-xl border border-white/15",
                                "bg-white/5 hover:bg-white/10",
                                "px-5 py-3.5 text-sm font-semibold text-slate-200",
                                "transition-all duration-200 hover:shadow-md"
                            )}
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-center text-xs text-slate-500 leading-relaxed">
                                By continuing, you agree to our{" "}
                                <span className="text-slate-400 underline underline-offset-2 cursor-pointer hover:text-slate-300 transition-colors">
                                    Terms of Service
                                </span>
                                {" "}and{" "}
                                <span className="text-slate-400 underline underline-offset-2 cursor-pointer hover:text-slate-300 transition-colors">
                                    Privacy Policy
                                </span>
                                .
                            </p>
                        </div>
                    </motion.div>
                    {/* Back link */}
                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <a
                            href="/"
                            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                            </svg>
                            홈으로 돌아가기
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

