$(document).ready(function(){

  var $left = $(".left");
  var $info = $(".info-icon");
  var $descriptionW = $(".description-wrapper");

  $info.click(function(){
    $info.toggleClass("rotate-reverse");
    $descriptionW.toggleClass("rotate");
  });
  $descriptionW.click(function(){
    $info.toggleClass("rotate-reverse");
    $descriptionW.toggleClass("rotate");
  });
});
