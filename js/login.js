$(function(){
    // 获取当天日期
    function getNowFormatDate() {
        var date = new Date();
        var seperator = "-";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
        return currentdate;
    }
    getAjax(API.URL_POST_SETTOKEN, 'post', {
        version: '2.0.1',
        author: '丶Lee',
        email: '1144318071@qq.com',
        date: getNowFormatDate
    }).then(function (res) {
        // 保存token
        localStorage.setItem('token',res.result.token);
    });
    avalon.ready(function(){
        window.vmLogin = avalon.define({
            $id:'root',
            onLoad:function(){
            },
             // 切换密码登录
            changePwdShow:function(pwd,code){
                $(pwd).show();
                $(code).hide();
            },
            // 切换验证码登录
            changeCodeShow: function (pwd, code) {
                $(pwd).hide();
                $(code).show();
            },
            // 获取验证码(加上倒计时功能)
            getCheckCode:function(){
                let count = 60;
                const countDown = setInterval(()=>{
                    if(count == 0){
                        $('.layui-btn-Code').text('获取验证码').removeAttr('disabled');
                        clearInterval(countDown);
                    }else{
                        $('.layui-btn-Code').attr('disabled',true);
                        $('.layui-btn-Code').css({'background':'#ff0000','cursor':'pointer'});
                        $('.layui-btn-Code').text('重新发送(' + count+')');
                    }
                    count--;
                },1000);
            }
        });
        vmLogin.onLoad();
        avalon.scan(document.body);
    });
});