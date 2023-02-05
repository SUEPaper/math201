---
id: histogram
sidebar_position: 5
---

# 直方图


直方图基本上用于表示以某些组的形式提供的数据。它是数字数据分布的图形表示的准确方法。它是一种条形图，其中 X 轴表示 bin 范围，而 Y 轴给出信息关于频率

要创建直方图，第一步是创建范围的 bin，然后将整个范围的值分布到一系列间隔中，并对落入每个间隔的值进行计数。Bins 清楚地标识为连续的、非变量的重叠区间。matplotlib.pyplot.hist() 函数用于计算和创建 x 的直方图。

matplotlib.pyplot.hist(): https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist


## 基本案例

```python
# importing matplotlib module
from matplotlib import pyplot as plt
 
# Y-axis values
y = [10, 5, 8, 4, 2]
 
# Function to plot histogram
plt.hist(y)
 
# Function to show the plot
plt.show()
```


```python
import matplotlib.pyplot as plt
import numpy as np

 
# Creating dataset
np.random.seed(23685752)
N_points = 10000
n_bins = 20
 
# Creating distribution
x = np.random.randn(N_points)
y = .8 ** x + np.random.randn(10000) + 25
 
# Creating histogram
fig, axs = plt.subplots(1, 1,
                        figsize =(10, 7),
                        tight_layout = True)
 
axs.hist(x, bins = n_bins)
 
# Show plot
plt.show()
```


```python
import matplotlib.pyplot as plt
import numpy as np
from matplotlib import colors
from matplotlib.ticker import PercentFormatter
 
 
# Creating dataset
np.random.seed(23685752)
N_points = 10000
n_bins = 20
 
# Creating distribution
x = np.random.randn(N_points)
y = .8 ** x + np.random.randn(10000) + 25
legend = ['distribution']
 
# Creating histogram
fig, axs = plt.subplots(1, 1,
                        figsize =(10, 7),
                        tight_layout = True)
 
 
# Remove axes splines
for s in ['top', 'bottom', 'left', 'right']:
    axs.spines[s].set_visible(False)
 
# Remove x, y ticks
axs.xaxis.set_ticks_position('none')
axs.yaxis.set_ticks_position('none')
   
# Add padding between axes and labels
axs.xaxis.set_tick_params(pad = 5)
axs.yaxis.set_tick_params(pad = 10)
 
# Add x, y gridlines
axs.grid(b = True, color ='grey',
        linestyle ='-.', linewidth = 0.5,
        alpha = 0.6)
 
# Add Text watermark
fig.text(0.9, 0.15, 'Jeeteshgavande30',
         fontsize = 12,
         color ='red',
         ha ='right',
         va ='bottom',
         alpha = 0.7)
 
# Creating histogram
N, bins, patches = axs.hist(x, bins = n_bins)
 
# Setting color
fracs = ((N**(1 / 5)) / N.max())
norm = colors.Normalize(fracs.min(), fracs.max())
 
for thisfrac, thispatch in zip(fracs, patches):
    color = plt.cm.viridis(norm(thisfrac))
    thispatch.set_facecolor(color)
 
# Adding extra features   
plt.xlabel("X-axis")
plt.ylabel("y-axis")
plt.legend(legend)
plt.title('Customized histogram')
 
# Show plot
plt.show()
```

## 设置透明度和边框颜色

```python

# importing libraries
import matplotlib.pyplot as plt
import numpy as np
from numpy.lib.histograms import histogram
 
# generating two series of random values
# using numpy random module of shape (500,1)
series1 = np.random.randn(500, 1)
series2 = np.random.randn(400, 1)
 
# plotting first histogram
plt.hist(series1, label='series1', alpha=.8, edgecolor='red')
 
# plotting second histogram
plt.hist(series2, label='series2', alpha=0.7, edgecolor='yellow')
plt.legend()
 
# Showing the plot using plt.show()
plt.show()
```

## Bin 大小

直方图是用户给出的数据分布的图形表示。它的外观类似于条形图，只是它是连续的。直方图的塔或条称为bin。每个 bin 的高度显示该数据中有多少值落入该范围。

> Width of each bin is = (max value of data – min value of data) / total number of bins 

直方图中要创建的 bin 数量的默认值为 10。但是，我们可以使用 matplotlib.pyplot.hist() 中的参数 bins 更改 bin 的大小。

### 方法一：

我们可以在 bins 中传递一个整数，说明要在直方图中创建多少个 bin，然后每个 bin 的宽度会相应改变。

```python
import matplotlib.pyplot as plt
  
height = [189, 185, 195, 149, 189, 147, 154, 
          174, 169, 195, 159, 192, 155, 191, 
          153, 157, 140, 144, 172, 157, 181, 
          182, 166, 167]
  
plt.hist(height, edgecolor="red", bins=5)
plt.show()
```

这里，bins = 5，即要创建的 bins 数量为 5。将 bins 设置为整数会创建大小或宽度相等的 bins。随着 bin 大小的更改，bin 宽度将相应更改为

> width = (195 – 140 ) / 5 = 11

### 方法二：

我们还可以在参数 bins 中传递一个 int 或 float 序列。其中序列的元素是 bin 的边缘/边界。在这种方法中，每个 bin 的 bin 宽度可能不同。

假设一个序列 [1,2,3,4,5] 被分配给 bins 那么制作的 bins 的数量将为 4 即第一个 bins 将是 [1,2) （包括 1，但不包括 2）第二个 bins 将是 [2,3)（包括 2，但不包括 3）第三个 bin 将是 [3,4)（包括 3，但不包括 4）。但是，在最后一个 bin [4,5] 中，4 和 5 都包含在内。

因此，所有的箱子都是半开的 [a, b) 但最后一个箱子是关闭的 [a, b]。对于这种情况，每个 bin 的宽度是相等的。

如果分配给 bin 的序列的每个元素之间的差异不相等，则每个 bin 的宽度不同，因此 bin 宽度取决于序列。

```python
import matplotlib.pyplot as plt
  
marks = [1, 2, 3, 2, 1, 2, 3, 2, 
         1, 4, 5, 4, 3, 2, 5, 4, 
         5, 4, 5, 3, 2, 1, 5]
  
plt.hist(marks, bins=[1, 2, 3, 4, 5], edgecolor="black")
plt.show()
```
### 方法三：

为了在 bins 参数中传递一个序列，我们也可以使用 range 函数来获得均匀分布的 bins。在range()中，起点是数据的最小值，终点是数据的最大值+提到的bin宽度，在range()中，不包括端点，步长是bin宽度。

由于步长在 range() 中是固定的，我们在直方图中得到了大小相等的 bin。

```python
import matplotlib.pyplot as plt
  
data = [87, 53, 66, 61, 67, 68, 62, 110,
        104, 61, 111, 123, 117, 119, 116,
        104, 92, 111, 90, 103, 81, 80, 101,
        51, 79, 107, 110, 129, 145, 128, 
        132, 135, 131, 126, 139, 110]
  
binwidth = 8
plt.hist(data, bins=range(min(data), max(data) + binwidth, binwidth),
         edgecolor="yellow", color="brown")
  
plt.show()
```