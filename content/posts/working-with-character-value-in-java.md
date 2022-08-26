---
title: Working with Character value in java
date: 2015-02-10T22:16:00.000Z
categories:
  - java
  - start
tags:
  - char
layout: post-java
modified_time: '2015-02-10 22:16'
author:
  - lpl
description: >-
  character types,java character,char array,char java,char to int java,char to
  string java,character java,java char to int,java char to string,java string to
  char array,string to char array java,string to char java
keywords: >-
  character types,java character,char array,char java,char to int java,char to
  string java,character java,java char to int,java char to string,java string to
  char array,string to char array java,string to char java
comments: true
image: ./img/working-with-character-value-in-java-min.png
---

**Character** is single valued object. A character is anything that you can type such as letters, digits, punctuation and spaces. Character is similar to String; the difference is that String contain 0 or more values but character contains only 1 value. Character value is written inside single quotes. We can also have thought that String is array of **Characters**. Because String contains multiple characters. **Character** contains only 1 alphabet, number or symbol.

**Character** is **primitive** data type. Every primitive type in Java have advantages in term of speed and memory footprint. But it is not a real object, so there is some possibility you lose using them. They cannot be used as Generic Type Parameters, the could not have methods or fields and so on.

For example:
```java
char a = 'P';
char b = '1';
char c = '@';
```

## <span style="color: #ff6600;">These are example of how to create character in java.</span>

Well, char (or its wrapper class Character) means a single character, i.e. you can't write 'ab' whereas String is a text consisting of a number of characters and you can think of a string an array of characters (in fact the String class has a member char[] value).

You could work with plain char arrays but that's quite tedious and thus the String class is there to provide a convenient way for working with texts.

To convert a string to a char array you can use

```java
theNameOfTheString.toCharArray();
```

String holds many char values. This is best expressed through an example.

Examples:

```java
char someChar ='A';
String someString ="I like to eat food!";
```
 In terms of ASCII values, you can say char is a single ASCII value ranging from 0-255\. Whereas String is a collection of ASCII values. Try this code to learn better.

```java
char c='a';
String s="a b c d e f g hijkl";
int i=c;

System.out.println(i);

for(int count=0;count<s.length();count++)
{
  int temp=s.charAt(count);
  System.out.print(temp+" ");
}
```
The output will be:

```java
97
97 32 98 32 99 32 100 32 101 32 102 32 103 32 104 105 106 107 108
```

Since 97 is the ASCII value for small 'a'. 32 is the ASCII value for space. Hope this helps in-depth understanding of the concept.

