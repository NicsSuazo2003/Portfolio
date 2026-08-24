import Reveal from '@/components/Reveal';

import sideoutImage from '@/images/sideout.png';
import courtSideImage from '@/images/courtside.jpg';
import cslImage from '@/images/csl.jpg';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
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
    image: cslImage,
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
    link: 'https://sideoutplayground.vercel.app',
    image: sideoutImage,
  },
  {
    title: 'Court Side Playground',
    description:
      'A pickleball court booking and management system for handling court reservations, scheduling, and availability.',
    tech: ['React', 'TypeScript', 'C# / ASP.NET', 'PostgreSQL'],
    link: 'https://pickleball-court-system-hazel.vercel.app/',
    image: courtSideImage,
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 md:py-36 border-t border-ink/10"
    >
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">

          {/* Section Label */}
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">
              04 — Selected Work
            </Reveal>
          </div>

          {/* Projects */}
          <div className="md:col-span-8">
            <div className="divide-y divide-ink/10 border-t border-ink/10">
              {projects.map((p, i) => (
                <Reveal
                  key={p.title}
                  as="article"
                  delay={i * 100}
                >
                  <div className="group py-8 md:py-10">

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

                      {/* Image */}
                      <div className="md:col-span-5">
                        {p.image ? (
                          p.link ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block overflow-hidden border border-ink/10 bg-ink/5"
                            >
                              <img
                                src={p.image}
                                alt={`${p.title} preview`}
                                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                              />
                            </a>
                          ) : (
                            <div className="overflow-hidden border border-ink/10 bg-ink/5">
                              <img
                                src={p.image}
                                alt={`${p.title} preview`}
                                className="w-full aspect-video object-cover"
                              />
                            </div>
                          )
                        ) : (
                          <div className="w-full aspect-video border border-dashed border-ink/20 bg-ink/5 flex items-center justify-center">
                            <span className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint">
                              Image Placeholder
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Project Information */}
                      <div className="md:col-span-7">

                        <div className="flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between md:gap-6">

                          {/* Project Title */}
                          {p.link ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-serif text-2xl md:text-3xl text-ink tracking-tight-2 transition-colors duration-500 hover:text-accent underline decoration-ink/20 underline-offset-4"
                            >
                              {p.title}
                            </a>
                          ) : (
                            <h3 className="font-serif text-2xl md:text-3xl text-ink tracking-tight-2 transition-colors duration-500 group-hover:text-accent">
                              {p.title}
                            </h3>
                          )}

                          {/* Project Number */}
                          <span className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-base md:text-lg leading-relaxed-2 text-ink-muted max-w-prose-2">
                          {p.description}
                        </p>

                        {/* Technologies */}
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