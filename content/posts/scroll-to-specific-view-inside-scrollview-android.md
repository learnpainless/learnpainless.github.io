---
title: Scroll to specific view inside ScrollView Android
date: 2016-05-24 18:40:25 Z
categories:
- android
- ScrollView
tags:
- android
- ScrollView
- custom
layout: post
author: [pawneshwer]
description: focus on specific view on button click android,mave to specific view
  scrollview,goto perticular view scrollview android
keywords: focus on specific view on button click android,mave to specific view scrollview,goto
  perticular view scrollview android
comments: true
modified_time: '2016-05-25T04:23:17.859+05:30'
image: img/scroll-to-specific-view-inside-scrollview-android-min.png
---

## Scroll to specific view inside ScrollView Android
While building apps with too many controls or views on same page then we need to use **ScrollView** so we can view each and every view inside an activity.But sometimes we want to focus on specific view on [button](http://en.wikipedia.org/wiki/Button "Button") click over any other action to get attention from user. for example if you have 20 **EditTexts** on a page and 1 button at bottom and you had applied a validation on button click to check if **EditText** is not empty. but if **EditText** is not empty then that empty **EditText** will focus automatically. and in this tutorial we will make same.

But in this tutorial i will show you how you can focus on any view like TextView,ImageView, button etc. code will be as below :

suppose i have 20 ImageView on a page. and i want to make focus on 5th ImageView (_and id of 5th imageview is img5_) on button click. then i will wrote like this :

```java

private void focusOnView(){
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                your_scrollView.scrollTo(0, your_view.getBottom());
            }
        });
    }

```

so this will make focus on that imageview but if have is bigger in size then you will not see upper part of image. So to focus on starting part of image you can use below code :

```java

private void focusOnView(){
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                your_scrollView.scrollTo(0, your_view.getTop());
            }
        });
    }

```

So below is complete code of **MainActivity.java** class

```java

package com.learnpainless.focusonview;

import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ScrollView;

public class MainActivity extends AppCompatActivity {
    private ImageView img5;
    private ScrollView scrollView;
    private Button btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        img5 = (ImageView) findViewById(R.id.img5);
        scrollView = (ScrollView) findViewById(R.id.scrollView);
        btn = (Button) findViewById(R.id.submit);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                focusOnView();
            }
        });

    }
    private void focusOnView(){
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                scrollView.scrollTo(0, img5.getTop());
            }
        });
    }
}


```
