"use client";

import { motion } from "framer-motion";

export default function Booking() {
    return (
        <section id="booking" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-card relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-accent uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">Consultation</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase text-foreground">
                        Start Your Journey
                    </h2>
                </motion.div>

                <form className="space-y-8 md:space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                className="peer w-full bg-transparent border-b border-border py-2 text-lg md:text-xl text-foreground focus:outline-none focus:border-accent transition-colors placeholder-transparent"
                                placeholder="Name"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 -top-3.5 text-muted-foreground text-xs md:text-sm transition-all peer-placeholder-shown:text-lg md:peer-placeholder-shown:text-xl peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-xs md:peer-focus:text-sm uppercase tracking-widest"
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className="peer w-full bg-transparent border-b border-border py-2 text-lg md:text-xl text-foreground focus:outline-none focus:border-accent transition-colors placeholder-transparent"
                                placeholder="Email"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 -top-3.5 text-muted-foreground text-xs md:text-sm transition-all peer-placeholder-shown:text-lg md:peer-placeholder-shown:text-xl peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-xs md:peer-focus:text-sm uppercase tracking-widest"
                            >
                                Email
                            </label>
                        </div>
                    </div>

                    <div className="relative">
                        <textarea
                            id="idea"
                            rows={1}
                            className="peer w-full bg-transparent border-b border-border py-2 text-lg md:text-xl text-foreground focus:outline-none focus:border-accent transition-colors placeholder-transparent resize-none min-h-[50px]"
                            placeholder="Describe your idea"
                        />
                        <label
                            htmlFor="idea"
                            className="absolute left-0 -top-3.5 text-muted-foreground text-xs md:text-sm transition-all peer-placeholder-shown:text-lg md:peer-placeholder-shown:text-xl peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-xs md:peer-focus:text-sm uppercase tracking-widest"
                        >
                            Describe your idea
                        </label>
                    </div>

                    <div className="flex justify-center pt-4 md:pt-8">
                        <button type="button" className="group relative px-8 sm:px-10 md:px-12 py-3 md:py-4 overflow-hidden bg-foreground text-background font-display uppercase tracking-widest text-sm md:text-base lg:text-lg transition-all hover:bg-foreground/90 w-full sm:w-auto">
                            <span className="relative z-10">Request Consultation</span>
                            <div className="absolute inset-0 bg-foreground/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out -z-0" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
