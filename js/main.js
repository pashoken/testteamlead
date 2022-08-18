$(document).ready(function(){
  $('#name').focus(function(){
    $("#label1").removeClass().addClass('right');
    $('#label1').fadeOut(200, function() {
      $('#label1').text('Tyrion Lannister').fadeIn(500);
    });
  });
  $('#name').blur(function(){
    $("#label1").removeClass();
    $('#label1').fadeOut(200, function() {
      $('#label1').text('Name').fadeIn(200);
    });
  });
  $('#number').focus(function(){
    $("#label2").removeClass().addClass('right');
    $('#label2').fadeOut(200, function() {
      $('#label2').text('88005553535').fadeIn(500);
    });
    $('#number').blur(function(){
      $("#label2").removeClass();
      $('#label2').fadeOut(200, function() {
        $('#label2').text('Number').fadeIn(200);
      });
    });
  });
  $('.link').click(function(){
    $('html, body').animate({
      scrollTop: $(".order").offset().top
    }, 2000);
  });
});
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
});
