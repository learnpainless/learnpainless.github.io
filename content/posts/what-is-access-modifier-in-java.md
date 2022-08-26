---
title: What is Access Modifiers in JAVA
date: 2015-03-24T06:38:00.000Z
categories:
  - java
  - start
  - access modifiers
tags:
  - access modifiers
  - java tutorial
layout: post-java
author:
  - lpl
description: >-
  java access modifiers table,non access modifiers in java,java protected
  class,access modifiers in java with example program
keywords: >-
  java access modifiers table,non access modifiers in java,java protected
  class,access modifiers in java with example program
comments: true
image: ./img/what-is-access-modifier-in-java-min.png
---

## Access Modifiers in java with example program

Access modifier is keyword to change visibility of variable,class, constructor or methods. Access modifier will be used according to our need, how and where we want to use those variable,class, constructor or methods.

## Access modifier are of 4 types in java:

1.	default
2.	private
3.	protected
4.	public

### Example of access modifier in java:

```java
public class Android{
	private void show(){
		//some code here.
	}
}
```

## Default access modifier: 
they are visible to package. To make class, variable, constructor or methods visibility to default then we don't need to use any keyword.

### Example of default access modifier:

```java
class Android{
}
```

This class Android will be accessible to any class within same package.

## Private access modifier:

As its name says, it makes the visibility to class only. Which means if any variable or method of a class have access modifier to private then it will only visible inside its class.

### Example of private access modifier:

```java
class Android{
	private void show(){
		//This is private method and visible inside only this Android class.
	}
}
```

## Protected access modifier:

Protected access modifier change the visibility to package and subclass only. Subclass means if class Android extends class Java, and class Java have protected method then ot will be accessible inside Android class.

### Example of protected access modifier:

```java
class Java {
	protected void run(){
		System.out.println("accessed from derived class");
	}
}

class Android extends Java{
	private void show(){
		run(); // protected method of java class called here.
	}
}
```

## Public access modifier in java:

Public access modifier change the visibility to the world , which means they are accessible anywhere in the project. 

### Example of public access modifier in java:

```java
public class Java{
	public void show(){
		System.out.println("public method called");
	}
}
```

