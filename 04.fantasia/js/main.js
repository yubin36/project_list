/*스와이퍼 슬라이드 실행-*/
$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            /*type: 'progressbar',*/
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
