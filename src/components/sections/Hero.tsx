import React from 'react';
import Reveal from '@/components/Reveal';
// Import your image
import profileImage from '@/images/nics4.jpg';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20"
    >
      <div className="container-edge">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left side - Text content */}
          <div className="max-w-3xl flex-1">
            <Reveal as="p" className="eyebrow mb-8">
              <span className="text-accent">{'<'}</span> Full Stack Developer
              <span className="text-accent">{' />'}</span>
            </Reveal>

            <Reveal as="h1" delay={120} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight-2 text-ink">
              Nicole Mendez
              <br />
              Suazo
            </Reveal>

            <Reveal as="p" delay={280} className="mt-10 font-serif text-xl md:text-2xl text-ink-soft leading-relaxed max-w-prose-2">
              I build reliable systems and clean digital experiences.
            </Reveal>

            <Reveal as="div" delay={440} className="mt-12 flex items-center gap-6">
              <a
                href="#work"
                className="link-underline font-mono text-[12px] uppercase tracking-wide-3 text-ink hover:text-accent transition-colors duration-300"
              >
                View Work
              </a>
              <span className="h-px w-10 bg-ink/20" />
              <a
                href="#contact"
                className="font-mono text-[12px] uppercase tracking-wide-3 text-ink-muted hover:text-ink transition-colors duration-300"
              >
                Contact
              </a>
            </Reveal>
          </div>

          {/* Right side - Image */}
          <Reveal as="div" delay={200} className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl bg-ink/5">
              <img
                src={profileImage}
                alt="Nicole Mendez Suazo"
                className="w-full h-full object-cover object-[center_30%] scale-110"
                //            ^^^^^^^^^^^^^^ ^^^^^^^^^^^^ ^^^^^^^^^
                //            CHANGE THIS     CHANGE THIS  CHANGE THIS
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in" 
        style={{ animationDelay: '1.2s', opacity: 0 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-wide-4 text-ink-faint">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ink/30 to-transparent" />
      </div>
    </section>
  );
}