"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AlegadaClientManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Page preloader logic
    const handleLoader = () => {
      const preloader = document.getElementById("page-preloader");
      if (preloader) {
        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    };

    if (document.readyState === "complete") {
      handleLoader();
    } else {
      window.addEventListener("load", handleLoader);
    }

    return () => {
      window.removeEventListener("load", handleLoader);
    };
  }, [pathname]);

  return null;
}
