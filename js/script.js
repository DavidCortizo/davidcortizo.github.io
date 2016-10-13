$(document).ready(function (){

  $(".a").click(function () {
    if ($("#btn-navbar").css('display')!='none')
      $("#btn-navbar").click();
  });


  // function cardHover(x) {
  //   $(x).mouseenter(function(){
  //       $(this).addClass("mdl-shadow--8dp");
  //   });
  //   $(x).mouseleave(function(){
  //       $(this).removeClass("mdl-shadow--8dp");
  //   });
  // }
 //
//
});

// function cardHoverIn(element){
//   $(element).addClass("card-shadow-3 card-hover");
// }
// function cardHoverOut(element){
//   $(element).removeClass("card-shadow-3 card-hover");
// }
// onmouseover="cardHoverIn(this);" onmouseleave="cardHoverOut(this);"


//   $("#section-phi").mouseover(function(){
//     $("this").addClass(".mdl-shadow--8dp");
//   }
// );

  // button navigation
  if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-button').removeClass('hidden').affix({
       // how far to scroll down before link "slides" into view
       offset: {top:0}
     });
    $("#top-button").addClass("btn-translate");
  }
  // button navigation

  // if ( ($(window).width() < 768) ) {
  //   $("")mdl-button--mini-fab
  // }
  //
