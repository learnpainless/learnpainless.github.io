---
title: Why we use Conditional code and its different types
date: 2015-02-14T06:01:00.000Z
categories:
  - java
  - start
tags:
  - contidions
layout: post-java
modified_time: '2015-02-14 06:01'
author:
  - lpl
description: >-
  conditional operator,conditional statement examples,java conditional
  operator,java operator precedence, prevent your java program from crash using
  conditions
keywords: >-
  conditional operator,conditional statement examples,java conditional
  operator,java operator precedence, prevent your java program from crash using
  conditions
comments: true
image: ./img/why-we-use-conditional-code-and-its-different-types-min.png
---

Conditional code will help our app to prevent from sudden crash. By using conditions, we can fully customize our program. We can perform many task from same code using conditions.

## <span style="color: #ff6600;">How conditions help our app to prevent from crash???</span>

Our app mostly crashes by giving **Exceptions**. And we can double check that exception before execution of our app to prevent from crash. For example, if we are performing action on any variable's value, but that variable is null then we will get exception "Null Pointer Exception". To prevent from that null Pointer exception, we can perform action within conditions. We will first check if that variable is not null then perform our action, else skip exception.

**conditional statement examples:**

```java
class Test{
  String test;
  void split(){
    System.out.println(test.subString(0,5));
  }
}

```

If we run this code then it will produce "**NullPointer Exception**". Because string test is null. And there is an another exception that is "**IndexOutOfBound Exception**". Because length of string test is 0 and we are splitting that string from 0 to 5 and 5th index is not available.

### <span style="color: #339966;">So we can write conditions as below:</span>

```java
class Test{
  String test;
  void split()
  {
    if(test != null) //this code will check test is null or not.
    {
      if(test.lenght() > 5) // this will check test greater than 5 or not
      {
        System.out.println(test.subString(0,5));
      }
      else
      {
        System.out.println("lenght of string is less than 5");
      }
    }
    else
    {
      System.out.println("String is null");
    }
  }
}

```

### <span style="color: #ff6600;">Types of flow control statement</span>

1.  [If statement](https://learnpainless.com/java/start/if-statement-in-java-how-to-use)
2.  if-else statement
3.  Switch statement

