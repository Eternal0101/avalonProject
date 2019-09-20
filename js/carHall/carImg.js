$('.tab-title li').click(function () {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $('.tab-content .tab-detail').hide();
    $('.tab-content .tab-detail').eq($(this).index()).show();
});
$(function(){
    avalon.ready(function(){
        window.vmCarImg = avalon.define({
            $id:'root',
            onLoad:function(){

            },
            getPage: function (el) {
                var src = el.currentTarget.dataset.src;
                // if (src == 'views/home.html'){
                   
                // }else{
                    window.parent.parent.document.getElementById('test').src = src;
                    // parent.test.location.reload();
                // }
            }
        });
        vmCarImg.onLoad();
        avalon.scan(document.body);
    });
});