$('.tab-title li').click(function () {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $('.tab-content .tab-detail').hide();
    $('.tab-content .tab-detail').eq($(this).index()).show();
});
$(function(){
    avalon.ready(function(){
        window.vmCarHall = avalon.define({
            $id : 'root',
            newsData:{
                '_token_': token,
                'page': '1',
                'limit': '11',
                'type': '20',
                'news_type': ''
            },
            newsList:[],
            onLoad:function(){
                vmCarHall.getNewsList();
            },
            getNewsList:function(){
                console.log(token)
                getAjax(API.URL_GET_NEWS, 'get', vmCarHall.newsData).then(function (res) {
                    for(var i=0;i<res.result.length;i++){
                        res.result[i].images = getApiHost + res.result[i].images;
                    }
                    vmCarHall.newsList = res.result;
                    console.log(vmCarHall.newsList);
                });
            }
        });
        vmCarHall.onLoad();
        avalon.scan(document.body);
    });
});