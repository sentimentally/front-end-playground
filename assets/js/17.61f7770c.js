(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{577:function(e,v,t){"use strict";t.r(v);var r=t(69),_=Object(r.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("该系列主要作为曾经的纯前端，对后台和底层的一些弥补，涉及进程、网络通信，以及对 node.js 和相关框架的学习。前面已经科普过网络进程通信、TCP/IP、HTTP 和 Socket 等，本节我们来简单熟悉一下 node.js 吧。")]),e._v(" "),t("h1",{attrs:{id:"node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[e._v("#")]),e._v(" node.js")]),e._v(" "),t("h2",{attrs:{id:"什么是-node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-node-js"}},[e._v("#")]),e._v(" 什么是 Node.js")]),e._v(" "),t("ul",[t("li",[e._v("Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。")]),e._v(" "),t("li",[e._v("Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。")]),e._v(" "),t("li",[e._v("Node.js 的包管理器 npm，是全球最大的开源库生态系统。")])]),e._v(" "),t("p",[e._v("以上是"),t("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 官网"),t("OutboundLink")],1),e._v("的说明。")]),e._v(" "),t("p",[t("strong",[e._v("Node.js 大部分基本模块都用 JavaScript 语言编写。")]),t("br"),e._v("\n在 Node.js 出现之前，JavaScript 通常作为客户端程序设计语言使用，以 JavaScript 写出的程序常在用户的浏览器上运行。"),t("br"),e._v("\nNode.js 的出现使 JavaScript 也能用于服务器端编程。Node.js 含有一系列内置模块，使得程序可以脱离 Apache HTTP Server 或 IIS，作为独立服务器运行。")]),e._v(" "),t("p",[t("strong",[e._v("Node.js 允许通过 JavaScript 和一系列模块来编写服务器端应用和网络相关的应用。")]),t("br"),e._v("\n核心模块包括文件系统 I/O、网络（HTTP、TCP、UDP、DNS、TLS/SSL 等）、二进制数据流、加密算法、数据流等等。")]),e._v(" "),t("p",[e._v("使用框架可以加速开发。常用的框架有 Express.js、Socket.IO 和 Connect 等。")]),e._v(" "),t("p",[e._v("Node.js 主要用于编写像 Web 服务器一样的网络应用，这和 PHP 和 Python 是类似的。但是 Node.js 与其他语言最大的不同之处在于，PHP 等语言是阻塞的（只有前一条命令执行完毕才会执行后面的命令），而 Node.js 是非阻塞的（多条命令可以同时被运行，通过回调函数得知命令已结束运行）。")]),e._v(" "),t("p",[t("strong",[e._v("Node.js 是事件驱动的。")]),t("br"),e._v("\n开发者可以在不使用线程的情况下开发出一个能够承载高并发的服务器。其他服务器端语言难以开发高并发应用，而且即使开发出来，性能也不尽人意。Node.js 正是在这个前提下被创造出来。"),t("br"),e._v("\nNode.js 把 JavaScript 的易学易用和 Unix 网络编程的强大结合到了一起。")]),e._v(" "),t("h2",{attrs:{id:"相关技术点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关技术点"}},[e._v("#")]),e._v(" 相关技术点")]),e._v(" "),t("h3",{attrs:{id:"v8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8"}},[e._v("#")]),e._v(" V8")]),e._v(" "),t("p",[e._v("V8 是为 Google Chrome 设计的 JavaScript 运行引擎，Google 于 2008 年将其开源。V8 用 C++写成，它将 JavaScript 源代码编译成本地机器码而不是随时解释。"),t("br"),e._v("\nNode.js 用 libuv 来处理异步事件，而 V8 提供了 JavaScript 的实时运行环境。libuv 是一个网络和文件系统功能的抽象层，既可以用于 Windows 又可以用于匹配 POSIX 标准的系统，例如 Linux、OS X 和 Unix。"),t("br"),e._v("\nNode.js 的核心功能被包含进一个 JavaScript 库，并通过 C++将各部分与操作系统进行联系。")]),e._v(" "),t("h3",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[e._v("#")]),e._v(" npm")]),e._v(" "),t("p",[e._v("npm 是 Node.js 附带的包管理器。"),t("br"),e._v("\nnpm 是一个命令行工具，用于从 NPM Registry 中下载、安装 Node.js 程序，同时解决依赖问题。"),t("br"),e._v("\nnpm 提高了开发的速度，因为它能够负责第三方 Node.js 程序的安装与管理。")]),e._v(" "),t("h3",{attrs:{id:"统一-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#统一-api"}},[e._v("#")]),e._v(" 统一 API")]),e._v(" "),t("p",[e._v("Node 模块的 API 形式简单，降低了编程的复杂度。"),t("br"),e._v("\nNode.js 将浏览器、数据（例如 MongoDB 或 CouchDB）等组合到一起，通过 JSON 提供一个统一的接口。"),t("br"),e._v("\n由于前端框架和一些基本的后端开发技术（如 MVC、MVP、MVVM 等）变得流行，Node.js 也支持客户端和服务器端重新利用相同的模型和接口。")]),e._v(" "),t("h3",{attrs:{id:"单线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[e._v("#")]),e._v(" 单线程")]),e._v(" "),t("p",[e._v("Node.js 以单线程运行，使用非阻塞 I/O 调用，这样既可以支持数以万计的并发连接，又不会因多线程本身的特点而带来麻烦。众多请求只使用单线程的设计意味着可以用于创建高并发应用程序。"),t("br"),e._v("\nNode.js 应用程序的设计目标是任何需要操作 I/O 的函数都使用回调函数。"),t("br"),e._v("\n这种设计的缺点是，如果不使用 cluster、StrongLoop Process Manager 或 pm2 等模块，Node.js 就难以处理多核或多线程等情况。")]),e._v(" "),t("h3",{attrs:{id:"事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[e._v("#")]),e._v(" 事件循环")]),e._v(" "),t("p",[e._v("Node.js 将其注册到操作系统中，这样可以及时注意到新连接的产生。当新连接产生时，操作系统会产生一个回调。"),t("br"),e._v("\n在 Node.js 运行时内部，每个连接都被分配一个小型的堆。与其他服务器程序不同的是，Node.js 不使用进程或线程处理连接，而是采用事件循环来处理并发连接。"),t("br"),e._v("\n而且 Node.js 的事件循环不需要手动调用。在回调函数定义之后，服务器进入事件循环。当回调函数均被执行完毕之后，Node.js 结束事件循环。")]),e._v(" "),t("h3",{attrs:{id:"异步执行的运行机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步执行的运行机制"}},[e._v("#")]),e._v(" 异步执行的运行机制")]),e._v(" "),t("ol",[t("li",[e._v("所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。")]),e._v(" "),t("li",[e._v("主线程之外，还存在一个“任务队列”（task queue）。只要异步任务有了运行结果，就在“任务队列”之中放置一个事件。")]),e._v(" "),t("li",[e._v("一旦“执行栈”中的所有同步任务执行完毕，系统就会读取“任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。")]),e._v(" "),t("li",[e._v("主线程不断重复上面的第三步。")])]),e._v(" "),t("h2",{attrs:{id:"commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[e._v("#")]),e._v(" CommonJS")]),e._v(" "),t("h3",{attrs:{id:"模块定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块定义"}},[e._v("#")]),e._v(" 模块定义")]),e._v(" "),t("ol",[t("li",[e._v("模块中，上下文提供"),t("code",[e._v("require()")]),e._v("方法来引入外部模块。")]),e._v(" "),t("li",[e._v("对应引入功能，上下文提供了 exports 对象用于导出当前模块的方法或者变量，exports 对象是唯一导出的出口。")]),e._v(" "),t("li",[e._v("模块中，存在一个 module 对象，代表模块自身，而 exports 是 module 的属性。")])]),e._v(" "),t("p",[e._v("Node 中，一个文件就是一个模块，将方法挂载在 exports 对象上作为属性即可定义导出方式。")]),e._v(" "),t("h3",{attrs:{id:"模块标识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块标识"}},[e._v("#")]),e._v(" 模块标识")]),e._v(" "),t("p",[e._v("模块标识是传递给"),t("code",[e._v("require()")]),e._v("方法的参数，必须是符合小驼峰命名的字符串，或者以"),t("code",[e._v(".")]),e._v("、"),t("code",[e._v("..")]),e._v("开头的相对路径或者绝对路径，可以没有文件名后缀"),t("code",[e._v(".js")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"node-js-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-模块"}},[e._v("#")]),e._v(" Node.js 模块")]),e._v(" "),t("h3",{attrs:{id:"一、模块分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、模块分类"}},[e._v("#")]),e._v(" 一、模块分类")]),e._v(" "),t("p",[e._v("Node.js 的模块分为两类，一类为原生（核心）模块，一类为文件模块。原生模块在 Node.js 源代码编译的时候编译进了二进制执行文件，加载的速度最快。文件模块是动态加载的，加载速度比原生模块慢。")]),e._v(" "),t("p",[e._v("Node.js 中存在 4 类模块（原生模块和 3 种文件模块），其中 3 种文件模块为：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".js")]),e._v("：通过 fs 模块同步读取 js 文件并编译执行。")]),e._v(" "),t("li",[t("code",[e._v(".node")]),e._v("：通过 C/C++进行编写的 Addon。通过 dlopen 方法进行加载。")]),e._v(" "),t("li",[t("code",[e._v(".json")]),e._v("：读取文件，调用 JSON.parse 解析加载。")])]),e._v(" "),t("p",[e._v("其中文件模块还包括路径形式文件模块（如"),t("code",[e._v(".")]),e._v("、"),t("code",[e._v("..")]),e._v("和"),t("code",[e._v("./")]),e._v("开头的标识符）和自定义文件模块（第三方 npm 包）。")]),e._v(" "),t("p",[e._v("自定义文件模块的查找最耗时也是最慢的一种，查找顺序为：")]),e._v(" "),t("ol",[t("li",[e._v("当前目录下"),t("code",[e._v("node_modules")]),e._v("目录")]),e._v(" "),t("li",[e._v("父目录下"),t("code",[e._v("node_modules")]),e._v("目录")]),e._v(" "),t("li",[e._v("向上逐级递归直到根目录下下"),t("code",[e._v("node_modules")]),e._v("目录")])]),e._v(" "),t("h3",{attrs:{id:"二、模块载入策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、模块载入策略"}},[e._v("#")]),e._v(" 二、模块载入策略")]),e._v(" "),t("p",[e._v("Node 引入模块，经历的三个步骤：路径分析、文件定位、编译执行。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("require")]),e._v("方法接受以下几种参数的传递：\n"),t("ul",[t("li",[e._v("原生模块（http、fs、path 等）")]),e._v(" "),t("li",[e._v("相对路径的文件模块")]),e._v(" "),t("li",[e._v("绝对路径的文件模块")]),e._v(" "),t("li",[e._v("非原生模块的文件模块")])])])]),e._v(" "),t("p",[e._v("Node.js 对原生模块和文件模块都进行了缓存，于是在第二次 require 时，是不会有重复开销的。"),t("br"),e._v("\nrequire 方法中的文件查找策略："),t("br"),e._v(" "),t("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/image1.jpg",alt:"images"}})]),e._v(" "),t("ol",[t("li",[t("p",[e._v("从文件模块缓存中加载"),t("br"),e._v("\n尽管原生模块与文件模块的优先级不同，但是都不会优先于从文件模块的缓存中加载已经存在的模块。")])]),e._v(" "),t("li",[t("p",[e._v("从原生模块加载"),t("br"),e._v("\n原生模块的优先级仅次于文件模块缓存的优先级。require 方法在解析文件名之后，优先检查模块是否在原生模块列表中。"),t("br"),e._v("\n以 http 模块为例，尽管在目录下存在一个"),t("code",[e._v("http")]),e._v("/"),t("code",[e._v("http.js")]),e._v("/"),t("code",[e._v("http.node")]),e._v("/"),t("code",[e._v("http.json")]),e._v("文件，"),t("code",[e._v('require("http")')]),e._v("都不会从这些文件中加载，而是从原生模块中加载。")])])]),e._v(" "),t("p",[e._v("原生模块也有一个缓存区，同样也是优先从缓存区加载。如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行。")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("从文件加载"),t("br"),e._v("\n当文件模块缓存中不存在，而且不是原生模块的时候，Node.js 会解析 require 方法传入的参数，并从文件系统中加载实际的文件，加载过程中的包装和编译细节在前一节中已经介绍过，这里我们将详细描述查找文件模块的过程，其中，也有一些细节值得知晓。")])]),e._v(" "),t("h3",{attrs:{id:"三、node-js-模块与前端模块的异同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、node-js-模块与前端模块的异同"}},[e._v("#")]),e._v(" 三、Node.js 模块与前端模块的异同")]),e._v(" "),t("p",[e._v("通常有一些模块可以同时适用于前后端，但是在浏览器端通过 script 标签的载入 JavaScript 文件的方式与 Node.js 不同。"),t("br"),e._v("\nNode.js 在载入到最终的执行中，进行了包装，使得每个文件中的变量天然的形成在一个闭包之中，不会污染全局变量。而浏览器端则通常是裸露的 JavaScript 代码片段。"),t("br"),e._v("\n所以为了解决前后端一致性的问题，类库开发者需要将类库代码包装在一个闭包内。")]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Node.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js - 维基百科，自由的百科全书"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《JavaScript 运行机制详解：再谈 Event Loop》"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.infoq.com/cn/articles/nodejs-module-mechanism",target:"_blank",rel:"noopener noreferrer"}},[e._v("《深入浅出 Node.js（三）：深入 Node.js 的模块机制》"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/muwenzi/Program-Blog/issues/94",target:"_blank",rel:"noopener noreferrer"}},[e._v("《浅析 NodeJS 模块加载机制 》"),t("OutboundLink")],1)])]),e._v(" "),t("h1",{attrs:{id:"结束语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[e._v("#")]),e._v(" 结束语")]),e._v(" "),t("p",[e._v("本节我们主要介绍了 Node.js，了解模块加载机制及异步编程，至于具体的核心模块（例如 http 和 fs 模块），在后面缘分到了再详细讲。"),t("br"),e._v("\n作为一名纯前端，Node.js 与浏览器中 JS 除了语法等较相似，却又很多不一样和缺少理解的地方，如果真正到使用到的时候，或许会有不一样的理解吧。")])])}),[],!1,null,null,null);v.default=_.exports}}]);