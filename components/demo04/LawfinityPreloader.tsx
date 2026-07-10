"use client";

import React, { useEffect, useState } from "react";

export function LawfinityPreloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 350);

    return () => clearTimeout(fadeTimer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="loader-mask"
      style={{
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default LawfinityPreloader;
