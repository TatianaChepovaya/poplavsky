$(document).ready(function () {
  //   console.log("ready!");
  $('.mobile__menu-btn').on('click', function () {
    //  alert();
    $('.menu').toggleClass('active')
    $('.mobile__menu-btn').toggleClass('active')
    $('.mobile__menu-container').toggleClass('active')
    $('.footer__inner').toggleClass('active')
    $('.header__inner').toggleClass('active')
    $('.corners').toggleClass('active')
  })
})
