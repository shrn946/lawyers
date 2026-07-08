"use client";

import { useEffect, useState } from "react";

export default function ProgressWrap() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollProgress((currentScroll / totalScroll) * 100);
        setIsVisible(currentScroll > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG math: circumference of radius 49 is 2 * PI * 49 = 307.876
  const circumference = 307.876;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  if (!mounted) return null;

  return (
    <div
      className={`paginacontainer ${isVisible ? "active-progress" : ""}`}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }}
    >
      <div className={`progress-wrap ${isVisible ? "active-progress" : ""}`}>
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: "stroke-dashoffset 10ms linear",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
