---
id: exercises
sidebar_position: 6
---


# 6. 练习题


练习题的Jupyter Notebook版：https://github.com/rougier/numpy-100/blob/master/100_Numpy_exercises.ipynb

:::danger

我们知道该链接包含了练习题的答案，还请你先动脑子思考一下，再看答案，学术诚信是你作为成年人应该遵守的准则。

:::  

#### 1. 导入numpy库并简写为 np (★☆☆)

#### 2. 打印numpy的版本和配置说明 (★☆☆)

#### 3. 创建一个长度为10的空向量 (★☆☆)

#### 4. 如何找到任何一个数组的内存大小？ (★☆☆)

#### 5. 如何从命令行得到numpy中add函数的说明文档? (★☆☆)

#### 6. 创建一个长度为10并且除了第五个值为1的空向量 (★☆☆)

#### 7. 创建一个值域范围从10到49的向量 (★☆☆)

#### 8. 反转一个向量(第一个元素变为最后一个) (★☆☆)

#### 9. 创建一个 3x3 并且值从0到8的矩阵 (★☆☆)

#### 10. 找到数组[1,2,0,0,4,0]中非0元素的位置索引 (★☆☆)

#### 11. 创建一个 3x3 的单位矩阵 (★☆☆)

#### 12. 创建一个 3x3x3的随机数组 (★☆☆)

#### 13. 创建一个 10x10 的随机数组并找到它的最大值和最小值 (★☆☆)

#### 14. 创建一个长度为30的随机向量并找到它的平均值 (★☆☆)

#### 15. 创建一个二维数组，其中边界值为1，其余值为0  (★☆☆)

#### 16. 对于一个存在在数组，如何添加一个用0填充的边界? (★☆☆)

#### 17. 以下表达式运行的结果分别是什么? (★☆☆)
```python
0 * np.nan
np.nan == np.nan
np.inf > np.nan
np.nan - np.nan
np.nan in set([np.nan])
0.3 == 3 * 0.1
```
#### 18. 创建一个 5x5的矩阵，并设置值1,2,3,4落在其对角线下方位置 (★☆☆)

#### 19. 创建一个8x8 的矩阵，并且设置成棋盘样式 (★☆☆)

#### 20. 考虑一个 (6,7,8) 形状的数组，其第100个元素的索引(x,y,z)是什么? (★☆☆)

#### 21. 用tile函数去创建一个 8x8的棋盘样式矩阵 (★☆☆)

#### 22. 对一个5x5的随机矩阵做归一化 (★☆☆)

#### 23. 创建一个将颜色描述为(RGBA)四个无符号字节的自定义dtype？ (★☆☆)

#### 24. 一个5x3的矩阵与一个3x2的矩阵相乘，实矩阵乘积是什么？ (★☆☆)

#### 25. 给定一个一维数组，对其在3到8之间的所有元素取反  (★☆☆)

#### 26. 下面脚本运行后的结果是什么? (★☆☆)
```python
# Author: Jake VanderPlas

print(sum(range(5),-1))
from numpy import *
print(sum(range(5),-1))
```
#### 27. 考虑一个整数向量Z,下列表达合法的是哪个? (★☆☆)
```python
Z**Z
2 << Z >> 2
Z <- Z
1j*Z
Z/1/1
Z<Z>Z
```
#### 28. 下列表达式的结果分别是什么? (★☆☆)
```python
np.array(0) / np.array(0)
np.array(0) // np.array(0)
np.array([np.nan]).astype(int).astype(float)
```
#### 29. 如何从零位对浮点数组做舍入? (★☆☆)

#### 30. 如何找到两个数组中的共同元素? (★☆☆)

#### 31. 如何忽略所有的 numpy 警告(尽管不建议这么做)? (★☆☆)

#### 32. 下面的表达式是正确的吗? (★☆☆)
```python
np.sqrt(-1) == np.emath.sqrt(-1)
```

#### 33. 如何得到昨天，今天，明天的日期? (★☆☆)

#### 34. 如何得到所有与2016年7月对应的日期？ (★★☆)

#### 35. 如何直接在位计算(A+B)\*(-A/2)(不建立副本)? (★★☆)

#### 36. 用4种不同的方法去提取一个随机数组的整数部分 (★★☆)

#### 37. 创建一个5x5的矩阵，其中每行的数值范围从0到4 (★★☆)

#### 38. 通过考虑一个可生成10个整数的函数，来构建一个数组 (★☆☆)

#### 39. 创建一个长度为10的随机向量，其值域范围从0到1，但是不包括0和1 (★★☆)

#### 40. 创建一个长度为10的随机向量，并将其排序 (★★☆)

#### 41. 对于一个小数组，如何用比 np.sum更快的方式对其求和？ (★★☆)

#### 42. 对于两个随机数组A和B，检查它们是否相等 (★★☆)

#### 43. 创建一个只读数组(read-only) (★★☆)

#### 44. 将笛卡尔坐标下的一个10x2的矩阵转换为极坐标形式 (★★☆)

#### 45. 创建一个长度为10的向量，并将向量中最大值替换为1 (★★☆)

#### 46. 创建一个结构化数组，并实现 `x` 和 `y` 坐标覆盖 [0,1]x[0,1] 区域 (★★☆)

#### 47. 给定两个数组X和Y，构造Cauchy矩阵C (Cij =1/(xi - yj)) (★★☆)

#### 48. 打印每个numpy标量类型的最小值和最大值？ (★★☆)

#### 49. 如何打印一个数组中的所有数值? (★★☆)

#### 50. 给定标量时，如何找到数组中最接近标量的值？ (★★☆)

#### 51. 创建一个表示位置(x,y)和颜色(r,g,b)的结构化数组 (★★☆)

#### 52. 对一个表示坐标形状为(100,2)的随机向量，找到点与点的距离 (★★☆)
#### 53. 如何将32位的浮点数(float)转换为对应的整数(integer)?
#### 54. 如何读取以下文件? (★★☆)
```
1, 2, 3, 4, 5
6,  ,  , 7, 8
 ,  , 9,10,11
```

#### 55. 对于numpy数组，enumerate的等价操作是什么？(★★☆)

#### 56. 生成一个通用的二维Gaussian-like数组 (★★☆)

#### 57. 对一个二维数组，如何在其内部随机放置p个元素? (★★☆)

#### 58. 减去一个矩阵中的每一行的平均值 (★★☆)

#### 59. 如何通过第n列对一个数组进行排序? (★★☆)

#### 60. 如何检查一个二维数组是否有空列? (★★☆)

#### 61. 从数组中的给定值中找出最近的值 (★★☆)

#### 62. 如何用迭代器(iterator)计算两个分别具有形状(1,3)和(3,1)的数组? (★★☆)

#### 63. 创建一个具有name属性的数组类 (★★☆)

#### 64. 考虑一个给定的向量，如何对由第二个向量索引的每个元素加1(小心重复的索引)? (★★★)

#### 65. 根据索引列表(I)，如何将向量(X)的元素累加到数组(F)? (★★★)

#### 66. 考虑一个(dtype=ubyte) 的 (w,h,3)图像，计算其唯一颜色的数量 (★★☆)

#### 67. 考虑一个四维数组，如何一次性计算出最后两个轴(axis)的和? (★★★)

#### 68. 考虑一个一维向量D，如何使用相同大小的向量S来计算D子集的均值? (★★★)

#### 69. 如何获得点积 dot prodcut的对角线? (★★★)

#### 70. 考虑一个向量[1,2,3,4,5],如何建立一个新的向量，在这个新向量中每个值之间有3个连续的零? (★★★)

#### 71. 考虑一个维度(5,5,3)的数组，如何将其与一个(5,5)的数组相乘? (★★★)

#### 72. 如何对一个数组中任意两行做交换? (★★★)

#### 73. 考虑一个可以描述10个三角形的triplets，找到可以分割全部三角形的line segment (★★★)

#### 74. 给定一个二进制的数组C，如何产生一个数组A满足np.bincount(A)==C? (★★★)

#### 75. 如何通过滑动窗口计算一个数组的平均数? (★★★)

#### 76. 思考以为数组Z，构建一个二维数组，其第一行是(Z[0],Z[1],Z[2])， 然后每一行移动一位，最后一行为 (Z[-3],Z[-2],Z[-1]). (★★★)

#### 77. 如何对布尔值取反，或者原位(in-place)改变浮点数的符号(sign)? (★★★)

#### 78. 考虑两组点集P0和P1去描述一组线(二维)和一个点p,如何计算点p到每一条线 i (P0[i],P1[i])的距离? (★★★)

#### 79. 考虑两组点集P0和P1去描述一组线(二维)和一组点集P，如何计算每一个点 j(P[j]) 到每一条线 i (P0[i],P1[i])的距离? (★★★)

#### 80. 思考一个任意的数组，编写一个函数，该函数提取一个具有固定形状的子部分，并以一个给定的元素为中心(在该部分填充值) (★★★)

#### 81. 考虑一个数组Z = [1,2,3,4,5,6,7,8,9,10,11,12,13,14],如何生成一个数组R = [[1,2,3,4], [2,3,4,5], [3,4,5,6], ...,[11,12,13,14]]? (★★★)

#### 82. 计算一个矩阵的秩 (★★★)

#### 83. 如何找到一个数组中出现频率最高的值?

#### 84. 从一个10x10的矩阵中提取出连续的3x3区块 (★★★)

#### 85. 创建一个满足 Z[i,j] == Z[j,i]的子类 (★★★)

#### 86. 考虑p个 nxn 矩阵和一组形状为(n,1)的向量，如何直接计算p个矩阵的乘积(n,1) (★★★)

#### 87. 对于一个16x16的数组，如何得到一个区域(block-sum)的和(区域大小为4x4)? (★★★)

#### 88. 如何利用numpy数组实现Game of Life? (★★★)
提示[Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

#### 89. 如何找到一个数组的第n个最大值 (★★★)

#### 90. 给定任意个数向量，创建笛卡尔积(每一个元素的每一种组合) (★★★)

#### 91. 如何从一个正常数组创建记录数组(record array)? (★★★)

#### 92. 考虑一个大向量Z, 用三种不同的方法计算它的立方 (★★★)

#### 93. 考虑两个形状分别为(8,3) 和(2,2)的数组A和B. 如何在数组A中找到满足包含B中元素的行？(不考虑B中每行元素顺序)? (★★★)

#### 94. 考虑一个10x3的矩阵，分解出有不全相同值的行 (如 [2,2,3])  (★★★)

#### 95. 将一个整数向量转换为matrix binary的表现形式 (★★★)

#### 96. 给定一个二维数组，如何提取出唯一的(unique)行? (★★★)

#### 97. 考虑两个向量A和B，写出用einsum等式对应的inner, outer, sum, mul函数 (★★★)

#### 98. 考虑一个由两个向量描述的路径(X,Y)，如何用等距样例(equidistant samples)对其进行采样(sample)? (★★★)

#### 99. 给定一个整数n 和一个二维数组X，从X中选择可以被解释为从多n度的多项分布式的行，即这些行只包含整数对n的和. (★★★)

#### 100. 对于一个一维数组X，计算它boostrapped之后的95%置信区间的平均值. (★★★)