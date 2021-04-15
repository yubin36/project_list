$(document).ready(function(){
    
	$('.gnb > li').mouseenter(function(){	
		$('#header').addClass('on');	
		
	});	
	$('.gnb > li').mouseleave(function(){
		$('#header').removeClass('on');
	});
 
});