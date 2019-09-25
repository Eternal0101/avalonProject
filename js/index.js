// function reinitIframe() {
//     var iframe = document.getElementById("test");
//     try {
//         var bHeight = iframe.contentWindow.document.body.scrollHeight;
//         var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
//         var height = Math.max(bHeight, dHeight);
//         iframe.height = height;
//     } catch (ex) { }
// }
// window.setInterval("reinitIframe()", 200);
// <div class='content'>
//     <iframe src="./views/home.html" id="test" name='test' width='100%' onload="this.height=100" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
// </div>
// 导航 
// $('.layui-nav .layui-nav-item').on('click', function () {
//     var src = $(this).attr('data-src');
//     location.href = src;
// });
// function changeViews(el){
//     $('#test').attr('src', el);
// }