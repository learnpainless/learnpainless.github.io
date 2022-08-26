---
title: What is the use of static keyword in JAVA
date: 2015-03-20T22:38:00.000Z
categories:
  - java
  - start
  - static
tags:
  - static keyword
  - java tutorial
layout: post-java
author:
  - lpl
description: >-
  java static,java static block,java static class,java static method,java static
  variable,static class,static class java,static java,static method,static
  method in java,static method java,static variable,static variable java,what
  does static mean in java,what is static in java
keywords: >-
  java static,java static block,java static class,java static method,java static
  variable,static class,static class java,static java,static method,static
  method in java,static method java,static variable,static variable java,what
  does static mean in java,what is static in java
comments: true
image: ./img/what-is-the-use-of-static-keyword-in-java-min.png
---

## Type of static in JAVA

In **JAVA static** can be used in three way,

1. static Variables
2. static methods
3. static block

## What is static keyword in JAVA ???

'**static**' is a predefined keyword of JAVA, and it is used to make variables and methods static.

* '_static_' means if we make a Variable of class as '**static**' then each and every methods of class will use same copy of variable, they will not create new instance of same variable.
* By making a variable or methods static, they can be accessed from outside of that class without creating instance of that class.
* By making a variable or method static they can be used until class not destroyed.
* By making a method static then that method belong to that class, not an object (instance) of class. (Which means its value remain same)
* You can not use normal variables in static method, you need to make that variable final to access in static method.
* You can not class non-static method inside static method.

## When to use **java static** keyword ???

**static** keyword is used when you want actual value of method which, because you can access method outside class without making instance of a class this means you will directly call to that method, and value of that method will not change.
for example :

suppose You have a method which will fetch data from internet and store it in a variable. Now you want to get value of that variable in another class, then you can make that method "static" and you can get its values by this syntax : ClassName.variableName;

## Syntax of creating and calling _java static_ fields :

```java
public class Test{
  static String msg = "Hello"; // static variable;

  static void getMsg(){
    // this is static method.
  }
}

```

### To call java static variable/method :

```java
public class Message{
  String value = Test.msg; // get value from first class, and store in value string;
  System.out.println(value); // print value of value string.
}
```

### java static methods and Variables :
To create **java static** method we simple use '**static**' keyword, and if your methods have some non-static methods or variables then also make then static, because static method can access only static fields.

Syntax of creating static method in non-static class:

```java
public class Main {

	public static void main(String[] args) {
		Test.getData(); // calling static method from another class directly using class name
		System.out.println(Test.sum); // accessing sum variable from another class
	}
}
class Test{
	static int a = 10;
	static int b = 8;
	static int sum;

	public static void getData(){
		sum = a+b;
	}
}
```

So in the given example I have 2 java classes '**Main**' and '**Test**', and inside the '**Test**' class I have some static variables and 1 static method. And I am calling that method and variable in '**Main**' class without creating an instance of '**Test**' class. But if that variables and method should be non-static then its impossible to class them without creating an Instance of '**Test**' class.

