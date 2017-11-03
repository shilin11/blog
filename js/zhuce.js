$(function () {
        $("form").validate({
            rules:{
                uname: {
                    required: true,
                    minlength:5
                },
                upass: {
                    required: true,
                    minlength:5
                },
                upass1:{
                    required: true,
                    minlength: 5,
                    equalTo: "#upass"
                }
            },
            messages:{
                uname: {
                    required: "用户名不能为空",
                    minlength: "用户名至少五个字符"
                },
                upass:{
                    required: "密码不能为空",
                    minlength: "密码至少五个字符"
                },
                upass1: {
                    required: "请确认密码",
                    minlength:"密码至少五个字符",
                    equalTo: "请输入和上面一致的密码"
                }
            }
        })
})