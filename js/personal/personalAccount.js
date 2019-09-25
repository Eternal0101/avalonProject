$(function(){
    avalon.ready(function(){
        window.vmPAccount = avalon.define({
            $id: 'personalAccount',
            onLoad:function(){

            },
            // 充值
            recharge:function(){
                layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['819px', '493px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['recharge.html']
                });
            },
            // 提现
            extract:function(){
                layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['819px', '493px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['extract.html']
                });
            }
        });
        vmPAccount.onLoad();
        avalon.scan(document.body);
    }); 
});