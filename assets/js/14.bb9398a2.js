(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{574:function(t,r,a){"use strict";a.r(r);var _=a(69),v=Object(_.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("该系列主要作为曾经的纯前端，对后台和底层的一些弥补，涉及进程、网络通信，以及对 node.js 和相关框架的学习。这一节我们来补充网络通信和 TCP、IP 协议、DNS 相关知识。")]),t._v(" "),a("h1",{attrs:{id:"网络通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络通信"}},[t._v("#")]),t._v(" 网络通信")]),t._v(" "),a("p",[t._v("前面一节我们学习了进程、线程等，以及进程之间的通信，这节我们来了解一下网络通信。")]),t._v(" "),a("h2",{attrs:{id:"网络进程间通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络进程间通信"}},[t._v("#")]),t._v(" 网络进程间通信")]),t._v(" "),a("p",[t._v("网间进程通信要解决的是不同主机进程间的相互通信问题（可把同机进程通信看作是其中的特例）。为此，首先要解决的是网间进程标识问题。"),a("br"),t._v("\n同一主机上，不同进程可用进程号（process ID）唯一标识。但在网络环境下，各主机独立分配的进程号不能唯一标识该进程。")]),t._v(" "),a("p",[t._v("TCP/IP 协议族可解决该问题：")]),t._v(" "),a("ul",[a("li",[t._v("网络层的"),a("code",[t._v("“ip地址”")]),t._v("可以唯一标识网络中的主机")]),t._v(" "),a("li",[t._v("传输层的"),a("code",[t._v("“协议 + 端口”")]),t._v("可以唯一标识主机中的应用程序（进程）")])]),t._v(" "),a("p",[t._v("这样利用三元组（ip 地址，协议，端口）就可以标识网络的进程了，网络中的进程通信就可以利用这个标志与其它进程进行交互。")]),t._v(" "),a("p",[t._v("网络进程间通信，是需要依赖 TCP/IP 协议的，这里我们来简单介绍一下。")]),t._v(" "),a("h2",{attrs:{id:"tcp-ip-协议族"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议族"}},[t._v("#")]),t._v(" TCP/IP 协议族")]),t._v(" "),a("p",[t._v("TCP/IP 提供点对点的链接机制，将数据应该如何封装、定址、传输、路由以及在目的地如何接收，都加以标准化。"),a("br"),t._v("\n它将软件通信过程抽象化为四个抽象层，采取协议堆栈的方式，分别实现出不同通信协议。协议套组下的各种协议，依其功能不同，被分别归属到这四个层次结构之中，常被视为是简化的七层 OSI 模型。")]),t._v(" "),a("h3",{attrs:{id:"tcp-ip-协议分层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议分层"}},[t._v("#")]),t._v(" TCP/IP 协议分层")]),t._v(" "),a("ol",[a("li",[t._v("数据链路层"),a("br"),t._v("\n负责建立电路连接，是整个网络的物理基础，典型的协议包括以太网、ADSL 等等。")]),t._v(" "),a("li",[t._v("网络层"),a("br"),t._v("\n负责分配地址和传送二进制数据（选路线），主要协议是 IP 协议。")]),t._v(" "),a("li",[t._v("传输层（TCP/UDP）"),a("br"),t._v("\n传输层负责传送文本数据，主要协议是 TCP 协议。"),a("br"),t._v("\n传输层的协议，能够解决诸如端到端可靠性（“数据是否已经到达目的地？”）和保证数据按照正确的顺序到达这样的问题。"),a("br"),t._v("\n在 TCP/IP 协议组中，传输协议也包括所给数据应该送给哪个应用程序。")]),t._v(" "),a("li",[t._v("应用层（FTP/DNS 域名系统/HTTP 协议等）"),a("br"),t._v("\n负责传送各种最终形态的数据，是直接与用户打交道的层，典型协议是 HTTP、FTP 等。"),a("br"),t._v("\n该层包括所有和应用程序协同工作，利用基础网络交换应用程序专用的数据的协议。")])]),t._v(" "),a("h3",{attrs:{id:"ip-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip-协议"}},[t._v("#")]),t._v(" IP 协议")]),t._v(" "),a("p",[t._v("主要内容是把各种数据包准确无误地传递，包括 ARP 协议、RARP 协议等。")]),t._v(" "),a("h2",{attrs:{id:"tcp-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议"}},[t._v("#")]),t._v(" TCP 协议")]),t._v(" "),a("h3",{attrs:{id:"非可靠的-udp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非可靠的-udp"}},[t._v("#")]),t._v(" 非可靠的 UDP")]),t._v(" "),a("p",[t._v("UDP 与 TCP 的主要区别在于 UDP 不一定提供可靠的数据传输。事实上，该协议不能保证数据准确无误地到达目的地。"),a("br"),t._v("\nUDP 在许多方面非常有效。当某个程序的目标是尽快地传输尽可能多的信息时（其中任意给定数据的重要性相对较低），可使用 UDP。QQ 短消息使用 UDP 协议发送消息。")]),t._v(" "),a("h3",{attrs:{id:"可靠的-tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可靠的-tcp"}},[t._v("#")]),t._v(" 可靠的 TCP")]),t._v(" "),a("p",[t._v("TCP 的目的是提供可靠的数据传输，并在相互进行通信的设备或服务之间保持一个虚拟连接。TCP 在数据包接收无序、丢失或在交付期间被破坏时，负责数据恢复。它通过为其发送的每个数据包提供一个序号来完成此恢复。")]),t._v(" "),a("p",[t._v("为确保正确地接收数据，TCP 要求在目标计算机成功收到数据时发回一个确认（即 ACK）。如果在某个时限内未收到相应的 ACK，将重新传送数据包。即传说中的“三次握手”。"),a("br"),t._v("\n如果网络拥塞，这种重新传送将导致发送的数据包重复。但是，接收计算机可使用数据包的序号来确定它是否为重复数据包，并在必要时丢弃它。")]),t._v(" "),a("h3",{attrs:{id:"三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),a("p",[t._v("所谓三次握手(Three-way Handshake)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送 3 个包。")]),t._v(" "),a("p",[t._v("三次握手的目的是连接服务器指定端口，建立 TCP 连接,并同步连接双方的序列号和确认号并交换 TCP 窗口大小信息.在 socket 编程中，客户端执行 connect()时，将触发三次握手：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/100327002629.png",alt:"images"}})]),t._v(" "),a("p",[t._v("完整的过程如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/0_131271823564Rx.gif",alt:"images"}})]),t._v(" "),a("h2",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),a("p",[t._v("说到网络通信，又怎能少了 DNS 呢？"),a("br"),t._v('\nDNS 的全称是 Domain Name System。它负责把 FQDN(就是以"."分隔结尾的名字)翻译成一个 IP。'),a("br"),t._v("\n让用户电脑和服务器（网页存放电脑）连接起来并不是靠域名进行，网络上计算机之间实现连接是通过每台计算机在网络中拥有的惟一的 IP 地址来完成的。")]),t._v(" "),a("p",[t._v("DNS 速度优化是网站优化 SEO 中的一部分，优化 DNS 解析就必须了解 DNS 解析原理及过程。")]),t._v(" "),a("p",[t._v("当用户访问我们网站一个网页时，他需要经过以下步骤：")]),t._v(" "),a("ol",[a("li",[t._v("找到这个网页的存放服务器；")]),t._v(" "),a("li",[t._v("服务器将用户的请求信息接入；")]),t._v(" "),a("li",[t._v("服务器通过文件路径（URL）查找用户请求网页；")]),t._v(" "),a("li",[t._v("用户将该网页内容下载到自己电脑上。")])]),t._v(" "),a("p",[t._v("我们所讲的 DNS 解析主要是第一个步骤，即让用户通过 URL 找到文件存放的服务器。")]),t._v(" "),a("p",[t._v("DNS 解析主要有递归查询，就是在某个 DNS 服务器缓存中查找不到相应的域名与 IP 地址对应关系时，自动跳转到到下一步骤通过下一个 DNS 服务器进行查找。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wiki-TCP/IP 协议族"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/zmlctt/p/3690998.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《TCP 三次握手四次挥手详解》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ecdoer.com/post/dns.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《DNS 解析过程原理【深入浅出详解】》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.jianshu.com/p/4394aaf97492",target:"_blank",rel:"noopener noreferrer"}},[t._v("《DNS 服务原理详解》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://godbasin.github.io/2017/05/19/front-end-notes-6-network-protocol/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「网络协议基础」》"),a("OutboundLink")],1)])]),t._v(" "),a("h1",{attrs:{id:"结束语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),a("p",[t._v("这一节主要进行了网络间通信以及 TCP/IP 协议，以及 DNS 的介绍，关于 TCP/IP 相关的有幸当年在第一家公司学过，虽然也忘得差不多了。")])])}),[],!1,null,null,null);r.default=v.exports}}]);