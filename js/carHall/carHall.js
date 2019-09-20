$('.tab-title li').click(function () {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $('.tab-content .tab-detail').hide();
    $('.tab-content .tab-detail').eq($(this).index()).show();
});

$('.img_carSeries').hover(function(){
    $(this).find('.info_carSeries').show();
},function(){
    $(this).find('.info_carSeries').hide();
});
$('.img_carSeries_small').hover(function(){
  $(this).find('.info_carSeries_small').show();
},function(){
  $(this).find('.info_carSeries_small').hide();
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
                getAjax(API.URL_GET_NEWS, 'get', vmCarHall.newsData).then(function (res) {
                    for(var i=0;i<res.result.length;i++){
                        res.result[i].images = getApiHost + res.result[i].images;
                    }
                    vmCarHall.newsList = res.result;
                    console.log(vmCarHall.newsList);
                });
            },
            getPage:function(el){
                var src = el.currentTarget.dataset.src;
                window.parent.document.getElementById('test').src = src;
            }
        });
        vmCarHall.onLoad();
        avalon.scan(document.body);
    });
});