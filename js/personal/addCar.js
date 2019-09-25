$(function(){
    // 上传图片的滑入滑出效果
    $('.upload').hover(function(){
        $(this).find('.uploadimg').show();
    },function(){
        $(this).find('.uploadimg').hide();
    });
    // 上传图片功能
    layui.use('upload', function () {
        var $ = layui.jquery,
            upload = layui.upload;
        //行驶证图片上传
        var uploadInst = upload.render({
            elem: '#test1',
            url: '/upload/',
            before: function (obj) {
                //预读本地文件示例，不支持ie8
                obj.preview(function (index, file, result) {
                    $('#demo1').attr('src', result); //图片链接（base64）
                });
            },
            done: function (res) {
                //如果上传失败
                if (res.code > 0) {
                    return layer.msg('上传失败');
                }
                //上传成功
            },
            error: function () {
                //演示失败状态，并实现重传
                var demoText = $('#demoText');
                demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                demoText.find('.demo-reload').on('click', function () {
                    uploadInst.upload();
                });
            }
        });
        //车辆图片上传
        var uploadInit = upload.render({
            elem: '#test2',
            url: '/upload/',
            before: function (obj) {
                //预读本地文件示例，不支持ie8
                obj.preview(function (index, file, result) {
                    $('#demo1').attr('src', result); //图片链接（base64）
                });
            },
            done: function (res) {
                //如果上传失败
                if (res.code > 0) {
                    return layer.msg('上传失败');
                }
                //上传成功
            },
            error: function () {
                //演示失败状态，并实现重传
                var demoText = $('#demoText');
                demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                demoText.find('.demo-reload').on('click', function () {
                    uploadInit.upload();
                });
            }
        });
    });
    
    avalon.ready(function(){
        window.vmAddCar = avalon.define({
            $id : 'root',
            onLoad:function(){

            },
            // 取消
            cancelAdd:function(){
                parent.layer.close(parent.layer.index);
            },
            // 获取验证码
            getCheckCode:function(){
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
                            'border':'1px solid #f00'
                        });
                        $('.btn-gray').text('重新发送(' + count + ')');
                     }
                     count--;
                 }, 1000);
            },
            // 添加车辆
            addCar:function(){
            }
        });
        vmAddCar.onLoad();
        avalon.scan(document.body);
    }); 
});