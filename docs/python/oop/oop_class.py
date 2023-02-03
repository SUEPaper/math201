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
    