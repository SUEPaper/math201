---
id: pip
sidebar_position: 3
---

# 包管理

## pip简介

&emsp;pip是Python标准库管理器，是用来安装不同类库的工具，可以对Python包进行查找、下载、安装和卸载等功能。

&emsp;pip提供了对Python包快捷有效的管理，当我们的Python版本在2.7.9+或3.4及以上版本都自带 pip 工具。在此简单地介绍一下pip的部分相关指令.

## 如何进行pip包管理

### 使用中国源

当我们进行pip下载时，使用外国的源会导致下载速度很慢，所以在使用之前我们首先要学会如何使用中国源。

首先在 C:\Users\用户名 下面创建一个pip文件夹 如图：

![6](./pip%20photo/6.png)

然后 在pip文件夹下创建一个pip.ini文件 在文件里输入内容：

```py
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
# 以清华镜像源为例
```

![7](./pip%20photo/7.png)

当然，如果使用示例中的清华源依然下载卡顿，我们还可以选择别的中国源（http不行就换https源）：

```txt
清华：https://pypi.tuna.tsinghua.edu.cn/simple
阿里云：https://mirrors.aliyun.com/pypi/simple/
中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/
华中理工大学：http://pypi.hustunique.com/
山东理工大学：http://pypi.sdutlinux.org/
豆瓣：http://pypi.douban.com/simple/
```

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
