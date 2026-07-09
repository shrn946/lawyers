"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LawyersClientManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Fixed Header scroll event
    const handleScroll = () => {
      const headerBar = document.getElementById("header-bar");
      if (headerBar) {
        if (window.scrollY > 1) {
          headerBar.classList.add("nav-fixed-top");
        } else {
          headerBar.classList.remove("nav-fixed-top");
        }
      }

      // Scroll to top button visibility
      const scrollup = document.querySelector(".scrollup") as HTMLElement;
      if (scrollup) {
        if (window.scrollY > 400) {
          scrollup.style.display = "block";
        } else {
          scrollup.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll to top action
    const scrolltopBtn = document.querySelector(".scrolltop");
    if (scrolltopBtn) {
      scrolltopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Mobile menu toggle
    const navButton = document.querySelector(".nav-button");
    const exitMobile = document.querySelector(".exit-mobile");
    const menuMask = document.querySelector(".menu-mask");
    const mobileMenuHolder = document.querySelector(".mobile-menu-holder");

    const openMenu = (e: Event) => {
      e.preventDefault();
      mobileMenuHolder?.classList.add("is-active");
      menuMask?.classList.add("is-active");
      document.body.classList.add("has-active-menu");
    };

    const closeMenu = (e: Event) => {
      e.preventDefault();
      mobileMenuHolder?.classList.remove("is-active");
      menuMask?.classList.remove("is-active");
      document.body.classList.remove("has-active-menu");
    };

    navButton?.addEventListener("click", openMenu);
    exitMobile?.addEventListener("click", closeMenu);
    menuMask?.addEventListener("click", closeMenu);

    // Mobile menu dropdown items click handler
    const dropdownToggles = document.querySelectorAll(".menu-mobile > li.menu-item-has-children > a");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const parent = toggle.parentElement;
        if (parent?.classList.contains("menu-open")) {
          parent.classList.remove("menu-open");
        } else {
          parent?.classList.add("menu-open");
        }
      });
    });

    // Function to initialize/re-initialize jQuery plugins on route changes
    const initPlugins = () => {
      const $ = (window as any).jQuery;
      if (!$) return;

      // 1. Home slider
      const $homeSlider = $(".home-slider");
      if ($homeSlider.length > 0 && typeof $homeSlider.owlCarousel === "function") {
        $homeSlider.trigger("destroy.owl.carousel"); // destroy first if exists
        $homeSlider.owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          animateOut: "fadeOut",
          dots: false,
          nav: true,
          navText: ["", ""]
        });
      }

      // 2. Testimonials slider
      const $testimonialsSlider = $(".testimonials-slider");
      if ($testimonialsSlider.length > 0 && typeof $testimonialsSlider.owlCarousel === "function") {
        $testimonialsSlider.trigger("destroy.owl.carousel"); // destroy first if exists
        $testimonialsSlider.owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 7000,
          animateOut: "fadeOut",
          dots: true,
          nav: false,
          navText: ["", ""]
        });
      }

      // 3. FAQ Toggles
      $(".faq-section").hide();
      $(".faq-title").off("click").on("click", function (this: any) {
        if ($(this).next().is(":hidden")) {
          $(".faq-title").removeClass("active").next().slideUp();
          $(this).toggleClass("active").next().slideDown();
        } else {
          $(".faq-title").removeClass("active").next().slideUp();
        }
        return false;
      });

      // 4. Magnific Popup for Gallery
      const $galImg = $(".gal-img a, .blocks-gallery-item a");
      if ($galImg.length > 0 && typeof $galImg.magnificPopup === "function") {
        $galImg.magnificPopup({
          type: "image",
          gallery: {
            enabled: true
          }
        });
      }

      // 5. Isotope Masonry
      const $layoutMasonry = $(".layout-masonry");
      if ($layoutMasonry.length > 0 && typeof $layoutMasonry.isotope === "function") {
        $layoutMasonry.isotope({
          itemSelector: ".blog-item-masonry",
          layoutMode: "masonry"
        });

        $(".portfolio-filter a").off("click").on("click", function (this: any) {
          $(".portfolio-filter .current").removeClass("current");
          $(this).addClass("current");
          const selector = $(this).attr("data-filter");
          $layoutMasonry.isotope({ filter: selector });
          return false;
        });
      }
    };

    // Run plugin initializations after a small delay to let page hydration finish
    const timer = setTimeout(initPlugins, 150);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [pathname]); // Re-run effect whenever user navigates to a new page (pathname changes)

  return null;
}
