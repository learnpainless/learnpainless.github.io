---
title: Remove extra margins from Toolbar custom layout Android
date: 2016-12-31 12:43:00 +05:30
categories:
- android
tags:
- toolbar
- appbar
- material
modified_time: 2016-12-31 07:13
author: [lpl]
description: how to remove extra padding from custom Toolbar layout,extra space in
  toolbar custom layout,Remove extra margins from Toolbar custom layout
keywords: how to remove extra padding from custom Toolbar layout,extra space in toolbar
  custom layout,Remove extra margins from Toolbar custom layout
comments: true
layout: post
image: img/remove-extra-margins-from-toolbar-custom-layout-android-min.png
---

## Remove extra margins from Toolbar custom layout Android
In last post I showed that how we can [use custom layout with toolbar](/android/use-custom-layout-in-material-toolbar-android). But in that post there is some extra left padding in toolbar and your layout not showing properly. Actually that is default inset used by toolbar layout.
You can solve this problem by giving negative padding or margin to your layout but that is not accurate solution. So the best solution is to set Inset from all corners to 0dp.
Below is example to set 0dp inset from all corners in toolbar layout.

so add these properties in `<Toolbar />`

```xml

        android:contentInsetLeft="0dp"
        android:contentInsetStart="0dp"
        app:contentInsetLeft="0dp"
        app:contentInsetStart="0dp"
        android:contentInsetRight="0dp"
        android:contentInsetEnd="0dp"
        app:contentInsetRight="0dp"
        app:contentInsetEnd="0dp"

```

## Below is proper example:

### old code :

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

### new code :

```xml

<android.support.v7.widget.Toolbar
            android:id="@+id/toolbar"
            android:layout_width="match_parent"
            android:layout_height="?attr/actionBarSize"
            android:background="?attr/colorPrimary"
            android:contentInsetLeft="0dp"
            android:contentInsetStart="0dp"
            app:contentInsetLeft="0dp"
            app:contentInsetStart="0dp"
            android:contentInsetRight="0dp"
            android:contentInsetEnd="0dp"
            app:contentInsetRight="0dp"
            app:contentInsetEnd="0dp"
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
