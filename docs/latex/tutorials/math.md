---
id: math
sidebar_position: 4
---

# 数学公式
latex相较于word来说，对于数学公式的书写是非常非常方便的，且对于公式的管理也更加方便。本节主要介绍latex的3种公式形式，更多的数学符号以及公式的书写方法我们网站还提供了[LaTeX的数学公式大全](../math)，当然，你也可以使用该[网站](https://latex.codecogs.com/eqneditor/editor.php)进行实现。

## 行内公式
行内公式也就是在书写正文时需要插入的公式，方法如下：
```latex
爱因斯坦光电效应方程为$E_k=hv-W_0$，其中，$h$表示普朗克常量，$v$表示入射光的频率。
```
![](./img/img16.png)

## 行间公式
行间公式分为2种，一种是不带序号的行间公式，一种是带序号的行间公式，带序号的行间公式可以利用label进行管理，并在正文中引用。

### 不带序号的行间公式
使用方法如下：
```latex
爱因斯坦光电效应方程为:
\[
    E_k=hv-W_0
\]

其中，$h$表示普朗克常量，$v$表示入射光的频率。
```
![](./img/img17.png)

### 带序号的行间公式
带序号的行间公式需要使用equation环境来实现，方法如下：
```latex
爱因斯坦光电效应方程如下式\ref{eq:peq}所示：
\begin{equation}
E_k=hv-W_0
\label{eq:peq}
\end{equation}
其中，$h$表示普朗克常量，$v$表示入射光的频率。
```
![](./img/img18.png)