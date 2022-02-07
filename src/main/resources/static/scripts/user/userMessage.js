layui.use(['form', 'element','layer'], function () {
    let form = layui.form;
    let element = layui.element;
    let layer = layui.layer;
});

$('#modify-user').on('click', function () {

    //页面层
    layer.open({
        type: 1 //Page层类型
        , skin: 'layui-layer-molv'
        , area: ['380px', '270px']
        , title: ['修改信息', 'font-size:18px']
        , btn: ['保存', '取消']
        , shadeClose: true
        , shade: 0 //遮罩透明度
        , content: $("#window")
        , yes: function () {
            updateUser();
        }
    });
});

function updateUser() {
    $.ajax({

        async: false,
        type: 'post',
        url: '/managebooks/updateUser',
        data: $('#updateUserForm').serialize(),
        success: function (data) {
            layer.alert('修改成功', {icon: 1}, function () {
                location.reload();
            });
        },
        error: function (data) {
            layer.alert("修改shibai");
        }
    });
};