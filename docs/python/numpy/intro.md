---
id: intro
sidebar_position: 1
---

# 1. NumPy简介与安装

本文参考: 

1. [NumPy Illustrated: The Visual Guide to NumPy](https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d)
2. [A Visual Intro to NumPy and Data Representation](https://jalammar.github.io/visual-numpy/)
3. [《Python Data Science Handbook》](https://www.oreilly.com/library/view/python-data-science/9781491912126/)


## 1. NumPy 速查手册
![Numpy Cheat Sheet](./img/numpy-cheat-sheet.png)

## 2. 安装
```bash showLineNumbers
pip install numpy
```

## 3. 使用

```python showLineNumbers
import numpy as np

a = np.array([1, 2, 3])
print(a)
```
```
[1 2 3]
```


## 4. NumPy数组 vs Python 列表


:::tip
- Numpy数组中插入、移除元素没Python列表高效；
- Numpy数组可直接做四则运算、Python列表则需借助列表推倒式等；
- Numpy数组更紧凑，高维时尤为明显；
- Numpy数组向量化后运算速度比Python列表更快；
- Numpy数组通常是同质化的，仅仅当数组中元素类型一致时处理速度快。
:::  
