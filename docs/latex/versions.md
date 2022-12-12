---
id: versions
sidebar_position: 2
---

# 什么是TeX 引擎、格式、发行版

本文参考: 
1. [TeX 引擎、格式、发行版之介绍](https://liam.page/2018/11/26/introduction-to-TeX-engine-format-and-distribution/)
2. [CTeX套装](https://ctex.org/ctex/)
3. [一份其实很短的 LaTeX 入门文档](https://liam.page/2014/09/08/latex-introduction/)

## 引擎
与通常用的编程语言的编译器相对应——如 C++ 的 gcc/icc/cl、Java 的 javac——TeX 的「编译器」的真名叫做「TeX 引擎」。TeX 引擎大概有如下一些选择：

- Knuth TeX
- e-TeX
- pdfTeX
- LuaTeX
- XeTeX
- pTeX
- upTeX
- e-upTeX
- pTeX-ng


### TeX - LaTeX
TeX 是高德纳（Donald Ervin Knuth，1938年1月10日 --）教授追求完美(愤世嫉俗)做出来的排版引擎，同时也是该引擎使用的标记语言（Markup Language）的名称。这里所谓的引擎，是指能够实现断行、分页等操作的程序（请注意这并不是定义）；这里的标记语言，是指一种将控制命令和文本结合起来的格式，它的主体是其中的文本而控制命令则实现一些特殊效果（同样请注意这并不是定义）。

你可以在这里找到关于 TeX 引擎的具体描述；

你可以在这里找到关于标记语言的具体描述。

而 LaTeX 则是 L. Lamport （1941年2月7日 -- ） 教授开发的基于 TeX 的排版系统。实际上 LaTeX 利用 TeX 的控制命令，定义了许多新的控制命令并封装成一个可执行文件。这个可执行文件会去解释 LaTeX 新定义的命令成为 TeX 的控制命令，并最终交由 TeX 引擎进行排版。

实际上，LaTeX 是基于一个叫做 plain TeX 的格式的。plain TeX 是高德纳教授为了方便用户，自己基于原始的 TeX 定义的格式，但实际上 plain TeX 的命令仍然十分晦涩。至于原始的 TeX 直接使用的人就更少了，因此 plain TeX 格式逐渐就成为了 TeX 格式的同义词，尽管他们事实上是不同的。

因此在 TeX - LaTeX 组合中，

1. 最终进行断行、分页等操作的，是 TeX 引擎；
2. LaTeX 实际上是一个工具，它将用户按照它的格式编写的文档解释成 TeX 引擎能理解的形式并交付给 TeX 引擎处理，再将最终结果返回给用户。

### pdfTeX - pdfLaTeX

TeX 系统生成的文件是 dvi 格式，虽然可以用其他程序将其转换为例如 pdf 等更为常见的格式，但是毕竟不方便。

dvi 格式是为了排版而产生的，它本身并不支持所谓的「交叉引用」，pdfTeX 直接输出 pdf 格式的文档，这也是 pdfTeX 相对 TeX 进步（易用性方面）的地方。

为了解决这个问题，Hàn Thế Thành 博士在他的博士论文中提出了 pdfTeX 这个对 TeX 引擎的扩展。二者最主要的差别就是 pdfTeX 直接输出 pdf 格式文档，而 TeX 引擎则输出 dvi 格式的文档。

pdfTeX 的信息可以查看wiki.

pdfLaTeX 这个程序的主要工作依旧是将 LaTeX 格式的文档进行解释，不过此次是将解释之后的结果交付给 pdfTeX 引擎处理。


### XeTeX - XeLaTeX

高德纳教授在实现 TeX 的当初并没有考虑到中日韩等字符的处理，而只支持 ASCII 字符。这并不是说中日韩字符就无法使用 TeX 引擎排版了，事实上 TeX 将每个字符用一个框包括起来（这被称为盒子）然后将一个个的盒子按照一定规则排列起来，因而 TeX 的算法理论上适用于任何字符。ASCII 字符简单理解，就是在半角模式下你的键盘能直接输出的字符。

在 XeTeX 出现之前，为了能让 TeX 系统排版中文，国人曾使用了 天元、CCT、CJK 等手段处理中文。其中 天元和CCT 现在已经基本不用，CJK 因为使用时间长且效果相对较好，现在还有人使用。

不同于 CJK 等方式使用 TeX 和 pdfTeX 这两个不直接支持 Unicode 字符的引擎，XeTeX 引擎直接支持 Unicode 字符。也就是说现在不使用 CJK 也能排版中日韩文的文档了，并且这种方式要比之前的方式更加优秀。

XeLaTeX 和 XeTeX 的关系与 pdfLaTeX 和 pdfTeX 的关系类似，这里不再赘述。

使用 XeTeX 引擎需要使用 UTF-8 编码。

所谓编码就是字符在计算机储存时候的对应关系。例如，假设有一种编码，将汉字「你」对应为数字「1」；「好」对应为数字「2」，则含有「你好」的纯文本文件，在计算机中储存为「12」（读取文件的时候，将「12」再转换为「你好」显示在屏幕上或打印出来）。

UTF-8 编码是 Unicode 编码的一种，可以参考它的 wiki.




其中，Knuth TeX 是高德纳的原版 TeX，现在你基本已经找不到它了。

e-TeX 是目前事实上的「标准」TeX。尽管它名字中的「e」表示的是「extended」。几乎所有的后续的 TeX 编译器都是在 e-TeX 基础上开发的。

pdfTeX 是西文世界最常用的 TeX 编译器。通常来说，西文期刊的模板，用 pdfTeX 作为编译器编译不会错。

LuaTeX 则是作为 pdfTeX 正统后继者出现的。它给 TeX 加入了 Lua 脚本的支持，同时原生支持 Unicode。它可以通过 Lua 回调加入编译器级别的 CJK 字符支持；虽然这样子处理，编译起来效率很低速度很慢。

XeTeX 是 e-TeX 的另一个分支扩展。它也原生支持 Unicode，并且和 LuaTeX 一样，支持直接调用系统里的字体。目前推荐的中文支持办法，是在 XeTeX 引擎上，使用宏的方式解决的。（xeCJK宏包）

pTeX 及后续的 TeX 引擎，我们习惯称之为「pTeX 系引擎」。这里的「p」是「publish」的缩写。看得出来，pTeX 的日本作者们「野心」很大的，想要做成一个出版工业级的引擎。pTeX 系引擎里，目前用得最广泛的是 e-upTeX。它可以较好地支持 CJK 字符。不过由于是日本人开发的，所以对日语支持是最好的。用来撰写中文文档，跟我们的习惯有些出入，需要有丰富的经验才能驾驭。pTeX-ng 则是 pTeX 系引擎的新贵，它是由国人Clerk Ma 开发的引擎。其中「ng」是「next generation」的缩写。从命名来看，果然还是要「秒杀」一下我们的邻居的。pTeX-ng 已经相对成熟，不过我用得很少，故不展开。关于 pTeX 系引擎，我有翻译过一系列文章（在此）。

小结一下。Knuth TeX 是祖宗，目前已被供起来，不太会被用到。e-TeX 开创了新世纪，不过裸用 e-TeX 也很少。pdfTeX 在西文世界里被广泛使用，也很稳定。LuaTeX 是 pdfTeX 的「正统」继承者，不过编译起来慢慢慢。用 XeTeX 来支持中文比较成熟，在中文世界里被推荐使用。pTeX 系引擎源自日本，感兴趣的可以玩一玩。

## 格式

TeX 是一个「宏语言」。当你制作了一些特别基础的宏，那么你可以将其发布为一个「格式」（format）。建立在 TeX 之上，有常用的格式：

- plain TeX：这是 Knuth 搞出来的格式，最为基础。
- LaTeX：这是兰伯特搞出来的格式，使用最为广泛。
- ConTeXt：这也是一个格式。不过我基本没用过。

你在某个格式之上写作文档（manuscript）时，你需要先告诉 TeX 引擎你要载入哪个格式。因为格式使用得太频繁了，所以人们倾向于把格式和引擎打包在一起。这样，就不用每次都告诉 TeX 引擎这件事情了。以 LaTeX 为例，将它与上述引擎打包在一起之后，我们有了：

- e-TeX -> LaTeX
- pdfTeX -> pdfLaTeX
- LuaTeX -> LuaLaTeX
- XeTeX -> XeLaTeX
- pTeX -> pLaTeX
- upTeX -> upLaTeX
- e-upTeX -> e-upLaTeX
- pTeX-ng -> pLaTeX-ng

尽管真正的「编译器」应该是「TeX 引擎」这一概念。但实际上，在日常沟通中，我们说的「怎么编译」，应当指的是这些「格式与引擎相结合」的产物。

于是，再小结一下：

- 西文文档：pdfLaTeX、XeLaTeX
- 中文文档：XeLaTeX
- 考古者：LaTeX
- 好奇心者：LuaLaTeX、pLaTeX-ng
- 好奇心爆棚者：pLaTeX、upLaTeX、e-upLaTeX

## 发行版

回到「宏」的问题上来。当你写了一些具有特定功能的宏，你会考虑将其发布为宏包（style package）或者文档类（document class）。也因此，当你想要用某些特定功能，你会倾向于去寻找宏包或者文档类，而不是自己造轮子。若是你每次寻找宏包，都要去互联网上爬文、下载、安装、调试、使用。那么多试几次，你一定会崩溃。

这引出了「TeX 发行版（distribution）」或者「TeX 系统（system）」或者「TeX 套装（suite）」的概念，表示上述所有引擎、格式、宏包，还有一些为了简便未在此处介绍的驱动、辅助工具，的集合。一般来说 TeX 发行版是用户真正需要安装的东西。也就是说，讨论「新手应该安装什么」的时候，我们实际上讨论的是「新手应该安装什么 TeX 发行版」。

### Texlive VS MiKTeX VS CTeX

Texlive包比较全，但是非常大，整个安装包超过5G。

MiKTeX占用空间比较小，遇到需要的包会自动在线下载。

CTeX中文套装在 MiKTeX 的基础上增加了对中文的完整支持。

[为什么不推荐安装CTeX](https://zhuanlan.zhihu.com/p/45174503)

### 建议安装版本

强烈建议使用最小化安装的发行版本，即使用MiKTeX，避免安装一大堆几乎不会用到的宏包，节省磁盘空间。不同操作系统的建议如下：

- Windows 和 Linux: [MiKTeX](https://miktex.org/download)
- MacOS:  [BasicTeX](https://tug.org/mactex/morepackages.html)

### Latex的文本编辑器

Latex常见的文本编辑器有如下：
 
1. TeXsudio
2. WinEdt(付费软件)
3. Visual Studio Code(作者强烈推荐)
4. Emacs(神之编辑器)
5. Vim(编辑器之神)
