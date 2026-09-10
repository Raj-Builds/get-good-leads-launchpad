import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-gsJagwJA.mjs";
import { t as PageHero } from "./PageHero-DuCklfqH.mjs";
import { n as TrendingUp } from "../_libs/lucide-react.mjs";
import { t as CTASection } from "./CTASection-ONaMtBWh.mjs";
import { t as CountUp } from "./CountUp-Bww7BmJk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-DCwL8r2b.js
var import_jsx_runtime = require_jsx_runtime();
var cases = [
	{
		sector: "Home Services",
		title: "From scattered spend to a booked calendar",
		problem: "Ad budget spread across five campaigns with no call tracking.",
		action: "Consolidated into one intent-led search campaign plus a speed-optimised landing page.",
		metrics: [
			["+142%", "Qualified enquiries"],
			["-41%", "Cost per lead"],
			["3.1x", "Return on ad spend"]
		]
	},
	{
		sector: "B2B SaaS",
		title: "Demo requests that sales actually wanted",
		problem: "High form volume, low qualification, long sales cycles.",
		action: "Added qualification fields, lead scoring and an ICP-matched LinkedIn programme.",
		metrics: [
			["+68%", "SQL rate"],
			["-27%", "Cost per demo"],
			["2.4x", "Pipeline value"]
		]
	},
	{
		sector: "Healthcare",
		title: "Owning the local map pack",
		problem: "Invisible in local search across three clinic locations.",
		action: "Location page architecture, review engine and Google Business Profile overhaul.",
		metrics: [
			["+215%", "Map views"],
			["+96%", "Call clicks"],
			["#1–3", "Local rankings"]
		]
	}
];
function Results() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Results",
			title: "What a well-built lead engine looks like",
			children: "The case studies below are illustrative sample placeholders created to demonstrate our reporting format and approach. They are not records of actual client campaigns."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "note",
				className: "rounded-2xl border border-primary/40 bg-primary/10 px-5 py-4 text-sm text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-semibold",
					children: "Please note:"
				}), " every figure, chart, case study and quote on this page is an illustrative sample placeholder for demonstration purposes only."]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 space-y-6",
				children: cases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "card-surface card-hover rounded-3xl p-8 lg:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-[1.3fr_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
									children: [c.sector, " · sample"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-2xl font-bold sm:text-3xl",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-6 space-y-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-semibold",
										children: "The problem"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-muted-foreground",
										children: c.problem
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-semibold",
										children: "What we did"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-muted-foreground",
										children: c.action
									})] })]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid grid-cols-3 gap-4 self-start lg:grid-cols-1",
								children: c.metrics.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "card-hover rounded-2xl border border-border p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl font-bold text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { value: String(k) })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: v
									})]
								}, v))
							})]
						})
					})
				}, c.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-[var(--color-ink)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-3 text-3xl font-bold sm:text-4xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
						className: "size-7 text-primary",
						"aria-hidden": "true"
					}), "Typical 90-day trajectory"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Illustrative sample projection, not a guarantee of performance."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-5 sm:grid-cols-3",
					children: [
						["Days 1–30", "Audit, rebuild tracking, launch first campaign and landing page."],
						["Days 31–60", "Creative and offer testing; cost per lead begins to fall."],
						["Days 61–90", "Scale winners, add a second channel, formalise follow-up."]
					].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-hover h-full rounded-2xl border border-border p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-primary",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: d
							})]
						})
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Want results like these on your own numbers?",
			body: "We'll audit your funnel and show you, line by line, where the next set of leads comes from."
		})
	] });
}
//#endregion
export { Results as component };
