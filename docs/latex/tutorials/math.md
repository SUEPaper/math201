---
id: math
sidebar_position: 4
---

# 数学公式

LaTeX 相较于 Word 来说，对于数学公式的书写是非常非常方便的，且对于公式的管理也更加方便。本节主要介绍 LaTeX 的 3 种公式形式，更多的数学符号以及公式的书写方法我们网站还提供了[LaTeX 的数学公式大全](../math)，当然，你也可以使用该[网站](https://latex.codecogs.com/eqneditor/editor.php)进行实现。

## LaTeX 数学公式宏包

一切数学公式都要在数学模式下输入，需要引用 amsmath 宏包，由美国数学学会 (American Mathematical Society, AMS) 提供。而数学符号不是按钮点出来的，也不是天上掉下来的，而是有字体提供的。unicode-math 宏包提供了现代一揽子解决方案，它把符号、字体、样式精调都统一了。

以下是数学宏包引用的案例：

```latex
\documentclass{ctexart}
\usepackage{amsmath}
\usepackage{unicode-math}
\begin{document}
你好，\LaTeX{}!

\end{document}
```

## 行内公式

行内公式也就是在书写正文时需要插入的公式，方法如下：

```latex
爱因斯坦光电效应方程为$E_k=hv-W_0$，其中，$h$表示普朗克常量，$v$表示入射光的频率。
```

![](./img/img16.png)

## 行间公式

行间公式分为 2 种，一种是不带序号的行间公式，一种是带序号的行间公式，带序号的行间公式可以利用 label 进行管理，并在正文中引用。

### 不带序号的行间公式

使用方法如下：

```latex

爱因斯坦光电效应方程为:

\begin{equation*}
    E_k=hv-W_0
\end{equation*}

其中，$h$表示普朗克常量，$v$表示入射光的频率。

```

![](./img/img17.png)

### 带序号的行间公式

带序号的行间公式需要使用 equation 环境来实现，方法如下：

```latex

爱因斯坦光电效应方程如下式\ref{eq:peq}所示：

\begin{equation}
E_k=hv-W_0
\label{eq:peq}
\end{equation}

其中，$h$表示普朗克常量，$v$表示入射光的频率。

```

![](./img/img18.png)

## 数学公式案例

```latex

\documentclass{ctexart}
\usepackage{amsmath}
\usepackage{unicode-math}
\begin{document}
你好，\LaTeX{}!

\section*{数学公式部分}

\subsection*{行内公式}

公式公式公式$PV=nRT$公式公式公式，公式公式公式公式公式公式公式
$\frac{x_{1}+x_{2}+x_{3}}{3}\geq \sqrt[3]{x_{1}x_{2}x_{3}}$
公式公式公式公式公式公式公式公式公公式公式公式公式公式公式公式
公式公公式公式公式公式公式公式公式公式公式公式公式公式公式公式

\subsection*{行间公式}

\subsubsection*{不带序号的行间公式}

\begin{equation*}
    T(n) = aT\left(\left\lceil\frac{n}{b}\right\rceil\right) + \mathcal{O}(n^d)
\end{equation*}

\begin{equation*}
    \sum_{i=1}^ki^2=\frac{n(n+1)(2n+1)}{6}
\end{equation*}

\begin{equation*}
    T(n) = \begin{cases}
        \mathcal{O}(n^d),&\textrm{if } d>\log_b a, \\
        \mathcal{O}(n^d\log n), &\textrm{if } d=\log_b a,\\
        \mathcal{O}(n^{\log_b a}), &\textrm{if } d<\log_b a.
      \end{cases}
\end{equation*}

\subsubsection*{带序号的行间公式}

\begin{equation}
    n=(\underbrace{1\cdots 1}_{k\text{ of 1's}})_2=2^{k+1}-1
\end{equation}

\begin{equation}
    \nabla f (P)= \left.\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right)\right|_{P}
\end{equation}

\begin{equation}
    \begin{aligned}
        Q^{T}A&=R \\
        \begin{pmatrix}
          q_1^T \\ q_2^T \\ q_3^T
        \end{pmatrix}
        \begin{pmatrix}
          a_1 & a_2 & a_3
        \end{pmatrix}
        &=R
    \end{aligned}
\end{equation}

\end{document}

```

效果：

![](./img/math_example.png)
