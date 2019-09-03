/*
* @无缝连接
* 代码
* */
var oDiv = document.getElementById("div1"),
    oUl = oDiv.getElementsByTagName('ul')[0],
    aLi = oUl.getElementsByTagName('li');

oUl.innerHTML += oUl.innerHTML;
oUl.style.width = aLi[0].offsetWidth * aLi.length + "px";

function move() {
    oUl.offsetLeft < -oUl.offsetWidth / 2
        ? oUl.style.left = '0'
        : ' ';
    oUl.offsetLeft > 0
        ? oUl.style.left = -oUl.offsetWidth / 2 + 'px'
        : ' ';
    oUl.style.left = oUl.offsetLeft - 4 + "px";
    //修改 4 数组 负数向右走 正向左走.
}
var timer = setInterval(move, 20);

/*
* @导航栏
* 基础测试.
* 获取 id 想用导入
* */
var oDiv1 = document.getElementsByTagName("div")[0],
    oDiv2 = document.getElementsByTagName("div")[1],
    timer = '';

oDiv1.onmouseover = oDiv2.onmouseover = function () {
    oDiv2.style.display = "block"; //移进的时候 显示 div2
    clearTimeout(timer);
};

oDiv1.onmouseout = oDiv2.onmouseout = function () {
    timer = setTimeout(function () {
        oDiv2.style.display = 'none' //移出的时候 消失 div2;
    }, 1000/30)
};

/*
* 时间案例
*
* */
function toDou(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return '' + n;
    }
}
window.onload = function () {
    var aImg = document.getElementsByTagName("img"),
        aleng = aImg.length; //.length

    function tick() {
        var oDate = new Date(),//获取时间
            str = toDou(oDate.getHours())
                + toDou(oDate.getMinutes())
                + toDou(oDate.getSeconds());

        for (var i = 0; i < aleng; i++) { //循环img
            aImg[i].src = str[i] + '.png'; // 0.png
        }//循环END
        setInterval(tick, 1000);
    }//tick END
    tick();
}//onload END