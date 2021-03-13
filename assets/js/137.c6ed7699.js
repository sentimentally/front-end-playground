(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{697:function(t,a,s){"use strict";s.r(a);var e=s(69),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("项目中需要搭建一个多页面的环境，包括本地路由服务和分页面打包。本节介绍比较经常使用到的静态资源相关 loader 们，像 css-loader、url-loader 等。")]),t._v(" "),s("h1",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" Loader")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"http://zhaoda.net/webpack-handbook/loader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Loader》"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"loader-的存在"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-的存在"}},[t._v("#")]),t._v(" Loader 的存在")]),t._v(" "),s("p",[t._v("Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。")]),t._v(" "),s("p",[t._v("Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。\n这样，我们就可以通过"),s("code",[t._v("require")]),t._v("来加载任何类型的模块或文件，比如"),s("code",[t._v("CoffeeScript、 JSX、 LESS")]),t._v("或图片。")]),t._v(" "),s("h2",{attrs:{id:"loader-的特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-的特性"}},[t._v("#")]),t._v(" Loader 的特性")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Loader 可以通过管道方式链式调用，每个"),s("code",[t._v("loader")]),t._v("可以把资源转换成任意格式并传递给下一个"),s("code",[t._v("loader")]),t._v("，但是最后一个"),s("code",[t._v("loader")]),t._v("必须返回 JavaScript")]),t._v("。")]),t._v(" "),s("li",[t._v("Loader 可以同步或异步执行。")]),t._v(" "),s("li",[t._v("Loader 运行在"),s("code",[t._v("node.js")]),t._v("环境中，所以可以做任何可能的事情。")]),t._v(" "),s("li",[t._v("Loader 可以接受参数，以此来传递配置项给"),s("code",[t._v("loader")]),t._v("。")]),t._v(" "),s("li",[t._v("Loader 可以通过文件扩展名（或正则表达式）绑定给不同类型的文件。")]),t._v(" "),s("li",[t._v("Loader 可以通过"),s("code",[t._v("npm")]),t._v("发布和安装。")]),t._v(" "),s("li",[t._v("除了通过"),s("code",[t._v("package.json")]),t._v("的"),s("code",[t._v("main")]),t._v("指定，通常的模块也可以导出一个"),s("code",[t._v("loader")]),t._v("来使用。")]),t._v(" "),s("li",[t._v("Loader 可以访问配置。")]),t._v(" "),s("li",[t._v("插件可以让"),s("code",[t._v("loader")]),t._v("拥有更多特性。")]),t._v(" "),s("li",[t._v("Loader 可以分发出附加的任意文件。")])]),t._v(" "),s("p",[t._v("Loader 本身也是运行在"),s("code",[t._v("node.js")]),t._v("环境中的"),s("code",[t._v("JavaScript")]),t._v("模块，它通常会返回一个函数。\n大多数情况下，我们通过"),s("code",[t._v("npm")]),t._v("来管理"),s("code",[t._v("loader")]),t._v("，但是你也可以在项目中自己写"),s("code",[t._v("loader")]),t._v("模块。")]),t._v(" "),s("h2",{attrs:{id:"使用-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-loader"}},[t._v("#")]),t._v(" 使用 Loader")]),t._v(" "),s("p",[t._v("在你的应用程序中，有三种使用"),s("code",[t._v("loader")]),t._v("的方式：")]),t._v(" "),s("ol",[s("li",[t._v("配置（推荐）：在"),s("code",[t._v("webpack.config.js")]),t._v("文件中指定"),s("code",[t._v("loader")]),t._v("。")]),t._v(" "),s("li",[t._v("内联：在每个"),s("code",[t._v("import")]),t._v("语句中显式指定"),s("code",[t._v("loader")]),t._v("。")]),t._v(" "),s("li",[t._v("CLI：在"),s("code",[t._v("shell")]),t._v("命令中指定它们。")])]),t._v(" "),s("h2",{attrs:{id:"静态资源-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源-loader"}},[t._v("#")]),t._v(" 静态资源 Loader")]),t._v(" "),s("p",[t._v("我们来看看静态资源相关的 Loader 们。")]),t._v(" "),s("h3",{attrs:{id:"css-相关-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-相关-loader"}},[t._v("#")]),t._v(" CSS 相关 Loader")]),t._v(" "),s("p",[t._v("加载 CSS 需要"),s("code",[t._v("css-loader")]),t._v("和"),s("code",[t._v("style-loader")]),t._v("。\n他们做两件不同的事情，"),s("code",[t._v("css-loader")]),t._v("会遍历 CSS 文件，然后找到"),s("code",[t._v("url()")]),t._v("表达式然后处理他们，"),s("code",[t._v("style-loader")]),t._v("会把原来的 CSS 代码插入页面中的一个"),s("code",[t._v("style")]),t._v("标签中。")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://doc.webpack-china.org/loaders/css-loader/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("css-loader")]),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("我们看"),s("a",{attrs:{href:"https://doc.webpack-china.org/loaders/css-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),s("OutboundLink")],1),t._v("上解释：\n"),s("code",[t._v("css-loader")]),t._v(" 解释(interpret)"),s("code",[t._v("@import")]),t._v("和"),s("code",[t._v("url()")]),t._v("，会"),s("code",[t._v("import/require()")]),t._v("后再解析(resolve)它们。")]),t._v(" "),s("p",[t._v("说白了是用来处理 css 文件中的"),s("code",[t._v("url()")]),t._v("或者"),s("code",[t._v("@import")]),t._v("的路径。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("a",{attrs:{href:"https://doc.webpack-china.org/loaders/style-loader/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("style-loader")]),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("通过注入"),s("code",[t._v("<style>")]),t._v("标签将 CSS 添加到 DOM 中。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过webpack配置使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// css-loader和style-loader推荐一起使用，注意顺序")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.css$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("a",{attrs:{href:"http://www.css88.com/doc/webpack2/loaders/less-loader/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("less-loader")]),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("一看就知道，"),s("code",[t._v("less-loader")]),t._v("主要用于将 LESS 转换成 CSS 的。\n将"),s("code",[t._v("css-loader")]),t._v("、"),s("code",[t._v("style-loader")]),t._v("和"),s("code",[t._v("less-loader")]),t._v("链式调用，添加对 webpack 的 LESS 支持，可以把所有样式立即应用于 DOM。")]),t._v(" "),s("p",[t._v("LESS 将 CSS 赋予了动态语言的特性，如变量，继承，运算，函数。")]),t._v(" "),s("p",[t._v("如果需要启用 CSS 的 source map，需要配置选项：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.less$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            use"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style-loader"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    sourceMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"less-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    sourceMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[s("code",[t._v("postcss-loader")]),t._v(" "),s("code",[t._v("postcss-loader")]),t._v("提供了一种方式用 JavaScript 代码来处理 CSS。负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。\n插件基于 CSS 代码的 AST 所能进行的操作是多种多样的，比如可以支持变量和混入（mixin），增加浏览器相关的声明前缀，或是把使用将来的 CSS 规范的样式规则转译（transpile）成当前的 CSS 规范支持的格式。")])]),t._v(" "),s("p",[s("code",[t._v("postcss-loader")]),t._v("的使用依赖一些插件。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置webpack.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  loaders"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.css$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// loader: "style-loader!css-loader!postcss-loader"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("postcss")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 里面是我们要用的插件")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("以下插件都需要单独安装相关 npm 模块：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("autoprefixer")]),t._v(" "),s("ul",[s("li",[t._v("解析 CSS 文件并且添加浏览器前缀到 CSS 规则里，对浏览器兼容补全还是挺方便的")])])]),t._v(" "),s("li",[s("code",[t._v("stylelint")]),t._v(" "),s("ul",[s("li",[t._v("Stylelint 插件可以让你在编译的时候就知道自己 CSS 文件里的错误")])])]),t._v(" "),s("li",[s("code",[t._v("postcss-cssnext")]),t._v(" "),s("ul",[s("li",[t._v("可以让你写 CSS4 的语言，并能配合 autoprefixer 进行浏览器兼容的不全，而且还支持嵌套语法")])])]),t._v(" "),s("li",[s("code",[t._v("postcss-import")]),t._v(" "),s("ul",[s("li",[t._v("在"),s("code",[t._v("@import")]),t._v(" css 文件的时候让 webpack 监听并编译")])])])]),t._v(" "),s("p",[t._v("更多的可以参考"),s("a",{attrs:{href:"https://github.com/ecmadao/Coding-Guide/blob/master/Notes/CSS/PostCSS%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8C%97.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("《PostCSS 配置指北》"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"文件相关-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件相关-loader"}},[t._v("#")]),t._v(" 文件相关 Loader")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("file-loader")])])]),t._v(" "),s("p",[s("code",[t._v("file-loader")]),t._v("主要用来处理图片。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[t._v("url-loader")])])]),t._v(" "),s("p",[s("code",[t._v("url-loader")]),t._v("的功能类似"),s("code",[t._v("file-loader")]),t._v("加载器，但是在文件大小低于指定的限制时（单位 bytes）可以返回一个"),s("code",[t._v("Data Url")]),t._v("。")]),t._v(" "),s("p",[t._v("大小限制可以通过传递查询参数来指定。（默认为无限制）\n如果文件大小大于限制，将转为使用"),s("code",[t._v("file-loader")]),t._v("，所有的查询参数也会透传过去。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => 如果 "file.png" 大小小于 10kb 将返回 DataUrl')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url-loader?limit=10000!./file.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack配置")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  loaders"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(png|jpe?g|gif|svg)(\\?.*)?$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h1",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),s("p",[t._v("本节我们大致了解静态资源相关 loader 们，当时具体使用的时候还是得历练一番的。"),s("br"),t._v("\n代码的话，大家可以看看"),s("a",{attrs:{href:"https://github.com/godbasin/vue-multi-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-vue-multi-pages"),s("OutboundLink")],1),t._v("，主要是这套环境使用在 vue 上的 demo。")])])}),[],!1,null,null,null);a.default=r.exports}}]);