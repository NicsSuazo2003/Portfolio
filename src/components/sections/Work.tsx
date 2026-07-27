import Reveal from '@/components/Reveal';

interface Project {
  title: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'SmartiCare',
    description:
      'A cataract detection mobile app. Designed the Firebase Firestore data architecture and handled deployment through Firebase App Distribution and Hosting.',
    tech: ['Flutter', 'Firebase Firestore', 'Firebase Hosting'],
  },
  {
    title: 'CSL Hotel Booking & Management System',
    description:
      'A full hotel booking and management platform with booking APIs, Stripe payment integration, and real-time room availability.',
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Stripe'],
  },
  {
    title: 'Patrimonio Store',
    description:
      'A sales and inventory management system that automated stock tracking and sales reporting for a retail operation.',
    tech: ['VB.NET', 'SQL Server'],
  },
  {
    title: 'Sideout Playground',
    description:
      'A booking management system for a pickleball court business, covering reservations, scheduling, and availability.',
    tech: ['React', 'TypeScript', 'C# / ASP.NET', 'PostgreSQL'],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-36 border-t border-ink/10">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">
              04 — Selected Work
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="divide-y divide-ink/10 border-t border-ink/10">
              {projects.map((p, i) => (
                <Reveal key={p.title} as="article" delay={i * 100}>
                  <div className="group py-8 md:py-10 cursor-default">
                    <div className="flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between md:gap-6">
                      <h3 className="font-serif text-2xl md:text-3xl text-ink tracking-tight-2 transition-colors duration-500 group-hover:text-accent">
                        {p.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="mt-4 text-base md:text-lg leading-relaxed-2 text-ink-muted max-w-prose-2">
                      {p.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[12px] text-ink-faint"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
