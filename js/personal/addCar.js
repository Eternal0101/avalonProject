$(function(){
    avalon.ready(function(){
        window.vmAddCar = avalon.define({
            $id : 'root',
            onLoad:function(){

            },
            // 取消
            cancelAdd:function(){
                parent.layer.close(parent.layer.index);
            }
        });
        vmAddCar.onLoad();
        avalon.scan(document.body);
    }); 
});