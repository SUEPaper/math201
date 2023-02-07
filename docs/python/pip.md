---
id: pip
sidebar_position: 3
---

# 包管理

## pip简介

&emsp;pip是Python标准库管理器，是用来安装不同类库的工具，可以对Python包进行查找、下载、安装和卸载等功能。

&emsp;pip提供了对Python包快捷有效的管理，当我们的Python版本在2.7.9+或3.4及以上版本都自带 pip 工具。在此简单地介绍一下pip的部分相关指令.

## 如何进行pip包管理

### 查看pip命令语句（show help）

```py
pip help
pip --h
```

![1](./pip%20photo/1.png)

### 下载指定的python包

```py
pip install package_name
```

也可在被安装包的名称后加上版本号以安装指定版本的python包，如pip install package_name==1.2.3。

### 卸载指定的python包

```py
pip uninstall package_name
```

指定版本同上

### 查看已安装的库

```py
pip list
```

![4](./pip%20photo/4.png)

### 查看当前可升级的库

```py
pip list -o
```

![5](./pip%20photo/5.png)

### 查看pip版本（show version and exit）

```py
pip --version
```

![2](./pip%20photo/2.png)

### 升级python包

```py
pip install --upgrade package_name
pip install --U package_name
```

例如升级pip包

![3](./pip%20photo/3.png)

对pip 相关知识感兴趣的同学，可查询[pip官网](https://pypi.org/project/pip/)
