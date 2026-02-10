"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { portfolioData } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-black/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-text-primary mr-4 whitespace-nowrap">Digital Asset & Banking Innovation Projects</h2>
                    <div className="h-[1px] bg-text-secondary/30 flex-grow"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 md:px-0">
                    {portfolioData.projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-card p-8 rounded-lg shadow-xl border border-mint/5 hover:border-mint/20 flex flex-col h-full transition-all"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-mono text-mint uppercase tracking-wider bg-mint/10 px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                                <a href={project.link} className="text-text-secondary hover:text-gold transition-colors text-xl">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4 group-hover:text-gold transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-text-secondary text-sm md:text-base mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <p className="text-[10px] font-mono text-mint/70 uppercase mb-2">Tech Stack</p>
                                <p className="text-xs text-text-primary/80 font-medium">
                                    {project.techStack.join(" • ")}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-text-secondary/10">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] bg-background text-text-secondary border border-text-secondary/20 px-2 py-0.5 rounded">
                                        #{tag}
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
