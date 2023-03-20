$(document).ready(function () {
  $('.biography__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  })
})
$(document).ready(function () {
  $('.figures__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    /*autoplay: true,*/
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $('.figures_prev'),
    nextArrow: $('.figures_next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  })
})
$(document).ready(function () {
  $('.reward__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })
})

$(document).ready(function ($) {
  if ($(window).width() < 1024) {
    $('nav.menu__left-part').appendTo('.mobile__menu-container')
    $('nav.menu__right-part').appendTo('.mobile__menu-container')
    console.log('1024')
  }

  new fullpage('#fullpage', {
    normalScrollElements: '.fp-normal-scroll, .figures__slider, .slick-list',
  })
})
