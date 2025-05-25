document.addEventListener("DOMContentLoaded", () => {
    const themeStyle = document.getElementById("theme");
    const toggleButton = document.getElementById("th-toggle");
    const themeIcon = document.querySelector(".th-icon");

    // Vérifier si une préférence existe dans le stockage local
    const currentTheme = localStorage.getItem("theme") || "light";
    themeStyle.setAttribute("href", `../styles/${currentTheme}.css`);
    localStorage.setItem("theme",currentTheme);

    toggleButton.addEventListener("click", () => {
        const newTheme = localStorage.getItem("theme") === "light" ? "dark" : "light";
        if (newTheme === "dark") {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
        themeStyle.setAttribute("href", `../styles/${newTheme}.css`);
        localStorage.setItem("theme", newTheme); // Sauvegarde la préférence
    });
});
