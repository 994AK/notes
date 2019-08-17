# 怎么使用JavaScript？

 `<script>`标签“代表读取JavaScript属性标签“；类似像CSS一样的属性

在HTML中，JavaScript代码位于``<script>``与`</script>`标签之间.

```javascript
//举个例子
<body>
//个人推荐：把script写在/body之间的前面 让标签属性启动完了在加载js
  
<script>
  ....//内容代码
  document.getElementById("ID").innerHTML="我是个js"
</script>    
</body>
```

**注释：**旧的 JavaScript 例子也许会使用 **type** 属性：`<script type="text/javascript">`。



## JS函数和事件

js   **函数**是一种JavaScript代码块,它可以调用时被执行。

例如，当发生**事件**时调用函数，比如当用户点击按钮时。







## `<body>`中的JS

**写在<body>元素底部，可改善显示速度，因为脚本编码会拖慢显示。！**



### 外部脚本

脚本可放置在外部文件中：像css一样的link

外部脚本很好用的！！！

JavaScript文件的文件扩展名叫 **.js**

如需要使用外部脚本，请在<script>标签的src属性中设置的名称

```javascript
<script src="sasdas.js"></script>
....//看你扩展名的前面的名字 扩展名必须是 .js
//外部脚本不能包含 <script> 标签。！！！
```

放在<head>与放在<body>区别在哪？

1. 放在head里面会优先启动javascript然后拖迟HTML启动
2. 放在body后会先启动HTML然后在启动javaScript速度快一点

## 外部 JavaScript 的优势

在外部文件中放置脚本有如下优势：

- 分离了 HTML 和代码

- 使 HTML 和 JavaScript 更易于阅读和维护

- 已缓存的 JavaScript 文件可加速页面加载

- ## 外部引用

  可通过完整的 URL 或相对于当前网页的路径引用外部脚本：

  本例使用完整的 URL 来链接至脚本：

  ### 实例

  ```
  <script src="https://www.w3school.com.cn/js/myScript1.js"></script>
  ```



