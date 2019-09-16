$(function () {
    avalon.ready(function () {
        window.vmForgetPwd = avalon.define({
            $id: 'root',
            onLoad: function () {
                console.log('忘记密码');
            }
        });
        vmForgetPwd.onLoad();
        avalon.scan(document.body);
    });
});