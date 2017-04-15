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

