class Class:
    def __init__(self,name,num):
        self.Class_name = name
        self.people_num = num
    

    def show_Class_name(self):
        print(self.Class_name)

    
    def show_people_num(self):
        print(self.people_num)

if __name__ == '__main__':
    Class_121 = Class('121',100)
    Class_121.show_Class_name()