---
layout: post
comments: true
title: Python Tutorial for Beginners | Lists in Python
date: 2022-09-11T01:07:00+05:30
categories:
- Python
tags:
- lists
image: "./img/python-list.png"
description: Learn how to create lists in Python with this complete tutorial. You
  will learn about types of lists and how to use them by creating a list of your own.
author: []
draft: false

---
### List

Python comes with a wonderful list type called "list". List literals are written in square brackets \[\]. Lists function in the same way as strings. Use the len() function with square brackets \[\] to access data. The index zero element is the first.

Lists can be used to store multiple items within a single variable.

Lists are one among the 4 data types that Python has built in to store data collections. The other 3 are [Tuple](https://www.w3schools.com/python/python_tuples.asp) and [Set](https://www.w3schools.com/python/python_sets.asp). Each type has different properties and uses.

Square brackets are used to create lists:

```python
thislist = ["Python", "Java", "PHP"]
print(thislist)
```

### Check out the List

The list items can be ordered, changed, and allowed to have duplicate values.

Indexing is done for list items. The index `[0]` first, and the index `[1]` second, respectively.

### Ordered

If we say that lists can be ordered, it means that items are in a predetermined order and will not change.

You can add new items to your list by placing them at the end.

Variable

A list can be modified after it is created. This means that items can be added, removed, or changed.

### Duplicate Authorization

Lists can contain items of the same value because they are indexed

```python
thislist = ["Python", "Java", "PHP", "Java", "Python"]
print(thislist)
```

### List Length

Use the `len()` function to determine how many items are in a list.

```python
thislist = ["Python", "Java", "PHP"]
print(len(thislist))
```

### List Items - Data Types

Any data type can be used to create list items:

```python
list1 = ["Python", "Java", "PHP"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]
```

### Type of List

Python sees lists as objects that have the data type "list":

> <class 'list'>

```python
mylist = ["Python", "Java", "PHP"]
print(type(mylist))
```