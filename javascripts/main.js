$(document).ready(function(){
    $('.imgBox li').css({display:'none',opacity:0});
    $('.imgBox li.act').css({display:'block',opacity:1});
    $('.dotBox a').click(function(){
        var imgNum=$('.dotBox a').index(this);
        $(this).parent().addClass('active').siblings().removeClass();
        $('.imgBox li.act').animate({opacity:0},1000,function(){$(this).css('display','none')}).removeClass('act');
        $('.imgBox li').eq(imgNum).css('display','block').animate({opacity:1},1000).addClass('act');
    });
});
