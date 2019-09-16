$(function () {
    avalon.ready(function () {
        window.vmCompleteInfo = avalon.define({
            $id: 'root',
            onLoad: function () {
                console.log('完善信息');
            }
        });
        vmCompleteInfo.onLoad();
        avalon.scan(document.body);
    });
});