---
layout: post
comments: true
title: Python Tutorial for Beginners | Dictionary in Python
date: 2022-09-11T01:09:00.000+05:30
categories:
- Python
tags:
- dictionary
image: "./img/python-dictionary.png"
description: Learn what a dictionary is in Python, different dictionaries types, how
  you can create this type of data structure on your own and find out the access methods
author: []
draft: false

---
## Dictionary in Python

**Dictionary within Python** can be described as a set of keys and values. It is that are used to store data as a map. It is distinct from other data types which only have one value per element.

### Example of Dictionary in Python

Dictionary contains **the key-value** pair. Key-Value information is contained inside the dictionary, to help make it more efficient.

```python
myDictionary = {1: 'Java', 2: 'Python', 3: 'PHP'}
print(myDictionary)
```

Output

> {1: 'Java', 2: 'Python', 3: 'PHP'}

### Creating a Dictionary

The language of [Python](https://www.geeksforgeeks.org/python-programming-language/) it is possible to create it is possible to create a dictionary by putting a series of elements inside curly **{** braces that are separated by a "comma". Dictionary is a collection of values, with one being Key and the other being Key and the other pair element is the **key:value**. Dictionary values can be any type of data and may be duplicated however keys aren't or duplicated. They must, however, be _unchangeable._.

> Note Note Dictionary keys are case-sensitive The same name is used, but different versions for Key will be dealt with in a different way.

```python
myDictionary = {1: 'Java', 2: 'Python', 3: 'PHP'}
print(myDictionary)

# Creating a Dictionary
# with Mixed keys
myDictionary = {'Name': 'LearnPainLess', 1: [1, 2, 3, 4]}
print("\nDictionary with the use of Mixed Keys: ")
print(myDictionary)
```

Output

> Dictionary with the use of Integer Keys:
> {1: 'Java', 2: 'Python', 3: 'PHP'}
> Dictionary with the use of Mixed Keys:
> {'Name': 'LearnPainLess', 1: \[1, 2, 3, 4\]}

Dictionary can also be created by the built-in function dict(). An empty dictionary can be created by just placing to curly braces{}.

```python

# Creating an empty Dictionary
myDictionary = {}
print("Empty Dictionary: ")
print(myDictionary)
  
# Creating a Dictionary
# with dict() method
myDictionary = dict({1: 'Java', 2: 'Python', 3: 'PHP'})
print("\nDictionary with the use of dict(): ")
print(myDictionary)
  
# Creating a Dictionary
# with each item as a Pair
myDictionary = dict([(1, 'Java'), (2, 'Python')])
print("\nDictionary with each item as a pair: ")
print(myDictionary)
```

Output

> Empty Dictionary:
> {}
> Dictionary with the use of dict():
> {1: 'Java', 2: 'Python', 3: 'PHP'}
> Dictionary with each item as a pair:
> {1: 'Java', 2: 'Python'}

### Adding elements to a Dictionary

The addition of elements can be achieved in various ways. A single value at a time could be included in an Dictionary by denoting value using the keys e.g. Dict\[Key\] = 'Value'. The process of updating an existing value in an existing Dictionary can be accomplished employing an inbuilt **updating()** method. Key values that are nested can include in an already existing Dictionary.

**Note:** when adding an value when the key-value already exists, the value is updated , or a brand new Key that contains this value will be added to Dictionary.

```python
# Creating an empty Dictionary
myDictionary = {}
print("Empty Dictionary: ")
print(myDictionary)
  
# Adding elements one at a time
myDictionary[0] = 'Java'
myDictionary[2] = 'Python'
myDictionary[3] = 1
print("\nDictionary after adding 3 elements: ")
print(Dict)
  
# Adding set of values
# to a single Key
myDictionary['Value_set'] = 2, 3, 4
print("\nDictionary after adding 3 elements: ")
print(myDictionary)
  
# Updating existing Key's Value
myDictionary[2] = 'Welcome'
print("\nUpdated key value: ")
print(myDictionary)
  
# Adding Nested Key value to Dictionary
myDictionary[5] = {'Nested': {'1': 'Life', '2': 'Dev'}}
print("\nAdding a Nested Key: ")
print(myDictionary)
```

Output

> Empty Dictionary: 
> {}
> Dictionary after adding 3 elements: 
> {0: 'Java', 2: 'Python', 3: 1}
> Dictionary after adding 3 elements: 
> {0: 'Java', 2: 'Python', 3: 1, 'Value_set': (2, 3, 4)}
> Updated key value: 
> {0: 'Java', 2: 'Welcome', 3: 1, 'Value_set': (2, 3, 4)}
> Adding a Nested Key: 
> {0: 'Java', 2: 'Welcome', 3: 1, 'Value_set': (2, 3, 4), 5: 
> {'Nested': {'1': 'Life', '2': 'Dev'}}}