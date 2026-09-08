import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="glow-grid border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {children ? (
            <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {children}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
