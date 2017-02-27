$(document).ready(function(){
  // var offsetHeight = 56;
  var $window = $(window);
  var $body = $("body");
  var offsetHeight = $window.height() * 0.10;
  var $portfolio = $("#portfolio");
  var $skills = $("#skills");
  var $skillCards = $(".section-skills .card");
  var $about = $("#about");
  var $contact = $("#contact");

  $body.scrollspy({
    target: '#navbar',
    offset: offsetHeight
  });

  $(".nav-button").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 56
      }, 400, function(){
        // window.location.hash = hash;
        window.location.hash = '#!' + hash;
      });
    }
  });

  $(".intro-section .intro").addClass("transform-back-x");


  $window.scroll(function(){
    var wScroll = $(this).scrollTop();

    if (wScroll >= 450) {
      $(".top-button").addClass("transform-back-y");
    } else if (wScroll < 450) {
      $(".top-button").removeClass("transform-back-y");
    }

    if (wScroll >= $portfolio.offset().top - ($window.height() / 1.6)) {
      $(".section-portfolio .card").addClass("transform-back-x");
      $(".section-portfolio .description").addClass("transform-back-x");
    }

    if (wScroll >= $skills.offset().top - ($window.height() / 1.5)) {
      $skillCards.each(function(i){
        setTimeout(function(){
          $skillCards.eq(i).addClass("transform-back-x");
        }, 150 * (i +1));
      });
      $(".text .content-description").addClass("transform-back-x");
    }

    if (wScroll >= $about.offset().top - ($window.height() / 1.6)) {
      $(".pictures-about div figure").addClass("transform-back-x");
      $(".section-about .content-description").addClass("transform-back-x");
      $(".section-about .card").addClass("transform-back-x");
    }

    if (wScroll >= $contact.offset().top - ($window.height() / 1.6)) {
      $(".section-contact .card").addClass("transform-back-x");
    }

  });

});
