function reinitIframe() {
    var iframe = document.getElementById("test");
    try {
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight);
        iframe.height = height;
    } catch (ex) { }
}
window.setInterval("reinitIframe()", 200);
// 导航 
$('.layui-nav .layui-nav-item').on('click', function () {
    var src = $(this).attr('data-src');
    changeViews(src);
});
function changeViews(el){
    $('#test').attr('src', el);
}