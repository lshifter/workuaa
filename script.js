document.addEventListener("DOMContentLoaded", () => {
    const telegramLink = "https://t.me/+jt2q9O8jqdo1NmUy";

    const vacancies = [
        {
            id: 1,
            title: "Чат-менеджер OnlyFans",
            company: "Приватний проект",
            salary: "25 000 – 60 000 ₴/міс",
            description: "Ведення листування з підписниками моделей на платформі OnlyFans, підтримка зацікавленості та стимулювання продажів контенту.",
            conditions: "Досвід роботи в чатах або продажах вітається, але не обов'язковий. Грамотна письмова українська та англійська мови. Вміння працювати в команді, відповідальність, стресостійкість.",
            tags: ["Віддалено", "Без досвіду", "Гнучкий графік", "Конфіденційно"],
            telegramLink: telegramLink,
            isTopOffer: true
        },
        {
            id: 2,
            title: "Перегляд роликів",
            company: "Онлайн-платформа",
            salary: "1200 грн/день",
            description: "Перегляд коротких відеороликів на різних платформах.",
            conditions: "Доступ до інтернету, смартфон/ПК.",
            tags: ["Віддалено", "Без досвіду", "Гнучкий графік"],
            telegramLink: telegramLink,
            isTopOffer: true
        },
        {
            id: 3,
            title: "Написання відгуків",
            company: "Маркетингова агенція",
            salary: "2100 грн/день",
            description: "Написання коротких, правдивих відгуків про товари/послуги.",
            conditions: "Грамотна українська мова, доступ до інтернету.",
            tags: ["Віддалено", "Без досвіду", "Креатив"],
            telegramLink: telegramLink,
            isTopOffer: true
        },
        {
            id: 4,
            title: "Оператор текстового чату Нова Пошта",
            company: "Нова Пошта",
            salary: "1300 грн/день",
            description: "Відповіді на запитання клієнтів у текстовому чаті, консультації.",
            conditions: "Швидкий набір тексту, комунікабельність.",
            tags: ["Віддалено", "Офіс", "Підтримка клієнтів"],
            telegramLink: telegramLink
        },
        {
            id: 5,
            title: "Менеджер з продажу Аврора",
            company: "Аврора",
            salary: "1500 грн/день",
            description: "Консультація клієнтів, допомога у виборі товарів, оформлення замовлень.",
            conditions: "Досвід у продажах вітається, комунікабельність.",
            tags: ["Продажі", "Офіс", "Активні продажі"],
            telegramLink: telegramLink
        }
    ];

    const vacanciesGrid = document.querySelector(".vacancies-grid");
    const heroSubtitle = document.querySelector(".hero-subtitle .highlight");

    // Update vacancy count in hero section
    if (heroSubtitle) {
        heroSubtitle.textContent = `${vacancies.length} актуальних вакансій`;
    }

    // Clear existing vacancies before rendering new ones
    if (vacanciesGrid) {
        vacanciesGrid.innerHTML = "";
    }

    // Render vacancies
    vacancies.forEach((vacancy) => {
        const vacancyCard = document.createElement("div");
        vacancyCard.classList.add("vacancy-card");
        if (vacancy.isTopOffer) {
            vacancyCard.classList.add("top-offer");
        }

        vacancyCard.innerHTML = `
            <h3 class="vacancy-title">${vacancy.title}</h3>
            <p class="vacancy-salary">${vacancy.salary}</p>
            <p class="vacancy-description">${vacancy.description}</p>
            <div class="vacancy-tags">
                ${vacancy.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <a href="${vacancy.telegramLink}" target="_blank" class="btn apply-btn">Подати заявку</a>
        `;
        vacanciesGrid.appendChild(vacancyCard);
    });
});

