---
title: What is the use of final keyword in JAVA
date: 2015-03-21T22:38:00.000Z
categories:
  - java
  - start
  - final
tags:
  - final keyword
  - java tutorial
layout: post-java
author:
  - lpl
description: >-
  java final,java final keyword,java final class,java final method,java final
  variable,final class,final class java,final java,final method,final method in
  java,final method java,final variable,final variable java,what does final mean
  in java,what is final in java
keywords: >-
  java final,java final block,java final class,java final method,java final
  variable,final class,final class java,final java,final method,final method in
  java,final method java,final variable,final variable java,what does final mean
  in java,what is final in java
comments: true
image: ./img/what-is-the-use-of-final-keyword-in-java-min.png
---

## Final keyword in java

Final keyword is used to make member's value unchanged. Simple definition of final keyword is to make variable's values non-changeable. Once you declare any member as final you cannot modify it.
To make any member as final we simply need to put final keyword before data type.

### Example of final keyword:

```java
final int a = 10;
```

Variable/member marked as final should be initialized at the time of declaration. The reason is that value of final variable is fixed, so we need to provide value at the time of declaration.

### Can we modify final members after declaration?

Yes, we can modify final members inside Constructor. Because Constructor called when class is created and it will also initialize final variables.

