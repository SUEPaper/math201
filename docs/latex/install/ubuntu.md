---
id: ubuntu
sidebar_position: 2
---

# Ubuntu Linux 安装 MiKTeX

## 配置Ubuntu安装源

#### 1. 注册 GPG Key

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys D6BC243565B2087BC3F897C9277A7293F59E4889
```

#### 2. 注册安装源

不同的Ubuntu的版本所需要添加的源不同，具体命令如下：

- Ubuntu 22.04 LTS (Jammy Jellyfish):
```bash
echo "deb http://miktex.org/download/ubuntu jammy universe" | sudo tee /etc/apt/sources.list.d/miktex.list
```

- Ubuntu 20.04 LTS (Focal Fossa):
```bash
echo "deb http://miktex.org/download/ubuntu focal universe" | sudo tee /etc/apt/sources.list.d/miktex.list
```

#### 3. 命令行安装MiKTeX
```bash
sudo apt-get update
sudo apt-get install miktex
```

## MiKTeX远程仓库配置

由于众所周知的原因，在中国大陆访问默认的MiKTeX远程宏包管理库非常慢，因此要将MiKTeX的远程宏包管理库配置为中国大陆内的镜像仓库。


#### 1. 打开MiKTeX Console程序
在开始菜单栏中找到MiKTex Console程序，打开该程序。

![](./img/linux/MiKTeX01.png)

#### 2. 配置页面01
选择 更新 -> 更改，进入宏包源配置界面。

![](./img/linux/MiKTeX02.png)

#### 3. 配置页面02
选择 Next，进入远程宏包存储库配置界面。

![](./img/linux/MiKTeX03.png)

#### 4. 配置页面03
选择Country为China，并且Host离你最近的仓库，这里推荐使用: mirrors.ustc.edu.cn。点击Finish，即可完成远程宏包管理库的配置

![](./img/linux/MiKTeX04.png)