$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
  $("button#pink").click(function() {
    $("body").removeClass();
    $("body").addClass("pink-background");
  });

  $("p").click(function(){
    $( this ).toggleClass( "highlight");
  });
});
