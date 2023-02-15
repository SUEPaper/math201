---
id: dict
sidebar_position: 3
---

# 字典
字典是另一种可变容器模型，且可存储任意类型对象。

字典的每个键值$key:value$对用冒号:分割，每个键值对之间用逗号,分割，整个字典包括在花括号{}中 ,格式如下所示：
```python
d = {key1 : value1, key2 : value2 }
```
## 字典的创建
```python
dict1 = {'SUEP':1951,'xsm':2348}
# 若键重复，则取最后一个
dict2 = {'SUEP':1951,'xsm':2348,'xsm':2020}
print(dict1['SUEP'])
print(dict2['xsm'])
# 若没有对应的键，会报错
print(dict2['nothing'])
"""
输出：
1951
2020
"""
```
## 修改字典内容
使用重新赋值的方法
```python
dict1 = {'SUEP':1951,'xsm':2348}
dict1['xsm'] = 2020
print(dict1['xsm'])
"""
输出：
2020
"""
```
## 删除字典
del dict['Name']删除键为Name的键值对

del dict 删除字典

```python
dict1 = {'SUEP':1951,'xsm':2348}
print(dict1)
del dict1['xsm']
print(dict1)
"""
输出:
{'SUEP': 1951, 'xsm': 2348}
{'SUEP': 1951}
"""
```
## 可以使用的函数
```python
dict1 = {'SUEP':1951,'xsm':2348}
#获得dict的长度
print(len(dict1))
"""
输出：
2
dict_keys(['SUEP', 'xsm'])
{}
"""
```
## dict自带的方法
### clear()
清空dict
```python
dict1 = {'SUEP':1951,'xsm':2348}
dict1.clear()
print(dict1)
"""
输出:
{}
"""
```
### get()
返回指定键的值，若不存在则返回默认值
```python
dict1 = {'SUEP':1951,'xsm':2348}
print(dict1.get('xsm'))
print(dict1.get('bfx'))
"""
输出:
2348
None
"""
```
### clear()
清空字典
```python
dict1 = {'SUEP':1951,'xsm':2348}
print(dict1)
dict1.clear()
print(dict1)
"""
输出:
{'SUEP': 1951, 'xsm': 2348}
{}
"""
```
### items()
返回可迭代的包含所有键值对的元组
```python
dict1 = {'SUEP':1951,'xsm':2348}
print(dict1.items())
for i in dict1.items():
    print(i)
"""
输出:
dict_items([('SUEP', 1951), ('xsm', 2348)])
('SUEP', 1951)
('xsm', 2348)
"""
```
### other
[剩余的内置方法，w3cshool](https://www.w3cschool.cn/python3/python3-dictionary.html)
[官网文档](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#dictionaries)