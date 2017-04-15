## 伪类选择器
Link:标签原本样式（如果在这个属性中设置样式优先级要高于标签选择器）
Visited:标签被访问以后的样式。
Hover:鼠标悬停在标签上会触发的样式。
Active:当点击（激活）标签时的样式。
```html
a:link {
    color:blue;
}
a:visited {
    color: red;
}
a:hover {
    color: yellow;
}
a:active {
    color: green;
}
<a href="https://www.baidu.com">百度</a>                //顺序不能改变
```
# CSS三种样式
## 行内样式
```html
<p style="color:red;">这是CSS行内样式</p>
```
## 嵌套样式     
写在head中，并且用style标签包含。这也是我们比较常用的一种。      //选择器这种就是嵌套样式
```html
<head>
<style>
p, a {
    color:red;
}
</style>   
</head>
<div>
  <p>p标签</p>
  <a href="/resource/k111/前端基础知识/class-003/#">a标签</a>
</div>
```
## 外部样式
将CSS编写为单独的文件,需要在head中引入。
注意：
1. 如果通过开发人员工具来看拥有外部样式的页面的时候，那么我们会发现请求至少有两条：其中一条页面主体
内容的请求，另一条应该就是外部样式的请求。
2. 如果页面上有外部样式的请求，会跟主页面的解析同时进行。
```html
<head>
<link rel="stylesheet" href="CSS文件路径" type="text/css">
</head>
```
# CSS三大特性
## 继承
就是页面中的一些标签的属性可以继承给子标签,但是继承还是限制的,比如a的颜色，块级元素的高度等等。
一般情况下，所有的与文字图片的大小样式相当的属性都可以继承:font-x,line-x,一些标签的宽高也可以继承。
```html
<style>
 div {
    font-size: 10px;
 }
</style>
<div>
  <p>继承div的字体设置</p>
</div>
```
## 层叠
页面的样式是多项属性设置进行叠加的结果。
```html
<style>
 div p {
    color: red;
 }
 .p1 {
    font-size: 20px;
 }
</style>
<div>
  <p class="p1">层叠效果</p>
</div>
```
## 优先级
当设置发生冲突时，需要考虑优先级，优先级最高的设置有效。
基本公式： !important > style(行内样式) > id > class > 标签 > 继承 > 浏览器的默认属性
但是运行公式需要条件：针对同一个标签的设置。
出现一个id,优先级+100;
出现一个class,优先级+10;
出现一个tag(标签),优先级+1;
```html
<style>
div {
    color: red;
}
#pid {
    color: green;
}
.pclass {
    color: yellow;
}
p {
    color: blue;
}

</style>
<div>
 <p id="pid" class="pclass">第一个标签</p>
 <p>第二个p标签</p>
</div>
```
# CSS样式属性
## font-family
font-family属性用于设置字体。网页中常用的字体有宋体、微软雅黑、黑体等，例如将网页中所有段落文
本的字体设置为微软雅黑，可以使用如下CSS样式代码：
p {font-family: “宋体”,“微软雅黑”;}
可以同时指定多个字体，中间以逗号隔开，表示如果浏览器不支持第一个字体，则会尝试下一个，直到找到
合适的字体。
注意:
* 各种字体之间必须使用英文状态下的逗号隔开。
* 中文字体需要加英文状态下的引号，英文字体一般不需要加引号。当需要设置英文字体时，英文字体名必
须位于中文字体名之前。
* 如果字体名中包含空格、#、$等符号，则该字体必须加英文状态下的单引号或双引号，例如
font-family: “Times New Roman”;。
* 尽量使用系统默认字体，保证在任何用户的浏览器中都能正确显示。
* 使用unicode对中文字体进行编码。
在 CSS 中设置字体名称，直接写中文是可以的。但是在文件编码（GB2312、UTF-8 等）不匹配时会产生
乱码的错误。为此，在 CSS 直接使用 Unicode 编码来写字体名称可以避免这些错误。使用 Unicode 写
中文字体名称，浏览器是可以正确的解析的。

![Markdown](http://i2.muimg.com/1949/199d926473d1cc92.png)

## font-size
font-size属性用于设置字号，该属性的值可以使用相对长度单位，也可以使用绝对长度单位。其中，相对
长度单位比较常用，推荐使用像素单位px，绝对长度单位使用较少。
## font-weight
font-weight属性用于定义字体的粗细，其可用属性值：normal、bold、bolder、lighter、100~900
（100的整数倍）。
## font-style
font-style属性用于定义字体风格，如设置斜体、倾斜或正常字体，其可用属性值如下：
normal：默认值，浏览器会显示标准的字体样式。
italic：浏览器会显示斜体的字体样式。
oblique：浏览器会显示倾斜的字体样式。
## font综合设置
```html
选择器 {
  font: font-style font-weight font-size/line-height font-family;
}
```
使用font属性时，必须按上面语法格式中的顺序书写，各个属性以空格隔开。
其中不需要设置的属性可以省略（取默认值），但必须保留font-size和font-family属性，否则font属性
将不起作用。
# 文本外观属性
## 文本颜色color
color属性用于定义文本的颜色，其取值方式有如下3种：
预定义的颜色值，如red，green，blue等。
十六进制，如#FF0000，#FF6600，#29D794等。实际工作中，十六进制是最常用的定义颜色的方式。
RGB代码，如红色可以表示为rgb(255,0,0)或rgb(100%,0%,0%)。
需要注意的是，如果使用RGB代码的百分比颜色值，取值为0时也不能省略百分号，必须写为0%。
## 字间距letter-spacing
letter-spacing属性用于定义字间距，所谓字间距就是字符与字符之间的空白。其属性值可为不同单位的
数值，允许使用负值，默认为normal。
## 单词间距word-spacing
word-spacing属性用于定义英文单词之间的间距，对中文字符无效。和letter-spacing一样，其属性值
可为不同单位的数值，允许使用负值，默认为normal。
word-spacing和letter-spacing均可对英文进行设置。不同的是letter-spacing定义的为字母之间
的间距，而word-spacing定义的为英文单词之间的间距。
## 行间距line-height
line-height属性用于设置行间距，就是行与行之间的距离，即字符的垂直间距，一般称为行高。line-height
常用的属性值单位有三种，分别为像素px，相对值em和百分比%，实际工作中使用最多的是像素px。
## 文本修饰text-decoration
text-decoration属性用于设置文本的下划线，上划线，删除线等装饰效果，其可用属性值如下：
none：没有装饰（正常文本默认值）。
underline：下划线。
overline：上划线。
line-through：删除线。
另外，text-decoration后可以赋多个值，用于给文本添加多种显示效果，例如希望文字同时有下划线和删除
线效果，就可以将underline和line-through同时赋给text-decoration。
## 水平对齐方式text-align
text-align属性用于设置文本内容的水平对齐，相当于html中的align对齐属性。其可用属性值如下：
left：左对齐（默认值）
right：右对齐
center：居中对齐
## 垂直对齐方式vertical-align
vertical-align 常用属性值：
baseline： 将支持valign特性的对象的内容与基线对齐
sub： 垂直对齐文本的下标
super： 垂直对齐文本的上标
top： 将支持valign特性的对象的内容与对象顶端对齐
text-top： 将支持valign特性的对象的文本与对象顶端对齐
middle： 将支持valign特性的对象的内容与对象中部对齐
bottom： 将支持valign特性的对象的文本与对象底端对齐
text-bottom： 将支持valign特性的对象的文本与对象底端对齐
## 首行缩进text-indent
text-indent属性用于设置首行文本的缩进，其属性值可为不同单位的数值、em字符宽度的倍数、或相对于
浏览器窗口宽度的百分比%，允许使用负值, 建议使用em作为设置单位。
### 空白符处理white-space,自动换行word-break,word-wrap不多要求

















