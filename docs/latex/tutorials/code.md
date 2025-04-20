---
id: code
sidebar_position: 7
---

# 代码环境
在 LaTeX 中，代码环境（code environment）是一种用于排版代码的环境，它不仅能保证“原汁原味”地呈现代码，还能通过高亮、行号、框线、自动换行等功能，极大地提升可读性、可维护性和美观度，是撰写技术文档或学术论文时不可或缺的利器。

`​minted` 宏包是 LaTeX 中用于实现代码高亮的强大工具，它依赖于 Python 的 `Pygments` 库，支持超过 150 种编程语言的语法高亮。

## 安装Pygments

首先，确保您的系统中安装了 Python 和 Pygments。您可以使用以下命令安装 Pygments：

```bash
pip install Pygments
```

## 一个简单的例子

下面是一个简单的例子，展示了如何在 LaTeX 中使用 `minted` 宏包来排版 Python 代码。

在文件夹 `latex_learn`中创建一个名为 `code_doc.tex` 的文件, 并在其中输入以下代码:

```latex
\documentclass{article}
\usepackage{minted}
\begin{document}
    \begin{minted}{python}
    def hello():
        print("Hello, World!")
    \end{minted}
\end{document}
```

由于 `minted` 宏包需要调用外部程序 `pygmentize`，因此在编译 LaTeX 文档时，必须启用 `-shell-escape` 选项。
在终端中输入以下命令编译 LaTeX 文档：

```bash
xelatex -shell-escape code_doc.tex
```

## 常用选项

`minted` 宏包提供了多种选项，用于自定义代码块的显示效果：​

- `linenos`：显示行号。
- `frame=lines`：为代码块添加边框。
- `fontsize=\small`：设置字体大小。
- `bgcolor=gray!10`：设置背景颜色。
- `breaklines`：自动换行。
- `autogobble=true`：自动调整代码块的宽度。
- `mathescape`：允许在注释中使用 LaTeX 数学公式。
- `escapeinside`=||：在代码中插入 LaTeX 命令。

下面是一个示例，展示了如何使用这些选项， 将`code_doc.tex`修改如下并编译：

```latex

\documentclass{article}
\usepackage{minted}
\begin{document}
\begin{minted}
[
    frame=lines,
    framesep=2mm,
    baselinestretch=1.2,
    bgcolor=LightGray,
    fontsize=\footnotesize,
    linenos
]
{python}
N = 8  # 共有N项
S = [0] * (N + 1) # 包含S0共有N+1项，初始化
S[0] = 0.182 #初始值
# for循环进行递推计算
for n in range(1, N+1):
    S[n] = 1/n - 5 * S[n-1]  # 递推关系式
    print('S' + str(n) + ' =', S[n]) # 打印算法结果
\end{minted}
\end{document}
```
![](./img/img21.png)

## 引用外部代码文件

我们可以通过`\inputminted`命令来引用外部的代码文件。

例如，我们可以创建一个名为 `code.py` 的文件，其中包含以下代码：

```python
def hello():
    print("Hello, World!")
```
然后，我们可以在 LaTeX 文档中使用 `\inputminted` 命令来引用该文件。
将`code_doc.tex`修改如下并编译：

```latex
\documentclass{article}
\usepackage{minted}
\begin{document}
    \inputminted[
        frame=lines,
        framesep=2mm,
        baselinestretch=1.2,
        fontsize=\small,
        lineno
    ]   
    {python}    
    {code.py}
\end{document}
```