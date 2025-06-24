// const popup = document.getElementById("popup");
// const popupImg = document.getElementById("popupImg");
// const closeBtn = document.getElementById("closeBtn");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");
// const images = document.querySelectorAll(".gallery img");
// const viewButtons = document.querySelectorAll(".view-button");

// let currentIndex = 0;

// function showPopup(index) {
//   currentIndex = index;
//   popupImg.src = images[currentIndex].src;
//   popup.style.display = "flex";
// }

// function closePopup() {
//   popup.style.display = "none";
// }

// function navigate(offset) {
//   currentIndex = (currentIndex + offset + images.length) % images.length;
//   popupImg.src = images[currentIndex].src;
// }

// viewButtons.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     showPopup(index);
//   });
// });

// closeBtn.addEventListener("click", closePopup);
// nextBtn.addEventListener("click", () => navigate(1));
// prevBtn.addEventListener("click", () => navigate(-1));

// popup.addEventListener("click", (e) => {
//   if (e.target === popup) closePopup();
// });

// document.addEventListener("keydown", (e) => {
//   if (popup.style.display === "flex") {
//     if (e.key === "ArrowRight") navigate(1);
//     else if (e.key === "ArrowLeft") navigate(-1);
//     else if (e.key === "Escape") closePopup();
//   }
// });

//  2nd code

//

// 3rd method

// const popup = document.getElementById("popup");
// const popupImg = document.getElementById("popupImg");
// const closeBtn = document.getElementById("closeBtn");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");
// const images = document.querySelectorAll(".gallery img");
// const viewButtons = document.querySelectorAll(".view-button");

// let currentIndex = 0;

// function showPopup(index) {
//   currentIndex = index;
//   popupImg.src = images[currentIndex].src;
//   popup.style.display = "flex";
//   updateNavigationButtons();
// }

// function closePopup() {
//   popup.style.display = "none";
// }

// function navigate(offset) {
//   const nextIndex = currentIndex + offset;
//   if (nextIndex < 0 || nextIndex >= images.length) return;

//   currentIndex = nextIndex;
//   popupImg.src = images[currentIndex].src;
//   updateNavigationButtons();
// }

// function updateNavigationButtons() {
//   prevBtn.style.display = currentIndex === 0 ? "none" : "block";
//   nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
// }

// viewButtons.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     showPopup(index);
//   });
// });

// closeBtn.addEventListener("click", closePopup);
// nextBtn.addEventListener("click", () => navigate(1));
// prevBtn.addEventListener("click", () => navigate(-1));

// popup.addEventListener("click", (e) => {
//   if (e.target === popup) closePopup();
// });

// document.addEventListener("keydown", (e) => {
//   if (popup.style.display === "flex") {
//     if (e.key === "ArrowRight") navigate(1);
//     else if (e.key === "ArrowLeft") navigate(-1);
//     else if (e.key === "Escape") closePopup();
//   }
// });

// 4th method

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const images = document.querySelectorAll(".gallery img");
const viewButtons = document.querySelectorAll(".view-button");

let currentIndex = 0;

function showPopup(index) {
  currentIndex = index;
  popupImg.src = images[currentIndex].src;
  popup.style.display = "flex";
  updateNavigationButtons();
}

function closePopup() {
  popup.style.display = "none";
}

function navigate(offset) {
  const nextIndex = currentIndex + offset;
  if (nextIndex < 0 || nextIndex >= images.length) return;

  currentIndex = nextIndex;
  popupImg.src = images[currentIndex].src;
  updateNavigationButtons();
}

function updateNavigationButtons() {
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
}

viewButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    showPopup(index);
  });
});

closeBtn.addEventListener("click", closePopup);
nextBtn.addEventListener("click", () => navigate(1));
prevBtn.addEventListener("click", () => navigate(-1));

document.addEventListener("keydown", (e) => {
  if (popup.style.display === "flex") {
    if (e.key === "ArrowRight") navigate(1);
    else if (e.key === "ArrowLeft") navigate(-1);
    else if (e.key === "Escape") closePopup();
  }
});
