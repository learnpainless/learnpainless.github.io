---
title: Android Drawable Importer plugin not working in Android Studio 4
date: 2020-03-18 02:37:00 +05:30
categories:
- android
- ide
tags:
- Android Studio 4
- Drawable Importer
author: [pawneshwer]
description: fix Android Drawable Importer plugin not working in Android Studio 4, Drawable Importer plugin stopped working in Android Studio 3.6 and higher version.
comments: true
layout: post
draft: false
image: img/android-drawable-importer-plugin-not-working-android-studio-4.png
---

## Android Drawable Importer plugin not working in Android Studio 4

### What is Drawable Importer?

**Drawable Importer** is plugin for android studio which is used to generate icons in multiple size (for all supported sized). So it reduces the time and efforts to make icons for all supported devices. If you haven't tried this plugin then you should try this, it will help you to increase development speed.

But after **Android Studio** version 3.6 Drawable Importer stopped working. Whenever you choose any image to create icons in multiple sizes it wont load your image. And this problem is also coming in **Android Studio** version 4. So to fix this problem you can use unofficial fork of **Drawable Importer plugin**.

> issue is with the Android Drawable Importer plugin which is no longer working. I tried reinstalling it with no luck.

#### How to resolve Drawable Importer plugin issue:

1. Download unoffical Drawable Importer plugin forked from offical plugin. from [here](https://gpskaihu.nz/ADI-hack/ADI-hack-plugin-AS36.zip)

if download link is not working or is old now, then you can download from his [Github repository](https://github.com/Vincent-Loi/android-drawable-importer-intellij-plugin).

##### original Note from **Vincent Loi** author of this unofficial fork.

> This fork came about because the original package stopped working somewhere around Android Studio 3.5. I have provided an installation zip here. As at 31Jan2020 it is known to run nicely on AS 3.6 RC 1. Any feedback would be appreciated.

2. Goto _File_ **->** _Settings_ **->** _Plugins_.
3. Click on settings icon and it will display popup menu with few options.
4. click on **install from Disk** in dropdown.
5. Now choose zip file which you have downloaded in **step 1**.
6. Now its installed and it will ask you to **restart** Android Studio.

###### Restart Android Studio and done.