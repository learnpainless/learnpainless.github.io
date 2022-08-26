---
title: Why Declare Variables as Local and Global
date: 2015-02-08T22:12:00.000Z
categories:
  - java
  - start
tags:
  - variables
layout: post-java
modified_time: '2015-02-08 22:12'
author:
  - lpl
description: >-
  when we declare variables as global in java,why we use global variable in
  java,use of global variable in java, type of variable declaration in java
keywords: >-
  when we declare variables as global in java,why we use global variable in
  java,use of global variable in java, type of variable declaration in java
comments: true
image: ./img/why-declare-variables-as-local-and-global-min.png
---

## <span style="color: #ff6600;">When we declare local Variables:</span>

We declare local Variables when we want some variables for local use only and which we don't want later. If we need Variables only inside 1 method then don't declare them as Global Variables. Local Variables store value for less time, I mean to say that when execution of method finish then local Variables lose their value and become available for another method. Using Local Variables manage memory allocation in JVM. That's why avoid declaring Variables as Global. Declare Variables as Global when its requested in multiple methods.

## <span style="color: #ff6600;">When we Declare Global Variables:</span>

We declare Global Variables when we need same value inside multiple methods and inner classes. Global Variables work as communication medium between multiple methods.

For example, if we want to transfer value from 1 method to another method then we can pass value to Global Variables and get value from that Global Variables inside another method.

