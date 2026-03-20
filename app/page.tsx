import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Metrics from "./components/Metrics";
import Certifications from "./components/Certifications";
import CompanyTicker from "./components/CompanyTicker";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber/5 rounded-full blur-[120px]" />
      </div>

      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Metrics />
      <Certifications />
      <CompanyTicker />
      <CallToAction />
      <Footer />
    </main>
  );
}
