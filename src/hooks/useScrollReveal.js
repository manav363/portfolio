import { useEffect } from "react";

/**
 * Sets up a global IntersectionObserver that watches all elements
 * with [data-reveal]. When an element scrolls into view, the
 * `.revealed` class is added triggering a CSS entrance animation.
 *
 * Call once in App. Individual components just add data-reveal
 * to their wrapper element:
 *   - data-reveal          → default slide-up + fade
 *   - data-reveal="fade"   → fade only
 *   - data-reveal-delay="1" → stagger index (100ms * index)
 */
export default function useScrollReveal() {
  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      // Immediately reveal everything so nothing stays hidden
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    // Small delay to ensure DOM is painted before observing
    const timer = setTimeout(() => {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => observer.observe(el));
    }, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
