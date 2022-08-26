---
title: Firebase Auth Email login using provider 4 flutter
date: 2020-08-04 06:37:00 +05:30
categories:
- Flutter
tags:
- Firebase
- Firebase Auth
- Provider
- featured
author: [pawneshwer]
description: Firebase Auth Email login using provider 4 flutter, how to use Provider v4 for firebase email authentication in flutter app. firebase auth flutter provider v4
comments: true
layout: post
draft: false
image: img/firebase-auth-email-login-using-provider-4-flutter.png
---

## Firebase Auth Email login using provider 4 flutter

### What is Provider

**Provider** is *state management* library which works using **ChangeNotifier** in **flutter**. It is used to hold **state** of flutter app. By using **state management** library we can handle rebuilding our widget in **flutter**. Rebuilding widget means whenever state changed in b app then it rebuilds the whole screen. Which means few components of our screen got rebuild (which were not supposed to rebuild). To solve this problem we use b libraries in flutter.

### Setup Firebase auth:

To implement firebase auth in flutter project we can use [**firebase_auth**](https://pub.dev/packages/firebase_auth) which is released by Firebase itself for flutter.
- Create your project on [**Firebase Console**](https://console.firebase.google.com).
- Follow their guide to setup your project.
- configure you project for platforms which you want (**iOS**, **Android**, **Web**).

Ok so you have configured your project for your required platforms, lets continue to work with [**provider 4.3.1**](https://pub.dev/packages/provider) as of now.

### How to implement provider 4 in flutter?

- Use **MultiProvider** child of `runApp()` function. (we are wrapping all our screens with **MultiProvider** so that we can share state in all screens.)
- Create your **provider** with **ChangeNotifier** (so that you will get `notifyListeners()` function to ask our widget to rebuild)
- Pass instance of all your **providers** to **MultiProvider**.
- Use `watch()` function to listen for updates to rebuild widget.
- Use `read()` function to access provider's variables and functions to send rebuild commands to widgets.

#### Lets start

First of all create **LoginProvider**, This class will extend **ChangeNotifier** and it will perform all logic (like *login*, *logout* etc), and after performing logic it will call `notifyListeners()` function, and widget get updated (only those widget will update who are watching the changes using `watch()` function).

##### Code of login_provider.dart file

```dart
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

enum AppState { initial, authenticated, authenticating, unauthenticated }

class LoginProvider with ChangeNotifier {
  FirebaseAuth _auth;
  FirebaseUser _user;
  AppState _appState = AppState.initial;

  AppState get appState => _appState;
  FirebaseUser get user => _user;

  LoginProvider.instance() : _auth = FirebaseAuth.instance {
    _auth.onAuthStateChanged.listen((firebaseUser) {
      if (firebaseUser == null) {
        _appState = AppState.unauthenticated;
      } else {
        _user = firebaseUser;
        _appState = AppState.authenticated;
      }

      notifyListeners();
    });
  }

  Future<bool> login(String email, String password) async {
    try {
      _appState = AppState.authenticating; //set current state to loading state.
      notifyListeners();

      await _auth.signInWithEmailAndPassword(email: email, password: password);
      return true;
    } catch (e) {
      _appState = AppState.unauthenticated;
      notifyListeners();
      return false;
    }
  }

  Future logout() async {
    await _auth.signOut();
    _appState = AppState.unauthenticated;
    notifyListeners();
    return Future.delayed(Duration.zero);
  }
}

```

`LoginProvider.instance()` is constructor which is initialing local `_auth` variable with `FirebaseAuth.instance` and binding `onAuthStateChanged` listener to `_auth` variable to listen for **FirebaseAuth** state changes. And whenever **FirebaseAuth** state changes it checks for **FirebaseUser** is null or not. If **FirebaseUser** is null which means user is not logged in, and based on this we will update state of our app and **notify listeners**.

I have created an enum class **AppState** for limited states of our app.

- `login()` function first update `appState` to `authenticating` state and `notifyListeners`, by this all the listeners can show `ProgressIndecator` on UI so that users will see that its loading.
- After that it will call `signInWithEmailAndPassword` function of **FirebaseAuth** and wait for `authentication`. If login fails then this function will throw exception and in that case we will update our **appState** to `unauthenticated` and `notifyListeners`, and by this our app will display login screen to users. 
- otherwise we will save **FirebaseUser** to global variable and `onAuthStateChanged` will call and their we can change appState to `authenticated` and `notify listeners`. By this we can redirect user to **UserDetail** screen and display their info.
- Same will happen in case of `logout()`, it will call `signout()` function of **FirebaseAuth** and update appState to `unauthenticated` and notify listeners.

##### Code of login_screen.dart

```dart
import 'package:flutter/material.dart';
import 'package:flutter_provider_proto/providers/login_provider.dart';
import 'package:provider/provider.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  TextEditingController _email;
  TextEditingController _password;
  final _key = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _email = TextEditingController(text: "");
    _password = TextEditingController(text: "");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _key,
      appBar: AppBar(
        title: Text('Login Screen'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              decoration: InputDecoration(hintText: 'Email'),
              controller: _email,
            ),
            TextField(
              decoration: InputDecoration(hintText: 'Password'),
              controller: _password,
            ),
            RaisedButton(
              onPressed: () async {
                if (!await context
                    .read<LoginProvider>()
                    .login(_email.text, _password.text)) {
                  _key.currentState.showSnackBar(
                      SnackBar(content: Text('Unable to login.')));
                }
              },
              child: Text('Login'),
            )
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _email.dispose();
    _password.dispose();
    super.dispose();
  }
}

```

here on button click i used `read()` **extension function** from **provider** on **BuildContext** with generics of type **LoginProvider** and then we have access to all functions of our provider class, so we called `login()` functions of our provider class.

##### Code of my_app.dart file

```dart
import 'package:flutter/material.dart';
import 'package:flutter_provider_proto/providers/login_provider.dart';
import 'package:flutter_provider_proto/screens/home_screen.dart';
import 'package:flutter_provider_proto/screens/login_screen.dart';
import 'package:flutter_provider_proto/screens/splash_screen.dart';
import 'package:provider/provider.dart';

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Provider Proto',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: _showScreen(context),
    );
  }
}

Widget _showScreen(BuildContext context) {
  switch (context.watch<LoginProvider>().appState) {
    case AppState.authenticating:
    case AppState.unauthenticated:
      return LoginScreen();
    case AppState.initial:
      return SplashScreen();
    case AppState.authenticated:
      return HomeScreen(
        user: context.watch<LoginProvider>().user,
      );
  }
  return Container();
}

```

We are using `watch()` **extension function** from provider on `BuildContext` with generics of type **LoginProvider** and we have access to all variables and functions of our provider class, and we statered listening appState variable's value changes. So whenever `notifyListeners()` function is classed from our provider it will send updates to `watch()` function and our widget get updated.

###### Now we have full control on state of our project, so can update state of any widget from any screen. And all our logic is inside provider class and our UI class is clean and StateLess class.

### Full source code of this project

**Source code** is available on Github [**here**](https://github.com/learnpainless/FirebaseAuthProviderFlutter)