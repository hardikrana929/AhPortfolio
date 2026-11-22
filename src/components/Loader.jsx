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
    <div className={`loader ${hide ? "loader--hide" : ""}`} role="status" aria-live="polite">
      <div className="loader__ring" style={{ "--p": progress }}>
        <span>{progress}%</span>
      </div>
      <p className="loader__text">Loading portfolio…</p>
    </div>
  );
}
