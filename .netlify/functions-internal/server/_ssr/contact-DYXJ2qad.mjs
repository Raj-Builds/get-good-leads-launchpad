import { r as __toESM } from "../_runtime.mjs";
import { i as WHATSAPP_URL, n as PHONE_DISPLAY, r as PHONE_TEL, t as EMAIL } from "./contact-info-C359xw_U.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-gsJagwJA.mjs";
import { t as PageHero } from "./PageHero-DuCklfqH.mjs";
import { c as Phone, m as Mail, p as MapPin, u as MessageCircle, v as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DYXJ2qad.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Let's talk about your next 100 leads",
		children: "Tell us where you are today and what growth would look like. We reply within one business day — usually much sooner."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "card-surface rounded-3xl p-8",
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "Request your free growth audit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Demonstration form — submissions are not yet delivered anywhere. Please call or WhatsApp us for an immediate response."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "name",
								label: "Full name",
								autoComplete: "name",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "company",
								label: "Company",
								autoComplete: "organization"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "email",
								label: "Email",
								type: "email",
								autoComplete: "email",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "phone",
								label: "Phone",
								type: "tel",
								autoComplete: "tel",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "budget",
									className: "block text-sm font-medium",
									children: "Monthly marketing budget"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "budget",
									name: "budget",
									className: "mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-sm",
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select a range"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Under ₹50,000" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹50,000 – ₹2,00,000" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹2,00,000 – ₹5,00,000" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹5,00,000+" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "message",
									className: "block text-sm font-medium",
									children: "What are you trying to grow?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									rows: 4,
									className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground",
									placeholder: "A little about your business, offer and current results…"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-8 min-h-12 w-full rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] sm:w-auto sm:px-10",
						children: "Send my request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"aria-live": "polite",
						className: "mt-4 text-sm text-primary",
						children: sent ? "Thanks! This demo form doesn't send messages yet — please call or WhatsApp us and we'll pick it up right away." : ""
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "card-surface card-hover group flex items-center gap-4 rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold",
									children: "Call us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted-foreground",
									children: PHONE_DISPLAY
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "card-surface card-hover group flex items-center gap-4 rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold",
									children: "WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted-foreground",
									children: "Fastest reply — chat now"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${EMAIL}`,
							className: "card-surface card-hover group flex items-center gap-4 rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm text-muted-foreground",
									children: EMAIL
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-hover rounded-2xl border border-border p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), "Mon–Sat, 10:00 – 19:00 IST"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), "Serving clients across India, remotely"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs text-muted-foreground",
									children: "Sample hours and location placeholder — send us your real details and we'll update them."
								})
							]
						})
					]
				})
			})]
		})
	})] });
}
function Field({ id, label, type = "text", required, autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "block text-sm font-medium",
		children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary",
			children: " *"
		}) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id,
		name: id,
		type,
		required,
		autoComplete,
		className: "mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground"
	})] });
}
//#endregion
export { Contact as component };
