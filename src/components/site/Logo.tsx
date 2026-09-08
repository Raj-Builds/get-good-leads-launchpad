import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className, height = 40 }: { className?: string; height?: number }) {
  return (
    <Link
      to="/"
      aria-label="Get Good Leads — home"
      className={cn(
        "inline-flex shrink-0 items-center overflow-hidden rounded-xl bg-white px-2 shadow-[0_8px_30px_-12px_rgba(37,99,255,0.7)] transition-transform duration-300 hover:scale-[1.03]",
        className,
      )}
      style={{ height }}
    >
      <img
        src={logoAsset.url}
        alt="Get Good Leads — more leads, better business"
        style={{ height: height * 2.6 }}
        className="w-auto object-contain"
      />
    </Link>
  );
}

