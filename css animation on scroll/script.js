let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect : 'fade',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let s = skrollr.init();