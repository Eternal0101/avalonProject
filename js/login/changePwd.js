$(function () {
    avalon.ready(function () {
        window.vmChangePwd = avalon.define({
            $id: 'root',
            onLoad: function () {
                console.log('修改密码');
            }
        });
        vmChangePwd.onLoad();
        avalon.scan(document.body);
    });
});