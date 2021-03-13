(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{611:function(t,a,v){"use strict";v.r(a);var _=v(69),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("很多时候，我们喜欢划分所谓技术需求和业务需求。但其实，技术来自于业务，业务需要技术支撑，两者是分不开的。我们可以尝试在业务里，一样地写出花来。")]),t._v(" "),v("h1",{attrs:{id:"页面区块化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面区块化"}},[t._v("#")]),t._v(" 页面区块化")]),t._v(" "),v("p",[t._v("其实页面区块化只是一种瞎说的术语，个人想说的是，将一个页面清晰地按照功能、业务、emmmmmmm。。。可能就是按照功能划分吧。这其实不完全属于前端的范畴，是贯穿业务、产品、设计、前端、甚至后台、终端的一整个团队的设计吧。")]),t._v(" "),v("h2",{attrs:{id:"什么是区块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是区块"}},[t._v("#")]),t._v(" 什么是区块")]),t._v(" "),v("p",[t._v("我们来看看常用的应用吧，首先是知乎：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524064559%281%29.jpg",alt:"image"}})]),t._v(" "),v("p",[t._v("简单划分下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524064840%281%29.jpg",alt:"image"}})]),t._v(" "),v("p",[t._v("大致我们可以分为三大块：")]),t._v(" "),v("ul",[v("li",[t._v("头部：快速导航栏")]),t._v(" "),v("li",[t._v("左侧：内容板块")]),t._v(" "),v("li",[t._v("右侧：推广板块")])]),t._v(" "),v("p",[t._v("其实论坛类、博客类的页面大多如此，看看微博：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524065227%281%29.jpg",alt:"image"}})]),t._v(" "),v("p",[t._v("除此之外，还有视频类、电商类等各种角色的网站，大家有空也可以去看看，思考下里面是怎么划分的。")]),t._v(" "),v("p",[t._v("或许你会觉得，想这些有什么用呢？这对我的工作有什么帮助吗？嘛，个人觉得"),v("code",[t._v("观察 -> 思考 -> 总结")]),t._v("也是有意思的事情，可以多一种角度来思考自己的工作，也能提高工作的趣味性吧。")]),t._v(" "),v("p",[t._v("如果你非要问，到底有什么用嘛~酱紫，容我细细道来吧。")]),t._v(" "),v("h1",{attrs:{id:"应用组件化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用组件化"}},[t._v("#")]),t._v(" 应用组件化")]),t._v(" "),v("p",[t._v("说到组件，这下总该不陌生吧，翻译下就是 component，这每个框架里面不都一抓一大把嘛。")]),t._v(" "),v("h2",{attrs:{id:"什么是组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是组件"}},[t._v("#")]),t._v(" 什么是组件")]),t._v(" "),v("p",[t._v("简答来说，"),v("strong",[t._v("组件可以扩展 HTML 元素，封装可重用的代码")]),t._v("。")]),t._v(" "),v("div",{staticClass:"language-html extra-class"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--长这样--\x3e")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-component")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("my-component")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),v("p",[t._v("你说，啊？？？这什么都没有啊。停停停，这只是我们最后使用的样子，逻辑嘛，都封装在里面啦。")]),t._v(" "),v("p",[t._v("一个组件，它的呈现可能会千奇百怪，因为不管怎么说，组件虽然可视为个体或是实例，但也是一种抽象。")]),t._v(" "),v("h2",{attrs:{id:"组件的划分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的划分"}},[t._v("#")]),t._v(" 组件的划分")]),t._v(" "),v("p",[t._v("目前来说，通常的组件划分可从两个角度来进行：")]),t._v(" "),v("p",[v("strong",[t._v("1. 视觉和交互上是一个完整的组件。")]),t._v("\n这里挑了个视频网站，如图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524109540%281%29.jpg",alt:"image"}})]),t._v(" "),v("p",[t._v("通常我们第一眼看上去可区分出独立的视图和功能的，则可以列为这种组件的划分。或许也可以成为区块，是为视觉和交互上完整的组件。")]),t._v(" "),v("p",[v("strong",[t._v("2. 写代码的时候，可重复的内容即可视为一个组件。")])]),t._v(" "),v("p",[t._v("还是这个网站，我们看：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524108519%281%29.jpg",alt:"image"}})]),t._v(" "),v("p",[t._v("这里，我们能看到这种卡片形式的内容，存在页面中的各个地方。")]),t._v(" "),v("p",[t._v("通常这种情况下，我们将其封装成一个简单的组件，包括图片+文字描述，当然还有一些简单的内容，可通过配置的方式来调整。")]),t._v(" "),v("p",[t._v("这样，我们就能在很多地方，都能使用这个组件。这种方式的组件划分，在理解上或许没有从业务上划分的直观，但从另一种角度看，哪种方式效率高一些也不一定呢。")]),t._v(" "),v("p",[v("strong",[t._v("Tips.")]),t._v("\n在一个团队内，最好是使用一种方式来进行划分。因为对于成员的相互配合和项目的维护来说，统一的规范是比较重要的。")]),t._v(" "),v("h2",{attrs:{id:"组件的封装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的封装"}},[t._v("#")]),t._v(" 组件的封装")]),t._v(" "),v("p",[t._v("个人认为，一个称职的组件，是以下形式的：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("组件内维护自身的数据和状态")])]),t._v(" "),v("li",[v("strong",[t._v("组件内维护自身的事件")])]),t._v(" "),v("li",[v("strong",[t._v("通过初始化事件（event、绑定的 scope 事件，传入数据），来初始化组件状态，激活组件")])]),t._v(" "),v("li",[v("strong",[t._v("对外提供配置项，来控制展示以及具体功能")])]),t._v(" "),v("li",[v("strong",[t._v("通过对外提供查询接口，可获取组件状态")])])]),t._v(" "),v("p",[t._v("笼统地概括下，就是我们尽量需要把组件进行隔离，拥有独立的个体空间，同时保持与外界适当的联系。")]),t._v(" "),v("h3",{attrs:{id:"组件内维护自身的数据和状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件内维护自身的数据和状态"}},[t._v("#")]),t._v(" 组件内维护自身的数据和状态")]),t._v(" "),v("p",[t._v("这个比较好理解，以上面的小卡片为例子：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524111302%281%29.jpg",alt:""}})]),t._v(" "),v("p",[t._v("这个小卡片，它维护着自己的数据：封面图、描述、头像、作者。还有一个初始的状态，就是目前我们看到的样子。\n这些内容保存在组件自己的 scope 里，每个卡片组件都拥有自己的数据和状态。")]),t._v(" "),v("h3",{attrs:{id:"组件内维护自身的事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件内维护自身的事件"}},[t._v("#")]),t._v(" 组件内维护自身的事件")]),t._v(" "),v("p",[t._v("我们在把鼠标放在卡片上，随着鼠标的位置，顶部会有个小小的进度条，同时封面图会改变，如图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524111149%281%29.png",alt:"image"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524111141%281%29.jpg",alt:"image"}})]),t._v(" "),v("p",[t._v("每个小卡片都有自己 mousemove 事件。当然，这里面维护了一个鼠标位置的状态，同时根据鼠标位置来控制图片的展示。")]),t._v(" "),v("h3",{attrs:{id:"通过初始化事件-来初始化组件状态-激活组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通过初始化事件-来初始化组件状态-激活组件"}},[t._v("#")]),t._v(" 通过初始化事件，来初始化组件状态，激活组件")]),t._v(" "),v("p",[t._v("组件的数据，大多数需要外界提供并传入，故可通过初始化事件来激活。")]),t._v(" "),v("h3",{attrs:{id:"对外提供配置项-来控制展示以及具体功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对外提供配置项-来控制展示以及具体功能"}},[t._v("#")]),t._v(" 对外提供配置项，来控制展示以及具体功能")]),t._v(" "),v("p",[t._v("可以通过配置的方式，来控制组件的展示和功能。")]),t._v(" "),v("p",[t._v("我们看这个小卡片：\n"),v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1524115436%281%29.jpg",alt:"image"}})]),t._v(" "),v("p",[t._v("和上面的不一样，左下角展示的是视频时长，而不是头像和名字，这种我们可以通过配置的方式来控制。")]),t._v(" "),v("h3",{attrs:{id:"通过对外提供查询接口-可获取组件状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通过对外提供查询接口-可获取组件状态"}},[t._v("#")]),t._v(" 通过对外提供查询接口，可获取组件状态")]),t._v(" "),v("p",[t._v("很多时候，组件独立维护着自身的数据和状态，但有些场景下，父组件或者应用需要知道组件当前的状态，故我们需要对外提供接口，以供查询。")]),t._v(" "),v("p",[t._v("像 Vue 中，便可以通过"),v("code",[t._v("vm.$refs")]),t._v("来获取子组件的实例。")]),t._v(" "),v("h2",{attrs:{id:"组件的通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的通信"}},[t._v("#")]),t._v(" 组件的通信")]),t._v(" "),v("p",[t._v("当我们层层封装组件后，或许就会带来组件间通信的问题。从最简单的父子组件、到同胞组件、到几乎毫无关系的组件的通信，我们可以有不同的解决方法。")]),t._v(" "),v("p",[v("strong",[t._v("1. 事件监听。")])]),t._v(" "),v("p",[t._v("简单的，我们可以直接通过事件监听来通信，全局或是局部的监听和触发。")]),t._v(" "),v("p",[t._v("但是使用频繁之后，我们会发现不好维护。为什么呢？因为你在追踪事件的触发和监听时，只能通过全局搜索对应的事件名称，这样数据流会有种到处乱窜、无法管理的感觉。")]),t._v(" "),v("p",[v("strong",[t._v("2. 对象数据。")])]),t._v(" "),v("p",[t._v("我们也可以通过共享同一个对象的方式来管理。通过注入对象的引用，来在不同组件中获取相同的数据源。")]),t._v(" "),v("p",[t._v("这样有时候还会存在问题，当我们需要获取新的数据实例时，则需要手动去维护。当然，在 Angular 里，则是通过提供通用的依赖注入方式，配合树状的模块管理，可通过局部注入实例来获取共享或是隔离的数据。")]),t._v(" "),v("p",[v("strong",[t._v("3. 状态流管理。")])]),t._v(" "),v("p",[t._v("这是通过流的方式管理状态，常见的状态管理工具 Vuex、Redux 等，都是这样的方式去管理。")]),t._v(" "),v("p",[t._v("即使是使用这样的流管理，也是通过对象数据的方式来管理。当然，加入了单向流动的方式，这样提高了维护性，因为你知道所有数据都从哪里流入、从哪里流出。")]),t._v(" "),v("h2",{attrs:{id:"组件化程度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件化程度"}},[t._v("#")]),t._v(" 组件化程度")]),t._v(" "),v("p",[v("strong",[t._v("组件的封装是会消耗维护性的，过度的封装会导致代码难维护，可读性也差。")])]),t._v(" "),v("p",[t._v("所以我们需要根据项目的大小以及复杂度，来进行什么程度的封装，当然封装除去组件的封装，还可以是数据、样式、功能的封装。")]),t._v(" "),v("p",[t._v("尽管前端的框架或是能力一直在变化，但项目的维护始终是很重要的事情。不能因为说今天这套明天就不适用了，就不打算细细去做，我们要把思考和反省，贯穿在整个写码的人生中。")]),t._v(" "),v("p",[t._v("适度也是很重要的，个人认为好的架构是变化的，跟随着项目变化而变化，保持着拓展性和维护性。如果说我们只是为了抽象而抽象，那想必会把简单的事情复杂化，整个应用和代码会变得难以理解。适度的抽象很重要，但相比错误的抽象过程，没有抽象可能会更好。")]),t._v(" "),v("h1",{attrs:{id:"结束语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),v("p",[t._v("回到文章开头，技术与业务是相关的，很多时候并不能简单地区分所谓技术需求和业务需求。同样的，业务需求也能写得很有意思，多多在里面掺杂些自己的想法吧，实践出真理~~"),v("br"),t._v("\n关于组件封装的，后面会有其他文章详细说明哒，这里介绍下目前的主要想法而已。")])])}),[],!1,null,null,null);a.default=s.exports}}]);