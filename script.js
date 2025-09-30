document.addEventListener("DOMContentLoaded", () => {
    const vacancies = [
        {
            id: 1,
            title: "Чат-менеджер OnlyFans",
            company: "Приватний проект",
            salary: "25 000 – 60 000 ₴/міс",
            description: "Ведення листування з підписниками моделей на платформі OnlyFans, підтримка зацікавленості та стимулювання продажів контенту.",
            conditions: "Досвід роботи в чатах або продажах вітається, але не обов'язковий. Грамотна письмова українська та англійська мови. Вміння працювати в команді, відповідальність, стресостійкість.",
            tags: ["Віддалено", "Без досвіду", "Гнучкий графік", "Конфіденційно"],
            telegramLink: "https://t.me/+onlyfans_chat_manager_link_here", // Specific link for OnlyFans
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
            telegramLink: "https://t.me/+2MQTshe3ZMRkMWVi",
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
            telegramLink: "https://t.me/+ze2ZcmR72743M2My",
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
            telegramLink: "https://t.me/+DuNLgPoTNgI1Nzgy"
        },
        {
            id: 5,
            title: "Менеджер з продажу Аврора",
            company: "Аврора",
            salary: "1500 грн/день",
            description: "Консультація клієнтів, допомога у виборі товарів, оформлення замовлень.",
            conditions: "Досвід у продажах вітається, комунікабельність.",
            tags: ["Продажі", "Офіс", "Активні продажі"],
            telegramLink: "https://t.me/+52j_f3RXVoxjMjky"
        },
        {
            id: 6,
            title: "SMM Менеджер",
            company: "Digital Agency",
            salary: "20 000 – 35 000 грн",
            description: "Шукаємо креативного SMM менеджера для розробки та реалізації стратегій просування в соціальних мережах. Досвід роботи від 1 року.",
            conditions: "Повна зайнятість, гнучкий графік, можливість віддаленої роботи, молодий та дружній колектив.",
            tags: ["SMM", "Маркетинг", "Соціальні мережі"],
            telegramLink: "https://t.me/+2MQTshe3ZMRkMWVi"
        },
        {
            id: 7,
            title: "UGC Кріейтор",
            company: "E-commerce проект",
            salary: "15 000 – 30 000 грн",
            description: "Потрібен талановитий UGC кріейтор для створення оригінального контенту (фото, відео, відгуки) для наших продуктів. Досвід роботи з контентом вітається.",
            conditions: "Проектна робота, гнучкий графік, оплата за виконаний обсяг, можливість довгострокової співпраці.",
            tags: ["Контент", "Відео", "Фото"],
            telegramLink: "https://t.me/+ze2ZcmR72743M2My"
        },
        {
            id: 8,
            title: "Клієнт-менеджер",
            company: "IT-компанія",
            salary: "18 000 – 30 000 грн",
            description: "Шукаємо відповідального клієнт-менеджера для підтримки та розвитку відносин з нашими клієнтами. Досвід роботи з CRM системами.",
            conditions: "Повна зайнятість, комфортний офіс, бонуси за досягнення цілей, медичне страхування.",
            tags: ["Клієнти", "Менеджмент", "CRM"],
            telegramLink: "https://t.me/+DuNLgPoTNgI1Nzgy"
        },
        {
            id: 9,
            title: "Адміністратор в клініку",
            company: "Медичний центр",
            salary: "12 000 – 18 000 грн",
            description: "Шукаємо відповідального адміністратора для зустрічі пацієнтів, ведення записів та забезпечення комфорту в клініці. Можна без досвіду, навчаємо.",
            conditions: "Повна зайнятість, офіційне працевлаштування, дружній колектив, можливість навчання та розвитку.",
            tags: ["Без досвіду", "Адміністратор", "Медицина"],
            telegramLink: "https://t.me/+52j_f3RXVoxjMjky"
        },
        {
            id: 10,
            title: "Адміністратор в стоматологію",
            company: "Стоматологічна клініка",
            salary: "13 000 – 19 000 грн",
            description: "Потрібен адміністратор для координації роботи клініки, запису пацієнтів та вирішення організаційних питань. Розглядаємо кандидатів без досвіду.",
            conditions: "Повна зайнятість, стабільна заробітна плата, комфортні умови праці, професійний ріст.",
            tags: ["Без досвіду", "Адміністратор", "Стоматологія"],
            telegramLink: "https://t.me/+2MQTshe3ZMRkMWVi"
        },
        {
            id: 11,
            title: "Доставщик (кур'єр)",
            company: "Служба доставки",
            salary: "800 – 1500 грн/день",
            description: "Запрошуємо кур'єрів для доставки квітів, їжі та інших товарів по місту. Гнучкий графік, щоденні виплати. Можна без досвіду, з власним транспортом або без.",
            conditions: "Гнучкий графік, щоденні виплати, можливість поєднувати з навчанням/іншою роботою, бонуси за кількість замовлень.",
            tags: ["Кур'єр", "Доставка", "Гнучкий графік"],
            telegramLink: "https://t.me/+ze2ZcmR72743M2My"
        },
        {
            id: 12,
            title: "Фасувальник (ручки, гумки)",
            company: "Виробнича компанія",
            salary: "900 – 1400 грн/день",
            description: "Потрібні відповідальні фасувальники для пакування канцелярських товарів (ручки, гумки тощо). Робота на складі, можливий гнучкий графік. Досвід не обов'язковий.",
            conditions: "Робота на складі, гнучкий графік, щоденні виплати, можливість офіційного працевлаштування.",
            tags: ["Без досвіду", "Склад", "Гнучкий графік"],
            telegramLink: "https://t.me/+DuNLgPoTNgI1Nzgy"
        }
    ];

    const vacanciesGrid = document.querySelector(".vacancies-grid");
    const heroSubtitle = document.querySelector(".hero-subtitle .highlight");

    // Update vacancy count in hero section
    if (heroSubtitle) {
        heroSubtitle.textContent = `${vacancies.length} актуальних вакансій`;
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


