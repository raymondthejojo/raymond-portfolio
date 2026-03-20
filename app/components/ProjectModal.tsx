"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    category: string;
    title: string;
    description: string;
    techStack: string[];
    tags: string[];
    link?: string;
    bullets?: string[];
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Initial Focus + Body Scroll Lock + Esc Key
    useEffect(() => {
        // Save previously active element
        previousActiveElement.current = document.activeElement as HTMLElement;

        // Lock body scroll
        document.body.style.overflow = "hidden";

        // Focus modal for accessibility
        if (modalRef.current) {
            modalRef.current.focus();
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            // Restore body scroll
            document.body.style.overflow = "auto";
            // Remove event listener
            window.removeEventListener("keydown", handleKeyDown);
            // Restore focus
            if (previousActiveElement.current) {
                previousActiveElement.current.focus();
            }
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
            <motion.div
                ref={modalRef}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                className="bg-card border border-gold/20 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative outline-none"
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10"
                    aria-label="Close modal"
                >
                    <FaTimes size={20} />
                </button>

                {/* Content */}
                <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="mb-6">
                        <span className="inline-block text-xs font-mono text-mint uppercase tracking-wider bg-mint/10 px-3 py-1 rounded-full mb-3">
                            {project.category}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-poppins mb-2">
                            {project.title}
                        </h2>
                    </div>

                    {/* Body */}
                    <div className="space-y-6">
                        <div className="prose prose-invert max-w-none">
                            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                                {project.description}
                            </p>

                            {/* Bullets: If available in future (optional) */}
                            {project.bullets && project.bullets.length > 0 && (
                                <ul className="list-disc pl-5 space-y-2 mt-4 text-text-secondary">
                                    {project.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide mb-3 border-b border-white/10 pb-2">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-text-secondary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div>
                            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide mb-3 border-b border-white/10 pb-2">
                                Keywords
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-mint/80 bg-mint/5 px-2 py-1 rounded"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Link Button */}
                        {project.link && project.link !== "#" && (
                            <div className="pt-6 mt-6 border-t border-white/10">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-gold border border-gold/50 px-6 py-3 rounded-lg font-medium transition-all group"
                                >
                                    <span>View Project</span>
                                    <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={12} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
