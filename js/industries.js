var swiper = new Swiper(".industries__swiper", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".industries__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".industries-next",
    prevEl: ".industries-prev",
  }
});

