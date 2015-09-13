(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #menu-btn */
    
    
        /* button  #menu-btn */
    
    
        /* button  #s-page-menu */
    
    
        /* button  #result-search-button */
    
    
        /* button  Video Download */
    
    
        /* button  Music Download */
    
    
        /* button  Video Download */
    
    
        /* button  Music Download */
    
    
        /* button  #s-page-menu */
    
    
        /* button  #s-page-menu */
    
    
        /* button  #s-page-menu */
    
    
        /* button  #s-page-menu */
    
    
        /* button  #result-search-button */
    
    
        /* button  #s-page-menu */
    
    
        /* button  #s-page-menu */
    
    
        /* button  #result-search-button */
    $(document).on("click", "#result-search-button", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#s-page-search"));  
    });
    
        /* button  #menu-btn */
    
    
        /* button  #s-page-menu */
    $(document).on("click", "#s-page-menu", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#s-page-menu"));  
    });
    
        /* button  Video Download */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_subpage("#page_64_30"); 
    });
    
        /* button  #menu-btn */
    
    
        /* button  #s-page-menu-btn */
    $(document).on("click", "#s-page-menu-btn", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#s-page-menu"));  
    });
    
        /* listitem  Exit */
    $(document).on("click", ".uib_w_25", function(evt)
    {
        /* your code goes here */ 
		app.exit();
    });
    
        /* listitem  Exit */
    $(document).on("click", ".uib_w_21", function(evt)
    {
        /* your code goes here */ 
		app.exit();
		
    });
    
        /* button  #menu-btn */
    $(document).on("click", "#menu-btn", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#home-menu"));  
    });
    
        /* button  #you-btn */
	 $(document).on("click","#you-btn",function(evt)
    {
    	youDownload("you-btn");
	 });
    
        /* button  #s-page-you-btn */
    $(document).on("click", "#s-page-you-btn", function(evt)
    {
        /* your code goes here */ 
		youDownload("#s-page-you-btn");
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
console.log("index_user_script.js");