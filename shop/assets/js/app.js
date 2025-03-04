// Dots slider

document.addEventListener('DOMContentLoaded', function() {
  const swiperDots = new Swiper('.arrivals-slider__wrapper', {
    slidesPerView: 6,
    speed: 400,
    spaceBetween: 30,
    pagination: {
      el: '.arrivals-slider__dots',
      bulletClass: 'arrivals-slider__dot',
      bulletActiveClass: 'active',
      clickable: true,
    },
  });
});





