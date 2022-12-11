---
id: versions
sidebar_position: 2
---

# 什么是TeX 引擎、格式、发行版

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

### Texlive VS Miktex

Texlive包比较全，但是非常大，整个安装包超过5G。

Miktex占用空间比较小，遇到需要的包会自动在线下载。


### 建议安装版本

强烈建议使用最小化安装的发行版本，即使用Miktex，避免安装一大堆几乎不会用到的宏包。不同操作系统的建议如下：

- Windows 和 Linux: [Miktex](https://miktex.org/download)
- MacOS:  [BasicTeX](https://tug.org/mactex/morepackages.html) (MacOS不建议使用Miktex)

### Latex的文本编辑器

Latex常见的文本编辑器有如下：
 
1. Texsudio
2. WinEdt(付费软件)
3. Visual Studio Code(作者强烈推荐)
4. Emacs

[本文大部分内容转载自此链接](https://liam.page/2018/11/26/introduction-to-TeX-engine-format-and-distribution/)