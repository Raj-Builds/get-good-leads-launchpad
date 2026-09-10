import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-gsJagwJA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-DuCklfqH.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "glow-grid border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.25em] text-primary uppercase",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl text-4xl font-bold text-balance sm:text-5xl lg:text-6xl",
					children: title
				}),
				children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground",
					children
				}) : null
			] })
		})
	});
}
//#endregion
export { PageHero as t };
