---
title: Create custom ScrollView to enable or disable scrolling Android
date: 2016-05-23 18:40:25 Z
categories:
- android
- ScrollView
tags:
- android
- ScrollView
- custom
layout: post
author: [pawneshwer]
description: disable scrolling of scrollview,create custom scrollview android,disable
  android scrollview scrolling,create own scrollview android,map inside scrollview
  android
keywords: enable disable scrolling scrollview,custom scrollview
comments: true
modified_time: '2016-05-24T04:23:17.859+05:30'
image: img/create-custom-scrollview-to-enable-or-disable-scrolling-min.png
---

import Gist from 'react-gist'

## Create custom ScrollView to enable or disable scrolling Android
In android **ScrollView** there is no way or method to disable scrolling. but sometime if you want to disable scrolling of **ScrollView** while you are inside inner element, like if you want to disable _ScrollView_ when you are inside Map view. So you can scroll Map view easily if you put Map view inside **ScrollView**. Because Map view has its own Scrolling feature which conflicts **ScrollView's** scrolling and you are unable to scrolling map view. So at that time you think to disable Scrolling of **ScrollView** when you touch or make focus on Map view. But when you try to implement this then you get to know that there is no method to disable scrolling of ScrollView. You can disable the whole **ScrollView** but that is not a correct way to do this. So we can make our own ScrollView which having extra features are enable Scrolling or Disable scrolling.  and we can do this using [Inheritance](http://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29 "Inheritance (object-oriented programming)") feature of **OOPS**. So we will create a class which will **Extend** ScrollView class, which means our class will have all features derive from Base (ScrollView) class. ok so lets do this :

*   create a new class and name it what you want, i will name it as _**MyScrollView**_. and extend ScrollView class.
*   Now you need to create **constructor** of your class, Android studio will give you 4 type of [Constructor](http://en.wikipedia.org/wiki/Constructor_%28object-oriented_programming%29 "Constructor (object-oriented programming)"). extend all of them. because in future we can use that constructors.
*   override 2 methods of ScrollView _**"onInterceptTouchEvent"**_ and _**"onTouchEvent"**_.
*   create a [boolean variable](http://en.wikipedia.org/wiki/Boolean_data_type "Boolean data type") which will check that scrolling is enabled or disabled. by default set its value to _**true**_.
*   now create boolean type _method_ and return that variable which you have just created.
*   Now create a void method to enable and disable scrolling which requires a parameter of boolean type. i will name this method as _setScrolling(boolean enable)_ as shown below :

<Gist id='7b56a9471cb86a3f3798220e2e25ffef' />

## <span style="color: #ff6600;">So how to use this custom ScrollView class ?</span>

*   Goto your xml file where you want to use ScrollView. if you already have ScrollView inside your xml then replace that ScrollView tag with your custom ScrollView's class name and package name.

```xml

<ScrollView
	android:layout_width="match_parent"
	android:id="@+id/scrollView"
	android:layout_height="match_parent">        
</ScrollView>

```

### <span style="color: #ff6600;">for example :</span>

change this to (i will use my package name and Class name, change accoring to yours) :

```xml

<com.learnpainless.myscrollvoew.MyScrollView
	android:layout_width="match_parent"
	android:id="@+id/scrollView"
	android:layout_height="match_parent">

</com.learnpainless.myscrollvoew.MyScrollView>

```

Ok so now you have embedded your own ScrollView. to disable scrolling just call setScrolling() method to object of your ScrollView and pass value (true or false) where you want to disable. as shown in below example :

```java

package com.learnpainless.myscrollvoew;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        MyScrollView scrollView = (MyScrollView) findViewById(R.id.scrollView);

        scrollView.setScrolling(false); // to disable scrolling


        scrollView.setScrolling(true); // to enable scrolling.
    }
}


```