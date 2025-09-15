document.addEventListener("DOMContentLoaded", () => {
    const telegramLinks = [
        "https://t.me/+HXfwanBPTP02MTBi",
        "https://t.me/+cNUoYofm3dMxOGNi",
        "https://t.me/+6YWrsOwEe8k0NjNi",
        "https://t.me/+_-JX2UzLo8wxMDBi",
        "https://t.me/+cjiJAbno418yZjky"
    ];

    const applyButtons = document.querySelectorAll(".apply-button");

    applyButtons.forEach((button, index) => {
        if (telegramLinks[index]) {
            button.setAttribute("href", telegramLinks[index]);
            button.setAttribute("target", "_blank");
        }
    });
});
