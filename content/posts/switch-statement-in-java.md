---
title: Switch statement in java
date: 2015-02-18T22:05:00.000Z
categories:
  - java
  - start
tags:
  - switch
layout: post-java
modified_time: '2015-02-18 22:05'
author:
  - lpl
description: null
keywords: null
comments: true
image: ./img/switch-statement-in-java-min.png
---

Switch statement is same as else if statement. In switch statement only 1 condition will be true and that will be executed. Switch is easier than else if statement. In else if statement we wrote condition in every block like

```java
If (a == 1){

}
else if (b == 1) {

}
```
And so on. But in switch statement we use cases.

For example

```java
switch (condition){
  case 1:
  // Do your work here
  break;
  case 2:
  // Do your work here
  break;
  default:
  // If all cases are false then this block will b3 executed.
  break;
}  
```

This is syntax of switch statement. And you can see we have to write condition just one time on top, and after that we will use cases. Case will be any integer value which is result of condition written in switch statement.

For example, if we wrote condition

```java
int a = 3;
switch(a){
  case 1:
  System.out.println("one");
  break;
  case 2:
  System.out.println("two");
  break;
  case 3:
  System.out.println("three");
  break;
}
```

When we execute this program then we will get three as output.
We can't use String value as condition in switch statement.
Switches based on integers can be optimized to very efficient code. Switches based on other data type can only be compiled to a series of if() statements.  

For that reason, C & C++ only allow switches on integer types, since it was pointless with other types.  

The designers of C# decided that the style was important, even if there was no advantage.  

The designers of Java apparently thought like the designers of C. as soon as you start switching on non-primitives you need to start thinking about "equals" versus "==". Firstly, comparing two strings can be a fairly lengthy procedure, adding to the performance problems that are mentioned above. Secondly if there is switching on strings there will be demand for switching on strings ignoring case, switching on strings considering/ignoring locale, switching on strings based on regex.... I would approve of a decision that saved a lot of time for the language developers at the cost of a small amount of time for programmers.

