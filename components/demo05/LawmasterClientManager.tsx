"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LawmasterClientManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Loader Logic
    const hideLoader = () => {
      const loader = document.getElementById("site-loader");
      if (loader) {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }
    };

    // If document is already loaded, hide immediately. Otherwise wait for load
    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }

    // 2. Sticky navigation & Back to Top logic
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = window.innerHeight;

      // Sticky Menu
      const stickyNavs = document.querySelectorAll(".ow-navigation");
      stickyNavs.forEach((nav) => {
        if (scroll >= height - 300) {
          nav.classList.add("navbar-fixed-top", "animated", "fadeInDown");
        } else {
          nav.classList.remove("navbar-fixed-top", "animated", "fadeInDown");
        }
      });

      // Back to top
      const backToTop = document.getElementById("back-to-top");
      if (backToTop) {
        if (scroll >= 50) {
          backToTop.style.display = "block";
          backToTop.style.opacity = "1";
        } else {
          backToTop.style.opacity = "0";
          setTimeout(() => {
            if (window.scrollY < 50) {
              backToTop.style.display = "none";
            }
          }, 200);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once initially

    // 3. Slidepanel Logic (Log In / Close toggles)
    const handleSlidePanelClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const slideIt = target.closest("#slideit");
      const closeIt = target.closest("#closeit");
      const slidePanel = document.getElementById("slidepanel");

      if (slideIt && slidePanel) {
        e.preventDefault();
        slidePanel.style.display = "block";
        slidePanel.style.maxHeight = "500px";
        slidePanel.style.transition = "max-height 1s ease";
        slidePanel.style.overflow = "hidden";
        
        // toggle visibility of slideit and closeit
        const toggleLinks = document.querySelectorAll("#toggle a");
        toggleLinks.forEach((link) => {
          if (link.id === "slideit") {
            (link as HTMLElement).style.display = "none";
          } else if (link.id === "closeit") {
            (link as HTMLElement).style.display = "inline";
          }
        });
      }

      if (closeIt && slidePanel) {
        e.preventDefault();
        slidePanel.style.maxHeight = "0px";
        slidePanel.style.transition = "max-height 1s ease";
        setTimeout(() => {
          if (slidePanel.style.maxHeight === "0px") {
            slidePanel.style.display = "none";
          }
        }, 1000);

        const toggleLinks = document.querySelectorAll("#toggle a");
        toggleLinks.forEach((link) => {
          if (link.id === "slideit") {
            (link as HTMLElement).style.display = "inline";
          } else if (link.id === "closeit") {
            (link as HTMLElement).style.display = "none";
          }
        });
      }
    };

    document.addEventListener("click", handleSlidePanelClick);

    // 4. Back to top click logic
    const handleBackToTopClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest("#back-to-top");
      if (btn) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleBackToTopClick);

    // 5. Setup Carousel Emulator for Owl Carousels
    const initCarousels = () => {
      const carousels = document.querySelectorAll(".owl-carousel");
      carousels.forEach((carouselEl) => {
        if (carouselEl.classList.contains("slider-initialized")) return;
        carouselEl.classList.add("slider-initialized");

        const slides = Array.from(carouselEl.children);
        if (slides.length === 0) return;

        carouselEl.innerHTML = "";

        // Viewport
        const viewport = document.createElement("div");
        viewport.className = "slider-viewport";
        viewport.style.overflow = "hidden";
        viewport.style.width = "100%";
        viewport.style.position = "relative";

        // Stage
        const stage = document.createElement("div");
        stage.className = "slider-stage";
        stage.style.display = "flex";
        stage.style.transition = "transform 0.4s ease-in-out";
        stage.style.width = "100%";

        slides.forEach((slide) => {
          const slideWrapper = document.createElement("div");
          slideWrapper.className = "slider-slide";
          slideWrapper.style.flex = "0 0 100%";
          slideWrapper.style.minWidth = "0";
          slideWrapper.style.boxSizing = "border-box";
          slideWrapper.style.paddingRight = "15px";
          slideWrapper.style.paddingLeft = "15px";
          slideWrapper.appendChild(slide);
          stage.appendChild(slideWrapper);
        });

        viewport.appendChild(stage);
        carouselEl.appendChild(viewport);

        const isTeam = carouselEl.classList.contains("team-carousel");
        const isTestimonial = carouselEl.classList.contains("testimonial-carousel");
        const isClient = carouselEl.classList.contains("client-carousel");

        let itemsPerView = { mobile: 1, tablet: 2, desktop: 3 };

        if (isTeam || isTestimonial) {
          itemsPerView = { mobile: 1, tablet: 2, desktop: 3 };
        } else if (isClient) {
          itemsPerView = { mobile: 2, tablet: 3, desktop: 5 };
        }

        let activeIndex = 0;
        const totalSlides = slides.length;

        const updateSlider = () => {
          let visibleItems = itemsPerView.desktop;
          if (window.innerWidth < 768) {
            visibleItems = itemsPerView.mobile;
          } else if (window.innerWidth < 992) {
            visibleItems = itemsPerView.tablet;
          }

          const percentWidth = 100 / visibleItems;
          const slideElements = stage.querySelectorAll(".slider-slide");
          slideElements.forEach((el) => {
            (el as HTMLElement).style.flex = `0 0 ${percentWidth}%`;
          });

          const maxIndex = Math.max(0, totalSlides - visibleItems);
          if (activeIndex > maxIndex) activeIndex = maxIndex;

          stage.style.transform = `translateX(-${activeIndex * percentWidth}%)`;
        };

        // Resize listener
        window.addEventListener("resize", updateSlider);
        updateSlider();

        // Autoplay if requested
        if (isTestimonial || isClient) {
          setInterval(() => {
            let visibleItems = itemsPerView.desktop;
            if (window.innerWidth < 768) {
              visibleItems = itemsPerView.mobile;
            } else if (window.innerWidth < 992) {
              visibleItems = itemsPerView.tablet;
            }
            const maxIndex = Math.max(0, totalSlides - visibleItems);
            if (maxIndex > 0) {
              activeIndex = (activeIndex + 1) % (maxIndex + 1);
              updateSlider();
            }
          }, 3000);
        }
      });
    };

    // Delay carousel initialization to ensure DOM is fully rendered
    setTimeout(initCarousels, 300);

    // 6. Number Counter Animation
    const initCounters = () => {
      const counters = document.querySelectorAll("[id*='statistics_count-']");
      counters.forEach((counter) => {
        if (counter.classList.contains("counter-initialized")) return;
        counter.classList.add("counter-initialized");

        const pct = counter.getAttribute("data-statistics_percent");
        if (!pct) return;

        const target = parseInt(pct, 10);
        if (isNaN(target)) return;

        let current = 0;
        const duration = 2000;
        const stepTime = 30;
        const increment = target / (duration / stepTime);

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target.toString();
            clearInterval(timer);
          } else {
            counter.textContent = Math.ceil(current).toString();
          }
        }, stepTime);
      });
    };

    // 7. Skill Bar Counter Animation
    const initSkillBars = () => {
      const skills = document.querySelectorAll("[id*='skill_type1_count-']");
      skills.forEach((skill) => {
        if (skill.classList.contains("skill-initialized")) return;
        skill.classList.add("skill-initialized");

        const pct = skill.getAttribute("data-skill_percent");
        if (!pct) return;

        const target = parseInt(pct, 10);
        if (isNaN(target)) return;

        // Animate counter number
        let current = 0;
        const duration = 2000;
        const stepTime = 30;
        const increment = target / (duration / stepTime);

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            skill.textContent = target.toString();
            clearInterval(timer);
          } else {
            skill.textContent = Math.ceil(current).toString();
          }
        }, stepTime);

        // Animate width
        const idParts = skill.id.split("-");
        const idx = idParts[idParts.length - 1];
        const bar = document.getElementById(`skill_bar1_count-${idx}`);
        if (bar) {
          (bar as HTMLElement).style.width = "0%";
          setTimeout(() => {
            (bar as HTMLElement).style.transition = "width 2s ease";
            (bar as HTMLElement).style.width = `${target}%`;
          }, 50);
        }
      });
    };

    // Simple Intersection Observer to start counters and skill bars when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("counter-section") || entry.target.querySelector(".counter-block")) {
            initCounters();
          }
          if (entry.target.classList.contains("skill-section") || entry.target.querySelector(".skill-section")) {
            initSkillBars();
          }
        }
      });
    }, { threshold: 0.1 });

    const counterSections = document.querySelectorAll(".counter-section, .skill-section");
    counterSections.forEach((section) => observer.observe(section));

    // Fallback if IntersectionObserver is not supported or does not trigger
    setTimeout(() => {
      initCounters();
      initSkillBars();
    }, 1000);

    return () => {
      window.removeEventListener("load", hideLoader);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleSlidePanelClick);
      document.removeEventListener("click", handleBackToTopClick);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
