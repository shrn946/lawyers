"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyClassManager() {
  const pathname = usePathname();

  useEffect(() => {
    // List of paths that are homepages (not inner pages)
    const homepages = ["/", "/index1", "/index2", "/index3", "/index4", "/index5", "/index6", "/index-rtl-1"];
    
    // Normalize path by removing trailing slash if any
    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

    if (!homepages.includes(normalizedPath)) {
      document.body.classList.add("inner-pages");
    } else {
      document.body.classList.remove("inner-pages");
    }
  }, [pathname]);

  return null;
}
