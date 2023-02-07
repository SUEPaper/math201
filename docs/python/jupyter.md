---
id: jupyter
sidebar_position: 4
---

# Jupyter Notebook 介绍

## Jupyter 速查手册
![Jupyer Cheat Sheet](./img/jupyter-notebook-cheat-sheet.png)

## 1. 安装
```bash
pip install notebook
```
## 2.安装扩展
### 扩展官方文档：https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/
### Github地址 ：https://github.com/ipython-contrib/jupyter_contrib_nbextensions
![](./img/numpy_jupyter_3.png) 
### 发现多了Nbextensions
### 然后取消勾选下面的这个选项就可以使用扩展了
![](./img/numpy_jupyter_4.png) 

## 3. 运行
### 在终端环境下输入 jupyter notebook即可在浏览器中自动打 notebook
### 点击 NEW 可创建新的 notebook、Text File(文本文件)、Folder(文件夹)或Terminal(终端)
#### 在 "Text File" 选项中，你会得到一个空白的文档。输入你喜欢的任何字母，单词和数字。它基本上是一个文本编辑器（类似于 Ubuntu 上的应用程序）。你也可以选择一种语言（支持非常多的语言），然后用该语言来写一个脚本。你还可以查找和替换文件中的单词。
#### 在 "Folder" 选项中， 顾名思义它的功能就是创建文件夹。你可以创建一个新文件夹来放入文件，重新命名或者删除它。
#### "Terminal" 的工作方式与你的 Mac 电脑或 Linux 电脑上的终端完全相同（或者 Windows 上的 cmd ）。它在你的Web浏览器中支持终端会话。在这个终端中输入 python ，瞧！现在你已经可以开始写 python 脚本了。
#### 但在本文中，我们将重点介绍 Notebooks，因此我们将从“New”选项中选择 "Python 3" 选项。你会看到如下的截图
![](./img/numpy_jupyter_1.png) 
### 然后，你可以导入最常见的 Python 库——pandas 和 numpy——来开始你的项目。代码上方的菜单栏提供了操作单元格的各种选项：insert (添加)，edit (编辑)，cut (剪切)，move cell up/down (上下移动单元格)，run cells(在单元格中运行代码)，interupt (停止代码)，save (保存工作)，以及 restart (重新启动内核)。
![](./img/numpy_jupyter_2.png) 
### 在下拉菜单中（如上所示），你有四个选项：
#### Code - 这是你输入代码的地方
#### Markdown - 这是你输入文本的地方。你可以在运行代码后添加结论，添加注释等。
#### Raw NBConvert - 这是一个命令行工具，可将你的笔记本转换为另一种格式（如 HTML）
#### Heading - 你可以将标题添加到单独的小节并使你的 Notebook 看起来干净整洁。这个选项现在已经集成到 Markdown 选项中。添加一个“##”，以确保在你之后输入的内容将被视为标题

## 4.快捷键
### notebook 自带一组快捷键，能让你快速使用键盘与单元格交互，而无需使用鼠标和工具栏。熟悉这些快捷键需要花费一点时间，但如果能熟练掌握，将大大加快你在 notebook 中的工作速度。
### 这些快捷键可以通过单元格 蓝色 状态下按 "h" 来查看：
![](./img/numpy_jupyter_5.png) 

## 5.命令
### 5.1系统命令
#### 以!开始的一行命令可以运行系统命令（也就是启动jupyter notebook时的终端命令），这里以windows下的cmd命令提示符为例。
![](./img/numpy_jupyter_6.png) 
#### 系统命令的输出内容可以储存在python变量中
![](./img/numpy_jupyter_7.png) 
#### 在命令行中使用python变量
![](./img/numpy_jupyter_8.png) 
#### 系统命令也可以嵌套在python循环内使用
![](./img/numpy_jupyter_9.png) 
### 5.2魔法命令
#### Magic有两种形式：Line Magics和Cell Magics
##### Line Magics：以%开头，该行后面的内容都是Line Magics代码
##### Cell Magics：以%%开头，后面整个单元格内都是Cell Magics代码
![](./img/numpy_jupyter_10.png) 
#### %lsmagic查看所有魔法命令
![](./img/numpy_jupyter_11.png) 
#### %time?查看time魔法命令帮助文档
![](./img/numpy_jupyter_12.png) 
%time??查看time魔法命令源代码
![](./img/numpy_jupyter_13.png) 
#### 常用的魔法命令
##### %%writefile命令用于将本单元格中的代码写入一个文件。
###### 命令格式：%%writefile [-a] filename
###### 如果带有-a参数则将内容追加到文件中，否则将覆盖文件内容
##### %pycat命令用于显示python源文件内容。
###### 命令格式：%pycat filename，filename可以是本地文件、URL和代码历史范围等
##### %run命令用于运行python源文件。
###### 命令格式：%run filename。
##### %load命令用于加载文件到Notebook中
###### 命令格式：%run filename，filename可以是本地文件、URL和代码历史范围等
##### %store命令用于保存变量当前值，可以在多个Notebook之间传递变量。
###### 命令格式：%store variablename。
###### 当前Notebook中储存,另一个Notebook中取出
##### %who命令用于显示所有变量清单，也可以显示指定变量类型。
###### 命令格式：%who [type].
##### %matplotlib inline，使得matplotlib绘制的图像直接在单元格中显示，而不需要plt.show()
#### 自定义魔法命令
##### 官方文档：https://ipython.readthedocs.io/en/stable/config/custommagics.html

## 6.display模块显示示多媒体内容
### Jupyter notebook中使用IPython.display模块可以输出显示多媒体内容，如音频、视频、图片和网页等
### 6.1 显示图片、HTML、音频、视频
#### 导入需要的类和函数，display用于显示多媒体内容
![](./img/numpy_jupyter_14.png) 
#### 显示图片
![](./img/numpy_jupyter_15.png) 
#### 显示HTML
![](./img/numpy_jupyter_16.png) 
#### 播放音频
![](./img/numpy_jupyter_17.png) 
#### 显示视频
![](./img/numpy_jupyter_18.png) 
### 6.2 显示网页
#### 直接嵌入网页
![](./img/numpy_jupyter_19.png) 
#### 嵌入在线音频
##### 需要找到相应的嵌入代码，例如嵌入网易云音乐，可以去网易云官网找到嵌入代码，如下图所示：
![](./img/numpy_jupyter_20.png) 
![](./img/numpy_jupyter_21.png) 
#### 嵌入本地pdf
![](./img/numpy_jupyter_22.png) 






















