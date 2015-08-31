//The code for pie chart in the technical area
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var copy = new Date();
var copyRight = copy.getFullYear();
var printYear = document.getElementById('year');
printYear.innerHTML = copyRight;

$(".show-more").click(function(){
    $("#show-secnd-row").show(200);
});
//$(".showweb").click(function(){
//    $(".mob").hide();
//	$(".wire").hide();
//});
//
//$(".showmob").click(function(){
//    $(".web").hide();
//	$(".wire").hide();
//});
$(".show-more").click(function(){
    $(".show-more").hide();
});