---
sidebar_position: 1
---
# 面向对象编程
在面向对象编程中（OOP）, 我们可以定义类作为蓝图，用于在 Python 中创建具有属性和方法（与对象相关的功能）的对象。

定义类的一般语法：
```python
class <className>:

    <class_attribute_name> = <value>

    def __init__(self,<param1>, <param2>, ...):
        self.<attr1> = <param1>
        self.<attr2> = <param2>
        .
        .
        .
        # As many attributes as needed
    
   def <method_name>(self, <param1>, ...):
       <code>
       
   # As many methods as needed
```
:::tip
 self是类的实例(用类创建的对象)的引用。
:::
如你所见，类可以有很多不同的元素，让我们来分析一下它们的细节：
## 类的头部
类定义的第一行是class关键字和类名：
```python
class Dog:
```

```python
class House:
```

```python
class Ball:
```

:::tip
 如果一个类继承了另外一个类的属性和方法，我们会在括号中看到该类的名称：
:::

```python
class Poodle(Dog):
```

```python
class Truck(Vehicle):
```

```python
class Mom(FamilyMember):
```
Python 中, 类名用大驼峰（也称为 Pascal Case），名称中的每个一个单词都是以大写字母开头。例如：FamilyMember

## __init__和实例属性
接下来，我们将使用类在 Python 中创建对象，就像我们根据图纸建造真正的房屋一样。

对象中的属性来自于我们在类中定义，而这些属性通常是在__init__方法中被初始化，而__init__方法会在创建类的实例时被执行。

这是一般语法：

```python
def __init__(self, <parameter1>, <parameter2>, ...):
        self.<attribute1> = <parameter1>  # Instance attribute
        self.<attribute2> = <parameter2>  # Instance attribute
        .
        .
        .
        # As many instance attributes as needed
```
我们可以根据需要来给类指定尽可能多的属性。

Dog类的一个__init__方法例子：
```python
class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age
```
:::tip
 注意名称__init__中的前后的双下划线
:::
## 如何创建类的实例
要创建Dog类的实例，我们需要指定 name 和 age 属性。
```python
my_dog = Dog("Nora", 10)
```
很好。现在我们已经准备好了一个可以在代码中使用的 Dog 实例了。

有些类，可以不需要任何参数来创建实例。 这种情况我们只需要一个空括号，例如：
```python
class Circle:

    def __init__(self):
        self.radius = 1
```
创建实例：
```python
>>> my_circle = Circle()
```

:::tip
self像是一个“幕后”的参数，即使我们在方法的定义中看到它，但你传参数时可以不用考虑它。
:::
## 默认参数
我们可以为类的属性指定默认值，但如果使用者想自己赋值，也是可以的。

这种情况下，我们可以在参数列表中写上形如：< attribute >=< value >

例如：
```python
class Circle:

    def __init__(self, radius=1):
        self.radius = radius
```
现在我们创建Circle实例，你可以通过忽略 radius 参数使用它的默认值，也可以传入一个自己的值：
```python
# Default value
>>> my_circle1 = Circle()

# Customized value
>>> my_circle2 = Circle(5)
```
## 如何获取实例的属性
访问实例属性，可以用下面的语法：
```python
<object_variable>.<attribute>
```
例如：
```python
# Class definition
>>> class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

# Create instance        
>>> my_dog = Dog("Nora", 10)

# Get attributes
>>> my_dog.name
'Nora'

>>> my_dog.age
10
```
## 如何更新实例的属性
更新实例的属性，我们可以用下面的语法：
```python
<object_variable>.<attribute> = <new_value>
```
例如：
```python
>>> class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> my_dog = Dog("Nora", 10)

>>> my_dog.name
'Nora'

# Update the attribute
>>> my_dog.name = "Norita"

>>> my_dog.name
'Norita'
```
## 如何删除实例属性
要删除实例属性，可以用下面的语法：
```python
del <object_variable>.<attribute>
```
```python
>>> class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> my_dog = Dog("Nora", 10)

>>> my_dog.name
'Nora'

# Delete this attribute
>>> del my_dog.name

>>> my_dog.name
Traceback (most recent call last):
  File "<pyshell#77>", line 1, in <module>
    my_dog.name
AttributeError: 'Dog' object has no attribute 'name'
```
## 如何删除一个实例
同样的，删除实例我们也可以用del：
```python
>>> class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> my_dog = Dog("Nora", 10)

>>> my_dog.name
'Nora'

# Delete the instance
>>> del my_dog

>>> my_dog
Traceback (most recent call last):
  File "<pyshell#79>", line 1, in <module>
    my_dog
NameError: name 'my_dog' is not defined
```
## 公开 vs 非公开 的属性
在 Python 中，我们没有用访问修饰符来限制对实例属性的访问，而是依靠命名惯例来做到这一点。

例如，在属性前添加一个前导下划线，就可以告诉开发者这是一个非公开的属性。

例如：
```python
class Dog:

    def __init__(self, name, age):
        self.name = name  # Public attribute
        self._age = age   # Non-Public attribute
```
## Python 中类的属性
类的属性由类的所有实例共享。所有实例都可以访问这些属性，如果这些属性被修改，这些实例将都会受到影响。
```python
class Dog:

    # Class attributes
    kingdom = "Animalia"
    species = "Canis lupus"

    def __init__(self, name, age):
        self.name = name
        self.age = age
```
:::tip
通常，它们写在__init__方法的前面。
:::
## 如何获取一个类属性
```python
<class_name>.<attribute>
```
例如：
```python
>>> class Dog:

    kingdom = "Animalia"

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> Dog.kingdom
'Animalia'
```
:::tip
你可以使用同样的语法在类里面获取它的值。
:::
## 如何更新一个类属性
要更新一个类属性，我们使用下面的语法：
```python
<class_name>.<attribute> = <value>
```
例如：

```python
>>> class Dog:

    kingdom = "Animalia"

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> Dog.kingdom
'Animalia'

>>> Dog.kingdom = "New Kingdom"

>>> Dog.kingdom
'New Kingdom'
```
## 如何删除一个类属性
我们使用del一个类属性。例如：
```python
>>> class Dog:

    kingdom = "Animalia"

    def __init__(self, name, age):
        self.name = name
        self.age = age

>>> Dog.kingdom
'Animalia'
        
# Delete class attribute
>>> del Dog.kingdom

>>> Dog.kingdom
Traceback (most recent call last):
  File "<pyshell#88>", line 1, in <module>
    Dog.kingdom
AttributeError: type object 'Dog' has no attribute 'kingdom'
```
## 如何定义方法
方法用于表示类实例的功能。

:::tip
 如果我们在实例方法的定义中写上self.< attribute >，那么实例方法就可以调用实例属性。
:::
下面是定义方法的基本语法，这些方法一般定义在__init__方法后面：
```python
class <ClassName>:

    # Class attributes

    # __init__

    def <method_name>(self, <param1>, ...):
        <code>
```
这些实例方法可能有 0 个、1 个或多个参数（就像函数！），但self必须是第一个参数。

例如，下面的bark方法没有参数（除了self）：

```python
class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print(f"woof-woof. I'm {self.name}")
```
要调用这个方法，我们用下面的语法：
```python
<object_variable>.<method>(<arguments>)
```
例如：
```python
# Create the instance
>>> my_dog = Dog("Nora", 10)

# Call the method
>>> my_dog.bark()
woof-woof. I'm Nora
```
Player类里定义了只有一个参数的increment_speed方法：

```python
class Player:

    def __init__(self, name):
        self.name = name
        self.speed = 50

    def increment_speed(self, value):
        self.speed += value
```
调用此方法：
```python
# Create instance        
>>> my_player = Player("Nora")

# Check initial speed to see the change
>>> my_player.speed
50

# Increment the speed
>>> my_player.increment_speed(5)

# Confirm the change
>>> my_player.speed
55
```
:::tip
要添加更多参数，只需要将多个参数用逗号分隔。建议在每个逗号后面加一个空格。
:::
