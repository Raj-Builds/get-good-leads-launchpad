import { createFileRoute } from "@tanstack/react-router";
import { Compass, HeartHandshake, LineChart, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Team Behind Get Good Leads" },
      {
        name: "description",
        content:
          "Get Good Leads is a lead generation team of strategists, media buyers and conversion specialists focused on revenue, not vanity metrics.",
      },
      { property: "og:title", content: "About Us | Get Good Leads" },
      {
        property: "og:description",
        content: "Strategists, media buyers and CRO specialists obsessed with qualified leads.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: LineChart,
    t: "Revenue over vanity",
    d: "Impressions don't pay salaries. We report on leads, cost per lead and closed business.",
  },
  {
    icon: ShieldCheck,
    t: "Radical transparency",
    d: "You own every ad account, pixel and asset. Nothing is locked behind our login.",
  },
  {
    icon: Compass,
    t: "Strategy before spend",
    d: "We refuse to launch until the offer, tracking and follow-up can carry the traffic.",
  },
  {
    icon: HeartHandshake,
    t: "Partner, not vendor",
    d: "Small client roster, senior people on your account, direct access on WhatsApp.",
  },
];

const team = [
  { n: "Strategy", d: "Positioning, offers and channel mix." },
  { n: "Media Buying", d: "Daily campaign management and testing." },
  { n: "Design & Copy", d: "Ads, pages and creative that convert." },
  { n: "Analytics", d: "Tracking, attribution and reporting." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A small team that treats your budget like our own">
        Get Good Leads was built by marketers who got tired of dashboards that looked great while
        the phone stayed silent. We exist to change that number.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Our story</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                We started with a simple observation: most businesses don't have a traffic problem,
                they have a conversion and follow-up problem. Spend more, and you simply buy more of
                the same disappointment.
              </p>
              <p>
                So we work in the other direction. First the offer, then the page, then the
                tracking, and only then the media. It's slower in week one and dramatically cheaper
                by month three.
              </p>
              <p>
                Today we partner with a deliberately small number of brands across home services,
                healthcare, education, real estate and B2B — the categories where one good lead can
                change a quarter.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v.t} className="card-surface rounded-2xl p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <v.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-[var(--color-ink)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">How the team is built</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal as="li" key={t.n} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border p-7">
                  <h3 className="text-lg font-semibold">{t.n}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Let's see if we're a fit" body="A short call is usually enough to know. If we're not the right partner, we'll say so and point you somewhere better." />
    </>
  );
}
