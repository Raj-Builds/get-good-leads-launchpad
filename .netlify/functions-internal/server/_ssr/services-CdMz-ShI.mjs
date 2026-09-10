import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-gsJagwJA.mjs";
import { t as PageHero } from "./PageHero-DuCklfqH.mjs";
import { y as Check } from "../_libs/lucide-react.mjs";
import { t as CTASection } from "./CTASection-ONaMtBWh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CdMz-ShI.js
var import_jsx_runtime = require_jsx_runtime();
var detail = [
	{
		title: "Paid Advertising",
		lead: "Google Search, Performance Max, Meta and LinkedIn campaigns run against a cost-per-qualified-lead target.",
		points: [
			"Intent-first keyword and audience architecture",
			"Offer testing and creative refresh cycles",
			"Negative keyword and placement hygiene",
			"Budget pacing tied to pipeline, not impressions"
		]
	},
	{
		title: "SEO & Local Search",
		lead: "Compounding organic demand from the searches your buyers actually make.",
		points: [
			"Technical fixes, speed and crawl health",
			"Service and location page architecture",
			"Content built for buying-stage queries",
			"Google Business Profile and review engine"
		]
	},
	{
		title: "Funnels & Landing Pages",
		lead: "Fast pages with one job: convert the click into a conversation.",
		points: [
			"Message-match to each ad group",
			"Short, smart forms and instant callbacks",
			"WhatsApp and call tracking built in",
			"A/B tested layouts and offers"
		]
	},
	{
		title: "Conversion & Lifecycle",
		lead: "Most growth hides between the lead and the sale. We close that gap.",
		points: [
			"Lead scoring and routing",
			"Email and WhatsApp nurture sequences",
			"Sales follow-up scripts and SLAs",
			"Win/loss feedback into campaigns"
		]
	}
];
var plans = [
	{
		name: "Launch",
		price: "Starter",
		for: "First serious lead engine",
		items: [
			"1 paid channel",
			"1 landing page",
			"Tracking setup",
			"Monthly reporting"
		]
	},
	{
		name: "Growth",
		price: "Most popular",
		for: "Scaling teams",
		items: [
			"2–3 channels",
			"Funnel + CRO tests",
			"Creative refresh",
			"Bi-weekly reviews"
		],
		featured: true
	},
	{
		name: "Scale",
		price: "Custom",
		for: "Multi-location & national",
		items: [
			"Full-funnel programme",
			"Dedicated strategist",
			"Advanced attribution",
			"Weekly war room"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Lead generation, engineered end to end",
			children: "Every engagement is built backwards from one number: the cost of a lead your sales team is happy to call."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: detail.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-surface card-hover group h-full rounded-3xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold",
								children: d.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: d.lead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: d.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-0.5 size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
								}, p))
							})
						]
					})
				}, d.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-[var(--color-ink)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold sm:text-4xl",
					children: "Ways to work together"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Indicative packages — final scope and pricing are quoted after your audit."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-5 lg:grid-cols-3",
					children: plans.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `h-full rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-1.5 ${p.featured ? "border-primary bg-primary/10" : "border-border"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
									children: p.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl font-bold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: p.for
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3 text-sm",
									children: p.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "mt-0.5 size-4 shrink-0 text-primary",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
									}, it))
								})
							]
						})
					}, p.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Not sure which service you need?",
			body: "Tell us your goal and we'll tell you the shortest path to it — free, no obligation."
		})
	] });
}
//#endregion
export { Services as component };
