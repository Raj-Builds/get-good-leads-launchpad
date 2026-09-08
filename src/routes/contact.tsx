import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/components/site/contact-info";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Get Good Leads — Book Your Free Growth Audit" },
      {
        name: "description",
        content:
          "Talk to Get Good Leads about lead generation. Call +91 79855 91914, message us on WhatsApp, or request a free growth audit.",
      },
      { property: "og:title", content: "Contact | Get Good Leads" },
      {
        property: "og:description",
        content: "Call, WhatsApp or request your free growth audit.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your next 100 leads">
        Tell us where you are today and what growth would look like. We reply within one business
        day — usually much sooner.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <form
              className="card-surface rounded-3xl p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h2 className="text-2xl font-bold">Request your free growth audit</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Demonstration form — submissions are not yet delivered anywhere. Please call or
                WhatsApp us for an immediate response.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name" autoComplete="name" required />
                <Field id="company" label="Company" autoComplete="organization" />
                <Field id="email" label="Email" type="email" autoComplete="email" required />
                <Field id="phone" label="Phone" type="tel" autoComplete="tel" required />
                <div className="sm:col-span-2">
                  <label htmlFor="budget" className="block text-sm font-medium">
                    Monthly marketing budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹2,00,000</option>
                    <option>₹2,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    What are you trying to grow?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground"
                    placeholder="A little about your business, offer and current results…"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 min-h-12 w-full rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] sm:w-auto sm:px-10"
              >
                Send my request
              </button>

              <p aria-live="polite" className="mt-4 text-sm text-primary">
                {sent
                  ? "Thanks! This demo form doesn't send messages yet — please call or WhatsApp us and we'll pick it up right away."
                  : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="card-surface card-hover group flex items-center gap-4 rounded-2xl p-6"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">Call us</span>
                  <span className="block text-sm text-muted-foreground">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface card-hover group flex items-center gap-4 rounded-2xl p-6"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">WhatsApp</span>
                  <span className="block text-sm text-muted-foreground">
                    Fastest reply — chat now
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="card-surface card-hover group flex items-center gap-4 rounded-2xl p-6"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">Email</span>
                  <span className="block truncate text-sm text-muted-foreground">{EMAIL}</span>
                </span>
              </a>

              <div className="card-hover rounded-2xl border border-border p-6">
                <p className="flex items-center gap-3 text-sm">
                  <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  Mon–Sat, 10:00 – 19:00 IST
                </p>
                <p className="mt-3 flex items-center gap-3 text-sm">
                  <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  Serving clients across India, remotely
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Sample hours and location placeholder — send us your real details and we'll update
                  them.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground"
      />
    </div>
  );
}
