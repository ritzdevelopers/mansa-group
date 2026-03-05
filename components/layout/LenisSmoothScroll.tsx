"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value);
        }
        return lenis.scroll;
      },
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    return () => {
      lenis.destroy();
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return <>{children}</>;
}
