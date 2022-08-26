---
title: Pagination in List RecyclerView using Youtube Data API Android
date: 2017-09-10 09:53:00 +05:30
categories:
- android
- retrofit2
- RecyclerView
tags:
- Pagination
author: [pawneshwer]
description: load more recyclerview android github,pagination in android gridview,recyclerview
  pagination github,android recyclerview pagination library,android listview pagination
  scroll example,pagination in android recyclerview,pagination android github
keywords: load more recyclerview android github,pagination in android gridview,recyclerview
  pagination github,android recyclerview pagination library,android listview pagination
  scroll example,pagination in android recyclerview,pagination android github
comments: true
layout: post
image: img/pagination-in-list-recyclerview-using-youtube-data-api-android-min.png
---

import Gist from 'react-gist'

## Pagination in List RecyclerView using Youtube Data API Android
Use pagination in android RecyclerView , ListView,GridView or any other list.

## What is pagination?

Pagination means load data in some chunks called as pagination. For example load 100 items in 10 parts having 10 item each, called as pagination.

## Why we need pagination?

If you are loading 10,000 items from Web API or local database then it will take more time to fetch data from Web API and display them in List. So its better to display first 10 items, and if user want to view more then load 10 more and so on. This will increase load time of data and performance of app too.

In this example I’m using Youtube Data API, you can use any API which you preffer. And I’m using RecyclerView to display items, you can use ListView or GridView too.

## Main Idea behind this Logic :

In Youtube API we get token (String) of next list, so we will pass that token while requesting next data call. But first time we will pass empty value as token so it will return latest items.

But if you want to use Pagination in your own web API then ask your Backend developer to add 2 request parameters “start” and “limit”. And return “last_index” along with data. “start” parameter will be used to fetch data from “start” index and “limit” parameter will be used to max number of data.

### For Example :

if you pass 0 as “start” and 10 as “limit” parameter then API will return data from 0 to 10 items. And now in next call pass “last_index + 1” as start parameter. So now you will pass 11 as “start” and  10 as “limit” and you will get data from 11 to 20 and so on.

Now when you get data from Web API then add that data to adapter of RecyclerView, ListView or GridView. You can also replace data of Adapter if you want to display only new items.

### code of MainActivity.java

<Gist id='c737c7f0a8bd78a1ebc346ff88a77d55' />

### code of activity_main.xml

<Gist id='e2a02c899942c8c66d9fb74269d7b7f6' />

### code of APIService.java

<Gist id='ac7f7f8d187f0637a8b988892b2aed11' />

### code of YoutubeApi.java

<Gist id='1f7deb26975706bad8ff9b64477a64e1' />

### code of YoutubeResponse.java

<Gist id='c118dcb2ef3075e7882361207bb0d38e' />

### code of VideosAdapter.java

<Gist id='0ac8d6f6d21cb12a3a0acb5d8ebd9df7' />

## Looking for full source code of this project then fork from below link

[![star this repo](https://githubbadges.com/star.svg?user=learnpainless&repo=PaginationRecyclerView&style=flat)](https://github.com/learnpainless/PaginationRecyclerView)
[![fork this repo](https://githubbadges.com/fork.svg?user=learnpainless&repo=PaginationRecyclerView&style=flat)](https://github.com/learnpainless/PaginationRecyclerView/fork)

## Download demo APK from below link

[Download APK](https://github.com/learnpainless/PaginationRecyclerView/raw/master/demo/app-debug.apk)

