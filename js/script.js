$(document).ready(function(){
  // var offsetHeight = 56;
  var $window = $(window);
  var $body = $("body");
  var offsetHeight = $window.height() * 0.10;
  var $portfolio = $("#portfolio");
  var $skills = $("#skills");
  var $skillCards = $(".section-skills .card");
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
        scrollTop: $(hash).offset().top -56
      }, 400, function(){
        window.location.hash = hash;
      });
    }
  });

  $(".intro-section .intro").addClass("transform-back");


  $window.scroll(function(){
    var wScroll = $(this).scrollTop();

    if (wScroll >= $portfolio.offset().top - ($window.height() / 1.6)) {
      $(".section-portfolio .card").addClass("transform-back");
      $(".section-portfolio .description").addClass("transform-back");
    }

    if (wScroll >= $skills.offset().top - ($window.height() / 1.5)) {
      $skillCards.each(function(i){
        setTimeout(function(){
          $skillCards.eq(i).addClass("transform-back");
        }, 150 * (i +1));
      });
      $(".text .content-description").addClass("transform-back");
    }

    if (wScroll >= $contact.offset().top - ($window.height() / 1.6)) {
      $(".pictures-contact div figure").addClass("transform-back");
      $(".section-contact .content-description").addClass("transform-back");
      $(".section-contact .card").addClass("transform-back");
    }

  });

});
