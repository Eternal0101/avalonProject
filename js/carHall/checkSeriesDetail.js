$('.tabTitle li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabContent .tabDetail').eq($(this).index()).show().siblings().hide();
});