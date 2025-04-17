---
id: index
sidebar_position: 0
---

# 你的第一个LaTeX文档

## 初始案例

让我们创建一个简单的LaTeX文档。请新建一个文件夹名叫 `latex_learn` ，用VS Code打开，并创建一个名为 `first_doc.tex` 的文件。

```bash
latex_learn/
  first_doc.tex   --- LaTeX文档
```
在`first_doc.tex`中输入如下代码：
```tex
\documentclass{article}
\begin{document}
    Hello World!
\end{document}
```
接下来，我们将使用LaTeX编译器来编译这个文档。在命令行中，进入到`first_doc.tex`所在的文件夹，然后运行以下命令：
```bash
xelatex first_doc.tex
``` 

如果一切顺利，你将得到一个名为 `first_doc.pdf` 的文件。打开它，你会看到一个格式精美的文档。

## 输入中文

将`first_doc.tex`中代码更改为：
```tex
\documentclass{article}
\begin{document}
    你好世界!
\end{document}
```

然后运行以下命令：
```bash
xelatex first_doc.tex
``` 

不出意外你肯定会报错，这是为啥？？？

### 文档类型
TeX有多种文档类型可选，笔者较常用的有如下几种类型：

- 对于英文，可以用`book`、`article`和`beamer`；
- 对于中文，可以用`ctexbook`、`ctexart`和`ctexbeamer`，这些类型自带了对中文的支持。

不同的文件类型，编写的过程中也会有一定的差异，如果直接修改文件类型的话，甚至会报错。以下统一选用`ctexart`。在编辑框第一行，输入如下内容来设置文件类型：

```tex
\documentclass{ctexart}
```

另外，一般也可以在`\documentclass`处设置基本参数，笔者通常设置默认字体大小为12pt，纸张大小为A4，单面打印。需要将第一行的内容替换为：

```tex
\documentclass[12pt, a4paper, oneside]{ctexart}
```
文件的正文部分需要放入document环境中，在document环境外的部分不会出现在文件中。

将`first_doc.tex`中代码更改为

```tex
\documentclass{ctexart}
\begin{document}
   你好世界!
\end{document}
```

然后运行以下命令：
```bash
xelatex first_doc.tex
``` 

于是你就变得到了一个中文版本的PDF文档，而且不会报错。


