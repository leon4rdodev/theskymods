"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx =
        document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        (document.documentElement.clientHeight || window.innerHeight);

      // Avoid division by zero
      if (winHeightPx <= 0) {
        setScrollProgress(0);
        return;
      }

      // Calculate percentage
      let scrolled = (scrollPx / winHeightPx) * 100;

      // If we're within 5 pixels of the bottom, consider it 100%
      // This handles mobile browsers where precise bottom detection is tricky
      if (winHeightPx - scrollPx <= 5) {
        scrolled = 100;
      }

      // Clamp between 0 and 100
      const progress = Math.min(Math.max(scrolled, 0), 100);

      setScrollProgress(progress);
    };

    // Update on mount with a slight delay to ensure DOM is ready
    setTimeout(updateScrollProgress, 100);

    // Update on scroll
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    // Also update on resize (important for mobile)
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    // Update on orientation change (mobile specific)
    window.addEventListener("orientationchange", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      window.removeEventListener("orientationchange", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-transparent z-50 overflow-hidden">
      <div
        className="h-full bg-linear-to-r from-[#87CEEB] via-[#F4D03F] to-[#87CEEB] transition-all duration-150 ease-out shadow-lg"
        style={{
          width: `${Math.min(scrollProgress * 1.05, 105)}%`,
          boxShadow:
            "0 0 10px rgba(135, 206, 235, 0.6), 0 0 20px rgba(244, 208, 63, 0.4)",
        }}
      >
        {/* Animated glow effect */}
        <div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"
          style={{
            animation: "shimmer 2s infinite",
          }}
        />
      </div>
    </div>
  );
}
