---
id: lab5
sidebar_position: 5
---

# 实验5: 线性方程组求解实验

## 问题1：Gauss列主元消去法求解线性方程组

问题1：编写高斯列主元消去法求方程组$A\mathbf{x}=\mathbf{b}$的程序，并求解下面的方程组
$$
\left\{ {\begin{array}{lr}
2x_1-x_2+3x_3=1,\\
4x_1+2x_2+5x_3=4,\\
x_1+2x_2~~~~~~~~~=7.\end{array}}\right.
$$

**实验原理**：详见教材。

**实验过程**：在编程实现时，主要工作包括：找主元、交换两行、消元和回代，下面为利用Python的NumPy库进行实现的主要代码，供参考。通过观察消元过程以及求出解后代入验证来检验程序的正确性。

```python showLineNumbers
'''
Gauss列主元法求解线性方程组
'''
import numpy as np

#高斯列主元法求解线性方程组Ax =b
def Gauss_column_pivot(A, b):
    '''
    :param A: 方程组Ax=b的系数矩阵
    :param b:
    :return: x
    '''
    A = np.array(A) #转化为numpy数组
    b = np.array(b).reshape((-1, 1)) #转化为1列
    x = np.zeros_like(b)  #方程组的解初始化
    A_aug = np.hstack((A, b)) #增广矩阵
    print('线性方程组的增广矩阵为')
    print(A_aug)
    n = len(b)

    for k in range(n-1): #消元n-1次
        print(f'第{k+1}次列选主元，消元过程为')
        temp = A_aug[k:, k] #候选主元
        index = np.argmax(abs(temp)) #找到主元所在位置
        pivot = temp[index]  #主元

        if pivot == 0:  #主元为0
            print('不满足列主元消去法条件')
            return
        else:
            if index != 0: #最大值不在主元上，交换2行
                A_aug[[k, index + k], :] = A_aug[[index + k, k], :]
        #消元法
        for i in range(k+1, n):
            A_aug[i, k:] = A_aug[i, k:] - A_aug[i, k]/A_aug[k, k] * A_aug[k, k:]
        print(A_aug)

    # 回代
    x[n-1] = A_aug[n-1, n]/A_aug[n-1, n-1]
    for i in range(n-2, -1, -1):
        '''
        ------------------------------
        这里作为作业思考，请根据你的理解补充完整
        ------------------------------
        '''
        
    print('列主元法求得的线性方程组的解为')
    print(x)
    #检验结果
    err = np.matmul(A, x) - b
    print('代入方程组的解，误差为')
    print(err)
    return x
if __name__ == '__main__':
    A = [[2.0, -1.0, 3], [4, 2, 5], [1,2, 0]]
    b = [1, 4, 7]
    x = Gauss_column_pivot(A=A, b=b)
```

输出结果为

```python
线性方程组的增广矩阵为
[[ 2. -1.  3.  1.]
 [ 4.  2.  5.  4.]
 [ 1.  2.  0.  7.]]
第1次列选主元，消元过程为
[[ 4.    2.    5.    4.  ]
 [ 0.   -2.    0.5  -1.  ]
 [ 0.    1.5  -1.25  6.  ]]
第2次列选主元，消元过程为
[[ 4.     2.     5.     4.   ]
 [ 0.    -2.     0.5   -1.   ]
 [ 0.     0.    -0.875  5.25 ]]
列主元法求得的线性方程组的解为
[[ 9]
 [-1]
 [-6]]
代入方程组的解，误差为
[[0.]
 [0.]
 [0.]]
```

> 注：输入系数矩阵时，如果系数都为整数，建议至少输入一个数为小数，例如可8输入为8.0，这样识别为float类型。

## 问题2：Doolittle和Crout三角分解法求解线性方程组

**问题2**：编写Dollittle分解和Crout分解求线性方程组$A\mathbf{x}=\mathbf{b}$的程序，并求解下面的线性方程组。
$$
\begin{pmatrix}
        2 & 1 & 1\\
        1 & 3& 2\\
        1 & 2 & 2\\
      \end{pmatrix}\begin{pmatrix}
        x_1 \\
        x_2 \\
        x_3 \\
      \end{pmatrix}=
      \begin{pmatrix}
        4 \\
        6\\
        5 \\
      \end{pmatrix}
$$
**实验原理**：

高斯消去法求解线性方程组$A\mathbf{x}=\mathbf{b}$本质上对系数矩阵$A$进行了矩阵的三角分解，即$A= LU$，其中$L$和$U$为三角矩阵。

（1）Doolittle三角分解

$A = LU$，其中$L$为单位下三角矩阵，$U$为上三角矩阵，即
$$
A=\begin{pmatrix}
        a_{11} & a_{12} & \cdots & a_{1n}\\
       a_{21} & a_{22} & \cdots & a_{2n}\\
         \cdots &  \cdots &  \ddots &  \cdots\\
       a_{n1} & a_{n2} & \cdots & a_{nn}\\
      \end{pmatrix}
      =\color{red}
      \begin{pmatrix}
         1 &     &     &     \\
        l_{21} &1 &   &  \\
        \cdots & \cdots & \ddots &\\
        l_{n1} & l_{n2} & \cdots & l_{nn}
      \end{pmatrix}
      \color{blue}
      \begin{pmatrix}
        u_{11} & u_{12} & \cdots & u_{1n}\\
        & u_{22} & \cdots & u_{2n}\\
        &   & \ddots & \cdots\\
         &   &   & u_{nn}
      \end{pmatrix}\triangleq LU
$$
三角分解求解方程组的算法为

- [x] 三角分解算法：
  $$
  \text{for k = 1 to n}:
  \\
  u_{kj} = a_{kj} -\sum_{i=1}^{k-1}l_{ki}u_{ij},j= k,\cdots, n\\
  l_{ik} = \left(a_{ik} -\sum_{j=1}^{k-1}l_{ij}u_{jk}\right)/u_{kk},i= k+1,\cdots, n\\
  $$

- [x] 利用三角分解结果求解方程组
  $$
  Ax= b \Longrightarrow LUx=b\\
  \begin{cases}
  Ly =b\\
  Ux = y
  \end{cases}
  $$
  
- [x] 求解三角型方程组$Ly=b$算法
  $$
  y_i = b_i -\sum_{k=1}^{i-1}l_{ik}y_k, i=1,2\cdots, n
  $$

- [x] 求解三角型方程组$Ux=y$算法

$$
x_i = \frac{1}{u_{ii}}\left(y_i -\sum_{k=i+1}^{n}u_{ik}x_k\right), i=n,n-1\cdots, 1
$$

**实验过程**：

```python showLineNumbers
'''
利用Doolittle三角分解法求解线性方程组
'''
import numpy as np

#Doolittle 杜立特尔三角分解
def Doolittle(A):
    '''
    :param A: 线性方程组的系数矩阵，要求方阵
    :return: 单位下三角矩阵L, 上三角矩阵U，为三角分解结果，满足A = LU
    '''
    n = np.size(A, 0)   # 方阵A的行数或列数
    L = np.eye(n)  #三角分解结果的初始化
    U = np.zeros_like(A)

    for k in range(n):
        for j in range(k, n):
            U[k, j] = A[k, j] - np.dot(L[k, 0:k], U[0:k, j])

        for i in range(k + 1, n):
            '''
            ------------------------------
            这里作为作业思考，请根据你的理解补充完整
            ------------------------------
            '''

    return L, U

#利用三角分解结果求解线性方程组
def LU_solving_equations(A, b):
    '''
    :param A: 系数矩阵
    :param b: 常数向量
    :return: 方程组的解x
    '''
    A = np.array(A)  # 转化为np.array()
    b = np.array(b).reshape((-1, 1)) #转化为np.array
    L, U = Doolittle(A)
    print('Doolittle三角分解结果为: A = LU, 其中：')
    print('---' * 10)
    print(f'A = {A}')
    print(f'L = {L}')
    print(f'U = {U}')
    print('---' * 10)
    #step1: Ly = b
    y = np.zeros_like(b) #初始化
    n = len(b)
    for i in range(0, n):
        y[i] = b[i] - np.dot(L[i, 0:i], y[0:i])
    print('线性方程组Ly = b的解为')
    print(f'y = {y}')
    print('---' * 10)
    #step2: Ux=y，回代过程
    x = np.zeros_like(b) #初始化
    for i in range(n-1, -1, -1):
        '''
        ------------------------------
        这里作为作业思考，请根据你的理解补充完整
        ------------------------------
        '''
    print('线性方程组Ux = y的解为')
    print(f'x = {x}')
    print('---' * 10)
    # 检验结果
    err = np.matmul(A, x) - b
    print('代入方程组的解，误差为')
    print(f'error = {err}')
    return x
if __name__ == '__main__':
    A = [[2.0, 1.0, 1],
         [1, 3, 2],
         [1, 2, 2]]
    b = [4.0, 6.0, 5.0]
    LU_solving_equations(A, b)
```



## 问题3：Jacobi和Gauss-Seidel迭代法求解线性方程组

### 3.1 Jacobi和Gauss-Seidel迭代法

**问题3**：给定精度要求 ，编写雅克比迭代、高斯-赛德尔迭代和超松弛迭代法求方程组$A\mathbf{x}=\mathbf{b}$的程序，分别对不同精度要求给出下面线性方程组的计算结果。
$$
\begin{pmatrix}
        2 & -1 & 0\\
        -1 & 3& -1\\
        0 & -1 & 2\\
      \end{pmatrix}\begin{pmatrix}
        x_1 \\
        x_2 \\
        x_3 \\
      \end{pmatrix}=
      \begin{pmatrix}
        1 \\
        8\\
        -5 \\
      \end{pmatrix}
$$
**实验原理**：设线性方程组$A\mathbf{x}=\mathbf{b}$， 对系数矩阵$A$进行分解，有
$$
A= D-L-U
$$
其中，
$$
D=\begin{pmatrix}
        a_{11} &   & \cdots &  \\
         & a_{22} &  &  \\
          &  &  \ddots &   \\
        &   &  & a_{nn}\\
      \end{pmatrix}, \\
      \color{red}
      L =
      \begin{pmatrix}
         0 &  0 &  \cdots   &  0 \\
        -a_{21} &0 &   &  \\
        \cdots & \ddots & \ddots &\\
        -a_{n1} &\cdots & -a_{n,n-1}& 0
      \end{pmatrix},\\
      \color{blue}
      U = \begin{pmatrix}
        0 & -a_{12} & \cdots & -a_{1n}\\
        0& 0& \ddots & -a_{2n}\\
        \vdots& \vdots  & \ddots & -a_{n-1,n}\\
         0&  0 & \cdots  & 0
      \end{pmatrix}
$$

- [x] 雅克比(Jaboci)迭代格式为
  $$
  \mathbf{x}^{(k+1)} = D^{-1}(L+U)\mathbf{x}^{(k)} + D^{-1}\mathbf{b}, k=0,1,\cdots
  $$
  其中，$B_J =D^{-1}(L+U)$为雅克比迭代法的迭代矩阵。

- [x] 高斯-赛德尔(Gauss-Seidel)迭代格式为
  $$
  \mathbf{x}^{(k+1)} = (D-L)^{-1}U\mathbf{x}^{(k)} +(D-L)^{-1}\mathbf{b}, k=0,1,\cdots
  $$
  其中，$B_G = (D-L)^{-1}U$为高斯-赛德尔迭代法的迭代矩阵。

- [x] 超松弛(Successive  Over-Relaxation，SOR)迭代格式为
  $$
  \mathbf{x}^{(k+1)} = (D-wL)^{-1}[(1-w)D+wU]\mathbf{x}^{(k)} +w(D-wL)^{-1}\mathbf{b}, k=0,1,\cdots
  $$
  

**实验过程**：

```python showLineNumbers
'''
线性方程组的迭代解法：雅克比Jacobi迭代法和高斯-赛德尔G-S迭代法
'''

import numpy as np
from numpy.linalg import inv, norm  #导入逆矩阵和向量范数

'''Jacobi迭代法'''
def Jacobi(A, b, x0, tol):
    '''
    :param A: 线性方程组Ax=b的系数矩阵
    :param b: 常数项向量
    :param x0:  迭代初始值
    :param tol: 容许误差和精度
    :return: 方程组的近似解x
    '''
    A = np.array(A)  #转化为np.array()
    b = np.array(b).reshape((-1, 1)) #转化为1列
    x0 = np.array(x0).reshape((-1, 1)) #转化为1列

    D = np.diag(np.diag(A))  # A的对角矩阵
    L = - np.tril(A, -1)     # A的下三角矩阵的负矩阵
    U = - np.triu(A, 1)      # A的上三角矩阵的负矩阵
    B = np.matmul(inv(D), L+U) #Jacobi迭代法的迭代矩阵
    g = np.matmul(inv(D), b)
    x1 = np.matmul(B, x0) + g #迭代一次
    n = 1 #记录迭代次数
    print('---' * 10)
    print(f'Jacobi法第{n}次迭代结果为X{n}=')
    print(x1)
    while norm(x1-x0)>=tol:
        '''
        ------------------------------
        这里作为作业思考，请根据你的理解补充完整
        ------------------------------
        '''
        print(f'Jacobi法第{n}次迭代结果为X{n}=')
        print(x1)
    return x1, n

'''Gauss-Seidel迭代法'''
def Gauss_Seidel(A, b, x0, tol):
    '''
    :param A: 线性方程组Ax=b的系数矩阵
    :param b: 常数项向量
    :param x0:  迭代初始值
    :param tol: 容许误差和精度
    :return: 方程组的近似解x
    '''
    A = np.array(A)  #转化为np.array()
    b = np.array(b).reshape((-1, 1)) #转化为1列
    x0 = np.array(x0).reshape((-1, 1)) #转化为1列

    D = np.diag(np.diag(A))  # A的对角矩阵
    L = - np.tril(A, -1)     # A的下三角矩阵的负矩阵
    U = - np.triu(A, 1)      # A的上三角矩阵的负矩阵
    '''
    ------------------------------
    这里作为作业思考，请根据你的理解补充完整
    ------------------------------
    '''
    n = 1 #记录迭代次数
    print('---' * 10)
    print(f'G-S法第{n}次迭代结果为X{n}=')
    print(x1)
    while norm(x1-x0)>=tol:
        '''
        ------------------------------
        这里作为作业思考，请根据你的理解补充完整
        ------------------------------
        '''
        print(f'G-S法第{n}次迭代结果为X{n}=')
        print(x1)
    return x1, n

'''SOR迭代法'''
def SOR(A, b, x0, tol):
    '''
    ------------------------------
    这里从略，作为作业思考
    ------------------------------
    '''

if __name__ == '__main__':
    #系数矩阵
    A = [[2.0, -1.0, 0],
         [-1, 3.0, -1.0],
         [0, -1.0, 2]]
    b = [1.0, 8.0, -5.0]
    x0 = [0, 0, 0] # 迭代初始值
    tol = 0.5e-5   # 精度
    x1, n = Jacobi(A=A, b=b, x0=x0, tol=tol)
    print('---' * 10)
    print(f'Jacobi迭代法共迭代{n}次，求得方程组的解为X=')
    print(x1)

    x1, n = Gauss_Seidel(A=A, b=b, x0=x0, tol=tol)
    print('---' * 10)
    print(f'Gauss-Seidel迭代法共迭代{n}次，求得方程组的解为X=')
    print(x1)
```

输出结果为

```python
------------------------------
Jacobi法第1次迭代结果为X1=
[[ 0.5       ]
 [ 2.66666667]
 [-2.5       ]]
Jacobi法第2次迭代结果为X2=
[[ 1.83333333]
 [ 2.        ]
 [-1.16666667]]
Jacobi法第3次迭代结果为X3=
[[ 1.5       ]
 [ 2.88888889]
 [-1.5       ]]
Jacobi法第4次迭代结果为X4=
[[ 1.94444444]
 [ 2.66666667]
 [-1.05555556]]
Jacobi法第5次迭代结果为X5=
[[ 1.83333333]
 [ 2.96296296]
 [-1.16666667]]
Jacobi法第6次迭代结果为X6=
[[ 1.98148148]
 [ 2.88888889]
 [-1.01851852]]
Jacobi法第7次迭代结果为X7=
[[ 1.94444444]
 [ 2.98765432]
 [-1.05555556]]
Jacobi法第8次迭代结果为X8=
[[ 1.99382716]
 [ 2.96296296]
 [-1.00617284]]
Jacobi法第9次迭代结果为X9=
[[ 1.98148148]
 [ 2.99588477]
 [-1.01851852]]
Jacobi法第10次迭代结果为X10=
[[ 1.99794239]
 [ 2.98765432]
 [-1.00205761]]
Jacobi法第11次迭代结果为X11=
[[ 1.99382716]
 [ 2.99862826]
 [-1.00617284]]
Jacobi法第12次迭代结果为X12=
[[ 1.99931413]
 [ 2.99588477]
 [-1.00068587]]
Jacobi法第13次迭代结果为X13=
[[ 1.99794239]
 [ 2.99954275]
 [-1.00205761]]
Jacobi法第14次迭代结果为X14=
[[ 1.99977138]
 [ 2.99862826]
 [-1.00022862]]
Jacobi法第15次迭代结果为X15=
[[ 1.99931413]
 [ 2.99984758]
 [-1.00068587]]
Jacobi法第16次迭代结果为X16=
[[ 1.99992379]
 [ 2.99954275]
 [-1.00007621]]
Jacobi法第17次迭代结果为X17=
[[ 1.99977138]
 [ 2.99994919]
 [-1.00022862]]
Jacobi法第18次迭代结果为X18=
[[ 1.9999746 ]
 [ 2.99984758]
 [-1.0000254 ]]
Jacobi法第19次迭代结果为X19=
[[ 1.99992379]
 [ 2.99998306]
 [-1.00007621]]
Jacobi法第20次迭代结果为X20=
[[ 1.99999153]
 [ 2.99994919]
 [-1.00000847]]
Jacobi法第21次迭代结果为X21=
[[ 1.9999746 ]
 [ 2.99999435]
 [-1.0000254 ]]
Jacobi法第22次迭代结果为X22=
[[ 1.99999718]
 [ 2.99998306]
 [-1.00000282]]
Jacobi法第23次迭代结果为X23=
[[ 1.99999153]
 [ 2.99999812]
 [-1.00000847]]
Jacobi法第24次迭代结果为X24=
[[ 1.99999906]
 [ 2.99999435]
 [-1.00000094]]
Jacobi法第25次迭代结果为X25=
[[ 1.99999718]
 [ 2.99999937]
 [-1.00000282]]
Jacobi法第26次迭代结果为X26=
[[ 1.99999969]
 [ 2.99999812]
 [-1.00000031]]
------------------------------
Jacobi迭代法共迭代26次，求得方程组的解为X=
[[ 1.99999969]
 [ 2.99999812]
 [-1.00000031]]
------------------------------
G-S法第1次迭代结果为X1=
[[ 0.5       ]
 [ 2.83333333]
 [-1.08333333]]
G-S法第2次迭代结果为X2=
[[ 1.91666667]
 [ 2.94444444]
 [-1.02777778]]
G-S法第3次迭代结果为X3=
[[ 1.97222222]
 [ 2.98148148]
 [-1.00925926]]
G-S法第4次迭代结果为X4=
[[ 1.99074074]
 [ 2.99382716]
 [-1.00308642]]
G-S法第5次迭代结果为X5=
[[ 1.99691358]
 [ 2.99794239]
 [-1.00102881]]
G-S法第6次迭代结果为X6=
[[ 1.99897119]
 [ 2.99931413]
 [-1.00034294]]
G-S法第7次迭代结果为X7=
[[ 1.99965706]
 [ 2.99977138]
 [-1.00011431]]
G-S法第8次迭代结果为X8=
[[ 1.99988569]
 [ 2.99992379]
 [-1.0000381 ]]
G-S法第9次迭代结果为X9=
[[ 1.9999619]
 [ 2.9999746]
 [-1.0000127]]
G-S法第10次迭代结果为X10=
[[ 1.9999873 ]
 [ 2.99999153]
 [-1.00000423]]
G-S法第11次迭代结果为X11=
[[ 1.99999577]
 [ 2.99999718]
 [-1.00000141]]
G-S法第12次迭代结果为X12=
[[ 1.99999859]
 [ 2.99999906]
 [-1.00000047]]
------------------------------
Gauss-Seidel迭代法共迭代12次，求得方程组的解为X=
[[ 1.99999859]
 [ 2.99999906]
 [-1.00000047]]
```

**结果分析**：该方程组的精确解为$\mathbf{x} = [2, 3, -1]^T$. 请根据实验过程总结一些结论，并测试更多方程组发现更多结论。

### 3.2 基于numpy.linalg函数的结果检验

**结果检验**：`numpy.linalg`库包提供了`solve`函数可以求线性方程组的解，具体使用可见下面的示例。

```python
'''
线性方程组的迭代解法：numpy.linalg.solve
'''

import numpy as np
from numpy.linalg import solve

#线性方程组Ax=b的系数矩阵A和右端向量b
A = np.array([[2.0, -1.0, 0],
     [-1, 3.0, -1.0],
     [0, -1.0, 2]])
b = np.array([1.0, 8.0, -5.0])
x = solve(A, b) #求解线性方程组
print('numpy提供的solve求得该线性方程组的解为')
print(x)
error = np.max(np.abs(np.matmul(A, x) - b)) #代入方程组求出误差
print(f'最大模误差为 {error}')
```

输出结果为

```python
numpy提供的solve求得该线性方程组的解为
[ 2.  3. -1.]
最大模误差为 0.0
```

由此可见，上述Jacobi迭代法和G-S迭代法与numpy的求解结果一致。

## 问题4：线性方程组系数的灵敏性

**问题4**：研究下面的方程组系数的灵敏性。利用上面的方法求解下面的线性方程组。 
$$
\begin{cases}
x+ay=1\\
ax+y =0
\end{cases}
$$
分别取 $a=0.99, a=0.991$，研究参数相对误差有0.001的变化相应解的相对误差是多少。

**动手实践和探讨分析**：这里从略，可以探讨发现自己的结论。