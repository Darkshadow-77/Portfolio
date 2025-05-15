document.addEventListener("DOMContentLoaded", () => {
    const themeStyle = document.getElementById("theme");
    const toggleButton = document.getElementById("th-toggle");
    const themeIcon = document.querySelector(".th-icon");

    // Vérifier si une préférence existe dans le stockage local
    const currentTheme = localStorage.getItem("theme") || "styles/light.css";
    themeStyle.setAttribute("href", currentTheme);

    toggleButton.addEventListener("click", () => {
        const newTheme = themeStyle.getAttribute("href") === "styles/light.css" ? "styles/dark.css" : "styles/light.css";
        if (newTheme === "styles/dark.css") {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
        themeStyle.setAttribute("href", newTheme);
        localStorage.setItem("theme", newTheme); // Sauvegarde la préférence
    });
});
