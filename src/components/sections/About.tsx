import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">
              01 — About
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal as="div" delay={120}>
              <p className="font-serif text-2xl md:text-3xl leading-[1.4] text-ink-soft max-w-prose-2">
                I'm a detail-oriented IT graduate with hands-on experience in
                backend development, database architecture, and system
                troubleshooting. I like the part of the work that most people
                never see — the data model that holds up under real load, the
                API that returns the right thing the first time, the bug that
                takes patience rather than guesswork to find.
              </p>

              <p className="mt-8 text-base md:text-lg leading-relaxed-2 text-ink-muted max-w-prose-2">
                My background pairs full-stack development with a genuine
                aptitude for clear communication and problem-solving. I care
                about building things that hold up — systems that are
                maintainable, interfaces that feel calm, and code that the next
                person can read without effort.
              </p>

              <p className="mt-8 text-base md:text-lg leading-relaxed-2 text-ink-muted max-w-prose-2">
                Based in Davao City, Philippines. BS Information Technology,
                University of Mindanao (2022–2026).
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
