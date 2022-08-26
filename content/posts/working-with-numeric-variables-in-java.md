---
title: Working with Numeric Variables in java
date: 2015-02-09T07:45:00.000Z
categories:
  - java
  - start
tags:
  - numeric
layout: post-java
modified_time: '2015-02-09 07:45'
author:
  - lpl
description: >-
  java int default value,data types in java,convert int to string,convert int to
  string java,convert string to int,int to string
keywords: >-
  java int default value,data types in java,convert int to string,convert int to
  string java,convert string to int,int to string
comments: true
image: ./img/working-with-numeric-variables-in-java-min.png
---

Numerical values are primitive data type in java. Because its primitive data type so it will also extend these properties:

1.  A simple value, only one value will be stored not many.
2.  Value will be stored in fastest available memory.
3.  Numerical, logical or single character will be stored.
4.  Most of the numeric values are stored as primitive data type.
5.  Primitive data type is also written in lowercase.

## <span style="color: #ff6600;">Below are the types of numeric Variables in java:</span>

*   int (**4 bytes**)
*   long (**8 bytes**)
*   float (**4 bytes**)
*   double (**8 bytes**)
*   byte (**1 byte**)
*   short (**2 bytes**)

## <span style="color: #ff6600;">How to set values to these data types?</span>

*   int a = 50;
*   byte b = 2;
*   short s = 20;
*   long l = 200L;
*   float f = 100.9f;
*   double d = 100.9d;

## <span style="color: #ff6600;">Helper classes in java</span>

Helper classes are those who help data types. Java class library include numeric helper classes. Helper classes basically includes conversation and output tools. If we want to convert data type then we can use helper classes.

## <span style="color: #ff6600;">Below is table for particular helper classes for all data types.</span>

<table style="height: 205px; width: 90%;" border="0"><caption> Helper Class Table</caption>

<tbody>

<tr style="height: 23px;">

<td style="width: 225.8px; text-align: center; height: 23px;"><strong>Data Type</strong></td>

<td style="width: 225.2px; text-align: center; height: 23px;"><strong>Helper Class</strong></td>

</tr>

<tr style="height: 23px;">

<td style="width: 225.8px; text-align: center; height: 23px;">byte</td>

<td style="width: 225.2px; text-align: center; height: 23px;">Byte</td>

</tr>

<tr style="height: 23px;">

<td style="width: 225.8px; text-align: center; height: 23px;">short</td>

<td style="width: 225.2px; text-align: center; height: 23px;">Short</td>

</tr>

<tr style="height: 23px;">

<td style="width: 225.8px; text-align: center; height: 23px;">int</td>

<td style="width: 225.2px; text-align: center; height: 23px;">Integer</td>

</tr>

<tr style="height: 23px;">

<td style="width: 225.8px; text-align: center; height: 23px;">long</td>

<td style="width: 225.2px; text-align: center; height: 23px;">Long</td>

</tr>

<tr style="height: 23px;">

<td style="width: 225.8px; text-align: center; height: 23px;">float</td>

<td style="width: 225.2px; text-align: center; height: 23px;">Float</td>

</tr>

<tr style="height: 23px;">

<td style="width: 225.8px; text-align: center; height: 23px;">double</td>

<td style="width: 225.2px; text-align: center; height: 23px;">Double</td>

</tr>

</tbody>

</table>

<span style="color: #ff6600;"></span>Double helper class provide tools to convert float value to double value. As shown below:

## <span style="color: #ff6600;">How to use numeric helper class?</span>

*   double d = 123.4d;
*   Double dbl = new Double(d);
*   byte b = dbl.byteValue();
*   int i = dbl.intValue();
*   float f = dbl.floatValue();
*   String s = dbl.toString();

## <span style="color: #ff6600;">What are the default value of numeric values if we don’t initialize variable?</span>

The default value of any numeric data type is 0. Ok let’s demonstrate that default value of any numeric data type is 0.

Here is example:

open notepad and write below

```java
class NumericTest{
	public static void main(String[] args){
		int a;
		System.out.println("value of numeric is : "+a);
	}
}
```
and save this file as "NumericTest.java", now compile this and check output

And you can see, in output value is 0. (or you will get compile time error that variable not initialized)

