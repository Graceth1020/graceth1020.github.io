import { ArrowUpRight, Github } from "lucide-react";
import { projects, writing } from "@/config/projects";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "GitHub", href: "https://github.com/Graceth1020", external: true },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[880px] items-center justify-between px-6 py-5">
          <a href="#top" className="font-mono text-sm tracking-tight hover:text-accent transition-colors">
            graceth1020
          </a>
          <nav className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[880px] px-6">
        {/* Hero */}
        <section className="pt-24 pb-24 md:pt-32 md:pb-32">
          <p className="label-meta mb-8">— Personal Site</p>
          <h1 className="font-serif text-6xl md:text-8xl leading-[1.02] tracking-tight">
            Hi, I&apos;m Grace.
          </h1>
          <p className="mt-8 max-w-[55ch] text-lg text-muted-foreground leading-relaxed">
            I build small, thoughtful things on the web and write about what I learn along the way.
            This is a quiet corner for my projects, notes, and ongoing experiments.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a
              href="https://github.com/Graceth1020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-foreground/30 pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-1.5 border-b border-foreground/30 pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              Email <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-24">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Selected Work</h2>
            <span className="label-meta">01 / Work</span>
          </div>

          <ul>
            {projects.map((p) => (
              <li key={p.id} className="border-t border-border">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-8 md:py-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-2xl md:text-3xl tracking-tight transition-colors group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground max-w-[55ch]">{p.description}</p>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                        {p.tags.map((t) => (
                          <span key={t} className="label-meta">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <span className="label-meta">{p.year}</span>
                      <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                        →
                      </span>
                    </div>
                  </div>
                </a>
                <div className="pb-8 md:pb-10 -mt-4">
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    View source <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Writing */}
        <section id="writing" className="py-24">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Writing</h2>
            <span className="label-meta">02 / Notes</span>
          </div>

          <div className="border-t border-border">
            <a
              href={writing.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 md:py-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight transition-colors group-hover:text-accent">
                    {writing.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground max-w-[55ch]">{writing.description}</p>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                  <span className="label-meta">Blog</span>
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[880px] flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-8">
          <p className="text-xs text-muted-foreground">© 2025 Grace</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>Built with Lovable</span>
            <a
              href="https://github.com/Graceth1020"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
