---
title: What is the use of static Block in JAVA
date: 2015-03-21T12:38:00.000Z
categories:
  - java
  - start
  - static
tags:
  - static block
  - java tutorial
layout: post-java
author:
  - lpl
description: >-
  java static block,java static class,java static method,java static
  variable,static class,static class java,static java,static method,static
  method in java,static method java,static variable,static variable java,what
  does static mean in java,what is static in java
keywords: >-
  java static,java static block,java static class,java static method,java static
  variable,static class,static class java,static java,static method,static
  method in java,static method java,static variable,static variable java,what
  does static mean in java,what is static in java
comments: true
image: ./img/what-is-the-use-of-static-block-in-java-min.png
---

## Static block in java

Static block is called when class initialized. Which means whenever your class is loaded Static block will be called.You can also call it static initializer block.
Its same like as constructor. But difference is that in static block you can initialize static members of class.

### Example of static block

```java
public class{
	private static List<String> items = new ArrayList<>();
	
	static {
		items.add("Java");
		items.add("Android");
		items.add("PHP");
		items.add("My SQL");
	}
}
```
As you can see in above example that you can declare variable globally but you can't initialize them inline. To initialize them inline we use Static block.

## Why we use Static block instead of Constructor?

you cannot initialize initials in-line as an unmodifiable map because then you couldn't populate it! You also cannot do this in a constructor because simply calling one of the modifying methods (add,put etc.) will generate an exception.

