$(document).ready(function(){
    $(".open").click(function(){
        $(" .aligner .drawer .body .nav").slideDown(); 
        $(this).hide(); 
        $(".close").show(); 
    });
    $(".close").click(function(){
        $(" .aligner .drawer .body .nav").slideUp(); 
        $(this).hide(); 
        $(".open").show(); 
    });
    $(".sec ul li").mouseover(function(){    
        $(this).children(".icon-box").show();    
    });
    $(".sec ul li").mouseleave(function(){
        $(this).children(".icon-box").hide();
    });
    $(".foot-right .follow ul li").mouseover(function(){
        $(this).addClass("on").css("background-color" , "#ff5353");
    });
    $(".foot-right .follow ul li").mouseleave(function(){
        $(this).removeClass("on").css("background-color" , "#ffffff");  
    });
});