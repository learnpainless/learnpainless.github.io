---
layout: post
comments: true
title: Python Tutorial for Beginners | Data Types in Python
date: 2022-09-11T01:10:00.000+05:30
categories:
- Python
tags:
- data types
image: "./img/python-data-types.png"
description: This article provides a python tutorial for absolute beginners. We will
  cover data types – lists, tuples, and dictionaries.
author: []
draft: false

---
In programming, data type is an important concept.

Variables can store data of different types, and different types can do different things.

In python, we have 14 data types and they are classified into 6 types.

### I) Fundamental Categery Data Types:

#### 1. int

Interger datatype is used to store positive or negative numeric values without decimal. This means `10` or `-10` is valid int values, but `10.0` is not valid int value.

#### 2. float

float datatype is used to store positive or negative numeric values with decimal. Which means `10.0` or `-10.0` is valid float values but `10` is not valid.

#### 3. bool

bool datatype have only 2 values `True` or `False`. `True` is equals to positive and `False` is equals to negative value.

note: 'T' and 'F' in True and False in capital are valid bool values, otherwise python will throw error.

#### 4. complex

Complex number is represented by complex class. It is specified as (real part) + (imaginary part)j.

For example – 
```python
4+7j
```

### II) Sequential Categery Data Types:

#### 5. str

String datatype is used to store text values, for example name of person is a text, so datatype of this will be str, String value is represented using single quotes ('') or double quotes ("").

**example**

```python
name = 'Pawneshwer Gupta'
```

#### 6. bytes

In Python, a byte string is just that: a sequence of bytes. It isn't human-readable. Under the hood, everything must be converted to a byte string before it can be stored in a computer.

Encoding and decoding are inverse operations. Everything must be encoded before it can be written to disk, and it must be decoded before it can be read by a human.

#### 7. bytearray

`bytes` and `bytearray` classes both hold arrays of bytes, where each byte can take on a value between 0 and 255. The primary difference is that a `bytes` object is _immutable_, meaning that once created, you cannot modify its elements. By contrast, a `bytearray`object allows you to modify its elements.

Both `bytes` and `bytearay` provide functions to encode and decode strings.

#### 8. range

Range is used to create sequence of numbers, we can use range() function to create range.

for example

```python
x = range(10)
```

this will create sequence (kind of list) from 0 to 9, which means variable x will contain 10 items from 0 to 9,

we can also define start and end as well

for example

```python
y = range(2,8)
```

this will create sequence starts with 3 and ends with 7.

### III) List Categery Data Types:

#### 9. list

**Python Lists** are just like dynamically sized arrays, declared in other languages (vector in C++ and ArrayList in Java). In simple language, a list is a collection of things, enclosed in \[ \] and separated by commas.

```python
myList = ["Java", "Python", "PHP"]
print(myList)
```

#### 10. tuple

**Tuple** is a collection of Python objects much like a list. The sequence of values stored in a tuple can be of any type, and they are indexed by integers.

Values of a tuple are syntactically separated by ‘commas’. Although it is not necessary, it is more common to define a tuple by closing the sequence of values in parentheses. This helps in understanding the Python tuples more easily.

```python
myTuple = ("Java", "Python", "PHP")
print(myTuple)
```

### IV) Set Categery Data Types:

#### 11. set

In Python, a **Set** is an unordered collection of data types that is iterable, mutable and has no duplicate elements. The order of elements in a set is undefined though it may consist of various elements. The major advantage of using a set, as opposed to a list, is that it has a highly optimized method for checking whether a specific element is contained in the set.
```python
mySet = {"Java", "Python", "PHP"}
print(mySet)
```

#### 12. frozenset

**Frozen sets** in Python are immutable objects that only support methods and operators that produce a result without affecting the frozen set or sets to which they are applied. While elements of a set can be modified at any time, elements of the frozen set remain the same after creation.

If no parameters are passed, it returns an empty frozenset.
```python
#create normal set
mySet = {"Java", "Python", "PHP"}
    
#create frozenset from set
fSet = frozenset(mySet)
    
print(fSet)
```

### V) Dict Categery Data Types:

#### 13. dict

**Dictionary in Python** is a collection of keys values, used to store data values like a map, which, unlike other data types which hold only a single value as an element.

#### Example of Dictionary in Python

Dictionary holds **key:value** pair. Key-Value is provided in the dictionary to make it more optimized.
```python
myDict = {1: 'Java', 2: 'Python', 3: 'PHP'}
print(myDict)
```

### VI) None Type Categery Data Types:

#### 14. nonetype

`None` is just a value that commonly is used to signify 'empty', or 'no value here'. It is a _signal object_; it only has meaning because the Python documentation says it has that meaning.

There is only one copy of that object in a given Python interpreter session.

If you write a function, and that function doesn't use an explicit `return` statement, `None` is returned instead, for example. That way, programming with functions is much simplified; a function **always** returns _something_, even if it is only that one `None` object.

```python
def myFunc():
	x = 10 #assigning value to variable, but not returing anything from function.
    
a = myFunc()

print(a) #a will be of nonetype.
```