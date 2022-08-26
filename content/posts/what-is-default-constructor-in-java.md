---
title: What is default constructor in JAVA
date: 2015-03-23T20:38:00.000Z
categories:
  - java
  - start
  - constructor
tags:
  - default constructor
  - java tutorial
layout: post-java
author:
  - lpl
description: >-
  default constructor in java,parameterized constructor in java,constructor java
  definition,constructor overloading in java
keywords: >-
  default constructor in java,parameterized constructor in java,constructor java
  definition,constructor overloading in java
comments: true
image: ./img/what-is-default-constructor-in-java-min.png
---

## Default constructor in java

Default constructor doesn't have parameters. And default constructor exists in class if we doesn't create constructor inside class.
If we create any constructor having 1,2,3 parameters then there is no default constructor anymore. We need to create default constructor manually in this case.

### Example of default constructor:

```java
class Android {
	public static void main(String[] a){
		Android a = new Android(); //default constructor in java
	}
}
```

In the following example i haven't created any constructor inside class Android, but inside main method i created an instance of Android class using constructor without any parameters. This is default constructor. And that is the use off default constructor.

