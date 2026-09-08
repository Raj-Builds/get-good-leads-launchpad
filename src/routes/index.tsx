import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Filter,
  Megaphone,
  MousePointerClick,
  Search,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { CTASection } from "@/components/site/CTASection";
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/site/contact-info";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get Good Leads — Lead Generation Agency | More Leads. Better Business." },
      {
        name: "description",
        content:
          "We build predictable lead engines with paid ads, SEO, landing pages and CRO — so your sales team talks to buyers, not browsers.",
      },
      { property: "og:title", content: "Get Good Leads — More Leads. Better Business." },
      {
        property: "og:description",
        content: "Performance marketing that delivers qualified, sales-ready leads.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Target,
    title: "Paid Ads That Pay",
    body: "Google, Meta and LinkedIn campaigns engineered around cost-per-qualified-lead, not vanity clicks.",
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    body: "Rank for the searches that carry buying intent, and own the map pack in your service areas.",
  },
  {
    icon: Filter,
    title: "Funnels & Landing Pages",
    body: "Fast, focused pages built to convert cold traffic into booked calls and filled forms.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimisation",
    body: "Continuous testing on offers, forms and follow-up so every rupee of spend works harder.",
  },
  {
    icon: Megaphone,
    title: "Creative & Copy",
    body: "Scroll-stopping ad creative and messaging built on real customer language.",
  },
  {
    icon: BarChart3,
    title: "Tracking & Reporting",
    body: "Clean attribution and one dashboard that shows leads, cost per lead and pipeline value.",
  },
];

const steps = [
  { n: "01", t: "Audit", d: "We map your funnel, traffic, offers and tracking to find the leaks." },
  { n: "02", t: "Build", d: "Campaigns, landing pages and follow-up assembled around one offer." },
  { n: "03", t: "Launch", d: "Controlled spend, tight feedback loops, weekly optimisation." },
  { n: "04", t: "Scale", d: "Double down on what converts and expand into new channels." },
];

const testimonials = [
  {
    quote:
      "Within a quarter our cost per qualified enquiry dropped sharply and the sales team stopped chasing tyre-kickers.",
    name: "Sample Client A",
    role: "Founder, Home Services (illustrative)",
  },
  {
    quote:
      "The reporting finally made sense. We could see exactly which campaign produced which booked call.",
    name: "Sample Client B",
    role: "Marketing Head, B2B SaaS (illustrative)",
  },
  {
    quote:
      "They rebuilt our landing page and the same ad spend started producing noticeably more form fills.",
    name: "Sample Client C",
    role: "Director, Education (illustrative)",
  },
];

function Home() {
  return (
    <>
      <section className="glow-grid relative overflow-hidden">
        <div aria-hidden="true" className="orb -top-24 -left-24 size-[26rem] opacity-60" />
        <div
          aria-hidden="true"
          className="orb top-40 -right-32 size-[30rem] opacity-40 [animation-delay:-6s]"
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-28 lg:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                  Performance marketing studio
                </span>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-6 text-4xl font-bold text-balance sm:text-6xl lg:text-7xl">
                  More leads.{" "}
                  <span className="bg-gradient-to-r from-primary to-[oklch(0.72_0.17_250)] bg-clip-text text-transparent">
                    Better business.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  We build lead engines for ambitious brands — paid ads, search, funnels and
                  conversion work that fill your calendar with people ready to buy.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.04]"
                  >
                    Get a free growth audit
                  </Link>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                  {[
                    ["3.4x", "Avg. return target"],
                    ["-38%", "Cost per lead goal"],
                    ["14 days", "To first campaign"],
                  ].map(([k, v]) => (
                    <div key={v}>
                      <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">
                        <CountUp value={String(k)} />
                      </dt>
                      <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-muted-foreground">
                  Illustrative sample figures shown for demonstration only.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200} className="lg:justify-self-end">
              <div className="card-surface float-soft w-full rounded-3xl p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Live pipeline snapshot
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">Sample data placeholder</p>
                <div className="mt-6 space-y-4">
                  {[
                    ["Google Search", 82],
                    ["Meta Ads", 64],
                    ["Local SEO", 47],
                    ["Referral funnel", 29],
                  ].map(([label, val]) => (
                    <div key={label as string}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold">{val} leads</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary transition-[width] duration-1000"
                          style={{ width: `${val as number}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-[var(--color-ink)] py-5">
        <div className="marquee-track flex w-max gap-12 pr-12">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-12" aria-hidden={dup === 1}>
              {[
                "Home Services",
                "Real Estate",
                "Healthcare",
                "B2B SaaS",
                "Education",
                "Finance",
                "D2C Retail",
              ].map((x) => (
                <span
                  key={x}
                  className="font-display text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase"
                >
                  {x}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
            Everything you need to turn attention into revenue
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 70}>
              <div className="card-surface card-hover group h-full rounded-2xl p-7">
                <span className="icon-chip inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <Link
            to="/services"
            className="mt-10 inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Explore all services
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-border bg-[var(--color-ink)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">How we work</h2>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80}>
                <div className="card-hover h-full rounded-2xl border border-border p-7">
                  <span className="font-display text-4xl font-bold text-primary/40">{s.n}</span>
                  <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">What clients say</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sample testimonials — illustrative placeholders, not real client statements.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 80}>
              <figure className="card-surface card-hover group h-full rounded-2xl p-7">
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, k) => (
                    <Star
                      key={k}
                      className="size-4 fill-current transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${k * 45}ms` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
