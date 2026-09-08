import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917985591914";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Get Good Leads on WhatsApp"
      className="glow-pulse fixed right-4 bottom-4 z-50 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_40px_-12px_rgba(37,99,255,0.85)] transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
    >
      <span
        aria-hidden="true"
        className="ping-ring absolute inset-0 rounded-full border border-primary/60"
      />
      <MessageCircle className="relative size-6" aria-hidden="true" />
    </a>
  );
}
