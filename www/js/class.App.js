/*
    @author         Okafor Anthony Ikenna
    @email          ikenna@getmp3video.com
    @description    The App object is the app's manager and performs all app specific functions

*/

function App(){
console.log("App");
	
	
Y = this;
Y.name = "App"; 	//This is the className returned by toString()
Y.serverURL = "http://www.getmp3video.com";
Y.fName = "App()";	//This is the full className returned by toFString()
Y.networkStatus		//The network's current status
Y.isOnline,			//App connectivity state, true if online else false
Y.db,      			//The local storage object
Y.DEVICE_NAME,  	//The device name
Y.PG_VER,           //Phonegap/Cordova version
Y.DEVICE_OS,        //Device's operating system name
Y.DEVICE_ID,        //The device's unique id
Y.OS_VERSION,       //The device's OS version
    
// Returns the name of the class
Y.toString = function(){
	console.log("Y.toString");
        return Y.name;
    },

// Returns the full name of the class
Y.toFString = function(){
	console.log("Y.toFString");
        return Y.fname;
    },

//This function runs the first time the app is run
Y.firstRun = function(){
	console.log("Y.firstRun");
        if(Y.db !== window.localStorage) 
            Y.db = window.localStorage;
        Y.db.setItem('device_name',device.name); //replace all Ys in brackets with device
        Y.db.setItem('pg_version',device.cordova);
        Y.db.setItem('device_os',device.platform);
        Y.db.setItem('device_id',Y.uuid);
        Y.db.setItem('device_os_ver',Y.version);
		Y.db.setItem('setting_check_update', '1');
    },
    
//This function performs all data storage and retrievals    
Y.dsQuery = function(){
	console.log("Y.dsQuery");
    },
 
//This function checks the device's connection status everytime it changes and upates the networkStatus and isOnline variables accordingly
Y.connectionUpdater = function(){
	console.log("Y.connectionUpdater");
		window.addEventListener('online', function(){
			Y.networkStatus = navigator.connection.type;
			Y.isOnline = true;
		});
	
		window.addEventListener('offline', function(){
			Y.networkStatus = navigator.connection.type;
			Y.isOnline = false;
		});
	},
	
/*
This function performs all server communication.
It accepts a single parameter, an object o which should have the following parameters and functions:
o.url: The url to be queied.
o.message: The message to be sent across the network. [String]
o.method: Either GET or POST. Method to be used in sending the message. [String]
o.success(optional): An optional callback function to be executed after the message has succeeded. [fn]
o.fail(optional): An optional callback function to be executed after the message has failed. [fn]
o.rHeader(optional): Request header parameters in a name=value pair. [String]

Returns
The function returns an object with the following values.
o.responseText: The responseText received from the server.
o.statusText: The response status text received from the server.
o.status: The status code receive from the server.
*/
Y.dataTransfer = function(o){
	console.log("Y.dataTransfer");
			if(!Y.isOnline){
				alert('Your device is offline',null,'Device offline!','Close');
				return null;
			} else {
				var ajax = new XMLHttpRequest();
				if(o.method == "GET"){
				ajax.open(o.method,o.url+o.message);
				ajax.send();
				} else {
					ajax.open(o.method, o.url);
					ajax.setRequestHeader(o.rHeader);
					ajax.send(o.message);
				}
				ajax.onreadystatechange = (function(e){
					if(o.callBackSuccess != null && ajax.status == 200 && ajax.readyState == 4){
						o.callBackSuccess.call(this,e);
					}
					if(o.callBackFail != null && ajax.status != 200 && ajax.readyState != 4){
						o.callBackFail.call(this,e);
					}
					return e;
				});
			}
		
		return;
    },
	
Y.youGetterApi = function(message, method, cbSuccess, cbFail){
	 //Sends video link to app's server
	console.log("Y.youGetterApi");
	},

Y.audioDownload = function(){
	console.log("Y.audioDownload");
},
	
Y.linkGetter = function(yid){
	console.log("Y.linkGetter");
	var sString = $(yid).value;
	
},
//state == 1: Show wait screen
//state == 0: Hide wait screen
Y.waitScreen = function(state){
	console.log("Y.waitScreen");
		if(state === 1) $("#wait-box").show();
	//document.getElementById("wait-box").addClass = "show";
		if(state === 0) $("#wait-box").hide();
},
	
Y.errorScreen = function(){
	console.log("Y.errorScreen");
	$("#error-box").show();
	//document.getElementById("Error-box").addClass = "show";
	setTimeout(2000);
	$("#error-box").hide();
	//document.getElementById("Error-box").addClass = "hide";
},

Y.youDownload = function(yid){
	console.log("Y.youDownload");
        /* your code goes here */ 
		linkGetter(yid);
		waitScreen(1);
		if(!responseOk) errorScreen();
		if(responseOk){
				
			}
	},
	
Y.alertDialog = function(msg){
	console.log("Y.alertDialog");
		//displays s custom alert box and an ok button to close
		//Temporarily use native alerts here till custom alert boxes are provide
		window.alert(msg);
	},
	
Y.confirmDialog = function(msg, callback){
		console.log("Y.confirmDialog");
		var args = arguments; //Holds the parameters passed to the function
		//Temporarily use native confirm dialog until custom dialog is available
		var response = window.confirm(msg);
		callback.call(response);
	},
		
Y.msgDialog = function(msg){
	console.log("Y.msgDialog");
	//Displays messages to the user and an ok button to close the dialog
	},


 Y.splashScreenShow = function(){
	console.log("Y.splashScreenShow");
	 	if( navigator.splashscreen && navigator.splashscreen.show ) {   // Cordova API detected
        navigator.splashscreen.show() ;
    }
    if( window.intel && intel.xdk && intel.xdk.device ) {           // Intel XDK device API detected, but...
        if( intel.xdk.device.showSplashScreen )                     // ...hideSplashScreen() is inside the base plugin
            intel.xdk.device.showSplashScreen() ;
    	}
 	}, 

 Y.splashScreenHide = function(){
	 console.log("Y.splashScreenHide");
	 	if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    if( window.intel && intel.xdk && intel.xdk.device ) {           // Intel XDK device API detected, but...
        if( intel.xdk.device.hideSplashScreen )                     // ...hideSplashScreen() is inside the base plugin
            intel.xdk.device.hideSplashScreen() ;
    	}
	
 	},
	
Y.exit = function(){
	console.log("Y.exit");
	//Exits the application
	//Later perform app exit operations before exiting app here
	navigator.app.exitApp();
	
	},
	
//Performs all startup operations 
Y.init = function(){
	console.log("Y.init");
    if(Y.db !== window.localStorage) 
    Y.db = window.localStorage;
    Y.DEVICE_NAME  = Y.db.getItem('device_name');
    Y.PG_VER  = Y.db.getItem('pg_version');
    Y.DEVICE_OS  = Y.db.getItem('device_os');
    Y.DEVICE_ID  = Y.db.getItem('device_id');
    Y.OS_VERSION  = Y.db.getItem('device_os_ver');
	if(Y.DEVICE_ID == null) Y.firstRun();
	Y.connectionUpdater();
     //May be debugged here

}
//Y.init();
}
window.Y = App();