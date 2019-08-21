# 循环

js不能写死的值！

### while循环

***

var i = 0;         //1.初始化

while ( i<5 )   //2.条件

{

​	alert(i); 	 //3.语句

​     i = i + 1;	//4.自增

}

## for循环

```javascript
for(初始化;条件;自增)
{
    语句；
}
//
for(var i = 0 ; i<5;i++){
    语句;
}
//length本身会跟你的标签数量来定义多少
所以 可以来配合for
//
for(var i = 0 ; i<che.length;i++){
    语句;
}
```

***

****

使用for循环的时候，一定不要忘了 语句的格式！！！要对。



break 与 continue;

- break 打破 断掉
- continue 中断

```javascript
 for ( var i = 0; i < 5; i++){
                if( i == 2 ){
                    break;    //整个循环中断了
                    continue; //本次循环中断了
                }
                alert(i);
                //break     循环到 0 1  就结束了
                //continue  循环到 0 1   3 4  中间循环就断掉了
           }
```

