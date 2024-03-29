---
id: lab1
sidebar_position: 1
---

# 实验1: 数值稳定性实验

舍入误差是数值分析中的一个重要概念。由于舍入误差的影响，不同的数值算法对数值结果会有不同的影响。

## 问题1：迭代算法的数值稳定性

**问题1**：计算$S_n = \int_0^1 \dfrac{x^n}{x+5}\text{d}x, ~ n=0,1,2,\cdots,8$的值。请给出两种不同的算法，体会算法对结果的影响，并从理论上给出实验结果分析。

### 1.1 算法1 
由于

$$
S_n = \int_0^1 \dfrac{(x^n+5x^{n-1})-5x^{n-1}}{x+5}\text{d}x\\
=\int_0^1 x^{n-1} dx-5\int_0^1 \dfrac{x^{n-1}}{x+5}\text{d}x\\
=\frac{1}{n}-5S_{n-1},~~n =1,2\cdots,8
$$
这样建立了$S_n$的递推关系式，又
$$
S_0 = \int_0^1 \dfrac{1}{x+5}\text{d}x = \left.\ln (x+5)\right|_0^1 = \ln6-\ln 5\approx 0.1823
$$
进而可以逐步计算得到$S_1,S_2,\cdots, S_8$的值。

```python showLineNumbers
'''
数值实验一
算法1：数值不稳定实验
'''
N = 8  #共有N项
S = [0] * (N + 1) #包含S0共有N+1项，初始化
S[0] = 0.182 #初始值
#for循环进行递推计算
for n in range(1, N+1):
    S[n] = 1/n - 5 * S[n-1]  #递推关系式
    print('S' + str(n) + ' =', S[n]) #打印算法结果
```

取初始值$S_0=0.182$的输出结果为

```python
S1 = 0.09000000000000008
S2 = 0.0499999999999996
S3 = 0.08333333333333531
S4 = -0.16666666666667657
S5 = 1.0333333333333827
S6 = -5.000000000000247
S7 = 25.14285714285838
S8 = -125.58928571429189
```

改写上述Python代码为通用函数，可以测试更多初始值对结果的影响，输出迭代序列更多的项数。

```python showLineNumbers
'''
数值实验一
算法1：数值不稳定实验
''' showLineNumbers
def instability_test(N, S0):
    '''
    :param N: 迭代序列的总项数
    :param S0: 迭代初始值
    :return: S---迭代序列
    '''
    S = [0] * (N + 1) #包含S0共有N+1项，初始化
    S[0] = S0 #初始值
    #for循环进行递推计算
    for n in range(1, N + 1):
        S[n] = 1/n - 5 * S[n-1]  #递推关系式
        print('S' + str(n) + ' =', S[n]) #打印算法结果

if __name__ == "__main__":
    N = 18   #计算S0-----S18
    S0 = 0.1823 #迭代初始值
    instability_test(N=N, S0=S0) #调用算法1
```

输出结果为

```python
S1 = 0.08850000000000002
S2 = 0.057499999999999885
S3 = 0.04583333333333389
S4 = 0.02083333333333054
S5 = 0.09583333333334731
S6 = -0.31250000000006994
S7 = 1.7053571428574925
S8 = -8.401785714287463
S9 = 42.12003968254843
S10 = -210.50019841274215
S11 = 1052.5919011546198
S12 = -5262.8761724397655
S13 = 26314.45778527575
S14 = -131572.21749780735
S15 = 657861.1541557034
S16 = -3289305.708278517
S17 = 16446528.600216113
S18 = -82232642.94552502
```

**结果分析**：实际上，
$$
\frac{1}{6(n+1)} = \int_0^1 \dfrac{x^n}{1+5}\text{d}x\leq S_n = \int_0^1 \dfrac{x^n}{x+5}\text{d}x\leq \int_0^1 \dfrac{x^n}{0+5}\text{d}x  = \frac{1}{5(n+1)}
$$
因此，上述计算结果中，那些负的或大于1的结果都是错误的，并且其余的结果也可能有比较大的误差。造成误差的原因是该方法**数值不稳定**。

**误差分析**：由于取$S_0\approx 0.182\triangleq \overline{S}_0$，则有初始误差$e_0 = |S_0-\overline{S_0}|=0.5\times 10^{-3}$, 设$S_n$的数值计算结果为$\overline{S_n}$，其误差记为$e_n = |S_n-\overline{S}_n|$，则有
$$
e_n = |S_n-\overline{S}_n| = \left|\frac{1}{n}-5S_{n-1} -\left(\frac{1}{n}-5\overline{S}_{n-1}\right)\right| = \left|-5\left(S_{n-1}-\overline{S}_{n-1}\right)\right| = |-5e_{n-1}|
$$
这样，
$$
e_n = 5e_{n-1}=5^2e_{n-2}=\cdots = 5^n e_0
$$
如果取$S_0\approx 0.182$, 则 
$$
e_8 = 5^8 e_0 = 195.3125
$$
如果取$S_0\approx 0.1823$, 计算$S_{18}$，则 
$$
e_{18} = 5^{18} e_0 = 5^{18} \times 0.5 \times 10^{-4} = 190734863.28125
$$


:::danger

由此可见，舍入误差是不断被累计的，并且以5倍的速度进行放大。

:::  


### 1.2 算法2（改进算法）

$$
S_n = \frac{1}{n}-5S_{n-1}\\ 
\Longrightarrow S_{n-1} = \frac{1}{5n} - \frac{1}{5}S_n,~~~~~~~ n=8, 7,\cdots, 1
$$
迭代初始值$S_8$的估算：由于
$$
\frac{1}{6(n+1)} \leq S_n \leq  \frac{1}{5(n+1)}
$$
则
$$
\frac{1}{54}=\frac{1}{6(8+1)} \leq S_8 \leq  \frac{1}{5(8+1)}=\frac{1}{45}
$$
可以取$S_8 = \dfrac{1}{2}\left(\dfrac{1}{54}+\dfrac{1}{45}\right)\approx 0.02037$ ，可编写下面的Python程序进行迭代计算。

```python showLineNumbers
'''
数值实验一
算法2：改进后的数值稳定实验
'''
N = 8  #共有N项
S = [0] * (N + 1) #包含S0共有N+1项，初始化
S[-1] = 0.02037 #S8的近似值
print('S' + str(N) + ' =', S[N]) #打印算法结果
#for循环进行递推计算
for n in range(N, 0, -1):
    S[n-1] = 1 / (5 * n) - S[n] / 5  #递推关系式
    print('S' + str(n-1) + ' =', S[n-1]) #打印算法结果
```

输出迭代结果为

```python
S8 = 0.02037
S7 = 0.020926
S6 = 0.02438622857142857
S5 = 0.028456087619047617
S4 = 0.03430878247619048
S3 = 0.043138243504761906
S2 = 0.058039017965714285
S1 = 0.08839219640685715
S0 = 0.1823215607186286
```

与真值$0.1823215567939546$进行比较，发现$S_0$的计算结果具有 8位有效数字。为了得到$S_8$比较精确的值，可以从更靠后的序列估计值作为迭代初始值，编写通用程序如下：

```python showLineNumbers
'''
数值实验一
算法1：数值不稳定实验
'''
def stability_test(N, S_N):
    '''
    :param N: 迭代序列的总项数
    :param S_N: SN的近似值
    :return: S---迭代序列
    '''
    S = [0] * (N + 1) #包含S0共有N+1项，初始化
    S[-1] = S_N #初始值
    print('S' + str(N) + ' =', S[N]) #打印算法结果
    #for循环进行递推计算
    for n in range(N, 0 , -1):
        S[n - 1] = 1 / (5 * n) - S[n] / 5  # 递推关系式
        print('S' + str(n - 1) + ' =', S[n - 1])  # 打印算法结果

if __name__ == "__main__":
    N = 18   #计算S0-----S18
    S_N = 0.5 * (1 / (6 * (N+1)) + 1 / (5 * (N+1))) #迭代初始值
    stability_test(N=N, S_N=S_N) #调用算法1
```

计算结果如下：

```python
S18 = 0.009649122807017543
S17 = 0.009181286549707603
S16 = 0.00992844857241142
S15 = 0.010514310285517716
S14 = 0.011230471276229791
S13 = 0.012039620030468327
S12 = 0.01297669137852172
S11 = 0.014071328390962323
S10 = 0.015367552503625717
S9 = 0.016926489499274857
S8 = 0.018836924322367252
S7 = 0.02123261513552655
S6 = 0.02432490554432326
S5 = 0.028468352224468682
S4 = 0.03430632955510626
S3 = 0.04313873408897875
S2 = 0.05803891984887091
S1 = 0.08839221603022582
S0 = 0.18232155679395484
```

我们进而发现，这里$S0$的计算结果与真值$0.1823215567939546$具有16位有效数字。

<p align="center">表1 两种算法计算结果的比较</p>

| 序列值 | 算法1                | 算法2                | 真值                |
| ------ | -------------------- | -------------------- | ------------------- |
| $S_1$  | 0.09000000000000008  | 0.08839219640685715  | 0.08839221603022687 |
| $S_2$  | 0.0499999999999996   | 0.058039017965714285 | 0.05803891984886566 |
| $S_3$  | 0.08333333333333531  | 0.043138243504761906 | 0.04313873408900506 |
| $S_4$  | -0.16666666666667657 | 0.03430878247619048  | 0.03430632955497472 |
| $S_5$  | 1.0333333333333827   | 0.028456087619047617 | 0.02846835222512642 |
| $S_6$  | -5.000000000000247   | 0.02438622857142857  | 0.02432490554103456 |
| $S_7$  | 25.14285714285838    | 0.020926             | 0.02123261515197007 |
| $S_8$  | -125.58928571429189  | 0.02037              | 0.01883692424014967 |


:::info

结论：计算机在数值计算时舍入误差会不断累计，设计算法时需要选用**数值稳定的算法**。

:::


## 问题2：一元二次方程求根算例

**问题2**：对于方程$x^2-(10^d+1)x+10^d=0, d=16$，要求给出两种不同的求根方案，体会舍入误差的影响。

**分析**：对上述方程进行因式分解，易得其解为
$$
x_1 =10^d, x_2= 1
$$
下面设计方案并编写程序让计算机模拟求根的计算过程。

### 2.1 方案1

直接使用一元二次方程求根公式

$$
x_{1,2} = \frac{-b\pm \sqrt{b^2-4ac}}{2a}
$$

### 2.2 方案2（改进方案）

为了避免分子中相近的两数相减，优先选用量级相近的两数相加，再利用维韦达定理中的$x_1x_2=\dfrac{c}{a}$，即

$$
x_1 =\frac{-b-\text{sign}(b)\sqrt{b^2-4ac}}{2a}\\
x_2 = \frac{c}{a}\times \frac{1}{x_1}
$$

```python showLineNumbers
'''
lab01: 问题2：一元二次方程求根实验
'''
from math import sqrt
#一元二次方程求根：方案1
def dblroots_1(a, b, c):
    '''
    :param a: 一元二次方程ax^2+bx+c=0的系数
    :param b:
    :param c:
    :return: x1, x2
    '''
    if a == 0:
        print('一元二次方程的系数a不能为0')
        x1 = []
        x2 = []
        return
    else:
        delta = b ** 2 - 4 * a * c
        x1 = (-b + sqrt(delta)) / (2 * a)
        x2 = (-b - sqrt(delta)) / (2 * a)
    return x1, x2

#一元二次方程求根：方案2
def dblroots_2(a, b, c):
    '''
    :param a: 一元二次方程ax^2+bx+c=0的系数
    :param b:
    :param c:
    :return: x1, x2
    '''
    try:
        delta = b ** 2 - 4 * a * c
        if b >= 0:
            x1 = (-b - sqrt(delta)) / (2 * a)
        else:
            x1 = (-b + sqrt(delta)) / (2 * a)
        # 利用韦达定理
        x2 = c / a / x1
        return x1, x2
    except:
        print('一元二次方程的系数a不能为0')
        return [], []


if __name__ == '__main__':
    d = 16 #10^d， 系数的幂次
    a = 1
    b = - (10 ** d + 1)
    c = 10 ** d
    #求根方案1
    x1, x2 = dblroots_1(a=a, b=b, c=c)
    print('方案1所求的根为:')
    print('x1=', x1)
    print('x2=', x2)

    # 求根方案2
    x1, x2 = dblroots_2(a=a, b=b, c=c)
    print('方案2所求的根为:')
    print('x1=', x1)
    print('x2=', x2)
```

输出结果为

```python
方案1所求的根为:
x1= 1e+16
x2= 0.0
方案2所求的根为:
x1= 1e+16
x2= 1.0
```

> 说明：Python默认的计算精度为$10^{-16}$，能够处理的有效数字位数为16位，简单理解为Python把小于$10^{-16}$的数值处理为0.


### 2.3 方案3（SciPy）

下面案例是使用SciPy中的**scipy.optimize.fsolve**计算函数的根。fsolve的具体用法，请查看[API文档](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.fsolve.html)。

```python showLineNumbers
from scipy.optimize import fsolve

d = 16

f = lambda x: x ** 2 - (10 ** d + 1) * x + 10 ** d

root = fsolve(f, [5])
print("SciPy函数fsolve所求的根为: ", root[0])
print("所求根的根带入函数的结果为: ", f(root[0]))
```
```
SciPy函数fsolve所求的根为:  1.0
所求根的根带入函数的结果为:  0.0
```
## 思考和分析

1. 舍入误差和截断误差对数值计算的影响有哪些？

:::info
由于计算机的有限精度所引起的误差为**舍入误差。**由于算法中对于原问题的“近似”所引起的误差，称为**截断误差**，因此我们可以通过改进算法，从而有效改善截断误差。考虑到算法是通过计算机来实现的，在数值计算过程中舍入误差和截断误差是同时存在的，因此要通过体会舍入误差和截断误差对结果的影响，来认清它们的本质。
:::  


2. 简述什么是数值稳定和数值不稳定？

:::info
舍入误差在算法中会不断**传播**的，并对最终结果形成影响。如果某算法，它的舍入误差在计算过程中呈现衰减态势，则我们称该算法是**稳定的**，否则我们称之为**不稳定的**。对于不具有稳定性的算法是不可取的，这样的算法所得到的结果往往和目标值相差很大。
:::
