/**
 * Corban Construction Ltd - Main JavaScript
 * Version: 2.0
 * Features: Slider, Gallery, Form Validation, Lazy Loading, Accessibility
 */

// Define images array globally (outside the IIFE)
const galleryImages = [
  // Construction / In Progress Projects
  {
    src: "images/church_structure.jpeg",
    category: "construction",
    title: "Church Structure - In Progress",
  },
  {
    src: "images/corban_blding.jpeg",
    category: "construction",
    title: "Corban Building Construction",
  },
  {
    src: "images/incomplete_church_structure.jpeg",
    category: "construction",
    title: "Church Structure Development",
  },
  {
    src: "images/incomplete_kyu_kilele_tuition_block.jpeg",
    category: "construction",
    title: "KYU Kilele Tuition Block - In Progress",
  },
  {
    src: "images/incomplete_rentals.jpeg",
    category: "construction",
    title: "Rental Units Under Construction",
  },
  {
    src: "images/incomplete_rentals_sideview.jpeg",
    category: "construction",
    title: "Rental Units - Side View",
  },
  {
    src: "images/incomplete_stairway_kyu_kilele_tuition_block.jpeg",
    category: "construction",
    title: "KYU Kilele Stairway Construction",
  },
  {
    src: "images/kyu_kilele_tuition_block.jpeg",
    category: "construction",
    title: "KYU Kilele Tuition Block",
  },
  {
    src: "images/kyu_kilele_sideview.jpeg",
    category: "construction",
    title: "KYU Kilele - Side View",
  },
  {
    src: "images/kyu_kilele_rooftop.jpeg",
    category: "construction",
    title: "KYU Kilele Rooftop View",
  },

  // Completed Projects
  {
    src: "images/building_frontview.jpeg",
    category: "completed",
    title: "Building Front View - Completed",
  },
  {
    src: "images/building_rooftop.jpeg",
    category: "completed",
    title: "Building Rooftop - Modern Architecture",
  },
  {
    src: "images/daystar_chapel_2.jpeg",
    category: "completed",
    title: "Daystar Chapel",
  },
  {
    src: "images/daystar_chapel.jpeg",
    category: "completed",
    title: "Daystar Chapel - Alternate View",
  },
  {
    src: "images/daystar_hostel.jpeg",
    category: "completed",
    title: "Daystar Hostel",
  },
  {
    src: "images/daystar_hostel_project_2.jpeg",
    category: "completed",
    title: "Daystar Hostel Project",
  },
  {
    src: "images/daystar.jpeg",
    category: "completed",
    title: "Daystar University Project",
  },
  {
    src: "images/kyu_hostels.jpeg",
    category: "completed",
    title: "KYU Hostels",
  },
  {
    src: "images/kyu_lecture_theatre.jpeg",
    category: "completed",
    title: "KYU Lecture Theatre",
  },
  {
    src: "images/kyu_tuition_complex_1.jpeg",
    category: "completed",
    title: "KYU Tuition Complex",
  },
  {
    src: "images/kyu_tuition_complex_2.jpeg",
    category: "completed",
    title: "KYU Tuition Complex - Alternate View",
  },
  {
    src: "images/rentals_frontview.jpeg",
    category: "completed",
    title: "Completed Rental Units - Front View",
  },
  {
    src: "images/rentals_rooftop_view.jpeg",
    category: "completed",
    title: "Rental Units - Rooftop View",
  },

  // Pavements & Road Construction
  {
    src: "images/giz_pavements.jpeg",
    category: "pavements",
    title: "GIZ Pavements Project",
  },
  {
    src: "images/pavements_and_structure.jpeg",
    category: "pavements",
    title: "Pavements and Structure",
  },
  {
    src: "images/pavements.jpeg",
    category: "pavements",
    title: "Pavement Construction",
  },
  {
    src: "images/machakos_perimeter_wall.jpeg",
    category: "pavements",
    title: "Machakos Perimeter Wall",
  },
  {
    src: "images/zimmerman_basketball_court.jpeg",
    category: "pavements",
    title: "Zimmerman Basketball Court",
  },

  // Various Projects by Name/Location
  {
    src: "images/cyka_project_2.jpeg",
    category: "projects",
    title: "CYKA Project",
  },
  {
    src: "images/cyka_project.jpeg",
    category: "projects",
    title: "CYKA Project - Construction",
  },
  {
    src: "images/dagoretti_riruta.jpeg",
    category: "projects",
    title: "Dagoretti Riruta Project",
  },
  {
    src: "images/elicates.jpeg",
    category: "projects",
    title: "Elicates Project",
  },
  {
    src: "images/ilu_project.jpeg",
    category: "projects",
    title: "ILU Project",
  },
  {
    src: "images/invergara_project.jpeg",
    category: "projects",
    title: "Invergara Project",
  },
  {
    src: "images/kabarak_project.jpeg",
    category: "projects",
    title: "Kabarak Project",
  },
  {
    src: "images/karen_project.jpeg",
    category: "projects",
    title: "Karen Project",
  },
  {
    src: "images/kdb_project_1.jpeg",
    category: "projects",
    title: "KDB Project",
  },
  {
    src: "images/kdb_project.jpeg",
    category: "projects",
    title: "KDB Project - Alternate View",
  },
  {
    src: "images/kesal_project.jpeg",
    category: "projects",
    title: "KESAL Project",
  },
  {
    src: "images/mariene_project.jpeg",
    category: "projects",
    title: "Mariene Project",
  },
  {
    src: "images/meru_project.jpeg",
    category: "projects",
    title: "Meru Project",
  },
  {
    src: "images/mombasa_project.jpeg",
    category: "projects",
    title: "Mombasa Project",
  },
  {
    src: "images/muranga_phase_1.jpeg",
    category: "projects",
    title: "Murang'a Project - Phase 1",
  },
  {
    src: "images/muranga_phase_2.jpeg",
    category: "projects",
    title: "Murang'a Project - Phase 2",
  },
  {
    src: "images/pgs_project.jpeg",
    category: "projects",
    title: "PGS Project",
  },
  {
    src: "images/vendramini_project.jpeg",
    category: "projects",
    title: "Vendramini Project",
  },

  // Medical/Healthcare Projects
  {
    src: "images/knh_bunker.jpeg",
    category: "healthcare",
    title: "KNH Bunker Project",
  },
  {
    src: "images/knh_eighth_floor.jpeg",
    category: "healthcare",
    title: "KNH Eighth Floor",
  },

  // Wema Blocks (Multiple Buildings)
  {
    src: "images/wema_block_1.jpeg",
    category: "residential",
    title: "Wema Block 1",
  },
  {
    src: "images/wema_block_2.jpeg",
    category: "residential",
    title: "Wema Block 2",
  },
  {
    src: "images/wema_block_3.jpeg",
    category: "residential",
    title: "Wema Block 3",
  },
  {
    src: "images/wema_block_5.jpeg",
    category: "residential",
    title: "Wema Block 5",
  },

  // Renovation Projects
  {
    src: "images/zimmerman_renovation_1.jpeg",
    category: "renovation",
    title: "Zimmerman Renovation Project",
  },
  {
    src: "images/zimmerman_renovation_2.jpeg",
    category: "renovation",
    title: "Zimmerman Renovation - Interior",
  },
];

// Enhanced Carousel with touch/drag scrolling
const EnhancedCarousel = {
  init: function () {
    this.carousels = document.querySelectorAll(".carousel-container");
    if (!this.carousels.length) return;

    this.carousels.forEach((carousel) => {
      const trackContainer = carousel.querySelector(
        ".carousel-track-container",
      );
      const track = carousel.querySelector(".carousel-track");
      const prevBtn = carousel.querySelector(".carousel-prev");
      const nextBtn = carousel.querySelector(".carousel-next");

      if (!trackContainer || !track) return;

      // Store scroll position for drag functionality
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      // Enable drag-to-scroll (mouse)
      trackContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - trackContainer.offsetLeft;
        scrollLeft = trackContainer.scrollLeft;
        trackContainer.style.cursor = "grabbing";
        trackContainer.style.userSelect = "none";
      });

      trackContainer.addEventListener("mouseleave", () => {
        isDragging = false;
        trackContainer.style.cursor = "grab";
        trackContainer.style.userSelect = "";
      });

      trackContainer.addEventListener("mouseup", () => {
        isDragging = false;
        trackContainer.style.cursor = "grab";
        trackContainer.style.userSelect = "";
      });

      trackContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - trackContainer.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        trackContainer.scrollLeft = scrollLeft - walk;
      });

      // Touch events for mobile
      trackContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX - trackContainer.offsetLeft;
        scrollLeft = trackContainer.scrollLeft;
      });

      trackContainer.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX - trackContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        trackContainer.scrollLeft = scrollLeft - walk;
      });

      // Button navigation (existing functionality)
      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          trackContainer.scrollBy({
            left: -300,
            behavior: "smooth",
          });
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          trackContainer.scrollBy({
            left: 300,
            behavior: "smooth",
          });
        });
      }

      // Set cursor style
      trackContainer.style.cursor = "grab";
    });
  },
};

(function () {
  "use strict";

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  const utils = {
    debounce: function (func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    throttle: function (func, limit) {
      let inThrottle;
      return function (...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },

    isInViewport: function (element, threshold = 0.1) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) *
            (1 - threshold) && rect.bottom >= 0
      );
    },

    sanitizeInput: function (input) {
      const div = document.createElement("div");
      div.textContent = input;
      return div.innerHTML;
    },

    validateEmail: function (email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  };

  // ============================================
  // IMAGE MODAL
  // ============================================

  const ImageModal = {
    init: function () {
      this.modal = document.getElementById("imageModal");
      this.image = document.getElementById("modalImage");
      this.title = document.getElementById("modalTitle");
      this.description = document.getElementById("modalDescription");
      this.location = document.getElementById("modalLocation");
      this.closeBtn = document.getElementById("modalClose");
      this.backdrop = this.modal?.querySelector(".modal-backdrop");

      if (!this.modal) return;

      // Close on X button
      this.closeBtn.addEventListener("click", () => this.close());

      // Close on backdrop click (anywhere outside the image)
      this.backdrop.addEventListener("click", () => this.close());

      // Close on Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") this.close();
      });
    },

    open: function ({ src, title = "", description = "", location = "" }) {
      this.image.src = src;
      this.image.alt = title;
      this.title.textContent = title;
      this.description.textContent = description;
      this.location.innerHTML = location
        ? `<i class="fas fa-map-marker-alt"></i> ${location}`
        : "";

      this.modal.classList.add("open");
      document.body.style.overflow = "hidden"; // prevent background scroll

      this.closeBtn.focus();
    },

    close: function () {
      this.modal.classList.remove("open");
      document.body.style.overflow = "";
      // Clear src after animation so there's no flash on next open
      setTimeout(() => {
        this.image.src = "";
      }, 250);
    },
  };

  // ============================================
  // GALLERY CAROUSEL - Moved inside IIFE but before initialization
  // ============================================

  class GalleryCarousel {
    constructor(imagesData) {
      this.images = imagesData;
      this.carousels = {};
      this.currentPositions = {};
      this.init();
    }

    init() {
      this.populateCarousels();
      this.initCarousels();
      this.initFilters();
    }

    populateCarousels() {
      const categories = {
        all: this.images,
        construction: this.images.filter(
          (img) => img.category === "construction",
        ),
        completed: this.images.filter((img) => img.category === "completed"),
        pavements: this.images.filter((img) => img.category === "pavements"),
        projects: this.images.filter((img) => img.category === "projects"),
        healthcare: this.images.filter((img) => img.category === "healthcare"),
        residential: this.images.filter(
          (img) => img.category === "residential",
        ),
        renovation: this.images.filter((img) => img.category === "renovation"),
      };

      for (const [category, images] of Object.entries(categories)) {
        const track = document.getElementById(`carousel-${category}`);
        if (!track) continue; // ← also safer than just checking if (track)

        track.innerHTML = images
          .map((img) => this.createGalleryItem(img))
          .join("");

        // Attach modal clicks while track is still in scope
        track.querySelectorAll(".gallery-item").forEach((item) => {
          const img = item.querySelector("img");
          item.style.cursor = "pointer";
          item.addEventListener("click", () => {
            ImageModal.open({
              src: img.src,
              title: img.alt,
            });
          });
          // New keyboard handler
          item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault(); // stops Space from scrolling the page
              ImageModal.open({
                src: img.src,
                title: img.alt,
              });
            }
          });
        });
      }
    }

    createGalleryItem(image) {
      return `
    <div class="gallery-item" 
         data-category="${image.category}"
         tabindex="0"
         role="button"
         aria-label="View ${image.title}">
      <img 
        src="${image.src}" 
        alt="${image.title}"
        loading="lazy"
      >
      <div class="gallery-item-info">
        <h3>${image.title}</h3>
        <p>${image.description || ""}</p>
        <span class="gallery-item-category">${image.category}</span>
      </div>
    </div>
  `;
    }

    initCarousels() {
      // Initialize carousels for each category
      document.querySelectorAll(".gallery-category").forEach((category) => {
        const categoryName = category.dataset.category;
        const track = category.querySelector(".carousel-track");
        const prevBtn = category.querySelector(".carousel-prev");
        const nextBtn = category.querySelector(".carousel-next");

        if (track && prevBtn && nextBtn) {
          this.carousels[categoryName] = {
            track,
            prevBtn,
            nextBtn,
            currentPosition: 0,
          };

          this.setupCarouselControls(categoryName);
        }
      });
    }

    setupCarouselControls(categoryName) {
      const carousel = this.carousels[categoryName];
      const track = carousel.track;
      const prevBtn = carousel.prevBtn;
      const nextBtn = carousel.nextBtn;

      // Calculate item width including gap
      const updateCarouselDimensions = () => {
        const itemWidth =
          track.querySelector(".gallery-item")?.offsetWidth || 0;
        const gap = 24; // 1.5rem gap
        const itemsPerView = Math.floor(
          track.parentElement.offsetWidth / (itemWidth + gap),
        );
        return { itemWidth, gap, itemsPerView };
      };

      const updateButtons = () => {
        const { itemWidth, gap, itemsPerView } = updateCarouselDimensions();
        const totalItems = track.children.length;
        const maxPosition = Math.max(0, totalItems - itemsPerView);

        prevBtn.disabled = carousel.currentPosition <= 0;
        nextBtn.disabled = carousel.currentPosition >= maxPosition;
      };

      const moveCarousel = (direction) => {
        const { itemWidth, gap, itemsPerView } = updateCarouselDimensions();
        const totalItems = track.children.length;
        const maxPosition = Math.max(0, totalItems - itemsPerView);

        const newPosition = carousel.currentPosition + direction;
        if (newPosition >= 0 && newPosition <= maxPosition) {
          carousel.currentPosition = newPosition;
          const translateX = -(newPosition * (itemWidth + gap));
          track.style.transform = `translateX(${translateX}px)`;
          updateButtons();
        }
      };

      // Event listeners
      prevBtn.addEventListener("click", () => moveCarousel(-1));
      nextBtn.addEventListener("click", () => moveCarousel(1));

      // Update on window resize
      window.addEventListener("resize", () => {
        updateButtons();
      });

      // Initialize
      setTimeout(updateButtons, 100); // Small delay to ensure DOM is ready
    }

    initFilters() {
      const filterButtons = document.querySelectorAll(".gallery-filter");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Update active button
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");

          // Show selected category
          const filterValue = button.dataset.filter;
          document.querySelectorAll(".gallery-category").forEach((category) => {
            if (category.dataset.category === filterValue) {
              category.classList.add("active");
            } else {
              category.classList.remove("active");
            }
          });
        });
      });
    }
  }

  // ============================================
  // COOKIE CONSENT
  // ============================================

  const CookieConsent = {
    init: function () {
      this.banner = document.getElementById("cookieConsent");
      this.acceptBtn = document.getElementById("acceptCookies");
      this.declineBtn = document.getElementById("declineCookies");

      if (!this.banner) return;

      // Check if user has already made a choice
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        setTimeout(() => {
          this.banner.classList.add("show");
        }, 1000);
      }

      this.bindEvents();
    },

    bindEvents: function () {
      if (this.acceptBtn) {
        this.acceptBtn.addEventListener("click", () => this.accept());
      }
      if (this.declineBtn) {
        this.declineBtn.addEventListener("click", () => this.decline());
      }
    },

    accept: function () {
      localStorage.setItem("cookieConsent", "accepted");
      this.banner.classList.remove("show");
      // Enable analytics or other cookies here
    },

    decline: function () {
      localStorage.setItem("cookieConsent", "declined");
      this.banner.classList.remove("show");
      // Disable non-essential cookies
    },
  };

  // ============================================
  // MOBILE NAVIGATION
  // ============================================

  const MobileNav = {
    init: function () {
      this.hamburger = document.getElementById("hamburger");
      this.navList = document.getElementById("navList");
      this.navLinks = document.querySelectorAll(".nav-list a");

      if (!this.hamburger || !this.navList) return;

      this.bindEvents();
    },

    bindEvents: function () {
      // Toggle menu
      this.hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggle();
      });

      // Close when clicking a link
      this.navLinks.forEach((link) => {
        link.addEventListener("click", () => this.close());
      });

      // Close when clicking outside
      document.addEventListener("click", (e) => {
        if (
          this.navList.classList.contains("active") &&
          !this.navList.contains(e.target) &&
          !this.hamburger.contains(e.target)
        ) {
          this.close();
        }
      });

      // Close on escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.navList.classList.contains("active")) {
          this.close();
        }
      });

      // Close on resize if open
      window.addEventListener(
        "resize",
        utils.debounce(() => {
          if (
            window.innerWidth > 768 &&
            this.navList.classList.contains("active")
          ) {
            this.close();
          }
        }, 250),
      );
    },

    toggle: function () {
      const isActive = this.navList.classList.toggle("active");
      this.hamburger.classList.toggle("active");
      this.hamburger.setAttribute("aria-expanded", isActive);
      document.body.style.overflow = isActive ? "hidden" : "";
    },

    close: function () {
      this.navList.classList.remove("active");
      this.hamburger.classList.remove("active");
      this.hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    },
  };

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================

  const HeaderScroll = {
    init: function () {
      this.header = document.querySelector(".header");
      if (!this.header) return;

      window.addEventListener(
        "scroll",
        utils.throttle(() => {
          if (window.scrollY > 100) {
            this.header.classList.add("scrolled");
          } else {
            this.header.classList.remove("scrolled");
          }
        }, 100),
      );
    },
  };

  // ============================================
  // HERO SLIDER
  // ============================================

  const HeroSlider = {
    init: function () {
      this.slider = document.getElementById("heroSlider");
      this.slides = document.querySelectorAll(".slide");
      this.prevBtn = document.getElementById("prevSlide");
      this.nextBtn = document.getElementById("nextSlide");
      this.indicators = document.getElementById("slideIndicators");

      if (!this.slider || this.slides.length === 0) return;

      this.currentSlide = 0;
      this.slideCount = this.slides.length;
      this.interval = null;
      this.isPaused = false;

      this.createIndicators();
      this.bindEvents();
      this.startAutoSlide();
    },

    createIndicators: function () {
      if (!this.indicators) return;

      for (let i = 0; i < this.slideCount; i++) {
        const indicator = document.createElement("button");
        indicator.className = "indicator" + (i === 0 ? " active" : "");
        indicator.setAttribute("aria-label", `Go to slide ${i + 1}`);
        indicator.setAttribute("role", "tab");
        indicator.setAttribute("aria-selected", i === 0 ? "true" : "false");
        indicator.addEventListener("click", () => this.goToSlide(i));
        this.indicators.appendChild(indicator);
      }
    },

    bindEvents: function () {
      if (this.prevBtn) {
        this.prevBtn.addEventListener("click", () => this.prev());
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener("click", () => this.next());
      }

      // Pause on hover
      this.slider.addEventListener("mouseenter", () => this.pause());
      this.slider.addEventListener("mouseleave", () => this.resume());

      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") this.prev();
        if (e.key === "ArrowRight") this.next();
      });

      // Touch support
      let touchStartX = 0;
      let touchEndX = 0;

      this.slider.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true },
      );

      this.slider.addEventListener(
        "touchend",
        (e) => {
          touchEndX = e.changedTouches[0].screenX;
          this.handleSwipe(touchStartX, touchEndX);
        },
        { passive: true },
      );
    },

    handleSwipe: function (startX, endX) {
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) this.next();
        else this.prev();
      }
    },

    updateSlides: function () {
      this.slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === this.currentSlide);
      });

      // Update indicators
      const dots = this.indicators.querySelectorAll(".indicator");
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === this.currentSlide);
        dot.setAttribute(
          "aria-selected",
          index === this.currentSlide ? "true" : "false",
        );
      });
    },

    goToSlide: function (index) {
      this.currentSlide = (index + this.slideCount) % this.slideCount;
      this.updateSlides();
      this.resetInterval();
    },

    next: function () {
      this.goToSlide(this.currentSlide + 1);
    },

    prev: function () {
      this.goToSlide(this.currentSlide - 1);
    },

    startAutoSlide: function () {
      this.interval = setInterval(() => this.next(), 5000);
    },

    resetInterval: function () {
      if (this.interval) {
        clearInterval(this.interval);
        this.startAutoSlide();
      }
    },

    pause: function () {
      this.isPaused = true;
      if (this.interval) {
        clearInterval(this.interval);
      }
    },

    resume: function () {
      if (this.isPaused) {
        this.isPaused = false;
        this.startAutoSlide();
      }
    },
  };

  // ============================================
  // STATS COUNTER ANIMATION
  // ============================================

  const StatsCounter = {
    init: function () {
      this.statsGrid = document.getElementById("statsGrid");
      this.statNumbers = document.querySelectorAll(".stat-number");

      if (!this.statsGrid || this.statNumbers.length === 0) return;

      this.animated = false;
      this.observer = null;

      this.setupObserver();
    },

    setupObserver: function () {
      const options = {
        threshold: 0.5,
        rootMargin: "0px",
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated) {
            this.animate();
            this.animated = true;
            this.observer.unobserve(entry.target);
          }
        });
      }, options);

      this.observer.observe(this.statsGrid);
    },

    animate: function () {
      this.statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-count"));
        const duration = 2000;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(easeOutQuart * target);

          stat.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            stat.textContent = target;
          }
        };

        requestAnimationFrame(updateCount);
      });
    },
  };

  // ============================================
  // PROJECTS FILTER
  // ============================================

  const ProjectsFilter = {
    init: function () {
      this.filterBtns = document.querySelectorAll(".filter-btn");
      this.projectsGrid = document.getElementById("projectsGrid");

      if (!this.projectsGrid) return;

      this.projects = [
        {
          id: 1,
          title: "GIZ Complex Building",
          category: "completed",
          location: "Nairobi, Kenya",
          image: "images/giz_residential.jpeg",
          description: "Complete Theatre Hall",
        },
        {
          id: 2,
          title: "KDB Project, Nairobi",
          category: "completed",
          location: "Nairobi, Kenya",
          image: "images/kdb_project_1.jpeg",
          description: "Modern retail complex with parking for 500 vehicles",
        },
        {
          id: 3,
          title: "Kabarak University Theatre Hall",
          category: "completed",
          location: "Nairobi, Kenya",
          image: "images/kabarak_project.jpeg",
          description: "Incomplete modern chapel building",
        },
        {
          id: 4,
          title: "Meru University",
          category: "under-construction",
          location: "Meru, Kenya",
          image: "images/meru_project.jpeg",
          description: "Modern building in Meru University.",
        },
        {
          id: 5,
          title: "Dagoretti Riruta Construction",
          category: "under-construction",
          location: "Nairobi, Kenya",
          image: "images/dagoretti_riruta.jpeg",
          description:
            "Modern 15-story commercial building currently under construction",
        },
        {
          id: 6,
          title: "KyU Tuition Block 2",
          category: "under-construction",
          location: "Kirinyaga, Kenya",
          image: "images/incomplete_stairway_kyu_kilele_tuition_block.jpeg",
          description: "Large-scale industrial facility under development",
        },
        {
          id: 7,
          title: "KyU Lecture Theatre Pavement",
          category: "infrastructure",
          location: "Nairobi, Kenya",
          image: "images/kyu_lecture_theatre_pavement.jpeg",
          description: "Giz Pavement Project",
        },
        {
          id: 8,
          title: "Pavement",
          category: "infrastructure",
          location: "Nairobi, Kenya",
          image: "images/pavements.jpeg",
          description: "High-quality asphalt pavement leading to airport",
        },
        {
          id: 9,
          title: "Zimmerman Renovation Project",
          category: "renovation",
          location: "Nairobi, Kenya",
          image: "images/zimmerman_renovation_1.jpeg",
          description: "Zimmerman Building Renovation",
        },
      ];

      this.renderProjects("all");
      this.bindEvents();
    },

    bindEvents: function () {
      this.filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const filter = e.target.getAttribute("data-filter");
          this.setActiveFilter(e.target);
          this.renderProjects(filter);
        });
      });
    },

    setActiveFilter: function (activeBtn) {
      this.filterBtns.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      activeBtn.classList.add("active");
      activeBtn.setAttribute("aria-pressed", "true");
    },

    renderProjects: function (filter) {
      const filtered =
        filter === "all"
          ? this.projects
          : this.projects.filter((p) => p.category === filter);

      this.projectsGrid.innerHTML = filtered
        .map(
          (project) => `
                <article class="project-card" data-category="${project.category}">
                    <div class="project-image">
                        <img src="${project.image}" 
                             alt="${project.title}" 
                             loading="lazy">
                    </div>
                    <div class="project-overlay">
                        <span class="project-category">${this.formatCategory(project.category)}</span>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-location">
                            <i class="fas fa-map-marker-alt"></i> ${project.location}
                        </p>
                    </div>
                </article>
            `,
        )
        .join("");

      // Add click handlers to cards
      this.projectsGrid
        .querySelectorAll(".project-card")
        .forEach((card, index) => {
          card.addEventListener("click", () => {
            this.openProjectModal(filtered[index]);
          });
        });
    },

    formatCategory: function (category) {
      return category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },

    openProjectModal: function (project) {
      ImageModal.open({
        src: project.image,
        title: project.title,
        description: project.description,
        location: project.location,
      });
    },
  };

  // ============================================
  // GALLERY (Original - Keeping for backward compatibility)
  // ============================================

  const Gallery = {
    init: function () {
      this.galleryGrid = document.getElementById("galleryGrid");
      this.filterBtns = document.querySelectorAll(".gallery-filter");

      if (!this.galleryGrid) return;

      this.images = galleryImages; // Use the global images array

      this.bindEvents();
      this.renderGallery("all");
    },

    bindEvents: function () {
      this.filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const filter = e.target.getAttribute("data-filter");
          this.setActiveFilter(e.target);
          this.renderGallery(filter);
        });
      });
    },

    setActiveFilter: function (activeBtn) {
      this.filterBtns.forEach((btn) => btn.classList.remove("active"));
      activeBtn.classList.add("active");
    },

    renderGallery: function (filter) {
      const filtered =
        filter === "all"
          ? this.images
          : this.images.filter((img) => img.category === filter);

      this.galleryGrid.innerHTML = filtered
        .map(
          (img) => `
        <div class="gallery-item"
             data-category="${img.category}"
             data-src="${img.src}"
             data-title="${img.title}"
             data-description="${img.description || ""}"
             role="button"
             tabindex="0"
             aria-label="View ${img.title}">
          <img src="${img.src}" alt="${img.title}" loading="lazy">
          <div class="gallery-overlay">
            <div class="gallery-icon">
              <i class="fas fa-expand"></i>
            </div>
          </div>
        </div>
      `,
        )
        .join("");

      // Attach click handlers
      this.galleryGrid.querySelectorAll(".gallery-item").forEach((item) => {
        item.addEventListener("click", () => {
          ImageModal.open({
            src: item.dataset.src,
            title: item.dataset.title,
            description: item.dataset.description,
          });
        });

        // Keyboard accessibility
        item.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") item.click();
        });
      });
    },
  };

  // ============================================
  // JOBS LISTING
  // ============================================

  const JobsListing = {
    init: function () {
      this.jobsList = document.getElementById("jobsList");
      if (!this.jobsList) return;

      this.renderNotHiringMessage();
    },

    renderNotHiringMessage: function () {
      this.jobsList.innerHTML = `
      <div class="job-item" style="text-align: center; padding: 2rem 1rem;">
        <i class="fas fa-info-circle" aria-hidden="true" style="font-size: 2rem; color: #c49a6c; margin-bottom: 1rem;"></i>
        <h4 style="margin-bottom: 0.75rem;">No Current Openings</h4>
        <p style="margin-bottom: 0.5rem;">We are not actively hiring at this time.</p>
        <p style="font-size: 0.9rem; opacity: 0.8;">New opportunities will be announced here as they become available. We encourage you to check back periodically.</p>
      </div>
    `;
    },
  };

  // ============================================
  // CONTACT FORM VALIDATION
  // ============================================

  const ContactForm = {
    init: function () {
      this.form = document.getElementById("contactForm");
      if (!this.form) return;

      this.submitBtn = document.getElementById("submitBtn");
      this.formStatus = document.getElementById("formStatus");

      // Initialize EmailJS with your public key
      if (typeof emailjs !== "undefined") {
        emailjs.init("wGPJFbSvWICyNpjkZ");
      }

      this.bindEvents();
    },

    bindEvents: function () {
      this.form.addEventListener("submit", (e) => this.handleSubmit(e));

      // Real-time validation
      const inputs = this.form.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        input.addEventListener("blur", () => this.validateField(input));
        input.addEventListener("input", () => this.clearError(input));
      });
    },

    validateField: function (field) {
      const value = field.value.trim();
      const errorElement = document.getElementById(`${field.id}-error`);
      let error = "";

      if (field.hasAttribute("required") && !value) {
        error = "This field is required";
      } else if (
        field.type === "email" &&
        value &&
        !this.validateEmail(value)
      ) {
        error = "Please enter a valid email address";
      } else if (field.id === "phone" && value) {
        const phoneRegex =
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(value)) {
          error = "Please enter a valid phone number";
        }
      }

      if (error) {
        field.classList.add("error");
        if (errorElement) {
          errorElement.textContent = error;
          errorElement.classList.add("show");
        }
        return false;
      }

      return true;
    },

    validateEmail: function (email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },

    clearError: function (field) {
      field.classList.remove("error");
      const errorElement = document.getElementById(`${field.id}-error`);
      if (errorElement) {
        errorElement.classList.remove("show");
      }
    },

    validateForm: function () {
      const requiredFields = this.form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      // Check privacy checkbox
      const privacy = document.getElementById("privacy");
      if (privacy && !privacy.checked) {
        isValid = false;
        this.showNotification(
          "Please accept the privacy policy to continue.",
          "error",
        );
      }

      // Honeypot check (anti-spam)
      const website = document.getElementById("website");
      if (website && website.value) {
        isValid = false; // Bot detected
      }

      return isValid;
    },

    showNotification: function (message, type = "error") {
      this.formStatus.textContent = message;
      this.formStatus.className = `form-status ${type}`;
      setTimeout(() => {
        this.formStatus.className = "form-status";
      }, 5000);
    },

    handleSubmit: async function (e) {
      e.preventDefault();

      if (!this.validateForm()) return;

      // Show loading state
      this.submitBtn.classList.add("loading");
      this.submitBtn.disabled = true;

      try {
        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value || "Not provided";
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Prepare template parameters for EmailJS
        const templateParams = {
          from_name: name,
          from_email: email,
          from_phone: phone,
          subject: subject,
          message: message,
          to_email: "mashaephantus2000@gmail.com", // This will be your receiving email
        };

        // Send email using EmailJS
        if (typeof emailjs !== "undefined") {
          const response = await emailjs.send(
            "service_5fhn7ux", // Your Service ID
            "template_z6743bk", // Your Template ID
            templateParams, // Your template parameters
            "cLC-Mj45uWHI1q-WC", // Your Public Key (optional if already initialized)
          );

          if (response.status === 200) {
            this.showSuccess();
            this.form.reset();
          } else {
            throw new Error("Failed to send email");
          }
        } else {
          // Fallback if EmailJS is not loaded
          console.log("EmailJS not loaded - check your internet connection");
          this.showError();
        }
      } catch (error) {
        console.error("Email Error:", error);
        this.showError();
      } finally {
        this.submitBtn.classList.remove("loading");
        this.submitBtn.disabled = false;
      }
    },

    showSuccess: function () {
      this.formStatus.textContent =
        "Thank you! Your message has been sent successfully. We will get back to you soon.";
      this.formStatus.className = "form-status success";
      setTimeout(() => {
        this.formStatus.className = "form-status";
      }, 5000);
    },

    showError: function () {
      this.formStatus.textContent =
        "Sorry, there was an error sending your message. Please try again later or contact us directly via phone.";
      this.formStatus.className = "form-status error";
    },
  };

  // ============================================
  // BACK TO TOP BUTTON
  // ============================================

  const BackToTop = {
    init: function () {
      this.button = document.getElementById("backToTop");
      if (!this.button) return;

      window.addEventListener(
        "scroll",
        utils.throttle(() => {
          if (window.scrollY > 500) {
            this.button.classList.add("show");
          } else {
            this.button.classList.remove("show");
          }
        }, 100),
      );

      this.button.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    },
  };

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  const SmoothScroll = {
    init: function () {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          const href = this.getAttribute("href");
          if (href === "#") return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        });
      });
    },
  };

  // ============================================
  // LAZY LOADING IMAGES
  // ============================================

  const LazyLoader = {
    init: function () {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || img.src;
              img.classList.remove("lazy");
              observer.unobserve(img);
            }
          });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
          imageObserver.observe(img);
        });
      }
    },
  };

  // ============================================
  // NEWSLETTER FORM
  // ============================================
  const NewsletterForm = {
    init: function () {
      this.form = document.getElementById("newsletterForm");
      if (!this.form) return;

      // Create a status message element and insert it after the form
      this.status = document.createElement("p");
      this.status.style.cssText = `
      margin-top: 0.75rem;
      font-size: 0.88rem;
      font-weight: 600;
      min-height: 1.2em;
    `;
      this.form.insertAdjacentElement("afterend", this.status);

      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = this.form.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (email && utils.validateEmail(email)) {
          this.showStatus("Thank you for subscribing!", "success");
          this.form.reset();
        } else {
          this.showStatus("Please enter a valid email address.", "error");
          emailInput.focus();
        }
      });
    },

    showStatus: function (message, type) {
      this.status.textContent = message;
      this.status.style.color =
        type === "success"
          ? "var(--accent-light)" // turquoise — visible on your dark footer
          : "#ff6b6b"; // soft red — visible on dark footer

      // Clear after 4 seconds
      clearTimeout(this.statusTimer);
      this.statusTimer = setTimeout(() => {
        this.status.textContent = "";
      }, 4000);
    },
  };

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================

  const ScrollAnimations = {
    init: function () {
      const animatedElements = document.querySelectorAll(
        ".about-card, .service-card, .timeline-item, .benefit-item",
      );

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 },
        );

        animatedElements.forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          observer.observe(el);
        });
      } else {
        // Fallback for browsers without IntersectionObserver
        animatedElements.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      }
    },
  };

  // ============================================
  // SCROLL SPY - Active nav link on scroll
  // ============================================
  const ScrollSpy = {
    init: function () {
      this.sections = document.querySelectorAll("main section[id]");
      this.navLinks = document.querySelectorAll(".nav-list a[href^='#']");

      if (!this.sections.length || !this.navLinks.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              this.setActiveLink(id);
            }
          });
        },
        {
          rootMargin: "-30% 0px -70% 0px", // Trigger when section is near top of viewport
          threshold: 0,
        },
      );

      this.sections.forEach((section) => observer.observe(section));
      this.setActiveLink(this.sections[0]?.getAttribute("id"));
    },

    setActiveLink: function (id) {
      this.navLinks.forEach((link) => {
        const href = link.getAttribute("href").substring(1);
        link.classList.toggle("active", href === id);
      });
    },
  };

  // ============================================
  // INITIALIZE ALL MODULES
  // ============================================

  document.addEventListener("DOMContentLoaded", function () {
    // Initialize GalleryCarousel with the global images array
    if (document.querySelector(".gallery-carousels")) {
      new GalleryCarousel(galleryImages);
    }

    // Initialize other modules
    // CookieConsent.init(); // Commented out as per original
    MobileNav.init();
    HeaderScroll.init();
    HeroSlider.init();
    StatsCounter.init();
    ProjectsFilter.init();
    ScrollSpy.init();

    // Only initialize original Gallery if the gallery grid exists and carousel doesn't
    if (
      document.getElementById("galleryGrid") &&
      !document.querySelector(".gallery-carousels")
    ) {
      Gallery.init();
    }

    ImageModal.init();
    JobsListing.init();
    ContactForm.init();
    BackToTop.init();
    SmoothScroll.init();
    LazyLoader.init();
    NewsletterForm.init();
    ScrollAnimations.init();
  });

  // Expose utils to global scope for debugging
  window.CorbanUtils = utils;
})();
