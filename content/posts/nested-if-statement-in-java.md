---
title: Nested if statement in java
date: 2015-02-17T22:14:00.000Z
categories:
  - java
  - start
tags:
  - nested if
layout: post-java
modified_time: '2015-02-17 22:14'
author:
  - lpl
description: null
keywords: null
comments: true
image: ./img/nested-if-statement-in-java-min.png
---

```java
if (cond1){
   if (cond2){
     if (cond3){
```

Is nested because you have conditions evaluated within other conditions, that is, dependent on previous conditions. If you want to be literal about it, the scope of cond2 in the second case is literally nested in the scope of cond1. This is not true in the first form.
where the else part is optional. And you have effectively nested an if into the else part of the outer if else, even if the formatting (and maybe semantics) suggests it differently.
But in fact it boils down to the exact definition of "nested if", and I do not think there is a generally accepted one
This is an if statement:

```java
if (condition1) {
    // ...
}
```

This is a nested if statement:

```java
if (condition1) {
    // ...
    if (condition2) {
        // ...
    }
    // ...
}
```

This is an if-else statement:

```java
if (condition1) {
    // ...
} else {
    // ...
}
```

This is a chained if-else statement:

```java
if (condition1) {
    // ...
} else if (condition2) {
    // ...
}
```

