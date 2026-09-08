import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { PHONE_DISPLAY, PHONE_TEL } from "./contact-info";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/results", label: "Results" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:px-8 lg:py-4">
        <div className="flex min-w-0 items-center">
          <Logo height={34} />
        </div>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground bg-secondary" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:inline-flex"
          >
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.04] sm:inline-flex"
          >
            Get free audit
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="animate-in fade-in slide-in-from-top-2 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-secondary text-foreground" }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex-1 rounded-xl border border-border px-4 py-3 text-center text-sm font-medium"
              >
                Call us
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get free audit
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
