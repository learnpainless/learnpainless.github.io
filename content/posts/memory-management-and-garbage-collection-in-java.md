---
title: Memory Management and Garbage collection in java
date: 2015-02-05T06:41:00.000Z
categories:
  - java
  - start
tags:
  - Garbage
layout: post-java
modified_time: '2015-02-05 06:41'
author:
  - lpl
description: >-
  garbage collection in java,full explaination about garbafe collection in
  java,types of garbage collection java,Important points about Garbage
  collection java
keywords: >-
  garbage collection in java,full explaination about garbafe collection in
  java,types of garbage collection java,Important points about Garbage
  collection java
comments: true
image: ./img/memory-management-and-garbage-collection-in-java-min.png
---

**garbage collection** is the process of looking at heap memory, identifying which objects are in use and which are not, and deleting the unused objects. An in use object, or a [referenced](http://en.wikipedia.org/wiki/Reference "Reference") object, means that some part of your program still maintains a pointer to that object. An unused object, or unreferenced object, is no longer referenced by any part of your program. So the memory used by an unreferenced object can be reclaimed.

In a programming language like C, allocating and deallocating memory is a manual process. In Java, process of deallocating memory is handled automatically by the garbage collector.

This actually varies depending on the JVM implementation, but I'm assuming you're talking about [Oracle](http://www.google.com/finance?q=NASDAQ:ORCL "NASDAQ: ORCL") (Sun) Version 6\. Java itself does not specify a particular method of garbage collection.

The JVM uses a form of garbage collector called a tracing collector, which essentially operates by first stopping the world, marking all root objects, or objects that are referenced directly by running threads, and following references, marking each object it hits along the way.

[Java 6](http://en.wikipedia.org/wiki/Java_version_history "Java version history") implements something called a generational garbage collector—based upon the generational hypothesis assumption, which states that the majority of objects that are created are quickly discarded, and that objects that are not quickly collected are likely to be around for some time.

Based upon these assumptions, Java therefore partitions objects into two different generations, and then operates differently upon them.

## <span style="color: #ff6600;">Important points about Garbage collection</span>

1.  Objects are created on heap in Java irrespective of there scope e.g. local or [member variable](http://en.wikipedia.org/wiki/Member_variable "Member variable"). while its worth noting that class variables or static members are created in method area of Java [memory space](http://en.wikipedia.org/wiki/Computational_resource "Computational resource") and both heap and method area is shared between different thread.
2.  Garbage collection is a mechanism provided by [Java Virtual Machine](http://en.wikipedia.org/wiki/Java_virtual_machine "Java virtual machine") to reclaim [heap space](http://en.wikipedia.org/wiki/Memory_management "Memory management") from objects which are eligible for Garbage collection.
3.  Garbage collection relieves Java programmer from memory management which is essential part of C++ programming and gives more time to focus on business logic.
4.  Garbage Collection in Java is carried by a daemon thread called [Garbage Collector](http://en.wikipedia.org/wiki/Garbage_collection_%28computer_science%29 "Garbage collection (computer science)").
5.  Before removing an object from memory garbage collection thread invokes finalize()method of that object and gives an opportunity to perform any sort of cleanup required.
6.  You as Java programmer can not force garbage collection in Java; it will only trigger if JVM thinks it needs a garbage collection based on Java heap size.
7.  There are methods like System.gc() and Runtime.gc() which is used to send request of Garbage collection to JVM but it’s not guaranteed that garbage collection will happen.
8.  If there is no memory space for creating new object in Heap Java Virtual Machine throwsOutOfMemoryError or java.lang.OutOfMemoryError heap space

## <span style="color: #ff6600;">When an Object becomes Eligible for Garbage Collection</span>

An object becomes eligible for Garbage collection or GC if its not reachable from any live threads or by any static references. In other words you can say that an object becomes eligible for garbage collection if its all references are null. Cyclic dependencies are not counted as reference so if object A has reference of object B and object B has reference of Object A and they don't have any other live reference then both Objects A and B will be eligible for Garbage collection.

## <span style="color: #ff6600;">Generally an object becomes eligible for garbage collection in Java on following cases:</span>

1.  All references of that object explicitly set to null e.g. object = null
2.  Object is created inside a block and reference goes out scope once control exit that block.
3.  Parent object set to null, if an object holds reference of another object and when you set [container object](http://en.wikipedia.org/wiki/Container_%28abstract_data_type%29 "Container (abstract data type)")'s reference null, child or contained object automatically becomes eligible for garbage collection.
4.  If an object has only live [weak references](http://en.wikipedia.org/wiki/Weak_reference "Weak reference") via WeakHashMap it will be eligible for garbage collection.

## <span style="color: #ff6600;">Heap Generations for Garbage Collection in Java</span>

<span style="text-decoration: underline;">**Young Generation:**</span> This is where objects start out. It has two **subgenerations:** **Eden** - Objects start out here. **Survivor** - Objects that survive Eden end up here. There are two of these, and only one is in use at any given time. One is designated as empty, and the other as live. This switched every GC cycle. <span style="text-decoration: underline;">**Tenured Generation:**</span> Older objects with longer lifetimes end up here. Java is smart enough to apply different garbage collection methods to each generation. The young generation is handled using a tracing, copying collector called the Parallel New Collector. This collector stops the world, but because the young generation is generally small, the pause is short.

