import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Catering from "./components/Catering";
import Trust from "./components/Trust";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Catering />
        <Trust />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
