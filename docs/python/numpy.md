---
id: numpy
sidebar_position: 13
---

# Numpy 教程

本文参考: 

1. [一图胜千言，超形象图解NumPy教程！](https://zhuanlan.zhihu.com/p/504917890)
2. [A Visual Intro to NumPy and Data Representation](https://jalammar.github.io/visual-numpy/)


## 0. Numpy 速查手册
![Numpy Cheat Sheet](./img/numpy/numpy-cheat-sheet.png)

## 1. 安装
```bash
pip install numpy
```

## 2. Numpy数组 vs Python 列表

- Numpy数组中插入、移除元素没Python列表高效；
- Numpy数组可直接做四则运算、Python列表则需借助列表推倒式等；

- Numpy数组更紧凑，高维时尤为明显；
- Numpy数组向量化后运算速度比Python列表更快；
- Numpy数组通常是同质化的，仅仅当数组中元素类型一致时处理速度快。