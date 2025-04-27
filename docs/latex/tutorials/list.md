---
id: list
sidebar_position: 3
---

# 列表

您可以使用环境来创建不同类型的列表，环境是用来封装实现特定排版功能所需的LATEX代码。一个环境以 `\begin{environment-name}` 开始，以 `\end{environment-name}` 结束，其中 `environment-name` 可能是数字、表格或其中一种列表类型： `itemize` 用于无序列表，`enumerate` 用于有序列表。

## 无序列表

无序列表是由 `itemize` 环境产生的。每个列表条目前必须有 `\item` 命令。
在文件夹 `latex_learn`中创建一个名为 `list_doc.tex` 的文件, 并在其中输入以下代码，然后编译运行:

```latex
\documentclass{ctexart}
\begin{document}
    \begin{itemize}
        \item 列表项1
        \item 列表项2
        \item 列表项3
    \end{itemize}
\end{document}
```
## 有序列表
有序列表是由 `enumerate` 环境产生的。每个列表条目前必须有 `\item` 命令，将`list_doc.tex` 的代码改为以下代码，然后编译运行:

```latex
\documentclass{ctexart}
\begin{document}
    \begin{enumerate}
        \item 列表项1
        \item 列表项2
        \item 列表项3
    \end{enumerate}
\end{document}
```

与无序列表一样，每个条目前都必须有 `\item` 命令，在这里，它自动生成数字的有序列表标签值，从1开始。

## 嵌套列表

您可以在列表中嵌套列表，只需在 `\item` 命令后添加另一个 `itemize` 或 `enumerate` 环境即可。将`list_doc.tex` 的代码改为以下代码，然后编译运行:

```latex
\documentclass{ctexart}
\begin{document}
    \begin{itemize}
        \item 列表项1
        \item 列表项2
        \begin{itemize}
            \item 列表项1
            \item 列表项2
        \end{itemize}
        \item 列表项3
    \end{itemize}
\end{document}
```




