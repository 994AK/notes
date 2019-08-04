

# 不同种类的CSS选择器

选择器可以被分以下类别：

- **简单选择器**：通过元素类型`class`或`id`匹配一个或多个元素。
- **属性选择器**：通过属性/属性值 匹配一个或多个元素
- **伪类：**匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素，或当前被选中或未选中的复选框，或元素是DOM树中一父节点的第一个子节点。
- **伪元素**:匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字，或者某个元素之前生成的内容。 
- **组合器**：这里不仅仅是选择器本身，还有以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，你可以只选择divs的直系子节点的段落，或者直接跟在headings后面的段落。
- **多重选择器**：这些也不是单独的选择器；这个思路是将以逗号分隔开的多个选择器放在一个CSS规则下面， 以将一组声明应用于由这些选择器选择的所有元素。



## 类型选择器（元素选择器）

此选择器只是一个选择器名和指定的HTML元素名的不区分大小写的匹配。这是选择所有指定类型的最简单方式。

```javascript
p{
    color:red;
}
//就是元素选择器
```

## 类选择器

类选择器由一个点“.”以及类后面的类名组成。类名是在HTML `class`文档元素属性中没有空格的任何值。由你自己选择一个名字。同样值得一提的是，文档中的多个元素可以具有相同的类名，而单个元素可以有多个类名(以空格分开多个类名的形式书写)。

`class`**组成的选择器**

简单的例子:

这是HTML

```html
<ul>
    <li calss="first">Create</li>
    <li class="second">Create a CSS</li>
    <li class="third">Link them</li>
</ul>
```

这是CSS样式

```css
.first{
     color:red
}
.second{
     text-decoration:line-through
}
//这是一个类的选择器
```

## ID选择器

ID选择器是由一个哈希/磅符号 (`#`)，后面跟着给定元素的ID名称组成的。 任何元素都可以使用`id`属性设置唯一的ID名称。 由你自己决定选择一个ID名称是什么。 这是选择单个元素的最有效的方式。

一个ID名称必须在文档中是唯一的。关于重复ID的行为是不可预测的，比如一些浏览器只是计入第一个实例，其余的将被忽略。

是有`<p id="polite">`然后CCS的样式里面`#polite{font-family:cursive;}`

```html
<p id="polite">  "Good"</p>
```

```css
#polite{
    font-family:cursive;
}
```



## 通用选择器

通用选择（`*`）是最终的王牌。它允许选择在一个页面中的所有元素。由于给每个元素应用同样的规则几乎没有什么实际价值，更常见的做法是与其他选择器结合使用

**重要提示**：使用通用选择时小心。因为它适用于所有的元素，在大型网页利用它可能对性能有明显的影响：网页可能显示比预期要慢。大多数情况下，你都不会使用这个选择器。

例如，这是HTML：

```html
<div>
  <p>I think the containing box just needed
  a <strong>border</strong> or <em>something</em>,
  but this is getting <strong>out of hand</strong>!</p>
</div>
```

这是样式表：

```css
* {
  padding: 5px;
  border: 1px solid black;
  background: rgba(255,0,0,0.25)
}
```

组合在一起，会得到这样的结果：

<iframe class="live-sample-frame sample-code-frame" frameborder="0" height="120px" id="frame_通用选择器" src="https://mdn.mozillademos.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors$samples/%E9%80%9A%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8?revision=1539203" width="100%" style="font-style: normal; margin: 0px; padding: 20px; border-width: 1px 1px 1px 5px; border-style: solid; border-color: rgb(61, 126, 154); border-image: initial; max-width: calc((100% - 40px) - 6px); width: calc((100% - 40px) - 6px); color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.04448px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>
## 存在和值 属性选择器

这些属性选择器尝试匹配精确的属性值：

- `[attr]`：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。
- `[attr=val]`：该选择器仅选择 attr 属性被赋值为 val 的所有元素。
- `[attr~=val]`：该选择器仅选择具有 attr 属性的元素，而且要求 `val` 值是 `attr` 值包含的被空格分隔的取值列表里中的一个

> ```html
> <ul>
>     <li dtat="1kg">GG</li>
>     <li dtat="2kg" dtat-at="noin">HH</li>
>     <li dtat="3kg" dtat-at="liquid ini">DD</li>
>     <li dtat="4kg">TT</li>
>     <li dtat="5kg">QQ</li>
>     <li dtat="6kg">WW</li>
> </ul>
> ```
>
> ```css
> /* 所有具有"data"属性的元素将被应用绿色的文本颜色 */
> [data]{
>     color:green
> }
> /* 所有具有"data-at"属性且属性值刚好为"noin"的元素将被应用金色的背景颜色 */
> [data-at="noin"]{
>     background-color: goldenrod;
> }
> /* 所有具有"dtat-at"属性且属性值包含"ini"的元素，
> 即使元素的属性中还包含其他属性值，都会被应用红色的文本颜色 */
> [dtat-at~="ini"]{
>     color:red;
> }
> ```

## 子串值（Substring value）属性选择器[节](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors#子串值（Substring_value）属性选择器)

这种情况的属性选择器也被称为“伪正则选择器”，因为它们提供类似 [regular expression](https://developer.mozilla.org/en-US/docs/Glossary/regular_expression) 的灵活匹配方式（但请注意，这些选择器并不是真正的正则表达式）：

- `[attr|=val]` : 选择attr属性的值是 `val` 或值以 `val-` 开头的元素（注意，这里的 “-” 不是一个错误，这是用来处理语言编码的）。
- `[attr^=val]` : 选择attr属性的值以 `val` 开头（包括 `val`）的元素。
- `[attr$=val]` : 选择attr属性的值以 `val` 结尾（包括 `val`）的元素。
- `[attr*=val]` : 选择attr属性的值中包含子字符串 `val` 的元素（一个子字符串就是一个字符串的一部分而已，例如，”cat“ 是 字符串 ”caterpillar“ 的子字符串）。

让我们继续我们前面的例子，并添加以下CSS规则：

```css
/* 语言选择的经典用法 */
[lang|="fr"] {
  font-weight: bold;
}

/* 
    具有"data-vegetable"属性含有值"not spicy"的所有元素,都变回绿色
*/
[data-vegetable*="not spicy"] {
  color: green;
}

/* 
   具有"data-quantity"属性其值以"kg"结尾的所有元素*/
[data-quantity$="kg"] {
  font-weight: bold;
}

/* 
   具有属性"data-quantity"其值以"optional"开头的所有元素 
*/
[data-quantity^="optional"] {
  opacity: 0.5;
}
```

## 还有一些例子

CSS **属性选择器**通过已经存在的属性名或属性值匹配元素。

```css
/* 存在title属性的<a> 元素, 如下选择 */
a[title] {
  color: purple;
}

/* 存在href属性并且属性值匹配"https://example.org"的<a> 元素, 如下选择 */
a[href="https://example.org"] {
  color: green;
}

/* 存在href属性并且属性值包含"example"的<a> 元素, 如下选择 */
a[href*="example"] {
  font-size: 2em;
}

/* 存在href属性并且属性值结尾是".org"的<a> 元素, 如下选择 */
a[href$=".org"] {
  font-style: italic;
}
```

- `[attr]`

  表示带有以 attr 命名的属性的元素。

- `[attr=value]`

  表示带有以 attr 命名的属性，且属性值为"value"的元素。

- `[attr~=value]`

  表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中[至少]一个值匹配"value"。

- `[attr|=value]`

  表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（"-"为连字符，Unicode编码为U+002D）开头。典型的应用场景是用来来匹配语言简写代码（如zh-CN，zh-TW可以用zh作为value）。

- `[attr^=value]`

  表示带有以 attr 命名的属性，且属性值是以"value"开头的元素。

- `[attr$=value]`

  表示带有以 attr 命名的属性，且属性值是以"value"结尾的元素。

- `[attr*=value]`

  表示带有以 attr 命名的属性，且属性值包含有"value"的元素。

- `[*attr* *operator* *value* i]`

  表示带有以 attr 命名的属性, 且属性值匹配"value" [忽略属性值大小] 的元素。在带有属性值的属性选型选择器表达式的右方括号, 前添加**用空格间隔开**的字母i（或I）可以忽略属性值的大小写（ASCII字符范围内的字母）

  ## 示例[节](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors#示例)

  ### Links[节](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors#Links)

  ```css
  a {
    color: blue;
  }
  
  /* 存在href属性并且属性值以"#"开始的<a> 元素, 如下选择 */
  a[href^="#"] {
    background-color: gold;
  }
  
  /* 存在href属性并且属性值包含"example"的<a> 元素, 如下选择*/
  a[href*="example"] {
    background-color: silver;
  }
  
  /* 存在href属性并且属性值包含"insensitive"的<a> 元素,
     i 表示忽略"insensitive"的大小写, 如下选择 */
  a[href*="insensitive" i] {
    color: cyan;
  }
  
  /* 存在href属性并且属性值结尾是".org"的<a> 元素, 如下选择 */
  a[href$=".org"] {
    color: red;
  }
  <ul>
    <li><a href="#internal">Internal link</a></li>
    <li><a href="http://example.com">Example link</a></li>
    <li><a href="#InSensitive">Insensitive internal link</a></li>
    <li><a href="http://example.org">Example org link</a></li>
  </ul>
  ```

  <iframe src="https://mdn.mozillademos.org/zh-CN/docs/Web/CSS/Attribute_selectors$samples/Links?revision=1436070" class="live-sample-frame sample-code-frame" height="170" width="100%" id="frame_Links" frameborder="0" style="font-style: normal; margin: 0px; padding: 20px; border-width: 1px 1px 1px 5px; border-style: solid; border-color: rgb(61, 126, 154); border-image: initial; max-width: calc((100% - 40px) - 6px); width: calc((100% - 40px) - 6px); color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.04448px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>

## 伪类选择器

一个 CSS  [伪类（pseudo-class）](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) 是一个以冒号(`:`)作为前缀，被添加到一个选择器末尾的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class）。你可能希望某个元素在处于某种状态下呈现另一种样式，例如当鼠标悬停在元素上面时，或者当一个复选框被禁用或被勾选时，又或者当一个元素是它在 DOM 树中父元素的第一个子元素时。

###        后期更新~~~



## 伪元素

[伪元素（Pseudo-element）](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)跟伪类很像，但它们又有不同的地方。它们都是关键字，但这次伪元素前缀是两个冒号 (`::`) ， 同样是添加到选择器后面去选择某个元素的某个部分。

### 元素添加修饰性:

- `::after` :用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合[`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)属性来为该元素添加装饰内容

- `::before`:创建一个[伪元素](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)，其将成为匹配选中的元素的第一个子元素。常通过 [`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content) 属性来为一个元素添加修饰性的内容。

- `::first-letter`:使每段开头的第一个字母发生改变

- **`::first-line`**:第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。

  | 元素             | 属性                                                         |
  | ---------------- | ------------------------------------------------------------ |
  | `::after`        | 配合[`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)属性元素的最后一个子元素 |
  | `::before`       | 匹配选中的元素的第一个子元素。常通过 [`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content) 属性来为一个元素添加修饰性的内容。 |
  | `::first-letter` | 使每段开头的第一个字母发生改变                               |
  | ::first-line     | 第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。 |

  ## 组合器和选择器组

  虽然一次使用一个选择器就很有用，但在某些情形中却可能导致效率低下。 CSS选择器在你开始组合他们时就进行细粒度选择的会更加有效。基于元素之间的相互关联关系，CSS提供了几种方法来对元素进行选择。（A和B代表前文所述的任意选择器）

| 名称           | 组合器 | 选择                                                         |
| :------------- | :----- | :----------------------------------------------------------- |
| 选择器组       | A,B    | 匹配满足A（和/或）B的任意元素（参见下方 [同一规则集上的多个选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors#同一规则集上的多个选择器)）. |
| 后代选择器     | A B    | 匹配B元素，满足条件：B是A的后代结点（B是A的子节点，或者A的子节点的子节点） |
| 子选择器       | A > B  | 匹配B元素，满足条件：B是A的直接子节点                        |
| 相邻兄弟选择器 | A + B  | 匹配B元素，满足条件：B是A的下一个兄弟节点（AB有相同的父结点，并且B紧跟在A的后面） |
| 通用兄弟选择器 | A ~ B  | 匹配B元素，满足条件：B是A之后的任意一个兄弟节点（AB有相同的父节点，B在A之后，但不一定是紧挨着A） |