---
id: control
sidebar_position: 7
---

# 控制语句

## if语句

Python条件语句是通过一条或多条语句的执行结果（True或者False）来决定执行的代码块，执行语句可以是单个语句或语句块。判断条件可以是任何表达式，任何非零、或非空（null）的值均为true。

```py
if True:
    print("Hello World")
print("Goog Bye")
------------------------
Hello World
Goog Bye


if False:
    print("Hello Python")
print("Goog Bye")
------------------------
Goog Bye
```

### if else 语句

```py
if False:
    print("No executed")
else:
    print("Executed")
------------------------
Executed
```

### if elif else

```py
age = int(input("Please your age>>:"))
if 0 < age and age <= 20:
    print("teenager")
elif 20 < age and age <= 40:
    print("Man")
elif 40 < age and age <= 60:
    print("Old")
else:
    print("Died")
------------------------
Please your age>>:30
Man
```

### if嵌套

```py
age = int(input("Please your age>>:"))
if age >= 0:
    if 0 < age and age <= 20:
        print("teenager")
    elif 20 < age and age <= 40:
        print("Man")
    elif 40 < age and age <= 60:
        print("Old")
    else:
        print("Died")
else:
    print("Your age error")
-------------------------
Please your age>>:48
Old
```

## while循环语句

Python中while语句的一般形式：
while 判断条件：
&emsp;语句

举例一个while的经典例题，计算100个数之和。

``` py
sum = 0
count = 0
while count <= 100:
    sum += count
    count += 1
print(sum)
-------------------------
5050
```

## for循环语句

for循环可以遍历任何序列的项目（一个列表或者一个字符串等），基本语法为

```py
for <variable> in <sequence>:
    <statements>
else:
    <statements>
```

举例

```py
fruits = ['banana', 'apple', 'mango','tomato','pelar']
for fruit in range(len(fruits)):
    print('fruit: ',fruits[fruit])
------------------------------------------------
fruit:  banana
fruit:  apple
fruit:  mango
fruit:  tomato
fruit:  pelar
```

## break语句

break 语句可以跳出 for 和 while 的循环体。若遇到break而使得 for 或 while 循环中终止而且 else 块将不执行。

举例

for循环中

```py
for megs in 'Hello Python':
    if megs == 'y':
        break
    print ('输出的当前字母为 :',megs)
--------------------------------
输出的当前字母为 : H
输出的当前字母为 : e
输出的当前字母为 : l
输出的当前字母为 : l
输出的当前字母为 : o
输出的当前字母为 :  
输出的当前字母为 : P
```

while循环中

```py
counts = 0
while counts < 6:
    print("counts:" ,counts)
    if counts == 3:
        break
    counts += 1
---------------------------------
counts: 0
counts: 1
counts: 2
counts: 3
```

## continue语句

continue语句被用来告诉Python跳过当前循环块中的剩余语句，然后继续进行下一轮循环。

举例

while循环中

```py
for megs in 'Hello Python':
    if megs == 'y':
        continue
    print ('输出的当前字母为 :',megs)
--------------------------------
输出的当前字母为 : H
输出的当前字母为 : e
输出的当前字母为 : l
输出的当前字母为 : l
输出的当前字母为 : o
输出的当前字母为 :  
输出的当前字母为 : P
输出的当前字母为 : t
输出的当前字母为 : h
输出的当前字母为 : o
输出的当前字母为 : n-for
```

for循环中

```py
counts = 0
while counts < 6:
    counts += 1
    if counts == 3:
        continue
    print("counts:", counts)
--------------------------------
counts: 1
counts: 2
counts: 4
counts: 5
counts: 6
```

## else子句

循环语句可以有 else 子句，它在穷尽列表(以for循环)或条件变为 false (以while循环)导致循环终止时被执行,但循环被break终止时不执行。

### for else

for 循环中使用 break 语句，break 语句用于跳出当前循环体,且不执行else子句，否则执行else子句。

```py
sites = ["Baidu", "Google","UC","Taobao"]
for site in sites:
    if site == "Baidu":
        print("嗨嗨嗨")
        break
    print("循环数据 " + site)
else:
    print("没有循环数据!")
print("完成循环!")
--------------------------------
嗨嗨嗨
完成循环!
```

### while else语句

在条件语句为 false 时执行则else 的语句块，若遇到break语句则不执行else子句。

```py
count = 0
while count < 10:
    print (count, " 小于 10")
    count = count + 1
else:
    print (count, " 大于或等于 10")
-------------------------
0  小于 10
1  小于 10
2  小于 10
3  小于 10
4  小于 10
5  小于 10
6  小于 10
7  小于 10
8  小于 10
9  小于 10
10  大于或等于 10
```

## Pass语句

pass是空语句，是为了保持程序结构的完整性。pass 不做任何事情，一般用做占位语句。

```py
for char in "Hello World":
    if char == 'W':
        pass
        print("执行pass语句")
    print("char: " ,char)
------------------------------
char:  H
char:  e
char:  l
char:  l
char:  o
char:   
执行pass语句
char:  W
char:  o
char:  r
char:  l
char:  d
```
