# HTML 表单

HTML表单用于**搜集不同类型的用户输入**

## <form> 元素

HTML 表单用于收集用户输入。

<form> 元素定义 HTML 表单：

```
<form>
 .
form elements
 .
</form>
```

## HTML 表单包含*表单元素*。

表单元素指的是不同类型的 input元素、复选框、单选按钮、提交按钮等等



# 文本输入

> <input type="text">定义用于文本输入的单行输入字段：

```
   登录：<br />
     <input type="text">
     <br />
   密码：<br />
     <input type="text">
```

## 单选按钮输入

*<input type="radio">* 定义*单选按钮*。



# <input>元素

最重要的表单是<input>元素.

<input>元素根据不同type属性，可以变化多种形态。

| 元素              | 属性         |
| ----------------- | ------------ |
| <select>          | 下拉列表     |
| <option>          | 待选择的选项 |
| <option selected> | 优先显示     |

使用方法：

> <select name="#">
>     <option value="volvo">Volvo</option>
>     <option value="Saab">Saab</option>
> </select>
>
> 以上效果点记就显示
>
> 优先显示效果<b>selected</b>：
>
> 在option开始标签的末尾加上`selected`优先显示
>
> <select>
>     <option value="I you">I you</option>
>     <option value="you">you</option>
>     <option value="ou" selected>ou</option>
> </select>

## textarea元素

*<textarea>* 元素定义多行输入字段（*文本域*）：

| 元素     | 属性             |
| -------- | ---------------- |
| textarea | 文本域可拉大拉小 |

> <textarea>你看我能不能拉大拉小</textarea>

## button 元素

button定义为按钮：

| 元素   | 属性 |
| ------ | ---- |
| button | 按钮 |

<button>点击我试试</button>

# HTML5表单元素

HTML5 增加了如下表单元素：

- <datalist>
- <keygen>
- <output>

**注释：**默认地，浏览器不会显示未知元素。新元素不会破坏您的页面。

## HTML5 <datalist> 元素

*<datalist>* 元素为 <input> 元素规定预定义选项列表。

用户会在他们输入数据时看到预定义选项的下拉列表。

<input> 元素的 *list* 属性必须引用 <datalist> 元素的 *id* 属性。

### 实例

通过 <datalist> 设置预定义值的 <input> 元素：

```
<form action="action_page.php">
<input list="browsers">
<datalist id="browsers">
   <option value="Internet Explorer">
   <option value="Firefox">
   <option value="Chrome">
   <option value="Opera">
   <option value="Safari">
</datalist> 
</form>
```



# HTML输入类型

## <input>元素输入类型

#### <input type="text">这样使用的元素类型

| 输入元素 | 属性             |
| -------- | ---------------- |
| text     | 文本输入单行字段 |
| password | 密码字段         |
| submit   | 提交表单处理程序 |
| radio    | 单选按钮         |
| checkbox | 复选框           |
| button   | 按钮             |

//submit 如果您省略了提交按钮的 value 属性，那么该按钮将获得默认文本



# text文本

```javascript
<input type="text">
    //文本输入
```

> 案例：
>
> <form>
>     <input type="text" value="输入我试试" />
> </form>

# password密码框

```javascript
<input type="password" />
    //密码输入 密码是不显示的哦
```

> 案例：
>
> <form>
>     <input type="text" value="我是文本">
>     <input type="password" value="12141">
> </form>

# radio单选按钮

```javascript
<input type="radio">Min
```

> 案例:
>
> <form>
>      <input type="radio">Min
>      <br />
>      <input type="radio" checked>KK
> </form>

## Input Type: checkbox

<input type="checkbox"> 定义复选框。

复选框允许用户在有限数量的选项中选择零个或多个选项。

### 实例

```
<form>
<input type="checkbox" name="vehicle" value="Bike">I have a bike
<br>
<input type="checkbox" name="vehicle" value="Car">I have a car 
</form> 
```

## Input Type: button

*<input type="button>* 定义*按钮*。

### 实例

```
<input type="button" onclick="alert('Hello World!')" value="Click Me!">
```

# value属性

value属性规定输入字段的初始值：

无论在文本还是在哪些方面的地方

value都是初始值

value=""

# 一些属性与使用技巧



| 属性      | 语法                               | 模式                                 |
| --------- | ---------------------------------- | ------------------------------------ |
| readonly  | <input type="text" readonly>       | 输入字段为只读（不能修改）           |
| disabled  | <input type="text" disabled>       | 输入字段是禁用的（不可点击，不可用） |
| size      | <input type="text" size="40">      | 输入字段的尺寸（以字符计）           |
| maxlength | <input type="text" maxlength="10"> | 规定输入字段允许的最大长度           |

1. readonly：readonly 属性不需要值。它等同于 readonly="readonly"。
2. disabled：被禁用的元素是不可用和不可点击的。被禁用的元素不会被提交。
3. size：字段的尺寸
4. maxlength：允许的最大长度

# form属性

## input元素所属的一个或多个表单

**提示**：如需引用一个以上的表单，请使用空格分隔的表单 id 列表。

但依然还是表单

```
<form action="action_page.php" id="form1">
   First name: <input type="text" name="fname"><br>
   <input type="submit" value="Submit">
</form>

 Last name: <input type="text" name="lname" form="form1">
```



## height 和 width 属性

height 和 width 属性规定 <input> 元素的高度和宽度。

height 和 width 属性仅用于 <input type="image">。

**注释：**请始终规定图像的尺寸。如果浏览器不清楚图像尺寸，则页面会在图像加载时闪烁。

```
<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
```