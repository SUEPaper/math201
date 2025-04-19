---
id: package
sidebar_position: 2
---

# 宏包

## 什么是宏包？

为了完成一些功能（如定理环境、导入图片、数学公式环境等），还需要在导言区，也即`document`环境之前加载宏包。加载宏包的代码是`\usepackage{}`。本份教程中，与数学公式与定理环境相关的宏包为`amsmath`、 `unicode-math`。

在文件夹 `latex_learn`中创建一个名为 `package_doc.tex` 的文件, 并在其中输入以下代码:
```latex
\documentclass{ctexart}
\usepackage{amsmath}
\usepackage{unicode-math}
\begin{document}
    这是一个数学公式：$x^2 + y^2 = z^2$。
\end{document}
```

## 常用的宏包推荐

### 数学与公式
- `amsmath` : 提供丰富的数学公式环境和命令
- `amssymb` : 提供额外的数学符号
- `unicode-math` : 支持Unicode数学符号
- `mathtools` : `amsmath`的扩展，提供更多数学工具
- `physics` : 物理公式排版
- `siunitx` : 科学计量单位排版
### 文档与语言支持
- `ctex` : 中文支持
- `babel` : 多语言支持
- `fontspec` : 字体设置（XeLaTeX/LuaLaTeX）
- `xeCJK` : 中日韩文字支持（XeLaTeX）
### 图形与图表
- `graphicx` : 导入图片
- `tikz` : 绘制矢量图形
- `pgfplots` : 基于TikZ的科学绘图工具
- `subcaption` : 创建子图和子表格
- `float` : 控制浮动体（图表）的位置
### 表格排版
- `booktabs` : 专业表格排版
- `tabularx` : 灵活宽度的表格
- `longtable` : 跨页表格
- `multirow` : 合并行
- `colortbl` : 彩色表格
### 页面布局
- `geometry` : 页面尺寸和边距设置
- `fancyhdr` : 自定义页眉页脚
- `titlesec` : 自定义章节标题格式
- `tcolorbox` : 创建彩色文本框
- `mdframed` : 创建带框架的环境
### 参考文献与引用
- `biblatex` : 参考文献管理
- `natbib` : 自然科学引用样式
- `hyperref` : 创建超链接和PDF书签
- `cleveref` : 智能交叉引用
### 代码与算法
- `listings` : 代码排版与语法高亮
- `minted` : 基于Pygments的代码高亮（需要Python）
- `algorithm2e` : 算法伪代码排版
- `algorithmicx` : 另一种算法伪代码排版
### 其他实用工具
- `xcolor` : 颜色支持
- `enumitem` : 自定义列表环境
- `todonotes` : 添加待办事项和注释
- `microtype` : 微排版调整，提高排版质量
- `lipsum` : 生成占位文本
- `appendix` : 附录支持
- `glossaries` : 术语表和符号表

## 宏包加载顺序

某些宏包的加载顺序很重要，一般遵循以下原则：

1. 先加载基础宏包，如 `fontspec` 、 `geometry` 等
2. 再加载功能性宏包，如 `amsmath` 、 `graphicx` 等
3. 最后加载可能会修改其他宏包行为的宏包，如 `hyperref` 通常应该最后加载例如：

```latex
\documentclass{ctexart}
% 基础设置
\usepackage{fontspec}
\usepackage[a4paper, margin=2.5cm]{geometry}

% 功能性宏包
\usepackage{amsmath}
\usepackage{graphicx}
\usepackage{booktabs}

% 最后加载
\usepackage{hyperref}
\end{document}
```

