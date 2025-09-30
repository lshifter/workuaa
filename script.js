document.addEventListener('DOMContentLoaded', function() {
    // Telegram links for job details
    const telegramLinks = [
        "https://t.me/+jt2q9O8jqdo1NmUy"
        "https://t.me/+WOw7qx_Qjhs3OTgy",
        "https://t.me/+o7wKjq2LLPRhZjRi"
        "https://t.me/+SuqWIBo3JuJkNWMy",
        "https://t.me/+7NWgMZPT5ccwZWYy"
    ];

    let linkIndex = 0;

    function getNextTelegramLink() {
        const link = telegramLinks[linkIndex];
        linkIndex = (linkIndex + 1) % telegramLinks.length;
        return link;
    }

    // Job data (will be populated dynamically)
    const jobs = [
        {
            title: "Чат-менеджер OnlyFans",
            description: "Ведення листування з підписниками моделей на платформі OnlyFans, підтримка зацікавленості та стимулювання продажів контенту.",
            conditions: "Досвід роботи в чатах або продажах вітається, але не обов'язковий. Грамотна письмова українська та англійська мови. Вміння працювати в команді, відповідальність, стресостійкість.",
            salary: "25 000 – 60 000 ₴/міс",
            isTopOffer: true
        },

        {
            title: "Перегляд роликів",
            description: "Перегляд коротких відеороликів на різних платформах.",
            conditions: "Доступ до інтернету, смартфон/ПК.",
            salary: "1200 грн/день",
            isTopOffer: true
        },
        {
            title: "Написання відгуків",
            description: "Написання коротких, правдивих відгуків про товари/послуги.",
            conditions: "Грамотна українська мова, доступ до інтернету.",
            salary: "2100 грн/день",
            isTopOffer: true
        },
        {
            title: "Оператор текстового чату Нова Пошта",
            description: "Відповіді на запитання клієнтів у текстовому чаті, консультації.",
            conditions: "Швидкий набір тексту, комунікабельність.",
            salary: "1300 грн/день",
            isTopOffer: true
        },
        {
            title: "Менеджер з продажу Аврора",
            description: "Консультація клієнтів, допомога у виборі товарів, оформлення замовлень.",
            conditions: "Досвід у продажах вітається, комунікабельність.",
            salary: "1500 грн/день",
            isTopOffer: false
        }
    ];

    const jobGrid = document.querySelector('.job-grid');

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        if (job.isTopOffer) {
            jobCard.classList.add('top-offer');
        }

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Опис:</strong> ${job.description}</p>
            <p><strong>Умови:</strong> ${job.conditions}</p>
            <p><strong>Зарплата:</strong> ${job.salary}</p>
            <a href="${getNextTelegramLink()}" class="details-button" target="_blank">Подати заявку</a>
        `;
        jobGrid.appendChild(jobCard);
    });
});


