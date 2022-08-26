---
title: What is the use of this keyword in JAVA
date: 2015-03-22T12:38:00.000Z
categories:
  - java
  - start
  - this
tags:
  - this keyword
  - java tutorial
layout: post-java
author:
  - lpl
description: >-
  this keyword java,why use this keyword java,when we use this keyword,reason of
  using this keyword,scope of this keyword
keywords: >-
  this keyword java,why use this keyword java,when we use this keyword,reason of
  using this keyword,scope of this keyword
comments: true
image: ./img/what-is-the-use-of-this-keyword-in-java-min.png
---

## This keyword in java
The this keyword is primarily used in three situations. The first and most common is in setter methods to disambiguate variable references. The second is when there is a need to pass the current class instance as an argument to a method of another object. The third is as a way to call alternate constructors from within a constructor.

### Case 1: 
## Using this to disambiguate variable references. 
In Java setter methods, we commonly pass in an argument with the same name as the private member variable we are attempting to set. We then assign the argument x to this.x. This makes it clear that you are assigning the value of the parameter "name" to the instance variable "name".

```java
public class Foo
{
    private String name;

    public void setName(String name) {
        this.name = name;
    }
}
```

### Case 2: 
## Using this as an argument passed to another object.

```java
public class Foo
{
    public String useBarMethod() {
        Bar theBar = new Bar();
        return theBar.barMethod(this);
    }

    public String getName() {
        return "Foo";
    }
}

public class Bar
{
    public void barMethod(Foo obj) {
        obj.getName();
    }
}
```

### Case 3: 
## Using this to call alternate constructors. 
When you have multiple constructors for a single class, you can use this(arg0, arg1, ...) to call another constructor of your choosing, provided you do so in the first line of your constructor.

```java
class Foo
{
    public Foo() {
        this("Some default value for bar");

        //optional other lines
    }

    public Foo(String bar) {
        // Do something with bar
    }
}
```

I have also seen this used to emphasize the fact that an instance variable is being referenced (sans the need for disambiguation), but that is a rare case in my opinion.

Source : https://stackoverflow.com/a/2411283/5231773

