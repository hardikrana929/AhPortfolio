import { useEffect, useState } from "react";

const DURATION = 2200; // ms

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(100, Math.round(((now - start) / DURATION) * 100));
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setHide(true);
        setTimeout(onDone, 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 transition-opacity duration-500 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ background: "var(--bg)" }}
    >
      <div
        className="loader-ring grid h-32 w-32 place-items-center rounded-full"
        style={{ "--p": progress }}
      >
        <span
          className="grid h-[104px] w-[104px] place-items-center rounded-full text-2xl font-bold"
          style={{ background: "var(--bg)" }}
        >
          {progress}%
        </span>
      </div>
      <p className="tracking-widest text-muted">Loading portfolio…</p>
    </div>
  );
}
