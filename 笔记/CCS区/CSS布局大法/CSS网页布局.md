# 网页布局

**网页实质是块与块之间的位置，块挨着块，块嵌套块，块叠着块。**

**三种关系：相邻，嵌套，重叠**。

下面介绍网页布局的常用几种方式

![img](https://images2018.cnblogs.com/blog/1047894/201803/1047894-20180301063419313-637038703.png)

**1.一列布局：**

**一般都是固定的宽高，设置margin : 0 auto来水平居中，用于界面显著标题的展示等；**

```
        .main{
            width: 200px;
            height: 100px;
            background-color: grey;
            margin: 0 auto;
        }
<div class="main"></div>
```



2.**两列布局：**

　　说起两列布局，最常见的就是使用[float](http://www.cnblogs.com/xiaohuochai/p/5243735.html)来实现。float浮动布局的缺点是浮动后会造成文本环绕等效果，以及需要及时[清除浮动](http://www.cnblogs.com/xiaohuochai/p/5248981.html)。

设置左左浮动，或设置左右浮动（这是需要确定父级元素的宽度）

　　**如何父级元素没有设置高度，则需要设置overflow:hidden来清除浮动产生的影响**

　　**对于自己相邻元素清除浮动产生的影响用：clear：both;**

```
 .main{
            width: 400px;
            background: red;
            overflow: hidden;
        }

        .left{
            background: yellow;
            float: left;
        }

        .right{
            background: green;
            float: left;
        }
```

**三列布局：**

**两侧定宽中间自适应**

**首先设置父级元素的宽度**，可以左左右设置浮动。然后中间设置margin调整间距。 也可以都设置成左浮动，设置margin，调整间距。**同样注意清除浮动的影响！**

```
    <div class="main">
        <div class="left">left</div>
        <div class="middle">middle</div>
        <div class="right">right</div>
    </div>
  
  
  .main{
            width: 100%;
            background: red;
            overflow: hidden;
        }
        .left{
            background: yellow;
            float: left;
            width: 100px;
        }
        .middle{
             background: rosybrown;
             float: left;
             width: cacl(100%-200px);
         }
        .right{
            background: green;
            float: right;
            width: 100px%;
        }
```

或着为父级元素设置relative属性，再为子元素设置absolute属性，再分别定位，调间距。

![img](https://images2018.cnblogs.com/blog/1047894/201803/1047894-20180301073234713-1169726623.png)

```
<div class="parent" style="background-color: lightgrey;">
    <div class="left" style="background-color: lightblue;">
        <p>left</p>
    </div>    
    <div class="center" style="background-color: pink;">
        <p>center</p>
        <p>center</p>
    </div>                
    <div class="right"  style="background-color: lightgreen;">
        <p>right</p>
    </div>            
</div>
```

```
<style>
p{margin: 0;}
.parent{position: relative;height:40px;}
.left,.right,.center{position: absolute;}
.left{left: 0;width:100px;}
.right{right: 0;width: 100px;}
.center{left: 120px; right: 120px;}
</style>
```

**4.混合布局：**

**在一列布局的基础上，保留****top和foot部分，将中间的main部分改造成两列或三列布局，小的模块可以再逐级同理划分。** ![img](https://images2018.cnblogs.com/blog/1047894/201803/1047894-20180301080655572-352415473.png)

```html
 <div class="top"></div>
    <div class="main">
        <div class="left">left</div>
        <div class="right">right</div>
    </div>
    <div class="footer"></div>
```

```CSS
 .top{
            height: 100px;
            background: teal;
        }
        .footer{
            height: 100px;
            background: wheat;
        }
        .main{
            width: 100%;
            background: red;
            overflow: hidden;
        }
        .left{
            background: yellow;
            float: left;
            width: 50%;
        }
        .right{
            background: green;
            float: right;
            width: 50%;
        }
```

**5.扩展（如等分布局等）**

![img](https://images2018.cnblogs.com/blog/1047894/201803/1047894-20180301200502147-1546041676.png)

```html
  <div class="parent">
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
    </div>
```

```css
body{margin: 0;}
        .parent{
            border: 1px solid red;
            overflow: hidden;
            margin-right: -10px;
        }
        .child {
            width: calc(25% - 10px);
            height: 100px;
            background: green;
            float: left;
            margin-right: 10px;
        }
```

