/*       ‘ * ’ 代表是全部.
*        oParent 代表从哪个父级寻找子节点
*        sClass  class具体是什么
*/

function getByClass(oParent, sClass) {
    var aResult = [];//收集你想获取的class
    var aEle = oParent.querySelectorAll('*');
    for (var i = 0; i < aEle.length; i++)
    {
       if (aEle[i].className == sClass)
       {
           aResult.push(aEle[i]);
       }
    }
    return aResult //一次 性返回出来.
}