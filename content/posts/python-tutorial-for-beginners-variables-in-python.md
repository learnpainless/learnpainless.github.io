---
layout: post
comments: true
title: Python Tutorial for Beginners | Variables in Python
date: 2022-09-11T01:05:00+05:30
categories:
- Python
tags:
- variables
image: "./img/python-variables.png"
description: Variables in Python Tutorial for Beginners. Learn about variables, assignment,
  and specifying elements of python with this tutorial for beginners
author: []
draft: false

---
Variables are used to store data values, its just like a container.

We can change value of variable any time.

### Declaration

In python there is no command or keyword to create variables, variable is created automatically when we assign any value to it. And we also don’t need to provide type of variable, python will determine type of variable automatically.

```python
a = 10
b = “Pawneshwer Gupta”
```

by this line of code, variable got created with name “a” and its value will be 10 of type integer and “b” with value Pawneshwer Gupta of type String.

In python we don’t need to define type and type can be changed anytime.

```python
a = 6.5
```

now type of a is changed from integer to float value and it has new value 6.5. This is how we change type of variable in python.

```python
x = str(3) # x will be '3'  
y = int(3) # y will be 3  
z = float(3) # z will be 3.0
```

### How to get type of variable

to get type of variable python has a special function with name “**type()**”.

```python
x = 5  
y = "John"  
print(type(x))  
print(type(y))
```

### Double or Single quotes?

Both are used to create string variable, both have same meaning.

```python
x = "John"  
# is the same as  
x = 'John'
```

### Is Python Case Sensitive?

Yes Python is Case sensitive

```python
a = 4  
A = "Sally"  
#A will not overwrite a
```