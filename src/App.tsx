import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Work from '@/components/sections/Work';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
