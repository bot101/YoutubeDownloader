/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }

// ...additional event handlers here...
function loadGeneratedLink(e){
	Y.waitScreen(0);
	
	document.getElementById("mp3-dld-btn").setAttribute("href",e.responseText);

	if( !resultPage)
	activate_subpage("#page_64_30");
}

function showError(){
	Y.waitScreen(0);
	Y.errorScreen();
}

function youDownload(id){
	var val = document.getElementById(id).value;
	var msg = {
			"url":Y.serverURL,
			"message":val,
			"method":"GET",
			"success": loadGeneratedLink,
			"fail":showError,
			"rHeader":null
			};
	Y.dataTransfer(msg);
	//Y.waitScreen(1);
}
console.log("app.js");