$(function () {
    avalon.ready(function () {
        window.vmBankCard = avalon.define({
            $id: 'personalBankCard',
            onLoad: function () {

            },
            addBankCard:function(){
                layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['819px', '493px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['addBankCard.html']
                });
            },
            // 设为默认
            setDefault:function(){
                layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['759px', '366px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['setDefault.html']
                });
            },
            //解绑
            unbind:function(){
                layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['819px', '456px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['bankCardUnbind.html']
                });
            } 
        });
        vmBankCard.onLoad();
        avalon.scan(document.body);
    });
});