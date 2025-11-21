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
        <section id="portfolio" className="py-32 px-6 md:px-12 bg-neutral-950 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8"
                >
                    <div>
                        <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 block">Our Craft</span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-white">Selected <br /> Works</h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <button className="text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-gray-400 transition-colors">View All Projects</button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px]">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden bg-neutral-900 cursor-pointer ${item.className}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <span className="text-xs uppercase tracking-widest text-white/70 mb-2 block">{item.category}</span>
                                    <h3 className="text-2xl md:text-3xl font-display uppercase text-white">{item.title}</h3>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
