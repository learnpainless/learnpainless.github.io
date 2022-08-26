---
title: Flutter crashing on launch when updating Android Gradle Plugin to 4.0.0
date: 2020-06-02 09:37:00 +05:30
categories:
- Flutter
tags:
- image_picker
- crashes
- Gradle
- featured
author: [pawneshwer]
description: Flutter crashing on launch when updating Android Gradle Plugin to 4.0.0, Flutter Crash with Image Picker, App crashes after adding image_picker plugin fixed.
comments: true
layout: post
draft: false
image: img/flutter-crashing-launch-when-updating-android-gradle-plugin-4-0-0.png
---

## Flutter crashing on launch when updating Android Gradle Plugin to 4.0.0

### App crashes after adding image_picker plugin fixed
If you are using `image_picker` plugin in flutter and recently upgraded Android Gradle Plugin to 4.0.0 then you may face crash on launch in release mode. Actually this problem is due to code shrinking in latest version, which is shrinking code of java/kotlin code of your project. And after this update code of `androidx.lifecycle` getting shrinked which is being used by `image_picker` library.
Thats why our app is getting crashed after this update. 

## So we have 3 fixes for this issue.
- Add proguard rules for androidx lifecycle (**Recommanded way**).
- Downgrading Android Gradle Plugin to 3.6.2
- Disable code shrinking.

### Method 1. Add proguard rules for androidx lifecycle
Add proguard rules inside android project, you can find proguard-rules file at following location `android/app/proguard-rules.pro`. And add below code at the bottom of `proguard-rules.pro` file.

```
-keep class androidx.lifecycle.** { *; }
```
Now try to build your app in release mode. And now you app will not crash.
If after adding above line your build fail with following error:

```
Execution failed for task ':app:lintVitalRelease'.
> Could not resolve all artifacts for configuration ':app:debugRuntimeClasspath'.
```
Then don't worry about it, we can disable lintcheck for release build. To do this open this file `android/app/build.gradle`. and add below lines inside android node.

```
lintOptions {
  checkReleaseBuilds false
}
```
Now you will not get any error while creating release build.

### Method 2. Downgrading Android Gradle Plugin to 3.6.2
Another way to fix stratup crash is by downgrading Android Gradle Plugin to 3.6.2, and it will start working as before. To do this make changes in following file `android/build.gradle`. and change following lines:

##### before change
```
classpath 'com.android.tools.build:gradle:4.0.1'
```

##### after change
```
classpath 'com.android.tools.build:gradle:3.6.2'
```
Now try to build your app in release mode. And now you app will not crash.

### Method 3. Disable code shrinking
Last option to fix this crash is build without shrking code. To do this we don't need to change inside our code. We can simply do this from commandline. Do like below:

##### how we previously build appBundle:
```
flutter build appbundle
```

##### how we will build appBundle now:
```
flutter build appbundle --no-shrink
```

So by adding  `--no-shrink` in commandline will tell the compiler to not shrink the code while generating release appBundle.

###### So these are few methods to fix crashing on launch when updating Android Gradle Plugin to 4.0.0, hope this post helps you to fix this problem. 