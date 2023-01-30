---
id: tensor
sidebar_position: 4
---

# 4. 张量(Tensor): 多维数组

本文参考: 

1. [NumPy Illustrated: The Visual Guide to NumPy](https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d)
2. [A Visual Intro to NumPy and Data Representation](https://jalammar.github.io/visual-numpy/)
3. [《Python Data Science Handbook》](https://www.oreilly.com/library/view/python-data-science/9781491912126/)

## 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
![](./img/numpy-63.png)

通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
![](./img/numpy-64.png)

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
![](./img/numpy-65.png)

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
![](./img/numpy-66.png)

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
![](./img/numpy-67.png)

如果不考虑轴数，可以将数组转换hstack和相应形式：
![](./img/numpy-68.png)

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。

通过混合索引顺序可实现数组转置，掌握该方法将加深你对3维数据的了解。根据确定的轴顺序，转置数组平面的命令有所不同：对于通用数组，交换索引1和2，对于RGB图像交换0和1：
![](./img/numpy-69.png)

注意，transpose（a.T）的默认轴参数会颠倒索引顺序，这不同于上述述两种索引顺序。

广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
![](./img/numpy-70.png)

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。