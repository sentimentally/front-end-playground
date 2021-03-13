(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{585:function(a,t,e){"use strict";e.r(t);var r=e(69),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("与其说是构建大型应用，或许更多地是常用的应用构建吧。很多时候我们的项目在搭建的时候通常都不会定位为大型项目，但我们还是需要考虑到拓展性，或者说是在当项目开始变得较难维护的时候，要进行调整的一些方面。")]),a._v(" "),e("h1",{attrs:{id:"项目设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目设计"}},[a._v("#")]),a._v(" 项目设计")]),a._v(" "),e("p",[a._v("在项目开始之前，我们需要做一系列的规划，像项目的定位（to B/C）、大小，像框架和工具的选型，还有很重要的一点是，项目和团队规范。")]),a._v(" "),e("h2",{attrs:{id:"框架选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架选择"}},[a._v("#")]),a._v(" 框架选择")]),a._v(" "),e("p",[a._v("通常来说，框架选择是准备项目的第一步。")]),a._v(" "),e("p",[a._v("说到框架，目前主流三大框架 Angular、React 和 Vue，先从个人理解来看看这三个框架。")]),a._v(" "),e("h3",{attrs:{id:"angular"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#angular"}},[a._v("#")]),a._v(" Angular")]),a._v(" "),e("p",[a._v("这里的 Angular 是指 Angular 2.0+ 版本，v1.0 我们通常称之为 AngularJS，目前已经不更新了，建议大家还是使用 Angular。")]),a._v(" "),e("p",[a._v("Angular 相对 React 和 Vue，最初的设计是针对大型应用来进行的。要是你认识 JAVA 的话，像依赖注入这一套你会觉得很熟悉。当然到了 v2.0 以上的版本由于加入了很多的语法糖，看起来 AngularJS 和 Angular 相差很远，但是最核心的依赖注入模式还是相似的。")]),a._v(" "),e("p",[a._v("关于 Angular 各个版本的对比，大家可以参考下"),e("a",{attrs:{href:"https://godbasin.github.io/2017/07/01/about-angular-from-1-to-4/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《谈谈 Angular--从 Angular1 到 Angular4》"),e("OutboundLink")],1),a._v(" 以及"),e("a",{attrs:{href:"https://github.com/godbasin/godbasin.github.io/issues/1",target:"_blank",rel:"noopener noreferrer"}},[a._v("《重新认识 Angular》"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("p",[a._v("项目中使用 Angular，最大的体验感受则是项目有完备的结构和规范，新加入的成员能很快地通过复制粘贴完成功能的开发。身边有人说过，好的架构设计，能让高级程序员和初入门的程序员写出相似的代码，这样对于整体管理和项目的维护有非常好的体验。")]),a._v(" "),e("p",[a._v("至于 Vue 和 React，它们更多是小巧的模板框架，也可以通过灵活搭配路由、状态管理等工具，达到大型应用的管理。目前来说，社区也有比较好的解决方案，官方也有出相关的脚手架来快速构建应用。")]),a._v(" "),e("p",[a._v("很多人说 Angular 难上手，其实主要在于开始的项目搭建、以及 Angular 独有的一套设计方案的理解。但是依赖注入的设计方式，我们几乎不用考虑很多数据和状态管理的问题。当然脏检查的方式曾经也带来性能问题，后面在加入树状的模块化、Zone.js 之后，即使没有虚拟 DOM，性能也是有大大的提升。")]),a._v(" "),e("h3",{attrs:{id:"react"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[a._v("#")]),a._v(" React")]),a._v(" "),e("p",[a._v("本人接触的 React 项目不是很多，但是 jsx、虚拟 DOM、函数式编程的设计，带来的震撼和冲击还是很大的。")]),a._v(" "),e("p",[a._v("React 相对 Angular 最大的优势是轻量，或许其实这么比较不大对，因为 React/Vue 和 Angular 不一样，Angular 是整套的解决方案，而 React/Vue 则是项目搭建中灵魂使用的前端模板工具。")]),a._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Angular = React + react-router + Redux/Flux/Mobx = Vue + vue-router + Vuex/Redux\n")])])]),e("p",[a._v("虚拟 DOM 主要解决了什么，它的原理又是怎样的，这些会涉及到浏览器的页面渲染原理，包括 DOM Tree、CSS Ruler Tree、Rendering Tree、Repaint、Reflow 等等，你需要去理解虚拟 DOM 为何能带来性能的提升。")]),a._v(" "),e("p",[a._v("类似这样的，你会在使用 React 的时候，接触到很多好的设计，去引领你进行更深入的思考。函数式编程的方式，也会不同程度地拓展你的思考方式，遇到问题的时候，能有更多的解决办法。")]),a._v(" "),e("p",[a._v("至于社区建设，其实三大主流开源框架的社区都相当完善了。")]),a._v(" "),e("h3",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[a._v("#")]),a._v(" Vue")]),a._v(" "),e("p",[a._v("如果你熟悉 Angular 以及 React，你会发现 Vue 的使用，其实很多地方像是两个的结合体。")]),a._v(" "),e("p",[a._v("Vue 最大的特点是上手简单，不管是框架的设计和文档，都对新手极其友好。但是这并不代表它只是个简单的框架，当你需要实现一些更加深入的自定义功能时，你会发现它其实也有很好的功能支持。如果你还认为它只是把 Angular 和 React 的优势结合，在你深入使用甚至阅读源码的时候，你会慢慢发现里面的一些自己的思考，真的是个很棒的框架。")]),a._v(" "),e("p",[a._v("如果说你是个新手，那么 Vue 会是较好的选择。相比另外两个框架，Vue 最初的社区缺陷现在也早已不再是问题了，相关的脚手架、配套工具也都很完善。")]),a._v(" "),e("h3",{attrs:{id:"开源框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开源框架"}},[a._v("#")]),a._v(" 开源框架？")]),a._v(" "),e("p",[a._v("使用开源框架的好处是，有着完整详细的文档，同时有问题也能通过 issues 和 "),e("a",{attrs:{href:"https://stackoverflow.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("Stack Overflow"),e("OutboundLink")],1),a._v(" 来查找。")]),a._v(" "),e("p",[a._v("更多时候，我们选择一个框架，需要考虑项目大小、定位。**技术选型更多的在于团队，你要考虑这个团队的能力、大家对各个框架的熟悉程度、是否有强烈的倾向。**或者有能力的团队，也可以选择相对小众的框架。")]),a._v(" "),e("p",[a._v("当然也有些小伙伴喜欢自己造轮子，不过你们要记得，造轮子是要负责任的，你需要提供友好的文档和 API 给他人，不然对项目的维护来说，简直就是毁灭性的体验。")]),a._v(" "),e("p",[a._v("还有在生产环境，尽量使用 release 版本吧。那段将 Angular2-beta 升级到 Angular4-rc 版本的日子，真的不堪回想。")]),a._v(" "),e("p",[a._v("有些人喜欢捣鼓新东西，个人的体验是，我们尽量在对这些新技术有较好地把握之后，再尝试一点点加入我们的项目里。项目尤其是工程项目，大多数是解决某些问题，我们需要在满足业务和项目维护性的同时，来做一些新的尝试。")]),a._v(" "),e("h2",{attrs:{id:"项目代码结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目代码结构"}},[a._v("#")]),a._v(" 项目代码结构")]),a._v(" "),e("p",[a._v("个人认为，好的项目代码结构会大大提升项目的维护性。同时我们可以提供友好的说明，以便其他成员理解项目和快速定位。")]),a._v(" "),e("p",[a._v("这里贴出个人比较偏好的结构：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Angular")]),a._v("\n│\n├── src/                              "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 项目代码存放位置")]),a._v("\n│   │\n│   ├── app/                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# app相关代码")]),a._v("\n│   │   ├── modules/                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 业务模块")]),a._v("\n│   │   ├── shared/                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 公用组件/服务等")]),a._v("\n│   │   └── container/                "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Angular应用入口文件（路由、启动模块等）")]),a._v("\n│   │\n│   ├── assets                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 相关资源")]),a._v("\n│   ├── environments/                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 环境相关配置")]),a._v("\n│   │\n│   ├── index.html                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 主页面")]),a._v("\n│   └── main.ts                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# angular启动文件")]),a._v("\n│\n├── dist/                             "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 存放编译打包生成文件")]),a._v("\n├── e2e/                              "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# e2e测试相关文件")]),a._v("\n├── .gitignore                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Git上传相关配置")]),a._v("\n├── package.json                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# npm相关配置")]),a._v("\n├── README.md                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 说明文档")]),a._v("\n└── xxx.json/xxx.js/.xxxx             "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 其他配置文档")]),a._v("\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Vue")]),a._v("\n│\n├── src/                              "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 项目代码存放位置")]),a._v("\n│   │\n│   ├── app/                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# app相关代码")]),a._v("\n│   │\n│   ├── components/                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 公用组件")]),a._v("\n│   ├── router/                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 路由配置")]),a._v("\n│   ├── store/                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# store")]),a._v("\n│   │\n│   ├── index.html                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 主页面")]),a._v("\n│   ├── main.js                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动文件")]),a._v("\n│   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n│   └── "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 其他文件")]),a._v("\n│\n├── dist/                             "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 存放编译打包生成文件")]),a._v("\n├── config/build/                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 项目构建相关配置")]),a._v("\n├── .gitignore                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Git上传相关配置")]),a._v("\n├── package.json                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# npm相关配置")]),a._v("\n├── README.md                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 说明文档")]),a._v("\n└── xxx.json/xxx.js/.xxxx             "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 其他配置文档")]),a._v("\n")])])]),e("p",[a._v("其实有一点比较重要，就是公共组件、工具等同类的文件，放置一起维护会比较好。而且还有个小 tips，我们可以在搭建项目的时候，在 README.md 里面描述下该项目下的代码和文件结构。")]),a._v(" "),e("h2",{attrs:{id:"代码流程规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码流程规范"}},[a._v("#")]),a._v(" 代码流程规范")]),a._v(" "),e("p",[a._v("代码规范其实是团队合作中最重要的地方，使用相同的代码规范，会大大减少我们接手别人代码时候卧槽的次数。")]),a._v(" "),e("p",[a._v("好的写码习惯很重要，命名习惯、适当的注释，会对代码的可读性有很大的提升。但是习惯是每个人都不一样，所以在此之上，我们需要有这样统一的代码规范。")]),a._v(" "),e("p",[a._v("一些工具可以很好地协助我们，像 Eslint、Tslint 等，加上代码的打包工具协助，可以把一些规范强行标准化，来获取代码的统一性。还有像 prettier 这样的工具，能自动在打包的时候帮我们进行代码规范化。")]),a._v(" "),e("p",[a._v("除了这些简单的什么驼峰啊、全等啊、单引双引等基础的规范，其实更重要的是"),e("strong",[a._v("流程规范")]),a._v("。最基础的是改动公共库或是公共组件的时候，需要进行 code review。通常我们使用 Git 维护代码，这样在合并或是版本控制上有更好的体验。")]),a._v(" "),e("p",[a._v("但其实最重要的还是沟通，沟通是一个团队里必不可少同时很容易出问题的地方，要学会沟通方式、表达方式。")]),a._v(" "),e("h1",{attrs:{id:"大型应用优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大型应用优化"}},[a._v("#")]),a._v(" 大型应用优化")]),a._v(" "),e("p",[a._v("说到大型应用，其实像页面加载性能、构建打包等地方，我们都可以适当进行优化。")]),a._v(" "),e("h2",{attrs:{id:"路由管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由管理"}},[a._v("#")]),a._v(" 路由管理")]),a._v(" "),e("p",[a._v("路由管理其实主要是当我们的项目变大方便管理，同时为了项目体验问题而引入的解决方案。毕竟我们产品设计都比较成熟，对用户来说刷新页面会丢掉页面状态，这样的体验是在是太糟糕了。")]),a._v(" "),e("p",[a._v("我们在规划项目路由的时候，会推动我们对项目业务、功能区块化有更加深入的认识和理解。同时对我们的项目结构规划也有很大的帮助，我们可以根据路由来放置我们的代码文件，有了这样的约定，我们在维护他人代码的时候，便能迅速地定位到对应的位置。")]),a._v(" "),e("p",[a._v("路由管理现在很多框架都有配套的工具库，已经有很多完善的解决方案了，这里不多说。")]),a._v(" "),e("h2",{attrs:{id:"抽象和组件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽象和组件化"}},[a._v("#")]),a._v(" 抽象和组件化")]),a._v(" "),e("p",[a._v("在我们开始写重复的代码、或是进行较多的复制粘贴的时候，大概我们需要考虑对组件进行适当的抽象了。")]),a._v(" "),e("p",[a._v("好的抽象能大量减少重复代码，同时对项目整体有更深入的理解。坏的抽象会增加项目的复杂度，同时降低了代码的可读性和维护性。所以关键在于适度，好的办法是结合产品和业务来进行抽象，例如一个播放器组件、日历组件、快速导航栏、快捷菜单等组件封装，便于多次使用。")]),a._v(" "),e("p",[a._v("而组件的抽象相关，可以参加"),e("RouterLink",{attrs:{to:"/front-end-basic/understanding/component-with-itself.html"}},[a._v("《一个组件的自我修养》")]),a._v("。")],1),a._v(" "),e("p",[a._v("同时，我们也需要把一些相同的方法抽离，封装成通用的工具库，像常用的时间转换、字符串处理、http 请求等，都可以单独拎出来维护。")]),a._v(" "),e("h2",{attrs:{id:"状态和数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态和数据管理"}},[a._v("#")]),a._v(" 状态和数据管理")]),a._v(" "),e("p",[a._v("我们的应用里，多数会面临组件的某些状态和数据相互影响、相互依赖的问题。")]),a._v(" "),e("p",[a._v("现在也有比较成熟的解决方案和状态管理工具，像 Vuex、Redux、Mobx 等，我们需要结合自身的框架和业务场景来使用。像父子组件的交互、应用内无直接管理的数据状态共享、事件的传递等，也都需要结合实际适当地使用。")]),a._v(" "),e("h2",{attrs:{id:"代码打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码打包"}},[a._v("#")]),a._v(" 代码打包")]),a._v(" "),e("p",[a._v("当我们的应用变得很大，为了提升首屏加载的体验，我们需要对代码进行分块打包。")]),a._v(" "),e("p",[a._v("一般来说，不同的框架有不同的异步加载解决方案，同时可以结合打包工具（Webpack 等）进行分块打包。我们可以把首屏相关的东西打包到 bundle，其他模块分块打包到 chunk，来在需要的时候再进行加载。")]),a._v(" "),e("h3",{attrs:{id:"路由异步加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由异步加载"}},[a._v("#")]),a._v(" 路由异步加载")]),a._v(" "),e("p",[a._v("通常情况下，我们会结合路由进行分块打包，路由管理工具大部分都支持异步加载。")]),a._v(" "),e("p",[a._v("我们可以根据自己需要，来打包成多个文件，在路由进入的时候才获取和加载。Vue 的话可参考"),e("a",{attrs:{href:"https://godbasin.github.io/2018/01/28/vue2-notes-17-lazyload-chunk/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Vue2 使用笔记 17--路由懒加载》"),e("OutboundLink")],1),a._v("，打包效果像这样：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1515581250%281%29.png",alt:"image"}})]),a._v(" "),e("h3",{attrs:{id:"webpack-分块打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-分块打包"}},[a._v("#")]),a._v(" Webpack 分块打包")]),a._v(" "),e("p",[a._v("使用 Webpack 的话，可以用：")]),a._v(" "),e("ul",[e("li",[a._v("CommonsChunkPlugin：提取代码中的公共模块，然后将公共模块打包到一个独立的文件中，以便在其他的入口和模块中使用")]),a._v(" "),e("li",[a._v("ExtractTextPlugin：可以将样式或其他从 js 中抽出，生成单独的"),e("code",[a._v(".css")]),a._v("样式文件")]),a._v(" "),e("li",[e("code",[a._v("require.ensure()")]),a._v(" "),e("ul",[e("li",[a._v("webpack 在编译时，会静态地解析代码中的"),e("code",[a._v("require.ensure()")]),a._v("，同时将模块添加到一个分开的 chunk 当中")]),a._v(" "),e("li",[a._v("这个新的 chunk 会被 webpack 通过 jsonp 来按需加载")])])])]),a._v(" "),e("h3",{attrs:{id:"source-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source-map"}},[a._v("#")]),a._v(" Source map")]),a._v(" "),e("p",[a._v("这里需要讲一下，Source map 就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这无疑给开发者带来了很大方便。")]),a._v(" "),e("p",[a._v("关于 Source map，可参考阮大神的"),e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《JavaScript Source Map 详解》"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("p",[a._v("在开发环境下，还能通过 Chrome 匹配源文件进行在线 debug 和修复源码。大家也可以自行搜索下，尤其我们需要在浏览器上直接调试 CSS 并生效的时候，体验真的很棒。")]),a._v(" "),e("h3",{attrs:{id:"tree-shaking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[a._v("#")]),a._v(" Tree-shaking")]),a._v(" "),e("p",[a._v("不知道大家熟悉 Tree-shaking 不，我们在引入一些开源代码或是公共库的时候，其实大部分时间我们都只是使用其中里面的一小部分代码。")]),a._v(" "),e("p",[a._v("Tree-shaking 通常指按需加载，即没有被引用的模块不会被打包进来，减少我们的包大小，缩小应用的加载时间，呈现给用户更佳的体验。")]),a._v(" "),e("p",[a._v("最初是 "),e("a",{attrs:{href:"http://www.rollupjs.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rollup"),e("OutboundLink")],1),a._v(" 提出并实现。Rollup 静态分析代码中的 import，并将排除任何未实际使用的代码。这允许我们架构于现有工具和模块之上，而不会增加额外的依赖或使项目的大小膨胀。")]),a._v(" "),e("p",[a._v("同时在 Webpack 2 里也加入了 Tree-shaking 新特性。至于目前的一些情况，也可以参考下"),e("a",{attrs:{href:"https://segmentfault.com/a/1190000012794598",target:"_blank",rel:"noopener noreferrer"}},[a._v("《你的 Tree-Shaking 并没什么卵用》"),e("OutboundLink")],1),a._v("这篇文章。")]),a._v(" "),e("h2",{attrs:{id:"编写可测试代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写可测试代码"}},[a._v("#")]),a._v(" 编写可测试代码")]),a._v(" "),e("p",[a._v("测试的重要性不用多说，有了测试，我们每次功能调整和重构的时候，心会踏实很多吧。")]),a._v(" "),e("p",[a._v("但是目前大部分情况是，项目中功能的快速迭代、开发工作量饱满等原因，导致甚至单元测试这种都很少编写。Emmmmm。。。所以这里不多讲述，因为本人也没有太多经验。")]),a._v(" "),e("h1",{attrs:{id:"结束语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[a._v("#")]),a._v(" 结束语")]),a._v(" "),e("p",[a._v("项目的维护永远是程序员的大头，多是前人种树后人乘凉。但是很多时候，大家会为了一时的方便，对代码规范比较随意，就导致了我们经常看到有人讨论“继承来的代码”。"),e("br"),a._v("\n或许相比新技术的研究和造轮子，有个好的写码习惯、提高项目维护性并不能带来短期的利益，但是其实身为程序员，还是要对自己写的东西负责任的呢。")])])}),[],!1,null,null,null);t.default=s.exports}}]);