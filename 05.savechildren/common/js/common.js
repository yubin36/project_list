$(function(){
    //스크롤 시 헤더 고정
    $(window).scroll(function(){
        var  scrollT = $(window).scrollTop(); 
        //console.log(scrollT);
        
        if( scrollT > 0 ){
            $('#header').addClass('fixed');   
        }else{
            $('#header').removeClass('fixed');  
        }
    });
    
    //gnb에 마우스 enter,leave 시 서브메뉴, 서브메뉴bg 나타남
    $('#header .menuWrap .gnbArea, #header .gnbBg').on( 'mouseenter' , function(){
        $('.twoD').stop().fadeIn();
        $('.gnbBg').stop().slideDown();
    });
    $('#header .menuWrap .gnbArea, #header .gnbBg').on( 'mouseleave' , function(){
        $('.twoD').stop().fadeOut();
        $('.gnbBg').stop().slideUp();
    });
    
    //각 목차 위에 마우스 enter,leave 시 삼각형 모양 추가
    $('#header .gnb > li').each(function(idx){
        $(this).mouseenter(function(){
            $('#header .gnb > li').eq(idx).addClass('on');
        })
        $(this).mouseleave(function(){
            $('#header .gnb > li').eq(idx).removeClass('on');
        })
    });
    
    //모바일 gnb 
    //open 클릭시 서브메뉴 open
    var isMgnb = false;
    $('.openBt').click(function(){
        if( isMgnb == false ){
            $('#headerM .menuWrapM').animate({'left':'0'},300,'swing');
            isMgnb = true;
        }    
    });
    //close 클릭 시 서브메뉴 close
    $('.closeBt').click(function(){
        if( isMgnb == true ){
            $('#headerM .menuWrapM').animate({'left':'-100%'},300,'swing'); 
            isMgnb = false;
        }
    });
    
    //모바일 gnb 목차 클릭 시 서브메뉴 
    var oneDepth = $('#headerM .menuWrapM .gnbArea .gnb > li > .oneD'),
        twoDepth = $('#headerM .menuWrapM .gnbArea .gnb > li > .twoD');
    oneDepth.click(function(){
        
        $(this).parent('li').addClass('on');
        $(this).parent('li').siblings('li').removeClass('on');
        
        oneDepth.removeClass('on');
        twoDepth.slideUp();
        
        if( !$(this).siblings('.twoD').is(':visible') ){
            $(this).addClass('on');
            $(this).siblings('.twoD').slideDown();
        }
    });


});
