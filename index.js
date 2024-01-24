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
    question.style.marginBottom = "5px";
  } else {
    answer.style.display = "block";
    question.style.marginBottom = "0";
  }
}
