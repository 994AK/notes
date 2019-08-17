JavaScript是什么？能做什么？

1. JavaScript是一门脚本语言

2. 动态交互性功能，小例子比如（请求客户输入名字将其存放到变量中）
3. 运行代码以响应网页中发生的特定事件！等等



怎么向页面添加JavaScript?

1. 可以像添加css那样将JavaScript添加到html页面中。

2. 使用<script>嵌套在HTML里面！

外部添加JavaScript样式:

```javascript
<script src="script.js"></script>//添加样式
```

然后在`script.js`文件中，添加脚本

```javascript
function create()
{
 /代码/ 
}

```

然后就可以运行了

****

js样式无论样式还是外部注意的是让他放在/body标签之前，与之相邻。

这样脚本就可以在HTML解析完毕后加载啦~



#### `async` 和 `defer`

上述的脚本阻塞问题实际有两种解决方案 —— `async` 和 `defer`。我们来依次讲解。

浏览器遇到 `async` 脚本时不会阻塞页面渲染，而是直接下载然后运行。这样脚本的运行次序就无法控制，只是脚本不会阻止剩余页面的显示。当页面的脚本之间彼此独立，且不依赖于本页面的其它任何脚本时，`async` 是最理想的选择。

比如，如果你的页面要加载以下三个脚本：

```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

三者的调用顺序是不确定的。`jquery.js` 可能在 `script2` 和 `script3` 之前或之后调用，如果这样，后两个脚本中依赖 `jquery` 的函数将产生错误，因为脚本运行时 `jquery` 尚未加载。

解决这一问题可使用 `defer` 属性，脚本将按照在页面中出现的顺序加载和运行：

```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

添加 `defer` 属性的脚本将按照在页面中出现的顺序加载，因此第二个示例可确保 `jquery.js`必定加载于 `script2.js` 和 `script3.js` 之前，同时 `script2.js` 必定加载于 `script3.js`之前。

脚本调用策略小结：

- 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 `async`。
- 如果脚本需要等待解析，且依赖于其它脚本，调用这些脚本时应使用 `defer`，将关联的脚本按所需顺序置于 HTML 中。



## 注释

注释为了提高交流，为了别人阅读~提供关于代码如何工作的指引。



```javascript
在双斜杠后添加单行注释
//我是注释

在 /* 和 */ 之间添加多行注释，
/*
 我也是
 注释
*/


```

