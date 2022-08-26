---
title: Why Main method in java is static?
date: 2015-03-17T18:41:00.000Z
categories:
  - java
tags:
  - main method
  - core java
layout: post-java
author:
  - pawneshwer
comments: true
modified_time: '2016-03-18T06:52:17.859+05:30'
image: ./img/Why-is-the-Java-main-method-static-min.png
---

The method is static because otherwise there would be ambiguity: which constructor should be called? Especially if your class looks like this:

```java

public class JavaClass{
  protected JavaClass(int x){}
  public void main(String[] args){
  }
}
```

# Should the JVM call new JavaClass(int)?

## What should it pass for x?

If not, should the JVM instantiate JavaClass without running any constructor method? I think it shouldn't, because that will special-case your entire class - sometimes you have an instance that hasn't been initialized, and you have to check for it in every method that could be called.

There are just too many edge cases and ambiguities for it to make sense for the JVM to have to instantiate a class before the entry point is called. That's why main is static.

