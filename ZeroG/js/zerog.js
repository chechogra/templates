$( document ).ready(function() {
	var logoWidth= $( window ).width() * 3;
	var logoHeight= logoWidth * 1.2558081125;
	var margin_right = "-" + $( window ).width() * 1.8;
	var margin_bottom = "-" + logoHeight * 0.75;

 	TweenMax.to("#zg_logo", 0.5, {width:logoWidth,  height:logoHeight, display:"block", marginRight:margin_right, marginBottom:margin_bottom, ease:Power2.easeInOut});
  
	
  $('#user_password').keypress(function (e) {
	 var key = e.which;
	 if(key == 13) {
		TweenMax.to("#centered_login", 0.5, {alpha:0, display:"none", ease:Power2.easeInOut, onComplete: showZLogo});
		return false;  
	  }
   });
	
	function showZLogo(){
		
		TweenMax.to("#zg_logo", 2, {width:"129px",  height:"160px", bottom:"auto", right:"auto", left:"50%", top:"50%", marginRight:0, 
		marginBottom:0, marginTop:"-80px", marginLeft:"-190px", position:"fixed", rotation:"-180", ease:Power2.easeInOut});
		
		$("#centered_welcome").show();
		//TweenMax.from("#zg_logo_medium", 1, {rotationX:180, rotationY:180});
		TweenMax.from("#welcome_txt", 1, {scale:0, ease:Power2.easeInOut, delay:1});
		TweenMax.to("#colony_txt", 0.5, {text:{value:"TO THE ZERO G COLONY", delimiter:" "}, ease:Linear.easeNone, delay:2});
		TweenMax.to("#welcome_p", 1, {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut", ease:Linear.easeNone, delay:3});
	}
  
});