/*
*  A = 父级
*  B = 处理事件
*  C = 父级的子级 要处理的程序
*  处理程序要用target.  因为指向了 C
* */

A.B = function (ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == "C"){
        alert(123);
        alert(target.innerHTML);
    }
}