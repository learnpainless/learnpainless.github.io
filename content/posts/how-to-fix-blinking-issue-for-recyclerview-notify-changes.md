---
title: How to fix blinking issue for RecyclerView notify changes
date: 2018-06-06 07:44:00 +05:30
categories:
- android
- RecyclerView
tags:
- recyclerview
- animation
author: [pawneshwer]
description: fix blinking issue when notify item in recyclerview, fix blinking issue when items changed in recyclerview, recyclerview adapter.notifyItemChanged(int position)
keywords: fix blinking issue when notify item in recyclerview, fix blinking issue when items changed in recyclerview, recyclerview adapter.notifyItemChanged(int position)
comments: true
layout: post
image: img/how-to-fix-blinking-issue-for-recyclerview-notify-changes-min.png
---

## How to fix blinking issue for RecyclerView notify changes

If you are Android developer then you surely use **RecyclerView** to show list of items to users. And you also developed such apps which requires data changes frequently in **RecyclerView**. And you may noticed that whenever you use **adapter. NotifyDataSetChanged()**, **adapter.notifyItemChanged(int position)** etc methods then your **RecyclerView** blink for few nanoseconds. And it looks like that your app is blinking due to lag. Actually this is due to **Animation** in **RecyclerView**. As stated in official documentation of RecyclerView that RecyclerView uses **DefaltItemAnimator** by default. 
Which means if you doesn't specify ItemAnimator to RecyclerView then it still got animations. 

You can see those animation while removing items or adding new items to RecyclerView.
So simple trick is disable animations in RecyclerView item and your problem will be resolved.
### Below is code to disable animations in RecyclerView.

```java 
SimpleItemAnimator  itemAnimator = myRecyclerView.getItemAnimator()
itemAnimator.setSupportsChangeAnimations(false);
```

OR, in single line

```java
((SimpleItemAnimator) myRecyclerView.getItemAnimator()).setSupportsChangeAnimations(false);
```
