---
title: Multiple selection RecyclerView Android
date: 2017-08-31 11:00:00 +05:30
categories:
- android
- RecyclerView
tags:
- recyclerview
- multi selection
author: [pawneshwer]
description: multi select recyclerview android example,recyclerview multiselect github,android recyclerview multiple selection example,android recyclerview multiple select
keywords: multi select recyclerview android example,recyclerview multiselect github,android recyclerview multiple selection example,android recyclerview multiple select
comments: true
layout: post
image: img/multiple-selection-recyclerview-android-min.png
---

import Gist from 'react-gist'

## Multiple selection RecyclerView Android
**Android RecyclerView multi selection expand list items and change list items color**

Hello Devs,
If you are previously working with ListView and recently shifted to RecyclerView then you maybe missing some great features like `ItemClickListener`, `MultipleItemSelection`, `TouchRippleEffect`,`EmptyView` and more.

But in RecyclerView we need to do this manually, so lets add MultiSelection functionality in `RecyclerView`.

Lets start:

### code of MainActivity.java

<Gist id='000488bf2d4ad416efc2189ddfe690ea' />

**Description :** So i created a boolean variable to check of multiple selection is active or not. and a `List<Integer> selectedIds` containing values which are selected. In `RecyclerView's onItemTouchListener` i used custom implementation of `RecyclerView.OnItemTouchListener`, for handling `click` and `longClick` events.

### code of RecyclerItemClickListener.java

<Gist id='4bcff271b0c621a9f80e2f652f7f2c2d' />

On longClick we will check if multiSelection is false then set this to true.
On singleClick or LongClick check if currently selected item is in `List<Integer> selectedIds` is list then remove that item from list, otherwise add that item in list and notify adapter for latest value. In adapter check if selectedItem match with current item in adapter then change backgroud or foreground color as per your choice.

### code of MyAdapter.java

<Gist id='231b274136f60e4291acf972ca17444c' />

in onBindViewHolder method we will check if our selected items list contain current item then change its color to desired color to show as selected item, otherwise set color to transparent to show this like unselected item.

### colors used in this demo

```xml
<resources>
    <color name="colorPrimary">#3F51B5</color>
    <color name="colorPrimaryDark">#303F9F</color>
    <color name="colorAccent">#FF4081</color>
    <color name="colorActionMode">#009362</color>
    <color name="colorControlActivated">#50FF4081</color>
</resources>
```

## Looking for full source code of this project then fork from below link

[![star this repo](https://githubbadges.com/star.svg?user=learnpainless&repo=MultiSelectionRecyclerView&style=flat)](https://github.com/learnpainless/MultiSelectionRecyclerView)
[![fork this repo](https://githubbadges.com/fork.svg?user=learnpainless&repo=MultiSelectionRecyclerView&style=flat)](https://github.com/learnpainless/MultiSelectionRecyclerView/fork)

## Download demo APK from below link

[Download APK](https://github.com/learnpainless/MultiSelectionRecyclerView/raw/master/demo/app-debug.apk)
