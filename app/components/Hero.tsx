"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "../data";

export default function Hero() {
    const { hero } = portfolioData;

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Profile Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gold shadow-[0_0_50px_rgba(255,191,0,0.15)] mb-12 overflow-hidden bg-card relative group amber-shadow flex items-center justify-center"
                >
                    <img
                        src={hero.image}
                        alt={hero.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ objectPosition: 'center center' }}
                        onError={(e) => {
                            e.currentTarget.style.opacity = '0';
                            const parent = e.currentTarget.parentElement;
                            if (parent && !parent.querySelector('.fallback')) {
                                const span = document.createElement('span');
                                span.className = 'fallback text-gold font-bold text-4xl';
                                span.innerText = 'RHA';
                                parent.appendChild(span);
                            }
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gold font-mono mb-4 tracking-widest text-sm"
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-text-primary text-5xl md:text-7xl font-bold mb-4 font-poppins"
                >
                    {hero.name}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-text-secondary text-3xl md:text-5xl font-bold mb-6"
                >
                    {hero.tagline}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-text-secondary max-w-2xl mb-10 text-lg md:text-xl leading-relaxed"
                >
                    {hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {hero.buttons.map((btn, idx) => (
                        <a
                            key={btn.label}
                            href={btn.href}
                            className={`px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all ${btn.primary
                                ? "bg-gold text-black hover:bg-gold/80 hover:scale-105"
                                : "border border-gold text-gold hover:bg-gold/10 hover:scale-105"
                                }`}
                        >
                            {btn.label}
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex space-x-6 text-2xl text-text-secondary"
                >
                    {hero.socials.map((social) => (
                        <a
                            key={social.platform}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gold hover:-translate-y-1 transition-all"
                        >
                            {social.icon === "Github" && <FaGithub />}
                            {social.icon === "Linkedin" && <FaLinkedin />}
                            {social.icon === "Mail" && <FaEnvelope />}
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
