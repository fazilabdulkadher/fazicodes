// JavaScript Document
;(function($) {
   $.fn.fixMe = function() {
      return this.each(function() {
         var $this = $(this),
            $t_fixed;
         function init() { 
            $t_fixed = $this.clone();
            $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
            resizeFixed();
         }
         function resizeFixed() {
            $t_fixed.find("th").each(function(index) {
               $(this).css("width",$this.find("th").eq(index).outerWidth()+"px");
            });
         }
         function scrollFixed() {
            var offset = $(this).scrollTop(),
            tableOffsetTop = $this.offset().top,
            tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
            if(offset < tableOffsetTop || offset > tableOffsetBottom)
               $t_fixed.hide();
            else if(offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
               $t_fixed.show();
         }
         $(window).resize(resizeFixed);
         $(window).scroll(scrollFixed);
         init();
      });
   };
})(jQuery);

$(document).ready(function(){
   $("table").fixMe();
   $(".up").click(function() {
      $('html, body').animate({
      scrollTop: 0
   }, 2000);
 });
});
$(".more").click(function(){
    $(".more-fil").show();
	$(".more").hide();
	$(".less").show();
});
$(".less").click(function(){
    $(".more-fil").hide();
	$(".less").hide();
	$(".more").show();
});
$(document).ready(function(){
    $(".image-off").click(function(){
        $(this).toggleClass("image-on");
    });
});
$(".rels").click(function(){
    $(".hide-row").show();
	$(".rels").hide();
	$(".less-rsl").show();
})
$(".less-rsl").click(function(){
    $(".hide-row").hide();
	$(".rels").show();
	$(".less-rsl").hide();
})