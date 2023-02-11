$(function () {
  var swiper = new Swiper(".main-banner", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".keyword-swiper", {
    slidesPerView: 8,
    spaceBetween: 8,
  });

  var swiper = new Swiper(".section2-swiper", {
    slidesPerView: 4,
    spaceBetween: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".section3-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
});
