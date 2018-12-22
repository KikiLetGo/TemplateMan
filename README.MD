# TemplateMan
Pure Html template componentization lib, help you reuse the components in html page

一个纯粹的前端模版组件化库，帮助你在html页面重用你的组件

You may create some view in html project before, and you want to reuse them in other
places, it's very simple in nodejs, jsp, asp, php.... 

And we do not want to use some freamworks like VUE,
that may totlly change our project.

But they are bounded with service, how to reuse view component with pure HTML page?
TemplateMan is a lib to solve this problem.

你可能创建了一些视图在你的html页面中，并且你可能想在其它地方也使用它们，在nodejs，jsp，asp，php等服务器模板语言中可能非常简单，但是它们依赖于服务器，
同时你可能也不想使用像VUE这样的框架，因为它可能彻底改变我们的项目结构

We may write some code like this before:

我们之前可能会写出这样的代码：
```html
var html =
            '<div class="form-group-col-2">' +
            '   <div class="form-label">' + name + '：</div>' +
            '   <div class="form-cont">' +
            '       <input name="name" type="text" value = "' + name + '" style="width:200px;">' +
            '   </div>' +
            '</div>'+
            '<div class="form-group-col-2">' +
            '   <div class="form-label"></div>' +
            '   <div class="form-cont" name="ageDiv" id="ageDiv' + id + '">';
```
That's may cause some bugs and hard to read.

这将会造成bug，并且难以阅读

TempateMan will help you solve this problem.
TempateMan将会帮你解决这个困境


## How to use it?（如何使用？）
* Download or clone the project（下载或者克隆此项目）
* Import the templateman.js in your html like below:（在你的工程中导入templateman.js）

```html
<script src="assets/js/templateman.js" type="text/javascript"></script>
```
* Render the template in you page element, the forEach below generate some data, you could use data from you ajax request
（把你的模版组件文件渲染到你的页面元素中,下面的循环语句用于产生模拟数据，你在使用的时候可能来自于你的ajax请求）

```javascript
for(var i=0;i<10;i++){
	var data = {
		name:'Tom'+i,
		age:10+i
	}

	var li = document.createElement('li');

	template('templates/card.html',li,data)
	//$("#info_o").append(li)
	document.getElementById("info_o").appendChild(li)
}

```
The file 'templates/card.html' is a template tagert that we want to reuse, the data replace mark like hbs template in nodejs:

文件'templates/card.html'是我们想要重用的目标目标文件，数据替换标记和nodejs中的hbs模板语言很像：

```javascript
{{name}}
{{age}}
```

