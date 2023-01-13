---
id: captions
sidebar_position: 1
---

# 文章的结构
从begin{document}开始，我们就走出了导言区。而对于一篇文章来说，它有标题，摘要，目录，正文，参考文献以及附录。下面我们需要利用代码来对他们进行实现。

## 标题
文章的标题通常需要在导言区设置好，可以通过如下命令实现：
```latex
\documentclass[UTF8,12pt,a4paper,space]{ctexart}
\title{文章标题}

\begin{document}
\maketitle
\end{document}
```
## 摘要
对于摘要而言，通常只需要一个abstract环境即可实现:
```latex
\begin{abstract}
    这是摘要内容
\end{abstract}
```
而如果ctexart提供的并不是我们想要的样式，可以通过自定义格式来实现，但是这并不是我们入门教程讨论的，感兴趣可以自行研究。

## 目录
目录的设置更为简单，只需要我们在正文中设置好文章的层次，在通过一个命令即可实现:
```latex
\tableofcontents
```

## 正文
在正文中，我们需要设置好每个层次的标题，ctexart中供提供了3个层次的标题，命令如下：
```latex
\section{一级标题}
\subsection{二级标题1}
\subsubsection{三级标题1-1}
\subsubsection{三级标题1-2}
\subsection{二级标题2}
\subsubsection{三级标题2-1}
\subsubsection{三级标题2-2}
```

## 参考文献
参考文献的引用可以通过如下命令实现：
```latex
\begin{thebibliography}{99}
\bibitem{自定义名称1}文献引用1
\bibitem{自定义名称2}文献引用2
\end{thebibliography}
```
而在正文中，可以通过\cite{自定义名称}来进行引用，需要注意的是正文中引用的序号是上述代码中其所处的位置所决定。

## 附录
附录的实现需要宏包appendix，可以使用如下命令实现附录：
```latex
\begin{appendix}
\section{内容1}
\section{内容2}
\end{appendix}
```

## 总结
最后，综合上述代码来实现一篇文章结构如下：
```latex
\documentclass[UTF8,12pt,a4paper,space]{ctexart}
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