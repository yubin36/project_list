$(document).ready(function(){

    var mainSwiper = new Swiper('.mainVisArea .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight : false,
        speed : 800,
        loop : true,
        autoplay : {
            delay : 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });
    
    $('.mainVisArea .swiper-pagination').append('<a href="#" class="playBt"></a>');
    $('.mainVisArea .swiper-pagination .playBt').click(function(e){
        e.preventDefault();
        
        if( !$(this).hasClass('on') ){
            $(this).addClass('on');
            mainSwiper.autoplay.stop();
            
        }else{
            $(this).removeClass('on');
            mainSwiper.autoplay.start();
        }
    });
    
    $('.mainCon1List li').each(function(idx){
        $(this).hover(function(){
            $('.mainCon1Bg div').eq(idx).fadeIn(600); 
        },function(){
            $('.mainCon1Bg div').eq(idx).fadeOut(600); 
        });     
    });
    
    $(window).scroll(function(){
        var winScrollT = $(window).scrollTop(),
             winH = $(window).height()/2,
             mainScrollT = winScrollT + winH,  
             mCon1Top = $('.mainCon1').offset().top,
             mCon2Top = $('.mainCon2').offset().top,
             mCon3Top = $('.mainCon3').offset().top,
             ftTop = $('#footer').offset().top;
        console.log(winScrollT , winH, mainScrollT, mCon1Top ,  mCon2Top ,  mCon3Top , ftTop);
        
        if(winScrollT >= mCon1Top) {
            $('.topBtn').addClass('on');
        }
        else if(winScrollT <= mCon1Top){
            $('.topBtn').removeClass('on');
        }

        if(mainScrollT >= mCon1Top && mainScrollT <= mCon2Top){
            $('.mainCon1 .mainTit').animate({'top':'0', 'opacity' : '1'},600,'swing');
            $('.mainCon1 .mainTxt').delay(200).animate({'top':'0', 'opacity' : '1'},600,'swing');
            $('.mainCon1 .mainCon1List').delay(400).animate({'top':'0', 'opacity' : '1'},600,'swing');
            
        }else if(mainScrollT >= mCon2Top && mainScrollT <= mCon3Top){
            $('.mainCon2 .mainTit').animate({'top':'0', 'opacity' : '1'},600,'swing');
            $('.mainCon2 .mainTxt').delay(200).animate({'top':'0', 'opacity' : '1'},600,'swing');
            $('.mainCon2 .mainCon2List').delay(400).animate({'top':'0', 'opacity' : '1'},600,'swing');
            
        }else if(mainScrollT >= mCon3Top && mainScrollT <= ftTop){
            $('.mainCon3 .mainTit').animate({'top':'0', 'opacity' : '1'},600,'swing');
            $('.mainCon3 .mainTxt').delay(200).animate({'top':'0', 'opacity' : '1'},600,'swing');
            $('.mainCon3 .mainNews').delay(400).animate({'top':'0', 'opacity' : '1'},600,'swing');
        }
        
    });
    
    $('.topBtn').click(function(){
        $('html, body').animate({'scrollTop':'0'},600,'swing');
    });
    
});


