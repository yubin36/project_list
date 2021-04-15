$(document).ready(function(){
    //gnb
    $('#gnb > li').on('mouseenter focusin' ,function(){
       $(this).addClass('on');
    });
    $('#gnb > li').on('mouseout focusin' ,function(){
       $(this).removeClass('on');
    });
    //언어
    $('.langBtn').click(function(){
        if($('.lang-list').is(':hidden')){
            $('.lang-list').show();
            $(this).parent().addClass('active');
        }else{
            $('.lang-list').hide();
            $(this).parent().removeClass('active');
        }
    });
    //검색영역
    $('.searchBtn').click(function(){
        if($('.search-area').css('display') == 'none'){
            $('.search-area').slideDown(); 
            $(this).addClass('active');
        }else{
            $('.search-area').slideUp();
            $(this).removeClass('active');
        }
    });
    //관심정보
    $('#sec2 >.txt-box  > li > a').mouseenter(function(){
        $(this).parent('li').addClass('active');
    });
    $('#sec2 >.txt-box  > li > a').mouseleave(function(){
        $(this).parent('li').removeClass('active');
    });

     //어트랙션 탭
    var tabs = $('#sec3 .tab li');
    var attraction = $('#sec3 .attraction-wrap .attraction');
    
    /*클릭전 처음 화면*/
    attraction.hide();
    attraction.first().show();
    tabs.first().addClass('selected');
    
    tabs.click(function(e){
        e.preventDefault();
        var _href = $(this).children('a').attr('href');
    
        tabs.removeClass('selected');
        $(this).addClass('selected');
        
        attraction.hide();
        $(_href).show();
    });
    $('#sec3 .attraction-wrap .attraction').mouseenter(function(){
        $(this).css({'border':'3px solid #fb6514'});
    })
    $('#sec3 .attraction-wrap .attraction').mouseleave(function(){
        $(this).css({'border':'none'});
    })
    
    //패밀리 사이트
    $('.familBtn').click(function(){  
        if($(this).hasClass('on')){
            $(this).removeClass('on');
           /* $('.famil-list').hide();*/
            $('.famil-list').animate({'opacity':'0'},300 ,function(){
                $(this).css({'visibility':'hidden'});
            });
        }else{
            $(this).addClass('on');
            /*$('.famil-list').show();*/
            $('.famil-list').animate({'opacity':'1'},300).css({'visibility':'visible'});
        }  
    });
    
});