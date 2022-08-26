---
title: Fetch data from API and store in cache
date: 2017-08-01 07:59:00 +05:30
categories:
- android
- retrofit
tags:
- cache
- android
description: fetch data from api and store in local cache to display data without
  internet without sqlite database.make facebook like news feed which load with data
  on startup
author: [pawneshwer]
comments: true
layout: post
image: img/fetch-data-from-api-and-store-in-cache-min.png
---

import Gist from 'react-gist'

## Fetch data from API and store in cache
Hello friends, In this tutorial I'll show you that how to get data from Rest API and store them in cache, so whenever you left current activity and come back to same activity then you don't need to fetch data again from API. This will reduce API load and speedup your app.
The Idea behind this cache memory is that we will get json data from API and save that json data in json file in mobile's SD Card or cache memory according to our need.

## Why we need to do this?

You all use Facebook, Instagram app right? And you noticed that when you open facebook app then data is already loaded which you seen previously and then data get updated automatically, and you don't need to wait to load data and no blank screen.This is good idea to display old data instead of loading screen or progress bar, which is too annoying. Hope you understand why we need this.

## Why I'm not using SQLite DB or any other DB?

We can also do this with SQLite database, but this process is more faster than SQLite, its fater because we get data from API in json format, so will will write the same data in json file. Means we will not parse each and every JsonObject and JsonArray. In case of SQLite we need to parse JsonObjects and JsonArray and all the values exist in API response. 
And when we display that data into our RecyclerView or any other UI component then we need to get data from SQLIte DB and convert then into model class -> add that model class into ArrayList -> and finally set that ArrayList to adapter.

## How json files are after than SQLite DB?

So in json files we will get json response from API and write that json data As it is into json file. No need to parse json data. And when we use that json data we simple get json from json file and process them same as we process data from API and display in RecyclerView.

## Complete Example of storing data into cache

In this example I'm using Retrofit2, the same example will be applied to Retrofit1 and any other json parsing technique like Gson, Volley and HttpUrlConnection.

### CacheManager.java

<Gist id='b3cc884df87b98b8f1b478e155e8fdf8' />

### CacheUtils.java (to save name of json file)

<Gist id='22d45365e3bf9b9b3c72fb786a6c1cde' />

### MainActivity.java

<Gist id='7df918d5ff87e483ad3bfb010432aad4' />

### M.java file

```java
public static boolean isConnectionAvailable(Context context) {

        ConnectivityManager connectivityManager = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        if (connectivityManager != null) {
            NetworkInfo netInfo = connectivityManager.getActiveNetworkInfo();
            if (netInfo != null && netInfo.isConnected()
                    && netInfo.isConnectedOrConnecting()
                    && netInfo.isAvailable()) {
                return true;
            }
        }
        return false;
    }

    public static void l(String TAG, String msg) {
        Log.d(TAG, msg);
    }
    public static void l(String TAG, Throwable e) {
        Log.e(TAG, "",e);
    }
```

### ItemLatest.java

<Gist id='1c10f0d8eef03eaa887a98a5a5fa987c' />

### APIService.java

<Gist id='c7304efefa16539830dbd8904e079235' />

### YoutubeApi.java

<Gist id='4fe33ea3e29dfce00effbd60d8a1be50' />