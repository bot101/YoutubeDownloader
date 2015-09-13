window.app = Y || new App();//new App() || {}; //Creates a global app object  
// App init point (runs on custom app.Ready event from init-dev.js).
// Runs after underlying device native code and webview/browser is ready.
// Where you should "kick off" your application by initializing app events, etc.

// NOTE: Customize this function to initialize your application, as needed.

app.initEvents = function() {
    "use strict" ;

    // NOTE: ...you can put other miscellaneous init stuff in this function...
    // NOTE: ...and add whatever else you want to do now that the app has started...
    // NOTE: ...or create your own init handlers outside of this file that trigger off the "app.Ready" event...

//Debug purposes only
	        if( cordova.require ) {                                 // print included cordova plugins
            console.log(JSON.stringify(cordova.require('cordova/plugin_list').metadata, null, 1)) ;
    };
	app.init();
    app.splashScreenHide() ;    // after init is good time to remove splash screen; using a splash screen is optional
	
} ;
document.addEventListener("app.Ready", app.initEvents, false) ;



// Just a bunch of useful debug console.log() messages.
// Runs after underlying device native code and webview/browser is ready.
// The following is just for debug, not required; keep it if you want or get rid of it.



console.log("init-app.js");
// Using a splash screen is optional. This function will not fail if none is present.
// This is also a simple study in the art of multi-platform device API detection.
