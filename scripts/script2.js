const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".slides-container");
const closeBtn = modal.querySelector(".close-btn");
const prev = modal.querySelector(".prev");
const next = modal.querySelector(".next");
let current = 0;
let currentSlides = [];

const galleries = {
  web: [
    "img/projet_web1.jpg",
    "img/projet_web2.jpg",
    "img/projet_web3.jpg"
  ],
  app1: [
    "img/app1_1.jpg",
    "img/app1_2.jpg"
  ],
  iot: [
    "img/iot1.jpg",
    "img/iot2.jpg"
  ]
};

// Show specific gallery
function openModal(galleryKey) {
  const images = galleries[galleryKey];
  if (!images) return;

  modalContent.innerHTML = images.map((src, i) =>
    `<img src="${src}" class="slide ${i === 0 ? "active" : ""}">`
  ).join("");

  currentSlides = modalContent.querySelectorAll(".slide");
  current = 0;
  modal.style.display = "flex";
  showSlide(current);
}

function showSlide(index) {
  currentSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

document.querySelectorAll(".shower").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-gallery");
    openModal(key);
  });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

prev.onclick = () => {
  current = (current - 1 + currentSlides.length) % currentSlides.length;
  showSlide(current);
};

next.onclick = () => {
  current = (current + 1) % currentSlides.length;
  showSlide(current);
};


