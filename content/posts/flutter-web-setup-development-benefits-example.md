---
title: Flutter web Setup, Development and Benefits with example
date: 2020-07-31 09:37:00 +05:30
categories:
- Flutter
tags:
- flutter web
- google flutter
- flutter website
- featured
author: [pawneshwer]
description: Flutter web Setup, Development and Benefits with example. how to enable web support in flutter project and what are benefits of flutter web with example
comments: true
layout: post
draft: false
image: img/flutter-web-setup-development-benefits-example.png
---

## Flutter web Setup, Development and Benefits with example

### Flutter web Setup

**flutter web** is not release for stable release, so if you want to create **flutter web** project then you have to switch to beta version of flutter sdk so that you will get latest features from flutter before the public release.
But keep in mind that beta versions are early release which means it make contain some defects of bugs.

below are commands to switch to flutter beta sdk, then get latest updates for flutter sdk and finally enable *flutter web* support
```console
flutter channel beta
flutter upgrade
flutter config --enable-web
```

After enabling flutter web support, "Chrome" in device list if you run `flutter devices`. And you can run your project by selecting Chrome as device.

Now you have to options to work with *flutter web*. 

- Create new project with flutter web support.
- Add flutter web support to existing project.

#### Create new project with flutter web support:

Create new flutter app and flutter web support will enable automatically. Below are commands to create new flutter project (run on Command prompt in windows and Terminal in Linux or Unix):

```bash
 flutter create myapp
 cd myapp
```

This will create new flutter app, now you can run and test your app on Chrome browser. To run your flutter web app type below command in Command prompt in windows and Terminal in Linux or Unix.

```bash
flutter run -d chrome
```

To build your **flutter for web** in release mode, you can run below command in Command prompt in windows and Terminal in Linux or Unix.

```bash
flutter build web
```

And this command will generate web files inside `build/web` directory of your project.

#### Add flutter web support to existing project:

If you have already built your project in flutter and you want to add support for flutter web, then you can run below command and it will create web folder with configuration inside your project directory.

```bash
flutter create .
```

### flutter web Development

development of **flutter web app** is same as normal flutter app, You have to write code for flutter app only, and when you run or build your project then it will generate html, js files internally.
But in some case you have to do some extra changes to work with flutter web app.

##### for example 

if you want to use firebase in your flutter web app then you need to include firebase javascript libraries in `<head>` tag of index.html file inside web directory of your project.

### flutter web example

lets try to create simple login form in flutter and check if your working in flutter web as well or we need to do some modifications.
In `lib/main.dart` file write below code.

```dart
import 'package:flutter/material.dart';

void main() => runApp(SignUpApp());

class SignUpApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      routes: {
        '/': (context) => SignUpScreen(),
      },
    );
  }
}

class SignUpScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      body: Center(
        child: SizedBox(
          width: 400,
          child: Card(
            child: SignUpForm(),
          ),
        ),
      ),
    );
  }
}

class SignUpForm extends StatefulWidget {
  @override
  _SignUpFormState createState() => _SignUpFormState();
}

class _SignUpFormState extends State<SignUpForm> {
  final _firstNameTextController = TextEditingController();
  final _lastNameTextController = TextEditingController();
  final _usernameTextController = TextEditingController();

  double _formProgress = 0;

  @override
  Widget build(BuildContext context) {
    return Form(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          LinearProgressIndicator(value: _formProgress),
          Text('Sign up', style: Theme
              .of(context)
              .textTheme
              .headline4),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              controller: _firstNameTextController,
              decoration: InputDecoration(hintText: 'First name'),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              controller: _lastNameTextController,
              decoration: InputDecoration(hintText: 'Last name'),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              controller: _usernameTextController,
              decoration: InputDecoration(hintText: 'Username'),
            ),
          ),
          FlatButton(
            color: Colors.blue,
            textColor: Colors.white,
            onPressed: null,
            child: Text('Sign up'),
          ),
        ],
      ),
    );
  }
}
```

After writing above code now run this app on Android device, by using `flutter run` command or directly from your IDE.

Now run this project in Chrome, using `flutter run -d chrome` command, and you will see same output on Chrome as well.

### flutter web Benefits

- Your existing flutter project will be used for website. (you don't need to develop your web app from scratch)
- PFA (Progressive Web Apps) support enabled by default.
- Rich interactive single page applications
- Support for core web features across all modern browsers.
- Support for plugins. For features like location, camera, and file access, we hope to bridge mobile and the web with a single API.
- Debugging web applications using DevTools.
- Improved performance, browser support, and accessibility.

###### So this is how you can create your flutter web project easily, without worrying about web development languages.