import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./contact-info";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Get Good Leads on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_40px_-12px_rgba(37,99,255,0.8)] transition-transform duration-200 hover:scale-110"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
