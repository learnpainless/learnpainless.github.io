---
title: Use custom layout in Material Toolbar Android
date: 2016-12-28 21:03:00 Z
categories:
- android
tags:
- material
- toolbar
layout: post
modified_time: 2016-12-28 21:03
author: [lpl]
description: how to use custom layout in android material toolbar,custom layout toolbar,ImageView
  TextView inside toolbar
keywords: custom toolbar,custom layout in toolbar,ImageView in toolbar
comments: true
image: img/use-custom-layout-in-material-toolbar-android-min.png
---

Hello Coder,

In this tutorial I will show you that how we can use custom layout in material toolbar layout. This is very easy just put your layout directly inside <toolbar></toolbar> tag.

## below is example of normal toolbar layout.

```xml

<android.support.v7.widget.Toolbar
                android:id="@+id/toolbar"
                android:layout_width="match_parent"
                android:layout_height="?attr/actionBarSize"
                android:background="?attr/colorPrimary"
                app:popupTheme="@style/MenuTheme" />

```

## and below is Java :

```java

Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
setSupportActionBar(toolbar);

```

## So below is code to add custom layout inside Toolbar.

```xml

<android.support.v7.widget.Toolbar
            android:id="@+id/toolbar"
            android:layout_width="match_parent"
            android:layout_height="?attr/actionBarSize"
            android:background="?attr/colorPrimary"
            app:popupTheme="@style/MenuTheme">

            <RelativeLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content">

                <ImageView
                    android:id="@+id/logo"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_alignParentLeft="true"
                    android:layout_centerVertical="true"
                    android:padding="8dp" />

                <TextView
                    android:id="@+id/title"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_centerInParent="true" />

            </RelativeLayout>
        </android.support.v7.widget.Toolbar>

```

## java code to find views :

```java

Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
setSupportActionBar(toolbar);

ImageView logo = (ImageView) toolbar.findViewById(R.id.logo);
TextView title = (TextView) toolbar.findViewById(R.id.title);

```

This way we can use custom layout inside Toolbar, like custom logo,icons, titles etc according to your need.

if you are getting extra margin from left in toolbar layout then read this post to [Remove extra paddings from toolbar custom layout](/android/remove-extra-margins-from-toolbar-custom-layout-android).
