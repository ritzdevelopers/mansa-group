"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LazySectionProps = {
  children: ReactNode;
  /** Root margin: when to start loading (e.g. "200px" = load when 200px away from viewport) */
  rootMargin?: string;
  /** Min fraction of element visible to trigger (0–1) */
  threshold?: number;
};

/**
 * Renders children only when the wrapper is near/in the viewport.
 * Reduces initial JS work on Vercel: Section4 (Swiper), Section5 (Three.js), etc. mount only when user scrolls to them.
 */
export default function LazySection({ children, rootMargin = "150px", threshold = 0.01 }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldRender(true);
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return <div ref={ref}>{shouldRender ? children : <div style={{ minHeight: 1 }} aria-hidden />}</div>;
}
