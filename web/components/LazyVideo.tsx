"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyVideo({ src, ariaLabel }: { src: string; ariaLabel: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || active) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { rootMargin: "240px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {active && (
        <video
          src={src}
          aria-label={ariaLabel}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}
    </div>
  );
}
