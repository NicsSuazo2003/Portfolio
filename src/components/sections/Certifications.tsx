import Reveal from '@/components/Reveal';

const certs = [
  'IT Specialist — Cybersecurity',
  'IT Specialist — Network Security',
  'IT Specialist — HTML & CSS',
  'IT Specialist — Databases',
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-36 border-t border-ink/10">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">
              05 — Certifications
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal as="div" delay={120}>
              <ul className="space-y-4">
                {certs.map((c) => (
                  <li
                    key={c}
                    className="flex items-baseline gap-4 text-lg text-ink-soft"
                  >
                    <span className="font-mono text-[12px] text-accent">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-mono text-[12px] text-ink-faint">
                Pearson VUE / Certiport
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
