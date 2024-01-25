let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);
  var question = document.querySelector(".faq-question");
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
    question.style.marginBottom = "0";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  const navList = document.querySelector("nav ul");

  burgerIcon.addEventListener("click", function () {
    navList.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!navList.contains(event.target) && event.target !== burgerIcon) {
      navList.classList.remove("show");
    }
  });
});
