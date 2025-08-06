document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Hero Slider
    const slider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    const indicators = document.querySelector('.slide-indicators');
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Create indicators
    for (let i = 0; i < slideCount; i++) {
        const indicator = document.createElement('span');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicators.appendChild(indicator);
    }
    
    const indicatorDots = document.querySelectorAll('.slide-indicators span');
    
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        indicatorDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        currentSlide = (index + slideCount) % slideCount;
        updateSlider();
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.floor(current);
                
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 20);
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats-grid')) {
                    animateStats();
                }
                
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animateElements = document.querySelectorAll('.stats-grid, .about-card, .service-card, .project-card, .csr-card, .feature-item, .job-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Projects Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Sample projects data - in a real app, this would come from an API
    const projects = [
        {
            id: 1,
            title: 'Kirinyaga University Tuition Block',
            category: 'buildings',
            location: 'Kirinyaga, Kenya',
            image: 'images/csr-image.jpg'
        },
        {
            id: 2,
            title: 'Mombasa-Mariakani Highway',
            category: 'roads',
            location: 'Coast, Kenya',
            image: 'images/project-highway.jpg'
        },
        {
            id: 3,
            title: 'Nyali Bridge',
            category: 'bridges',
            location: 'Mombasa, Kenya',
            image: 'images/project-bridge.jpg'
        },
        {
            id: 4,
            title: 'Kigali Commercial Tower',
            category: 'buildings',
            location: 'Kigali, Rwanda',
            image: 'images/project-building.jpg'
        },
        {
            id: 5,
            title: 'Arusha Water Treatment Plant',
            category: 'water',
            location: 'Arusha, Tanzania',
            image: 'images/project-water.jpg'
        },
        {
            id: 6,
            title: 'Kampala Northern Bypass',
            category: 'roads',
            location: 'Kampala, Uganda',
            image: 'images/project-road2.jpg'
        }
    ];
    
    // Display projects
    function displayProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-overlay">
                    <span class="project-category">${project.category.toUpperCase()}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-location">
                        <i class="fas fa-map-marker-alt"></i> ${project.location}
                    </p>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Display filtered projects
            displayProjects(filter);
        });
    });
    
    // Initialize projects
    displayProjects();
    
    // Sample jobs data
    const jobs = [
        {
            title: 'Civil Engineer',
            location: 'Nairobi, Kenya',
            type: 'Full-time'
        },
        {
            title: 'Project Manager',
            location: 'Kampala, Uganda',
            type: 'Contract'
        },
        {
            title: 'Quantity Surveyor',
            location: 'Dar es Salaam, Tanzania',
            type: 'Full-time'
        },
        {
            title: 'Construction Supervisor',
            location: 'Mombasa, Kenya',
            type: 'Full-time'
        }
    ];
    
    // Display jobs
    const jobsList = document.querySelector('.jobs-list');
    
    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        
        jobItem.innerHTML = `
            <h4 class="job-title">${job.title}</h4>
            <p class="job-location">
                <i class="fas fa-map-marker-alt"></i> ${job.location}
            </p>
            <span class="job-type">${job.type}</span>
        `;
        
        jobsList.appendChild(jobItem);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.elements['name'].value;
        const email = this.elements['email'].value;
        const subject = this.elements['subject'].value;
        const message = this.elements['message'].value;
        
        // In a real app, you would send this data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
    
    // Initialize animations on page load
    setTimeout(() => {
        document.querySelector('.slide-title').style.animation = 'fadeInUp 1s ease forwards';
        document.querySelector('.slide-text').style.animation = 'fadeInUp 1s ease 0.3s forwards';
        document.querySelector('.slide .btn').style.animation = 'fadeInUp 1s ease 0.6s forwards';
    }, 500);
});
