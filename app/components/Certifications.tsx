"use client";

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { portfolioData } from "../data";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 px-6 bg-black/40">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-text-primary mr-4 whitespace-nowrap">Professional Certifications</h2>
                    <div className="h-[1px] bg-text-secondary/30 flex-grow"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-card p-6 rounded-lg border border-mint/5 flex items-center space-x-6 hover:bg-mint/5 transition-all group"
                        >
                            <div className="text-3xl text-gold group-hover:scale-110 transition-transform">
                                <FaAward />
                            </div>
                            <div>
                                <h3 className="text-text-primary font-bold">{cert.title}</h3>
                                <p className="text-text-secondary text-sm">
                                    {cert.provider} • <span className="text-mint font-mono">{cert.year}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
