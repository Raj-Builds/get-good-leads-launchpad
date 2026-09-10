import { i as WHATSAPP_URL, n as PHONE_DISPLAY, r as PHONE_TEL } from "./contact-info-C359xw_U.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-gsJagwJA.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, u as MessageCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-ONaMtBWh.js
var import_jsx_runtime = require_jsx_runtime();
function CTASection({ title = "Ready for a pipeline you can predict?", body = "Book a free 30-minute growth audit. We map your funnel, spot the leaks, and show you where the next 100 qualified leads come from." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "card-surface relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-primary/30 blur-3xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "orb -right-16 -bottom-24 size-72 opacity-50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold text-balance sm:text-4xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
							children: body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "cta-glow shimmer-hover rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.04]",
									children: "Get my free audit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE_TEL}`,
									className: "shimmer-hover inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-4 shrink-0",
										"aria-hidden": "true"
									}), PHONE_DISPLAY]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "shimmer-hover inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "size-4 shrink-0 text-emerald-400",
										"aria-hidden": "true"
									}), "WhatsApp"]
								})
							]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { CTASection as t };
