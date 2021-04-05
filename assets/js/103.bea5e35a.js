(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{597:function(t,a,s){"use strict";s.r(a);var e=s(69),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("作为“为大型前端项目”而设计的前端框架，Angular 其实有许多值得参考和学习的设计，本系列主要用于研究这些设计和功能的实现原理。本文主要围绕 Angular 中与视图有关的一些定义进行介绍。")]),t._v(" "),s("h1",{attrs:{id:"angular-中的视图抽象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#angular-中的视图抽象"}},[t._v("#")]),t._v(" Angular 中的视图抽象")]),t._v(" "),s("p",[t._v("Angular 版本可在不同的平台上运行：在浏览器中、在移动平台上或在 Web Worker 中。因此，需要特定级别的抽象来介于平台特定的 API 和框架接口之间。")]),t._v(" "),s("p",[t._v("Angular 中通过抽象封装了不同平台的差异，并以下列引用类型的形式出现："),s("code",[t._v("ElementRef")]),t._v("，"),s("code",[t._v("TemplateRef")]),t._v("，"),s("code",[t._v("ViewRef")]),t._v("，"),s("code",[t._v("ComponentRef")]),t._v("和"),s("code",[t._v("ViewContainerRef")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"各抽象类视图定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各抽象类视图定义"}},[t._v("#")]),t._v(" 各抽象类视图定义")]),t._v(" "),s("p",[t._v("在阅读源码的时候，如果不清楚这些定义之间的区别，很容易搞混淆。所以，这里我们先来理解下它们之间的区别。")]),t._v(" "),s("h3",{attrs:{id:"元素-elementref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素-elementref"}},[t._v("#")]),t._v(" 元素 ElementRef")]),t._v(" "),s("p",[s("code",[t._v("ElementRef")]),t._v("是最基本的抽象。如果观察它的类结构，可以看到它仅包含与其关联的本地元素：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基础原生元素")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果不支持直接访问原生元素（例如当应用程序在 Web Worker 中运行时），则为 null")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" nativeElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nativeElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nativeElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("该 API 可用于直接访问本地 DOM 元素，可以比作"),s("code",[t._v("document.getElementById('myId')")]),t._v("。但 Angular 并不鼓励直接使用，尽可能使用 Angular 提供的模板和数据绑定。")]),t._v(" "),s("h3",{attrs:{id:"模板-templateref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板-templateref"}},[t._v("#")]),t._v(" 模板 TemplateRef")]),t._v(" "),s("p",[t._v("在 Angular 中，模板用来定义要如何在 HTML 中渲染组件视图的代码。")]),t._v(" "),s("p",[t._v("模板通过"),s("code",[t._v("@Component()")]),t._v("装饰器与组件类类关联起来。模板代码可以作为"),s("code",[t._v("template")]),t._v("属性的值用内联的方式提供，也可以通过 "),s("code",[t._v("templateUrl")]),t._v("属性链接到一个独立的 HTML 文件。")]),t._v(" "),s("p",[t._v("用"),s("code",[t._v("TemplateRef")]),t._v("对象表示的其它模板用来定义一些备用视图或内嵌视图，它们可以来自多个不同的组件。"),s("code",[t._v("TemplateRef")]),t._v("是一组 DOM 元素（"),s("code",[t._v("ElementRef")]),t._v("），可在整个应用程序的视图中重复使用：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemplateRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此嵌入视图的父视图中的 anchor 元素")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("elementRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ElementRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基于此模板实例化嵌入式视图，并将其附加到视图容器")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEmbeddedView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmbeddedViewRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("就其本身而言，"),s("code",[t._v("TemplateRef")]),t._v("类是一个简单的类，仅包括：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("elementRef")]),t._v("属性：拥有对其宿主元素的引用")]),t._v(" "),s("li",[s("code",[t._v("createEmbeddedView")]),t._v("方法：它允许我们创建视图并将其引用作为"),s("code",[t._v("ViewRef")]),t._v("返回。")])]),t._v(" "),s("p",[t._v("模板会把纯 HTML 和 Angular 的数据绑定语法、指令和模板表达式组合起来。Angular 的元素会插入或计算那些值，以便在页面显示出来之前修改 HTML 元素。")]),t._v(" "),s("h2",{attrs:{id:"angular-中的视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#angular-中的视图"}},[t._v("#")]),t._v(" Angular 中的视图")]),t._v(" "),s("p",[t._v("在 Angular 中，视图是可显示元素的最小分组单位，它们会被同时创建和销毁。Angular 哲学鼓励开发人员将 UI 视为视图的组合（而不是独立的 html 标签树）。")]),t._v(" "),s("p",[t._v("组件("),s("code",[t._v("component")]),t._v(") 类及其关联的模板("),s("code",[t._v("template")]),t._v(")定义了一个视图。具体实现上，视图由一个与该组件相关的"),s("code",[t._v("ViewRef")]),t._v("实例表示。")]),t._v(" "),s("h3",{attrs:{id:"viewref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewref"}},[t._v("#")]),t._v(" ViewRef")]),t._v(" "),s("p",[s("code",[t._v("ViewRef")]),t._v("表示一个 Angular 视图：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewRef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChangeDetectorRef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 销毁该视图以及与之关联的所有数据结构")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroyed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报告此视图是否已被销毁")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生命周期挂钩，为视图提供其他开发人员定义的清理功能")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDestroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中，"),s("code",[t._v("ChangeDetectorRef")]),t._v("提供更改检测功能的基类，用于更改检测树收集所有要检查更改的视图：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChangeDetectorRef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当输入已更改或视图中触发了事件时，通常会将组件标记为脏（需要重新渲染）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用此方法以确保即使没有发生这些触发器，也要检查组件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkNoChanges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从变更检测树中分离该视图。在重新连接分离视图之前，不会对其进行检查。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 与 detectChanges() 结合使用可实现本地变更检测检查")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("detach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查此视图及其子级，与 detach() 结合使用可实现本地更改检测检查")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectChanges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查变更检测器及其子级，如果检测到任何变更，则抛出该异常")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("markForCheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将先前分离的视图重新附加到变更检测树")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认情况下，视图将附加到树上")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reattach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"两种类型的视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种类型的视图"}},[t._v("#")]),t._v(" 两种类型的视图")]),t._v(" "),s("p",[t._v("Angular 支持两种类型的视图：")]),t._v(" "),s("p",[s("strong",[t._v("(1) 链接到模板（"),s("code",[t._v("template")]),t._v("）的嵌入式视图（"),s("code",[t._v("embeddedView")]),t._v("）。")])]),t._v(" "),s("p",[t._v("嵌入式视图表示视图容器中的 Angular 视图。模板只是保存视图的蓝图，可以使用上述的"),s("code",[t._v("createEmbeddedView")]),t._v("方法从模板实例化视图。")]),t._v(" "),s("p",[s("strong",[t._v("(2) 链接到组件（"),s("code",[t._v("component")]),t._v("）的宿主视图（"),s("code",[t._v("hostView")]),t._v("）。")])]),t._v(" "),s("p",[t._v("直属于某个组件的视图叫做宿主视图。")]),t._v(" "),s("p",[t._v("宿主视图是在动态实例化组件时创建的，可以使用"),s("code",[t._v("ComponentFactoryResolver")]),t._v("动态创建实例化一个组件。在 Angular 中，每个组件都绑定到特定的注入器实例，因此在创建组件时我们将传递当前的注入器实例。")]),t._v(" "),s("p",[t._v("视图中各个元素的属性可以动态修改以响应用户的操作，而这些元素的结构（数量或顺序）则不能。你可以通过在它们的视图容器（"),s("code",[t._v("ViewContainer")]),t._v("）中插入、移动或移除内嵌视图来修改这些元素的结构。")]),t._v(" "),s("h3",{attrs:{id:"viewcontainerref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewcontainerref"}},[t._v("#")]),t._v(" ViewContainerRef")]),t._v(" "),s("p",[s("code",[t._v("ViewContainerRef")]),t._v("是可以将一个或多个视图附着到组件中的容器：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewContainerRef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 锚元素，用于指定此容器在包含视图中的位置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个视图容器只能有一个锚元素，每个锚元素只能有一个视图容器")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ElementRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此视图容器的 DI")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("injector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此容器当前附加了多少视图")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 销毁此容器中的所有视图")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化单个组件，并将其宿主视图插入此容器")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createComponent")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("componentFactory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComponentFactory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" injector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" projectableNodes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ngModule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NgModuleRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComponentRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化一个嵌入式视图并将其插入")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEmbeddedView")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("templateRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TemplateRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmbeddedViewRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从此容器分离视图而不销毁它")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("detach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从此容器检索视图")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回当前容器内视图的索引")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将视图移动到此容器中的新位置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 销毁附加到此容器的视图")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("任何 DOM 元素都可以用作视图容器，Angular 不会在元素内插入视图，而是将它们附加到绑定到"),s("code",[t._v("ViewContainer")]),t._v("的元素之后。")]),t._v(" "),s("blockquote",[s("p",[t._v("通常，标记"),s("code",[t._v("ng-container")]),t._v("元素是标记应创建"),s("code",[t._v("ViewContainer")]),t._v("的位置的最佳选择。它作为注释呈现，因此不会在 DOM 中引入多余的 HTML 元素。")])]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("ViewContainerRef")]),t._v("，可以用"),s("code",[t._v("createComponent()")]),t._v("方法实例化组件时创建宿主视图，也可以用 "),s("code",[t._v("createEmbeddedView()")]),t._v("方法实例化"),s("code",[t._v("TemplateRef")]),t._v("时创建内嵌视图。")]),t._v(" "),s("p",[t._v("视图容器的实例还可以包含其它视图容器，以创建层次化视图（视图树）。")]),t._v(" "),s("h3",{attrs:{id:"视图树-view-hierarchy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图树-view-hierarchy"}},[t._v("#")]),t._v(" 视图树（View hierarchy）")]),t._v(" "),s("p",[t._v("在 Angular 中，通常会把视图组织成一些视图树（view hierarchies）。视图树是一棵相关视图的树，它们可以作为一个整体行动，是 Angular 变更检测的关键部件之一。")]),t._v(" "),s("p",[t._v("视图树的根视图就是组件的宿主视图。宿主视图可以是内嵌视图树的根，它被收集到了宿主组件上的一个视图容器（"),s("code",[t._v("ViewContainerRef")]),t._v("）中。当用户在应用中导航时（比如使用路由器），视图树可以动态加载或卸载。")]),t._v(" "),s("p",[t._v("视图树和组件树并不是一一对应的：")]),t._v(" "),s("ul",[s("li",[t._v("嵌入到指定视图树上下文中的视图，也可能是其它组件的宿主视图")]),t._v(" "),s("li",[t._v("组件可能和宿主组件位于同一个"),s("code",[t._v("NgModule")]),t._v("中，也可能属于其它"),s("code",[t._v("NgModule")])])]),t._v(" "),s("h3",{attrs:{id:"组件、模板、视图与模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件、模板、视图与模块"}},[t._v("#")]),t._v(" 组件、模板、视图与模块")]),t._v(" "),s("p",[t._v("在 Angular 中，可以通过组件的配套模板来定义其视图。模板就是一种 HTML，它会告诉 Angular 如何渲染该组件。")]),t._v(" "),s("p",[t._v("视图通常会分层次进行组织，让你能以 UI 分区或页面为单位进行修改、显示或隐藏。与组件直接关联的模板会定义该组件的宿主视图。该组件还可以定义一个带层次结构的视图，它包含一些内嵌的视图作为其它组件的宿主。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/component-tree.png",alt:""}})]),t._v(" "),s("p",[t._v("带层次结构的视图可以包含同一模块（"),s("code",[t._v("NgModule")]),t._v("）中组件的视图，也可以（而且经常会）包含其它模块中定义的组件的视图。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("本文简单介绍了 Angular 中元素、视图、模板、组件中与视图相关的一些定义，包括"),s("code",[t._v("ElementRef")]),t._v("，"),s("code",[t._v("TemplateRef")]),t._v("，"),s("code",[t._v("ViewRef")]),t._v("，"),s("code",[t._v("ComponentRef")]),t._v("和"),s("code",[t._v("ViewContainerRef")]),t._v("。")]),t._v(" "),s("p",[t._v("其中，视图是 Angular 中应用程序 UI 的基本构建块，它是一起创建和销毁的最小元素组。")]),t._v(" "),s("p",[s("code",[t._v("ViewContainerRef")]),t._v("主要用于创建和管理内嵌视图或组件视图。组件可以通过配置模板来定义视图，与组件直接关联的模板会定义该组件的宿主视图，同时组件还可以包括内嵌视图。")]),t._v(" "),s("h3",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://angular.cn/guide/architecture-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular-组件简介"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://angular.cn/guide/glossary",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular 词汇表"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://hackernoon.com/exploring-angular-dom-abstractions-80b3ebcfc02",target:"_blank",rel:"noopener noreferrer"}},[t._v("Exploring Angular DOM manipulation techniques using ViewContainerRef"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);