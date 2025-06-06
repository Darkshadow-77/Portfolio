document.addEventListener("DOMContentLoaded", () => {
  const galleries = {
    tservice: [
      "../img/Projects/Screenshot_20250606-092445_1.jpg",
      "../img/Projects/Screenshot_20250606-090327.jpg",
      "../img/Projects/Screenshot_20250606-090514.jpg",
      "../img/Projects/Screenshot_20250606-091013.jpg",
      "../img/Projects/Screenshot_20250606-090406.jpg",
      "../img/Projects/Screenshot_20250606-091043.jpg"
    ],
    recieper: [
      "../img/projects/20250516_1123_Appli Gestion Recettes_simple_compose_01jvcd919mffm8xa0bsymypy3v_1.png",
      "../img/projects/20250516_1649_Mode Paysage Maquette_remix_01jvczy8pef3mt92qprckxrs83_1.png",
      "../img/projects/20250526_1034_Recette et Étapes_remix_01jw62dx4qfntb4td0hsrwe49w_1.png"
    ],
    lts: [
      "../img/projects/20250526_1047_Mode Paysage Maquette_remix_01jw636rw8ee1av25v928452sf_1.png",
      "../img/projects/Screenshot_20250515-052245.jpg"
    ],
    nettrash: [
      "../img/projects/20250516_1640_Maquette Application Mobile_remix_01jvczdmgyf15tq352qs6nb2nj_1.png",
      "../img/projects/Screenshot_20250515-052201.jpg"
    ]
  };

  const modal = document.getElementById("modal");
  const slidesContainer = document.querySelector(".slides-container");
  const closeBtn = document.querySelector(".close-btn");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentGallery = [];
  let currentIndex = 0;

  // Afficher la modale
  const openModal = (galleryName) => {
    currentGallery = galleries[galleryName] || [];
    if (currentGallery.length === 0) return;

    slidesContainer.innerHTML = currentGallery.map((src, index) => `
      <img src="${src}" class="slide${index === 0 ? ' active' : ''}" />
    `).join("");

    currentIndex = 0;
    modal.style.display = "flex";
  };

  // Fermer la modale
  const closeModal = () => {
    modal.style.display = "none";
    slidesContainer.innerHTML = "";
  };

  // Changer d’image
  const showSlide = (index) => {
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;

    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showSlide(currentIndex);
  };

  // Événements
  document.querySelectorAll(".shower").forEach(button => {
    button.addEventListener("click", () => {
      const galleryName = button.getAttribute("data-gallery");
      openModal(galleryName);
    });
  });

  closeBtn.addEventListener("click", closeModal);
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Fermer la modale en cliquant à l’extérieur
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Clavier navigation
  window.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "Escape") closeModal();
    }
  });
});