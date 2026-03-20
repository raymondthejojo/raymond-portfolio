"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

    const handleProjectClick = (project: typeof portfolioData.projects[0]) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-16 max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mr-6 whitespace-nowrap font-poppins">
                        Digital Asset & Banking Innovation Projects
                    </h2>
                    <div className="h-[1px] bg-gradient-to-r from-gold/50 to-transparent flex-grow"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, idx) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onClick={() => handleProjectClick(project)}
                            index={idx}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        key="modal"
                        project={selectedProject}
                        onClose={handleCloseModal}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
