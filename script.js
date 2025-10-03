document.addEventListener("DOMContentLoaded", () => {
    const telegramLink = "https://t.me/+jt2q9O8jqdo1NmUy";

    const vacancies = [
        {
            id: 1,
            title: "Менеджер з комунікацій (віддалено)",
            company: "Онлайн-платформа",
            salary: "25 000 – 60 000 ₴/міс",
            description: "Ведення листування з клієнтами онлайн-платформи, підтримка зацікавленості та стимулювання взаємодії з контентом.",
            conditions: "Досвід роботи в чатах або продажах вітається, але не обов'язковий. Грамотна письмова українська та англійська мови. Вміння працювати в команді, відповідальність, стресостійкість.",
            tags: ["Віддалено", "Без досвіду", "Гнучкий графік", "Конфіденційно"],
            telegramLink: telegramLink,
            isTopOffer: true
        },
        {
            id: 2,
            title: "Спеціаліст з управління контентом",
            company: "Креативна студія",
            salary: "20 000 – 45 000 ₴/міс",
            description: "Організація та публікація ексклюзивного контенту для онлайн-аудиторії, забезпечення його якості та своєчасності.",
            conditions: "Досвід роботи з контентом вітається. Вміння працювати з графічними та відеоредакторами. Креативність, уважність до деталей.",
            tags: ["Віддалено", "Гнучкий графік", "Креатив"],
            telegramLink: telegramLink,
            isTopOffer: true
        },
        {
            id: 3,
            title: "Асистент онлайн-проектів",
            company: "Приватний підприємець",
            salary: "18 000 – 35 000 ₴/міс",
            description: "Адміністративна підтримка онлайн-проектів, допомога у веденні соціальних мереж та взаємодії з аудиторією.",
            conditions: "Організаторські здібності, відповідальність, базові знання SMM. Можливе навчання.",
            tags: ["Віддалено", "Без досвіду", "Гнучкий графік"],
            telegramLink: telegramLink,
            isTopOffer: true
        },
        {
            id: 4,
            title: "Менеджер по роботі з партнерами",
            company: "Партнерська мережа",
            salary: "30 000 – 70 000 ₴/міс",
            description: "Розширення партнерської мережі, залучення нових учасників та підтримка існуючих відносин для збільшення прибутку.",
            conditions: "Досвід у продажах або роботі з клієнтами. Вміння вести переговори, орієнтація на результат.",
            tags: ["Віддалено", "Продажі", "Менеджмент"],
            telegramLink: telegramLink
        },
        {
            id: 5,
            title: "Спеціаліст з візуального контенту",
            company: "Медіа-продакшн",
            salary: "22 000 – 50 000 ₴/міс",
            description: "Створення та обробка фото- та відеоматеріалів для онлайн-платформ, забезпечення високої якості візуального ряду.",
            conditions: "Досвід роботи з Adobe Photoshop/Lightroom, відеоредакторами. Креативне мислення, портфоліо вітається.",
            tags: ["Віддалено", "Фото", "Відео", "Креатив"],
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
        vacanciesGrid.innerHTML = '';
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

