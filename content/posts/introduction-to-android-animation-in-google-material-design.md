---
title: Introduction to android animation in google material design
date: 2017-01-22 11:32:00 Z
categories:
- android
- animation
tags:
- material design
- material motion
layout: post
modified_time: 2017-01-22 11:32
author: [lpl]
description: how to use android animation for material design , with material motion.
  make cool material animated design with android animation
keywords: how to use android animation for material design , with material motion.
  make cool material animated design with android animation
comments: true
image: img/introduction-to-android-animation-in-google-material-design-min.png
---

## Introduction to android animation in google material design
android animation Tween animation can perform only four small transitions like rotate, scale, transparency, and movement.) In 1 file you can define only single root, but if you want to define multiple animations in 1 file then you can use set. Inside set you can define multiple animations according to your need. android animation file will be created at `<span style="color: #339966;">**res/anim/**</span>` directory of your project. File name would be anything.

### <span style="color: #339966;">Below are tags:</span>

```xml
1.  **<alpha>** for transparency
2.  **<scale>** for increase decrease size
3.  **<rotate>** for rotation
4.  **<translate>** for movement.
5.  **<set>** to add more than 1 animation in 1 file.
```

By default, all android animation instructions are applied simultaneously. To make them occur sequentially, you must specify the **<span style="color: #339966;">startOffset</span>** attribute, as shown in the example below. Screen coordinates (not used in this example) are (0,0) at the upper left hand corner, and increase as you go down and to the right. Some values, such as pivotX, can be specified relative to the object itself or relative to the parent. Be sure to use the proper format for what you want ("50" for 50% relative to the parent, or "50%" for 50% relative to itself).

1.  <span style="color: #339966;">**Scale**</span>: this android animation is used to increase or decrease size of any object.
2.  <span style="color: #339966;">**Alpha**</span>: this android animation is used to increase or decrease transparency of any object.
3.  <span style="color: #339966;">**Translate**</span>: this android animation is used to move object from 1 place to another place.
4.  <span style="color: #339966;">**Rotate**</span>: this android animation is used to rotate any object.

### <span style="color: #339966;">For example :</span>

Create new file in "<span style="color: #339966;">**res/anim**</span>" names "**<span style="color: #339966;">test_anim.xml</span>**" (<span style="color: #ff6600;">if anim directory doesn't exist in res directory, then create manually</span>) Inside <span style="color: #339966;">**test_anim.xml**</span> we can write our code like

#### code of test_anim.xml

```xml
<rotate android:duration="3000" 
        android:fromDegrees="0" 
        android:toDegrees="80" />
```

by this code we can rotate any object, android animation will be set through java code to any object.

## <span style="color: #339966;">For example to set this android animation to button write below code:</span>

```java
Button btn = (Button) findViewById(R.id.my_button);
Animation animation = AnimationUtils.loadAnimation(context,R.anim.test_anim);
btn.startAnimation(animation);
```

That's it.

continue to next post for detailed info about android animation in google material design