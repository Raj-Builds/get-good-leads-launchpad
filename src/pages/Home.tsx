import { Link } from "react-router-dom";
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

export default function HomePage() {
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
                    className="cta-glow shimmer-hover rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.04]"
                  >
                    Get a free growth audit
                  </Link>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="shimmer-hover rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
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
                    <div key={v} className="group transition-transform duration-300 hover:-translate-y-1">
                      <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">
                        <CountUp value={String(k)} />
                      </dt>
                      <dd className="mt-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-muted-foreground">
                  Illustrative sample figures shown for demonstration only.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200} className="lg:justify-self-end">
              <div className="card-surface float-soft shimmer-hover w-full rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(37,99,255,0.25)]">
                <p className="status-beacon text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
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
                    <div key={label as string} className="group">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
                        <span className="font-semibold text-primary">{val} leads</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.72_0.17_250)] transition-[width] duration-1000 group-hover:brightness-125"
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
                  className="font-display text-sm font-semibold tracking-[0.25em] text-muted-foreground transition-colors duration-300 hover:text-primary uppercase"
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
              <div className="card-surface card-hover shimmer-hover group h-full rounded-2xl p-7">
                <span className="icon-chip inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-inner">
                  <s.icon className="size-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <Link
            to="/services"
            className="shimmer-hover mt-10 inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-secondary hover:scale-[1.03]"
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
                <div className="card-hover shimmer-hover group h-full rounded-2xl border border-border p-7">
                  <span className="font-display text-4xl font-bold text-primary/40 transition-colors duration-300 group-hover:text-primary">{s.n}</span>
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
              <figure className="card-surface card-hover shimmer-hover group h-full rounded-2xl p-7">
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, k) => (
                    <Star
                      key={k}
                      className="size-4 fill-current transition-transform duration-300 group-hover:scale-125"
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
