"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data";

export default function Skills() {
    const skillCategories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>;

    return (
        <section id="skills" className="py-24 px-6 bg-black/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-text-primary mr-4 whitespace-nowrap">Technical Capabilities</h2>
                    <div className="h-[1px] bg-text-secondary/30 flex-grow"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-card/50 p-8 rounded-xl border border-mint/10 hover:border-mint/30 transition-all"
                        >
                            <h3 className="text-gold font-bold mb-6 text-lg border-b border-gold/20 pb-2 inline-block">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {portfolioData.skills[category].map(skill => (
                                    <span
                                        key={skill}
                                        className="px-4 py-1.5 rounded-full bg-background border border-mint/20 text-mint text-xs font-mono hover:bg-mint hover:text-background transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
