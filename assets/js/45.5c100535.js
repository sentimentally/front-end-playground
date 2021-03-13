(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{605:function(v,_,t){"use strict";t.r(_);var e=t(69),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("Javascript 包括三块：ECMAScript、DOM 和 BOM，本文主要介绍 DOM 和 BOM。")]),v._v(" "),t("h1",{attrs:{id:"dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[v._v("#")]),v._v(" DOM")]),v._v(" "),t("h2",{attrs:{id:"什么是-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dom"}},[v._v("#")]),v._v(" 什么是 DOM")]),v._v(" "),t("p",[v._v("文档对象模型 ("),t("code",[v._v("DOM")]),v._v(") 是"),t("code",[v._v("HTML")]),v._v("和"),t("code",[v._v("XML")]),v._v("文档的编程接口。"),t("br"),v._v(" "),t("code",[v._v("DOM")]),v._v("将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。")]),v._v(" "),t("p",[v._v("尽管通常会使用"),t("code",[v._v("JavaScript")]),v._v("来访问"),t("code",[v._v("DOM")]),v._v("， 但它并不是"),t("code",[v._v("JavaScript")]),v._v("的一部分，它也可以被其他语言使用。")]),v._v(" "),t("h2",{attrs:{id:"dom-解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom-解析"}},[v._v("#")]),v._v(" DOM 解析")]),v._v(" "),t("p",[v._v("我们常见的"),t("code",[v._v("HTML")]),v._v("元素，在浏览器中会被解析成节点："),t("br"),v._v(" "),t("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/ct_htmltree.gif",alt:"image"}})]),v._v(" "),t("p",[v._v("在控制台，我们也能比较清晰地看到这样的层级关系：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/%7BEA4AA8AF-DB12-4B48-8A6A-E71099D1A942%7D.png",alt:"image"}})]),v._v(" "),t("p",[t("strong",[v._v("节点树中的节点彼此拥有层级关系。")]),t("br"),v._v("\n父（"),t("code",[v._v("parent")]),v._v("）、子（"),t("code",[v._v("child")]),v._v("）和同胞（"),t("code",[v._v("sibling")]),v._v("）等术语用于描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）。")]),v._v(" "),t("ul",[t("li",[v._v("在节点树中，顶端节点被称为根（"),t("code",[v._v("root")]),v._v("）")]),v._v(" "),t("li",[v._v("每个节点都有父节点、除了根（它没有父节点）")]),v._v(" "),t("li",[v._v("一个节点可拥有任意数量的子")]),v._v(" "),t("li",[v._v("同胞是拥有相同父节点的节点")])]),v._v(" "),t("p",[t("strong",[v._v("通过"),t("code",[v._v("HTML DOM")]),v._v("，树中的所有节点均可通过"),t("code",[v._v("JavaScript")]),v._v("进行访问。所有"),t("code",[v._v("HTML")]),v._v("元素（节点）均可被修改，也可以创建或删除节点。")])]),v._v(" "),t("h2",{attrs:{id:"dom-接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom-接口"}},[v._v("#")]),v._v(" DOM 接口")]),v._v(" "),t("p",[t("code",[v._v("DOM")]),v._v("接口主要用于操作"),t("code",[v._v("DOM")]),v._v("节点，如常见的增删查改。")]),v._v(" "),t("p",[v._v("在 web 和 XML 页面脚本中使用 DOM 时，一些常用的 API 如下：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("document.getElementById(id)")]),v._v("：根据"),t("code",[v._v("id")]),v._v("获取元素")]),v._v(" "),t("li",[t("code",[v._v("document.getElementsByTagName(name)")]),v._v("：根据"),t("code",[v._v("tag")]),v._v("获取元素")]),v._v(" "),t("li",[t("code",[v._v("document.createElement(name)")]),v._v("：创建元素")]),v._v(" "),t("li",[t("code",[v._v("parentNode.appendChild(node)")]),v._v("：添加子元素")]),v._v(" "),t("li",[t("code",[v._v("element.innerHTML")]),v._v("：设置/获取元素内容")]),v._v(" "),t("li",[t("code",[v._v("element.styles")]),v._v("：设置/获取元素样式")]),v._v(" "),t("li",[t("code",[v._v("element.setAttribute()")]),v._v("：设置元素属性值")]),v._v(" "),t("li",[t("code",[v._v("element.getAttribute()")]),v._v("：获取元素属性值")]),v._v(" "),t("li",[t("code",[v._v("element.addEventListener()")]),v._v("：添加事件绑定")])]),v._v(" "),t("p",[v._v("通常什么时候会用呢，最常见的便是列表的维护，包括增加新的选项、删除某个、修改某个等等。")]),v._v(" "),t("p",[v._v("在浏览器兼容性问题很多的时候，我们常常会使用"),t("code",[v._v("jQuery")]),v._v("来进行些"),t("code",[v._v("DOM")]),v._v("操作，如今兼容性问题逐渐变少，大家更倾向于用原生"),t("code",[v._v("DOM")]),v._v("接口来进行操作。")]),v._v(" "),t("h2",{attrs:{id:"dom-事件流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom-事件流"}},[v._v("#")]),v._v(" DOM 事件流")]),v._v(" "),t("p",[v._v("事件流所描述的就是从页面中接受事件的顺序。"),t("br"),v._v(" "),t("strong",[v._v("DOM 事件流（"),t("code",[v._v("event flow")]),v._v("）存在三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。")])]),v._v(" "),t("ol",[t("li",[v._v("捕获阶段：一开始从文档的根节点流向目标对象；")]),v._v(" "),t("li",[v._v("目标阶段：然后在目标对向上被触发；")]),v._v(" "),t("li",[v._v("冒泡阶段：之后再回溯到文档的根节点。")])]),v._v(" "),t("h3",{attrs:{id:"事件捕获"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件捕获"}},[v._v("#")]),v._v(" 事件捕获")]),v._v(" "),t("p",[v._v("当鼠标点击或者触发 dom 事件时，浏览器会从根节点开始由外到内进行事件传播，即点击了子元素，如果父元素通过事件捕获方式注册了对应的事件的话，会先触发父元素绑定的事件。")]),v._v(" "),t("p",[v._v("在事件捕获的概念下在"),t("code",[v._v("p")]),v._v("元素上发生"),t("code",[v._v("click")]),v._v("事件的顺序应该是"),t("code",[v._v("document -> html -> body -> div -> p")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"事件冒泡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡"}},[v._v("#")]),v._v(" 事件冒泡")]),v._v(" "),t("p",[v._v("与事件捕获恰恰相反，事件冒泡顺序是由内到外进行事件传播，直到根节点。")]),v._v(" "),t("p",[v._v("在事件冒泡的概念下在"),t("code",[v._v("p")]),v._v("元素上发生"),t("code",[v._v("click")]),v._v("事件的顺序应该是"),t("code",[v._v("p -> div -> body -> html -> document")]),v._v("。")]),v._v(" "),t("p",[t("strong",[t("code",[v._v("DOM")]),v._v("标准事件流的触发的先后顺序为：先捕获再冒泡，即当触发 dom 事件时，会先进行事件捕获，捕获到事件源之后通过事件传播进行事件冒泡。")])]),v._v(" "),t("p",[v._v("不同的浏览器对此有着不同的实现，IE10 及以下不支持捕获型事件，所以就少了一个事件捕获阶段，IE11、Chrome 、Firefox、Safari 等浏览器则同时存在。")]),v._v(" "),t("p",[v._v("曾经踩过 IE9 中"),t("code",[v._v("button")]),v._v("的坑，例如"),t("code",[v._v("<button><span></span></button>")]),v._v("，如果我们分别在"),t("code",[v._v("button")]),v._v("以及"),t("code",[v._v("span")]),v._v("里均绑定"),t("code",[v._v("click")]),v._v("事件，则"),t("code",[v._v("span")]),v._v("的事件不会被触发。不知道这个跟事件机制是否相关呢？")]),v._v(" "),t("p",[t("strong",[v._v("addEventListener")]),v._v(" "),t("code",[v._v("addEventListener")]),v._v("的第三个参数就是为冒泡和捕获准备的.\n"),t("code",[v._v("addEventListener")]),v._v("有三个参数：")]),v._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[v._v("element"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" useCapture"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])])]),t("ul",[t("li",[t("code",[v._v("event")]),v._v("：需要绑定的事件")]),v._v(" "),t("li",[t("code",[v._v("function")]),v._v("：触发事件后要执行的函数")]),v._v(" "),t("li",[t("code",[v._v("useCapture")]),v._v("：默认值是 false，表示在事件冒泡阶段调用事件处理函数。如果参数为 true，则表示在事件捕获阶段调用处理函数。")])]),v._v(" "),t("h3",{attrs:{id:"事件委托"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[v._v("#")]),v._v(" 事件委托")]),v._v(" "),t("p",[v._v("基于事件冒泡机制，我们可以实现将子元素的事件委托给父级元素来进行处理。"),t("br"),v._v("\n当我们需要对很多元素添加事件的时候，可以通过将事件添加到它们的父节点而将事件委托给父节点来触发处理函数。")]),v._v(" "),t("p",[v._v("这样能解决什么问题呢？")]),v._v(" "),t("ol",[t("li",[v._v("绑定子元素会绑定很多次的绑定，而绑定父元素只需要一次绑定。")]),v._v(" "),t("li",[v._v("将事件委托给父节点，这样我们对子元素的增加和删除、移动等，都不需要重新进行事件绑定。")])]),v._v(" "),t("p",[v._v("很常见的就是我们有个列表，每个选项都可以进行编辑、删除、添加标签等功能，而把事件委托给父元素或者"),t("code",[v._v("document")]),v._v("，不管我们新增、删除、更新选项，都不需手动去绑定和移除事件。")]),v._v(" "),t("p",[v._v("最常在"),t("code",[v._v("jQuery")]),v._v("中使用事件委托：")]),v._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[v._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v('"#my-list"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("delegate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v('"button"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[v._v('"click"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v('// "$(this)"是被click的元素')]),v._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v('"you clicked a button"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),t("p",[v._v("现在我们基本上都使用框架了，我们可以随意地在元素上绑定事件，如 Vue 中"),t("code",[v._v('<div @click="myClickEvent" />')]),v._v("，因为框架会帮我们用事件委托的方式处理掉，大部分都会绑定在最外层初始化的"),t("code",[v._v("id")]),v._v("元素，或者是"),t("code",[v._v("document")]),v._v("吧。")]),v._v(" "),t("h2",{attrs:{id:"虚拟-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom"}},[v._v("#")]),v._v(" 虚拟 DOM")]),v._v(" "),t("p",[v._v("一个"),t("code",[v._v("DOM")]),v._v("节点元素，其实是很复杂的，包含了很多的属性和方法。")]),v._v(" "),t("p",[v._v("我们来简单打印一下一个"),t("code",[v._v("DOM")]),v._v("元素：\n"),t("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1512633321%281%29.png",alt:"image"}})]),v._v(" "),t("p",[v._v("看到右边的滚动条了没，有如此之多的属性。")]),v._v(" "),t("p",[v._v("所以随着应用程序越来越复杂，"),t("code",[v._v("DOM")]),v._v("操作越来越频繁，需要监听事件和在事件回调用更新页面的 DOM 操作也越来越多，性能消耗则会比较大。于是乎，虚拟"),t("code",[v._v("DOM")]),v._v("的想法便被人提出并实现了。")]),v._v(" "),t("p",[v._v("虚拟"),t("code",[v._v("DOM")]),v._v("其实是用来模拟真实"),t("code",[v._v("DOM")]),v._v("的中间产物，主要包括以下功能：")]),v._v(" "),t("p",[t("strong",[v._v("1. 用"),t("code",[v._v("JS")]),v._v("对象模拟"),t("code",[v._v("DOM")]),v._v("树，简化"),t("code",[v._v("DOM")]),v._v("对象。")])]),v._v(" "),t("p",[v._v("简单来说，就是用一个对象模拟，保留主要的一些"),t("code",[v._v("DOM")]),v._v("属性，其他的则去掉。")]),v._v(" "),t("p",[t("strong",[v._v("2. 使用虚拟"),t("code",[v._v("DOM")]),v._v("，结合操作"),t("code",[v._v("DOM")]),v._v("的接口，来生成真实"),t("code",[v._v("DOM")]),v._v("。")])]),v._v(" "),t("p",[v._v("使用假"),t("code",[v._v("DOM")]),v._v("生成真"),t("code",[v._v("DOM")]),v._v("，同时保持真实"),t("code",[v._v("DOM")]),v._v("对象的引用，以便 3 步骤的执行。")]),v._v(" "),t("p",[t("strong",[v._v("3. 更新"),t("code",[v._v("DOM")]),v._v("时，比较两棵虚拟"),t("code",[v._v("DOM")]),v._v("树的差异，局部更新真实"),t("code",[v._v("DOM")]),v._v("。")])]),v._v(" "),t("p",[v._v("这个就比较有意思，可以根据数据的变化，来最小化地移动、替换、删除原有的"),t("code",[v._v("DOM")]),v._v("元素。")]),v._v(" "),t("p",[v._v("结合使用以上功能，便能在复杂应用中更好地维护了。而我们现在很多的前端框架，例如 Angular、React、Vue 等，都为了给开发者提供便捷的数据绑定机制、高效的 DOM 更新机制而做了不少的工作，更多的可以参考"),t("RouterLink",{attrs:{to:"/vue/vue-for-everyone/vue-for-everyone-1.html"}},[v._v("《如何理解前端和 Vue》")]),v._v("一文。")],1),v._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.jb51.net/article/55851.htm",target:"_blank",rel:"noopener noreferrer"}},[v._v("《javascript 学习笔记（三）BOM 和 DOM 详解》"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction",target:"_blank",rel:"noopener noreferrer"}},[v._v("DOM | MDN"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://coolshell.cn/articles/9666.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《浏览器的渲染原理简介》"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"http://www.cnblogs.com/bfgis/p/5460191.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《JavaScript 详说事件机制之冒泡、捕获、传播、委托》"),t("OutboundLink")],1)])]),v._v(" "),t("h1",{attrs:{id:"bom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[v._v("#")]),v._v(" BOM")]),v._v(" "),t("h2",{attrs:{id:"什么是-bom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bom"}},[v._v("#")]),v._v(" 什么是 BOM")]),v._v(" "),t("p",[t("code",[v._v("BOM")]),v._v("是"),t("code",[v._v("Browser Object Model")]),v._v("，浏览器对象模型。主要处理浏览器窗口和框架，不过通常浏览器特定的"),t("code",[v._v("JavaScript")]),v._v("扩展都被看做"),t("code",[v._v("BOM")]),v._v("的一部分。"),t("br"),v._v(" "),t("code",[v._v("BOM")]),v._v("是各个浏览器厂商根据"),t("code",[v._v("DOM")]),v._v("在各自浏览器上的实现，表现为不同浏览器定义有差别，实现方式不同。")]),v._v(" "),t("p",[t("code",[v._v("javacsript")]),v._v("是通过访问"),t("code",[v._v("BOM")]),v._v("对象来访问、控制、修改客户端(浏览器)。")]),v._v(" "),t("h2",{attrs:{id:"bom-与-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bom-与-dom"}},[v._v("#")]),v._v(" BOM 与 DOM")]),v._v(" "),t("p",[t("code",[v._v("DOM")]),v._v("（"),t("code",[v._v("Document Object Model")]),v._v("文档对象模型）是为了操作文档出现的"),t("code",[v._v("API")]),v._v("，包括"),t("code",[v._v("document")]),v._v("。"),t("br"),v._v(" "),t("code",[v._v("BOM")]),v._v("（"),t("code",[v._v("Browser Object Model")]),v._v("浏览器对象模型）是为了操作浏览器出现的"),t("code",[v._v("API")]),v._v("，包括"),t("code",[v._v("window")]),v._v("/"),t("code",[v._v("location")]),v._v("/"),t("code",[v._v("history")]),v._v("等。")]),v._v(" "),t("p",[v._v("由于"),t("code",[v._v("BOM")]),v._v("的"),t("code",[v._v("window")]),v._v("包含了"),t("code",[v._v("document")]),v._v("，换个角度讲，"),t("code",[v._v("BOM")]),v._v("包含了"),t("code",[v._v("DOM")]),v._v("(对象)，浏览器提供出来给予访问的是"),t("code",[v._v("BOM")]),v._v("对象，从"),t("code",[v._v("BOM")]),v._v("对象再访问到"),t("code",[v._v("DOM")]),v._v("对象，从而"),t("code",[v._v("js")]),v._v("可以操作浏览器以及浏览器读取到的文档。")]),v._v(" "),t("p",[v._v("以上都是一些默认或是传说，但其实浏览器对象模型"),t("code",[v._v("BOM")]),v._v("尚无正式标准。")]),v._v(" "),t("h2",{attrs:{id:"window-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-对象"}},[v._v("#")]),v._v(" window 对象")]),v._v(" "),t("p",[v._v("所有浏览器都支持"),t("code",[v._v("window")]),v._v("对象。它表示浏览器窗口。"),t("br"),v._v("\n所有"),t("code",[v._v("JavaScript")]),v._v("全局对象、函数以及变量均自动成为"),t("code",[v._v("window")]),v._v("对象的成员。"),t("br"),v._v("\n全局变量是"),t("code",[v._v("window")]),v._v("对象的属性，全局函数是"),t("code",[v._v("window")]),v._v("对象的方法。")]),v._v(" "),t("p",[t("code",[v._v("window")]),v._v("对象包括：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("window.screen")]),v._v("对象：包含有关用户屏幕的信息")]),v._v(" "),t("li",[t("code",[v._v("window.location")]),v._v("对象：用于获得当前页面的地址(URL)，并把浏览器重定向到新的页面")]),v._v(" "),t("li",[t("code",[v._v("window.history")]),v._v("对象：浏览历史的前进后退等")]),v._v(" "),t("li",[t("code",[v._v("window.navigator")]),v._v("对象：常常用来获取浏览器信息、是否移动端访问等等")]),v._v(" "),t("li",[t("code",[v._v("JavaScript")]),v._v("消息框："),t("code",[v._v("alert()")]),v._v("等")]),v._v(" "),t("li",[t("code",[v._v("JavaScript")]),v._v("计时："),t("code",[v._v("setTimeout()")]),v._v("等")])]),v._v(" "),t("h2",{attrs:{id:"参考-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考-2"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),t("p",[t("a",{attrs:{href:"http://www.jb51.net/article/55851.htm",target:"_blank",rel:"noopener noreferrer"}},[v._v("《javascript 学习笔记（三）BOM 和 DOM 详解》"),t("OutboundLink")],1)]),v._v(" "),t("h1",{attrs:{id:"结束语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[v._v("#")]),v._v(" 结束语")]),v._v(" "),t("p",[v._v("DOM 和 BOM，会在我们日常实战中会经常用到，但是很多时候我们都只觉得自己在使用 Javascript。"),t("br"),v._v("\n当我们开始写 node.js 的时候，才会发现其中很多的不一致吧~")])])}),[],!1,null,null,null);_.default=a.exports}}]);