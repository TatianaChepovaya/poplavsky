$(document).ready(function () {
  $('.biography__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    /*dots: true,*/
  })
})
$(document).ready(function () {
  $('.figures__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    /*autoplay: true,*/
    autoplaySpeed: 2000,
  })
})

$(document).ready(function () {
  if ($(window).width() < 1024) {
    $('nav.menu__left-part').appendTo('.mobile__menu-container')
    $('nav.menu__right-part').appendTo('.mobile__menu-container')
    console.log('1024')
  }
})
