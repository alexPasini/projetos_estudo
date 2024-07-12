const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image"); // Correção aplicada
const lightboxClose = document.querySelector(".lightbox-close"); // Correção aplicada

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imageUrl = item
      .querySelector(".gallery-image")
      .getAttribute("data-src");
    lightboxImage.setAttribute("src", imageUrl);
    lightbox.style.display = "flex";
  });
});

lightboxClose.addEventListener("click", (event) => {
  event.preventDefault(); // Para evitar que o link padrão seja seguido
  lightbox.style.display = "none";
});
