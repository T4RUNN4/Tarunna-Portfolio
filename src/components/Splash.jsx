import { useEffect, useState } from "react";
import portfolio from "../data/portfolio";

function Bubble({ text, className, startDelay }) {
  return (
    <span className={className}>
      {[...text].map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="ca-splash-char inline-block"
          style={{ animationDelay: `${startDelay + i * 0.045}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

async function waitForFonts(timeoutMs = 4000) {
  if (!document.fonts) return;
  const loads = Promise.all([
    document.fonts.load("800 48px Handjet"),
    document.fonts.load('400 24px "Just Me Again Down Here"'),
    document.fonts.load('700 14px "DM Mono"'),
    document.fonts.load("600 16px Inter"),
    document.fonts.ready,
  ]);
  await Promise.race([
    loads,
    new Promise((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
}

export default function Splash({ onDone }) {
  const { splash } = portfolio;
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduce ? 0 : 1700;
    const started = performance.now();

    (async () => {
      await waitForFonts();
      if (cancelled) return;

      const wait = Math.max(0, minMs - (performance.now() - started));
      window.setTimeout(() => {
        if (cancelled) return;
        if (reduce) {
          onDone();
          return;
        }
        setLeaving(true);
        window.setTimeout(() => {
          if (!cancelled) onDone();
        }, 450);
      }, wait);
    })();

    return () => {
      cancelled = true;
    };
  }, [onDone]);

  return (
    <div
      className={`ca-splash ca-grid pointer-events-none fixed inset-0 z-[80] grid place-items-center ${leaving ? "is-leaving" : ""}`}
      aria-hidden
    >
      <Bubble
        text={splash.hello}
        startDelay={0.15}
        className="ca-splash-b1 col-start-1 row-start-1 rounded-2xl rounded-tl-none border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-4 py-3 text-3xl font-medium leading-[1.1] text-white sm:text-[2.5rem]"
      />
      <Bubble
        text={splash.found}
        startDelay={0.95}
        className="ca-splash-b2 col-start-1 row-start-1 rounded-2xl rounded-tl-none border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-4 py-3 text-3xl font-medium leading-[1.1] text-white sm:text-[2.5rem]"
      />
    </div>
  );
}
