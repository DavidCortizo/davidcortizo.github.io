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

function cardHoverIn(element){
  $(element).addClass("mdl-shadow--8dp card-hover");
}
function cardHoverOut(element){
  $(element).removeClass("mdl-shadow--8dp card-hover");
}


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
