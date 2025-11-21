"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg-custom.jpg"
                    alt="Tattoo Studio"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                <div className="absolute inset-0 bg-[url('/images/ink-texture.png')] opacity-10 mix-blend-overlay" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center flex flex-col items-center gap-4 md:gap-6 px-4 md:px-6"
            >
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-display font-bold tracking-tighter uppercase leading-[0.85] md:leading-[0.8] mix-blend-difference text-foreground"
                >
                    Ink & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">Iron</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground uppercase max-w-xl mt-2 md:mt-4 px-4"
                >
                    The Art of Permanence.
                </motion.p>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-6 md:mt-12"
                >
                    <a href="#portfolio" className="group relative inline-flex h-12 md:h-14 items-center justify-center overflow-hidden border border-border bg-transparent px-8 md:px-10 font-medium text-foreground transition-all duration-500 hover:bg-foreground hover:text-background hover:border-foreground">
                        <span className="uppercase tracking-widest text-xs md:text-sm">Enter Studio</span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden sm:flex"
            >
                <span className="text-[10px] uppercase tracking-widest opacity-50 text-foreground">Scroll</span>
                <motion.div
                    animate={{ height: [0, 60, 0], y: [0, 0, 60] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] bg-foreground/50"
                />
            </motion.div>
        </section>
    );
}
