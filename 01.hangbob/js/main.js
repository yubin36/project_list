$(function(){

    $('.main-slider-wrapper').bxSlider({
        speed : 800,
        auto : true,
        autoControls : true,
        pause : 6000
    });
    $('.menu-box').bxSlider({
        mode: 'horizontal',
        slideWidth: 600,
        slideMargin : 35 ,
        minSlides: 3 ,
        maxSlides: 3 ,
        moveSlides: 1 ,
        nextText : '다음',
        prevText : '이전',
        nextSelector : '#menu-next' ,
        prevSelector : '#menu-prev'
    });
});