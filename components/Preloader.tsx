"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for fade transition
      const fadeTimer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(fadeTimer);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="se-pre-con"
      style={{
        opacity: loading ? 1 : 0,
        transition: "opacity 0.5s ease",
        display: visible ? "block" : "none",
        pointerEvents: loading ? "all" : "none",
      }}
    >
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="Preloader-icon">
              <img src="/assets/img/logo/preloader.svg" alt="Preloader" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
