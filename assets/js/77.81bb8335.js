(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{637:function(t,a,s){"use strict";s.r(a);var n=s(69),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("第三章介绍形状(shape)和刚体(body)，主要包括圆形、矩形、凸多边形，以及从形状到刚体。")]),t._v(" "),s("h2",{attrs:{id:"形状-刚体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#形状-刚体"}},[t._v("#")]),t._v(" 形状-刚体")]),t._v(" "),s("h3",{attrs:{id:"形状-刚体-关节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#形状-刚体-关节"}},[t._v("#")]),t._v(" 形状-刚体-关节")]),t._v(" "),s("p",[t._v("创建了 box2d 世界后，我们需要创建一些刚体和关节添加进去，比如游戏中的边界、元素等，使得世界更丰富一些。")]),t._v(" "),s("p",[t._v("接下来就创造一些基本形状，然后用这些形状组成刚体，刚体又可以进一步组合成关节，换言之，世界即是由刚体和关节组成的世界。")]),t._v(" "),s("p",[t._v("box2d 中创建刚体、关节的过程类似于堆积木，由形状构成刚体，由刚体构成关节，稍微不同的地方是，这里的形状可以多次使用，其过程：\n"),s("code",[t._v("形状 -> 刚体 -> 关节")])]),t._v(" "),s("p",[t._v("此处需要注意的是，box2d 只能创建顶点数不超过 8 的凸多边形。")]),t._v(" "),s("h2",{attrs:{id:"形状"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#形状"}},[t._v("#")]),t._v(" 形状")]),t._v(" "),s("h3",{attrs:{id:"关于"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),s("p",[t._v("形状就是物体上的碰撞几何结构。另外形状也用于定义物体的质量。也就是说，你来指定密度，Box2D 可以帮你计算出质量。")]),t._v(" "),s("p",[t._v("形状具有摩擦和恢复的性质。形状还可以携带筛选信息，使你可以防止某些游戏对象之间的碰撞。")]),t._v(" "),s("p",[t._v("形状永远属于某物体，单个物体可以拥有多个形状。形状是抽象类，所以在 Box2D 中可以实现许多类型的形状。如果你有勇气，那便可以实现出自己的形状类型(和碰撞算法)。")]),t._v(" "),s("h3",{attrs:{id:"形状性质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#形状性质"}},[t._v("#")]),t._v(" 形状性质")]),t._v(" "),s("ul",[s("li",[t._v("摩擦和恢复")])]),t._v(" "),s("p",[t._v("摩擦可以使对象逼真地沿其它对象滑动。Box2D 支持静摩擦和动摩擦，但使用相同的参数。")]),t._v(" "),s("p",[t._v("摩擦在 Box2D 中会被正确地模拟，并且摩擦力的强度与正交力(称之为库仑摩擦)成正比。摩擦参数经常会设置在 0 到 1 之间，0 意味着没有摩擦，1 会产生强摩擦。\n当计算两个形状之间的摩擦时，Box2D 必须联合两个形状的摩擦参数。")]),t._v(" "),s("p",[t._v("恢复可以使对象弹起，想象一下，在桌面上方丢下一个小球。恢复的值通常设置在 0 到 1 之间，0 的意思是小球不会弹起，这称为非弹性碰撞；1 的意思是小球的速度会得到精确的反射，这称为完全弹性碰撞。")]),t._v(" "),s("p",[t._v("当一个形状发生多碰撞时，恢复会被近似地模拟。这是因为 Box2D 使用了迭代求解器。当冲撞速度很小时，Box2D 也会使用非弹性碰撞，这是为了防止抖动。")]),t._v(" "),s("ul",[s("li",[t._v("密度")])]),t._v(" "),s("p",[t._v("Box2D 可以根据附加形状的质量分配来计算物体的质量以及转动惯量。")]),t._v(" "),s("p",[t._v("直接指定物体质量常常会导致不协调的模拟。因此，推荐的方法是使用 b2Body 来根据形状设置质量。")]),t._v(" "),s("h3",{attrs:{id:"形状定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#形状定义"}},[t._v("#")]),t._v(" 形状定义")]),t._v(" "),s("p",[t._v("形状定义用于创建形状。通用的形状数据会保存在 b2ShapeDef 中，特殊的形状数据会保存在其派生类中。")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("b2ShapeDef")])]),t._v(" "),s("ul",[s("li",[t._v("type 来表示形状类型")]),t._v(" "),s("li",[t._v("userdata 表示用户数据")]),t._v(" "),s("li",[t._v("localPosition 来表示当前位置")]),t._v(" "),s("li",[t._v("localRotation 来表示当前角度")]),t._v(" "),s("li",[t._v("friction、density、restitution 来表示摩擦力、密度、弹性系数")]),t._v(" "),s("li",[t._v("categoryBits 和 maskBits 来表示碰撞位及位标识（可以用来过滤一些碰撞）")]),t._v(" "),s("li",[t._v("groupIndex 来表示组号，这个组号可以用来过滤还比位标识优先")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("b2CircleDef")])]),t._v(" "),s("ul",[s("li",[t._v("继承于 b2ShapeDef")]),t._v(" "),s("li",[t._v("type 为 e_circleShape")]),t._v(" "),s("li",[t._v("radius 来表示半径值")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("b2BoxDef")])]),t._v(" "),s("ul",[s("li",[t._v("继承于 b2ShapeDef")]),t._v(" "),s("li",[t._v("type 为 e_ boxShape")]),t._v(" "),s("li",[t._v("extents 来表示区域值")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("b2PolyDef")])]),t._v(" "),s("ul",[s("li",[t._v("继承于 b2ShapeDef")]),t._v(" "),s("li",[t._v("type 为 e_ polyShape")]),t._v(" "),s("li",[t._v("vertices 来表示顶点")]),t._v(" "),s("li",[t._v("vertexCount 来表示顶点数，目前顶点数最多支持 8 个")])])])]),t._v(" "),s("h2",{attrs:{id:"矩形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#矩形"}},[t._v("#")]),t._v(" 矩形")]),t._v(" "),s("h3",{attrs:{id:"b2boxdef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b2boxdef"}},[t._v("#")]),t._v(" b2BoxDef")]),t._v(" "),s("p",[t._v("使用基类 b2BoxDef 创建一个矩形形状，并且设置其大小、密度、弹性、摩擦力等属性。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("b2BoxDef")]),t._v(" "),s("ul",[s("li",[t._v("继承于 b2ShapeDef")]),t._v(" "),s("li",[t._v("type 为 e_ boxShape")]),t._v(" "),s("li",[t._v("extents 来表示区域值")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Shape "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2BoxDef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个形状Shape，然后设置有关Shape的属性")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置矩形高、宽,")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("density "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置矩形的密度")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restitution "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置矩形的弹性")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("friction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置矩形的摩擦因子，可以设置为0-1之间任意一个数，0表示光滑，1表示强摩擦")]),t._v("\n")])])]),s("p",[t._v("备注：如果将密度设置为 0 或者 null，那么该形状是静止，即不可被移动的地面或者墙体等。")]),t._v(" "),s("h2",{attrs:{id:"圆形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#圆形"}},[t._v("#")]),t._v(" 圆形")]),t._v(" "),s("h3",{attrs:{id:"b2circledef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b2circledef"}},[t._v("#")]),t._v(" b2CircleDef")]),t._v(" "),s("p",[t._v("使用基类 b2CircleDef 创建一个圆形形状，并且设置其属性。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("b2CircleDef")]),t._v(" "),s("ul",[s("li",[t._v("继承于 b2ShapeDef")]),t._v(" "),s("li",[t._v("type 为 e_circleShape")]),t._v(" "),s("li",[t._v("radius 来表示半径值")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Shape "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2CircleDef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个圆形Shape，然后设置有关Shape的属性")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("radius "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置圆形的半径")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localPosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置圆形的偏移量")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("density "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置圆形的密度")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restitution "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置圆形的弹性")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("friction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置圆形的摩擦因子")]),t._v("\n")])])]),s("h2",{attrs:{id:"凸多边形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#凸多边形"}},[t._v("#")]),t._v(" 凸多边形")]),t._v(" "),s("h3",{attrs:{id:"b2polydef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b2polydef"}},[t._v("#")]),t._v(" b2PolyDef")]),t._v(" "),s("p",[t._v("使用基类 b2PolyDef 创建一个多边形形状，并且设置其属性。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("b2PolyDef")]),t._v(" "),s("ul",[s("li",[t._v("继承于 b2ShapeDef")]),t._v(" "),s("li",[t._v("type 为 e_ polyShape")]),t._v(" "),s("li",[t._v("vertices 来表示顶点")]),t._v(" "),s("li",[t._v("vertexCount 来表示顶点数，目前顶点数最多支持 8 个")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Shape "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2PolyDef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个多边形Shape，然后设置有关Shape的属性")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertexCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置多边形的顶点数，这里设置为5，意味着Shape是个五边形")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2Vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分别定义五个顶点的坐标")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2Vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2Vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2Vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2Vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localPosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置多边形的偏移量")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("density "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置多边形的密度")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restitution "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置多边形的弹性")]),t._v("\nShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("friction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置多边形的摩擦因子")]),t._v("\n")])])]),s("p",[t._v("注意：box2d 只能创建顶点数不超过 8 的凸多边形。")]),t._v(" "),s("p",[t._v("多形状刚体中形状的偏移，在多个形状所组成的刚体中，所有形状的中心点都是刚体的初始位置，我们可以设置偏移量使形状偏移中心点。")]),t._v(" "),s("h2",{attrs:{id:"刚体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刚体"}},[t._v("#")]),t._v(" 刚体")]),t._v(" "),s("h3",{attrs:{id:"刚体定义-b2bodydef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刚体定义-b2bodydef"}},[t._v("#")]),t._v(" 刚体定义(b2BodyDef)")]),t._v(" "),s("p",[t._v("在创建刚体之前你需要创建一个刚体定义(b2BodyDef)。你可以把刚体定义创建在栈上，也可以在你的游戏数据结构中保存它们。这取决于你的选择。\nBox2D 会从刚体定义中拷贝出数据，这意味着你可以循环使用一个刚体定义去创建多个刚体。")]),t._v(" "),s("ul",[s("li",[t._v("质量性质")])]),t._v(" "),s("p",[t._v("有多种建立刚体质量性质的方法：")]),t._v(" "),s("ol",[s("li",[t._v("在刚体定义中显式地设置")]),t._v(" "),s("li",[t._v("显式地在刚体上设置(在其创建之后)")]),t._v(" "),s("li",[t._v("基于刚体上形状之密度设置\n在很多游戏环境中，根据形状密度计算质量是有意义的。这能帮助确保刚体有合理和一致的质量。然而，其它游戏环境可能需要指定质量值。例如，可能你有一个机械装置，需要一个精确的质量。")])]),t._v(" "),s("ul",[s("li",[t._v("位置和角度")])]),t._v(" "),s("p",[t._v("物体定义为你提供了一个在创建时初始化位置的机会，这要比在世界原点创建物体而后移动它到某个位置更具性能。")]),t._v(" "),s("p",[t._v("一个物体上主要有两个令人感兴趣的点。其中一个是物体的原点，形状和关节都相对于物体的原点而被附加。另一个点是物体的质心。质心取决于物体上形状的质量分配，或显式地由 b2MassData 设置。\nBox2D 内部的许多计算都要使用物体的质心，例如 b2Body 会存储质心的线速度。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("bodyDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置刚体的初始位置")]),t._v("\n")])])]),s("p",[t._v("当你构造物体定义的时候，可能你并不知道质心在哪里，因此你会指定物体的原点。你可能也会以弧度指定物体的角度，角度并不受质心位置的影响。\n如果随后你改变了物体的质量性质，那么质心也会随之移动，但是原点以及物体上的形状和关节都不会改变。")]),t._v(" "),s("ul",[s("li",[t._v("阻尼")])]),t._v(" "),s("p",[t._v("阻尼用于减小物体在世界中的速率。阻尼与摩擦是不同的，因为摩擦仅在物体有接触的时候才会发生，而阻尼的模拟要比摩擦便宜多了。然而，阻尼并不能取代摩擦，往往这两个效果需要同时使用。")]),t._v(" "),s("p",[t._v("阻尼参数的范围可以在 0 到无穷之间，0 的就是没有阻尼，无穷就是满阻尼。通常来说，阻尼的值应该在 0 到 0.1 之间，我通常不使用线性阻尼，因为它会使物体看起来发飘。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("bodyDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linearDamping "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbodyDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("angularDamping "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("阻尼相似于稳定性与性能，阻尼值较小的时候阻尼效应几乎不依赖于时间步，而阻尼值较大的时候阻\n尼效应将随着时间步而变化。")]),t._v(" "),s("ul",[s("li",[t._v("休眠参数")])]),t._v(" "),s("p",[t._v("休眠是什么意思？好的。模拟物体的成本是高昂的，所以如果物体更少，那模拟的效果就能更好。当一个物体停止了运动时，我们喜欢停止去模拟它。")]),t._v(" "),s("p",[t._v("当 Box2D 确定一个物体(或一组物体)已经停止移动时，物体就会进入休眠状态，消耗很小的 CPU 开销。如果一个醒着的物体接触到了一个休眠中的物体，那么休眠中的物体就会醒来。当物体上的关节或触点被摧毁的时候，它们同样会醒来。你也可以手动地唤醒物体。\n通过物体定义，你可以指定一个物体是否可以休眠，或者创建一个休眠的物体。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("bodyDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allowSleep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbodyDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isSleeping "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"由形状到刚体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#由形状到刚体"}},[t._v("#")]),t._v(" 由形状到刚体")]),t._v(" "),s("h3",{attrs:{id:"b2bodydef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b2bodydef"}},[t._v("#")]),t._v(" b2BodyDef")]),t._v(" "),s("p",[t._v("之前虽然创建了形状，但是这些形状并不会直接在世界里面显示出来。")]),t._v(" "),s("p",[t._v("下面利用这些形状来组成一些刚体，然后把它们放入到世界里面去。")]),t._v(" "),s("p",[t._v("首先，利用 b2BodyDef 创建一个刚体，然后设置刚体的初始位置并加入之间已创建的形状，然后使用 CreateBody 将刚体放入到世界里面，这样就可以看到一些模拟刚体了。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" BodyDef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2BodyDef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 利用b2BodyDef类创建一个刚体")]),t._v("\nBodyDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置刚体的初始位置，这里把BodyDef放在（0，600）")]),t._v("\nBodyDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddShape")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在刚体BodyDef中加入形状Shape")]),t._v("\nBody "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateBody")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BodyDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把刚体BodyDef放到world中")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);