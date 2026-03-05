"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

import "lenis/dist/lenis.css";

const defaultOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  smoothWheel: true,
  touchMultiplier: 2,
  autoRaf: true,
};

export default function LenisSmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis(defaultOptions);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
