/*------------------------------------*\
    CENTRAL APP MASTER 
\*------------------------------------*/

var app = (function($) {
	
	// This method will run when the DOM is ready. 
	var init = function() {
		console.log("All is hunky dory");
	};
	
	return {
		init: init
	}
	
}(window.$));

$(document).ready(function() {
	app.init();
});