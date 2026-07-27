export default function Footer() {
  return (
    <footer className="py-10 border-t border-ink/10">
      <div className="container-edge flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint">
          Nicole Mendez Suazo — {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wide-3 text-ink-faint">
          <span className="text-accent">{'<'}</span> / <span className="text-accent">{'>'}</span> Built with care
        </p>
      </div>
    </footer>
  );
}
