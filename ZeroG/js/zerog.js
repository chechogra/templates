$( document ).ready(function() {
	var logoWidth= $( window ).width() * 3;
	var logoHeight= logoWidth * 1.2558081125;
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
		
		TweenMax.to("#zg_logo", 3, {width:"129px",  height:"160px", bottom:"auto", right:"auto", left:"50%", top:"50%", marginRight:0, 
		marginBottom:0, marginTop:"-80px", marginLeft:"-190px", position:"fixed", rotation:"-180", ease:Power2.easeInOut});
		
		$("#centered_welcome").show();
		TweenMax.from("#welcome_txt", 1, {scale:0, ease:Power2.easeInOut, delay:3});
		TweenMax.to("#colony_txt", 0.5, {text:{value:"TO THE ZERO G COLONY", delimiter:" "}, ease:Linear.easeNone, delay:4});
		TweenMax.to("#welcome_p", 1, {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut", ease:Linear.easeNone, delay:5});
		TweenMax.to("#arrows_btn", 1, {display:"block", ease:Power0.easeNone, delay:6});
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
		TweenMax.to("#centered_welcome", 0.5, {display:"none", top: "0", marginTop: "0px", ease:Power2.easeInOut});
		TweenMax.to("#arrows_btn", 0.5, {display:"none", left:"100%", ease:Power2.easeInOut});
		TweenMax.to("#zg_logo", 0.5, {display:"none", left:"0", ease:Power2.easeInOut, onComplete: showNavbar});
		
	}
	
	function showNavbar(){
		TweenMax.to("#nav_bar", 0.5, {display:"block", ease:Power2.easeInOut});
	}
	
	
  
});