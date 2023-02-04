---
id: loop
sidebar_position: 9
---

# 循环和迭代
## Python 循环
Python 有两个原始的循环命令:
- while 循环
- for 循环
### while 循环
如果使用 while 循环，只要条件为真，我们就可以执行一组语句。

__例子1__

如果i 小于 10，打印 i：
```bash
i = 1
while i < 10:
  print(i)
  i += 1
```
:::tip
在这里记得递增 i，否则循环会永远继续,(也就是死循环)。

while 循环需要准备好相关的变量。在这个实例中，我们需要定义一个判断变量 i
:::
#### break 语句
使用 break 语句，当 while 条件为真，我们就可以跳出循环

__例子2__

如果 i 等于 3，则继续下一个迭代：
```bash
i = 0
while i < 10:
  i += 1 
  if i == 3:
    continue
  print(i)
```
#### else 语句
使用 else 语句，当条件不再成立时，我们可以运行一次代码块：

__例子3__

条件为假时，打印一条消息：
```bash
i = 1
while i < 10:
  print(i)
  i += 1
else:
  print("i is no longer less than 10")
```
### for 循环
比起 while ，for 循环更为常见。for 循环用于迭代序列（即列表，元组，字典，集合或字符串）。

这与其他编程语言中的 for 关键字不太相似，而是更像其他面向对象编程语言中的迭代器方法。

通过使用 for 循环，我们可以为列表、元组、集合中的每个项目等执行一组语句。

__例子4__

打印 class 列表中的每种课程：
```bash
class = ["数值计算方法实训课", "英语课", "语文课"]
for x in class:
  print(x)
```
:::tip
for 循环不需要预先设置索引变量。
:::
#### 循环遍历字符串
连字符串都是可迭代的对象，它们包含一系列的字符：

__例子5__

循环遍历单词 "banana" 中的字母：
```bash
for x in "banana":
  print(x)
```
#### break 语句
通过使用 break 语句，我们可以在循环遍历所有项目之前跳出循环：
```bash
class = ["数值计算方法实训课", "英语课", "语文课"]
for x in class:
  print(x)
  if x == "数值计算方法实训课":
    break
```

__例子6__

当 x 为 "数值计算方法实训课" 时退出循环，但这次在打印之前中断：
```bash
class = ["数值计算方法实训课", "英语课", "语文课"]
for x in class:
  if x == "数值计算方法实训课":
    break
print(x)
```
#### continue 语句
通过使用 continue 语句，我们可以停止循环的当前迭代，并继续下一个：

__例子7__

不打印数值计算方法实训课：
```bash
class = ["数值计算方法实训课", "英语课", "语文课"]
for x in class:
  if x == "数值计算方法实训课":
    continue
print(x)
```
#### range() 函数
如需循环一组代码指定的次数，我们可以使用 range() 函数，range() 函数返回一个数字序列，默认情况下从 0 开始，并递增 1（默认地），并以指定的数字结束。

__例子8__

使用 range() 函数：
```bash
for x in range(10):
  print(x)
```
:::tip
range(10) 不是 0 到 10 的值，而是值 0 到 9。

range() 函数默认 0 为起始值，不过可以通过添加参数来指定起始值：range(3, 10)，这意味着值为 3 到 10（包括3，但不包括 10）：
:::
range() 函数默认将序列递增 1，但是可以通过添加第三个参数来指定增量值：range(2, 30, 3)：

__例子9__

使用 3 递增序列（默认值为 1）：
```bash
for x in range(3, 50, 6):
  print(x)
```
#### For 循环中的 else
for 循环中的 else 关键字指定循环结束时要执行的代码块：

__例子10__

打印 0 到 9 的所有数字，并在循环结束时打印一条消息：
```bash
for x in range(10):
  print(x)
else:
  print("welcome to numerical computing Methods")
```
#### 嵌套循环
嵌套循环是循环内的循环。

“外循环”每迭代一次，“内循环”将执行一次：

__例子11__

打印每个课程的每个形容词：
```bash
adj = ["有趣的", "困难的", "奇妙的"]
class = ["数值计算方法实训课", "英语课", "语文课"]
for x in adj:
  for y in class:
    print(x, y)
```
#### pass 语句
for 语句不能为空，但是如果您处于某种原因写了无内容的 for 语句，请使用 pass 语句来避免错误。

__例子12__

```bash
for x in [0, 1, 2]:
  pass
```
## Python 迭代
迭代是通过重复执行的代码处理相似的数据集的过程，并且本次迭代的处理数据要依赖上一次的结果继续往下做，上一次产生的结果为下一次产生结果的初始状态，如果中途有任何停顿，都不能算是迭代。
### 可迭代对象(Iterable)：
可迭代对象并不是指某种具体的数据类型，它是指存储了元素的一个容器对象，且容器中的元素可以通过__iter__( )方法或__getitem__( )方法访问。
a.集合数据类型，如list、tuple、dict、set、str等；

b.生成器(generator)，包括生成器和带yield的生成器函数(generator function)。
### Python 迭代器
迭代器是一种对象，该对象包含值的可计数数字。

迭代器是可迭代的对象，这意味着您可以遍历所有值。

从技术上讲，在 Python 中，迭代器是实现迭代器协议的对象，它包含方法 __iter__() 和 __next__()。

### 迭代器 VS 可迭代对象（Iterable）
列表、元组、字典和集合都是可迭代的对象。它们是可迭代的容器，您可以从中获取迭代器（Iterator）。

所有这些对象都有用于获取迭代器的 iter() 方法：

__例子13__

从元组返回一个迭代器，并打印每个值：
```bash
mytuple = ("数值计算方法实训课", "英语课", "语文课")
myit = iter(mytuple)
print(next(myit))
print(next(myit))
print(next(myit))
```
连字符串都是可迭代的对象，并且可以返回迭代器：

__例子14__

字符串也是可迭代的对象，包含一系列字符：
```bash
mystr = "数值计算方法实训课"
myit = iter(mystr)
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
```
### 遍历迭代器
我们也可以使用 for 循环遍历可迭代对象：

__例子15__

迭代元组的值：
```bash
mytuple = ("数值计算方法实训课", "英语课", "语文课")
for x in mytuple:
  print(x)
```

__例子16__

```bash
mystr = "数值计算方法实训课"
for x in mystr:
  print(x)
```
:::tip
for 循环实际上创建了一个迭代器对象，并为每个循环执行 next() 方法。
:::
### 创建迭代器
要把对象/类创建为迭代器，必须为对象实现 __iter__() 和 __next__() 方法。

正如您在 Python 类/对象 一章中学到的，所有类都有名为 __init__() 的函数，它允许您在创建对象时进行一些初始化。

__iter__() 方法的作用相似，您可以执行操作（初始化等），但必须始终返回迭代器对象本身。

__next__() 方法也允许您执行操作，并且必须返回序列中的下一个项目。

__例子17__

创建一个返回数字的迭代器，从 1 开始，每个序列将增加 1（返回 1、2、3、4、5 等）：
```bash
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    x = self.a
    self.a += 1
    return x

myclass = MyNumbers()
myiter = iter(myclass)

print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
```
### StopIteration
如果有足够的 next() 语句，或者在 for 循环中使用，则上面的例子将永远进行下去。

为了防止迭代永远进行，我们可以使用 StopIteration 语句。

在 __next__() 方法中，如果迭代完成指定的次数，我们可以添加一个终止条件来引发错误：

__例子18__

在 20 个迭代之后停止：
```bash
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    if self.a <= 20:
      x = self.a
      self.a += 1
      return x
    else:
      raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
  print(x)
```