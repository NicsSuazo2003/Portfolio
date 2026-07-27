import Reveal from '@/components/Reveal';

const groups = [
  {
    label: 'Languages & Frameworks',
    items: ['C#', 'ASP.NET', 'VB.NET', 'React', 'TypeScript', 'Flutter'],
  },
  {
    label: 'Databases & Cloud',
    items: ['MySQL', 'SQL Server', 'PostgreSQL', 'Firebase'],
  },
  {
    label: 'Hosting & Deployment',
    items: ['Render', 'Vercel', 'Supabase'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36 border-t border-ink/10">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">
              02 — Skills
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-12">
              {groups.map((group, gi) => (
                <Reveal key={group.label} as="div" delay={gi * 120}>
                  <div className="hairline mb-5" />
                  <p className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint mb-4">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-sm text-ink-soft"
                      >
                        {item}
                      </span>
                    ))}
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
