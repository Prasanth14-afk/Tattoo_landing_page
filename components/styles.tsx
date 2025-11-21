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
        <section id="styles" className="py-32 px-6 md:px-12 bg-neutral-900 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                <div className="w-full md:w-1/3 z-20">
                    <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-12 text-white">Styles</h2>
                    <div className="flex flex-col gap-6">
                        {styles.map((style) => (
                            <button
                                key={style.id}
                                onMouseEnter={() => setActiveStyle(style)}
                                onClick={() => setActiveStyle(style)}
                                className={`text-left text-2xl md:text-4xl font-display uppercase transition-all duration-300 flex items-center gap-4 ${activeStyle.id === style.id ? "text-white translate-x-4" : "text-gray-700 hover:text-gray-500"
                                    }`}
                            >
                                <span className={`h-[1px] bg-white transition-all duration-300 ${activeStyle.id === style.id ? "w-8" : "w-0"}`} />
                                {style.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-2/3 flex items-center justify-center relative min-h-[400px]">
                    <motion.div
                        key={activeStyle.id}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left relative z-10"
                    >
                        <h3 className="text-[15vw] md:text-[12rem] font-display font-bold uppercase text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">
                            {activeStyle.name}
                        </h3>
                        <p className="text-2xl md:text-4xl font-light text-gray-200 relative z-10 max-w-2xl leading-tight">
                            {activeStyle.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
