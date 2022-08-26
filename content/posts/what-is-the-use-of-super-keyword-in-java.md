---
title: What is the use of super keyword in JAVA
date: 2015-03-22T21:38:00.000Z
categories:
  - java
  - start
  - super
tags:
  - super keyword
  - java tutorial
layout: post-java
author:
  - lpl
description: >-
  java super constructor,super() in java,What does a super do in Java,super
  keyword in java with example
keywords: >-
  java super constructor,super() in java,What does a super do in Java,super
  keyword in java with example
comments: true
image: ./img/what-is-the-use-of-super-keyword-in-java-min.png
---

## Super keyword in java
Super keyword is used to call base class's method or constructor. If we inherite a class and that class doesn't have [default constructor](https://learnpainless.com/java/start/constructor/what-is-default-constructor-in-java) then we can call base class's overloaded constructor inside our class's constructor using supe keyword.

### For example:

```java
class Java{
	public Java(String title){
		System.out.println(title);
	}
}

class Android extends Java{
	public Android(){
		super("Hello from Android class using super");
	}
}
```

Super keyword will call matching constructor of base class, which means if you pass 2 parameters to super keyword then it will call base class's constructor having 2 parameters. If you call super keyword without parameters then it will call [default constructor](https://learnpainless.com/java/start/constructor/what-is-default-constructor-in-java) of base class.

