"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface Project {
    category: string;
    title: string;
    description: string;
    techStack: string[];
    tags: string[];
    link?: string;
}

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
    index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={onClick}
            className="group relative bg-[#0F0F0F] rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-300 flex flex-col h-full"
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-8 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                    <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">
                        {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors font-poppins leading-tight">
                        {project.title}
                    </h3>
                </div>

                {/* Description (Truncated visually by height/overflow if needed, but flex-grow usually handles it) */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Line */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase font-bold text-text-secondary/70 bg-white/5 px-2 py-1 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
                            <FaArrowRight />
                        </div>
                    </div>
                    <p className="mt-3 text-xs text-text-secondary/50 font-mono truncate">
                        {project.techStack.join(" • ")}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
