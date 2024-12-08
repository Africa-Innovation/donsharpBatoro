// script pour le bacground de la nav quand on start a scrolle

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".head");

  function toggleHeaderBackground() {
      if (window.scrollY > 0) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  }

  window.addEventListener("scroll", toggleHeaderBackground);
});


//pour le menu burger

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', function () {
      nav.classList.toggle('active');
  });
});

document.addEventListener('click', function (e) {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove('active');
  }
});

//pour la video beginning
