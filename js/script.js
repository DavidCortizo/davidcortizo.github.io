$(document).ready(function (){

  $(".a").click(function () {
     if ($("#btn-navbar").css('display')!='none')
     $("#btn-navbar").click();
  });

  // button navigation
  if ( ($(window).height() + 100) < $(document).height() ) {
     $('#top-button').removeClass('hidden').affix({
         // how far to scroll down before link "slides" into view
         offset: {top:100}
     });
  }
  // button navigation

});
