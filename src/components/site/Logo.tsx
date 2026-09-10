import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className, height = 46 }: { className?: string; height?: number }) {
  return (
    <Link
      to="/"
      aria-label="Get Good Leads — home"
      className={cn(
        "group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white px-3.5 py-1.5 shadow-[0_4px_20px_-4px_rgba(37,99,255,0.45)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(37,99,255,0.75)]",
        className,
      )}
      style={{ height }}
    >
      <img
        src={logoImg}
        alt="Get Good Leads — More Leads. Better Business."
        style={{ height: Math.max(24, height - 12) }}
        className="w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </Link>
  );
}



