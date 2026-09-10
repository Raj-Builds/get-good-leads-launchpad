import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-gsJagwJA.mjs";
import { t as PageHero } from "./PageHero-DuCklfqH.mjs";
import { _ as Compass, b as ChartLine, h as HeartHandshake, o as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as CTASection } from "./CTASection-ONaMtBWh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Bldf5WF4.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		icon: ChartLine,
		t: "Revenue over vanity",
		d: "Impressions don't pay salaries. We report on leads, cost per lead and closed business."
	},
	{
		icon: ShieldCheck,
		t: "Radical transparency",
		d: "You own every ad account, pixel and asset. Nothing is locked behind our login."
	},
	{
		icon: Compass,
		t: "Strategy before spend",
		d: "We refuse to launch until the offer, tracking and follow-up can carry the traffic."
	},
	{
		icon: HeartHandshake,
		t: "Partner, not vendor",
		d: "Small client roster, senior people on your account, direct access on WhatsApp."
	}
];
var team = [
	{
		n: "Strategy",
		d: "Positioning, offers and channel mix."
	},
	{
		n: "Media Buying",
		d: "Daily campaign management and testing."
	},
	{
		n: "Design & Copy",
		d: "Ads, pages and creative that convert."
	},
	{
		n: "Analytics",
		d: "Tracking, attribution and reporting."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "A small team that treats your budget like our own",
			children: "Get Good Leads was built by marketers who got tired of dashboards that looked great while the phone stayed silent. We exist to change that number."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold sm:text-4xl",
					children: "Our story"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-4 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We started with a simple observation: most businesses don't have a traffic problem, they have a conversion and follow-up problem. Spend more, and you simply buy more of the same disappointment." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "So we work in the other direction. First the offer, then the page, then the tracking, and only then the media. It's slower in week one and dramatically cheaper by month three." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today we partner with a deliberately small number of brands across home services, healthcare, education, real estate and B2B — the categories where one good lead can change a quarter." })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-5 sm:grid-cols-2",
						children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "card-surface card-hover group rounded-2xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-semibold",
									children: v.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: v.d
								})
							]
						}, v.t))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-[var(--color-ink)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold sm:text-4xl",
					children: "How the team is built"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: team.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-hover h-full rounded-2xl border border-border p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: t.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t.d
							})]
						})
					}, t.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Let's see if we're a fit",
			body: "A short call is usually enough to know. If we're not the right partner, we'll say so and point you somewhere better."
		})
	] });
}
//#endregion
export { About as component };
