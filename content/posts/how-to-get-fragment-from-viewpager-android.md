---
title: How to get Fragment from ViewPager Android
date: 2016-11-04 22:13:00 Z
categories:
- android
tags:
- viewpager
- fragment
layout: post
modified_time: 2016-11-04 22:13
author: [lpl]
description: how to get fragment from viewpager android,get viewpager's fragments
  on activity,access viewpager's fragment from activity,get selected fragment viewpager
keywords: how to get fragment from viewpager android,get viewpager's fragments on
  activity,access viewpager's fragment from activity,get selected fragment viewpager
comments: true
image: img/how-to-get-fragment-from-viewpager-android-min.png
---

## How to get Fragment from ViewPager Android

In this tutorial i will show you that how to get fragment from ViewPager inside activity or fragment.

So main focus of this tutorial is that if you have ViewPager in your activity and you want to access particular method from fragment of ViewPager. Directly its impossible, because we don't have direct reference to fragments of ViewPager in parent class.

## Why we need to access ViewPager's fragment from Activity ?

Suppose you have 1 button on your Activity class and you want to use that single button to call method of every fragments of ViewPager. Then you can't access those method on you Activity class.

## How to get Fragment from ViewPager in Activity/Fragment ?

ViewPager save Fragment in FragmentManager with particular tags, So We can get ViewPager's fragment by FragmentManager class by providing tag. And ViewPager provide tag to each fragment by following syntax :

```Java
Fragment page = getSupportFragmentManager().findFragmentByTag("android:switcher:" + R.id.viewpager + ":" + viewPager.getCurrentItem());
```

above is the code to get Fragment from ViewPager.

in this code 'R.id.viewpager' is real id of your ViewPager. and 'viewPager.getCurrentItem()' method will return currently selected fragment in ViewPager. You can also provide specific position of fragment if you want to access only 1 fragment. for example:

```Java
Fragment page = getSupportFragmentManager().findFragmentByTag("android:switcher:" + R.id.my_view_pager + ":" + 0);
```

this code will get access to first fragment of ViewPager. and then you can type cast that Fragment into your Fragment. for example

```Java
MyFragment mFragment = (MyFragment) page;
```

if above given solution not work for you then you can also try this method.

```Java
MyFragment mFragment = myPagerAdapter.getItem(mViewPager.getCurrentItem());
```

in this example 'myPagerAdapter' is your ViewPager's Adapter.

and then you can access public methods and variables of that fragment in your activity class.

### Full example:

code of my Activity which is having ViewPager.

```java
package com.edablogs.viewpagerfragment;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    private ViewPager mViewPager;
    private MyPagerAdapter myPagerAdapter;
    private FloatingActionButton btnCheck;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnCheck = (FloatingActionButton) findViewById(R.id.fab);

        // Set up the ViewPager with the sections adapter.
        mViewPager = (ViewPager) findViewById(R.id.container);
        myPagerAdapter = new MyPagerAdapter(getSupportFragmentManager());
        mViewPager.setAdapter(myPagerAdapter);
        mViewPager.setOffscreenPageLimit(2);
        
        //Floating button to handle click from activity
        btnCheck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //this method is to get Fragment from Fragment Manager.
                Fragment page = getSupportFragmentManager().findFragmentByTag("android:switcher:" + R.id.container + ":" + mViewPager.getCurrentItem());
                /*
                   this method is to get Fragment from ViewPager adapter.
                   i have commented this code because i am using above code to get Fragment from ViewPager.
                */
                //Fragment page = myPagerAdapter.getItem(mViewPager.getCurrentItem());
                if (page != null){
                    switch (mViewPager.getCurrentItem()){
                        case 0:
                            OneFragment oneFragment = (OneFragment) page;
                            oneFragment.print(); //this is public method of Fragment OneFragment.
                            break;
                        case 1:
                            TwoFragment twoFragment = (TwoFragment) page;
                            twoFragment.print();
                            break;
                    }

                }
            }
        });

    }
}
```

OneFragment.java class

```java
package com.edablogs.viewpagerfragment;


import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

public class OneFragment extends Fragment {

    private Activity activity;
    public OneFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        activity = getActivity();
        return inflater.inflate(R.layout.fragment_one, container, false);
    }

    public void print(){
        Log.d("ff","from One fragment");
    }

}
```

TwoFragment.java class

```java
package com.edablogs.viewpagerfragment;


import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

public class TwoFragment extends Fragment {

    public TwoFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_two, container, false);
    }
    public void print(){
        Log.d("ff","from two fragment");
    }
}
```

Activity's xml file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main_content"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context="com.edablogs.viewpagerfragment.MainActivity">

    <android.support.v4.view.ViewPager
        android:id="@+id/container"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

    <android.support.design.widget.FloatingActionButton
        android:id="@+id/fab"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="end|bottom"
        android:layout_margin="@dimen/fab_margin"
        app:srcCompat="@android:drawable/ic_dialog_info" />

</FrameLayout>
```
