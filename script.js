const scrollUpBtn = document.querySelector(".scroll-up-btn");

function scrollUp(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollUpBtn.addEventListener("click", scrollUp);