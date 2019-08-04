在CSS中，可以做很多来设计你的背后的背景。我们已经看了一些简单的用法，比如基本的背景颜色和图像。我会做一些高级的特性，比如多给背景图像和颜色的梯度！

我们先了解

# 什么是背景？

**元素背景是指：**元素内容、内边距和边界下层的区域。

- ## **使用方法：**

-  `background-clip`属性改变背景所占有的区域

- `background-color:`为背景设置一个纯色

- `background-image:`指定在元素的背景中出现的背景图像。可以是静态也可以是生产的渐变。

- `background-position:`指定背景应该出现在元素背景中的位置

- `background-repeat:`指定背景是否应该被重复？（平铺）

- `background-attachment:`当内容滚动时，指定元素背景的行为，例如，它是滚动的内容，还是固定的？

- `background`:在一行中指定以上五个属性的缩写  /* 背景简写  背景颜色/ 渐变/显示几次/背景位置 */

- `background-size：`允许调整背景图片大小。

​       **大多数的这些功能都有很好的浏览器支持，除了最后两个，支持的功能比较有限(Internet Explorer 9+，Safari 7+，Android 4.4+)和背景渐变(Internet Explorer 9+)。**

------

## 背景颜色（background-color）

> - 大多数元素的默认背景颜色不是`white` (白色，这可能如你所料) 而是`transparent`（透明）
> - 此外，设置背景颜色作为后备也是很重要的。背景颜色在各处都得到了支持，而背景梯度等更奇异的特性只在较新的浏览器中得到支持，加上背景图像可能由于某种原因无法加载。因此，设置基本的背景颜色和指定这些特性是一个好主意，因此无论如何，元素的内容都是可读的。

```html
<p>
    Exciting
</p>
```

CSS内容:添加背景色

```CSS
p{
    /*添加的是黄色背景*/
    background-color:yellow
}
```



## 背景图像(background-image)

`background-image`属性指定了在元素背景中显示的背景图像该属性最简单的用法是使用 `url()` 函数——它以一个参数的路径作为参数——获取一个静态图像文件来插入。

```CSS
p{
   /*添加的是黄色背景*/
   background-color:yellow
   /*添加背景图像*/
   background-image:url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png);
}
```

在默认情况下，图像在水平和垂直方向上都是重复的，这看起来不太好。我们可以使用[`background-repeat`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)来修复这个问题



## 背景重复(background-repeat)

[`background-repeat`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat) 允许您指定背景图像是如何重复的。

默认值是`repeat`，正如您在上面所看到的，它使图像一直重复，直到整个元素的背景被填充



- | background-repeat:元素 | 属性                                 |
  | ---------------------- | ------------------------------------ |
  | `no-repeat`            | 图像将不会重复:它只会显示一次。      |
  | `repeat-x`             | 图像将在整个背景中水平地重复。       |
  | `repeat-y`             | 图像会在背景下垂直地重复             |
  | `repeat`               | 图像将在整个背景中水平和竖直地重复。 |

  ```CSS
  p{
     /*添加的是黄色背景*/
     background-color:yellow
     /*添加背景图像*/
     background-image:url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png);
     /*图像将不会重复显示：只显示一次*/
     background-repeat:no-repeat 
  }
  ```

  



## 背景位置(background-position）

**` background-position`允许我们在背景中任意位置放置背景图像。通常，该属性将使用两个通过空格分隔的值，该空间指定了图像的水平(x)和垂直(y)坐标。图像的左上角是原点(0,0)。把背景想象成一个图形，x坐标从左到右，y坐标从上到下。**

常用的是

- 像`px`这样的绝对值——比如 `background-position: 200px 25px`.
- 像`rems` 这样的相对值——比如 `background-position: 20rem 2.5rem`.
- 百分比 ——比如 `background-position: 90% 25%`.
- 关键字——比如 `background-position: right center`. 这两个值是直观的，可以分别取值比如 `left`，`center`， `right`和 `top`，`center`， `bottom`。

**应该注意，您可以混合并匹配这些值，比如 `background-position: 99% center`。还要注意，如果您只指定一个值，那么该值将被假定为水平值，而垂直值将默认为`center`。 **

```css
p{
   /*添加的是黄色背景*/
   background-color:yellow
   /*添加背景图像*/
   background-image:url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png);
   /*图像将不会重复显示：只显示一次*/
   background-repeat:no-repeat 
   /*图片位置垂直值将默认为`center*/    
   background-position：99% center;    
}
```

****

## 背景图像：渐变

 [`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)还有另一组可用的值——颜色渐变，渐变就是在背景中平滑的颜色过渡。

动态生成的渐变是在不久之前引入的，这是因为在web设计中使用渐变是非常受欢迎的，但是使用背景图像来实现渐变是相当不灵活的。

- 线性渐变是通过`linear-gradient()`函数传入的，它是一个[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)属性的值。函数至少需要用逗号分隔的三个参数——背景中渐变的方向，开始的颜色和结尾的颜色。

  ```css
  div {
  background-image: linear-gradient(to bottom, orange, yellow);
  }
  ```

> 这个渐变将从上到下，从顶部的橙色开始，然后平稳过渡到底部的黄色。可以使用关键词来指定方法
>
> (`to bottom`,`to right`,`to bottom right`等)
>
>  角度值 (`0deg`相当于 `to top`，
>
> `90deg` 相当于 `to right`，
>
> 直到 `360deg`，它再次相当于 `to top` ）。

  你也可以在颜色定义的**渐变**中指定其他的点——这些被称为颜色站点(**color stops)，**浏览器会计算出每一组颜色站点之间的颜色渐变。比如：

```css
div {
background-image: linear-gradient(to bottom, yellow, orange 40%, yellow);
}
```

> 这个渐变从上往下，从顶部（高度为0%处）到橙色指定位置（高度为40%处），
>
> 由黄色向橙色渐变，然后再由该位置到底部（高度为100%处），
>
> 由橙色向黄色渐变。您可以指定任意多个颜色站点，
>
> 您也可以使用其他的单位来指定这些颜色站点的位置，例如`rem`，`px`等。

## 背景附着

另一个可供选择的选项是指定当内容滚动时它们是如何滚动的。这是使用[`background-attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)属性来控制的，该属性可以使用以下值：

- `scroll`: 会使元素的背景在页面滚动时滚动。如果元素内容滚动了，背景并不会滚动。实际上，背景固定在了页面上相同的位置，所以当页面滚动时它才滚动。
- `fixed`: 会使元素的背景相对于视口固定。因此不管当页面还是元素内容滚动时，它都不会滚动，它会始终保持在屏幕上相同的位置。
- `local`:这个值后来被添加了(它只在Internet Explorer 9+中得到支持，而其他的则在IE4+中得到支持)，因为`scroll`值相当混乱，并且在许多情况下并没有真正做您想要的事情。  `local` 值将背景设置为它所设置的元素的背景，因此当您滚动元素时，背景会随之滚动。

 [`background-attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment) 只有当有内容要滚动时，属性才会有效果，所以我们做了一个演示来演示这三个值之间的区别——你可以看 [background-attachment.html](http://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)（也可以在这里[看源码](https://github.com/mdn/learning-area/tree/master/css/styling-boxes/backgrounds)）。

****

## 背景简写

> 使用background属性来声明：要做到这一点，你要使用和你在单个属性中所做的相同的值，但是你把它们都放在一个由空格分隔的行上，
>
> ```css
> div {
>     /* 背景简写  背景颜色/ 渐变/显示几次/背景位置 */
> background: yellow linear-gradient(to bottom, orange, yellow) no-repeat left center scroll;
> }
> ```
>
> 此属性是一个 [简写属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties)，可以在一次声明中定义一个或多个属性：[`background-clip`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)、[`background-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color)、[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)、[`background-origin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin)、[`background-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)、[`background-repeat`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)、[`background-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)，和 [`background-attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)。

## 多个背景

最近(自从Internet Explorer 9)，我们已经具备了将多个背景连接到单个元素的能力。这是一件好事，因为多重背景非常有用。用逗号分隔不同的背景定义：

```html
div {
background: url(image.png) no-repeat 99% center,
            url(background-tile.png),
            linear-gradient(to bottom, yellow, #dddd00 50%, orange);
background-color: yellow;
}
```

这些背景都是堆叠在一起的，第一个出现在顶部，第二个在下面，第三个，等等。这可能不是你所期待的，所以要小心。还要注意的是，我们已经将后备背景颜色放入一个单独的属性声明中，因为尝试将其包含在多个背景中似乎会破坏一些东西。

> 也可以普通写法放入到`background-*`属性中
>
> ```Css
> /*背景图 多张背景图用逗号隔开*/
> background-image:url(背景图.png),url(背景图.png);
> /*另外设置背景重复问题*/
> background-repeat:no-repeat,repeat;
> ```
>
> 尽管使用`background` 简写可能更好——它不仅可以更快地编写，而且更容易查看哪些背景属性应用到哪个背景。

让我们把多个背景放在我们精彩的盒子上——我们想要看到渐变和火球，两者同时出现：

> ```css
> p {
>   font-family: sans-serif;
>   padding: 20px;
>   /* background properties */
>   background-color: yellow;
>   background: url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png) no-repeat 99% center,
>               linear-gradient(to bottom, yellow, #dddd00 50%, orange);
> }
> ```



## 背景尺寸

**`background-size`**设置图像大小的

- 允许你动态地改变背景图像的大小，使它更适合你的设计。
- 例如自动纠正没有正确上传的图标的大小。
- 不兼容：Internet Explorer低于9的版本
- 如果您需要支持旧的浏览器，那么您就不能依赖它。
- 对于每个背景图像，您需要包含两个背景大小值，一个用于水平维度，另一个用于垂直方向！！

```css
background-image: url(myimage.png);
background-size: 16px 16px;
```

1. 可以使用你期望的所有的长度单位来使用
2. `px`、`百分比`、`rem`等等

## 背景定义位置

`background-position`为每一个背景图片设置初始位置。 这个位置是相对于由 [`background-origin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin) 定义的位置图层的。

> 可以由`left,top,right,bottom`等等来定义
>
> 也可以`center`局中
>
> `background-position` 属性被指定为一个或多个值，用逗号隔开。

### 关键词：

> 关键字 `center`，用来居中背景图片。
>
> 关键字 `top`, `left`, `bottom`, `right` 中的一个。用来指定把这个项目*（原文为 item）放在哪*一个边缘。另一个维度被设置成 50%，所以这个项目（原文为 item）被放在指定边缘的中间位置。
>
> - `<length>`或<percentage>指定相对于左边缘的 x 坐标，y 坐标被设置成 50%。
> - 如果一个值是  `top` 或  `bottom`，那么另一个值不应该是 `top` 或 `bottom`。
> - 如果一个值是  `left` 或   `right`，那么另一个值不应该是 `left` 或 `right` 。

### 深入理解：

1. +50px（将图片的左边界对齐容器的中线）
2. 0px（图片的左边界与容器左边界重合）
3. -100px（将图片相对容器左移100px，这意味着图片中部的100px内容将出现在容器中）
4. -200px（将图片相对容器左移200px，这意味着图片右部分的100px内容将出现在容器中）
5. -250px（将图片相对容器左移250px，这意味着图片的右边界对齐容器的中线）
6.   另外需要注意，如果背景图片的大小和容器一样，那设置百分比的值将永远无效，因为“容器和图片的差”为0（图片永远填满容器，并且图片的相对位置和容器的相对位置永远重合）。在这种情况下，需要为偏移使用绝对值（例如px）

### X/y坐标：

一个<position>定义一组x/y坐标（相对于一个元素盒子模型的边缘）来放置这个项目*（原文为 item）*。它可以被定义为一个值或者两个值。如果被定义为两个值，那么第一个值代表水平位置，第二个代表垂直垂直位置。如果只指定一个值，那么第二个值默认为 `center`。

**两个值的语法:** 一个定义 x 坐标，另一个定义 y 坐标。每个值可以是：

- 关键字 `top`, `left`, `bottom`, `right` 中的一个。 如果这里给出 `left` 或 `right`，那么这个值定义 x 轴位置，另一个值定义 y 轴位置。如果这里给出 `top` 或  `bottom`，那么这个值定义 y 轴位置，另一个值定义 x 轴位置。
- <length>或<percentage>如果另一个值是  `left` 或  `right`，
- 那么这个值（指<length>或<percentage>）定义相对于上边缘的 y 轴位置。
-  如果两个值都是 `<length>` 或 `<percentage>`，那么第一个值定义 x 轴位置，第二个定义 y 轴位置。

注意：也就是说，`top top` 和 `left left `是无效的。