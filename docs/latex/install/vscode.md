---
id: vscode
sidebar_position: 4
---

# VS Code 搭建LaTeX编辑环境

## 安装VS Code

本人强烈推荐 Microsoft Visual Studio Code 软件作为LaTeX配套的文本编辑器。

[VS Code官方下载页面](https://code.visualstudio.com/Download)

## 配置VS Code

安装完成后，打开 Visual Studio Code 应用程序，使用
快捷键 Ctrl + Shift + X（MacOS: Command + Shift + X） 打开扩展列表，在应用商店中搜索 并安装以下两个扩展

> ▶ Chinese(Simplified)

> ▶ LaTeX Workshop

最后需要进行插件配置。点击左下角的设置按钮，点击设置，然后再搜索框中搜索recipe，找到标题"Latex-workshop > Latex:Recipes",点击该设置项的在settings.json中编辑，将原来的删除，将下方内容复制进去，然后按Ctrl+S保存，最后重启vscode即可。

```json
{
    "latex-workshop.latex.autoBuild.run": "never", // 禁止保存时自动编译
    "latex-workshop.latex.recipe.default": "lastUsed", // 使用前一次的编译方法
    "latex-workshop.showContextMenu": true,
    "latex-workshop.view.pdf.internal.synctex.keybinding": "double-click",
    "latex-workshop.latex.tools": [
        {
            "name": "xelatex",
            "command": "xelatex",
            "args": [
                "-synctex=1",
                "-shell-escape",
                "-interaction=nonstopmode",
                "-file-line-error",
                "%DOCFILE%"
            ]
        },
        {
            "name": "bibtex",
            "command": "bibtex",
            "args": [
                "%DOCFILE%"
            ]
        }
    ],
    "latex-workshop.latex.recipes": [
        {
            "name": "xelatex",
            "tools": [
                "xelatex"
            ],
        },
        {
            "name": "xe->bib->xe->xe",
            "tools": [
                "xelatex",
                "bibtex",
                "xelatex",
                "xelatex"
            ]
        }
    ],
    "latex-workshop.latex.clean.fileTypes": [
        "*.aux",
        "*.bbl",
        "*.blg",
        "*.idx",
        "*.ind",
        "*.lof",
        "*.lot",
        "*.out",
        "*.toc",
        "*.acn",
        "*.acr",
        "*.alg",
        "*.glg",
        "*.glo",
        "*.gls",
        "*.ist",
        "*.fls",
        "*.log",
        "*.fdb_latexmk",
        "*.synctex.gz"
    ]  
}
```

## 第一个LaTeX项目

最后的最后，我们终于可以开始着手构建第一个 LaTeX 文档。找一个你喜欢的 地方新建文件夹，然后右键选择这个文件夹，点击“通过 Code 打开”。
接着，在左侧的文件列表中点击鼠标右键，新建文件，命名为 main.tex。在这 个文件里输入下面的内容:

```latex
\documentclass{ctexart} 
\begin{document}
你好，\LaTeX{}! 
\end{document}
```

接下来:
> ▶ 使用快捷键Ctrl+Alt+B（MacOS: Command + Option + B）运行编译

> ▶ 使用快捷键Ctrl+Alt+V（MacOS: Command + Option + V）查看PDF 

稍等片刻编译完成，你就会在侧栏中看到一份简单的文档。如下图所示:

![VS Code LaTeX](./img/latex_vscode.png)

恭喜通关!!!（好像事情有可能不是这样的，我们猜测你可能会遇到如下问题）

由于MiKTeX默认安装没有带 ctex 这个中文支持宏包，所以在编译时会弹出如下窗口，点击安装，MiKTeX即可自动从远程宏包管理库安装 ctex 这个宏包。

![](./img/texstudio_install_07.png)

:::tip

这里可以取消勾选“总是显示此对话框”, MiKTeX会自动安装我们LaTeX项目中用到的本地没有的宏包。如果不取消勾选，则每次遇到缺失的宏包要安装时，都会弹出此界面。

:::

重新运行编译———>查看PDF，恭喜你终于**通关了！！！**
