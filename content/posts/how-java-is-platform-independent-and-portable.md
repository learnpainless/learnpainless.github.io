---
title: How java is Platform Independent and Portable
date: 2015-01-02T13:50:00.000Z
categories:
  - java
  - start
tags:
  - compilers
  - interpreters
  - bytecode
layout: post-java
modified_time: '2015-01-02 13:51'
author:
  - lpl
description: >-
  why java is platform independent,which feature makes java platform
  independent,how java is portable,why java use interpreters instead of
  compilers,how java is faster
keywords: >-
  why java is platform independent,which feature makes java platform
  independent,how java is portable,why java use interpreters instead of
  compilers,how java is faster
comments: true
image: ./img/how-java-is-platform-independent-and-portable-min.png
---

## <span style="color: #ff6600;">Q. How Java is [Portable](http://en.wikipedia.org/wiki/Porting "Porting") ???</span>

A. Java is portable due to following features :

1.  Output of java code is in [Bytecode](http://en.wikipedia.org/wiki/Bytecode "Bytecode") (ie. Non [Executable code](http://en.wikipedia.org/wiki/Executable "Executable")).
2.  Bytecode is highly optimized set of instructions.
3.  Bytecode is [executed](http://en.wikipedia.org/wiki/Capital_punishment "Capital punishment") by machine which is Java runtime machine is also call as JVM ([Java Virtual Machine](http://en.wikipedia.org/wiki/Java_virtual_machine "Java virtual machine")).
4.  Because output of java is in bytecode so its not possible to modify by malicious programs thats why java is secure.
5.  JVM is an interpreter.
6.  JVM takes bytecode as input and execute it.
7.  Output of java is in bytecode so we need to setup JVM on other platform which makes [java Platform](http://www.java.com "Java (software platform)") independent.
8.  When JVM is installed on any system then we can execute any java [program](http://en.wikipedia.org/wiki/Computer_program "Computer program").

## <span style="color: #ff6600;">Why java is code safe ???</span>

1.  Java program is executed by JVM.
2.  JVM prevent program from external side effect.
3.  Their are few restrictions in java which increase safety of java.

## <span style="color: #ff6600;">[Interpreter](http://en.wikipedia.org/wiki/Interpreter_%28computing%29 "Interpreter (computing)") is slower than compiler then why java use Interpreter ???</span>

1.  Its true that [compilers](http://en.wikipedia.org/wiki/Compiler "Compiler") are much faster than Interpreters.
2.  But java compiler generate program into bytecodes which is highly optimized.
3.  Execution of that optimized code is much faster than compilers. which makes java program faster even using Interpreters.

