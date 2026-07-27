import Reveal from '@/components/Reveal';

interface Role {
  title: string;
  org: string;
  period: string;
  detail: string;
}

const roles: Role[] = [
  {
    title: 'Freelance Web Developer',
    org: 'Sideout Playground',
    period: '2026',
    detail:
      'Built a pickleball court booking system end to end — a React and TypeScript frontend, a C# / ASP.NET backend, and a PostgreSQL database, deployed across Render, Vercel, and Supabase.',
  },
  {
    title: 'Backend Developer Intern',
    org: 'Aquila Softwares Corporation',
    period: '',
    detail:
      'Developed backend features in C# / ASP.NET, integrated React components with internal APIs, and contributed to testing and debugging across the stack.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36 border-t border-ink/10">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">
              03 — Experience
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="relative">
              {/* Timeline vertical line */}
              <span
                className="absolute left-[5px] top-2 bottom-2 w-px bg-ink/15 origin-top animate-line-grow"
                aria-hidden
              />
              <div className="space-y-14">
                {roles.map((role, i) => (
                  <Reveal key={role.title} as="div" delay={i * 140}>
                    <div className="relative pl-9">
                      {/* Dot */}
                      <span
                        className="absolute left-0 top-[10px] h-[11px] w-[11px] rounded-full border border-ink/30 bg-cream-50"
                        aria-hidden
                      />
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-3">
                        <h3 className="font-serif text-xl md:text-2xl text-ink">
                          {role.title}
                        </h3>
                        <span className="font-mono text-[12px] text-ink-faint">
                          {role.org}
                          {role.period ? ` · ${role.period}` : ''}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed-2 text-ink-muted max-w-prose-2">
                        {role.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
