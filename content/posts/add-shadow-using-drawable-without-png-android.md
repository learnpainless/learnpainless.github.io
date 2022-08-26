---
title: Add shadow using drawable without png android
date: 2017-01-16 22:31:00 Z
categories:
- android
tags:
- shadow
- drawable
layout: post
modified_time: 2017-01-16 22:31
author: [lpl]
description: use drawable images to generate shadow effect in android pre-lollipop
  devices, show shadow on old version of android devices
keywords: use drawable images to generate shadow effect in android pre-lollipop devices,
  show shadow on old version of android devices
comments: true
image: img/add-shadow-using-drawable-without-png-android-min.png
---

## Add shadow using drawable without png android
Shadow effect or Elevation will work on lollipop and higher versions of Android
using xml property **android:elevation="4dp"** and in java
view.setElevation(4);. But these properties will not work on pre lollipop
devices. Then to get shadow effect we can use 9 patch png images with shadow
effect to show shadow below your view. But multiple png will take more storage
space and make your app heavy.

In this case you can use xml drawables to make background for your views.

## Below is code to make shadow effect with drawable file:

file name :- res/drawable/shadow_bg.xml

```xml

<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item >
        <shape
            android:shape="rectangle">
        <solid android:color="@android:color/darker_gray" />
        <corners android:radius="3dp"/>
        </shape>
    </item>
    <item android:right="1dp" android:left="1dp" android:bottom="1dp">
        <shape
            android:shape="rectangle">
        <solid android:color="@android:color/white"/>
        <corners android:radius="4dp"/>
        </shape>
    </item>
</layer-list>

```

to use this background in your layout, just set this drawable as background on that layout and done.
for example

```xml

<LinearLayout
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:background="@drawable/shadow_bg"/>

```

So in this code I used \<Layer-list\>, in layer list items show in stack. First
item will be shown on top of all items.

I have given background color to my first item, then two second item I given
grey color which will be shown as shadow. You can customize this code according
to your need.
