"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Artists() {
    return (
        <section id="artists" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-card relative z-10 overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-10 md:top-20 left-0 w-full overflow-hidden pointer-events-none opacity-5">
                <h2 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-display font-bold uppercase whitespace-nowrap leading-none text-foreground">
                    Masters
                </h2>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] group"
                    >
                        <div className="absolute inset-0 bg-white/5 transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                        <div className="relative h-full w-full overflow-hidden">
                            <Image
                                src="/images/artist-1.png"
                                alt="Lead Artist"
                                fill
                                className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 space-y-6 md:space-y-8"
                    >
                        <div>
                            <span className="text-accent uppercase tracking-widest text-xs md:text-sm mb-2 block">Lead Artist</span>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase mb-4 md:mb-6 text-foreground">Alex "Ink" Vane</h3>
                        </div>

                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                            Specializing in hyper-realism and dark surrealism. With over 15 years of experience, Alex brings a unique cinematic approach to every piece, treating skin as a canvas for eternal storytelling. His work is characterized by deep contrast and intricate detailing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-8">
                            <button className="px-6 md:px-8 py-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300 uppercase text-xs md:text-sm tracking-widest w-full sm:w-auto">
                                View Portfolio
                            </button>
                            <button className="px-6 md:px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 uppercase text-xs md:text-sm tracking-widest w-full sm:w-auto">
                                Book Artist
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
