$(function(){
    
    $('.main-slider-wrapper').bxSlider({
        speed : 800 , // 움직이는 시간
        auto : true ,
        autoControls : true,
        pause : 6000 //트렌지션 후 머무르는 시간 
    });
     
    //스크롤시 메뉴 fixed
    var gnbBox = $('#gnb-container #gnb').offset().top;
    console.log(gnbBox)
    
    $(window).scroll(function(){
        
        console.log($(document).scrollTop())
       if( $(document).scrollTop() >= gnbBox ){
            $('#gnb-container').addClass('fixed');  
            $('#header').addClass('fixed');  
        }else{
            $('#gnb-container').removeClass('fixed');
            $('#header').addClass('fixed');
        }  
    });
    
    /*함께하는 기업 bx swiper*/
    $('.partner-slider-wrapper').bxSlider({
        mode: 'horizontal',
        slideWidth: 220,
        slideMargin : 20 ,
        minSlides: 4 ,
        maxSlides: 4 ,
        moveSlides: 1 ,
        nextText : '다음',
        prevText : '이전',
        nextSelector : '.next' ,
        prevSelector : '.prev'
    });
    
   
});