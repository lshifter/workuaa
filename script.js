document.addEventListener("DOMContentLoaded", () => {
    const telegramLinks = [
        "https://t.me/+tyYdgXq6wKtiZDIy",
        "https://t.me/+o7wKjq2LLPRhZjRi",
        "https://t.me/+vlenJpc_baJhYWVi",
        "https://t.me/+-R3x2ZouGB05YjEy",
        "https://t.me/+mMQTx1YFHa40ZDdi"
    ];

    const applyButtons = document.querySelectorAll(".apply-button");

    applyButtons.forEach((button, index) => {
        if (telegramLinks[index]) {
            button.setAttribute("href", telegramLinks[index]);
            button.setAttribute("target", "_blank");
        }
    });
});
