---
title: 'What is JVM, why it is required in Java Programming'
date: 2015-01-02T15:00:00.000Z
categories:
  - java
  - start
tags:
  - jvm
  - garbage
  - heap size
layout: post-java
modified_time: '2015-01-02 15:01'
author:
  - lpl
description: >-
  what is jvm,why jvm is required,what jvm did,is this possible to run java
  program without jvm,jvm is available for all platforms,jvm provide heap size
  for program
keywords: >-
  what is jvm,why jvm is required,what jvm did,is this possible to run java
  program without jvm,jvm is available for all platforms,jvm provide heap size
  for program
comments: true
image: ./img/what-is-jvm-why-it-is-required-in-java-programming-min.png
---

JVM stands for Java Virtual Machine.JVM is [platform](http://en.wikipedia.org/wiki/Computing_platform "Computing platform") where Java programs are [executed](http://en.wikipedia.org/wiki/Capital_punishment "Capital punishment"). without JVM we can't execute java programs. Java [program](http://en.wikipedia.org/wiki/Computer_program "Computer program") generate output in [bytecodes](http://en.wikipedia.org/wiki/Bytecode "Bytecode") and that bytecodes are executed in JVM. We don't need to [compile](http://en.wikipedia.org/wiki/Compiler "Compiler") java programs again and again for different platforms, because JVM is available for all platforms. Set of Registers,Garbage heap size,method area are specified inside JVM, and JVM tells java programs about these specifications which will be allocated to each program.A [Java virtual machine](http://en.wikipedia.org/wiki/Java_virtual_machine "Java virtual machine") can either interpret the bytecode one instruction at a time (mapping it to a real processor instruction) or the bytecode can be compiled further for the real processor using what is called a [just-in-time compiler](http://en.wikipedia.org/wiki/Just-in-time_compilation "Just-in-time compilation").

## <span style="color: #ff6600;">What JVM does ???</span>

1.  JVM loads the code.
2.  JVM verify the code.
3.  JVM executes the code.
4.  JVM provides [Runtime Environment](http://en.wikipedia.org/wiki/Run-time_system "Run-time system").
5.  JVM Provide Memory area for java programs.
6.  JVM [Register](http://en.wikipedia.org/wiki/Processor_register "Processor register") set.
7.  JVM provide garbage heap size to java program.
8.  JVM provide fatal error reporting

