(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{696:function(a,t,s){"use strict";s.r(t);var e=s(69),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("项目中需要搭建一个多页面的环境，包括本地路由服务和分页面打包。本节介绍开发部署和生产环境打包时，启用 source map 相关配置。")]),a._v(" "),s("h1",{attrs:{id:"devtool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devtool"}},[a._v("#")]),a._v(" devtool")]),a._v(" "),s("p",[a._v("此选项控制是否生成，以及如何生成"),s("code",[a._v("source map")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"关于-source-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-source-map"}},[a._v("#")]),a._v(" 关于 source map")]),a._v(" "),s("p",[a._v("当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。\n例如，如果将多个源文件打包到一个文件中，而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到该文件。这并通常没有太多帮助，因为你可能需要准确地知道错误来自于哪个源文件。")]),a._v(" "),s("p",[a._v("为了更容易地追踪错误和警告，JavaScript 提供了"),s("code",[a._v("source map")]),a._v("功能，将编译后的代码映射回原始源代码。")]),a._v(" "),s("h2",{attrs:{id:"devtool-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devtool-选项"}},[a._v("#")]),a._v(" devtool 选项")]),a._v(" "),s("p",[a._v("对于开发环境，通常希望更快速的"),s("code",[a._v("Source Map")]),a._v("，需要添加到"),s("code",[a._v("bundle")]),a._v("中以增加体积为代价。\n但是对于生产环境，则希望更精准的"),s("code",[a._v("Source Map")]),a._v("，需要从"),s("code",[a._v("bundle")]),a._v("中分离并独立存在。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("开发环境")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("eval")]),a._v(" "),s("ul",[s("li",[a._v("每个模块都使用"),s("code",[a._v("eval()")]),a._v("执行，并且都有"),s("code",[a._v("//@ sourceURL")]),a._v("。")]),a._v(" "),s("li",[a._v("此选项会相当快地构建。主要缺点是，由于会映射到转换后的代码，而不是映射到原始代码，所以不能正确的显示显示行数。")])])]),a._v(" "),s("li",[s("code",[a._v("inline-source-map")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("SourceMap")]),a._v("转换为"),s("code",[a._v("DataUrl")]),a._v("后添加到"),s("code",[a._v("bundle")]),a._v("中。")])])]),a._v(" "),s("li",[s("code",[a._v("eval-source-map")]),a._v(" "),s("ul",[s("li",[a._v("每个模块使用"),s("code",[a._v("eval()")]),a._v("执行，并且"),s("code",[a._v("SourceMap")]),a._v("转换为"),s("code",[a._v("DataUrl")]),a._v("后添加到"),s("code",[a._v("eval()")]),a._v("中。")]),a._v(" "),s("li",[a._v("初始化"),s("code",[a._v("SourceMap")]),a._v("时比较慢，但是会在重构建时提供很快的速度，并且生成实际的文件。行数能够正确映射，因为会映射到原始代码中。")])])]),a._v(" "),s("li",[s("code",[a._v("cheap-eval-source-map")]),a._v(" "),s("ul",[s("li",[a._v("和"),s("code",[a._v("eval-source-map")]),a._v("类似，每个模块都使用"),s("code",[a._v("eval()")]),a._v("执行。")]),a._v(" "),s("li",[a._v("使用此选项，"),s("code",[a._v("Source Map")]),a._v("将传递给"),s("code",[a._v("eval()")]),a._v("作为"),s("code",[a._v("Data URL")]),a._v("调用。它是“低性能开销”的，因为它没有映射到列，只映射到行数。")])])]),a._v(" "),s("li",[s("code",[a._v("cheap-module-eval-source-map")]),a._v("（推荐使用）\n"),s("ul",[s("li",[a._v("和"),s("code",[a._v("cheap-eval-source-map")]),a._v("类似，然而，在这种情况下，"),s("code",[a._v("loader")]),a._v("能够处理映射以获得更好的结果。")])])])])]),a._v(" "),s("li",[s("p",[a._v("生产环境")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("source-map")]),a._v(" "),s("ul",[s("li",[a._v("生成完整的"),s("code",[a._v("SourceMap")]),a._v("，输出为独立文件。")]),a._v(" "),s("li",[a._v("由于在"),s("code",[a._v("bundle")]),a._v("中添加了引用注释，所以开发工具知道在哪里去找到"),s("code",[a._v("SourceMap")]),a._v("。")])])]),a._v(" "),s("li",[s("code",[a._v("hidden-source-map")]),a._v(" "),s("ul",[s("li",[a._v("和"),s("code",[a._v("source-map")]),a._v("相同，但是没有在"),s("code",[a._v("bundle")]),a._v("中添加引用注释。")]),a._v(" "),s("li",[a._v("如果你只想要"),s("code",[a._v("SourceMap")]),a._v("映射错误报告中的错误堆栈跟踪信息，但不希望将"),s("code",[a._v("SourceMap")]),a._v("暴露给浏览器开发工具。")])])]),a._v(" "),s("li",[s("code",[a._v("cheap-source-map")]),a._v(" "),s("ul",[s("li",[a._v("不带列映射(column-map)的"),s("code",[a._v("SourceMap")]),a._v("，忽略加载的"),s("code",[a._v("Source Map")]),a._v("。")])])]),a._v(" "),s("li",[s("code",[a._v("cheap-module-source-map")]),a._v(" "),s("ul",[s("li",[a._v("不带列映射(column-map)的"),s("code",[a._v("SourceMap")]),a._v("，将加载的"),s("code",[a._v("Source Map")]),a._v("简化为每行单独映射。")])])]),a._v(" "),s("li",[s("code",[a._v("nosources-source-map")]),a._v(" "),s("ul",[s("li",[a._v("创建一个没有"),s("code",[a._v("sourcesContent")]),a._v("的"),s("code",[a._v("SourceMap")]),a._v("。")]),a._v(" "),s("li",[a._v("它可以用来映射客户端上的堆栈跟踪，而不会暴露所有的源码。")])])])])])]),a._v(" "),s("p",[a._v("参考"),s("a",{attrs:{href:"https://doc.webpack-china.org/configuration/devtool/",target:"_blank",rel:"noopener noreferrer"}},[a._v("开发辅助调试工具(Devtool)"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"开发环境添加-source-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境添加-source-map"}},[a._v("#")]),a._v(" 开发环境添加 source map")]),a._v(" "),s("p",[a._v("这里我们简单地添加"),s("code",[a._v("devtool")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// build/dev-server.js")]),a._v("\nwebpackConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("devtool "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"eval-cheap-module-source-map"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("同时，在配置文件中，还有一个要点是"),s("code",[a._v("publicPath")]),a._v("不是"),s("code",[a._v("/")]),a._v("这样的值，而是"),s("code",[a._v("http://localhost:3000/")]),a._v("这样的绝对地址。这是因为，在使用?sourceMap 的时候，style-loader 会把 css 的引入做成这样：")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("link")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("blob:http://localhost:3000/asdasd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])])]),s("p",[a._v("这种 blob 的形式可能会使得 css 里的 url()引用的图片失效，因此建议用带 http 的绝对地址（这也只有开发环境会用到）。")]),a._v(" "),s("p",[a._v("所以我们有：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// webpack-dev-server中间件")]),a._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("WebpackDevMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("compiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost:3000/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    stats"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      colors"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      chunks"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    progress"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    inline"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    hot"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"生产环境-source-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生产环境-source-map"}},[a._v("#")]),a._v(" 生产环境 source map")]),a._v(" "),s("p",[a._v("同样的我们添加"),s("code",[a._v("devtool")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// build/dev-server.js")]),a._v("\nwebpackConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("devtool "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"source-map"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 或者不需要source map")]),a._v("\nwebpackConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("devtool "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("生产环境很多时候我们会压缩代码，压缩的时候如果需要生成 source map 还需要配置：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("optimize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("UglifyJsPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    sourceMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("参考了"),s("a",{attrs:{href:"http://acgtofe.com/posts/2016/02/full-live-reload-for-express-with-webpack",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Express 结合 Webpack 的全栈自动刷新》"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"代码压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[a._v("#")]),a._v(" 代码压缩")]),a._v(" "),s("p",[a._v("既然说到"),s("code",[a._v("UglifyJsPlugin")]),a._v("了，就顺便讲一下代码压缩吧。")]),a._v(" "),s("p",[a._v("其实也没有多少东西，就是上面大家看到的"),s("code",[a._v("new webpack.optimize.UglifyJsPlugin()")]),a._v("，不过配置选项除了"),s("code",[a._v("sourceMap")]),a._v("还有注释"),s("code",[a._v("comments")]),a._v("相关、压缩"),s("code",[a._v("compress")]),a._v("相关。")]),a._v(" "),s("p",[a._v("还有一个问题就是，"),s("code",[a._v("UglifyJs")]),a._v("不支持 ES6 的压缩，如果代码压缩前没有编译到 ES5，则打包任务会报错，通常显示：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ERROR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" xx"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("xxxxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("js "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" UglifyJs\nUnexpected token xxxx\n")])])]),s("p",[a._v("这时候我们需要将代码先通过"),s("code",[a._v("babel")]),a._v("生成"),s("code",[a._v("ES5")]),a._v("，然后再压缩：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      test"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("\\.js$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"babel-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      exclude"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("node_modules")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 其他loader排在后面")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("大致就酱啦。")]),a._v(" "),s("h1",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[a._v("#")]),a._v(" 结束语")]),a._v(" "),s("p",[a._v("本节我们大致了解了 source map 的功能和一些 devtool 的选项，包括生产环境和开发环境可能需要注意的地方，以及简单说了个代码压缩的坑。"),s("br"),a._v("\n可参考代码"),s("a",{attrs:{href:"https://github.com/godbasin/vue-multi-pages",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-vue-multi-pages"),s("OutboundLink")],1),a._v("，主要是这套环境使用在 vue 上的 demo。")])])}),[],!1,null,null,null);t.default=n.exports}}]);