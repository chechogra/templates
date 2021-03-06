$( document ).ready(function() {
	var logoWidth= $( window ).width() * 3;
	var logoHeight= logoWidth * 1.2502230152;
	var margin_right = "-" + $( window ).width() * 1.8;
	var margin_bottom = "-" + logoHeight * 0.75;

 	TweenMax.to("#zg_logo", 2, {width:logoWidth,  height:logoHeight, display:"block", marginRight:margin_right, marginBottom:margin_bottom, ease:Power2.easeInOut});
  
	
  $('#user_password').keypress(function (e) {
	 var key = e.which;
	 if(key == 13) {
		TweenMax.to("#centered_login", 0.5, {alpha:0, display:"none", ease:Power2.easeInOut, onComplete: showZLogo});
		return false;  
	  }
   });
	
	function showZLogo(){
		
		TweenMax.to("#zg_logo", 1.5, {width:"129px",  height:"160px", bottom:"auto", right:"auto", left:"50%", top:"50%", marginRight:0, 
		marginBottom:0, marginTop:"-80px", marginLeft:"-190px", position:"fixed",  ease:Power2.easeInOut});
		
		$("#centered_welcome").show();
		TweenMax.from("#welcome_wrapper", 0.5, {alpha:0, ease:Power2.easeInOut, delay:1.5});
		TweenMax.to("#centered_welcome", 0.3, {paddingTop:0, ease:Linear.easeNone, delay:2.5});
		TweenMax.to("#welcome_p", 0.5, {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut", ease:Linear.easeNone, delay:3.5});
		TweenMax.to("#arrows_btn", 1, {display:"block", ease:Power0.easeNone, delay:4});
		bindScrollEvent();
	}
	
	function bindScrollEvent(){
		//Firefox
		 $(window).bind('DOMMouseScroll', function(e){
			 if(e.originalEvent.detail > 0) {
				 hideSplashScreen();
			 }
		
			 //prevent page fom scrolling
			 return false;
		 });
		
		 //IE, Opera, Safari
		 $(window).bind('mousewheel', function(e){
			 if(e.originalEvent.wheelDelta < 0) {
				 hideSplashScreen();
			 }
		
			 //prevent page fom scrolling
			 return false;
		 });	
	}
	
	function unBindScrollEvent(){
		$(window).unbind('DOMMouseScroll');
		$(window).unbind('mousewheel');
	}
	
	$("#arrows_btn").click(function(e){
		hideSplashScreen();
	});
	
	function hideSplashScreen(){
		unBindScrollEvent();	
		var header_logo_position = ($("#container_reference").offset().left + 19) + "px";
		
		TweenMax.to("#arrows_btn", 0.7, {display:"none", alpha:0, ease:Power2.easeInOut});
		TweenMax.to("#centered_welcome", 0.7, {display:"none", alpha:0, ease:Power2.easeInOut});
		
		TweenMax.to("#zg_logo", 0.7, {width:"36px", height:"45px",display:"none", left:header_logo_position, top:"13px", 
		marginTop:"0px", marginLeft:"0px", ease:Power2.easeInOut, onComplete: showNavbar, delay:0.7});
		TweenMax.from("#nav_bar .gradient", 0.7, {alpha:0, ease:Power2.easeInOut, delay:1.4});
		
		
	}
	
	function showNavbar(){
		TweenMax.to("#nav_bar", 0, {display:"block", ease:Power2.easeInOut});
		showContent(1);
	}
	
	function showContent(sectionNumber){
		TweenMax.to("#content_" + sectionNumber, 0.5, {display:"block", ease:Power2.easeInOut});
	}
	
	
  
});