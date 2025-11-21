"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white/20 animate-pulse" />
            </div>
        );
    }

    return (
        <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full border border-border hover:border-accent/50 flex items-center justify-center transition-all duration-300 overflow-hidden group bg-background/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.div
                        key="moon"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="absolute"
                    >
                        <Moon size={18} className="text-foreground group-hover:text-accent transition-colors" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="absolute"
                    >
                        <Sun size={18} className="text-foreground group-hover:text-accent transition-colors" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
