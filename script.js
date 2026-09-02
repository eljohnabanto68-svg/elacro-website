// =========================
// ELACRO WEBSITE JAVASCRIPT
// =========================

const themeButton = document.getElementById("themeButton");

// =========================
// DARK / LIGHT MODE
// =========================

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeButton.textContent = "☀️";
        } else {
            themeButton.textContent = "🌙";
        }
    });
}

// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to the Elacro Website!");
console.log("Website Version: 0.2");
console.log("Status: Still in development 🚧");