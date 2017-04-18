# 背景样式
## 背景具体属性
```sh
background-color: 设置背景颜色,按照颜色的格式填写,比如red, #F00, rgb(255,0,0)
background-color: red;
background-color: #F00;
background-color: rgb(125,200,30);

background-image: 设置背景图片, url(图片路径)
background-image: url(image/xxx.jpg);

background-repeat: 设置背景图片是否平铺,repeat,no-repeat,repeat-x,repeat-y.
background-repeat: repeat-x;

background-position: 设置背景图片显示位置,可以使用top,bottom,left,right设置，也可以直接设置数值(x轴,y轴)
background-position: top left;
background-position: center center;
background-position: 10px 15px;

background-attachement: 设置背景是否固定,fixed表示固定.
background-attachement: fixed;
```
### 综合写法
background: color image repeat position attachement;
```html
background: red url("image/xxx.png) repeat 10px 10px fixed;
```
# 行高
设置方式：
1. 使用百分比,那么这个行高的基数为当前标签字体大小。
line-height: 120%; 表示行高为当前字体的1.2倍,子元素会继承父元素计算出的行高
2. 直接使用px进行绝对设置
line-height: 30px; 直接设置行高为30px
3. 使用em进行相对设置
line-height: 1.5em; 设置行高为当前字体大小的1.5倍,子元素会继承父元素计算出的行高
4. 使用不带单位的数值
line-height: 1.5; 设置行高因子为1.5,子元素会继承该因子而不是继承父元素行高
# 盒子模型
## 边框属性
```html
边框宽度：
border-top-width：上边框宽度
border-right-width：右边框宽度
border-bottom-width：下边框宽度
border-left-width：左边框宽度
border-width：上边框宽度[右边框宽度 下边框宽度 左边框宽度]

边框颜色：
border-top-color:上边框颜色
border-right-color:右边框颜色
border-bottom-color:下边框颜色
border-left-color:左边框颜色
border-color:上边框颜色 [右边框颜色 下边框颜色 左边框颜色]

边框样式：
border-top-style:上边框样式
border-right-style:右边框样式
border-bottom-style:下边框样式
border-left-style:左边框样式
border-style:上边框样式 [右边框样式 下边框样式 左边框样式]
常用样式: solid dashed dotted double

注意:设置边框颜色时同样必须设置边框样式，如果未设置样式或设置为none，则其他的边框属性无效。

边框属性的综合设置:
border-top: 宽度 样式 颜色
border-top: 1px solid red;
border: 宽度 样式 颜色
border: 1px dotted yellow;

小技巧：border: 0 none; 设置边框为0的方法。
```
## 内边距padding属性
```html
padding-top: 上内边距
padding-right: 右内边距
padding-bottom: 下内边距
padding-left: 左内边距

综合设置：padding: 上内边距[右内边距 下内边距 左内边距]
padding: 10px;　　　　　　　　　　//四个方向都是10　　　
padding: 10px 20px;           //上下是10,左右是20.对称的特点
padding: 10px 20px 30px;      //上是10,左右是20,下是30.
```
## 外边距margin属性
```html
margin-top: 上外边距
margin-right: 右外边距
margin-bottom: 下外边距
margin-left: 左外边距

综合设置：margin: 上外边距[右外边距 下外边距 左外边距]
margin: 10px;                            //特点和内边距一样
margin: 10px 20px;
margin: 10px auto; 实现盒子水平居中            //垂直不能居中
margin: 10px 20px 30px;
### 注意:
1.外边距可以使用负值，使相邻元素重叠。
2.可能会出现外边距合并情况(两个盒子上下外边距合并,取最大值),左右外边距不能合并,只能叠加.
3.为了方便操作,可以用 * { margin:0; padding: 0}取消浏览器的默认属性.
4.对于两个嵌套关系的块元素，如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的上外边距
发生合并，合并后的外边距为两者中的较大者，即使父元素的上外边距为0，也会发生合并。
如果希望外边距不合并，可以为父元素定义1像素的上边框或上内边距。这里以定义父元素的上边框为例，在
父div的CSS样式中增加如下代码：
```html
border: 1px solid red;
或者padding-top: 1px;
```
* list-style属性是去掉列表样式.
# 浮动概念
## 浮动的css定义格式
```html
选择器 {
float: 属性值；
}
```
float的属性值如下:

属性值　|　描述
-----|-----
left | 元素向左浮动
right | 元素向右浮动
none | 元素不浮动(默认值)

## 浮动的特点
```html
1.浮动脱离标准流，不占位置，会影响标准流。浮动只有左右浮动。
2.浮动的元素A排列位置，跟上一个元素（块级）有关系。如果上一个元素有浮动，则A元素顶部会和上一个
元素的顶部对齐；如果上一个元素是标准流，则A元素的顶部会和上一个元素的底部对齐。
3.一个父盒子里面的子盒子，如果其中一个子级有浮动的，则其他子级都需要浮动。这样才能一行对齐显示。
4.浮动根据元素书写的位置来显示相应的浮动。
5.元素添加浮动后，元素会具有行内块元素的特性。元素的大小完全取决于定义的大小或者默认的内容多少。
6.如果一个div没有设置高，这个div中的所有的元素都浮动了，那么这个div的高是0。
```
# 浮动的影响以及清除
## 浮动影响
如果在一个大的没有设置高的div中有两个小的子div，那么这个大的div的高就是这两个小div之和，但是
一旦两个小的div都浮动了，那么大的div高度就变为0，因为浮动之后div不会撑开父容器。这种情况会导
致父盒子div后边的同级元素会和当前盒子中的浮动的子盒子重叠显示，导致页面混乱。
## 清除方式
1.直接给父盒子设置一个高度(严格的说不算清除浮动)。这种方式简单方便，但是当父盒子没有办法直接
设置高度就必须用其他方法清除浮动。

2.在发生浮动的父盒子中的最后添加一个空元素，然后给该空元素设置clear属性值。

clear属性值 | 含义
-----|-----
left | 清除左浮动
right | 清除右浮动
both | 清除所有浮动

但是当页面中发生浮动的元素很多时就需要添加很多空元素，不推荐使用.

3.直接给父盒子设置overflow属性
overflow：hidden;
这种方式简单方便，但是如果页面一旦出现了定位，那么定位可能会受到影响。

overflow属性值 | 含义
-----|-----
hidden | 超出部分隐藏
scroll | 超出部分显示滚动条
auto | 超出部分显示滚动条，否则不显示

4.使用伪元素清除浮动(不理解先背下来会用)
```html
.classname::after,
.classname::before {
content: "";
height: 0;
display: block;
visibility: hidden;
line-height: 0;
clear: both;
}
.classname {
zoom:1;
}
```
# 定位position
定位的基本思想很简单，它允许你定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一
个元素甚至浏览器窗口本身的位置。可以迅速的完成其他方式难以实现的效果。

常用定位的属性值：
```html
1.static, 默认情况下浏览器中所有的盒子都是静态的。

2.relative, 相对定位，元素相对于自身位置的移动。

3.absolute, 绝对定位,有三种情况。
1)如果盒子没有body之外其他的祖先元素，那么在绝对定位的时候这个位置是相对于body的。
2)_如果盒子有祖先元素，但是祖先元素并没有设置定位，那么在绝对定位的时候这个位置还是相对于body的。
3)如果盒子有祖先元素并且祖先元素有定位(absolute,relative都可以)，那么这个时候我们的盒子定位
是相对于最近一个设置过定位的祖先元素的。

4.fixed, 固定，以窗口页面进行定位，不会随着滚动条移动。
```
## position不同值的特点
属性值 | 是否脱离标准流
-----|-----
static | 否
relative | 否
absolute | 是
fixed | 是

# 其它属性
```html
display: block;    //设置为块元素
display: inline-block;    //设置为行内块元素
display: none;     //隐藏一个元素,并且不占据页面空间
visibility: hidden;   //隐藏一个元素,但是仍然占据页面空间
visibility: visible; (默认)显示
```
z-index: -1;      //用于设置元素的层级,可以是任意整数

1.默认情况下设置定位的元素的层级比普通元素的层级要高,是大于0,但是小于1.

2.z-index　只对设置过定位的元素有效.
### 注意:
浮动排列在一行的所有元素,默认情况下,元素的层级从左到右逐渐增大,从0开始无限接近于1.


