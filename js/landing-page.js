$(document).ready(function(){

  var $left = $(".left");
  var $intro = $(".intro");
  var $logoW = $(".logo-wrapper");
  var $title = $(".title");
  var $descriptionW = $(".description-wrapper");

  $logoW.click(function(){
    $intro.toggleClass("translate-in");
    $left.toggleClass("rotate");
    $title.toggleClass("visible hidden");
    $descriptionW.toggleClass("visible hidden");
  });
});
