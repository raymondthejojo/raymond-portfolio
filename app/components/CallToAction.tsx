"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data";

export default function CallToAction() {
    return (
        <section id="contact" className="py-24 px-6 text-center">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-card to-background p-12 md:p-20 rounded-[2rem] border border-gold/20 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative background elements */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan/10 rounded-full blur-3xl"></div>

                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-poppins">
                        Ready to Build the Future of Digital Banking?
                    </h2>
                    <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto italic">
                        "Bridging traditional finance with decentralized innovation requires more than just code; it requires strategy and institutional compliance."
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a
                            href="mailto:example@email.com"
                            className="px-10 py-4 bg-gold text-background rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-gold/20 w-full sm:w-auto"
                        >
                            Let’s Build Together
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-10 py-4 border-2 border-mint text-mint rounded-full font-bold hover:bg-mint/10 transition-all w-full sm:w-auto"
                        >
                            Download Resume
                        </a>
                        <a
                            href="https://github.com"
                            className="px-10 py-4 text-text-secondary hover:text-cyan transition-colors font-bold"
                        >
                            View GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
