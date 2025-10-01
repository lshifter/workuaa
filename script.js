// Job data
const jobs = [
    {
        id: 1,
        title: "Чат-менеджер",
        company: "Digital Entertainment",
        location: "Віддалено",
        type: "Повний робочий день",
        salary: "від 25,000 грн",
        description: "Робота з клієнтами в онлайн-чатах. Потрібні комунікативні навички.",
        requirements: ["Комунікативні навички", "Досвід роботи з клієнтами"],
        telegramLink: "https://t.me/+jt2q9O8jqdo1NmUy",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
               </svg>`,
        color: "#ec4899"
    },
    {
        id: 2,
        title: "Перегляд відео",
        company: "Media Analytics",
        location: "Віддалено",
        type: "Часткова зайнятість",
        salary: "від 15,000 грн",
        description: "Перегляд та оцінка відеоконтенту. Гнучкий графік роботи, можливість працювати з дому.",
        requirements: ["Уважність до деталей", "Стабільний інтернет", "Базові комп'ютерні навички"],
        telegramLink: "https://t.me/+o7wKjq2LLPRhZjRi",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
               </svg>`,
        color: "#3b82f6"
    },
    {
        id: 3,
        title: "Ставити лайки на фото",
        company: "Social Media Pro",
        location: "Віддалено",
        type: "Гнучкий графік",
        salary: "від 10,000 грн",
        description: "Робота з соціальними мережами. Потрібно ставити лайки та взаємодіяти з контентом.",
        requirements: ["Активність в соцмережах", "Розуміння трендів", "Відповідальність"],
        telegramLink: "https://t.me/+-R3x2ZouGB05YjEy",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
               </svg>`,
        color: "#ef4444"
    },
    {
        id: 4,
        title: "Писати відгуки для товарів",
        company: "Review Masters",
        location: "Віддалено",
        type: "Проектна робота",
        salary: "від 18,000 грн",
        description: "Написання якісних відгуків про товари та послуги. Потрібні навички копірайтингу.",
        requirements: ["Грамотність", "Креативність", "Досвід написання текстів"],
        telegramLink: "https://t.me/+vlenJpc_baJhYWVi",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
               </svg>`,
        color: "#16a34a"
    },
    {
        id: 5,
        title: "Збирати резинки за кольорами",
        company: "Color Sorting Inc",
        location: "Віддалено",
        type: "Повний робочий день",
        salary: "від 20,000 грн",
        description: "Сортування предметів за кольорами. Потрібна уважність та швидкість виконання завдань.Товар відправляємо поштою",
        requirements: ["Уважність", "Швидкість реакції", "Розрізнення кольорів"],
        telegramLink: "https://t.me/+tyYdgXq6wKtiZDIy",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="13.5" cy="6.5" r=".5"/>
                <circle cx="17.5" cy="10.5" r=".5"/>
                <circle cx="8.5" cy="7.5" r=".5"/>
                <circle cx="6.5" cy="12.5" r=".5"/>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
               </svg>`,
        color: "#8b5cf6"
    }
];

// DOM elements
let searchInput, jobsGrid, noResults;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    searchInput = document.getElementById('searchInput');
    jobsGrid = document.getElementById('jobsGrid');
    noResults = document.getElementById('noResults');
    
    // Initialize
    renderJobs(jobs);
    setupSearch();
    setupAnimations();
    setupSmoothScrolling();
    
    // Mark as loaded
    document.body.classList.add('loaded');
});

// Render jobs
function renderJobs(jobsToRender) {
    if (!jobsGrid) return;
    
    if (jobsToRender.length === 0) {
        jobsGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    jobsGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

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
                    ${job.requirements.map(req => `<span class="requirement-tag">${req}</span>`).join('')}
                </div>
            </div>
            
            <button class="apply-button" onclick="applyToJob('${job.telegramLink}', event)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Подати заявку
            </button>
        </div>
    `).join('');
    
    // Re-setup animations for new cards
    setupCardAnimations();
}

// Setup search functionality
function setupSearch() {
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
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
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            e.target.value = '';
            renderJobs(jobs);
            e.target.blur();
        }
    });
}

// Apply to job function
function applyToJob(telegramLink, event) {
    if (event) {
        // Add click animation
        const button = event.target.closest('.apply-button');
        if (button) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        }
    }
    
    // Open Telegram link
    window.open(telegramLink, '_blank');
}

// Setup animations
function setupAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that need animation
    const animatedElements = document.querySelectorAll('.job-card, .hero-title, .search-container');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup card animations
function setupCardAnimations() {
    const cards = document.querySelectorAll('.job-card');
    
    cards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Animate in with delay
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Focus search on '/' key
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Add performance optimization for resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recalculate animations if needed
        setupCardAnimations();
    }, 250);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroTitle = document.querySelector('.hero-title');
    const searchContainer = document.querySelector('.search-container');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (searchContainer) {
        searchContainer.style.opacity = '0';
        searchContainer.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            searchContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            searchContainer.style.opacity = '1';
            searchContainer.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Add error handling
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
});

// Add click tracking for analytics (optional)
document.addEventListener('click', function(e) {
    if (e.target.closest('.apply-button')) {
        // Track button clicks
        console.log('Apply button clicked for job');
    }
    
    if (e.target.closest('.nav-link')) {
        // Track navigation clicks
        console.log('Navigation link clicked:', e.target.textContent);
    }
});

