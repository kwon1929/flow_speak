"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030303] flex items-center justify-center pointer-events-none">
            {/* Main Purple Gradient Blob */}
            <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

            {/* Secondary Vibrant Blob for depth */}
            <div className="absolute w-[300px] h-[300px] bg-purple-500/30 rounded-full blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />

            {/* Concentric Rings - Using Framer Motion for subtle rotation or just static clean lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="absolute w-[500px] h-[500px] border border-purple-500/30 rounded-full" />
                <div className="absolute w-[700px] h-[700px] border border-purple-500/20 rounded-full" />
                <div className="absolute w-[900px] h-[900px] border border-purple-500/10 rounded-full" />
                <div className="absolute w-[1100px] h-[1100px] border border-purple-500/5 rounded-full" />
            </div>

            {/* Grid Pattern Overlay (Optional but adds texture) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        </div>
    );
};

export default BackgroundCircles;
