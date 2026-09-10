import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

const detail = [
  {
    title: "Paid Advertising",
    lead: "Google Search, Performance Max, Meta and LinkedIn campaigns run against a cost-per-qualified-lead target.",
    points: [
      "Intent-first keyword and audience architecture",
      "Offer testing and creative refresh cycles",
      "Negative keyword and placement hygiene",
      "Budget pacing tied to pipeline, not impressions",
    ],
  },
  {
    title: "SEO & Local Search",
    lead: "Compounding organic demand from the searches your buyers actually make.",
    points: [
      "Technical fixes, speed and crawl health",
      "Service and location page architecture",
      "Content built for buying-stage queries",
      "Google Business Profile and review engine",
    ],
  },
  {
    title: "Funnels & Landing Pages",
    lead: "Fast pages with one job: convert the click into a conversation.",
    points: [
      "Message-match to each ad group",
      "Short, smart forms and instant callbacks",
      "WhatsApp and call tracking built in",
      "A/B tested layouts and offers",
    ],
  },
  {
    title: "Conversion & Lifecycle",
    lead: "Most growth hides between the lead and the sale. We close that gap.",
    points: [
      "Lead scoring and routing",
      "Email and WhatsApp nurture sequences",
      "Sales follow-up scripts and SLAs",
      "Win/loss feedback into campaigns",
    ],
  },
];

const plans = [
  {
    name: "Launch",
    price: "Starter",
    for: "First serious lead engine",
    items: ["1 paid channel", "1 landing page", "Tracking setup", "Monthly reporting"],
  },
  {
    name: "Growth",
    price: "Most popular",
    for: "Scaling teams",
    items: ["2–3 channels", "Funnel + CRO tests", "Creative refresh", "Bi-weekly reviews"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    for: "Multi-location & national",
    items: ["Full-funnel programme", "Dedicated strategist", "Advanced attribution", "Weekly war room"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Lead generation, engineered end to end">
        Every engagement is built backwards from one number: the cost of a lead your sales team is
        happy to call.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {detail.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <article className="card-surface card-hover group h-full rounded-3xl p-8">
                <h2 className="text-2xl font-bold">{d.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.lead}</p>
                <ul className="mt-6 space-y-3">
                  {d.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-[var(--color-ink)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Ways to work together</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Indicative packages — final scope and pricing are quoted after your audit.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 80}>
                <div
                  className={`h-full rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                    p.featured ? "border-primary bg-primary/10" : "border-border"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    {p.price}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Not sure which service you need?" body="Tell us your goal and we'll tell you the shortest path to it — free, no obligation." />
    </>
  );
}
