---
id: recursion
sidebar_position: 10
---

# 递归
## 递归函数
如果函数的函数体直接或者间接自己调用自己，那么这个函数是递归的。

递归是一种常见的数学和编程概念。它意味着函数调用自身。这样做的好处是可以循环访问数据以达成结果。

__例子__

```bash
def tri_recursion(k):
  if(k>0):
    result = k+tri_recursion(k-1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")
tri_recursion(6)
```
递归实现的阶乘函数
```bash
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
```
斐波那契函数
```bash
def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```
递归求幂
```bash
def find_power(a, b):
    if b == 0:
        return 1
    else:
        return a * find_power(a, b-1)
```
## 递归思想
函数直接或者间接地调用自身。

递归有三大重点：
- 第一要素：明确你这个函数想要干什么。
- 第二要素：寻找递归结束条件。
- 第三要素：找出函数的等价关系式。

**第一要素**

这个函数的功能是什么，这个，是完全由你自己来定义的。函数到底要实现什么功能,比如说n的阶乘。

定义了一个函数：
```bash
int f(int n){
 
}
```
**第二要素**

找出递归的结束条件，否则，会一直调用自己，出现bug。我们需要找出当参数，使递归结束，之后直接把结果返回，请注意！！！这个时候我们必须能根据这个参数的值，能够直接知道函数的结果是什么。

接上面，当 n = 1 时，那你应该能够直接知道 f(n) 是什么？此时，f(1) = 1。完善函数内部的代码，把第二要素加进代码里面
```bash
// 算 n 的阶乘(假设n不为0)
int f(int n){
    if(n == 1){
        return 1;
    }
}
```
假设n为固定值，当n=10时，那想可以直接知道 f(n) 等于多少？那可以把n=10作为递归的结束条件
```bash
// 算 n 的阶乘(假设n>=10)
int f(int n){
    if(n == 10){
        return 10;
    }
```
注意我代码里面写的注释，假设 n>=10，因为如果 n=1 时，会被漏掉，当 n<=10 时，f(n)=n，所以为了更加严谨，我们可以写成这样：
```bash
// 算 n 的阶乘(假设n不为0)
int f(int n){
    if(n <=10){
        return n;
    }
}
```
**第三要素**

找出函数的等价关系式。那么我们可以不断缩小参数的范围，缩小之后，我们可以通过一些辅助的变量，使原函数的结果不变。

f(n) 这个范围比较大，我们可以让 f(n) = n*f(n-1)。这样，范围就由n变成了n-1了，范围变小了，并且为了原函数f(n) 不变，我们需要让 f(n-1) 乘以n。就是要找到原函数的一个等价关系式：f(n) = n * f(n-1)。
```bash
f(5)
=>5*f(4)
=>5*(4*f(3))
=>5*(4*(3*f(2)))
=>5*(4*(3*(2*f(1))))
=>5*(4*(3*(2*1)))
=>5*(4*(3*2))
=>5*(4*6)
=>5*24
=>120
```
上面就显示了一个递归的流程。

## 递归的缺点
递归是利用堆栈来实现的。每当进入一个函数调用，栈就会增加一层栈帧，每次函数返回，栈就会减少一层栈帧。而栈不是无限大的，当递归层数过多时，就会造成 栈溢出的后果。

显然有时候递归处理是高效的，比如归并排序；有时候是低效的，因为堆栈会消耗额外空间，而简单的递推不会消耗空间。

## 什么时候用递归
具有以下特征的问题可考虑递归求解：
- 当问题和子问题具有递推关系，比如杨辉三角、阶乘。
- 具有递归性质的数据结构，比如链表、树、图。
- 反向性问题，比如取反。
层层拆解就可以使用递归。
## 尾递归
如果一个函数中所有递归形式的调用都出现在函数的末尾，我们称这个递归函数是尾递归的。当递归调用是整个函数体中最后执行的语句且它的返回值不属于表达式的一部分时，这个递归调用就是尾递归。

尾递归函数的特点是在回归过程中不用做任何操作，这个特性很重要，因为大多数现代的编译器会利用这种特点自动生成优化的代码。
```bash
int facttail(int n, int a)
{
 
    /*Compute a factorialina tail - recursive manner.*/
     
    if (n < 0)
        return 0;    
    else if (n == 0)
        return 1;    
    else if (n == 1)
        return a;
    else
        return facttail(n - 1, n * a);
 
}
```