---
id: macos
sidebar_position: 3
---

# MacOS 安装 BasicTeX

## 为啥MacOS不使用MiKTeX版本，而使用BasicTeX？
最主要的原因是MiKTeX当前版本不能很好兼容Apple Silicon的芯片，而BasicTeX能够很好的支持Apple Silicon芯片。

## Homebrew 安装

```sh
brew install --cask basictex
```

:::note

Homebrew 是啥？请看[Mac必备神器Homebrew](https://zhuanlan.zhihu.com/p/59805070)

:::


## 宏包缺失怎么解决？

BasicTex是轻量化的版本，所以如果使用中发现一些工具不存在，命令行报错“multirow.sty not found”，那你可以直接安装这个缺失的模块。例如：

```sh
sudo tlmgr install multirow
```

:::info
tlmgr是BasicTeX自带的宏包管理工具，类似MacOS上的Homebrew。tlmgr[介绍](https://github.com/syvshc/tlmgr-intro-zh-cn)
:::

## tlmgr中国加速
由于众所周知的原因，在中国大陆访问默认的LaTeX远程宏包管理库非常慢，因此需要选择中国大陆的官方镜像源。

```sh
sudo tlmgr option repository https://mirrors.ustc.edu.cn/CTAN/systems/texlive/
```
这样使用tlmgr安装缺失的宏包的速度会起飞。
