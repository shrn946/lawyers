"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LawgneClientManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Preloader
    const preloader = document.querySelector(".preloader") as HTMLElement;
    if (preloader) {
      preloader.style.display = "block";
      preloader.style.opacity = "1";
      setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }, 500);
    }

    // 2. Sticky Header
    const handleScroll = () => {
      const headerNav = document.querySelector(".header-navigation") as HTMLElement;
      if (headerNav) {
        if (window.scrollY > 190) {
          headerNav.classList.add("sticky");
        } else {
          headerNav.classList.remove("sticky");
        }
      }

      // Back to top button visibility
      const backToTop = document.querySelector(".back-to-top") as HTMLElement;
      if (backToTop) {
        if (window.scrollY > 600) {
          backToTop.style.display = "block";
        } else {
          backToTop.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 3. Back to top click handler
    const backToTopBtn = document.querySelector(".back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // 4. Mobile Menu Toggles
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector(".nav-menu");
    const navbarClose = document.querySelector(".navbar-close");

    if (navbarToggler && navMenu) {
      navbarToggler.addEventListener("click", () => {
        navbarToggler.classList.toggle("active");
        navMenu.classList.toggle("menu-on");
      });
    }

    if (navbarClose && navMenu && navbarToggler) {
      navbarClose.addEventListener("click", () => {
        navMenu.classList.remove("menu-on");
        navbarToggler.classList.remove("active");
      });
    }

    // Mobile menu sub-menu trigger binding
    const navLinks = document.querySelectorAll(".nav-menu li a");
    navLinks.forEach((link) => {
      const nextEl = link.nextElementSibling;
      if (nextEl && nextEl.tagName === "UL") {
        if (!link.parentElement?.querySelector(".dd-trigger")) {
          const trigger = document.createElement("span");
          trigger.className = "dd-trigger";
          trigger.innerHTML = '<i class="fas fa-angle-down"></i>';
          link.parentElement?.appendChild(trigger);

          trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const subMenu = link.parentElement?.querySelector("ul") as HTMLElement;
            if (subMenu) {
              const isOpen = link.parentElement?.classList.contains("active");
              if (isOpen) {
                subMenu.style.display = "none";
                link.parentElement?.classList.remove("active");
              } else {
                subMenu.style.display = "block";
                link.parentElement?.classList.add("active");
              }
            }
          });
        }
      }
    });

    const checkBreakpoint = () => {
      const headerNav = document.querySelector(".header-navigation");
      if (headerNav) {
        if (window.innerWidth <= 1199) {
          headerNav.classList.add("breakpoint-on");
        } else {
          headerNav.classList.remove("breakpoint-on");
        }
      }
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    // 5. Offcanvas panel toggles
    const offMenuBtn = document.querySelector(".off-menu");
    const panelClose = document.querySelector(".panel-close");
    const offcanvasPanel = document.querySelector(".offcanvas-panel");

    if (offMenuBtn && offcanvasPanel) {
      offMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        offcanvasPanel.classList.toggle("panel-on");
      });
    }

    if (panelClose && offcanvasPanel) {
      panelClose.addEventListener("click", (e) => {
        e.preventDefault();
        offcanvasPanel.classList.remove("panel-on");
      });
    }

    // 6. jQuery Plugins Re-Initialization on path change
    const initPlugins = () => {
      const $ = (window as any).jQuery;
      if (!$) return;

      // Slick destroy helpers
      const safeSlick = ($el: any, options: any) => {
        if ($el.length > 0 && typeof $el.slick === "function") {
          if ($el.hasClass("slick-initialized")) {
            $el.slick("unslick");
          }
          $el.slick(options);
        }
      };

      // Nice select
      if (typeof $.fn.niceSelect === "function") {
        $("select").niceSelect("destroy");
        $("select").niceSelect();
      }

      // Counter
      if (typeof $.fn.counterUp === "function" && $(".count").length > 0) {
        $(".count").counterUp({
          delay: 10,
          time: 1500
        });
      }

      // Magnific popup
      if (typeof $.fn.magnificPopup === "function") {
        $(".video-popup").magnificPopup({
          type: "iframe",
          removalDelay: 300,
          mainClass: "mfp-fade"
        });

        $(".img-popup").magnificPopup({
          type: "image",
          gallery: {
            enabled: true
          }
        });
      }

      // Hero slider
      const heroSliderOptions = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplaySpeed: 3000,
        fade: true,
        autoplay: true,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 1200, settings: { arrows: false } },
          { breakpoint: 767, settings: { arrows: false } }
        ]
      };
      safeSlick($(".hero-slider-one"), heroSliderOptions);

      // Testimonial sliders
      safeSlick($(".testimonial-slider-one"), {
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      const $slideDots = $(".testimonial-dots-images");
      safeSlick($(".testimonial-slider-two"), {
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 4000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $slideDots.length > 0 ? $slideDots : undefined,
        customPaging: function (slick: any, index: number) {
          const portrait = $(slick.$slides[index]).data("thumb");
          return portrait ? `<img src="${portrait}" />` : `<button>${index + 1}</button>`;
        },
        responsive: [
          { breakpoint: 767, settings: { dots: false } }
        ]
      });

      // Case studies sliders
      const $caseArrows = $(".case-arrows");
      safeSlick($(".case-slider-one"), {
        dots: false,
        arrows: true,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        appendArrows: $caseArrows.length > 0 ? $caseArrows : undefined,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
          { breakpoint: 1199, settings: { slidesToShow: 2 } },
          { breakpoint: 767, settings: { slidesToShow: 1 } }
        ]
      });

      safeSlick($(".case-slider-two"), {
        dots: false,
        arrows: true,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        appendArrows: $caseArrows.length > 0 ? $caseArrows : undefined,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
          { breakpoint: 1400, settings: { slidesToShow: 3 } },
          { breakpoint: 1200, settings: { slidesToShow: 2 } },
          { breakpoint: 767, settings: { slidesToShow: 1 } }
        ]
      });

      // Sponsors slider
      safeSlick($(".sponsor-slider-one"), {
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 1199, settings: { slidesToShow: 3 } },
          { breakpoint: 767, settings: { slidesToShow: 1 } }
        ]
      });

      // WOW Animations
      const WOW = (window as any).WOW;
      if (WOW) {
        new WOW().init();
      }
    };

    const timer = setTimeout(initPlugins, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkBreakpoint);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
