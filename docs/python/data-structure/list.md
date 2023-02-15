---
id: list
sidebar_position: 1
---

# 列表
列表（list）是Python中一个基本的数据结构。

类似于c语言中的数组，有着索引，从0开始。

## 列表的创建
Python新建变量不像c语言一样需要声明。

在c语言中，创建数组需要声明这是什么类型的数组，有几个元素，如：
```C
int array[5];
```
但在Python中，比较自由，无需声明，什么类型的数据都可以放入列表，整形，浮点型，字符串等等，如：
```python
list1 = ["SUEP",1951,1.13]
list2 = [1,2,3,4,5]
list3 = ['a','b','c']
```
因为Python的列表啥都可以放，因此甚至可以嵌套
```python
list1 = ["SUEP",1951,1.13]
list2 = [1,2,3,4,5]
list3 = [1,2,list2]
print(list3)
print(list3[2])
"""
输出：
[1, 2, [1, 2, 3, 4, 5]]
[1, 2, 3, 4, 5]
"""
```
## 列表的使用
### 通过索引
c语言中，数组的使用是用索引来访问数组中的值，如：
```c
int array[5] = {1,2,3,4,5};
printf("%d",array[1]);
/*
输出：
2
*/
```
Python与其类似，也可以使用
```Python
list1 = ["SUEP",1951,1.13]
print(list1[1])
"""
输出：
1951
"""
```
除此之外，Python的索引还可以是负数
```Python
list1 = ["SUEP",1951,1.13]
print(list1[-1])
print(list1[-2])
"""
输出：
1.13
1951
"""
```
### 切片
与c语言不同的是，Python有着切片这一概念，与MATLAB类似。
```python
#语法为list[a:b],返回list中索引为a到b的元素
list1 = ["SUEP",1951,1.13,19.39]
print(list1[1:4])
print(list1[4:1])
print(list1[-4:-1])
#也可以list[a:]，返回list中索引为a到结束的元素
print(list1[2:])
"""
输出：
[1951, 1.13, 19.39]
[]
['SUEP', 1951, 1.13]
[1.13, 19.39]
"""
```
### 列表元素更新
c语言中可以使用对数组元素赋值的办法改变其值
```c
int array[5] = {1,2,3,4,5};
array[1] = 666
printf("%d",array[1]);
/*
输出：
666
*/
```
同理，Python也可以
```python
list1 = ["SUEP",1951,1.13]
list1[1] = 666
print(list1[1])
"""
输出：
666
"""
```
### 列表的运算
列表具有$+$与$*$这两种运算，$+$为列表相连，$*$为列表重复
```python
list1 = ["SUEP",1951,1.13]
list2 = ["xsm"]
print(list1 + list2)
print(list2 + list1)
print(list2 + list1 + list2)
print(list2 * 2)
#也可以使用+=与*=
list2 += list2
print(list2)
list2 *= 3
print(list2)
"""
输出：
['SUEP', 1951, 1.13, 'xsm']
['xsm', 'SUEP', 1951, 1.13]
['SUEP', 1951, 1.13, 'xsm', 'SUEP', 1951, 1.13]
['xsm', 'SUEP', 1951, 1.13, 'xsm']
['xsm', 'xsm']
['xsm', 'xsm']
['xsm', 'xsm', 'xsm', 'xsm', 'xsm', 'xsm']
"""
```
== 可以判断两个list是否一样
```python
list1 = ["xsm"]
list2 = ["bfx"]
print(list1 == list2)
print(list1 == list1)
"""
输出：
False
True
"""
```
### 可以使用的函数
```python
list1 = ["SUEP",1951,1.13]
#获得list的长度
print(len(list1))
#获得最大最小值
list2 = [1,1,4,5,1]
print(min(list2))
print(max(list2))
"""
输出：
3
1
5
"""
```
### list删除
del list[loc]删除索引为loc的元素
```python
list1 = ["SUEP",1951,1.13]
del list1[1]
print(list1)
"""
输出：
['SUEP', 1.13]
"""
```
### list迭代
```python
list1 = ["SUEP",1951,1.13]
for i in list1:
    print(i)
"""
输出：
SUEP
1951
1.13
"""
```
### list自带的常用方法
#### append()
list.append(xxx)在list后添加xxx(只能一个)
```python
list1 = ["SUEP",1951,1.13]
list1.append("xsm")
print(list1)
list1.append(["xsm","xsm"])
print(list1)
"""
输出：
['SUEP', 1951, 1.13, 'xsm']
['SUEP', 1951, 1.13, 'xsm', ['xsm', 'xsm']]
""" 
```
#### extend()
list.extend(xxx,xxx)在list后添加xxx，xxx(好几个)
```python
list1 = ["SUEP",1951,1.13]
list1.extend("xsm")
print(list1)
list1.extend(["xsm"])
print(list1)
list1.extend(["xsm","bfx"])
print(list1)
"""
输出：
['SUEP', 1951, 1.13, 'x', 's', 'm']
['SUEP', 1951, 1.13, 'x', 's', 'm', 'xsm']
['SUEP', 1951, 1.13, 'x', 's', 'm', 'xsm', 'xsm', 'bfx']
""" 
```
#### index()
list.index(xxx)寻找list中xxx的索引
```python
list1 = ["SUEP",1951,1.13,"xsm"]
print(list1.index("xsm"))
"""
输出：
3
"""
```
#### insert()
list.insert(loc,xxx)在索引loc处插入xxx
```python
list1 = ["SUEP",1951,1.13]
print(list1.insert(1,"xsm"))
"""
输出：
['SUEP', 'xsm', 1951, 1.13]
"""
```
#### pop()
list.pop()删除最后一个元素并返回该元素
```python
list1 = ["SUEP",1951,1.13]
print(list1.pop())
print(list1)
"""
输出：
1.13
['SUEP',1951]
"""
```
#### reverse()
list.reverse()反转元素
```python
list1 = ["SUEP",1951,1.13]
list1.reverse()
print(list1)
```
#### in
xxx in list list内是否有xxx
```python
list1 = ["SUEP",1951,1.13]
print(1951 in list1)
"""
输出：
True
"""
```
#### other
[剩余的内置方法，w3cshool](https://www.w3school.com.cn/python/python_ref_functions.asp)
[官网文档](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#more-on-lists)