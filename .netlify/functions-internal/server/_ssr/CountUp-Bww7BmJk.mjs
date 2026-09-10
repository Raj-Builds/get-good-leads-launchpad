import { r as __toESM } from "../_runtime.mjs";
import { a as cn } from "./contact-info-C359xw_U.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CountUp-Bww7BmJk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Animates the numeric part of a value string (e.g. "+142%", "3.4x", "14 days")
* from 0 whenever it enters the viewport, resetting when it leaves.
* Prefixes and suffixes are preserved exactly.
*/
function CountUp({ value, className, duration = 1400 }) {
	const ref = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(value);
	const rafRef = (0, import_react.useRef)(null);
	const match = value.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/s);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || !match) return;
		const prefix = match[1] ?? "";
		const numRaw = (match[2] ?? "0").replace(/,/g, "");
		const suffix = match[3] ?? "";
		const target = parseFloat(numRaw);
		const decimals = numRaw.includes(".") ? numRaw.split(".")[1]?.length ?? 0 : 0;
		const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const format = (n) => `${prefix}${n.toFixed(decimals)}${suffix}`;
		const stop = () => {
			if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
			rafRef.current = null;
		};
		const run = () => {
			if (reduced) {
				setDisplay(format(target));
				return;
			}
			stop();
			const start = performance.now();
			const tick = (now) => {
				const p = Math.min(1, (now - start) / duration);
				const eased = 1 - Math.pow(1 - p, 3);
				setDisplay(format(target * eased));
				if (p < 1) rafRef.current = requestAnimationFrame(tick);
			};
			rafRef.current = requestAnimationFrame(tick);
		};
		if (typeof IntersectionObserver === "undefined") {
			setDisplay(format(target));
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) run();
			else {
				stop();
				setDisplay(format(0));
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => {
			stop();
			io.disconnect();
		};
	}, [value, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: cn(className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: display
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: value
		})]
	});
}
//#endregion
export { CountUp as t };
