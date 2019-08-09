# flex弹性

方便且灵活的实现的：

- 在父内容里面垂直居中一个块内容。

- 使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用。

- 使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。

  ****

## flex模型说明

当元素表现为flex框时，他们沿着两个轴来布局：

![flex_terms.png](https://developer.mozilla.org/files/3739/flex_terms.png)

我可以看  **main axis**  与 **cross axis** 还有 main end 与cross end 代表什么尼？

-  main axis代表着 **主轴**的意思：沿着flex元素放置的方向延伸的轴!(比如页面上的横向的行、纵向的列)。该轴的开始和结束称为 **main axis**  与 **cross axis** 
-  **cross axis**代表**交叉轴**是垂直于 flex 元素放置方向的轴。该轴的开始和结束被称为 **cross start** 和 **cross end**。
- 启动他们必须要设置 `display:flex`的父元素被称之为flex容器
- 在 flex 容器中表现为柔性的盒子的元素被称之为 **flex 项**（**flex item**）

****

## 我们来了解一些属性吧

flex提供了`flex-direction`属性，它可以指定主轴的方向（默认的是：row"从左行走到右"）这使得他们在按你的浏览器默认语言方向排成一排.

我们简单了解一下flex-direction属性：

- row; flex容器的主轴定义为文本方向相同 （行：左到右排序）
- row-reverse: 表示与 `row`相同，但是位置换了，主轴起点与主轴结束点调换了(行：右到左)
- column:从主轴开始的方向是从`top`到`button`结束. （翻译：从上到下排序，列的）
- column-reverse:与`cloumn`相同，只是方向发生改变从 button往上top排 (从下到上排序)

****

## 换行问题

 当你在布局中使用定宽 或者定高的时候，可以会出现一定的问题。让子元素元素溢出！

破坏布局！

 解决方法：让子元素溢出的元素找到它的父级 给父级添加：`flex-wrap`

- `flex-wrap:wrap`让溢出的元素将被移动的到下一行！
- 再添加`flex:200px`让被移动到下一行的默认最低 200px宽度

****

## flex-flow缩写

我们应该注意到`flex-direction`和`flex-wrap`的属性，他们可以缩写

它的缩写属性就是 `flex-flow`

- 比如你的可以将

  ```css
  flex-direction:row；
  flex-wrap:wrap;
  ```

- 缩写成

  ```css
  flex-flow：row wrap
  ```

  ****

## flex项的动态尺寸(搬的~)

如何控制flex项占用空间的比例。

现在让我们回到第一个例子，看看是如何控制 flex 项占用空间的比例的。打开你本地的 [弹性盒子0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html)，或者拷贝 [弹性盒子1.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox1.html) 作为新的开始（[查看线上](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)）。

第一步，将以下规则添加到 CSS 的底部：

```css
article {
  flex: 1;
}
```

这是一个无单位的比例值，表示每个 flex 项沿主轴的可用空间大小。本例中，我们设置 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article) 元素的 flex 值为 1，这表示每个元素占用空间都是相等的，占用的空间是在设置 padding 和 margin 之后剩余的空间。因为它是一个比例，这意味着将每个 flex 项的设置为 400000 的效果和 1 的时候是完全一样的。

现在在上一个规则下添加：

```css
article:nth-of-type(3) {
  flex: 2;
}
```

现在当你刷新，你会看到第三个 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article) 元素占用了两倍的可用宽度和剩下的一样 — 现在总共有四个比例单位可用。 前两个 flex 项各有一个，因此它们占用每个可用空间的1/4。 第三个有两个单位，所以它占用2/4或这说是1/2的可用空间。

您还可以指定 flex 的最小值。 尝试修改现有的 article 规则：

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

这表示“每个flex 项将首先给出200px的可用空间，然后，剩余的可用空间将根据分配的比例共享“。 尝试刷新，你会看到分配空间的差别。

![img](https://mdn.mozillademos.org/files/13406/flexbox-example1.png)

****

## 水平和垂直对齐

可以使用 弹性盒子的功能让 flex 项沿主轴或交叉轴对齐。

我们先了解一些属性吧

`align-items:`center;  控制 flex 项在交叉轴上的位置。

`justify-content:`space-around;控制 flex 项在主轴上的位置。

听不懂？我们举个例子吧！

让我们一起看一下新例子 — [flex-align0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flex-align0.html)（[在线浏览](http://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)）

![img](https://mdn.mozillademos.org/files/13414/flexbox-example5.png)

此时，你看到了一个水平菜单栏，其中一些按钮卡在左上角

然后，将下面的 CSS 添加到例子的底部：

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

刷新一下页面，你就会看到这些按钮很好的垂直水平居中了。

我们是通过上面所说的两个新的属性做到的。



align-items 控制 flex 项在交叉轴上的位置

- 默认的值是 `stretch`，其会使所有 flex 项沿着交叉轴的方向拉伸以填充父容器。如果父容器在交叉轴方向上没有固定宽度（即高度），则所有 flex 项将变得与最长的 flex 项一样长（即高度保持一致）。我们的第一个例子在默认情况下得到相等的高度的列的原因。
- 在上面规则中我们使用的 `center` 值会使这些项保持其原有的高度，但是会在交叉轴居中。这就是那些按钮垂直居中的原因。
- 你也可以设置诸如 `flex-start` 或 `flex-end` 这样使 flex 项在交叉轴的开始或结束处对齐所有的值。查看 [`align-items`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 了解更多。

****

justify-content 控制 flex 项在主轴上的位置。

- 默认值是 `flex-start`，这会使所有 flex 项都位于主轴的开始处。
- 你也可以用 `flex-end` 来让 flex 项到结尾处。
- `center` 在 `justify-content` 里也是可用的，可以让 flex 项在主轴居中。
- 而我们上面用到的值 `space-around` 是很有用的——它会使所有 flex 项沿着主轴均匀地分布，在任意一端都会留有一点空间。
- 还有一个值是 `space-between`，它和 `space-around` 非常相似，只是它不会在两端留下任何空间。

****

## flex 项排序

弹性盒子也有可以改变 flex 项的布局位置的功能，而不会影响到源顺序（即 dom 树里元素的顺序）。这也是传统布局方式很难做到的一点。

 我希望你去尝试！

 有一个属性叫`:first-child`（从右边开始 左边结束）里面有个元素叫 `order`

- order的值越大，就越靠后
- 相同 order 值的 flex 项按源顺序显示。所以假如你有四个元素，其 order 值分别是2，1，1和0，那么它们的显示顺序就分别是第四，第二，第三，和第一。
- 第三个元素显示在第二个后面是因为它们的 order 值一样，且第三个元素在源顺序中排在第二个后面。

你也可以给 order 设置负值使它们比值为 0 的元素排得更前面。在主轴的最前面：

`last-child`从左边开始 右边结束

```css
button:last-child {
  order: -1; //因为order的值比flex项 小 所以排得更前面
}
```



# 总结：

让flex排序只用到两个轴  **主轴与交叉轴**来形成的排序

- display: flex的父元素设置启动flex
- 用 `flex-direction`：row|row-reverse|column|column-reverse来移动框架
- 用`flex-wrap:wrap`来防止溢出尴尬性|添加`flex:200px`来固定溢出的样式的宽度
- 缩写：flex-flow：来缩写flex-direction和flex-wrap
- 动态尺寸：元素的 flex 值为 1，这表示每个元素占用空间都是相等的，占用的空间是在设置 padding 和 margin 之后剩余的空间。
- 水平和垂直对齐： align-items: center;|justify-content: space-around;来居中哦~