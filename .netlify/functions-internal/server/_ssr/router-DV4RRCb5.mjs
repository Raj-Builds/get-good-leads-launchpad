import { r as __toESM } from "../_runtime.mjs";
import { a as cn, i as WHATSAPP_URL, n as PHONE_DISPLAY, r as PHONE_TEL, t as EMAIL } from "./contact-info-C359xw_U.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, d as Menu, m as Mail, t as X, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DV4RRCb5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-PbIuj2vR.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var logo_default = "/assets/logo-B5-5NFAp.png";
function Logo({ className, height = 46 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		"aria-label": "Get Good Leads — home",
		className: cn("group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white px-3.5 py-1.5 shadow-[0_4px_20px_-4px_rgba(37,99,255,0.45)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(37,99,255,0.75)]", className),
		style: { height },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo_default,
			alt: "Get Good Leads — More Leads. Better Business.",
			style: { height: Math.max(24, height - 12) },
			className: "w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
		})
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/results",
		label: "Results"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 w-full transition-colors duration-300", scrolled ? "border-b border-border bg-background/85 shadow-[0_8px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:px-8 lg:py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-w-0 items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { height: 48 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Main",
						className: "hidden items-center gap-1 lg:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							activeOptions: { exact: l.to === "/" },
							activeProps: { className: "text-foreground bg-secondary" },
							className: "nav-underline rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4 shrink-0",
							"aria-hidden": "true"
						}), PHONE_DISPLAY]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "cta-glow hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground sm:inline-flex",
						children: "Get free audit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							"aria-hidden": "true"
						})
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Mobile",
			className: "animate-in fade-in slide-in-from-top-2 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-xl lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-1",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: l.to === "/" },
					activeProps: { className: "bg-secondary text-foreground" },
					className: "block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground",
					children: l.label
				}) }, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "mt-2 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:+917985591914`,
						className: "flex-1 rounded-xl border border-border px-4 py-3 text-center text-sm font-medium",
						children: "Call us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "flex-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground",
						children: "Get free audit"
					})]
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-[var(--color-ink)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:px-8 lg:grid-cols-[1.4fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { height: 44 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: "A performance marketing studio built for one outcome: qualified leads that turn into revenue. More leads. Better business."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold tracking-wide text-foreground uppercase",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [
							{
								to: "/",
								label: "Home"
							},
							{
								to: "/services",
								label: "Services"
							},
							{
								to: "/about",
								label: "About Us"
							},
							{
								to: "/results",
								label: "Results"
							},
							{
								to: "/contact",
								label: "Contact"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "transition-colors hover:text-foreground",
							children: l.label
						}) }, l.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold tracking-wide text-foreground uppercase",
					children: "Talk now"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "inline-flex items-center gap-2 transition-colors hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4 shrink-0",
								"aria-hidden": "true"
							}), PHONE_DISPLAY]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 transition-colors hover:text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "size-4 shrink-0 text-emerald-400",
									"aria-hidden": "true"
								}),
								"WhatsApp (",
								PHONE_DISPLAY,
								")"
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${EMAIL}`,
							className: "inline-flex items-center gap-2 transition-colors hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-4 shrink-0",
								"aria-hidden": "true"
							}), EMAIL]
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Get Good Leads. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Results, case studies and testimonials shown on this site are illustrative sample placeholders." })]
			})
		})]
	});
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": `Chat with Get Good Leads on WhatsApp at ${PHONE_DISPLAY}`,
		className: "group glow-pulse fixed right-5 bottom-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-[0_12px_35px_-8px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-105 hover:bg-emerald-600 focus-visible:scale-105",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "ping-ring absolute inset-0 rounded-full border border-emerald-400/60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "relative size-6 shrink-0 fill-current",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hidden font-semibold text-xs tracking-wide sm:inline-block",
				children: [
					"WhatsApp (",
					PHONE_DISPLAY,
					")"
				]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Get Good Leads — More Leads. Better Business." },
			{
				name: "description",
				content: "Get Good Leads is a performance marketing agency generating qualified, sales-ready leads through paid ads, SEO, funnels and CRO."
			},
			{
				name: "author",
				content: "Get Good Leads"
			},
			{
				property: "og:site_name",
				content: "Get Good Leads"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Get Good Leads",
				slogan: "More Leads. Better Business.",
				telephone: "+91-79855-91914",
				areaServed: "IN"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "page-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, pathname)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-CfpkpfK3.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Get Good Leads — Lead Generation Agency | More Leads. Better Business." },
			{
				name: "description",
				content: "We build predictable lead engines with paid ads, SEO, landing pages and CRO — so your sales team talks to buyers, not browsers."
			},
			{
				property: "og:title",
				content: "Get Good Leads — More Leads. Better Business."
			},
			{
				property: "og:description",
				content: "Performance marketing that delivers qualified, sales-ready leads."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-Bldf5WF4.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Us — The Team Behind Get Good Leads" },
			{
				name: "description",
				content: "Get Good Leads is a lead generation team of strategists, media buyers and conversion specialists focused on revenue, not vanity metrics."
			},
			{
				property: "og:title",
				content: "About Us | Get Good Leads"
			},
			{
				property: "og:description",
				content: "Strategists, media buyers and CRO specialists obsessed with qualified leads."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-DYXJ2qad.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Get Good Leads — Book Your Free Growth Audit" },
			{
				name: "description",
				content: "Talk to Get Good Leads about lead generation. Call +91 79855 91914, message us on WhatsApp, or request a free growth audit."
			},
			{
				property: "og:title",
				content: "Contact | Get Good Leads"
			},
			{
				property: "og:description",
				content: "Call, WhatsApp or request your free growth audit."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./results-DCwL8r2b.mjs");
var Route$1 = createFileRoute("/results")({
	head: () => ({
		meta: [
			{ title: "Results & Case Studies — Get Good Leads" },
			{
				name: "description",
				content: "Sample case studies and illustrative performance snapshots showing how Get Good Leads structures lead generation campaigns."
			},
			{
				property: "og:title",
				content: "Results | Get Good Leads"
			},
			{
				property: "og:description",
				content: "Illustrative sample case studies from our lead generation playbook."
			},
			{
				property: "og:url",
				content: "/results"
			}
		],
		links: [{
			rel: "canonical",
			href: "/results"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-CdMz-ShI.mjs");
var Route = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Services — Paid Ads, SEO, Funnels & CRO | Get Good Leads" },
			{
				name: "description",
				content: "Lead generation services from Get Good Leads: Google & Meta ads, SEO, landing page funnels, conversion optimisation, creative and reporting."
			},
			{
				property: "og:title",
				content: "Services | Get Good Leads"
			},
			{
				property: "og:description",
				content: "Paid ads, SEO, funnels, CRO and reporting built around qualified leads."
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$5
	}),
	ResultsRoute: Route$1.update({
		id: "/results",
		path: "/results",
		getParentRoute: () => Route$5
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
