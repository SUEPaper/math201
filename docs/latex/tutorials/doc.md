---
id: docs
sidebar_position: 1
---

# 文章结构

从 `begin{document}`开始，我们就走出了导言区。而对于一篇文章来说，它有标题，摘要，目录，正文，参考文献以及附录。下面我们需要利用代码来对他们进行实现。

## 标题

文章的标题通常需要在导言区设置好，标题可以用`\title{}`设置，作者可以用`\author`设置，日期可以用`\date{}`设置，这些都需要放在导言区。为了在文档中显示标题信息，需要使用`\maketitle`。

在文件夹 `latex_learn`中创建一个名为 `content_doc.tex` 的文件, 并在其中输入以下代码:

```latex
\documentclass{ctexart}
% 导言区
\title{我的第一个\LaTeX 文档}
\author{SUEP}
\date{\today}

\begin{document}

\maketitle

这里是正文. 

\end{document}
```

## 摘要

对于摘要而言，通常只需要一个 abstract 环境即可实现:

```latex
\begin{abstract}
    这是摘要内容
\end{abstract}
```

而如果 `ctexart` 提供的并不是我们想要的样式，可以通过自定义格式来实现，但是这并不是我们入门教程讨论的，感兴趣可以自行研究。


## 正文

正文可以直接在`document`环境中书写，没有必要加入空格来缩进，因为文档默认会进行首行缩进。相邻的两行在编译时仍然会视为同一段。在LaTeX中，另起一段的方式是使用一行相隔，例如：

```latex
我是第一段.。

我是第二段。
```

这样编译出来就是两个段落。在正文部分，多余的空格、回车等等都会被自动忽略，这保证了全文排版不会突然多出一行或者多出一个空格。另外，另起一页的方式是：

```latex
\newpage
```

## 章节

在正文中，我们需要设置好每个层次的标题，`ctexart` 中供提供了 3 个层次的章节：分别用`\section{}`、`\subsection{}`、`\subsubsection{}`命令来标记。将`content_doc.tex` 代码更改成如下并编译：

```latex
\documentclass{ctexart}
% 导言区

\title{我的第一个\LaTeX 文档}
\author{SUEP}
\date{\today}

\begin{document}

\maketitle

\section{一级标题}

\subsection{二级标题}

这里是正文. 

\subsection{二级标题}

这里是正文. 

\section{一级标题}
\subsection{二级标题1}
\subsubsection{三级标题1-1}
\subsubsection{三级标题1-2}
\subsection{二级标题2}
\subsubsection{三级标题2-1}
\subsubsection{三级标题2-2}

\end{document}
```

## 目录

在有了章节的结构之后，使用`\tableofcontents`命令就可以在指定位置生成目录。通常带有目录的文件需要编译两次，因为需要先在目录中生成`.toc`文件，再据此生成目录。

将`content_doc.tex` 代码更改成如下：

```latex
\documentclass{ctexart}
% 导言区

\title{我的第一个\LaTeX 文档}
\author{SUEP}
\date{\today}

\begin{document}

\maketitle

\tableofcontents

\section{一级标题}

\subsection{二级标题}

这里是正文. 

\subsection{二级标题}

这里是正文. 

\section{一级标题}
\subsection{二级标题1}
\subsubsection{三级标题1-1}
\subsubsection{三级标题1-2}
\subsection{二级标题2}
\subsubsection{三级标题2-1}
\subsubsection{三级标题2-2}

\end{document}
```

运行如下命令进行编译：

```bash
xelatex content_doc.tex
xelatex content_doc.tex
```

## 参考文献

参考文献的引用可以通过如下命令实现：

```latex
\begin{thebibliography}{99}
\bibitem{自定义名称1}文献引用1
\bibitem{自定义名称2}文献引用2
\end{thebibliography}
```

而在正文中，可以通过`\cite{自定义名称}`来进行引用，需要注意的是正文中引用的序号是上述代码中其所处的位置所决定。

## 附录

附录的实现需要宏包 `appendix`，将`content_doc.tex` 代码更改成如下并编译：

```latex
\documentclass{ctexart}
\usepackage{appendix}
% 导言区
\title{我的第一个\LaTeX 文档}
\author{SUEP}
\date{\today}

\begin{document}
    \maketitle
    \section{一级标题}
    \subsection{二级标题}
    这里是正文.
    \subsection{二级标题}
    这里是正文.
    \begin{appendix}
    \section{内容1}
    \section{内容2}
    \end{appendix}
\end{document}
```

## 总结

最后，综合上述代码来实现一篇文章结构如下：

:::caution

需要注意的事情是，此代码加入了参考文献(更多的参考文献编译方式可参照各个 LaTeX 模板的指南)和目录结构，因此需要在命令行中执行两次如下命令进行编译(_假设你的代码文件名字是 main.tex_ <**如何使用命令行？？？这么愚蠢的问题你还问？？？我们已经和各大搜索引擎达成战略合作**>

```sh
xelatex main.tex
```

:::

```latex
\documentclass[UTF8,12pt,a4paper]{ctexart}
\usepackage{fontspec}
\setmainfont{SimSun}
\usepackage{times}
\usepackage{appendix}
\title{标题}

\begin{document}

% 标题
\maketitle

% 摘要
\begin{abstract}
    这是摘要
\end{abstract}

% 目录
\tableofcontents

% 正文
\section{一级标题}
正文\cite{自定义名称1}
\subsection{二级标题1}
正文
\subsubsection{三级标题1-1}
正文
\subsubsection{三级标题1-2}
正文
\subsection{二级标题2}
正文\cite{自定义名称2}
\subsubsection{三级标题2-1}
正文
\subsubsection{三级标题2-2}
正文

% 参考文献
\begin{thebibliography}{99}
    \bibitem{自定义名称1}罗军舟,金嘉晖,宋爱波,东方.云计算:体系架构与关键技术[J].通信学报,2011,32(07):3-21.
    \bibitem{自定义名称2}柏建彪,侯朝炯,黄汉富.沿空掘巷窄煤柱稳定性数值模拟研究[J].岩石力学与工程学报,2004(20):3475-3479.
\end{thebibliography}

% 附录
\begin{appendix}
\section{附录1}
\subsection{程序代码}
代码
\section{附录2}
\end{appendix}

\end{document}
```
