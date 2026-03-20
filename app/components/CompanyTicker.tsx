"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

/* ─── Types ──────────────────────────────────────────────────────── */
interface Company {
    name: string;
    logo: string | null;
}

/* ─── Single tile ─────────────────────────────────────────────────── */
function CompanyTile({ company }: { company: Company }) {
    return (
        <div
            className="
                flex-shrink-0
                flex items-center justify-center
                bg-card
                border border-mint/10
                hover:border-gold/40
                rounded-xl
                mx-3
                px-6
                transition-all duration-300
                group
                cursor-default
            "
            style={{ height: "90px", minWidth: "160px" }}
            title={company.name}
        >
            {company.logo ? (
                <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={40}
                    className="
                        object-contain
                        max-h-[42px] w-auto
                        opacity-90
                        group-hover:opacity-100
                        transition-opacity duration-300
                    "
                    unoptimized
                />
            ) : (
                /* Text chip fallback */
                <span
                    className="
                        text-text-secondary
                        text-sm font-semibold tracking-wide
                        text-center
                        leading-tight
                        group-hover:text-gold
                        transition-colors duration-300
                        px-1
                    "
                    style={{ maxWidth: "130px" }}
                >
                    {company.name}
                </span>
            )}
        </div>
    );
}

/* ─── Section ─────────────────────────────────────────────────────── */
export default function CompanyTicker() {
    const companies: Company[] = portfolioData.companies;

    // Duplicate the list so the looping seam is invisible
    const doubled = [...companies, ...companies];

    return (
        <section className="py-20 px-6 bg-black/40 overflow-hidden">
            <div className="container mx-auto">
                {/* Heading — matches the rest of the site */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-14 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-text-primary mr-4 whitespace-nowrap">
                        Companies I&apos;ve Collaborated With
                    </h2>
                    <div className="h-[1px] bg-text-secondary/30 flex-grow" />
                </motion.div>

                {/* Marquee strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="marquee-viewport"
                >
                    {/*
                     * Inner track: contains original + duplicate list.
                     * CSS animates translateX(0) → translateX(-50%), which
                     * shifts exactly one full copy off-screen — creating
                     * seamless infinite loop.
                     */}
                    <div className="marquee-track">
                        {doubled.map((company, idx) => (
                            <CompanyTile
                                key={`${company.name}-${idx}`}
                                company={company}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Subtle caption */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center text-text-secondary/50 text-xs mt-8 tracking-widest uppercase"
                >
                    Hover to pause
                </motion.p>
            </div>
        </section>
    );
}
