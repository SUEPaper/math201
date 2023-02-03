---
sidebar_position: 1
---
# 面向对象编程
面向对象编程Object-oriented programming (OOP) 是一种组织程序的方法。
## 类与对象
类充当所有类型为该类的对象的模板。每个对象都是某个特定类的实例。类定义指定该类的对象之间共享的属性和方法。
```python
import numpy as np
import matplotlib.pyplot as plt
import datetime
#函数f(x)
class NERFE: #非线性方程求根实验(Nonlinear Equation Root Finding Experiment) 
    num = 100 #画图时点的个数
    def __init__(self,name,func = lambda x:x * np.exp(x) - 1):                                     #构造函数，用来初始化值    
        self.path = './prob01-plot.svg'                     #默认储存路径
        self.object_function = func                         #默认目标函数
        self.author = name                                  #大作业作者名字
        self.date = datetime.date.today()                   #当前日期


    def draw_f(self,left = -2,right = 1,save = True,show = True):
        '''
        绘图方法
        :left图像所在区间的左端点值,默认为-2
        :right图像所在区间的右端点值,默认为1
        :save图像是否保存,默认为True
        :show图像是否输出,默认为True
        '''
        x = np.linspace(left, right, self.num) #取区间[left, right]上num个等分点
        y = self.object_function(x)
        plt.plot(x, y, linewidth=2) # 绘制y=f(x)的图像
        y2 = np.zeros_like(y)  #y2=0
        plt.plot(x, y2, linewidth=2, linestyle='--', label='$y = 0$') # 绘制y2=0的图像
        plt.xlabel('x')
        plt.ylabel('y')
        plt.legend()
        if(show == True):
            plt.show()
        if(save == True):
            plt.savefig('prob01-plot.svg', format='svg', dpi=500) #保存图像

    def show_who_do_it(self):
        """
            输出这是谁做的作业
        """
        print(f'{self.author} 在{self.date}完成的')


if __name__ == '__main__':
    nerfe1 = NERFE('zcx')#实例化NERFE类，nerfe1为对象
    nerfe1.draw_f()# 调用对象nerfe的方法draw_f，生成图像
    print(nerfe1.object_function(2))
    nerfe1.show_who_do_it()# 调用对象nerfe的方法show_who_do_it，输出作者与日期
    
    def new_function1(x):
        return x ** 2 + 2

    def new_function2(x):
        return x ** 3 + 2    

    nerfe2 = NERFE('zcx',new_function1)#实例化NERFE类，nerfe1为对象
    nerfe2.draw_f(save = False)

    nerfe2.object_function = new_function2 # 更新目标函数
    nerfe2.draw_f(save = False)
    
    
```

在上述代码中，path,object_function,author,date，draw_f，show_who_do_it为对象中共有的属性与方法。

创建新对象实例的行为称为实例化类

Python 中用于实例化类的语法与调用函数的语法相同。在这种情况下，使用'zcx'实例化对象
```python
nerfe1 = NERFE('zcx')
```
对象的属性是与对象关联的名称-值对，可以通过点符号访问。
```python
nerfe1.author
"""
输出
'zcx'
"""
```
对对象进行操作或执行特定于对象的计算的函数称为方法。方法的返回值和副作用可能取决于并更改对象的其他属性。
```python
nerfe1.draw1()
nerfe1.draw1(save = False)
```
## 定义类

用户定义的类由类语句创建，类语句由单个子句组成。类语句定义类名，然后包含一组语句来定义类的属性：
```python
class <类名>:
    <内容>
```
### 类的构造函数
类通过定义初始化新对象的方法来指定其对象的实例属性。例如类NERFE的对象初始化时，为path 与 date 分别赋值
初始化对象的方法在 Python 中有一个特殊的名称， __init __（“init”一词两边各有两个下划线），称为类的构造函数。
```python
class NERFE:
    def __init__(self,name,func = lambda x:x * np.exp(x) - 1):                                     #构造函数，用来初始化值    
        self.path = './prob01-plot.svg'                     #默认储存路径
        self.object_function = func                         #默认目标函数
        self.author = name                                  #大作业作者名字
        self.date = datetime.date.today()   
```
类NERFE的__init__方法有三个形参

第一个self绑定到新创建的NERFE对象。

第二第三个形参绑定到调用实例化时传递给类的参数。

第三个参数func的默认值为
```python
lambda x:x * np.exp(x) - 1
```
构造函数将实例属性名称path绑定到'./prob01-plot.svg',

object_function绑定到输入的形参func，

author绑定到输入的形参name，

date绑定到当前日期

### 类的实例化
定义了NERFE类后，我们可以实例化它。
```python
nerfe1 = NERFE('zcx')
nerfe2 = NERFE('zcx',new_function1)
nerfe3 = NERFE('xsm')
```
这个对NERFE类的“调用”创建了一个新对象，它是NERFE的一个实例，然后使用三个个参数调用构造函数__init__：新创建的对象，字符串'zcx'，函数new_function1。

每个对象都具有唯一标识。使用is和is not运算符比较对象标识。
```python
nerfe1 is nerfe1
"""
True
"""
nerfe1 is not nerfe3
"""
False
"""
```
像往常一样，使用赋值将一个对象绑定到一个新名称并不会创建一个新对象。
```python
nerfe4 = nerfe1
nerfe4 is nerfe1
"""
True
"""
```
只有在使用调用表达式语法实例化类时，才会创建具有用户定义类的新对象。
### 方法
对象方法也由类语句组中的def语句定义。下面，show_who_do_it和draw_f都被定义为Account类对象的方法。
```python
def show_who_do_it(self):
        """
            输出这是谁做的作业
        """
        print(f'{self.author} 在{self.date}完成的')
```
虽然方法定义在声明方式上与函数定义没有区别，但方法定义在执行时确实具有不同的效果。由类语句中的def语句创建的函数值绑定到声明的名称，但在类中作为属性本地绑定。该值作为方法调用，使用来自类实例的点表示法。

每个方法定义再次包含一个特殊的第一个参数self，它绑定到调用该方法的对象。

所有调用的方法都可以通过self参数访问对象，因此它们都可以访问和操作对象的状态。
### 消息传递和点表达式
在类中定义的方法和通常在构造函数中分配的实例属性是面向对象编程的基本元素。这两个概念在数据值的消息传递实现中复制了调度字典的大部分行为。对象使用点表示法获取消息，但这些消息不是任意字符串值键，而是类的本地名称。对象也有命名的本地状态值（实例属性），但是可以使用点符号访问和操作该状态，而不必在实现中使用非本地语句。

消息传递的中心思想是数据值应该通过响应与其表示的抽象类型相关的消息来具有行为。点符号是 Python 的一个句法特征，它使消息传递隐喻形式化。使用具有内置对象系统的语言的优点是消息传递可以与其他语言功能（例如赋值语句）无缝交互。我们不需要不同的消息来“获取”或“设置”与本地属性名称关联的值；语言语法允许我们直接使用消息名称。

点表达式由表达式、点和名称组成：
```python
<表达式>.<名称>
```
python 几乎所有的东西都是对象。
```python
a = 3
a.__str__()
"""
输出：
'3'
"""
```
### 类属性
某些属性值在给定类的所有对象之间共享。这些属性与类本身相关联，而不是与类的任何单个实例相关联。例如，画图时取得点的个数

类属性由类语句组中的赋值语句创建，在任何方法定义之外。在更广泛的开发者社区中，类属性也可以称为类变量或静态变量。
```python
class NERFE: 
    num = 100 
```
该属性仍然可以从该类的任何实例访问。
```python
    nerfe1.num
    """
    输出：
    100
    """
    NERFE.num
    """
    输出：
    100
    """
    NERFE.num = 200
    nerfe1.num
    """
    输出：
    200
    """
    nerfe2.num
    """
    输出：
    200
    """
```
### 属性名称
我们已经在我们的对象系统中引入了足够的复杂性，我们必须指定如何将名称解析为特定属性。毕竟，我们可以很容易地拥有同名的类属性和实例属性。

要评估点表达式：

1. 计算点左侧的<表达式> ，这会生成点表达式的对象。
2. <名称>与该对象的实例属性相匹配；如果具有该名称的属性存在，则返回其值。
3. 如果<名称>没有出现在实例属性中，则<名称>在类中查找，这会产生一个类属性值。
4. 除非它是一个函数，否则将返回该值，在这种情况下，将返回一个绑定方法。

在此评估过程中，实例属性在类属性之前找到，就像局部名称在环境中优先于全局名称一样。类中定义的方法与点表达式的对象组合，在这个求值过程的第四步形成一个绑定方法。一旦我们引入类继承，在类中查找名称的过程就会有其他细微差别，这些细微差别很快就会出现。

### 属性赋值
所有在其左侧包含点表达式的赋值语句都会影响该点表达式的对象的属性。如果对象是实例，则赋值设置实例属性。如果对象是类，则赋值设置类属性。作为此规则的结果，对对象属性的赋值不会影响其类的属性。下面的例子说明了这种区别。
```python
    nerfe1.num
    """
    输出：
    100
    """
    nerfe1.num = 200
    nerfe1.num
    """
    输出：
    200
    """
    nerfe2.num
    """
    输出：
    100
    """
```