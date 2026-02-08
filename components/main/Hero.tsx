"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

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

const SoundWave = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 120 40"
        fill="none"
        className={clsx("w-28 md:w-36", className)}
    >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <motion.rect
                key={i}
                x={4 + i * 10}
                rx={2}
                width={4}
                fill="currentColor"
                initial={{ y: 16, height: 8 }}
                animate={{
                    y: [16, 4 + Math.random() * 8, 16],
                    height: [8, 24 + Math.random() * 12, 8],
                }}
                transition={{
                    duration: 1.2 + Math.random() * 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.08,
                }}
            />
        ))}
    </svg>
);

const ChatBubble = ({
    text,
    align,
    delay,
}: {
    text: string;
    align: "left" | "right";
    delay: number;
}) => (
    <motion.div
        className={clsx(
            "flex w-full",
            align === "right" ? "justify-end" : "justify-start"
        )}
        initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
        <div
            className={clsx(
                "max-w-[220px] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                align === "right"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-white/10 text-slate-200 rounded-bl-sm border border-white/10"
            )}
        >
            {text}
        </div>
    </motion.div>
);

const FloatingCard = ({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => (
    <motion.div
        className={clsx(
            "absolute rounded-2xl border border-white/10",
            "bg-black/40 backdrop-blur-xl shadow-lg",
            "px-5 py-4",
            className
        )}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.7, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const ScoreBar = ({
    label,
    score,
    max,
    color,
    delay,
}: {
    label: string;
    score: number;
    max: number;
    color: string;
    delay: number;
}) => (
    <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400 w-16">
            {label}
        </span>
        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
                className={clsx("h-full rounded-full", color)}
                initial={{ width: 0 }}
                animate={{ width: `${(score / max) * 100}%` }}
                transition={{ delay, duration: 1, ease: "easeOut" }}
            />
        </div>
        <span className="text-xs font-semibold text-slate-200 w-8 text-right">
            {score}
        </span>
    </div>
);

export function Hero({ className }: { className?: string }) {
    return (
        <div
            className={clsx(
                "relative flex h-screen w-full items-center justify-center overflow-hidden",
                // Removed bg-white, replaced with transparent/dark since global bg is dark
                "bg-transparent",
                className
            )}
        >
            <AnimatedGrid />

            {/* Animated background circles - Adjusted opacities for dark theme */}
            <motion.div className="absolute h-[520px] w-[520px]">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className={clsx(
                            "absolute inset-0 rounded-full",
                            "border-2 bg-gradient-to-br to-transparent",
                            [
                                "border-purple-500/30",
                                "border-violet-500/20",
                                "border-fuchsia-500/10",
                            ][i],
                            "from-purple-500/10"
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

            {/* Glow effects - Updated to purple/violet */}
            <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent)] blur-[80px]" />
            </div>

            {/* Center content */}
            <motion.div
                className="relative z-10 text-center max-w-3xl px-6"
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
                    className="mt-5 text-lg md:text-xl text-slate-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    TOEFL Speaking & Writing을 위한
                    <br className="hidden sm:block" />
                    나만의 AI 영어 튜터
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a href="/auth" className="group relative inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 text-base font-semibold transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                        무료로 시작하기
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <a href="/auth" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 px-7 py-3 text-base font-medium transition-all">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-purple-400"
                        >
                            <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                        데모 체험하기
                    </a>
                </motion.div>
            </motion.div>

            {/* Left floating card - AI conversation */}
            <FloatingCard
                className="hidden lg:block left-[5%] xl:left-[8%] top-[28%] w-[280px]"
                delay={0.8}
            >
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
                        <svg
                            viewBox="0 0 20 20"
                            fill="white"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-200">
                        Speaking Practice
                    </span>
                </div>
                <div className="space-y-2.5">
                    <ChatBubble
                        text="Describe a place you enjoy visiting."
                        align="left"
                        delay={1.2}
                    />
                    <ChatBubble
                        text="One of my favorite places is a small coffee shop near my university..."
                        align="right"
                        delay={2.0}
                    />
                    <motion.div
                        className="flex items-center gap-2 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.6 }}
                    >
                        <SoundWave className="text-purple-400" />
                        <span className="text-[11px] text-slate-400">
                            Recording...
                        </span>
                    </motion.div>
                </div>
            </FloatingCard>

            {/* Right floating card - Score analysis */}
            <FloatingCard
                className="hidden lg:block right-[5%] xl:right-[8%] top-[24%] w-[260px]"
                delay={1.0}
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
                        <svg
                            viewBox="0 0 20 20"
                            fill="white"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-200">
                        Score Analysis
                    </span>
                </div>
                <div className="space-y-3">
                    <ScoreBar
                        label="Fluency"
                        score={26}
                        max={30}
                        color="bg-purple-500"
                        delay={1.5}
                    />
                    <ScoreBar
                        label="Grammar"
                        score={24}
                        max={30}
                        color="bg-emerald-500"
                        delay={1.7}
                    />
                    <ScoreBar
                        label="Vocab"
                        score={27}
                        max={30}
                        color="bg-indigo-500"
                        delay={1.9}
                    />
                    <ScoreBar
                        label="Delivery"
                        score={25}
                        max={30}
                        color="bg-amber-500"
                        delay={2.1}
                    />
                </div>
                <motion.div
                    className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                >
                    <span className="text-xs text-slate-400">
                        Estimated Score
                    </span>
                    <span className="text-lg font-bold text-white">
                        102
                        <span className="text-xs font-normal text-slate-500">
                            {" "}
                            / 120
                        </span>
                    </span>
                </motion.div>
            </FloatingCard>
        </div>
    );
}
