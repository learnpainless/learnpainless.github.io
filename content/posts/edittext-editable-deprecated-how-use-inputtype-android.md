---
title: EditText editable is deprecated How to use inputType in Android
date: 2020-07-27 02:37:00 +05:30
categories:
- android
tags:
- EditText
- android
author: [pawneshwer]
description: EditText editable is deprecated How to use inputType in Android, editable in Edittext is deprecated so use focusable instead of editable.
comments: true
layout: post
draft: false
image: img/edittext-editable-deprecated-how-use-inputtype-android.png
---

## EditText editable is deprecated How to use inputType in Android

If you are working in non editable `EditText`, then you may notice that now it's showing warning in xml layout file, Because `android:editable` is now deprecated in Android. And it will be removed in upcoming version of android. And if you navigate to official website then they will suggest you to use `android:inputType` instead of `android:editable`.
But they haven't explained that how to use `android:inputType` to disable input in EditText.

*So here is solution:*

## Make EditText non editable in Android

### First method:

first method is using `android:inputType` which is suggested by **official android** team. To use this just set `android:inputType="none"` and it will become non editable.

#### for example

##### in XML

```xml
<EditText
    android:id="@+id/myEditText"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:hint="Hint"
    android:inputType="none"
    />
```

### Second method:

In your xml code set `focusable="false"`, `android:clickable="false"` and `android:cursorVisible="false"` and this will make your EditText treat like non editable.

#### for example

##### in XML

```xml
<EditText
    android:id="@+id/myEditText"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:hint="Hint"
    android:focusable="false"
    android:clickable="false"
    android:cursorVisible="false"
    />
```

### Third method:

If you can also disable EditText, then you can set this from Java or Kotlin code.

#### for example

##### In Java

```java
EditText et = findViewById(R.id.myEditText);
et.setEnabled(false);
```

##### In Kotlin

```kotlin
myEditText.isEnabled = false
```

###### It depends on you that which method will you preffer. Write in comments which method you like and why?,  so other users can take benefit of this.