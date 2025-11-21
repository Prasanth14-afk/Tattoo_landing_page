"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const styles = [
    { id: "realism", name: "Realism", description: "Hyper-realistic detail that brings art to life on skin." },
    { id: "traditional", name: "Traditional", description: "Bold lines and vibrant colors, honoring the roots of ink." },
    { id: "minimal", name: "Minimal", description: "Clean, subtle, and meaningful simplicity." },
    { id: "abstract", name: "Abstract", description: "Breaking forms to create unique visual language." },
    { id: "tribal", name: "Tribal", description: "Ancient patterns connecting to heritage and body flow." },
];

export default function Styles() {
    const [activeStyle, setActiveStyle] = useState(styles[0]);

    return (
        <section id="styles" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-neutral-900 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16">
                <div className="w-full md:w-1/3 z-20">
                    <span className="text-accent uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">Expertise</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase mb-8 md:mb-12 text-white">Styles</h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        {styles.map((style) => (
                            <button
                                key={style.id}
                                onMouseEnter={() => setActiveStyle(style)}
                                onClick={() => setActiveStyle(style)}
                                className={`text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display uppercase transition-all duration-300 flex items-center gap-3 md:gap-4 ${activeStyle.id === style.id ? "text-white translate-x-3 md:translate-x-4" : "text-gray-700 hover:text-gray-500"
                                    }`}
                            >
                                <span className={`h-[1px] bg-white transition-all duration-300 ${activeStyle.id === style.id ? "w-6 md:w-8" : "w-0"}`} />
                                {style.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-2/3 flex items-center justify-center relative min-h-[300px] md:min-h-[400px]">
                    <motion.div
                        key={activeStyle.id}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left relative z-10 px-4 md:px-0"
                    >
                        <h3 className="text-[20vw] sm:text-[15vw] md:text-[12vw] lg:text-[12rem] font-display font-bold uppercase text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">
                            {activeStyle.name}
                        </h3>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-200 relative z-10 max-w-2xl leading-tight">
                            {activeStyle.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
