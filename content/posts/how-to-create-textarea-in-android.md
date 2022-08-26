---
title: How to create TextArea in Android (Android Stuido)
date: 2016-05-25 18:40:25 Z
categories:
- android
tags:
- android
- ScrollView
- TextArea
layout: post
author: [pawneshwer]
description: how to make textarea in android,i want to make textarea in android,help
  me to create textarea in android,use edittext as textarea in android in android studio.
keywords: how to make textarea in android,i want to make textarea in android,help
  me to create textarea in android,use edittext as textarea in android
comments: true
modified_time: '2016-05-26T04:23:17.859+05:30'
image: img/how-to-create-textarea-in-android-min.png
---

## How to create TextArea in Android

So if you want to add ***TextArea*** in your Android App then you will notice that there is no TextArea available for Android. but TextArea is available for all other platforms like html,iOS,C# etc. But in android there is only EditText widget which is editable. 

## What is TextArea equivalent in Android ?
Unfortunately Android does’t have a TextArea tag, so we'd like some tricky thanks to make it. the sole text input in Android layout is merely EditText, so this is often the way to make multiple line EditText in android :

## So what to do now? 

But there is still an option available to make TextArea widget in android app. you can modify EditText so it can behave like TextArea. 
first of all figure out difference between EditText and TextArea so that we can easily modify EditText

1.  **TextArea** is multiline
2.  **TextArea** is scrollable from inside, so we can view all text inside textarea.
3.  Text in **TextArea** start from Top-Left corner.
4.  **TextArea** is box type.
5.  **TextArea** can be scroll from top to bottom and right to left.

So we can add these features to normal EditText widget of android. below is code of normal EditText:   

```xml

<EditText
    android:id="@+id/textArea_information"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />

```

and below is code to make it TextArea :   

```xml
<EditText
    android:id="@+id/textArea_information"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="@null"
    android:gravity="top|left"
    android:inputType="textMultiLine"
    android:overScrollMode="always"
    android:scrollbarStyle="insideInset"
    android:scrollbars="vertical"
    android:lines="6"
    android:textAppearance="?android:attr/textAppearanceMedium"
    android:scrollHorizontally="false" />

```

So we have set android:inputType = textMultiLine to make our EditText support multiple line and keyboard's enter button will add lines instead of submit. And we set android:gravity = top|left, its inner gravity of EditText which moves the cursor to Top-Left corner of EditText. Which looks like TextArea of a webpage. And finally we have achieved our task of creating TextArea in Android.

But if you use this TextArea inside ScrollView then you will face issue while scrolling TextArea's inner contents. to resolve this issue we have to do some hack in java file. which is as below : 

```java

EditText textArea = (EditText) findViewById(R.id.textArea_information);

textArea.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                v.getParent().requestDisallowInterceptTouchEvent(true);
                switch (event.getAction() & MotionEvent.ACTION_MASK){
                    case MotionEvent.ACTION_UP:
                        v.getParent().requestDisallowInterceptTouchEvent(false);
                        break;
                }
                return false;
            }
        });

```

so what we did is, we just disabled scrolling or outer/parent view when we make focus on TextArea. which makes our ScrollView fixed and we can scroll TextArea without any issue.

###### This is how you can tweak your code to make appearance of EditText same as TextArea in android.