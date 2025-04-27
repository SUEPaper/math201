---
id: ref
sidebar_position: 14
---

# 引用

LaTeX 的“引用”功能是排版中的一个核心部分，广泛用于引用 公式、图表、章节、文献 等，能够自动编号、统一格式，非常适合学术写作。

LaTeX 的引用依赖两个关键命令：

- `\label{标识}` —— 定义一个引用标识（通常用于章节、图、表、公式等）。
- `\ref{标识}` —— 在文中引用该标识对应的编号。
-`\eqref{标识}` —— 特指引用公式，自动带括号（需要 `amsmath` 宏包）。

:::caution 

💡 编译顺序很重要：引用系统需要至少**编译两次**才能生成正确的编号。

:::

## 公式引用

在文件夹 `latex_learn`中创建一个名为 `ref_doc.tex` 的文件, 并在其中输入以下代码:

```latex
\documentclass{ctexart}
\usepackage{amsmath}
\usepackage{unicode-math}
\begin{document}
    \begin{equation}
    E_k = hv - W_0
    \label{eq:photoelectric}
    \end{equation}
    爱因斯坦的光电效应如式~\eqref{eq:photoelectric} 所示。
\end{document}
```
输入如下命令进行编译：

```bash
xelatex ref_doc.tex
xelatex ref_doc.tex
xelatex ref_doc.tex
```
这样才能确保编号、引用都正确生成。


## 图表引用

将`ref_doc.tex` 的代码修改如下，并编译运行:

```latex
\documentclass{ctexart}
\begin{document}
    \begin{figure}[htbp]
    \centering
    \includegraphics[width=0.5\textwidth]{example-image}
    \caption{光电效应示意图}
    \label{fig:photoelectric}
    \end{figure}

    如图~\ref{fig:photoelectric} 所示，电子被激发。

\end{document}
```

## 表格引用

将`ref_doc.tex` 的代码修改如下，并编译运行:

```latex
\documentclass{ctexart}
\usepackage{amsmath}
\usepackage{unicode-math}
\begin{document}
    \begin{table}[htbp]
    \centering
    \caption{常见物理常数}
    \label{tab:constants}
    \begin{tabular}{ll}
    \hline
    常数 & 数值 \\
    \hline
    普朗克常量 $h$ & $6.626 \times 10^{-34}$ Js \\
    \hline
    \end{tabular}
    \end{table}

    详见表~\ref{tab:constants}。
\end{document}
```

## 章节引用

将`ref_doc.tex` 的代码修改如下，并编译运行:

```latex
\documentclass{ctexart}
\begin{document}
    \section{实验方法}
    \label{sec:method}

    \section{结果分析}

    请参考第~\ref{sec:method}~节了解实验方法。
\end{document}
```

## 文献引用

见 [参考文献管理](./reference.md)。