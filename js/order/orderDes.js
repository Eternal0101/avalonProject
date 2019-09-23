$(function () {
    avalon.ready(function () {
        window.vmOrderCancel = avalon.define({
            $id: 'root',
            onLoad: function () {

            },
            return: function () {
                parent.layer.close(parent.layer.index);
            }
        });
        vmOrderCancel.onLoad();
        avalon.scan(document.body)
    });
});