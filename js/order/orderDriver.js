layui.use(['laypage', 'layer'], function () {
    var laypage = layui.laypage,
    layer = layui.layer;
    //自定义样式
    laypage.render({
        elem: 'demo2',
        count: 1000,
        theme: '#f57619'
    });
});
$('.tab li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabContent .tabItem').eq($(this).index()).show().siblings().hide();
});
$(function(){
    avalon.ready(function(){
        window.vmOrderDriver = avalon.define({
            $id : 'root',
            onLoad:function(){

            },
            // 查看评价
            checkRate:function(){
                top.layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['963px', '635px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['/views/orderDriver/orderRate.html']
                });
            },
            // 取消货单
            cancelOrder:function(){
                top.layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['974px', '901px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['/views/orderDriver/orderCancel.html']
                });
            },
            // 申述
            orderAppeal:function(){
                top.layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['969px', '848px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['/views/orderDriver/orderDes.html']
                });
            },
            // 查看路线
            checkLine:function(){
                top.layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['1133px', '904px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['/views/orderDriver/checkLine.html']
                });
            }
        });
        vmOrderDriver.onLoad();
        avalon.scan(document.body);
    });
});