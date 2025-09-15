document.addEventListener("DOMContentLoaded", () => {
    const telegramLinks = [
        "https://t.me/+LkynEFY4C49kZTUy",
        "https://t.me/+6YWrsOwEe8k0NjNi",
        "https://t.me/+HXfwanBPTP02MTBi",
        "https://t.me/+_-JX2UzLo8wxMDBi"
    ];

    const applyButtons = document.querySelectorAll(".apply-button");

    applyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            const randomIndex = Math.floor(Math.random() * telegramLinks.length);
            const randomLink = telegramLinks[randomIndex];
            window.open(randomLink, "_blank"); // Open link in a new tab
        });
    });
});
