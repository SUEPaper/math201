---
id: git-branch
sidebar_position: 5
---

# Git分支

几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。 在很多版本控制系统中，这是一个略微低效的过程——常常需要完全创建一个源代码目录的副本。对于大项目来说，这样的过程会耗费很多时间。

有人把 Git 的分支模型称为它的“必杀技特性”，也正因为这一特性，使得 Git 从众多版本控制系统中脱颖而出。 为何 Git 的分支模型如此出众呢？ Git 处理分支的方式可谓是难以置信的轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。 与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。 理解和精通这一特性，你便会意识到 Git 是如此的强大而又独特，并且从此真正改变你的开发方式。

## 分支简介

为了真正理解 Git 处理分支的方式，我们需要回顾一下 Git 是如何保存数据的。

或许你还记得起步的内容， Git 保存的不是文件的变化或者差异，而是一系列不同时刻的**快照**。

在进行提交操作时，Git 会保存一个提交对象（commit object）。 知道了 Git 保存数据的方式，我们可以很自然的想到——该提交对象会包含一个指向暂存内容快照的指针。 但不仅仅是这样，该提交对象还包含了作者的姓名和邮箱、提交时输入的信息以及指向它的父对象的指针。 首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象， 而由多个分支合并产生的提交对象有多个父对象，

为了更加形象地说明，我们假设现在有一个工作目录，里面包含了三个将要被暂存和提交的文件。 暂存操作会为每一个文件计算校验和（使用我们在 起步 中提到的 SHA-1 哈希算法），然后会把当前版本的文件快照保存到 Git 仓库中 （Git 使用**blob** 对象来保存它们），最终将校验和加入到暂存区域等待提交：

```
$ git add README test.rb LICENSE
$ git commit -m 'The initial commit of my project'
```

当使用 git commit 进行提交操作时，Git 会先计算每一个子目录（本例中只有项目根目录）的校验和， 然后在 Git 仓库中这些校验和保存为树对象。随后，Git 便会创建一个提交对象， 它除了包含上面提到的那些信息外，还包含指向这个树对象（项目根目录）的指针。 如此一来，Git 就可以在需要的时候重现此次保存的快照。

现在，Git 仓库中有五个对象：三个**blob**对象（保存着文件快照）、一个**树**对象 （记录着目录结构和**blob**对象索引）以及一个**提交**对象（包含着指向前述树对象的指针和所有提交信息）。

![committree](pic/commit-and-tree.png)

Figure 1.首次提交对象及其树结构

做些修改后再次提交，那么这次产生的提交对象会包含一个指向上次提交对象（父对象）的指针。

![parents](pic/parents.png)

Figure 2.提交对象及其父对象

Git 的分支，其实本质上仅仅是指向提交对象的可变指针。 Git 的默认分支名字是 master。 在多次提交操作之后，你其实已经有一个指向最后那个提交对象的 master 分支。 master 分支会在每次提交时自动向前移动。

:::info
Git 的`master`分支并不是一个特殊分支。 它就跟其它分支完全没有区别。 之所以几乎每一个仓库都有`master`分支，是因为`git init`命令默认创建它，并且大多数人都懒得去改动它。
:::

![branch-and-history](pic/branch-and-history.png)

Figure 3.分支及其提交历史

## 分支创建

Git 是怎么创建新分支的呢？ 很简单，它只是为你创建了一个可以移动的新的指针。 比如，创建一个 testing 分支， 你需要使用`git branch`命令：

```
$ git branch testing
```

这会在当前所在的提交对象上创建一个指针。

![two-braches](pic/two-branches.png)

Figure 4.两个指向相同提交历史的分支

那么，Git 又是怎么知道当前在哪一个分支上呢？ 也很简单，它有一个名为`HEAD`的特殊指针。 请注意它和许多其它版本控制系统（如 Subversion 或 CVS）里的`HEAD`概念完全不同。 在 Git 中，它是一个指针，指向当前所在的本地分支（译注：将`HEAD`想象为当前分支的别名）。 在本例中，你仍然在`master`分支上。 因为`git branch`命令仅仅**创建**一个新分支，并不会自动切换到新分支中去。

![head-to-master](pic/head-to-master.png)

Figure 5.HEAD指向当前所在的分支

你可以简单地使用`git log`命令查看各个分支当前所指的对象。提供这一功能的参数是`--decorate`。

```
$ git log --oneline --decorate
f30ab (HEAD -> master, testing) add feature #32 - ability to add new formats to the central interface
34ac2 Fixed bug #1328 - stack overflow under certain conditions
98c`a9 The initial commit of my project
```

正如你所见，当前`master`和`testing`分支均指向校验和以`f30ab`开头的提交对象。

## 分支切换

要切换到一个已存在的分支，你需要使用`git checkout`命令。 我们现在切换到新创建的`testing`分支去：

```
$ git checkout testing
```

这样`HEAD`就指向`testing`分支了。

![head-to-testing](pic/head-to-testing.png)

Figure 6. HEAD 指向当前所在的分支


那么，这样的实现方式会给我们带来什么好处呢？ 现在不妨再提交一次：

```
$ vim test.rb
$ git commit -a -m 'made a change'
```
![advance-testing](pic/advance-testing.png)

Figure 7. HEAD 分支随着提交操作自动向前移动

如图所示，你的 testing 分支向前移动了，但是 master 分支却没有，它仍然指向运行 git checkout 时所指的对象。 这就有意思了，现在我们切换回 master 分支看看：

```
$ git checkout master
```
![checkout-master](pic/checkout-master.png)

Figure 8. 检出时 HEAD 随之移动

这条命令做了两件事。 一是使 HEAD 指回`master`分支，二是将工作目录恢复成`master`分支所指向的快照内容。 也就是说，你现在做修改的话，项目将始于一个较旧的版本。 本质上来讲，这就是忽略`testing`分支所做的修改，以便于向另一个方向进行开发。

:::info
**在切换分支时，一定要注意你工作目录里的文件会被改变。** 如果是切换到一个较旧的分支，你的工作目录会恢复到该分支最后一次提交时的样子。 如果 Git 不能干净利落地完成这个任务，它将禁止切换分支。
:::

我们不妨再稍微做些修改并提交：

```
$ vim test.rb
$ git commit -a -m 'made other changes'
```

现在，这个项目的提交历史已经产生了**分叉**。因为刚才你创建了一个新分支，并切换过去进行了一些工作，随后又切换回`masterr` 分支进行了另外一些工作。 上述两次改动针对的是不同分支：你可以在不同分支间不断地来回切换和工作，并在时机成熟时将它们合并起来。 而所有这些工作，你需要的命令只有`branch``checkout`和`commit`。

![advance-master](pic/advance-master.png)
Figure 9. 项目分叉历史

你可以简单地使用`git log`命令查看分叉历史。 运行`git log --oneline --decorate --graph --all`，它会输出你的提交历史、各个分支的指向以及项目的分支分叉情况。

```
$ git log --oneline --decorate --graph --all
* c2b9e (HEAD, master) made other changes
| * 87ab2 (testing) made a change
|/
* f30ab add feature #32 - ability to add new formats to the
* 34ac2 fixed bug #1328 - stack overflow under certain conditions
* 98ca9 initial commit of my project
```

由于 Git 的分支实质上仅是包含所指对象校验和（长度为 40 的 SHA-1 值字符串）的文件，所以它的创建和销毁都异常高效。 创建一个新分支就相当于往一个文件中写入 41 个字节（40 个字符和 1 个换行符），如此的简单能不快吗？

这与过去大多数版本控制系统形成了鲜明的对比，它们在创建分支时，将所有的项目文件都复制一遍，并保存到一个特定的目录。 完成这样繁琐的过程通常需要好几秒钟，有时甚至需要好几分钟。所需时间的长短，完全取决于项目的规模。 而在 Git 中，任何规模的项目都能在瞬间创建新分支。 同时，由于每次提交都会记录父对象，所以寻找恰当的合并基础。也是同样的简单和高效。 这些高效的特性使得 Git 鼓励开发人员频繁地创建和使用分支。

:::tip
**创建新分支的同时切换过去**
通常我们会在创建一个新分支后立即切换过去，这可以用`git checkout -b <newbranchname>`一条命令搞定。
:::

## 分支的新建与合并

让我们来看一个简单的分支新建与分支合并的例子，实际工作中你可能会用到类似的工作流。 你将经历如下步骤：

1. 开发某个网站。

2. 为实现某个新的用户需求，创建一个分支。

3. 在这个分支上开展工作。

正在此时，你突然接到一个电话说有个很严重的问题需要紧急修补。 你将按照如下方式来处理：

1. 切换到你的线上分支（production branch）。

2. 为这个紧急任务新建一个分支，并在其中修复它。

3. 在测试通过之后，切换回线上分支，然后合并这个修补分支，最后将改动推送到线上分支。

4. 切换回你最初工作的分支上，继续工作。

### 新建分支

首先，我们假设你正在你的项目上工作，并且在`master` 分支上已经有了一些提交。

![basic-branching1](pic/basic-branching-1.png)

Figure 10. 一个简单提交历史

现在，你已经决定要解决你的公司使用的问题追踪系统中的 #53 问题。 想要新建一个分支并同时切换到那个分支上，你可以运行一个带有`-b`参数的`git checkout`命令：

```
$ git checkout -b iss53
Switched to a new branch "iss53"
```

它是下面两条命令的简写：

```
$ git branch iss53
$ git checkout iss53
```

![basic-branching-2](pic/basic-branching-2.png)


Figure 11. 创建一个新分支指针

你继续在 #53 问题上工作，并且做了一些提交。 在此过程中，`iss53` 分支在不断的向前推进，因为你已经检出到该分支 （也就是说，你的`HEAD` 指针指向了`iss53`分支）

```
$ vim index.html
$ git commit -a -m 'added a new footer [issue 53]'
```

![basic-branching-3](pic/basic-branching-3.png)

Figure 12.`iss53`分支随着工作的进展向前推进

现在你接到那个电话，有个紧急问题等待你来解决。 有了 Git 的帮助，你不必把这个紧急问题和 `iss53`的修改混在一起， 你也不需要花大力气来还原关于 53# 问题的修改，然后再添加关于这个紧急问题的修改，最后将这个修改提交到线上分支。 你所要做的仅仅是切换回`master`分支。

但是，在你这么做之前，要留意你的工作目录和暂存区里那些还没有被提交的修改， 它可能会和你即将检出的分支产生冲突从而阻止 Git 切换到该分支。 最好的方法是，在你切换分支之前，保持好一个干净的状态。现在，我们假设你已经把你的修改全部提交了，这时你可以切换回 master 分支了：

```
$ git checkout master
Switched to branch 'master'
```

这个时候，你的工作目录和你在开始 #53 问题之前一模一样，现在你可以专心修复紧急问题了。 请牢记：当你切换分支的时候，Git 会重置你的工作目录，使其看起来像回到了你在那个分支上最后一次提交的样子。 Git 会自动添加、删除、修改文件以确保此时你的工作目录和这个分支最后一次提交时的样子一模一样。

接下来，你要修复这个紧急问题。 我们来建立一个`hotfix`分支，在该分支上工作直到问题解决：

```
$ git checkout -b hotfix
Switched to a new branch 'hotfix'
$ vim index.html
$ git commit -a -m 'fixed the broken email address'
[hotfix 1fb7853] fixed the broken email address
 1 file changed, 2 insertions(+)
 ```
 
![basic-brangching4](pic/basic-branching-4.png)

Figure 13. 基于`master`分支的紧急问题分支`hotfix branch`

你可以运行你的测试，确保你的修改是正确的，然后将`hotfix`分支合并回你的`master`分支来部署到线上。 你可以使用`git merge`命令来达到上述目的：

```
$ git checkout master
$ git merge hotfix
Updating f42c576..3a0874c
Fast-forward
 index.html | 2 ++
 1 file changed, 2 insertions(+)
 ```

在合并的时候，你应该注意到了“快进（fast-forward）”这个词。 由于你想要合并的分支`hotfix`所指向的提交`C4`是你所在的提交`C2`的直接后继， 因此 Git 会直接将指针向前移动。换句话说，当你试图合并两个分支时， 如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候， 只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 “快进（fast-forward）”。

现在，最新的修改已经在`master`分支所指向的提交快照中，你可以着手发布该修复了。

![basic-branching-5](pic/basic-branching-5.png)


Figure 14.`master`被快进到`hotfix`

关于这个紧急问题的解决方案发布之后，你准备回到被打断之前时的工作中。 然而，你应该先删除`hotfix`分支，因为你已经不再需要它了`—— master`分支已经指向了同一个位置。 你可以使用带`-d`选项的`git branch`命令来删除分支：

```
$ git branch -d hotfix
Deleted branch hotfix (3a0874c).
```

现在你可以切换回你正在工作的分支继续你的工作，也就是针对 #53 问题的那个分支（iss53 分支）。

```
$ git checkout iss53
Switched to branch "iss53"
$ vim index.html
$ git commit -a -m 'finished the new footer [issue 53]'
[iss53 ad82d7a] finished the new footer [issue 53]
1 file changed, 1 insertion(+)
```
![basic-branching-6](pic/basic-branching-6.png)

Figure 15. 继续在`iss53`分支上的工作

你在`hotfix`分支上所做的工作并没有包含到`iss53`分支中。 如果你需要拉取`hotfix`所做的修改，你可以使用`git merge master`命令将`master`分支合并入`iss53`分支，或者你也可以等到`iss53`分支完成其使命，再将其合并回`master`分支。

### 分支的合并
假设你已经修正了 #53 问题，并且打算将你的工作合并入`master`分支。 为此，你需要合并`iss53`分支到`master`分支，这和之前你合并`hotfix`分支所做的工作差不多。 你只需要检出到你想合并入的分支，然后运行`git merge`命令：

```
$ git checkout master
Switched to branch 'master'
$ git merge iss53
Merge made by the 'recursive' strategy.
index.html |    1 +
1 file changed, 1 insertion(+)
```

这和你之前合并`hotfix`分支的时候看起来有一点不一样。 在这种情况下，你的开发历史从一个更早的地方开始分叉开来（diverged）。 因为，`master`分支所在提交并不是`iss53`分支所在提交的直接祖先，Git 不得不做一些额外的工作。 出现这种情况的时候，Git 会使用两个分支的末端所指的快照（C4 和 C5）以及这两个分支的公共祖先（C2），做一个简单的三方合并。

![basic-merging-1](pic/basic-merging-1.png)

Figure 16. 一次典型合并中所用到的三个快照

和之前将分支指针向前推进所不同的是，Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它。 这个被称作一次合并提交，它的特别之处在于他有不止一个父提交。

![basic-merging-2](pic/basic-merging-2.png)

Figure 17. 一个合并提交

既然你的修改已经合并进来了，就不再需要`iss53`分支了。 现在你可以在任务追踪系统中关闭此项任务，并删除这个分支。

```
$ git branch -d iss53
```

### 遇到冲突时的分支合并

有时候合并操作不会如此顺利。 如果你在两个不同的分支中，**对同一个文件的同一个部分进行了不同的修改**，Git 就没法干净的合并它们。 如果你对 #53 问题的修改和有关`hotfix`分支的修改都涉及到同一个文件的同一处，在合并它们的时候就会产生合并冲突：

```
$ git merge iss53
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

此时 Git 做了合并，但是没有自动地创建一个新的合并提交。 Git 会暂停下来，等待你去解决合并产生的冲突。 你可以在合并冲突后的任意时刻使用`git status`命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件：

```
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)

    both modified:      index.html

no changes added to commit (use "git add" and/or "git commit -a")
```

任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。 Git 会在有冲突的文件中加入标准的冲突解决标记，这样你可以打开这些包含冲突的文件然后手动解决冲突。 出现冲突的文件会包含一些特殊区段，看起来像下面这个样子：

```
<<<<<<< HEAD:index.html
i like apple
=======
i like banana
>>>>>>> iss53:index.html
```
这表示`HEAD`所指示的版本（也就是你的`master`分支所在的位置，因为你在运行`merge`命令的时候已经检出到了这个分支）在这个区段的上半部分（`=======`的上半部分），而`iss53`分支所指示的版本在`=======`的下半部分。 为了解决冲突，你必须选择使用由`=======`分割的两部分中的一个，或者你也可以自行合并这些内容。 例如，你可以通过把这段内容换成下面的样子来解决冲突：


```
i like apple and banana
```

上述的冲突解决方案仅保留了其中一个分支的修改，并且`<<<<<<<`,`=======`,和`>>>>>>>`这些行被完全删除了。 在你解决了所有文件里的冲突之后，对每个文件使用`git add`命令来将其标记为冲突已解决。 一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。这样你就可以做出下一步提交。

:::note
解决冲突也可以用图形化工具来解决，我们这里就不多阐述了，同学们可以自己去了解。
:::
