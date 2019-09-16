$(function(){
    avalon.ready(function(){
        window.vmChangePhone = avalon.define({
            $id : 'root',
            onLoad:function(){
                console.log('修改手机号');
            }
        });
        vmChangePhone.onLoad();
        avalon.scan(document.body);
    });
});