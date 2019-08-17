# JS显示方案

JavaScript 能够以不同方式“显示”数据：

- 使用 window.alert() 写入警告框
- 使用 document.write() 写入 HTML 输出
- 使用 innerHTML 写入 HTML 元素
- 使用 console.log() 写入浏览器控制台

****

## 使用innerHtml

如果访问HTML元素，JS可使用`document.getElementByID(id)`方法.

`id`属性定义HTML元素。innerHTML属性定义HTML内容：

```javaScript
//案例


<p id=demo></p> //p标签显示的是5
<script>
    //使用！
    //前面获取p的"ID"然后写入innerHTML=5，最后p标签被写入了 5！
    document.getElementByID("demo").innerHTML=5;
    
</script>
```

 假设p标签有个id叫 demo！！！

然后获取p的"ID"然后写入innerHTML=5，最后p标签被写入了 5



## 使用console.log()测试

在浏览器中，您可使用 console.log() 方法来显示数据。

请通过 F12 来激活浏览器控制台，并在菜单中选择“控制台”。

```
<!DOCTYPE html>
<html>
<body>

<h1>我的第一张网页</h1>

<p>我的第一个段落</p>

<script>
console.log(5 + 6);
</script>

</body>
</html>
```



# javascript程序



*计算机程序*是由计算机“执行”的一系列“指令”。

在编程语言中，这些编程*指令*被称为语句。

*JavaScript 程序*就是一系列的编程*语句*。

**注释：**在 HTML 中，JavaScript 程序由 web 浏览器执行。



## JavaScript语句

语句由以下构成：值、运算符、表达式、关键词和注释

```
document.getElementById("demo").innerHTML="Hello Kitty";
```

这条语句告诉计算 id="demo"的HTML元素中输出“Hello kitty”

这些语句会按照它们被编写的顺序逐一执行。

**注释：**JavaScript 程序（以及 JavaScript 语句）常被称为 JavaScript 代码。

****

分号 ；

分号隔开javascript语句。

请在每条可执行的语句之后添加分号把！

```javascript
a = 5;
b = 6;
c = a + b;
```

如果有分号分隔，允许在同一行写多条语句：

```
a = 5; b = 6; c = a + b;
```

您可能在网上看到不带分号的例子。

**提示：**以分号结束语句不是必需的，但我们仍然强烈您这么做。



## JavaScript 空白字符

添加空格可以加强可读性!

```javascript
var person = "bill";
var person="bill";
//哪个更好看一点？
```

## JavaScript 行长度和折行

为了达到最佳的可读性，程序员们常常喜欢把代码行控制在 80 个字符以内。

如果 JavaScript 语句太长，对其进行折行的最佳位置是某个运算符：

### 实例

```
document.getElementById("demo").innerHTML =
 "Hello Kitty.";
```

# javaScript代码块

javascript语句可以用（{...}）花括号组合在代码块中

代码块类似于CSS的class.

javascript中看到成块组合在一起的语句：

```javascript
function myFunction()
{
    document.getElementById("demo1").innerHTML="Hello Kitty."
     document.getElementById("demo2").innerHTML="Hello."
}

<button type="button" onclick="myFunction()">点击我！</button>

<p id="demo1"></p>
<p id="demo2"></p>


```

上面的例子：

​    函数里面的获取p的id让计算机在HTML写入Hello Kitty

   “因为函数要调用才能使用，不调用对于不存在”

   所以 buttom按钮 写入了 onclick点击事件

​    点击事件onclick，点击调用函数！启动即可！



## JavaScript 关键词

JavaScript 语句常常通过某个关键词来标识需要执行的 JavaScript 动作。

下面的表格列出了一部分将在教程中学到的关键词：

| 关键词        | 描述                                              |
| :------------ | :------------------------------------------------ |
| break         | 终止 switch 或循环。                              |
| continue      | 跳出循环并在顶端开始。                            |
| debugger      | 停止执行 JavaScript，并调用调试函数（如果可用）。 |
| do ... while  | 执行语句块，并在条件为真时重复代码块。            |
| for           | 标记需被执行的语句块，只要条件为真。              |
| function      | 声明函数。                                        |
| if ... else   | 标记需被执行的语句块，根据某个条件。              |
| return        | 退出函数。                                        |
| switch        | 标记需被执行的语句块，根据不同的情况。            |
| try ... catch | 对语句块实现错误处理。                            |
| var           | 声明变量。                                        |

**注释：**JavaScript 关键词指的是保留的单词。保留词无法用作变量名。