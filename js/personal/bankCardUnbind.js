$(function () {
    avalon.ready(function () {
        window.vmUnbind = avalon.define({
            $id: 'root',
            onLoad: function () {

            },
            // 获取验证码
            getCheckCode: function () {
                let count = 60;
                const countDown = setInterval(() => {
                    if (count == 0) {
                        $('.btn-gray').text('获取验证码').removeAttr('disabled');
                        clearInterval(countDown);
                    } else {
                        $('.btn-gray').attr('disabled', true);
                        $('.btn-gray').css({
                            'background': '#ff0000',
                            'cursor': 'pointer',
                            'border': '1px solid #f00'
                        });
                        $('.btn-gray').text('重新发送(' + count + ')');
                    }
                    count--;
                }, 1000);
            },
            cancel: function () {
                parent.layer.close(parent.layer.index);
            }
        });
        vmUnbind.onLoad();
        avalon.scan(document.body);
    });
});