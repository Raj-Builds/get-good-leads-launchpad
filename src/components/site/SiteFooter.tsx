import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "./contact-info";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[var(--color-ink)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo height={44} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A performance marketing studio built for one outcome: qualified leads that turn into
            revenue. More leads. Better business.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/results", label: "Results" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">Talk now</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 shrink-0 text-emerald-400" aria-hidden="true" />
                WhatsApp ({PHONE_DISPLAY})
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Get Good Leads. All rights reserved.</p>
          <p>
            Results, case studies and testimonials shown on this site are illustrative sample
            placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
}
