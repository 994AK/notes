# 框模型

CSS框模型（译者注：也被称为“盒模型”）是网页布局的基础

> - 每个元素被表示为一个矩形的方框，框的内容、内边距、边界和外边距像洋葱的膜那样，一层包着一层构建起来。
> - 每个框的内容要用什么样式，周围的洋葱层有多大，以及框相对于其它框放在哪里。
>
> 

## 框属性

文档的每个元素被构造成文档布局内的一个矩形框，框每层的大小都可以使用一些特定的CSS属性调整。相关属性如下:

![img](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

### `width`和`height`（内容框）：

-  `width`和`height`设置**内容框**的宽度和高度。
- 内部框是框内容显示的区域
- 包括框内的文本内容，以及表示嵌套子元素的其它框。

### `padding`（内边距）：

- `padding`表示一个CSS框的**内边距**
- 这一层位于**内容框的外边缘与边界的内边缘之间**。
- 这层大小可以通过简写属性`padding`一次设置所有的**四个边(top,right,bottom,left)**
- 或者**`padding-top、padding-right、padding-bottom、padding-left`**

### **`border`(边界)**

> CSS 框的**边界**（border）是一个分隔层，位于内边距的外边缘以及外边距的内边缘之间

- 边界默认的大小为0 >从而让它不可见>不过可以**设置边界的厚度、风格和颜色**让它出现
- `border`简写属性让我们一次设置所有的四个边<u>(边框厚度/风格/颜色)</u>
- [`border-top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top), [`border-right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right), [`border-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom), [`border-left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left): 分别设置某一边的边界厚度／风格／颜色。
- [`border-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width), [`border-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style), [`border-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color): 分别仅设置边界的厚度／风格／颜色，并应用到全部四边边界。
- 你也可以单独设置某一个边的三个不同属性，如 [`border-top-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-width), [`border-top-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-style), [`border-top-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-color)，等。 

### `margin`外边距

> 外边距（margin）代表 CSS 框周围的外部区域，称为**外边距**，它在布局中推开其它 CSS 框。其表现与 padding 很相似；简写属性为 [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)，单个属性分别为 [`margin-top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)、[`margin-right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-right)、[`margin-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom) 和 [`margin-left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-left)。
>
> - `margin`可以写四个元素 上、右、下、左
> - **只有一个**  值时，这个值会被指定给全部的 **四个边**.
> - **两个** 值时，第一个值被匹配给 **上和下**, 第二个值被匹配给 **左和右**.
> - **三个** 值时，第一个值被匹配给 **上**, 第二个值被匹配给 **左和右**, 第三个值被匹配给 **下**.
> - **四个** 值时，会依次按 **上、右、下、左** 的顺序匹配 (即顺时针顺序).
> - 外边距塌陷；上一个margin比下一个较小的margin有效宽度为0，只留下值较大的margin。
>
> 
>
> 

### 使用 `margin: 0 auto `水平居中

在现代浏览器中，如果要把一些东西水平居中，使用 `display:flex; justify-content: center;` .

然而, 在一些老的浏览器，如IE8-9, 这些是不可用的. 想要把一个元素在其父元素中居中, 使用 `margin: 0 auto;`





# CSS 框类型

- 我们可以通过[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)属性来设定元素的框类型。
- [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)属性有很多的属性值。在本篇文章，我们将关注三个最常见的类型：`block`, `inline`, and `inline-block。`
  - 块框（ `block` box）是定义为堆放在其他框上的框（例如：其内容会独占一行），而且可以设置它的宽高，之前所有对于框模型的应用适用于块框 （ `block` box）
  - 行内框（ `inline` box）与块框是相反的，它随着文档的文字流动（例如：它将会和周围的文字和其他行内元素出现在同一行，而且它的内容会像一段中的文字一样随着文字部分的流动而打乱），对行内盒设置宽高无效，设置padding, margin 和 border都会更新周围文字的位置，但是对于周围的的块框（ `block` box）不会有影响。
  - 行内块状框（`inline-block` box） 像是上述两种的集合：它不会重新另起一行但会像行内框（ `inline` box）一样随着周围文字而流动，而且他能够设置宽高，并且像块框一样保持了其块特性的完整性，它不会在段落行中断开。（在下面的示例中，行内块状框会放在第二行文本上，因为第一行没有足够的空间，并且不会突破两行。然而，如果没有足够的空间，行内框会在多条线上断裂，而它会失去一个框的形状。）
  - **注意：**默认状态下display属性值，块级元素`display: block` ，行内元素`display: inline`

### 溢流

当你使用绝对的值设置了一个框的大小（如，固定像素的宽/高），允许的大小可能不适合放置内容，这种情况下内容会从盒子溢流。

我们就可以使用：[`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)属性控制这种情况的发生。

> **`overflow-auto:`**当内容过多，溢流的内容被隐藏，然后出现滚动条来让我们滚动查看所有的内容
>
> overflow-hidden`: 当内容过多，溢流的内容被隐藏。
>
> overflow-visible: 当内容过多，溢流的内容被显示在盒子的外边（这个是默认的行为）

<iframe class="live-sample-frame sample-code-frame" frameborder="0" height="360px" id="frame_溢流" src="https://mdn.mozillademos.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Box_model$samples/%E6%BA%A2%E6%B5%81?revision=1492752" width="100%" style="font-style: normal; margin: 0px; padding: 20px; border-width: 1px 1px 1px 5px; border-style: solid; border-color: rgb(61, 126, 154); border-image: initial; max-width: calc((100% - 40px) - 6px); width: calc((100% - 40px) - 6px); color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.04448px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>


### 背景裁剪（Background clip）

框的背景是由颜色和图片组成的，它们堆叠在一起

**background-color，background-image.**

他们应用到一个盒字里，然后被画在盒字下面。

默认情况下，背景延伸到了边界外沿。这通常是OK的，但是在一些情况下比较讨厌（假使你有一个平铺的背景图，你只想要它延伸到内容的边沿会怎么做？）

可以通过设置盒子的`background-clip`属性来调整！

### 语法：

```css
/* Keyword values */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;

/* Global values */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```

### 值：border-box|padding-box|content-box

翻译：**背景延伸至边框外沿但是在边框下层|背景延申至内边框外沿|背景被裁剪至内容区**

就是：背景框架部分|背景内部|背景内容部



# 轮廓 outline属性

`outline`属性是用来设置一个或多个单独的轮廓属性的简写属性,

例如：设置outline-style,outline-width,outline-color.多数情况下都可以简写内容。

轮廓与边框在以下几个方面存在不同：

- 轮廓不占据空间，它们被描绘于内容之上
- 轮廓可以是非矩形的。在Gecko/Firefox中，轮廓是矩形的，但是Opera则会围绕元素结构绘制非矩形的形状

```css
/* 宽度 | 样式 | 颜色 */
outline: 1px solid white;
```

## 例子:

outline: solid; | outline: dashed red; | outline: dotted 1px; | outline: ridge thick violet; | outline: custom 5px;

```css
/* two identical declarations */

:link:hover { outline: 1px solid #000; }
:link:hover { outline: solid black 1px; }
```

### 该**outline-width** 

CSS属性设置元素的轮廓的厚度。轮廓线是围绕元素绘制的线[`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)。

样式仅供参考！

```css
#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
thin|medium|thick|px|ex|em
```

<iframe class="live-sample-frame sample-code-frame" frameborder="0" height="80" id="frame_Examples" src="https://mdn.mozillademos.org/en-US/docs/Web/CSS/outline-width$samples/Examples?revision=1528271" width="100%" style="font-style: normal; margin: 0px; padding: 20px; border-width: 1px 1px 1px 5px; border-style: solid; border-color: rgb(61, 126, 154); border-image: initial; max-width: calc((100% - 40px) - 6px); width: calc((100% - 40px) - 6px); color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.04448px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>
### **outline-style**

CSS 属性被用于设置一个元素轮廓的样式。

元素轮廓是绘制于元素周围的一条线，位于[`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)的外围，

使元素突出大多时候使用[`outline`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)而不是` outline-style`,` outline-width 和`` outline-color`会更方便.

```css
/* 关键字 值 */
outline-style: auto;
outline-style: none;
outline-style: dotted; //轮廓为一系列点.
outline-style: dashed; //轮廓为一系列短线.
outline-style: solid; //轮廓为实线.
outline-style: double; //轮廓为两根有空隙的线. outline-width 为线与空间的总和.
outline-style: groove; //轮廓呈凹下状.
outline-style: ridge;  //与 groove相反: 轮廓呈凸起状.
outline-style: inset; //轮廓呈嵌入状.
outline-style: outset; //与 inset相反: 轮廓呈突出状.

/* 全局 值*/
outline-style: inherit;
outline-style: initial;
outline-style: unset;
```



## 简单说一些盒子的高级属性

### 设置宽和高的约束

其它一些属性可以与更灵魂的方式控制内容的大小——是通过设置大小约束，而不是设置一个绝对大小。

这是通过属性`min-width`、`max-width`、和`max-height`实现的

一个明显的用处是，想通过设置将一个布局的外层容器的宽度设置百分比，从而让布局的宽**变得更灵活！**！！

不过又不想让**它变得太宽或者太窄**，因为这样布局就开始看起来很糟糕。

一个选择是用响应式网页设计技术（之后我们会讲到），但是更简单的方法是给布局的宽度设置一个最大值和最小值限制：

```css
width: 70%;
max-width: 1280px;
min-width: 480px;
```

```css
margin: 0 auto;
//共享父容器左右边距之间的可用空间使它居中。
```

如果想很好处理图像大小的话，我推荐使用max-width

将媒体（例如图像和视频）限制在容器内部。

回到上面的例子，**图像会引起一个问题——起初它的显示正常**，但当容器变得比图像更窄时，**图像开始溢流容器**（因为它是一个固定的宽度）。 要应对这类图像的问题，我们可以在其上设置以下声明：

```css
display: block;
margin: 0 auto;
max-width: 100%;
```

**前两条样式规则可以使它的展示行为像一个块元素并且在父容器内居中**。真正**神奇的是第三条——这个限制了图像的宽度使它的最大宽度与父容器的宽度相等。因此，当父容器宽度缩小到小于图像的宽度时，图像会一起缩小。**



### 来咯来咯重点来咯

**`min-width` 属性为给定元素设置最小宽度。它可以阻止 width 属性的应用值小于 `min-width`的值**

**min-width 的值会同时覆盖max-width和width。**

```css
min-width最小的宽度
max-width最大的宽度
```

**max-width 属性用来给元素设置最大宽度值. 定义了max-width的元素会在达到max-width值之后避免进一步按照width属性设置变大.**

```css
权力开始：
max-width会覆盖width设置，但min-width设置会覆盖max-width.
```

### box-sizing属性：

如果这个元素有任何的 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 或 [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。

### 可以被用来调整这些表现：

`box-sizing`属性可以被用来调整这些表现：

- **content-box**是默认值。如果你设置一个元素的宽为100px

  那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。

- **border-box**告诉浏览器你想要**设置的边框和内边距的值是包含在width内的**。也就是说，如果你将一个**元素的width设为100px，那么这100px会包含它的border和padding**，内容区的实际宽度是**width减去(border + padding)的值**。大多数情况下，这使得我们更容易地设定一个元素的宽高。

**译者注:** `border-box`不包含`margin`



**border-box**： [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性包括内容，内边距和边框，但不包括外边距。注意，填充和边框将在盒子内 , 例如, `.box {width: 350px; border: 10px solid black;}` 导致在浏览器中呈现的宽度为350px的盒子。内容框不能为负，并且被分配到0，使得不可能使用border-box使元素消失。

**尺寸计算公式：**

***width = border + padding + 内容的宽度***

***height = border + padding + 内容的高度***



