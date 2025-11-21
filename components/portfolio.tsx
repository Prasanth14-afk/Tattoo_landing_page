"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
    {
        id: 1,
        src: "/images/tattoo-realism.png",
        category: "Realism",
        title: "Predator",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        id: 2,
        src: "/images/tattoo-japanese.jpg",
        category: "Japanese",
        title: "Ryu's Wrath",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        src: "/images/tattoo-abyss.png",
        category: "Blackwork",
        title: "Abyss",
        className: "md:col-span-1 md:row-span-2"
    },
    {
        id: 4,
        src: "/images/tattoo-crimson-v2.jpg",
        category: "Neo-Trad",
        title: "Crimson",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 5,
        src: "/images/tattoo-traditional.png",
        category: "Traditional",
        title: "Old School",
        className: "md:col-span-2 md:row-span-1"
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-card relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 md:pb-8 gap-6 md:gap-0"
                >
                    <div>
                        <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-2 block">Our Craft</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase text-white leading-tight">Selected <br /> Works</h2>
                    </div>
                    <div className="w-full md:w-auto">
                        <button className="text-xs md:text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-gray-400 transition-colors">View All Projects</button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 auto-rows-[250px] sm:auto-rows-[280px] md:auto-rows-[300px]">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden bg-muted cursor-pointer ${item.className}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mb-1 sm:mb-2 block">{item.category}</span>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display uppercase text-white">{item.title}</h3>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
