$(document).ready(function(){
    var currentIndex = 0;
    setInterval(function(){
        if(currentIndex < 1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        var slidePosition = currentIndex * (-950)+"px";
        $(".slide-list").animate({ top: slidePosition},400);
    },3000);
    
    var tabBtn = $(".tab-btn li"),
        tabCon = $(".tab-con");
    tabCon.hide().eq(0).show();
    $(".tab-btn li:first-child").addClass("on");
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this),
            index = target.index();
        tabBtn.removeClass("on");
        target.addClass("on");
        tabCon.hide();
        tabCon.eq(index).show();
    });
     
});