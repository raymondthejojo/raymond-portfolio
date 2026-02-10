import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-text-secondary/10 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-gold font-poppins font-bold text-2xl tracking-widest mb-2">RHA.</h2>
                        <p className="text-text-secondary text-sm max-w-xs">
                            Digital Asset Infrastructure & E-Banking Architect
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <div className="flex space-x-6 text-2xl text-text-secondary mb-4">
                            <a href="https://github.com" className="hover:text-mint transition-colors"><FaGithub /></a>
                            <a href="https://linkedin.com" className="hover:text-mint transition-colors"><FaLinkedin /></a>
                            <a href="mailto:example@email.com" className="hover:text-mint transition-colors"><FaEnvelope /></a>
                        </div>
                        <div className="flex space-x-6 text-sm font-mono text-text-secondary">
                            <a href="#about" className="hover:text-gold transition-colors">About</a>
                            <a href="#projects" className="hover:text-gold transition-colors">Projects</a>
                            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
                            <a href="/resume.pdf" className="hover:text-gold transition-colors">Resume</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-text-secondary/5">
                    <p className="text-text-secondary/60 text-xs mb-4 md:mb-0">
                        © 2026 Raymond Hamah Amoah. All rights reserved.
                    </p>
                    <p className="text-text-secondary/60 text-[10px] font-mono tracking-tighter uppercase">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
