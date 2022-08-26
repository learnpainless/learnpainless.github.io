---
title: Basic Syntax and Compilation of java programs
date: 2015-02-02T13:51:00.000Z
categories:
  - java
  - start
tags:
  - syntax
layout: post-java
modified_time: '2015-02-02 13:52'
author:
  - lpl
description: >-
  basic syntax of java programming, set of predefined rules of syntax,syntax of
  writing code in java programs, syntax rules must follow before writing
  programs
keywords: >-
  basic syntax of java programming, set of predefined rules of syntax,syntax of
  writing code in java programs, syntax rules must follow before writing
  programs
comments: true
image: ./img/basic-syntax-and-compilation-of-java-programs-min.png
---

## <span style="color: #ff6600;">Basic Syntax of java programs :</span>

*   Case Sensitive: Java is Case Sensitive, which means "abc" and "Abc" both are different identifiers.
*   Class Name: First letter of Java Class's name should be in UpperCase. and if there are two or more words in java Class then first letter of all words should be capital. (**for example JavaClassExample**).
*   Method Name: Name of every method should start with small letter. if there are two or more words then first letter of inner words will be in Capital letter. (<span style="color: #339966;">**for example javaMethodExample()**</span>).
*   Java File Name: The name of Java file name should match with Java Class name. if both are different then program will not run.
*   main Method: Java program execute after main method (**public static void main**). If your class doesn't have main method then your program will not run.

## <span style="color: #ff6600;">Java Identifiers:</span>

1.  All Identifier should start with (**A-Z, a-z $ and _** ), no other symbol allowed.
2.  We can use only 1 symbol, after that we need to use combination of character. (**example _hello, $test**)
3.  we cannot use keyword as Identifier. (**for example we cannot use 'class' as identifier**).
4.  Identifiers are case sensitive

## <span style="color: #ff6600;">Java Modifiers:</span>

1.  Access Modifiers (**default, public, private, protected**)
2.  Non-access modifier (**final, static**)

## <span style="color: #ff6600;">Java Variables:</span>

**We would see following type of variables in Java:**

1.  Local Variables
2.  Class Variables (**Static Variables**)
3.  Instance Variables (**Non-static variables**)

## <span style="color: #ff6600;">Compiling and Executing Code :</span>

*   to write your code open Notepad.
*   Now inside notepad type
*   Now goto file menu and choose "**save as**".
*   choose any directory where you want to save your java programs. and enter file name same as class name. in given example file name will be **JavaExampleClass.java**. and under save as type choose "<span style="color: #ff0000;">**all files**</span>".
*   click on save button and your java file is now created.
*   To compile this java file.
*   Open "**Command Prompt**" (in linux or mac open Terminal)
*   change directory of Command Prompt/Terminal to path of your java file. (you can use cd command to change directory).
*   When you are inside that java file directory type "<span style="color: #3366ff;">**javac JavaExampleClass.java**</span>) and this command will compile your program and create new file with bytecode with same name. for example (<span style="color: #3366ff;">**JavaExampleClass.class**</span>).
*   When above part is done you can run your program by typing "java JavaExampleClass". and you will get output (**Hello World**).

Example:

```java

public class First {

	public static void main(String[] args) {
		System.out.println("Welcome to LearnPainLess.com");
	}

}

```

