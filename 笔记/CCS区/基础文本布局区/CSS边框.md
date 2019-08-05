# 边框(border)

我们来简单了解一下边框的属性

## 普通写法选项：

> `border`可以分成好几个写法
>
> **`border-top|border-right|border-bottom|border-left`**:设置边界的一则的宽度，样式，颜色
>
> `border-width|border-style|border-color:`设置边界宽度、样式和颜色，但是会设置边界的四个边。
>
> 还可以单独三个属性中的一个并且设置其中的一则边界生效。
>
> `border-top-width|border-top-style|border-top-color`等等

## 边界半径：

听说过圆角吗？我来了解什么让`div这些属性`变圆角吧~

圆角属性`<border-radius>` 就可以实现圆角属性

```css
border-radius:20px;
```

在不同的角落放置不同大小的边界半径。您可以指定两个，三个或四个值，就像您使用`padding`and`margin`一样：

```css
/*1st value is top left and bottom right corners,
   2nd value is top right and bottom left */
border-radius:20px 10px;
/* 1st value is 'top' "left" corner, 2nd value is "top right
   and bottom" left, 3rd value is" bottom right "" */
border-radius:20px 10px 50px;
/* top left, top right, bottom right, bottom left */
border-radius:20px 10px 50px 0;
```

作为最后一点，您还可以创建椭圆形角（x半径与y半径不同）。两个不同的半径用正斜杠（/）分隔，您可以将其与值的任意组合组合。

```css
border-radius: 10px / 20px;
border-radius: 10px 30px / 20px 40px;
```

## 边界图像

CSS中最新的（和复杂的）操作，用于操作边界border-image 这里的想法是，有时创建复杂的用户界面特性需要一个复杂的界面设计。这可能是通过在另一个较大的元素的顶部覆盖一个元素，然后将背景图像应用到底部元素，伪造一个复杂的边界来创建的。或者在极端情况下，您甚至可能需要创建一个包含9个元素的3 x 3网格，其中的中心元素作为您的内容，以及周围的8个元素，将边界元素应用于它们。

`border-image`图像使实现复杂的图形边界变得容易很多！！

首先，您需要有一个映像应用到您的浏览器。这通常是3 x 3、4 x 4)、5 x 5(等等)网格设计，如下所做的：

![img](https://mdn.mozillademos.org/files/13060/border-image.png)

当这样的图像用于边界图像时，浏览器将图像分割为8个部分，如下一个图像所示：

![img](https://mdn.mozillademos.org/files/13062/border-slices.png)

这些角的图像会被插入到你的边界的角落里，而顶部、右边、底部和左边的部分将被用来填充你的边界的相应边(通过拉伸或重复)。

我们需要告诉浏览器让这些片的大小正确——例如，这个图像是160px，还有一个4 x 4的网格，所以每个片都需要40px

​    首先，我们需要一个盒子来应用边界。这需要指定一个边界，否则边界图像将没有显示的空间。我们还将使用[`background-clip`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)，使任何背景色只填充内容和内边距的区域，并且不扩展到边界(您可能不希望这样做，但是在这样的情况下是有用的)。

```css
border: 30px solid black;
background-clip: padding-box;
注意：您应该始终包括border定义，以及任何使用border-image——如果浏览器不支持该特性，则该操作可以作为一个回退，以防止边界图像无法显示
```

接下来,我们将使用 [`border-image-source`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-source)指定要使用的源图像作为边界图像。 它的工作原理和[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)一样，能够接受一个`url()`函数或一个渐变作为一个值。

```css
border-image-source: url(border-image.png);
```

现在 使用 border-image-slice来设置所需大小的切片。

```css
border-image-slice: 40;
```

如果所有的片都是相同的大小，那么这个属性可以取一个值，如果需要不同的大小，则可以使用多个值，以相同的方式使用[`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)和[`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)：

- 两个值:上和下，左和右。
- 三个值:上、左和右、下。
- 四个值:上、右、下、左。

如果图像是光栅图形（像 `.png` 或 `.jpg`），就用像素来解释这个数字。如果图像是矢量图形（比如，`.svg`），那么这个数字将被解释为图形中的坐标。也可以使用百分比（使用单位 `%`）。

最后，我们将使用[`border-image-repeat`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-repeat) 它来指定我们希望图像如何填充边界。选项是：

- `stretch`：默认;侧面的图像被拉伸来填满边界。这通常看起来很糟糕和像素化，所以不推荐。
- `repeat`：边图像被重复，直到边界被填满。根据具体情况，这可能看起来不错，但您可能会看到一些难看的图像片段。
- `round`： 边的图像被重复，直到边界被填满，它们都被稍微拉伸，这样就不会出现碎片。
- `space`：边图像被重复，直到边界被填满，每个拷贝之间添加了少量的间隔，这样就不会出现任何片段。这个值只在Safari(9+)和Internet Explorer(11+)中得到支持。

我们决定使用`round`的值，因为它看起来是最有用和最灵活的：

```css
border-image-repeat: round;
```

## 简写



有一个可用的简写属性， [`border-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image)，这允许您在一行中设置所有相关的值。

```css
border-image-source: url(border-image.png);
border-image-slice: 40; //设置所需大小的切片
border-image-repeat: round;// 边的图像被重复，直到边界被填满
```

简写后：

```css
border-image: url(border-image.png) 40 round;
```