import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results & Case Studies — Get Good Leads" },
      {
        name: "description",
        content:
          "Sample case studies and illustrative performance snapshots showing how Get Good Leads structures lead generation campaigns.",
      },
      { property: "og:title", content: "Results | Get Good Leads" },
      {
        property: "og:description",
        content: "Illustrative sample case studies from our lead generation playbook.",
      },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: Results,
});

const cases = [
  {
    sector: "Home Services",
    title: "From scattered spend to a booked calendar",
    problem: "Ad budget spread across five campaigns with no call tracking.",
    action: "Consolidated into one intent-led search campaign plus a speed-optimised landing page.",
    metrics: [
      ["+142%", "Qualified enquiries"],
      ["-41%", "Cost per lead"],
      ["3.1x", "Return on ad spend"],
    ],
  },
  {
    sector: "B2B SaaS",
    title: "Demo requests that sales actually wanted",
    problem: "High form volume, low qualification, long sales cycles.",
    action: "Added qualification fields, lead scoring and an ICP-matched LinkedIn programme.",
    metrics: [
      ["+68%", "SQL rate"],
      ["-27%", "Cost per demo"],
      ["2.4x", "Pipeline value"],
    ],
  },
  {
    sector: "Healthcare",
    title: "Owning the local map pack",
    problem: "Invisible in local search across three clinic locations.",
    action: "Location page architecture, review engine and Google Business Profile overhaul.",
    metrics: [
      ["+215%", "Map views"],
      ["+96%", "Call clicks"],
      ["#1–3", "Local rankings"],
    ],
  },
];

function Results() {
  return (
    <>
      <PageHero eyebrow="Results" title="What a well-built lead engine looks like">
        The case studies below are illustrative sample placeholders created to demonstrate our
        reporting format and approach. They are not records of actual client campaigns.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <p
            role="note"
            className="rounded-2xl border border-primary/40 bg-primary/10 px-5 py-4 text-sm text-foreground"
          >
            <strong className="font-semibold">Please note:</strong> every figure, chart, case study
            and quote on this page is an illustrative sample placeholder for demonstration purposes
            only.
          </p>
        </Reveal>

        <ul className="mt-12 space-y-6">
          {cases.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90}>
              <article className="card-surface card-hover rounded-3xl p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                      {c.sector} · sample
                    </p>
                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{c.title}</h2>
                    <dl className="mt-6 space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold">The problem</dt>
                        <dd className="mt-1 text-muted-foreground">{c.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">What we did</dt>
                        <dd className="mt-1 text-muted-foreground">{c.action}</dd>
                      </div>
                    </dl>
                  </div>
                  <ul className="grid grid-cols-3 gap-4 self-start lg:grid-cols-1">
                    {c.metrics.map(([k, v]) => (
                      <li key={v} className="card-hover rounded-2xl border border-border p-4">
                        <p className="font-display text-2xl font-bold text-primary">
                          <CountUp value={k} />
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{v}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-[var(--color-ink)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="flex items-center gap-3 text-3xl font-bold sm:text-4xl">
              <TrendingUp className="size-7 text-primary" aria-hidden="true" />
              Typical 90-day trajectory
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Illustrative sample projection, not a guarantee of performance.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              ["Days 1–30", "Audit, rebuild tracking, launch first campaign and landing page."],
              ["Days 31–60", "Creative and offer testing; cost per lead begins to fall."],
              ["Days 61–90", "Scale winners, add a second channel, formalise follow-up."],
            ].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 80}>
                <div className="card-hover h-full rounded-2xl border border-border p-7">
                  <h3 className="font-semibold text-primary">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Want results like these on your own numbers?" body="We'll audit your funnel and show you, line by line, where the next set of leads comes from." />
    </>
  );
}
