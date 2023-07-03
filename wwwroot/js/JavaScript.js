//病人管理

function bingr() {
var xhr = new XMLHttpRequest();
xhr.open('GET', "/Home/Index5", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
        // 请求成功处理逻辑
     window.location.href = "/Home/Index5";// 跳转到另一个页面
       
    } else if (xhr.status >= 400 && xhr.status < 500) {
        alert(xhr.response.message);
    } else if (xhr.status >= 500) {
        alert('服务器内部错误：' + xhr.response.message);
    }

};
    xhr.send();
}
//排班
function bingr1(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/Home/Index6", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
            // 请求成功处理逻辑
            window.location.href = "/Home/Index6";// 跳转到另一个页面
        } else if (xhr.status >= 400 && xhr.status < 500) {
            alert(xhr.response.message);
        } else if (xhr.status >= 500) {
            alert('服务器内部错误：' + xhr.response.message);
        }

    };
    xhr.send();
}

//报告
function bingr2() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/Home/Index7", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
            // 请求成功处理逻辑
            window.location.href = "/Home/Index7";// 跳转到另一个页面
        } else if (xhr.status >= 400 && xhr.status < 500) {
            alert(xhr.response.message);
        } else if (xhr.status >= 500) {
            alert('服务器内部错误：' + xhr.response.message);
        }

    };
    xhr.send();
}

//报告
function bingr3() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/Home/Index8", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
            // 请求成功处理逻辑
            window.location.href = "/Home/Index8";// 跳转到另一个页面
        } else if (xhr.status >= 400 && xhr.status < 500) {
            alert(xhr.response.message);
        } else if (xhr.status >= 500) {
            alert('服务器内部错误：' + xhr.response.message);
        }

    };
    xhr.send();
}

//床位
function bingr4() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/Home/Index9", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
            // 请求成功处理逻辑
            window.location.href = "/Home/Index9";// 跳转到另一个页面
        } else if (xhr.status >= 400 && xhr.status < 500) {
            alert(xhr.response.message);
        } else if (xhr.status >= 500) {
            alert('服务器内部错误：' + xhr.response.message);
        }

    };
    xhr.send();
}
//库存
function bingr5() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/Home/Index10", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
            // 请求成功处理逻辑
            window.location.href = "/Home/Index10";// 跳转到另一个页面
        } else if (xhr.status >= 400 && xhr.status < 500) {
            alert(xhr.response.message);
        } else if (xhr.status >= 500) {
            alert('服务器内部错误：' + xhr.response.message);
        }

    };
    xhr.send();
}

//去注册
function bingr6() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/Home/Index11", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
            // 请求成功处理逻辑
            window.location.href = "/Home/Index11";// 跳转到另一个页面
        } else if (xhr.status >= 400 && xhr.status < 500) {
            alert(xhr.response.message);
        } else if (xhr.status >= 500) {
            alert('服务器内部错误：' + xhr.response.message);
        }

    };
    xhr.send();
}

function bingr7() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/Home/Index13", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
            // 请求成功处理逻辑
            window.location.href = "/Home/Index13";// 跳转到另一个页面
        } else if (xhr.status >= 400 && xhr.status < 500) {
            alert(xhr.response.message);
        } else if (xhr.status >= 500) {
            alert('服务器内部错误：' + xhr.response.message);
        }

    };
    xhr.send();
}
