$( document ).ready(function() {
  $("#zg_logo").animate({ width: "402px", height: "500px", marginTop: "-250px", marginLeft: "-201px"}, 1000, function() {
    // Animation complete.
  });
  
  $('#user_password').keypress(function (e) {
	 var key = e.which;
	 if(key == 13) {
		TweenMax.to("#centered_login", 0.5, {alpha:0, display:"none", ease:Power2.easeInOut, onComplete: moveOutLogo});
		return false;  
	  }
   });
   
    function moveOutLogo(){
		TweenMax.to("#zg_logo", 2, {opacity:0, rotation: 360, scale:2, display:"none", ease:Power2.easeInOut, onComplete: showZLogo});
	}
	
	function showZLogo(){
		$("#centered_welcome").show();
		TweenMax.from("#zg_logo_medium", 1, {rotationX:180, rotationY:180});
	}
  
});