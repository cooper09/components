// main home page javascript file

$(document).ready(function(){

    $("#menuBtn").toggle(function(){
      $("#menu .mzr-responsive").css("display","block")
      $("#menu").css("display","block")
    },
    function(){
     $("#menu .mzr-responsive").css("display","none")
     $("#menu").css("display","none")
   }
   );

     //social button toggle 
     $("#socialBtn").toggle(function(){
      $(".socialwrapper .mzr-responsive").css("display","block")
    },
    function(){
     $(".socialwrapper .mzr-responsive").css("display","none")
   }
   );
    //spotlight button toggle
    $("#spotlightBtn").toggle(function(){
      $(".spotlightwrapper .mzr-responsive").css("display","block")
    },
    function(){
     $(".spotlightwrapper .mzr-responsive").css("display","none")
   }
   );
    //usaa jobs button toggle
    $("#usaaBtn").toggle(
      function(){ $("#USAAwrapper .mzr-responsive").css("display","block") },
      function(){ $("#USAAwrapper .mzr-responsive").css("display","none") }
    );
    
  });