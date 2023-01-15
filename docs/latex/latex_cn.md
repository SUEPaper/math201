---
id: latex_cn
sidebar_position: 6
---

# LaTeX中文支持(xeCJK vs ctex)
目前在LaTeX中主要使用xeCJK和ctex两个宏包来实现中文支持，具体区别如下。

## xeCJK
xeCJK 是一个 XeLaTeX 宏包，用于排版中日韩（CJK）文字。主要功能：
1. 分别设置 CJK 和英文字体；
2. 自动忽略 CJK 文字间的空格而保留其他空格，允许在非标点汉字和英文字母 (a – z, A– Z) 间断行；
3. 提供多种标点处理方式：全角式、半角式、开明式、行末半角式和 CCT 式；
4. 自动调整中英文间空白。

xeCJK只提供了字体和标点控制等基本CJK语言支持, 使用方式如下:

```latex
\usepackage{xeCJK}

\setCJKmainfont{font name}
% 设置正文罗马族的CJK字体，影响\rmfamily和\textrm 的字体
\setCJKsansfont{font name}
% 设置正文无衬线族的CJK字体，影响\sffamily和\textsf 的字体
\setCJKmonofont{font name}
% 设置正文等宽族的CJK字体，影响\ttfamily 和 \texttt 的字体
```

## ctex
ctex宏包和文档类封装了xeCJK等宏包，使得用户在排版中文时不再考虑排版引擎等细节。如果是全中文的文档，尽量用 ctex 文档类。

使用方式如下:
```latex
%在导言区使用以下代码，获得中文支持
\documentclass[utf8,a4paper,12pt]{ctexart}

%或者
\documentclass{article}
\usepackage{ctex}
```

:::tip

打个比方说的话，ctex包若是一辆车，xeCJK就是个轮子。轮子是车子的重要零件，但我还是建议你开车，把装轮胎的事交给工程师。——— 来自知乎: [处理中文时应该用ctex宏包还是应该用xeCJK宏包？](https://www.zhihu.com/question/58656895)
:::

