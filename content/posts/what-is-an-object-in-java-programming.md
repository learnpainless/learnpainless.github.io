---
title: What is an Object in java programming
date: 2015-02-06T02:00:00.000Z
categories:
  - java
  - start
tags:
  - class
  - object
  - how to
  - java
layout: post-java
modified_time: '2015-02-06 02:00'
author:
  - lpl
description: >-
  what are objects in JAVA programming language, how to create object in
  java,why we need objects in java class, when to create java object.
keywords: >-
  java objects,create object of class,call methods using object in java,define
  object in java
comments: true
image: ./img/what-is-an-object-in-java-programming-min.png
---

Objects means which point out property of anything. for example dogs,cats,human.object can be used to define different states of anything. for example:

* Cycle is a thing and it have some properties like : handle,seat,wheels.
 And the same way objects are in JAVA. Objects are used to determine state of Anything. For example Cycle is Running, so Running is property of a Cycle and Cycle is Object.

In JAVA or other programming language Objects are similar as real world things, Objects have some states. Objects are used to operate a class. And you know Class is Collection of Variables, Methods etc. To access that Variables and Methods we need to create object of a Class. We can access methods and Variables of class without help of Variables.

But we can use "static" keyword to make Methods and Variables accessible by other classes without creating object of a class. I will discuss in deeply about "static" keyword. But for know you can say that using "static" keyword we can make a methods fixed.

In programming language Object is an Instance of a Class. which is used to access methods and Variables of a class outside that class.

An **[Object](http://en.wikipedia.org/wiki/Object_%28computer_science%29 "Object (computer science)")** is reference to [Class](http://en.wikipedia.org/wiki/Class_%28computer_programming%29 "Class (computer programming)"). We need to create **Object** to call methods of a Class into another class or main [method](http://en.wikipedia.org/wiki/Method_%28computer_programming%29 "Method (computer programming)"). We cannot call variables or methods of a class without creating an **Object** of that class. But if variables or methods are static then we can access them without creating Objects. Variables are also an Object. When we declare a variable that time we are creating a reference of a class which is called as variables or Object of that [data type](http://en.wikipedia.org/wiki/Data_type "Data type") or class. We can create **Object** of built in classes like [String](http://en.wikipedia.org/wiki/String_potentiometer "String potentiometer"), [Integer](http://en.wikipedia.org/wiki/Integer_%28computer_science%29 "Integer (computer science)") etc and we can also create an **Object** of our custom class to.

For example:

```java
class First{
	public static void main(String[] args){

    String s = "Example of Object";
		System.out.println(s);
	}
}
```

and the output will be

```xml
Example of Object
```

