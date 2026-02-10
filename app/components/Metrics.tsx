"use client";

import { motion } from "framer-motion";
import { FiZap, FiCheckCircle, FiPackage, FiUsers, FiFileText } from "react-icons/fi";
import { portfolioData } from "../data";

const iconMap: Record<string, any> = {
    Zap: FiZap,
    CheckCircle: FiCheckCircle,
    Package: FiPackage,
    Users: FiUsers,
    FileText: FiFileText,
};

export default function Metrics() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-text-primary mr-4 whitespace-nowrap">Measurable Impact</h2>
                    <div className="h-[1px] bg-text-secondary/30 flex-grow"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {portfolioData.metrics.map((metric, idx) => {
                        const Icon = iconMap[metric.icon];
                        return (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-card p-10 rounded-2xl border border-cyan/10 hover:border-cyan/40 text-center group transition-all"
                            >
                                <div className="text-cyan text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    {Icon && <Icon />}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-2 font-poppins">
                                    {metric.value}
                                </h3>
                                <p className="text-text-secondary text-sm font-medium tracking-wide uppercase">
                                    {metric.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
