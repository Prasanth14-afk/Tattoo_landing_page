"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Artists", href: "#artists" },
    { name: "Styles", href: "#styles" },
    { name: "Studio", href: "#studio" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 md:px-12 py-3 md:py-4 flex justify-between items-center",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-b border-border py-2 md:py-3"
                        : "bg-transparent"
                )}
            >
                <Link href="/" className="text-xl sm:text-2xl font-display font-bold tracking-widest uppercase z-50 relative text-foreground">
                    Ink & Iron
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 lg:gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs lg:text-sm uppercase tracking-widest hover:text-gray-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Link
                        href="#booking"
                        className="px-4 lg:px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-widest"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 relative text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center gap-6 md:gap-8 px-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-widest hover:text-gray-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 md:mt-8 flex flex-col items-center gap-4">
                            <ThemeToggle />
                            <Link
                                href="#booking"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm tracking-widest"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
