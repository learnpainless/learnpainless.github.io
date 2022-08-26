---
title: Create ViewPager without Fragment Android
date: 2016-11-06 19:16:00 Z
categories:
- android
- ViewPager
tags:
- ViewPager
layout: post
modified_time: 2016-11-06 19:16
author: [lpl]
description: create ViewPager without Fragments, simply use layouts with ViewPager
  instead of Fragments, ViewPager with direct layout in xml.
keywords: ViewPager without fragment,no fragment in viewpager,custom view for viewpager
comments: true
image: img/create-viewpager-without-fragment-android-min.png
---

import Gist from 'react-gist'

## Create ViewPager without Fragment Android
In last tutorial i wrote about how to access Fragments of ViewPager inside Parent Activity. But this this post i will write about how you can create ViewPager without having any Fragment in it. So this will be more developer friendly because sometime RecyclerView inside ViewPager will create problem if you are using ViewPager inside ScrollView or NestedScrollView. So this that case you can simply use RecyclerView as Pages of ViewPager.

But you need ViewPager adapter to control Views of ViewPager. In normal PagerAdapter we need to override below 2 methods.

```java

    public Object instantiateItem(ViewGroup collection, int position) {

        int resId = 0;
        switch (position) {
            case 0:
                resId = R.id.page_one; //pass id of that view to return, Views will be added in XML.
                break;
            case 1:
                resId = R.id.page_two;
                break;
        }
        return findViewById(resId); // return selected view.
    }

    //and
    @Override
    public boolean isViewFromObject(View arg0, Object arg1) {
        return arg0 == arg1; // return true if both are equal.
    }
```

### here is complete code of this demo.

## How to create ViewPager without Fragments.

ActivityClass java file

<Gist id='eb680b140162824722613c07d6f9ded3' />

activity_scrolling.xml file

<Gist id='2dd326d777e20ff4d93c99c05b938644' />

As you can see i have added two LinearLayout inside ViewPager in xml file. and passed id's of that LinearLayouts inside PagerAdapter.
