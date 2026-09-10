import { r as __toESM } from "../_runtime.mjs";
import { a as cn } from "./contact-info-C359xw_U.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-gsJagwJA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Scroll reveal that is visible by default (server render and pre-hydration),
* so content is never stuck invisible if JS is slow or unavailable.
* After mount, elements still below the fold are armed and fade in on scroll.
*/
function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [hidden, setHidden] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (el.getBoundingClientRect().top < window.innerHeight * .92) return;
		setHidden(true);
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setHidden(false);
				io.disconnect();
			}
		}, {
			threshold: .1,
			rootMargin: "0px 0px -5% 0px"
		});
		io.observe(el);
		const fallback = window.setTimeout(() => {
			setHidden(false);
			io.disconnect();
		}, 4e3);
		return () => {
			window.clearTimeout(fallback);
			io.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: {
			opacity: hidden ? 0 : 1,
			transform: hidden ? "translateY(24px)" : "none",
			transition: `opacity .7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .7s cubic-bezier(.22,1,.36,1) ${delay}ms`
		},
		className: cn(className),
		children
	});
}
//#endregion
export { Reveal as t };
