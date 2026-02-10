"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data";

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-8"
                >
                    <h2 className="text-3xl font-bold text-text-primary mr-4 underline decoration-mint/50 underline-offset-8">About Me</h2>
                    <div className="h-[1px] bg-text-secondary/30 flex-grow"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card p-8 md:p-12 rounded-xl shadow-2xl border border-mint/5"
                >
                    <p className="text-text-secondary text-lg leading-relaxed md:text-xl">
                        {portfolioData.about.content}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
