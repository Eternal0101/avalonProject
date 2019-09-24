$(function(){
    avalon.ready(function(){
        window.vmVehicle = avalon.define({
            $id: 'vehicleManagement',
            onLoad:function(){
                console.log('车辆管理');
            },
            addCar:function(){
                layer.open({
                    type: 2,
                    title: false,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    area: ['819px', '667px'],
                    shadeClose: true, //开启遮罩关闭
                    content: ['addCar.html']
                });
            }
        });
        vmVehicle.onLoad();
        avalon.scan(document.body);
    });
});