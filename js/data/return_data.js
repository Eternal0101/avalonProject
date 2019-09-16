// 错误信息提示
layui.use('layer', function () {
    layer = layui.layer;
});
function alertMsg(msg, icon) {
    layer.msg(msg, {
        icon: icon
    });
}
function getAjax(url, type, data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: type,
            dataType: 'json',
            async: true,
            data: data,
            xhrFields: {
                withCredentials: true
            },
        }).done(function (res) {
            var ajaxdata = res;
            // 返回thisdata 
            resolve(ajaxdata);
        }).fail(function (err) {
            reject(err);
        });
    });
}
// 用法：getAjax(url,type,data).then(function(res){ console.log(res);});

// token
window.token = localStorage.getItem('token');