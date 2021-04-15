$(document).ready(function(){
    
    var btnOpen = $('.aligner .open'),
        btnClose = $('.aligner .close');
    
    btnOpen.click(function(){  
        $('.drawer').show();   
    });
    btnClose.click(function(){  
        $('.drawer').hide();   
    });
    
});