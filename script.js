// Job data
const jobs = [
    {
        id: 1,
        title: "Чат-менеджер",
        company: "Digital Connect",
        location: "Віддалено",
        type: "Повний робочий день",
        salary: "від 30,000 грн",
        description: "Управління чатами, спілкування з клієнтами, підтримка комунікації. Потрібні відмінні комунікативні навички та вміння працювати з великим обсягом повідомлень.",
        requirements: ["Комунікативні навички", "Відповідальність"],
        telegramLink: "https://t.me/+jt2q9O8jqdo1NmUy",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
               </svg>`,
        color: "#ec4899"
    },
    {
        id: 2,
        title: "Віртуальний асистент",
        company: "Remote Support Solutions",
        location: "Віддалено",
        type: "Часткова зайнятість",
        salary: "від 20,000 грн",
        description: "Допомога з плануванням, організацією вхідних повідомлень, управлінням розкладом та іншими адміністративними завданнями.",
        requirements: ["Організаторські здібності", "Уважність до деталей"],
        telegramLink: "https://t.me/+jt2q9O8jqdo1NmUy",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
               </svg>`,
        color: "#3b82f6"
    },
    {
        id: 3,
        title: "Менеджер соціальних мереж",
        company: "Social Growth Agency",
        location: "Віддалено",
        type: "Гнучкий графік",
        salary: "від 25,000 грн",
        description: "Розробка та реалізація стратегій просування у соціальних мережах. Залучення нової аудиторії та підвищення залученості.",
        requirements: ["Досвід у SMM", "Креативність"],
        telegramLink: "https://t.me/+jt2q9O8jqdo1NmUy",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
               </svg>`,
        color: "#ef4444"
    },
    {
        id: 4,
        title: "Контент-менеджер",
        company: "Creative Content Hub",
        location: "Віддалено",
        type: "Проектна робота",
        salary: "від 22,000 грн",
        description: "Створення та оптимізація контенту. Написання привабливих описів, заголовків, організація фото- та відеоматеріалів.",
        requirements: ["Навички копірайтингу", "Креативне мислення"],
        telegramLink: "https://t.me/+jt2q9O8jqdo1NmUy",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <line x1="10" y1="9" x2="8" y2="9"/>
               </svg>`,
        color: "#16a34a"
    },
    {
        id: 5,
        title: "Рекрутер талантів",
        company: "Talent Acquisition Group",
        location: "Віддалено",
        type: "Повний робочий день",
        salary: "від 35,000 грн",
        description: "Пошук та залучення нових талантів. Проведення співбесід, оцінка потенціалу та підтримка на початкових етапах.",
        requirements: ["Досвід у рекрутингу", "Комунікативні навички"],
        telegramLink: "https://t.me/+jt2q9O8jqdo1NmUy",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
               </svg>`,
        color: "#8b5cf6"
    }
];

// DOM elements
let searchInput, jobsGrid, noResults;

// Initialize the application
document.addEventListener("DOMContentLoaded", function() {
    // Get DOM elements
    searchInput = document.getElementById("searchInput");
    jobsGrid = document.getElementById("jobsGrid");
    noResults = document.getElementById("noResults");
    
    // Initialize
    renderJobs(jobs);
    setupSearch();
    setupAnimations();
    setupSmoothScrolling();
    
    // Mark as loaded
    document.body.classList.add("loaded");
});

// Render jobs
function renderJobs(jobsToRender) {
    if (!jobsGrid) return;
    
    if (jobsToRender.length === 0) {
        jobsGrid.style.display = "none";
        if (noResults) noResults.style.display = "block";
        return;
    }

    jobsGrid.style.display = "grid";
    if (noResults) noResults.style.display = "none";

    jobsGrid.innerHTML = jobsToRender.map((job, index) => `
        <div class="job-card" style="animation-delay: ${index * 100}ms; --accent-color: ${job.color}; --icon-color: ${job.color};">
            <div class="job-header">
                <div class="job-icon" style="background: ${job.color};">
                    ${job.icon}
                </div>
                <div class="job-type">${job.type}</div>
            </div>
            
            <h3 class="job-title">${job.title}</h3>
            
            <div class="job-company">
                <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    ${job.company}
                </span>
                <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${job.location}
                </span>
            </div>
            
            <div class="job-salary">${job.salary}</div>
            
            <p class="job-description">${job.description}</p>
            
            <div class="job-requirements">
                <h4>Вимоги:</h4>
                <div class="requirements-list">
                    ${job.requirements.map(req => `<span class="requirement-tag">${req}</span>`).join("")}
                </div>
            </div>
            
            <button class="apply-button" onclick="applyToJob("${job.telegramLink}", event)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Подати заявку
            </button>
        </div>
    `).join("");
    
    // Re-setup animations for new cards
    setupCardAnimations();
}

// Setup search functionality
function setupSearch() {
    if (!searchInput) return;
    
    searchInput.addEventListener("input", function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === "") {
            renderJobs(jobs);
            return;
        }
        
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm) ||
            job.requirements.some(req => req.toLowerCase().includes(searchTerm))
        );
        
        renderJobs(filteredJobs);
    });
    
    // Clear search on Escape
    searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            e.target.value = "";
            renderJobs(jobs);
            e.target.blur();
        }
    });
}

// Apply to job function
function applyToJob(telegramLink, event) {
    if (event) {
        // Add click animation
        const button = event.target.closest(".apply-button");
        if (button) {
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "";
            }, 150);
        }
    }
    
    // Open Telegram link
    window.open(telegramLink, "_blank");
}

// Setup animations
function setupAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);
    
    // Observe elements that need animation
    const animatedElements = document.querySelectorAll(".job-card, .hero-title, .search-container");
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup card animations
function setupCardAnimations() {
    const cards = document.querySelectorAll(".job-card");
    
    cards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        
        // Animate in with delay
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 100);
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

// Add keyboard navigation
document.addEventListener("keydown", function(e) {
    // Focus search on "/" key
    if (e.key === "/" && !e.target.matches("input, textarea")) {
        e.preventDefault();
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Add performance optimization for resize
let resizeTimeout;
window.addEventListener("resize", function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recalculate animations if needed
        setupCardAnimations();
    }, 250);
});

// Add loading animation
window.addEventListener("load", function() {
    document.body.classList.add("loaded");
    
    // Animate hero elements
    const heroTitle = document.querySelector(".hero-title");
    const searchContainer = document.querySelector(".search-container");
    
    if (heroTitle) {
        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(30px)";
        
        setTimeout(() => {
            heroTitle.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";
        }, 100);
    }
    
    if (searchContainer) {
        searchContainer.style.opacity = "0";
        searchContainer.style.transform = "translateY(30px)";
        
        setTimeout(() => {
            searchContainer.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            searchContainer.style.opacity = "1";
            searchContainer.style.transform = "translateY(0)";
        }, 300);
    }
});

// Add error handling
window.addEventListener("error", function(e) {
    console.error("Error occurred:", e.error);
});

// Add click tracking for analytics (optional)
document.addEventListener("click", function(e) {
    if (e.target.closest(".apply-button")) {
        // Track button clicks
        console.log("Apply button clicked for job");
    }
    
    if (e.target.closest(".nav-link")) {
        // Track navigation clicks
        console.log("Navigation link clicked:", e.target.textContent);
    }
});
