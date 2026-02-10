"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-text-primary mr-4 whitespace-nowrap">Banking & Digital Asset Experience</h2>
                    <div className="h-[1px] bg-text-secondary/30 flex-grow"></div>
                </motion.div>

                <div className="space-y-12">
                    {portfolioData.experience.map((exp, idx) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative pl-8 md:pl-12 border-l-2 border-mint/20"
                        >
                            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-mint shadow-[0_0_10px_rgba(100,255,218,0.5)]" />

                            <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-mint/5 border border-transparent hover:border-mint/10 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                                        {exp.role} <span className="text-mint ml-2 text-lg">@ {exp.organization}</span>
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start text-text-secondary text-sm md:text-base leading-relaxed">
                                            <span className="text-mint mr-3 mt-1.5 text-[8px]">▶</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
