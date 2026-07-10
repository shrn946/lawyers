"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LawfinityClientManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize AOS (Animate On Scroll) dynamically (Non-blocking)
    const initAos = () => {
      if (typeof window === "undefined") return;
      
      const setupAos = () => {
        if ((window as any).AOS) {
          (window as any).AOS.init({
            duration: 1000,
            offset: 120,
            easing: "ease-in-out",
            once: true,
          });
          (window as any).AOS.refresh();
        }
      };

      if ((window as any).AOS) {
        setupAos();
      } else {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
        script.async = true;
        script.onload = setupAos;
        document.body.appendChild(script);
      }
    };

    // 2. Initialize Counters (animating numbers)
    const initCounters = () => {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        if (counter.classList.contains("counter-initialized")) return;
        counter.classList.add("counter-initialized");

        const targetText = counter.textContent || "0";
        const target = parseInt(targetText.replace(/[^0-9]/g, ""), 10);
        if (isNaN(target) || target <= 0) return;

        let current = 0;
        const duration = 2000; // 2 seconds
        const stepTime = 16; // ~60fps
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = targetText.includes("+") ? `${target}+` : target.toString();
            clearInterval(timer);
          } else {
            counter.textContent = Math.ceil(current).toString();
          }
        }, stepTime);
      });
    };

    // 3. Initialize Accordion (FAQ toggles)
    const handleAccordionClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const toggleBtn = target.closest('[data-toggle="collapse"]');
      if (!toggleBtn) return;

      e.preventDefault();
      const selector = toggleBtn.getAttribute("data-target");
      if (!selector) return;

      const collapseEl = document.querySelector(selector) as HTMLElement;
      if (!collapseEl) return;

      const isShown = collapseEl.classList.contains("show");
      
      // Accordion group behavior
      const accordionContainer = toggleBtn.closest(".accordian-inner, #faq_accordion, #faq_accordion2");
      if (accordionContainer) {
        const activeCollapses = accordionContainer.querySelectorAll(".collapse.show");
        activeCollapses.forEach((el) => {
          if (el !== collapseEl) {
            el.classList.remove("show");
            const btn = accordionContainer.querySelector(`[data-target="#${el.id}"]`);
            if (btn) btn.classList.add("collapsed");
          }
        });
      }

      if (isShown) {
        collapseEl.classList.remove("show");
        toggleBtn.classList.add("collapsed");
      } else {
        collapseEl.classList.add("show");
        toggleBtn.classList.remove("collapsed");
      }
    };

    // 4. Initialize Custom Dependency-Free Owl Carousel Emulator
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

        const isBannerWrapper = carouselEl.closest(".banner_wrapper");
        const isCaseCon = carouselEl.closest(".case-con");
        const isArticleCon = carouselEl.closest(".article-con");
        const isLegalSituation = carouselEl.closest(".legal_situation_portfolio");
        const isExpertise = carouselEl.closest(".expertise-con");
        
        let itemsPerView = { mobile: 1, tablet: 1, desktop: 1 };
        let showNav = false;
        let showDots = true;

        if (isBannerWrapper) {
          itemsPerView = { mobile: 1, tablet: 2, desktop: 4 };
          showDots = false;
        } else if (isCaseCon) {
          itemsPerView = { mobile: 1, tablet: 3, desktop: 5 };
          showDots = true;
        } else if (isArticleCon || isLegalSituation || isExpertise) {
          itemsPerView = { mobile: 1, tablet: 2, desktop: 3 };
          showDots = true;
        } else {
          itemsPerView = { mobile: 1, tablet: 1, desktop: 1 };
          showDots = !carouselEl.closest(".testimonial-con") && !carouselEl.closest(".faq_testimonial-con");
          showNav = !!carouselEl.closest(".testimonial-con") || !!carouselEl.closest(".faq_testimonial-con");
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

          if (showDots) {
            const dots = carouselEl.querySelectorAll(".owl-dot");
            dots.forEach((dot, idx) => {
              if (idx === activeIndex) {
                dot.classList.add("active");
              } else {
                dot.classList.remove("active");
              }
            });
          }
        };

        // Dots Generator
        if (showDots) {
          const dotsContainer = document.createElement("div");
          dotsContainer.className = "owl-dots";
          for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("button");
            dot.className = `owl-dot ${i === 0 ? "active" : ""}`;
            dot.innerHTML = "<span></span>";
            dot.addEventListener("click", () => {
              activeIndex = i;
              updateSlider();
            });
            dotsContainer.appendChild(dot);
          }
          carouselEl.appendChild(dotsContainer);
        }

        // Nav Generator
        if (showNav) {
          const navContainer = document.createElement("div");
          navContainer.className = "owl-nav";
          
          const prev = document.createElement("button");
          prev.className = "owl-prev";
          prev.innerHTML = '<span aria-label="Previous">‹</span>';
          prev.addEventListener("click", () => {
            if (activeIndex > 0) {
              activeIndex--;
            } else {
              activeIndex = totalSlides - 1;
            }
            updateSlider();
          });

          const next = document.createElement("button");
          next.className = "owl-next";
          next.innerHTML = '<span aria-label="Next">›</span>';
          next.addEventListener("click", () => {
            if (activeIndex < totalSlides - 1) {
              activeIndex++;
            } else {
              activeIndex = 0;
            }
            updateSlider();
          });

          navContainer.appendChild(prev);
          navContainer.appendChild(next);
          carouselEl.appendChild(navContainer);
        }

        // Make visible and set up custom styles
        carouselEl.setAttribute("style", "display: block !important; opacity: 1 !important;");

        // Autoplay Interval
        let autoplayInterval = setInterval(() => {
          let visibleItems = itemsPerView.desktop;
          if (window.innerWidth < 768) {
            visibleItems = itemsPerView.mobile;
          } else if (window.innerWidth < 992) {
            visibleItems = itemsPerView.tablet;
          }
          const maxIndex = Math.max(0, totalSlides - visibleItems);
          if (activeIndex < maxIndex) {
            activeIndex++;
          } else {
            activeIndex = 0;
          }
          updateSlider();
        }, 4500);

        carouselEl.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
        carouselEl.addEventListener("mouseleave", () => {
          autoplayInterval = setInterval(() => {
            let visibleItems = itemsPerView.desktop;
            if (window.innerWidth < 768) {
              visibleItems = itemsPerView.mobile;
            } else if (window.innerWidth < 992) {
              visibleItems = itemsPerView.tablet;
            }
            const maxIndex = Math.max(0, totalSlides - visibleItems);
            if (activeIndex < maxIndex) {
              activeIndex++;
            } else {
              activeIndex = 0;
            }
            updateSlider();
          }, 4500);
        });

        // Run initial configuration
        window.addEventListener("resize", updateSlider);
        updateSlider();
      });
    };

    // 5. Initialize Bootstrap Carousels (standard slide carousels)
    const initBootstrapCarousels = () => {
      const carousels = document.querySelectorAll(".carousel.slide");
      carousels.forEach((carouselEl) => {
        if (carouselEl.classList.contains("bs-carousel-initialized")) return;
        carouselEl.classList.add("bs-carousel-initialized");

        const items = Array.from(carouselEl.querySelectorAll(".carousel-item"));
        const indicators = Array.from(carouselEl.querySelectorAll(".carousel-indicators li"));
        const prevBtns = Array.from(carouselEl.querySelectorAll("[data-slide='prev'], .carousel-control-prev"));
        const nextBtns = Array.from(carouselEl.querySelectorAll("[data-slide='next'], .carousel-control-next"));

        if (items.length === 0) return;

        let activeIdx = items.findIndex(item => item.classList.contains("active"));
        if (activeIdx === -1) {
          activeIdx = 0;
          items[0].classList.add("active");
        }

        const showSlide = (index: number) => {
          let nextIdx = index;
          if (nextIdx >= items.length) {
            nextIdx = 0;
          } else if (nextIdx < 0) {
            nextIdx = items.length - 1;
          }

          activeIdx = nextIdx;

          items.forEach((item, idx) => {
            if (idx === activeIdx) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });

          indicators.forEach((indicator, idx) => {
            const slideToAttr = indicator.getAttribute("data-slide-to");
            if (slideToAttr !== null && parseInt(slideToAttr, 10) === activeIdx) {
              indicator.classList.add("active");
            } else if (idx === activeIdx) {
              indicator.classList.add("active");
            } else {
              indicator.classList.remove("active");
            }
          });
        };

        // Bind indicator clicks
        indicators.forEach((indicator) => {
          indicator.addEventListener("click", () => {
            const slideTo = indicator.getAttribute("data-slide-to");
            if (slideTo !== null) {
              showSlide(parseInt(slideTo, 10));
            }
          });
        });

        // Bind control button clicks
        prevBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            showSlide(activeIdx - 1);
          });
        });

        nextBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            showSlide(activeIdx + 1);
          });
        });

        // Autoplay if data-ride="carousel" is set
        if (carouselEl.getAttribute("data-ride") === "carousel") {
          let autoplayInterval = setInterval(() => {
            showSlide(activeIdx + 1);
          }, 5000);

          carouselEl.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
          carouselEl.addEventListener("mouseleave", () => {
            autoplayInterval = setInterval(() => {
              showSlide(activeIdx + 1);
            }, 5000);
          });
        }
      });
    };

    // 6. Initialize Video Lightboxes
    const handleVideoPopup = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const playBtn = target.closest(".popup-vimeo, .video-playicon, .client-videoicon");
      if (!playBtn) return;

      e.preventDefault();
      const videoUrl = playBtn.getAttribute("href") || "https://www.youtube.com/embed/5HkpeZ5uFvc";
      
      const modal = document.createElement("div");
      modal.className = "video-modal-overlay";
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.backgroundColor = "rgba(0,0,0,0.85)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.zIndex = "99999";
      modal.style.cursor = "pointer";

      const container = document.createElement("div");
      container.style.position = "relative";
      container.style.width = "80%";
      container.style.maxWidth = "800px";
      container.style.aspectRatio = "16/9";

      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "&times;";
      closeBtn.style.position = "absolute";
      closeBtn.style.top = "-40px";
      closeBtn.style.right = "0";
      closeBtn.style.backgroundColor = "transparent";
      closeBtn.style.border = "none";
      closeBtn.style.color = "white";
      closeBtn.style.fontSize = "30px";
      closeBtn.style.cursor = "pointer";

      let embedUrl = videoUrl;
      if (videoUrl.includes("vimeo.com")) {
        const id = videoUrl.split("/").pop();
        embedUrl = `https://player.vimeo.com/video/${id}?autoplay=1`;
      } else if (videoUrl.includes("youtube.com/watch")) {
        const urlParams = new URLSearchParams(new URL(videoUrl).search);
        const id = urlParams.get("v");
        embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;
      }

      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", embedUrl);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "autoplay; encrypted-media");
      iframe.setAttribute("allowfullscreen", "true");
      iframe.style.width = "100%";
      iframe.style.height = "100%";

      container.appendChild(closeBtn);
      container.appendChild(iframe);
      modal.appendChild(container);
      document.body.appendChild(modal);

      const closeModal = () => modal.remove();
      modal.addEventListener("click", closeModal);
      closeBtn.addEventListener("click", closeModal);
    };

    // 7. Handle dynamic visible blog loading (load more page)
    const handleLoadMore = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const loadMoreBtn = target.closest("#loadMore");
      if (!loadMoreBtn) return;

      e.preventDefault();
      
      const hiddenBlogs = document.querySelectorAll(".hide-blog");
      let shownCount = 0;
      hiddenBlogs.forEach((blog) => {
        const style = (blog as HTMLElement).style;
        if (style.display === "none" && shownCount < 3) {
          style.display = "block";
          shownCount++;
        }
      });

      let anyHidden = false;
      hiddenBlogs.forEach((blog) => {
        if ((blog as HTMLElement).style.display === "none") {
          anyHidden = true;
        }
      });

      if (!anyHidden) {
        (loadMoreBtn as HTMLElement).style.display = "none";
      }
    };

    // Initialize hidden elements on Load More page on mount
    const initLoadMoreBlogs = () => {
      const hiddenBlogs = document.querySelectorAll(".hide-blog");
      if (hiddenBlogs.length > 0) {
        hiddenBlogs.forEach((blog, idx) => {
          if (idx >= 3) {
            (blog as HTMLElement).style.display = "none";
          } else {
            (blog as HTMLElement).style.display = "block";
          }
        });
      }
    };

    // Setup triggers
    const timerAos = setTimeout(initAos, 150);
    const timerCarousels = setTimeout(initCarousels, 250);
    const timerBsCarousels = setTimeout(initBootstrapCarousels, 350);
    const timerCounters = setTimeout(initCounters, 450);
    const timerLoadMore = setTimeout(initLoadMoreBlogs, 550);

    const observer = new MutationObserver(() => {
      initCarousels();
      initCounters();
      initBootstrapCarousels();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("click", handleAccordionClick);
    document.addEventListener("click", handleVideoPopup);
    document.addEventListener("click", handleLoadMore);

    return () => {
      clearTimeout(timerAos);
      clearTimeout(timerCarousels);
      clearTimeout(timerBsCarousels);
      clearTimeout(timerCounters);
      clearTimeout(timerLoadMore);
      observer.disconnect();
      document.removeEventListener("click", handleAccordionClick);
      document.removeEventListener("click", handleVideoPopup);
      document.removeEventListener("click", handleLoadMore);
    };
  }, [pathname]);

  return null;
}
export default LawfinityClientManager;
