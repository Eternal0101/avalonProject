$(function () {
    avalon.ready(function () {
        window.vmPAgent = avalon.define({
            $id: 'personalAgent',
            onLoad: function () {

            },
            // 提现
            applyMoney: function () {
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
        vmPAgent.onLoad();
        avalon.scan(document.body);
    });
});