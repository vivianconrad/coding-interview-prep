# In Python, *args and **kwargs are special syntax used to pass a variable number of arguments to a function. The
# *args syntax allows us to pass a variable number of non-keyworded arguments to a function. For example, if we have
# a function that takes two arguments, we can use *args to pass any number of additional arguments:

def my_function(arg1, arg2, *args):
    print(arg1)
    print(arg2)
    print(args)


my_function(1, 2, 3, 4, 5)


# Output:
# 1
# 2
# (3, 4, 5)

# The **kwargs syntax allows us to pass a variable number of keyworded arguments to a function. For example:

def my_function(**kwargs):
    for key, value in kwargs.items():
        print(key, value)


my_function(name='John', age=30)

# Output:
# name John
# age 30
