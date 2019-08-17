# Javascript语法

**JavaScript 语法是一套规则，它定义了 JavaScript 的语言结构。**

```javascript
var x, y;//如何声明变量
x = 7; //如何赋值
y = 8;//如何赋值
z = x + y ;//如何计算值
```

****

### **JavaScript值**

语句定义有两种类型的值：混合值和变量值。

混合值被称为**字面量**。变量值被称为变量。

****

### **JavaScript字面量**

写*数值*有无小数点均可 : 15.90

写“**字符串**”是文本，由双引号或单引号包围;

```javascript
"Bill Gates"
'Bill Gates'
```

****

### **JavaScript变量**

**变量**用于**存储**数据值。

JavaScript使用`var`关键词来声明变量.

`=`  号用于为变量**赋值**。

```javascript
var x; //声明变量
x = 7 //变量赋值为x=7 7
```

****

### **JavaScript运算符**

使用**赋值运算符**（=）向变量**赋值**

```javascript
var x,y;
var x = 7;//赋值7
var y = 8;//赋值8
```

****

### javascript表达式

表达式值、变量和运算符的组合，计算结果是值.

```javascript
6*10
//例子:
var x 
x = 7+1；
//所以 x的值是多少？
//打印出来是 8；
```

表达式也可包含变量值：

```
x * 10等等都可以
```

值可以是多种类型，比如数值和字符串。

例如，“G“+” “+”ates“,计算机为”G ates“ 

```javascript
“G“+” “+”ates“;//”G ates“ 
```

****

### JavaScript关键词

javaScript **关键词**用于标识被执行的动作.

`var`关键词告诉浏览器创建新的变量:

```javascript
var x = 7 + 8;
var y = x * 1;
都可以这样的
```

****

### 注释

双斜杠 // 或 /* 与 **/* 之间的代码被视为*注释*。

多行注释

多行注释以 /* 开头，以 */ 结尾。

任何位于 /* 和 */ 之间的文本都会被 JavaScript 忽略。

本例使用多行注释（注释块）来解释代码：

注释会被忽略，不会被执行：

```
var x = 7;   // 会执行

// var x = 8;   不会执行
```

****

# 特别注意:

## JavaScript 对大小写敏感！

变量 lastName 和 lastname，是两个不同的变量。

```javascript
lastName = "Gates";//good
lastname = "Jobs"; //报错
//所以区好大小！
```

JavaScript 不会把 *VAR* 或 *Var* 译作关键词 *var*。

***

还有就是 变量名的方法！

#### JavaScript要采用驼峰式大小写

### 驼峰式大小写（Camel Case）：

```
FirstName, LastName, MasterCard, InterCity.
```

![camelCase](https://www.w3school.com.cn/i/camelcase.png)

JavaScript 程序员倾向于使用以小写字母开头的驼峰大小写：

```
firstName, lastName, masterCard, interCity
```

## JavaScript 字符集

JavaScript 使用 *Unicode* 字符集。

Unicode 覆盖世界上几乎所有的字符、标点和符号。