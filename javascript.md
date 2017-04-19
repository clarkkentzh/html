# javascript语言介绍
JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。
它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是
在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。
## 三大组成部分
```html
ECMAScript，描述了该语言的基本语法。
文档对象模型（DOM），描述处理网页内容的方法和接口。
浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口。
```
## 基本特点
JavaScript是一种属于网络的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式
各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML
中来实现自身的功能的。
```html
1.是一种解释性脚本语言（代码不进行预编译）。
2.主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为。
3.可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。
4.跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac、
Android、iOS等）
```
## javascript的作用
```html
嵌入动态文本于HTML页面。
对浏览器事件做出响应。
读写HTML元素。
在数据被提交到服务器之前验证数据。
检测访客的浏览器信息。
控制cookies，包括创建和修改等。
基于Node.js技术进行服务器端编程。
```
## javascript的编写方式
1.行内样式
```html
<button onclick="alert();"></button>       
//一个点击按钮，alert是点击后显示一个对话框，按钮的名字为标签中间的内容.
```
2.嵌套样式
```html
<button id="btn"></button>
<script>
   var btn = document.getElementById("btn");  //获取id为btn的元素
   btn.onclick = function(event){....};　　　//按钮点击后执行函数的内容
</script>
```
3.外部样式
```html
<script src="xxx/yyy.js">此处不要写东西</script>
注意：
需要在外部添加一个.js文件,引入外部js代码，当引入的时候，该代码会立刻执行。
当需要引入外部js文件时，默认情况下，浏览器会在此阻塞，直到该代码加载完毕为止，
才能继续向后执行其他代码
```
# javascript的基本概念
## javascript的数据类型
```html
ECMAScript 中有 5 种简单数据类型(也称为基本数据类型): Undefined, Null, Boolean,
Number和 String 。
对一个值使用 typeof 操作符可能返回下列某个字符串:
“undefined” ——如果这个值未定义;
“boolean” ——如果这个值是布尔值;
“string” ——如果这个值是字符串;
“number” ——如果这个值是数值;
“object” ——如果这个值是对象或 null ;
“function” ——如果这个值是函数。
```
比如：
```js
 var a = "string";
 alert(typeof a); //string

 var b = 123;
 alert(typeof b); //number

 var c = true;
 alert(typeof c);//boolean

 var d;
 alert(typeof d);//undefined

 var f = function(){alert("hello");};
 alert(typeof f);//function

 var e = null;
 alert(typeof e);//object    
```
## 字符串类型
```js
  var a = "hello";
  a = a + "world";
  console.log(a);

  console.log("html" + "css");
  console.log("html" + 123);    //字符串拼接，原则上只要有个是字符串，都会变成字符串
  console.log("" + 123);    //也可以，字符串123


  //其他类型转换成字符串
  var b = 100;
  console.log(b);
  console.log(b.toString());  //变成字符串100
  console.log(b.toString(2));   //转换成二进制数字符串01100100

  var c = false;
  console.log(c.toString());
  console.log("" + false);     //同样都是字符串false

  //特殊的
  var d = null;
  var e = undefined;
  // console.log(d.toString());   //不能这样转换成字符串
  // console.log(e.toString());   //不能这样转换成字符串
  console.log(String(d));  //转换成字符串null
  console.log(String(e));  //转换成字符串undefined
```
## 布尔类型
  boolean 类型是 ECMAScript 中使用得最多的一种类型,该类型只有两个字面值: true 和 false 。
  将一个值转换为其对应的 Boolean 值,可以调用转型函数 Boolean().
```js
  var a = 10;
  console.log(Boolean(a));  //true

  var b = "hello";
  console.log(Boolean(b));  //true
```
数据类型 | 转换为true的值 | 转换为false的值
-----|-----|-----
Boolean|true|false
String|任何非空字符串|""(空字符串)
Number|任何非零数值(包括无穷大)|0和NaN
Object|任何对象|null
Undefined|n/a|undefined

## 数值类型
最基本的数值字面量格式是十进制整数,除了以十进制表示外,整数还可以通过八进制(以 8 为基数)或十六
进制(以 16 为基数)的字面值来表示。比如：
```js
var a = 123;
var b = 0123;//8进制使用'0' 开头
var c = 0x123; //16进制，使用"0x"开头
```
### 浮点数
所谓浮点数值,就是该数值中必须包含一个小数点,并且小数点后面必须至少有一位数字,比如：
```js
var a = 10.12;
var b = 0.12;
var c = .123; //不推荐

对于那些极大或极小的数值,可以用 e 表示法(即科学计数法)表示的浮点数值表示, 比如：
var a = 3.5e7; //表示3.5 * 10^7
var b = 3.5e-7; //表示 3.5 * 10^-7;

浮点数值的最高精度是 17 位小数,但在进行算术计算时其精确度远远不如整数。例如,0.1 加 0.2
的结果不是 0.3,而是 0.30000000000000004。这个小小的舍入误差会导致无法测试特定的浮点数值。
if ((a + b) == 0.3 ) {
  alert("a+b==0.3");     //if条件不成立
}
```
### NaN
NaN ,即非数值(Not a Number)是一个特殊的数值,这个数值用于表示一个本来要返回数值的操作数
未返回数值的情况(这样就不会抛出错误了)。
ECMAScript 定义了isNaN() 函数。这个函数接受一个参数,该参数可以是任何类型,而函数会帮我们确
定这个参数是否“不是数值”。
```js
alert(isNaN(NaN));//true
alert(isNaN(10));//false
alert(isNaN("blue"));//true
alert(isNaN("10"));//false
alert(isNaN(true));//false
```
## 未定义类型
Undefined 类型只有一个值,即特殊的 undefined 。在使用 var 声明变量但未对其加以初始化时,这个变量
的值就是 undefined, 或者显式的进行undefined赋值操作，比如:
```js
var a ;
var b = undefined;
console.log(tyepf a);// undefined
console.log(tyepf b);// undefined
```
对于尚未声明过的变量,只能执行一项操作,即使用 typeof 操作符检测其数据类型(对未经声明的变量
调用 delete 不会导致错误,但这样做没什么实际意义,而且在严格模式下确实会导致错误)。
```js
console.log(c);//出现错误，因为没有定义变量c
console.log(typeof c); //undefined
```
Null 类型是第二个只有一个值的数据类型,这个特殊的值是 null 。从逻辑角度来看, null 值表示一
个空对象指针,而这也正是使用 typeof 操作符检测 null 值时会返回 “object” 的原因,　比如：
```js
var a = null;
console.log(typeof  a);//object

如果定义的变量准备在将来用于保存对象,那么最好将该变量初始化为 null 而不是其他值,然后可以判断变量　　　　
是否包含对象来做对应的操作，比如：
if (a != null) {
  ....
}
```
# javascript函数
函数对任何语言来说都是一个核心的概念。通过函数可以封装任意多条语句,而且可以在任何地方、任何时候调用执行。
## 函数的声明
```js
函数的声明提升：函数的定义可以放在代码的任意位置，在运行时，javascript引擎会将函数的声明提升到代码的顶部
  

  var result = fun(10,20);
  console.log("result =",result);

  //函数声明(定义)
  function fun(a,b) {
    return a + b;
  }

  /*********************************************/

  //变量声明提升：定义的变量在运行时，会被提升到代码的顶部
  result = minus(30,20);
  console.log("result =",result);
                                    //会出现minus不是函数的提示错误
  var minus = function(c,d){
    return c - d;
  }
  
  //等价于：
  
  var minus;
  result = minus(30,20);
  console.log("result =",result);
  minus = function(c,d){
    return c - d;
  }
```
## 函数传参
```js
  function test(){
    console.log("没有参数");
  }
  test(1,2,3,4);     //没有参数



  function testTwo(arg1, arg2){
    console.log(arg1, arg2);
  }
  testTwo();         //undefined undefined



  function testThree(arg1, arg2, arg3){
    console.log(arg1, arg2, arg3);
  }
  testThree(10,20);     //10 20 undefined
  testThree(10,20, 30,40);  //10 20 30 
 ```






