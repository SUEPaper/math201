---
id: table
sidebar_position: 4
---

# 表格

## 表格基本用法

表格（tabular）命令用于排版表格。LaTeX 默认表格是没有横向和竖向的分割线的——如果你需要，你得手动设定。LaTeX 会根据内容自动设置表格的宽度。下面的代码可以创一个表格：

```latex
\begin{tabular}{...}
```

省略号会由定义表格的列的代码替换：

- `l` 表示一个左对齐的列；
- `r` 表示一个右对齐的列；
- `c` 表示一个向中对齐的列；
- `|` 表示一个列的竖线；

例如，`{lll}` 会生成一个三列的表格，并且保存向左对齐，没有显式的竖线；`{|l|l|r|}` 会生成一个三列表格，前两列左对齐，最后一列右对齐，并且相邻两列之间有显式的竖线。

表格的数据在 `\begin{tabular}` 后输入：

- `&` 用于分割列；
- `\\` 用于换行；
- `\hline` 表示插入一个贯穿所有列的横着的分割线；
- `\cline{1-2}` 会在第一列和第二列插入一个横着的分割线。

最后使用 `\end{tabular}` 结束表格。

在文件夹 `latex_learn`中创建一个名为 `table_doc.tex` 的文件, 并在其中输入以下代码，并且编译代码:

```latex
\documentclass{ctexart}
\begin{document}
    \begin{tabular}{|l|l|r|}
        \hline
        姓名 & 年龄 & 性别 \\
        \hline
        张三 & 20 & 男 \\
        李四 & 21 & 女 \\
        王五 & 22 & 男 \\
        \hline
    \end{tabular}

    \begin{tabular}{|l|l|}
        Apples       & Green  \\
        Strawberries & Red    \\
        Orange       & Orange \\
    \end{tabular}

    \begin{tabular}{rc}
        Apples              & Green  \\
        \hline
        Strawberries        & Red    \\
        \cline{1-1} Oranges & Orange \\
    \end{tabular}

    \begin{tabular}{|r|l|}
        \hline
        8              & here's \\
        \cline{2-2} 86 & stuff  \\
        \hline
        \hline
        2008           & now    \\
        \hline
    \end{tabular}
\end{document}
```

当然，如果你不想自己去写一个表格的代码，你可以利用[Tables Generator](https://www.tablesgenerator.com/) 来自动生成代码。更多的表格样式可以自己去探索。

## 浮动体

### 什么是浮动体

在 LaTeX 中，表格（tabular）是一种浮动体（floating object）。浮动体是指那些在文档的正常排版流程之外，需要被 LaTeX 引擎重新排版的对象，主要包括图（figure）和表（table）环境。浮动体可以在文档的任意位置出现，并且会被 LaTeX 引擎重新排版，以确保它们不会影响文档的正常排版。

### 基本示例

在 LaTeX 中，你可以使用 `table` 环境来创建浮动体表格。在文件夹 `latex_learn`中创建一个名为 `float_doc.tex` 的文件, 并在其中输入以下代码，并且编译代码:

```latex
\documentclass{ctexart}
\usepackage{caption}
\begin{document}

    如表 \ref{tab:example} 所示：
    \begin{table}[ht]
    \centering
    \caption{示例表格}
    \label{tab:example}
    \begin{tabular}{|l|l|r|}
        \hline
        姓名 & 年龄 & 分数 \\
        \hline
        张三 & 20 & 85 \\
        李四 & 22 & 92 \\
        王五 & 19 & 78 \\
        \hline
    \end{tabular}
    \end{table}
\end{document}
```
此示例中，浮动体会尽量出现在“这里”（h）或页面顶部（t）。

### 位置参数

#### 3.1 基本选项 `[h]`、`[t]`、`[b]`、`[p]`

- `h` (“here”): 尽可能将浮动体放在当前位置。
- `t` (“top”): 放在页面顶部。
- `b` (“bottom”): 放在页面底部。
- `p` (“page”): 放在浮动页（仅浮动体的专页）。 

#### 3.2 组合与优先级

可以组合多个选项，如 `[htbp]` 或 `[tbp]`，LaTeX 会按 “`h→t→b→p`” 顺序尝试。
在选项前加!（如 `[!ht]`）可放宽 LaTeX 的限制，提高浮动成功率。

### 标题与交叉引用

- `\caption{}` 命令用于设置浮动体的标题，并会自动生成编号 
- `\label{}` 给浮动体打标签，然后文中可用 `\ref{}` 引用对应编号，如 “`\ref{tab:example}`” 

## 三线表

三线表指的是表格仅保留顶端、表头与表体之间以及底部的三条横线，简洁大方，通常用于学术论文和技术文档中。LaTeX 中常用 booktabs 宏包来生成三线表，它提供了 `\toprule`、`\midrule` 和 `\bottomrule` 三条命令，对应三条横线。

三线表（Three-line Table）主要应用在 **学术论文** 和 **技术报告** 中，尤其在自然科学、工程、经济、医学等领域非常常见。它的设计遵循“**去除冗余线条、突出内容**”的原则，因此简洁、美观、易读，是正式文献中的推荐表格样式。

### 准备工作：加载宏包

要使用三线表，需要在导言区加载 `booktabs` 宏包：

```latex
\documentclass{ctexart}
\usepackage{booktabs}   % 提供 \toprule, \midrule, \bottomrule
\usepackage{caption}    % （可选）提供对表题的更好控制
\usepackage{array}      % （可选）增强列格式定义
\begin{document}
% … 正文 …
\end{document}
```

- booktabs：核心宏包，提供三线表命令；
- caption：可对 table 环境的标题格式做更多定制；
- array：增强列对齐和宽度设置。

### 三线表的基本结构


在文件夹 `latex_learn`中创建一个名为 `three_line_table_doc.tex` 的文件, 并在其中输入以下代码，并且编译代码:

```latex
\documentclass{ctexart}
\usepackage{booktabs}
\begin{document}
    \begin{table}[ht]
    \centering
    \caption{示例三线表}
    \label{tab:example}
    \begin{tabular}{lcr}    % 三列：左对齐、居中、右对齐
        \toprule
        姓名 & 年龄 & 分数 \\  % 表头
        \midrule
        张三 & 20   & 85   \\  % 表体
        李四 & 22   & 92   \\
        王五 & 19   & 78   \\
        \bottomrule
    \end{tabular}
    \end{table}
\end{document}
```

- `\toprule`：在表格最上方绘制粗横线；
- `\midrule`：在表头和表体之间绘制横线；
- `\bottomrule`：在表格最下方绘制粗横线；
- `lrr`：定义三列对齐方式（left/center/right）；你也可以用 `p{<宽度>}` 自定义列宽。


### 列格式与对齐

- `p{width}` 列：用于固定列宽且自动换行，例如 `\begin{tabular}{l p{4cm} r}`。
- `@{}` 去除额外空白：例如 `\begin{tabular}{@{}lcr@{}}` 可去掉表格左右两侧默认的边距。
- 数组宏包多行/多列：用 `\multirow` 和 `\multicolumn`（需 `multirow` 包）实现跨行跨列。

修改 `three_line_table_doc.tex` 代码如下，并编译运行：

```latex
\documentclass{ctexart}
\usepackage{booktabs}
\usepackage{multirow}
\begin{document}
    \begin{tabular}{@{}lcr@{}}
    \toprule
    姓名 & \multicolumn{1}{c}{年龄} & 分数 \\
    \midrule
    \multirow{2}{*}{张三} & 20 & 85 \\
                        & 21 & 88 \\
    \bottomrule
    \end{tabular}
\end{document}
```

### 长表

长表指的是表格内容超过一页的情况，通常需要跨页显示。LaTeX 提供了多种环境来处理长表，包括：
- `table`：基本表格环境；
- `longtable`：跨页长表，需要配合 `booktabs` 使用；
- `threeparttable`：在表格中添加脚注。

在文件夹 `latex_learn`中创建一个名为 `long_table_doc.tex` 的文件, 并在其中输入以下代码，并且编译代码:

```latex
\documentclass{ctexart}
\usepackage{longtable}  % 支持跨页表格
\usepackage{booktabs}   % 三线表命令：\toprule 等
\usepackage{caption}    % 更好的标题支持
\usepackage{geometry}   % 控制页边距
\geometry{a4paper, margin=2.5cm}

\begin{document}
\begin{center}
\captionof{table}{跨页三线表示例：学生成绩列表}
\label{tab:long}
\begin{longtable}{llr}
  \toprule
  姓名 & 班级 & 成绩 \\
  \midrule
  \endfirsthead

  \multicolumn{3}{c}{续表 \ref{tab:long}（接上页）} \\
  \toprule
  姓名 & 班级 & 成绩 \\
  \midrule
  \endhead

  \bottomrule
  \endfoot

  % 表格主体内容（添加足够多的行使其跨页）
  张三 & 软件工程一班 & 85 \\
  李四 & 软件工程二班 & 90 \\
  王五 & 数学与应用     & 78 \\
  赵六 & 软件工程一班 & 82 \\
  钱七 & 通信工程     & 76 \\
  孙八 & 软件工程一班 & 92 \\
  周九 & 自动化       & 88 \\
  吴十 & 软件工程二班 & 73 \\
  郑十一 & 网络工程   & 89 \\
  王十二 & 数学与应用 & 91 \\
  张十三 & 软件工程一班 & 84 \\
  李十四 & 软件工程一班 & 86 \\
  王十五 & 软件工程一班 & 79 \\
  …（你可以复制粘贴此段内容数十行）…
  % 建议写满50-100行即可实现跨页

\end{longtable}
\end{center}
\end{document}
```