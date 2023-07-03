// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




var code = draw();
function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
    code = getRandomCode(); // 获取随机验证码
    for (var i = 0; i < code.length; i++) {
        ctx.font = "bold 20px Arial"; // 字体样式
        ctx.fillStyle = getRandomColor(); // 随机颜色
        ctx.fillText(code.charAt(i), 25 * i + 10, 25); // 绘制字符
    }
}

// 生成随机验证码
function getRandomCode(len = 4) {
    var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
    var code = "";
    for (var i = 0; i < len; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// 生成随机颜色
function getRandomColor() {
    return "#" + Math.random().toString(16).substr(2, 6);
}




//验证
var t, tt;
function tt() {

    var account = document.getElementById("11").value;
    var password = document.getElementById("22").value;



    // 判断账号和密码是否符合要求
    var reg = /^[a-zA-Z0-9]{1,20}$/;
    if (!reg.test(document.getElementById("11").value)) {
        alert("账号应该是字母或数字且长度最大20");
        return;
    }

    if (!reg.test(document.getElementById("22").value)) {
        alert("密码应该是字母或数字且长度最大20");
        return;
    }

    // 判断两次输入的密码是否一致
    if (password != document.getElementById("myInp").value) {
        alert("两次输入的密码不一致");
        return;
    }



    // 将账号和密码传到后端
    var account = document.getElementById("11").value;
    var password = document.getElementById("22").value;
    // 将账号和密码打包成JSON格式
    var data = JSON.stringify({
        "Account": account,
        "Password": password
    });

    // 发送POST请求
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "/Home/Index12", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 请求成功处理逻辑
            alert("更改成功");
            window.location.href = "/Home/Index4";
        } else if (xhr.status >= 400 && xhr.status < 500) {
            alert(xhr.response.message + "账号不存在");
        } else if (xhr.status >= 500) {
            alert('服务器内部错误：' + xhr.response.message);
        }

    };
    xhr.send(data);
}