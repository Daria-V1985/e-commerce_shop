// Dots slider

document.addEventListener('DOMContentLoaded', function() {
  const swiperDots = new Swiper('.arrivals-slider__wrapper', {
    slidesPerView: 6,
    speed: 400,
    spaceBetween: 30,
    simulateTouch: false,
    pagination: {
      el: '.arrivals-slider__dots',
      bulletClass: 'arrivals-slider__dot',
      bulletActiveClass: 'active',
      clickable: true,
    },
  });
});

// Trends slider

document.addEventListener('DOMContentLoaded', function() {
  const trendSlider = new Swiper('.trends-slider__wrapper', {
    loop: true,
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 30,
    navigation: {
      nextEl: '.trends-slider__arrow-right',
      prevEl: '.trends-slider__arrow-left',
    }
  });
});

// Sales slider

document.addEventListener('DOMContentLoaded', function() {
  const salesSlider = new Swiper('.sales-slider__wrapper', {
    loop: true,
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 30,
    navigation: {
      nextEl: '.sales-slider__arrow-right',
      prevEl: '.sales-slider__arrow-left',
    }
  });
});