"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => link.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "glass py-4 shadow-xl" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-gold font-poppins font-bold text-xl tracking-wider"
                >
                    RHA.
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`text-sm font-medium transition-all hover:text-mint ${activeSection === link.href.substring(1) ? "text-mint font-bold" : "text-text-secondary"
                                }`}
                        >
                            <span className="text-mint mr-1 text-[10px]">0{idx + 1}.</span> {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="/resume.pdf"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: navLinks.length * 0.1 }}
                        className="border border-mint text-mint px-4 py-2 rounded text-sm hover:bg-mint/10 transition-all"
                    >
                        Resume
                    </motion.a>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden text-mint text-3xl cursor-pointer" onClick={() => setIsOpen(true)}>
                    <HiMenuAlt3 />
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center space-y-8"
                    >
                        <div className="absolute top-6 right-6 text-mint text-4xl cursor-pointer" onClick={() => setIsOpen(false)}>
                            <HiX />
                        </div>
                        {navLinks.map((link, idx) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-text-primary text-2xl font-poppins hover:text-gold transition-all"
                            >
                                <span className="text-mint mr-2 text-sm italic">0{idx + 1}.</span> {link.name}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            className="border-2 border-mint text-mint px-8 py-3 rounded-md text-xl font-bold mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
