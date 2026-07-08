"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface UIContextType {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Add/remove body classes depending on states
    if (isSidebarOpen || isSearchOpen || isMobileMenuOpen) {
      document.body.classList.add("on-side", "active");
    } else {
      document.body.classList.remove("on-side", "active");
    }
  }, [isSidebarOpen, isSearchOpen, isMobileMenuOpen]);

  // Re-trigger AOS animations and setup widgets on pathname change
  useEffect(() => {
    if (typeof window !== "undefined") {
      const initAOS = () => {
        if ((window as any).AOS) {
          (window as any).AOS.init({
            duration: 1000,
            once: true,
          });
          (window as any).AOS.refresh();
        }
      };

      // Nice select dropdown initialization
      const initWidgets = () => {
        const $ = (window as any).jQuery;
        if ($) {
          if ($.fn.niceSelect) {
            $("select").niceSelect();
          }
          // Progress bars width initialization
          $(".progress-bar").each(function(this: any) {
            const val = $(this).attr("aria-valuenow");
            if (val) {
              $(this).width(val + "%");
            }
          });
        }
      };

      // Slight delay to allow DOM to hydrate completely
      const timer = setTimeout(() => {
        initAOS();
        initWidgets();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <UIContext.Provider
      value={{
        isSidebarOpen,
        setSidebarOpen,
        isSearchOpen,
        setSearchOpen,
        isMobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}
