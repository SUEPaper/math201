---
id: gitRemote
sidebar_position: 7
---

# Git 的远程仓库和GitHub

## 远程仓库的使用

为了能在任意 Git 项目上协作，你需要知道如何管理自己的远程仓库。 远程仓库是指托管在因特网或其他网络中的你的项目的版本库。 你可以有好几个远程仓库，通常有些仓库对你只读，有些则可以读写。 与他人协作涉及管理远程仓库以及根据需要推送或拉取数据。 管理远程仓库包括了解如何添加远程仓库、移除无效的远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。 在本节中，我们将介绍一部分远程管理的技能。

:::info
**远程仓库可以在你的本地主机上**
你完全可以在一个“远程”仓库上工作，而实际上它在你本地的主机上。 词语“远程”未必表示仓库在网络或互联网上的其它位置，而只是表示它在别处。 在这样的远程仓库上工作，仍然需要和其它远程仓库上一样的标准推送、拉取和抓取操作。
:::

### 查看远程仓库

如果想查看你已经配置的远程仓库服务器，可以运行`git remote`命令。 它会列出你指定的每一个远程服务器的简写。 如果你已经克隆了自己的仓库，那么至少应该能看到 origin ——这是 Git 给你克隆的仓库服务器的默认名字：

```
$ git clone https://github.com/schacon/ticgit
Cloning into 'ticgit'...
remote: Reusing existing pack: 1857, done.
remote: Total 1857 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (1857/1857), 374.35 KiB | 268.00 KiB/s, done.
Resolving deltas: 100% (772/772), done.
Checking connectivity... done.
$ cd ticgit
$ git remote
origin
```

你也可以指定选项`-v`，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。

```
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
```
### 添加远程仓库

我们在之前的章节中已经提到并展示了`git clone`命令是如何自行添加远程仓库的， 不过这里将告诉你如何自己来添加它。 运行`git remote add <shortname> <url>`添加一个新的远程 Git 仓库，同时指定一个方便使用的简写：

```
$ git remote
origin
$ git remote add pb https://github.com/paulboone/ticgit
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
pb	https://github.com/paulboone/ticgit (fetch)
pb	https://github.com/paulboone/ticgit (push)
```

现在你可以在命令行中使用字符串`pb`来代替整个 URL。 例如，如果你想拉取 Paul 的仓库中有但你没有的信息，可以运行`git fetch pb`：

```
$ git fetch pb
remote: Counting objects: 43, done.
remote: Compressing objects: 100% (36/36), done.
remote: Total 43 (delta 10), reused 31 (delta 5)
Unpacking objects: 100% (43/43), done.
From https://github.com/paulboone/ticgit
 * [new branch]      master     -> pb/master
 * [new branch]      ticgit     -> pb/ticgit
 ```

现在 Paul 的`master`分支可以在本地通过`pb/master`访问到——你可以将它合并到自己的某个分支中， 或者如果你想要查看它的话，可以检出一个指向该点的本地分支。

### 远程分支

远程跟踪分支是远程分支状态的引用。它们是你无法移动的本地引用。一旦你进行了网络通信， Git 就会为你移动它们以精确反映远程仓库的状态。请将它们看做书签， 这样可以提醒你该分支在远程仓库中的位置就是你最后一次连接到它们的位置。

它们以`<remote>/<branch>`的形式命名。

例如，如果你想要看你最后一次与远程仓库`origin`通信时`master`分支的状态，你可以查看`origin/master`分支。 你与同事合作解决一个问题并且他们推送了一个`iss53`分支，你可能有自己的本地`iss53`分支， 然而在服务器上的分支会以`origin/iss53`来表示。

这可能有一点儿难以理解，让我们来看一个例子。 假设你的网络里有一个在`git.ourcompany.com`的 Git 服务器。 如果你从这里克隆，Git 的`clone` 命令会为你自动将其命名为`origin`，拉取它的所有数据， 创建一个指向它的`master`分支的指针，并且在本地将其命名为`origin/master`。Git也会给你一个与`origin`的`master`分支在指向同一个地方的本地`master`分支，这样你就有工作的基础。

:::note
**“origin” 并无特殊含义**
远程仓库名字 “origin” 与分支名字 “master” 一样，在 Git 中并没有任何特别的含义一样。 同时 “master” 是当你运行`git init`时默认的起始分支名字，原因仅仅是它的广泛使用， “origin” 是当你运行`git clone`时默认的远程仓库名字。 如果你运行`git clone -o booyah`，那么你默认的远程分支名字将会是`booyah/master`。
:::

![remote-branches-1](pic/remote-branches-1.png)

Figure 1. 克隆之后的服务器与本地仓库

如果你在本地的`master`分支做了一些工作，在同一段时间内有其他人推送提交到`git.ourcompany.com`并且更新了它的`master`分支，这就是说你们的提交历史已走向不同的方向。 即便这样，只要你保持不与`origin`服务器连接（并拉取数据），你的`origin/master`指针就不会移动
。
### 从远程仓库中抓取与拉取

#### Fetch

就如刚才所见，从远程仓库中获得数据，可以执行：

```
$ git fetch <remote>
```

这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。

如果你使用`clone`命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为简写。 所以，`git fetch origin`会抓取克隆（或上一次抓取）后新推送的所有工作。 必须注意`git fetch`命令只会将数据下载到你的本地仓库——它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作。

![remote-branches-3](pic/remote-branches-3.png)

Figure 2.`git fetch`更新你的远程跟踪分支

#### Pull

当`git fetch`命令从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。 它只会获取数据然后让你自己合并。 然而，有一个命令叫作`git pull`在大多数情况下它的含义是一个`git fetch`紧接着一个`git merge`命令。 如果有一个像之前章节中演示的设置好的跟踪分支，不管它是显式地设置还是通过`clone`或`checkout`命令为你创建的，`git pull`都会查找当前分支所跟踪的服务器与分支， 从服务器上抓取数据然后尝试合并入那个远程分支。

由于`git pull`的魔法经常令人困惑所以通常单独显式地使用`fetch`与`merge`命令会更好一些。

如Figure 2中，`git pull`的效果则是在`git fetch`命令后加了一条`git merge origin/master`, 所以你现在的工作目录和远程仓库是同步的。

#### Push

当你想分享你的项目时，必须将其推送到上游。 这个命令很简单：

```
git push <remote> <branch> 
```

当你想要将`master`分支推送到`origin`服务器时,那么运行这个命令就可以将你所做的备份到服务器：

```
$ git push origin master
```

当你想要公开分享一个分支时，需要将其推送到有写入权限的远程仓库上。 本地的分支并不会自动与远程仓库同步——你必须显式地推送想要分享的分支。 这样，你就可以把不愿意分享的内容放到私人分支上，而将需要和别人协作的内容推送到公开分支。

如果希望和别人一起在名为`serverfix`的分支上工作，你可以像推送第一个分支那样推送它。 运行`git push <remote> <branch>r`:

```
$ git push origin serverfix
Counting objects: 24, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (15/15), done.
Writing objects: 100% (24/24), 1.91 KiB | 0 bytes/s, done.
Total 24 (delta 2), reused 0 (delta 0)
To https://github.com/schacon/simplegit
 * [new branch]      serverfix -> serverfix
 ```

>  运行后，你服务器端的历史将会更新到你当前分支所在的位置，（你也可以指定其他分支），同时你的历史中，`oringin/master`,将会移动到`master`分支处。

## GitHub

GitHub 是最大的 Git 版本库托管商，是成千上万的开发者和项目能够合作进行的中心。 大部分 Git 版本库都托管在 GitHub，很多开源项目使用 GitHub 实现 Git 托管、问题追踪、代码审查以及其它事情。 所以，尽管这不是 Git 开源项目的直接部分，但如果想要专业地使用 Git，你将不可避免地与 GitHub 打交道，所以这依然是一个绝好的学习机会。

GitHub 可以存放我们的远程仓库，你可以在其他设备上找到你的文件，而不止在当前的设备。同时GitHub也提供了我们与他人协作的功能。

为了大家进一步了解和使用 GitHub，我们一起来看看 GitHub 的常用术语，也可以说是基本概念：

**Repository**：简称Repo，可以理解为“仓库”，我们的项目就存放在仓库之中。也就是说，如果我们想要建立项目，就得先建立仓库；有多个项目，就建立多个仓库。

**Issues**：可以理解为“问题”，举一个简单的例子，如果我们开源一个项目，如果别人看了我们的项目，并且发现了bug，或者感觉那个地方有待改进，他就可以给我们提出Issue，等我们把Issues解决之后，就可以把这些Issues关闭；反之，我们也可以给他人提出Issue。

**Star**：可以理解为“点赞”，当我们感觉某一个项目做的比较好之后，就可以为这个项目点赞，而且我们点赞过的项目，都会保存到我们的Star之中，方便我们随时查看。在 GitHub 之中，如果一个项目的点星数能够超百，那么说明这个项目已经很不错了。

**Fork**：可以理解为“拉分支”，如果我们对某一个项目比较感兴趣，并且想在此基础之上开发新的功能，这时我们就可以Fork这个项目，这表示复制一个完成相同的项目到我们的 GitHub 账号之中，而且独立于原项目。之后，我们就可以在自己复制的项目中进行开发了。

**Pull Request**：可以理解为“提交请求”，此功能是建立在Fork之上的，如果我们Fork了一个项目，对其进行了修改，而且感觉修改的还不错，我们就可以对原项目的拥有者提出一个Pull请求，等其对我们的请求审核，并且通过审核之后，就可以把我们修改过的内容合并到原项目之中，这时我们就成了该项目的贡献者。

**Merge**：可以理解为“合并”，如果别人Fork了我们的项目，对其进行了修改，并且提出了Pull请求，这时我们就可以对这个Pull请求进行审核。如果这个Pull请求的内容满足我们的要求，并且跟我们原有的项目没有冲突的话，就可以将其合并到我们的项目之中。当然，是否进行合并，由我们决定。

**Watch**：可以理解为“观察”，如果我们Watch了一个项目，之后，如果这个项目有了任何更新，我们都会在第一时候收到该项目的更新通知。

