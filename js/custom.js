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

var nameval = function(){
	var feeback = document.getElementById('namval');
	if(prntnam.value.length <= 0){
		feeback.setAttribute('class', 'validation') 
		}
	else{
		feeback.setAttribute('class', 'hide')
		}
	}
var prntnam = document.getElementById('nemfld');
prntnam.addEventListener('blur', nameval, false);

var prntmsg = function(){
	var feedbackmsg = document.getElementById('msgval');
	if(etnrmsg.value.length <= 4){
		feedbackmsg.setAttribute('class', 'validation v-msg');
	}
	else{
		feedbackmsg.setAttribute('class','hide');
	}
}
var etnrmsg = document.getElementById('msg-fld');
etnrmsg.addEventListener('blur',prntmsg,false);

var prntemil = function(){
	var feedbackmsg = document.getElementById('emname');
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if(re.test(etnmsg.value)){
		feedbackmsg.setAttribute('class', 'hide'); 
	}
	else{
		feedbackmsg.setAttribute('class','validation v-emal');
	}
}
var etnmsg = document.getElementById('emprnt');
etnmsg.addEventListener('blur',prntemil,false);

var mymsg = function(){
	prntmsg();
	nameval();
	prntemil();
var doc = document.getElementById('contact').getElementsByClassName('validation');
var scmsg = document.getElementById('my-smg');

/*	if (document.getElementsByClassName('validation').length > 0 ){
		scmsg.setAttribute('class', 'hide');
		}
	else{
		scmsg.setAttribute('class','show');
	}*/

	if (doc.length>0){
		scmsg.setAttribute('class', 'hide');
		return false;
		}
	else{
		scmsg.setAttribute('class','show sucs-msg cont-mgs');
	}

	}
var dslpmgs = document.getElementById('smbtbtn');
dslpmgs.addEventListener('click', mymsg, false);

