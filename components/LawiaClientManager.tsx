"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LawiaClientManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run if we are under the /demo-01 route
    if (!pathname.startsWith("/demo-01")) return;

    const $ = (window as any).jQuery;
    if (!$) return;

    // --- 1. Sticky Header ---
    const handleScroll = () => {
      if (window.scrollY > 500) {
        $(".header").addClass("sticky-header");
      } else {
        $(".header").removeClass("sticky-header");
      }

      // Back to top button visibility
      if (window.scrollY > 700) {
        $("#back-to-top-btn").addClass("show");
      } else {
        $("#back-to-top-btn").removeClass("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially

    // --- 2. Back to Top Click ---
    $("#back-to-top-btn").off("click").on("click", (e: any) => {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 600);
    });

    // --- 3. Mobile Menu open/close ---
    $(".header-menu-bar").off("click").on("click", (e: any) => {
      e.preventDefault();
      $(".mobile-menu").addClass("mobile-menu-active");
      $(".header-sidebar").addClass("header-sidebar-active");
    });
    $(".mobile-menu-close, .mobile-menu-overlay").off("click").on("click", (e: any) => {
      e.preventDefault();
      $(".mobile-menu").removeClass("mobile-menu-active");
    });
    $(".header-sidebar-close, .header-sidebar-overlay").off("click").on("click", (e: any) => {
      e.preventDefault();
      $(".header-sidebar").removeClass("header-sidebar-active");
    });

    // --- 4. Search Form open/close ---
    $(".header-search-btn").off("click").on("click", (e: any) => {
      e.preventDefault();
      $(".header-search").addClass("header-search-active");
    });
    $(".header-search-close, .header-search-overlay").off("click").on("click", (e: any) => {
      e.preventDefault();
      $(".header-search").removeClass("header-search-active");
    });

    // --- 5. Share Icon toggles ---
    for (let i = 1; i <= 6; i++) {
      $(`.share-icon${i}`).off("click").on("click", (e: any) => {
        e.preventDefault();
        $(`.social-wrapper-toggle${i}`).toggleClass(`social-wrapper-toggle${i}-active`);
        for (let j = 1; j <= 6; j++) {
          if (j !== i) {
            $(`.social-wrapper-toggle${j}`).removeClass(`social-wrapper-toggle${j}-active`);
          }
        }
      });
    }

    // --- 6. Checkout payment method toggles ---
    $(".checkout-checkbox1").off("click").on("click", function() {
      $(".checkout-checkbox1").toggleClass("checkout-checkbox1-active");
      $(".checkout-checkbox2").removeClass("checkout-checkbox2-active");
      $(".checkout-checkbox3").removeClass("checkout-checkbox3-active");
    });
    $(".checkout-checkbox2").off("click").on("click", function() {
      $(".checkout-checkbox2").toggleClass("checkout-checkbox2-active");
      $(".checkout-checkbox1").removeClass("checkout-checkbox1-active");
      $(".checkout-checkbox3").removeClass("checkout-checkbox3-active");
    });
    $(".checkout-checkbox3").off("click").on("click", function() {
      $(".checkout-checkbox3").toggleClass("checkout-checkbox3-active");
      $(".checkout-checkbox2").removeClass("checkout-checkbox2-active");
      $(".checkout-checkbox1").removeClass("checkout-checkbox1-active");
    });

    // --- 7. Quantity Stepper ---
    $(".quantity-plus").off("click").on("click", function(e: any) {
      e.preventDefault();
      const $qty = $(this).siblings(".quantity-value");
      const val = parseInt($qty.val());
      if (!isNaN(val)) {
        $qty.val(val + 1);
      }
    });
    $(".quantity-minus").off("click").on("click", function(e: any) {
      e.preventDefault();
      const $qty = $(this).siblings(".quantity-value");
      const val = parseInt($qty.val());
      if (!isNaN(val) && val > 1) {
        $qty.val(val - 1);
      }
    });

    // --- 8. Background Source logic ---
    $("[data-bg-src]").each(function() {
      const src = $(this).attr("data-bg-src");
      if (src) {
        $(this).css("background-image", `url('${src}')`);
      }
    });

    // --- 9. Sliders, WOW, CounterUp, Magnific Popup ---
    const initPlugins = () => {
      // Swiper Sliders
      if ((window as any).Swiper) {
        // Banner logos Swiper
        if ($(".banner3").length > 0) {
          new (window as any).Swiper(".banner3", {
            slidesPerView: 6,
            spaceBetween: 80,
            loop: true,
            speed: 1000,
            autoplay: true,
            navigation: {
              nextEl: ".swiper-banner-button-next",
              prevEl: ".swiper-banner-button-prev",
            },
            breakpoints: {
              300: { slidesPerView: 3, spaceBetween: 20 },
              375: { slidesPerView: 3, spaceBetween: 20 },
              400: { slidesPerView: 4, spaceBetween: 20 },
              968: { slidesPerView: 5, spaceBetween: 50 },
              1200: { slidesPerView: 6, spaceBetween: 80 },
            }
          });
        }

        // Cases Swiper
        if ($(".cases-1").length > 0) {
          new (window as any).Swiper(".cases-1", {
            loop: true,
            spaceBetween: 30,
            speed: 2000,
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
            },
            breakpoints: {
              300: { slidesPerView: 1, spaceBetween: 10 },
              450: { slidesPerView: 1.4, spaceBetween: 10 },
              575: { slidesPerView: 1.6, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
              1600: { slidesPerView: 3.3 },
              1650: { slidesPerView: 3.4 },
              1750: { slidesPerView: 3.5 },
              1800: { slidesPerView: 3.6 },
              1900: { slidesPerView: 3.68 },
              1921: { slidesPerView: 3 },
            }
          });
        }

        // Cases Details Swiper
        if ($(".cases-details-2").length > 0) {
          new (window as any).Swiper(".cases-details-2", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            effect: "fade",
            speed: 2000,
            navigation: {
              nextEl: ".swiper-cases-button-next",
              prevEl: ".swiper-cases-button-prev",
            }
          });
        }
      }

      // Slick Sliders
      if ($.fn.slick) {
        // Testimonials
        if ($(".test-1").length > 0) {
          const $testSlider = $(".test-1");
          if ($testSlider.hasClass("slick-initialized")) {
            $testSlider.slick("unslick");
          }
          $testSlider.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            centerPadding: "266px",
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            responsive: [
              { breakpoint: 1441, settings: { centerPadding: "120px" } },
              { breakpoint: 1201, settings: { slidesToShow: 2, centerPadding: "120px" } },
              { breakpoint: 1025, settings: { centerPadding: "80px", slidesToShow: 2 } },
              { breakpoint: 769, settings: { centerPadding: "0", slidesToShow: 2 } },
              { breakpoint: 575, settings: { centerPadding: "50px", slidesToShow: 1 } },
              { breakpoint: 400, settings: { centerPadding: "0px", slidesToShow: 1 } },
            ]
          });

          $(".testimonial-prev-btn").off("click").on("click", () => $testSlider.slick("slickPrev"));
          $(".testimonial-next-btn").off("click").on("click", () => $testSlider.slick("slickNext"));
        }

        // Blog Standard Carousel
        if ($(".blog-standard").length > 0) {
          const $blogSlider = $(".blog-standard");
          if ($blogSlider.hasClass("slick-initialized")) {
            $blogSlider.slick("unslick");
          }
          $blogSlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
          });

          $(".blog-standard-prev-btn").off("click").on("click", () => $blogSlider.slick("slickPrev"));
          $(".blog-standard-next-btn").off("click").on("click", () => $blogSlider.slick("slickNext"));
        }

        // Responsive Slicks
        const handleResponsiveSlicks = () => {
          const wWidth = $(window).width();

          // Service 1
          if ($(".service-1").length > 0) {
            const $s1 = $(".service-1");
            if (wWidth > 992) {
              if ($s1.hasClass("slick-initialized")) $s1.slick("unslick");
            } else {
              if (!$s1.hasClass("slick-initialized")) {
                $s1.slick({
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 2000,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  arrows: false,
                });
              }
            }
          }

          // Service 3
          if ($(".service-3").length > 0) {
            const $s3 = $(".service-3");
            if (wWidth > 1200) {
              if ($s3.hasClass("slick-initialized")) $s3.slick("unslick");
            } else {
              if (!$s3.hasClass("slick-initialized")) {
                $s3.slick({
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 2000,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  arrows: false,
                  responsive: [
                    { breakpoint: 1200, settings: { slidesToShow: 3 } },
                    { breakpoint: 992, settings: { slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 1 } },
                  ]
                });
              }
            }
          }

          // Blog 1
          if ($(".blog-1").length > 0) {
            const $b1 = $(".blog-1");
            if (wWidth > 1200) {
              if ($b1.hasClass("slick-initialized")) $b1.slick("unslick");
            } else {
              if (!$b1.hasClass("slick-initialized")) {
                $b1.slick({
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  speed: 1000,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  arrows: false,
                  responsive: [
                    { breakpoint: 992, settings: { slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 1 } },
                  ]
                });
              }
            }
          }
        };

        handleResponsiveSlicks();
        $(window).off("resize.responsiveSlick").on("resize.responsiveSlick", handleResponsiveSlicks);
      }

      // Magnific Popup
      if ($.fn.magnificPopup) {
        $(".popup-video").magnificPopup({
          type: "iframe"
        });
      }

      // Counter Up
      if ($.fn.counterUp) {
        $(".count").counterUp({
          delay: 10,
          time: 3000,
        });
      }

      // WOW Animation
      if ((window as any).WOW) {
        try {
          const wow = new (window as any).WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
          });
          wow.init();
        } catch (e) {
          console.warn("WOW failed to init:", e);
        }
      }
    };

    // Slight timeout to ensure script registration and DOM hydration
    const timer = setTimeout(initPlugins, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
