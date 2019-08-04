# CSS属性

**CSS (Cascading Style Sheets) 是用来样式化和排版你的网页的 —— 例如更改网页内容的字体、颜色、大小和间距，将内容分割成多列或者加入动画以及别的装饰型效果。**

## 什么是 CSS?

正如我们之前提到的，CSS是一种用于向用户指定文档如何呈现的语言 — 它们如何被指定样式、布局等。

**文档**通常是用标记语言结构化的文本文件 — [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) 是最常用的标记语言, 但你依然可以遇见一些其他的标记语言，比如 [SVG](https://developer.mozilla.org/en-US/docs/Glossary/SVG) 或者 [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML)。

**呈现**文档给用户意味着将其转换为用户可用的形式。[浏览器](https://developer.mozilla.org/en-US/docs/Glossary/browser)，比如 [Firefox](https://developer.mozilla.org/en-US/docs/Glossary/Mozilla_Firefox), [Chrome](https://developer.mozilla.org/en-US/docs/Glossary/Google_Chrome) 或者 [Internet Explorer](https://developer.mozilla.org/en-US/docs/Glossary/Microsoft_Internet_Explorer)，被设计用于可视化呈现文档，例如，在计算机屏幕，投影仪或打印机上。

## CSS如何影响HTML？

Web浏览器将CSS规则应用于文档以影响它们的显示方式。一个CSS规则由以下组成：

- 一组 [属性](https://developer.mozilla.org/en-US/docs/Glossary/property/CSS) ，属性的值更新了 HTML 的内容的显示方式。比如，我想让元素的宽度是其父元素的50％，或者元素背景变为红色。
- 一个 [选择器](https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector)，它选择元素，这（些）元素是你想应用这些最新的属性值于其上的元素。比如，我想将我的CSS规则应用到我HTML文档中的所有段落上。

------



### Css分为两大类，

-  **<u>字体样式</u>**：作用于字体的属性，会直接应用到文本中，比如<q>使用哪种字体，字体大小是怎么样的，字体是粗体还是斜体等等</q>
- **<u>文本布局风格</u>**：作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及内容中，文本如何对齐



# 字体颜色

**color属性设置选中元素的前景内容的颜色 (通常指文本，不过也包含一些其他东西，或者是使用 [`text-decoration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration) 属性放置在文本下方或上方的线 (underline overline)。**

> color可以接受任何合法的CSS颜色单位，比如：
>
> ```javascript
> p{
>     color:red;
> }
> ```
>
> //red为红色，而不是浏览器的黑色







# 字体种类

要在你的文本设置一个不同的字体，你可以使用`font-familt`属性，你为浏览器指定一个字体 (或者一个字体的列表)，然后浏览器可以将这种字体应用到选中的元素上。

###### 如果字体不可用，那么就会用浏览器默认的字体代替 [default fon](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/为文本添加样式/Fundamentals#Default_fonts)t

简单的例子：

> ```javascript
> p{
>     font-family:arial;
> }
> ```
>
> 这段语句使所有在页面上的段落都采用 arial 字体，这个字体可在任何电脑上找到。
>
> ##### font-family`属性：改变合法有效的字体
>
> 搬运工~~~就是我啦

| 字体名称        | 泛型       | 注意                                                         |
| :-------------- | :--------- | :----------------------------------------------------------- |
| Arial           | sans-serif | 通常认为最佳做法还是添加 Helvetica 作为 Arial 的首选替代品，尽管它们的字体面几乎相同，但 Helvetica 被认为具有更好的形状，即使Arial更广泛地可用。 |
| Courier New     | monospace  | 某些操作系统有一个 Courier New 字体的替代（可能较旧的）版本叫Courier。使用Courier New作为Courier的首选替代方案，被认为是最佳做法。 |
| Georgia         | serif      |                                                              |
| Times New Roman | serif      | 某些操作系统有一个 Times New Roman 字体的替代（可能较旧的）版本叫 Times。使用Times作为Times New Roman的首选替代方案，被认为是最佳做法。 |
| Trebuchet MS    | sans-serif | 您应该小心使用这种字体——它在移动操作系统上并不广泛。         |
| Verdana         | sans-serif |                                                              |

### 默认字体

CCS定义了5个常用的字体名称：`serif,sans-serif,monospace,cursive,fantasy.`

用的字体完全取决于每个浏览器，而且它们所运行的每个操作系统也会有所不同

浏览器会尽力提供一个看上去合适的字体。 

`serif`, `sans-serif` 和 `monospace` 是比较好预测的，

`cursive` 和 `fantasy` 是不太好预测的

五个名称定义如下：

| 名称         | 定义                                                         | 示例                |
| :----------- | :----------------------------------------------------------- | :------------------ |
| `serif`      | 有衬线的字体 （衬线一词是指字体笔画尾端的小装饰，存在于某些印刷体字体中） | My big red elephant |
| `sans-serif` | 没有衬线的字体。                                             | My big red elephant |
| `monospace`  | 每个字符具有相同宽度的字体，通常用于代码列表。               | My big red elephant |
| `cursive`    | 用于模拟笔迹的字体，具有流动的连接笔画。                     | My big red elephant |
| `fantasy`    | 用来装饰的字体                                               | My big red elephant |

![捕获](C:\Users\杨光华\Desktop\捕获.PNG)

### 字体栈(font-family)

无法保证你想在网页上使用的字体的可用性："就可以提供个**字体栈**"，这样浏览器就有很多的字体选择了！

只需要用到一个属性：`font-family` ，其值由几个用逗号分离的字体名称组成。

> ```javascript
> p{
>   font-family:"Trebuchet MS",Verdana,sans-serif;
> }
> ```

浏览器从第一个开始，然后再找当前机器中，这个字体是否可用。如果可用，就放到选中的元素中。

不可用，就换到下一个字体，然后再检查

！！！为了强调这一点，如果没有其他选项可用，那么段落将被赋予浏览器的默认衬线字体 - 通常是Time New Roman - 这对于 sans-serif 字体是不利的！

**注意**: 有一些字体名称不止一个单词，比如`Trebuchet MS` ，那么就需要用引号包裹。

#### 举一个栗子吧！`font-family`的例子

给段落一个sans-serif的字体

> ```
> p{
>   color:red;
>   font-family:Helvetica,Arial,sans-serif;
> }
> ```

<iframe class="live-sample-frame sample-code-frame" frameborder="0" height="220" id="frame_一个使用_font-family_的例子" src="https://mdn.mozillademos.org/zh-CN/docs/Learn/CSS/%E4%B8%BA%E6%96%87%E6%9C%AC%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/Fundamentals$samples/%E4%B8%80%E4%B8%AA%E4%BD%BF%E7%94%A8_font-family_%E7%9A%84%E4%BE%8B%E5%AD%90?revision=1566983" width="100%" style="font-style: normal; margin: 0px; padding: 20px; border-width: 1px 1px 1px 5px; border-style: solid; border-color: rgb(61, 126, 154); border-image: initial; max-width: calc((100% - 40px) - 6px); width: calc((100% - 40px) - 6px); color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.04448px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>
###   字体大小(font-size)

`font-size`属性设置可以取大多数这些单位的值（以及其他，比如百分比）,然后调整字体大小时，常用的单位：

- `px`(像素)：将像素的值赋予给你文本。它导致了在任何情况下，页面上的文本所计算出来的像素值都是一样的。
- `em`:1em等于我们设计的当前元素的父元素上设置的字体大小,为什么要使用这个麻烦的单位呢? 当你习惯这样做时，那么就会变得很自然，你可以使用`em`调整任何东西的大小，不只是文本。你可以有一个单位全部都使用 em 的网站，这样维护起来会很简单。
- `rem`:这个单位的效果和`em`差不多，除了1`rem`等于 HTML 中的"根"元素的字体大小,而不是"父"元素。

#### 浏览器的 `font-size` 标准设置的值为 16px。

1em有16px

`<h1>`有2em的值，所以它的最终大小值为 32px。

如果你有一个 <article>元素在你的页面上，然后设置它的 font-size 为 `1.5em` (通过计算，可以得到大小为 24px)，然后想让 `<article>` 元素中的段落获得一个计算值为 20px 的大小，那么你应该使用多少 em。

[测试em rem ](http://pxtoem.com/)网站链接了解



#### 一个简单的 size 示例

当调整你的文本大小时，将文档(document)的基础  `font-size` 设置为10px往往是个不错的主意，这样之后的计算会变得简单，所需要的 (r)em 值就是想得到的像素的值除以 10，而不是 16。做完这个之后，你可以简单地调整在你的 HTML 中你想调整的不同类型文本的字体大小。在样式表的指定区域列出所有`font-size`的规则集是一个好主意，这样它们就可以很容易被找到。

我们的新结果是这样的:

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

###  字体样式，字体粗细，文本转换和文本装饰

##### CSS提供了4种常用的属性来改变文本的样子：

- `font-style`:用来打开和关闭文本`italic`(斜体)。*”少会用到这个属性，除非你因为一些理由想将斜体文字关闭斜体状态“*
  - `normal`:将文本设置为普通字体（将存在的**斜体**关闭） 
  - `italic`:如果当前字体的斜体版本可用（斜体版本）
  - `oblique`：将文本设置为斜体字体的模拟版本，普通文本倾斜的样式

- `font-weight`设置文字的粗体大小。这里有很多值可选（比如 *-light*, *-normal*, *-bold*, *-extrabold*, *-black*, 等等）
  - `normal`,`bold`:普通或者加粗的字体粗细
  - `lighter`,`bolder`:将当前元素的粗体设置为比其父元素粗体更细或更粗一步。`100`–`900`: 数值粗体值，如果需要，可提供比上述关键字更精细的粒度控制。
- `text-transform`:允许你设置要转换的字体。值包括：
  - `none`:防止任何转型。
  - `uppercase`: 将所有文本转为大写。
  - `lowercase`: 将所有文本转为小写。
  - `capitalize`: 转换所有单词让其首字母大写。
  - `full-width`: 将所有字形转换成全角，即固定宽度的正方形，类似于等宽字体，允许拉丁字符和亚洲语言字形（如中文，日文，韩文）对齐。
- `text-decoration`:设置/取消字体上的文本装饰（你将主要使用此方法在设置链接时取消设置链接上的默认下划线。) 可用值为：
  - `none`:取消已经存在的任何的文本装饰
  - `underline`:文本下划线
  - `overline`:文本上划线
  - line-through：穿过文本的线、
  - 偷偷告诉你：同时注意 [`text-decoration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration) 是一个缩写形式，它由 [`text-decoration-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-style) 和 [`text-decoration-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-color) 构成。你可以使用这些属性值的组合来创建有趣的效果 快去试试吧

###  文字阴影

`text-shadow`属性：

可以将文本应用阴影，使用`text-shadow`属性。这最多需要4个值，如下：

> ```javascript
> text-shadow:4px 4px 5px red;
> //4个属性：1.水平偏移，2.垂直偏移 3.模糊半径 4.阴影的基础颜色
> 注意: 正偏移值可以向右移动阴影，但也可以使用负偏移值来左右移动阴影，例如 -1px -1px.
> ```
>
> 1.阴影与原始文本的水平偏移，使用PX，这个值必须指定，不然报错！
>
> 2.阴影与原始文本的垂直偏移；效果像水平偏移，它**"向上/向下移动"**阴影，而**不是左/右**这个值必须指定。
>
> 3.模糊半径 - 更高的值意味着阴影分散得更广泛。如果不包含此值，则默认为0，这意味着没有模糊。
>
> 4.阴影的基础颜色，可以使用大多数的 CSS 颜色单位 如果没有指定，默认为 `black`.

###       多种阴影

您可以通过包含以逗号分隔的多个阴影值，将多个阴影应用于同一文本，例如：

```css
text-shadow: -1px -1px 1px #aaa,
             0px 4px 1px rgba(0,0,0,0.5),
             4px 4px 5px rgba(0,0,0,0.7),
             0px 0px 7px rgba(0,0,0,0.4);
```

​                **注意**: 你可以看到更多有趣的关于 `text-shadow` 使用的示例在 [Moonlighting with CSS text-shadow](http://www.sitepoint.com/moonlighting-css-text-shadow/).

<iframe class="live-sample-frame sample-code-frame" frameborder="0" height="220" id="frame_多种阴影" src="https://mdn.mozillademos.org/zh-CN/docs/Learn/CSS/%E4%B8%BA%E6%96%87%E6%9C%AC%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/Fundamentals$samples/%E5%A4%9A%E7%A7%8D%E9%98%B4%E5%BD%B1?revision=1566983" width="100%" style="font-style: normal; margin: 0px; padding: 20px; border-width: 1px 1px 1px 5px; border-style: solid; border-color: rgb(61, 126, 154); border-image: initial; max-width: calc((100% - 40px) - 6px); width: calc((100% - 40px) - 6px); color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.04448px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>
# 文本布局

有了基本字体属性，我们来看看我们可以使用用来影响文本布局的属性

##    文本对齐

`text-align`属性用来控制文本如何和他所在盒子对齐。可用值，（并且在与常规文字处理器应用程序中的工作方法几乎相同）：

- `left`:左对齐
- `right`:右对齐
- `center`局中文字
- `justify`:使文本展开，改变单词之间的差距，使所有文本行的宽度相同。你需要仔细使用，它可以看起来很可怕。特别是当应用于其中有很多长单词的段落时。如果你要使用这个，你也应该考虑一起使用别的东西，比如 [`hyphens`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens)，打破一些更长的词语。ps:我不知道这个是干嘛的

试试应用`text-align:center;`到我们例子中的`<h1>`元素试试

<iframe class="live-sample-frame sample-code-frame" frameborder="0" height="220" id="frame_文本对齐" src="https://mdn.mozillademos.org/zh-CN/docs/Learn/CSS/%E4%B8%BA%E6%96%87%E6%9C%AC%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/Fundamentals$samples/%E6%96%87%E6%9C%AC%E5%AF%B9%E9%BD%90?revision=1566983" width="100%" style="font-style: normal; margin: 0px; padding: 20px; border-width: 1px 1px 1px 5px; border-style: solid; border-color: rgb(61, 126, 154); border-image: initial; max-width: calc((100% - 40px) - 6px); width: calc((100% - 40px) - 6px); color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.04448px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>
> 这个很好理解哈！嘻嘻

##   行高

`line-height`属性设置文本每行之间的高

> 过也可以设置一个无单位的值，作为乘数，通常这种是比较好的做法。
>
> 无单位的值乘以 [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 来获得 `line-height`。
>
> 当行与行之间拉开空间，正文文本通常看起来更好更容易阅读。推荐的行高大约是 1.5–2 (双倍间距。) 所以要把我们的文本行高设置为字体高度的1.5倍，你可以使用这个:
>
> ```javascript
> line-height:1.5;
> //推荐的行高大约是 1.5–2 (双倍间距。)
> ```
>
> 把这个样式应用到我们示例中的`<p>`元素，结果如下：

<iframe class="live-sample-frame sample-code-frame" frameborder="0" height="250" id="frame_行高" src="https://mdn.mozillademos.org/zh-CN/docs/Learn/CSS/%E4%B8%BA%E6%96%87%E6%9C%AC%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/Fundamentals$samples/%E8%A1%8C%E9%AB%98?revision=1566983" width="100%" style="font-style: normal; margin: 0px; padding: 20px; border-width: 1px 1px 1px 5px; border-style: solid; border-color: rgb(61, 126, 154); border-image: initial; max-width: calc((100% - 40px) - 6px); width: calc((100% - 40px) - 6px); color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.04448px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>
##  字母和单词间距

`letter-spacing`和`word-spacing`属性允许你设置你的文本中的字母与字母之间的间距、或是单词与单词之间的间距。你不会经常使用它们，但是可能可以通过它们，来获得一个特定的外观，或者让较为密集的文字更加可读。







以下是复制过来的！！

### 其他一些值得看一下的属性[节](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/为文本添加样式/Fundamentals#其他一些值得看一下的属性)

以上属性让你了解如何开始在网页上设置文本， 但是你可以使用更多的属性。我们只是想介绍最重要的。一旦你习惯使用上面的内容，你还应该探索以下几点：

Font 样式:

- [`font-variant`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant): 在小型大写字母和普通文本选项之间切换。
- [`font-kerning`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-kerning): 开启或关闭字体间距选项。
- [`font-feature-settings`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-feature-settings): 开启或关闭不同的 [OpenType](https://en.wikipedia.org/wiki/OpenType) 字体特性。
- [`font-variant-alternates`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-alternates): 控制给定的自定义字体的替代字形的使用。
- [`font-variant-caps`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-caps): 控制大写字母替代字形的使用。
- [`font-variant-east-asian`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-east-asian): 控制东亚文字替代字形的使用, 像日语和汉语。
- [`font-variant-ligatures`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-ligatures): 控制文本中使用的连写和上下文形式。
- [`font-variant-numeric`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-numeric): 控制数字，分式和序标的替代字形的使用。
- [`font-variant-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-position): 控制位于上标或下标处，字号更小的替代字形的使用。
- [`font-size-adjust`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size-adjust): 独立于字体的实际大小尺寸，调整其可视大小尺寸。
- [`font-stretch`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-stretch): 在给定字体的可选拉伸版本中切换。
- [`text-underline-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-underline-position): 指定下划线的排版位置，通过使用 `text-decoration-line` 属性的`underline` 值。
- [`text-rendering`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-rendering): 尝试执行一些文本渲染优化。

文本布局样式：

- [`text-indent`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent): 指定文本内容的第一行前面应该留出多少的水平空间。
- [`text-overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow): 定义如何向用户表示存在被隐藏的溢出内容。
- [`white-space`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space): 定义如何处理元素内部的空白和换行。
- [`word-break`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break): 指定是否能在单词内部换行。
- [`direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction): 定义文本的方向 (这取决于语言，并且通常最好让HTML来处理这部分，因为它是和文本内容相关联的。)
- [`hyphens`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens): 为支持的语言开启或关闭连字符。
- [`line-break`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-break): 对东亚语言采用更强或更弱的换行规则。
- [`text-align-last`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align-last): 定义一个块或行的最后一行，恰好位于一个强制换行前时，如何对齐。
- [`text-orientation`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-orientation): 定义行内文本的方向。
- [`word-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-wrap): 指定浏览器是否可以在单词内换行以避免超出范围。
- [`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode): 定义文本行布局为水平还是垂直，以及后继文本流的方向。

## Font 简写[节](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/为文本添加样式/Fundamentals#Font_简写)

许多字体的属性也可以通过 [`font`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 的简写方式来设置 . 这些是按照以下顺序来写的：  [`font-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style), [`font-variant`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant), [`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight), [`font-stretch`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-stretch), [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size), [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height), and [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family).

如果你想要使用 `font` 的简写形式，在所有这些属性中，只有 `font-size` 和 `font-family` 是一定要指定的。

[`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 和 [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 属性之间必须放一个正斜杠。

一个完整的例子如下所示：

```css
font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
```

