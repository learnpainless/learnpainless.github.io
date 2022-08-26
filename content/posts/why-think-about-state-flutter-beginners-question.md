---
title: Why we have to think about state in flutter (Beginner's question)
date: 2020-08-08 06:37:00 +05:30
categories:
- Flutter
tags:
- Beginner's question
- State Management
- featured
author: [pawneshwer]
description: If you just started learning flutter and curious about state management in flutter  and confused about why we have to use state management library in flutter.
comments: true
layout: post
draft: false
image: img/why-think-about-state-flutter-beginners-question.png
---

## Why we have to think about state in flutter (Beginner's question)
If you just started learning **flutter** and heard about **state** or **state management**. And you are confused about state. So this post is for you. And your all doubt will be cleared after reading this post.

### Different between Stateful and Stateless widget in flutter?
Let's first discuss about difference between **Stateful** and **Stateless widget** in flutter. As there name suggests.

#### Stateful widget
**Stateful widget** is used if you have changable UI elements (like *Text*, *Image* etc) which can be changed anytime. Then we consider using Stateful widgets.

##### Example of Stateful widget:
Suppose if you have `Text()` widget on screen and you want to change its text on button click, then you will simply change state of text and it will automatically reflect on `Text()` widget and you will see new text displayed on screen.

```dart
class MyScreen extends StatefulWidget {
  @override
  _MyScreenState createState() => _MyScreenState();
}

class _MyScreenState extends State<MyScreen> {
  String _name = 'Website Name';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Text(_name),
          RaisedButton(
            child: Text('Display Name'),
            onPress: () {
              setState(() {
                _name = 'Learn Pain Less';
              });
            }
          )
        ]
      ),
    );
  }
}

```
As in above example on button press we have changed `_name` variable to 'Learn Pain Less' and its displayed on screen. But if we try to change name directly (without setState) then it will not display on screen. So that's the main use of Stateful widget in Flutter. Whenever state is changed the `build()` function will recall and all UI elements are rebuild. So sometime this becomes the point of performance issue. Because if we have 40 widgets in our `build()` function and we update state of 1 widget then rest of 39 widgets get rebuild unnecessarily.

#### Stateless widget:
If you want to display some static UI elements then you may consider Stateless widget. Because you are not going to change their value in future. Thats why Stateless widgets doesn't affect performace of our app. Because `build()` function of Stateless widget is called once.

##### Example of Stateless widget:
Let say if you want to display your name on screen, and you don't want to change it.

```dart
class MyApp extends StatelessWidget {
  String _name = 'Learn Pain Less';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      child: Text(_name),
    );
  }
}
```

### Why we shoult use state management library in flutter?
As you just read if you change state of any widget in Stateful widget then the whole widget hierarchy got rebuild, which is not good thing. So if we consider using state management library then state will be managed somewhere else outside our widget. And because now state is not going to manage inside our widget then we can use Stateless widget, because we use Stateless widget when we don't want to handle state of any widget.

### Benefits of using state management library in flutter?
- State will be manage outside of our widget.
- State will be changed for targeted widget only. which means build() function will not recall.
- We can use Stateless widget for changable widgets also.
- We can share state widget between multiple screens.
- We can keep state globally.
- Obviously performance will be increased.

Also read about [**Why use RxDart and how to use with BLoC Pattern in Flutter?**](https://learnpainless.com/flutter/why-use-rxdart-use-with-bloc-pattern-flutter/) which is also linked with **State management** in Flutter.

###### I hope your doubt is cleared regarding Stateful and Stateless widget in flutter and State management in flutter. If you have any doubt regarding this then ask your question in commentbox below.