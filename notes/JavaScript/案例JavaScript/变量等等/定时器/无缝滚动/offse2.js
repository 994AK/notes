var oDiv = document.getElementById("div1"),
    oUl = oDiv.getElementsByTagName('ul')[0],
    aLi = oUl.getElementsByTagName('li');
oUl.innerHTML += oUl.innerHTML;
//ul的宽度 =li的宽 * li的宽 就等于 想要宽 + px;
oUl.style.width = aLi[0].offsetWidth * aLi.length + "px";
function oF() {
    //图片每次 走 往左-2px,然后判断 当前的Left的位置 < Left/2的时候,复位到0;
    // oUl.offsetLeft < -oUl.offsetWidth / 2 ? oUl.style.left = '0': ' ';


    oUl.style.left = oUl.offsetLeft - 2 + "px";
}
setInterval( oF(), 60);