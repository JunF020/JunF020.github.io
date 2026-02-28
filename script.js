/**
 * Corban Construction Ltd - Main JavaScript
 * Version: 2.0
 * Features: Slider, Gallery, Form Validation, Lazy Loading, Accessibility
 */

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
          title: "Nairobi Business Complex",
          category: "under-construction",
          location: "Nairobi, Kenya",
          image: "images/incomplete_rentals.jpeg",
          description:
            "Modern 15-story commercial building currently under construction",
        },
        {
          id: 2,
          title: "Mombasa Plaza",
          category: "completed",
          location: "Nairobi, Kenya",
          image: "images/building_frontview.jpeg",
          description: "Completed luxury office complex with retail spaces",
        },
        {
          id: 3,
          title: "Thika Highway Expansion",
          category: "roads",
          location: "Thika, Kenya",
          image:
            "https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?w=800&q=80",
          description:
            "Major highway expansion project with modern interchange",
        },
        {
          id: 4,
          title: "Kilele Tuition Block",
          category: "under-construction",
          location: "Kisumu, Kenya",
          image: "images/incomplete_stairway_kyu_kilele_tuition_block.jpeg",
          description: "Large-scale industrial facility under development",
        },
        {
          id: 5,
          title: "Kirinyaga University Tuition Block",
          category: "completed",
          location: "Nakuru, Kenya",
          image: "images/beautiful_interior.jpeg",
          description: "Modern retail complex with parking for 500 vehicles",
        },
        {
          id: 6,
          title: "Eldoret Airport Road",
          category: "pavements",
          location: "Eldoret, Kenya",
          image: "images/pavements.jpeg",
          description: "High-quality asphalt pavement leading to airport",
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
      // Simple alert for now - can be replaced with a proper modal
      alert(
        `${project.title}\\n\\n${project.description}\\nLocation: ${project.location}`,
      );
    },
  };

  // ============================================
  // GALLERY
  // ============================================

  const Gallery = {
    init: function () {
      this.galleryGrid = document.getElementById("galleryGrid");
      this.filterBtns = document.querySelectorAll(".gallery-filter");

      if (!this.galleryGrid) return;

      this.images = [
        {
          src: "images/church_structure.jpeg",
          category: "construction",
          title: "Construction Site",
        },
        {
          src: "images/corban_blding.jpeg",
          category: "construction",
          title: "Building Progress",
        },
        {
          src: "images/building_frontview.jpeg",
          category: "completed",
          title: "Completed Building",
        },
        {
          src: "images/building_rooftop.jpeg",
          category: "completed",
          title: "Modern Architecture",
        },
        {
          src: "https://images.unsplash.com/photo-1578858653051-f6a21f0f41bb?w=800&q=80",
          category: "equipment",
          title: "Heavy Machinery",
        },
        {
          src: "https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?w=800&q=80",
          category: "equipment",
          title: "Road Equipment",
        },
        {
          src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
          category: "team",
          title: "Our Team",
        },
        {
          src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          category: "team",
          title: "Site Meeting",
        },
      ];

      this.renderGallery("all");
      this.bindEvents();
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
          (img, index) => `
                <a href="${img.src}" 
                   data-lightbox="gallery" 
                   data-title="${img.title}"
                   class="gallery-item"
                   data-category="${img.category}">
                    <img src="${img.src}" 
                         alt="${img.title}" 
                         loading="lazy">
                    <div class="gallery-overlay">
                        <div class="gallery-icon">
                            <i class="fas fa-expand"></i>
                        </div>
                    </div>
                </a>
            `,
        )
        .join("");
    },
  };

  // ============================================
  // JOBS LISTING
  // ============================================

  const JobsListing = {
    init: function () {
      this.jobsList = document.getElementById("jobsList");
      if (!this.jobsList) return;

      this.jobs = [
        {
          title: "Senior Civil Engineer",
          location: "Nairobi, Kenya",
          type: "Full-time",
        },
        {
          title: "Project Manager",
          location: "Mombasa, Kenya",
          type: "Full-time",
        },
        {
          title: "Construction Supervisor",
          location: "Kisumu, Kenya",
          type: "Contract",
        },
        {
          title: "Quantity Surveyor",
          location: "Nairobi, Kenya",
          type: "Full-time",
        },
      ];

      this.renderJobs();
    },

    renderJobs: function () {
      this.jobsList.innerHTML = this.jobs
        .map(
          (job) => `
                <div class="job-item" role="listitem">
                    <h4 class="job-title">${job.title}</h4>
                    <p class="job-location">
                        <i class="fas fa-map-marker-alt"></i> ${job.location}
                    </p>
                    <span class="job-type">${job.type}</span>
                </div>
            `,
        )
        .join("");
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
      emailjs.init("wGPJFbSvWICyNpjkZ");

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
        // Prepare template parameters
        const templateParams = {
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          from_phone: document.getElementById("phone").value || "Not provided",
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value,
          to_email: "mashaephantus2000@gmail.com",
        };

        // Send email using EmailJS
        const response = await emailjs.send(
          "service_upxsof8",
          "template_zn7v6d5",
          templateParams,
        );

        if (response.status === 200) {
          this.showSuccess();
          this.form.reset();
        } else {
          throw new Error("Failed to send email");
        }
      } catch (error) {
        console.error("EmailJS Error:", error);
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
        "Sorry, there was an error sending your message. Please try again later.";
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

      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = this.form.querySelector('input[type="email"]').value;
        if (email && utils.validateEmail(email)) {
          alert("Thank you for subscribing to our newsletter!");
          this.form.reset();
        } else {
          alert("Please enter a valid email address.");
        }
      });
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
  // INITIALIZE ALL MODULES
  // ============================================

  document.addEventListener("DOMContentLoaded", function () {
    CookieConsent.init();
    MobileNav.init();
    HeaderScroll.init();
    HeroSlider.init();
    StatsCounter.init();
    ProjectsFilter.init();
    Gallery.init();
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
