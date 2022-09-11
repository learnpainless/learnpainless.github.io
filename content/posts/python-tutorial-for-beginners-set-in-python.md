---
layout: post
comments: true
title: Python Tutorial for Beginners | Set in Python
date: 2022-09-11T01:09:00.000+05:30
categories:
- Python
tags:
- set
image: "./img/python-set.png"
description: Learn what a dictionary is in Python, different dictionaries types, how
  you can create this type of data structure on your own and find out the access methods
author: []
draft: false

---
## Sets in Python

A **Set** is an ordered collection of data types in Python that is iterable and mutable. It has no duplicate elements. Although a set may contain many elements, the order of its elements is not defined. A set is a better choice than a list because it uses a highly optimized method to check whether an element is in the set.

### Create a Set

You can create sets by using the **set()** function that comes with an iterable object. Or, you can place the sequence in curly braces separated by a "comma".

```python

# Python program to demonstrate
# Creation of Set in Python
 
# Creating a Set
set1 = set()
print("Initial blank Set: ")
print(set1)
 
# Creating a Set with
# the use of a String
set1 = set("LearnPainLess")
print("\nSet with the use of String: ")
print(set1)
 
# Creating a Set with
# the use of Constructor
# (Using object to Store String)
String = 'LearnPainLess'
set1 = set(String)
print("\nSet with the use of an Object: " )
print(set1)
 
# Creating a Set with
# the use of a List
set1 = set(["Python", "Java", "React", "Java"])
print("\nSet with the use of List: ")
print(set1)
```

Output

> Initial blank Set:
>
> set()
>
> Set with the use of String:
>
> {'i', 'L', 'a', 'P', 'e', 's', 'r', 'n'}
>
> Set with the use of an Object:
>
> {'i', 'L', 'a', 'P', 'e', 's', 'r', 'n'}
>
> Set with the use of List:
>
> {'Python', 'Java', 'React'}

While a set only contains unique elements, it can contain multiple duplicates at the time of its creation. The order of elements in a given set is not defined and cannot be changed. The type of elements in a set does not have to be the same. You can pass different mixed-up data types values to the set.

### Creating a set with another method

```python
# Another Method to create sets in Python3
 
# Set containing numbers
my_set = {'Python', 'Java', 'React'}
 
print(my_set)
```

Output

> {'Python', 'Java', 'React'}

### Adding Elements to a Set

#### Utilizing the an add() method

The elements can be added employing the included **function add()** function. Each element can be added at one single time is added to the Set applying the add() method. Loops can be used to add several elements at once using the adding() procedure.

> **Notice:** Lists cannot be added to sets as elements due to the fact that they are not ishable. However, Tuples can be added as tuples can be impervious and thus Hashable.

```python
# Python program to demonstrate
# Addition of elements in a Set
 
# Creating a Set
set1 = set()
print("Initial blank Set: ")
print(set1)
 
# Adding element and tuple to the Set
set1.add(8)
set1.add(9)
set1.add((6, 7))
print("\nSet after Addition of Three elements: ")
print(set1)
 
# Adding elements to the Set
# using Iterator
for i in range(1, 6):
    set1.add(i)
print("\nSet after Addition of elements from 1-5: ")
print(set1)
```

Output

> Initial blank Set:
> set()
>
> Set after Addition of Three elements:
> {8, 9, (6, 7)}
>
> Set after Addition of elements from 1-5:
> {1, 2, 3, (6, 7), 4, 5, 8, 9}

#### Utilizing the Update() method

To add 2 or more components, the, the Update() technique is employed. Update() method takes lists and strings, tuples, and other sets of data as its arguments. In all cases it is recommended to avoid duplicate elements.

```python
# Python program to demonstrate
# Addition of elements in a Set
 
# Addition of elements to the Set
# using Update function
set1 = set([4, 5, (6, 7)])
set1.update([10, 11])
print("\nSet after Addition of elements using Update: ")
print(set1)
```

Output

> Set after Addition of elements using Update:
> {4, 5, (6, 7), 10, 11}

### Removing elements from the Set

#### Applying the Remove() technique or the discard() technique:

They can also be eliminated by an Set through the integrated removal() function however KeyErrors occur in the event that the element doesn't exist within the set. To eliminate elements from a collection without KeyErrors, use the function discard() when the element isn't in this set. It will remain unaltered.

```python
# Python program to demonstrate
# Deletion of elements in a Set
 
# Creating a Set
set1 = set([1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12])
print("Initial Set: ")
print(set1)
 
# Removing elements from Set
# using Remove() method
set1.remove(5)
set1.remove(6)
print("\nSet after Removal of two elements: ")
print(set1)
 
# Removing elements from Set
# using Discard() method
set1.discard(8)
set1.discard(9)
print("\nSet after Discarding two elements: ")
print(set1)
 
# Removing elements from Set
# using iterator method
for i in range(1, 5):
    set1.remove(i)
print("\nSet after Removing a range of elements: ")
print(set1)
```

#### Method: Using Pop() Method:

The Pop() function may also be employed to remove elements from the set, however it only removes the last element in the set.

> **NOTE:**If the set is unsorted, there is no method to identify the element that is popping making use of the pop() function.

```python
# Python program to demonstrate
# Deletion of elements in a Set
 
# Creating a Set
set1 = set([1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12])
print("Initial Set: ")
print(set1)
 
# Removing element from the
# Set using the pop() method
set1.pop()
print("\nSet after popping an element: ")
print(set1)
```