---
id: index
sidebar_position: 1
---

# LaTeX 介绍

## TeX是啥？

TeX（/tɛx/，常被读作/tɛk/，写作 $\TeX$ ），是一个由美国电脑教授高德纳（Donald Ervin Knuth）编写的排版软件。 $\TeX$ 是一款自由软件。它在学术界特别是数学、物理学和电脑科学界十分流行。 $\TeX$ 被普遍认为是一个优秀的排版工具，尤其是对于复杂**数学公式**的处理。 $\TeX$ 能够排版出精美的文本以帮助人们辨认和查找。

## 谁是高德纳？

![](./img/KnuthAtOpenContentAlliance.jpg)

高德纳（英语：Donald Ervin Knuth，音译：唐纳德·尔文·克努斯，1938年1月10日－），出生于美国密尔沃基，斯坦福大学计算机系教授。高德纳教授为现代计算机科学先驱，创造了算法分析的领域，在数个理论电脑科学的分支做出基石一般的贡献。在电脑科学及数学领域发表了多部具广泛影响的论文和著作。**1974年计算机图灵奖得主**（图灵奖可以简单认为是计算机领域的诺贝尔奖

## 为啥老爷子要发明TeX?

1962年，高德纳还是个研究生的时候就开始写一本在计算机界很有名的书————《计算机程序设计艺术》（老爷子因为这本书拿了图灵奖）。1968年，初版问世。在这之前，他给了出版商Addison-Wesley几千页手写书稿，出版商用的是传统金属排版设备，需要专业人员手动操作。那时候，电脑上还没有图形界面。书里面有各种编程示例，高德纳就一点一点向排版人描述，他到底想要怎样的效果。成书的时候，他很满意。转折发生在1976年，这本书准备再版，扩充了一些内容。这一次，出版商改用了便宜的电子排版方法，当老爷子收到他的巨著《计算机编程艺术》的第一页样张，他发现排版“丑陋得让人失望”，于是老爷子就开始编写 $\TeX$。

老爷子原本计划在1978年的学术休假时完成这项工作，但事实上，老爷子搁置《计算机编程艺术》的写作花了近 10 年时间开发了可以用的 $\TeX$。

:::tip
不仅仅你头疼文章排版问题，大佬也头疼。区别在于你只能抱怨，大佬就一言不合自己写一套如今全世界广泛使用的排版软件。

《计算机编程艺术》计划出版7卷，目前80多岁高龄的老爷子还在写第四卷。以下是这本计算机科学领域鸿篇巨著的各卷安排：

**已完成**
1. Volume 1 – Fundamental Algorithms
    - Chapter 1 – Basic concepts
    - Chapter 2 – Information structures
2. Volume 2 – Seminumerical Algorithms
    - Chapter 3 – Random numbers
    - Chapter 4 – Arithmetic
3. Volume 3 – Sorting and Searching
    - Chapter 5 – Sorting
    - Chapter 6 – Searching
4. Volume 4A – Combinatorial Algorithms
    - Chapter 7 – Combinatorial searching (part 1)
5. Volume 4B – Combinatorial Algorithms
    - Chapter 7 – Combinatorial searching (part 2)

**计划**

6. Volume 4C... – Combinatorial Algorithms (chapters 7 & 8 released in several subvolumes)
    - Chapter 7 – Combinatorial searching (continued)
    - Chapter 8 – Recursion
7. Volume 5 – Syntactic Algorithms
    - Chapter 9 – Lexical scanning (also includes string search and data compression)
    - Chapter 10 – Parsing techniques
8. Volume 6 – The Theory of Context-Free Languages
9. Volume 7 – Compiler Techniques
:::


## LaTeX又是啥？

LaTeX（/ˈlɑːtɛx/，常被读作/ˈlɑːtɛk/或/ˈleɪtɛk/，写作 $\LaTeX$ ），是一种基于 $\TeX$ 的排版系统。 $\TeX$ 的命令集，都是偏低层 (Low-Level) 的，适合高德纳教授这样，希望从细节上把握排版效果的人类。但这几百个命令，对于大多数人来说，可能还是太多了。

美国计算机科学家莱斯利·兰伯特在20世纪80年代初期计划写一本 “美国并发系统大典”（很可能是开玩笑）。兰伯特用 $\TeX$ 做录入和排版。兰伯特用 $\TeX$ 觉得还缺点什么，本着“能让计算机来做的决定，就不要问我”原则，就在 $\TeX$ 上自己写了一套“宏”，于是就形成了自己的 $\LaTeX$ ，“L”是他姓氏的首字母。

![](./img/Leslie_Lamport.jpg)

 $\LaTeX$ 提供了一套针对文档逻辑结构的控制序列, 让 $\TeX$ 变得更好用, 普通用户即便不是很了解 $\TeX$ ，也可以在很短的时间制作出高质量的排版结果, 因此迅速在计算机科学、数学及相关学科领域得到推广应用。

## 为什么是 $\LaTeX$ ?

- 继承了 $\TeX$ 的高质量排版优点
- 自动编号: 章节、图表、公式定理、参考文献、···
- 自动生成目录、索引
- 公式、定理、参考文献、插图、页码等可以 交叉引用 
- 可以通过**各种宏包**扩展其功能, 实现各种特殊要求

##  $\LaTeX$  vs Word

- Word 简单易用，所见即所得 → 普通办公文档建议用 Word
- $\LaTeX$ 输出美观, 质量高 → 科技排版 (特别是数学) 推荐使用 $\LaTeX$ 
- $\LaTeX$ 能实现 Word 的所有功能, 定制性高, 但易用性不如 Word


## 谁在用 $\LaTeX$ ？

1. $\LaTeX$ 主要用户群: 高校和科研院所的科研人员和学生
2. 主要学科: 数学, 力学, 物理, 计算机等
3. 接受 $\LaTeX$ 投稿的出版机构
    - AMS (美国数学会)
    - SIAM (美国工业与应用数学学会) 
    - Springer
    - Elsevier
    - IEEE
    - Cambridge University Press
    - Kluwer Academic Publishers
    - Wiley
    - World Scientific
    - 。。。。。。

4. 国内各大知名高校都提供毕业论文的 $\LaTeX$ 模板，比如说：
    - 清华大学[ThuThesis](https://github.com/tuna/thuthesis)
    - 浙江大学[zjuthesis](https://github.com/TheNetAdmin/zjuthesis)
    - 复旦大学[fduthesis](https://github.com/stone-zeng/fduthesis)
    - 上海交通大学[SJTUThesis](https://github.com/sjtug/SJTUThesis)
    - 南京大学[NJUThesis](https://git.nju.edu.cn/nju-lug/nju-latex-templates/njuthesis)
    - 中国科学院大学[ucasthesis](https://github.com/mohuangrui/ucasthesis)
    - 南方科技大学[SUSTech LaTeX 模板](https://github.com/SUSTC/latex-template)
    - 。。。
    - 。。。
    - 。。。
    - **上海电力大学呢？** 目前还木有，纸上得来终觉浅团队正在开发中。。。*（希望可以做出来，而不是一直鸽着，做不出来也别打我们，逃～逃～逃～*

## 如何使用 $\LaTeX$ ？

一个 $\LaTeX$ 文档是一个以 .tex 结尾的文本文件，可以使用任意的文本编辑器编辑，比如记事本，但对于大多数人而言，使用一个合适的 $\LaTeX$ 编辑器会使得编辑的过程容易很多。在编辑的过程中你可以标记文档的结构。完成后你可以进行编译——这意味着将它转化为另一种格式的文档。它支持多种格式，但最常用的是 PDF 文档格式。

更多的使用方法，请仔细阅读本课程剩余的 $\LaTeX$ 部分的内容。