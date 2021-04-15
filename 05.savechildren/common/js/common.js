$(function(){

    $(window).scroll(function(){
        var  scrollT = $(window).scrollTop(); 
        //console.log(scrollT);
        
        if( scrollT > 0 ){
            $('#header').addClass('fixed');   
        }else{
            $('#header').removeClass('fixed');  
        }
    });

    $('#header .menuWrap .gnbArea, #header .gnbBg').on( 'mouseenter' , function(){
        $('.twoD').stop().fadeIn();
        $('.gnbBg').stop().slideDown();
    });
    $('#header .menuWrap .gnbArea, #header .gnbBg').on( 'mouseleave' , function(){
        $('.twoD').stop().fadeOut();
        $('.gnbBg').stop().slideUp();
    });
    $('#header .gnb > li').each(function(idx){
        $(this).mouseenter(function(){
            $('#header .gnb > li').eq(idx).addClass('on');
        })
        $(this).mouseleave(function(){
            $('#header .gnb > li').eq(idx).removeClass('on');
        })
    });
    
    var isMgnb = false;
    $('.openBt').click(function(){
        if( isMgnb == false ){
            $('#headerM .menuWrapM').animate({'left':'0'},300,'swing');
            isMgnb = true;
        }    
    });
    
    $('.closeBt').click(function(){
        if( isMgnb == true ){
            $('#headerM .menuWrapM').animate({'left':'-100%'},300,'swing'); 
            isMgnb = false;
        }
    });

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