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

## 使用 `margin: 0 auto `水平居中

在现代浏览器中，如果要把一些东西水平居中，使用 `display:flex; justify-content: center;` .

然而, 在一些老的浏览器，如IE8-9, 这些是不可用的. 想要把一个元素在其父元素中居中, 使用 `margin: 0 auto;`





## CSS 框类型

- 我们可以通过[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)属性来设定元素的框类型。
- [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)属性有很多的属性值。在本篇文章，我们将关注三个最常见的类型：`block`, `inline`, and `inline-block。`
  - 块框（ `block` box）是定义为堆放在其他框上的框（例如：其内容会独占一行），而且可以设置它的宽高，之前所有对于框模型的应用适用于块框 （ `block` box）
  - 行内框（ `inline` box）与块框是相反的，它随着文档的文字流动（例如：它将会和周围的文字和其他行内元素出现在同一行，而且它的内容会像一段中的文字一样随着文字部分的流动而打乱），对行内盒设置宽高无效，设置padding, margin 和 border都会更新周围文字的位置，但是对于周围的的块框（ `block` box）不会有影响。
  - 行内块状框（`inline-block` box） 像是上述两种的集合：它不会重新另起一行但会像行内框（ `inline` box）一样随着周围文字而流动，而且他能够设置宽高，并且像块框一样保持了其块特性的完整性，它不会在段落行中断开。（在下面的示例中，行内块状框会放在第二行文本上，因为第一行没有足够的空间，并且不会突破两行。然而，如果没有足够的空间，行内框会在多条线上断裂，而它会失去一个框的形状。）
  - **注意：**默认状态下display属性值，块级元素`display: block` ，行内元素`display: inline`

