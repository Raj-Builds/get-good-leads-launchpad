import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "./contact-info";

export function CTASection({
  title = "Ready for a pipeline you can predict?",
  body = "Book a free 30-minute growth audit. We map your funnel, spot the leaks, and show you where the next 100 qualified leads come from.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="card-surface relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-primary/30 blur-3xl"
        />
        <div aria-hidden="true" className="orb -right-16 -bottom-24 size-72 opacity-50" />
        <div className="relative">
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="cta-glow shimmer-hover rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.04]"
            >
              Get my free audit
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="shimmer-hover inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-hover inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <MessageCircle className="size-4 shrink-0 text-emerald-400" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
