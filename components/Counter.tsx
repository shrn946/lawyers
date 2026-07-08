"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number; // in milliseconds
}

export default function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [mounted, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const endVal = end;
    if (start === endVal) {
      setCount(endVal);
      return;
    }

    const stepTime = Math.abs(Math.floor(duration / endVal));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endVal) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 10));

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  // Render the final static end value on the server and during hydration to ensure match,
  // then animate dynamically once mounted and visible.
  return <span ref={ref} className="counter">{mounted ? count : end}</span>;
}
