import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Animates the numeric part of a value string (e.g. "+142%", "3.4x", "14 days")
 * from 0 whenever it enters the viewport, resetting when it leaves.
 * Prefixes and suffixes are preserved exactly.
 */
export function CountUp({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const rafRef = useRef<number | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const match = value.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/s);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const prefix = match[1] ?? "";
    const numRaw = (match[2] ?? "0").replace(/,/g, "");
    const suffix = match[3] ?? "";
    const target = parseFloat(numRaw);
    const decimals = numRaw.includes(".") ? (numRaw.split(".")[1]?.length ?? 0) : 0;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

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
      const tick = (now: number) => {
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

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) run();
          else {
            stop();
            setDisplay(format(0));
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      stop();
      io.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
