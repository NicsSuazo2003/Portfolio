import Reveal from '@/components/Reveal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-40 border-t border-ink/10"
    >
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">
              06 — Contact
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal as="h2" delay={100} className="font-serif text-4xl md:text-6xl tracking-tight-2 text-ink leading-[1.05]">
              Let's talk
            </Reveal>

            <Reveal as="p" delay={220} className="mt-6 text-lg md:text-xl leading-relaxed-2 text-ink-muted max-w-prose-2">
              I'm open to full-stack and backend roles, freelance work, and
              collaborations. The easiest way to reach me is email — I usually
              reply within a day.
            </Reveal>

            <Reveal as="div" delay={340} className="mt-12 space-y-5">
              <div className="hairline mb-8" />
              <div className="flex flex-col sm:flex-row sm:gap-12 gap-5 flex-wrap">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint mb-1.5">
                    Email
                  </p>
                  <a
                    href="mailto:nicssuazo@gmail.com"
                    className="link-underline text-lg text-ink hover:text-accent transition-colors duration-300"
                  >
                    nicssuazo@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint mb-1.5">
                    Phone
                  </p>
                  <a
                    href="tel:+639071355012"
                    className="link-underline text-lg text-ink hover:text-accent transition-colors duration-300"
                  >
                    0907 135 5012
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint mb-1.5">
                    Location
                  </p>
                  <span className="text-lg text-ink-soft">
                    Davao City, Philippines
                  </span>
                </div>
              </div>

              <div className="hairline mt-10 mb-6" />

              <div className="flex gap-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline font-mono text-[12px] uppercase tracking-wide-3 text-ink-muted hover:text-ink transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline font-mono text-[12px] uppercase tracking-wide-3 text-ink-muted hover:text-ink transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
