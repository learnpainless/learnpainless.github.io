---
title: How to set cookie in header with the request flutter
date: 2020-08-02 06:37:00 +05:30
categories:
- Flutter
tags:
- api
- header cookie
- security
- featured
author: [pawneshwer]
description: How to set cookie in header with the request flutter and make rest api calls authenticated and secure. How do I make an http request using cookies on flutter?
comments: true
layout: post
draft: false
image: img/how-set-cookie-header-with-request-flutter.png
---

## How to set cookie in header with the request flutter

### How cookie helps?

**Cookies** are often nice as they need certain flags which will be set to enforce security checks like HTTP Only and Secure. By setting HTTP Only and Secure flags, the cookie can't be read by any Javascript code nor be sent in plain text over HTTP. Thus the Cookie are often resistant to XSS attacks as described within the local storage Section. Cookies are often susceptible to a special sort of attack called cross site request forgery (XSRF or CSRF). XSRF means a hacker on a special site can replicate some input form on your own site and POST form data to our own site. While the hacker doesn’t have access to the cookie, cookies are transferred with every HTTP request to your real domain that the cookie is valid for. Thus, the hacker doesn’t got to read the cookie, it just must successfully POST form data to your real site. this is often one among the risks with cookies. they're sent for each request, static, AJAX, etc. There are ways around this, but the main purpose is that your web server must recognize whether the request coming from your real website or application running during a browser or somebody else . a method to try to to this is often with a hidden anti-forgery token. a method is to get and store a special random key within the cookie that also must be sent with the POSTed form data. Remember, only your real site can access the cookie but the hacker site cannot thanks to same origin policy. Then your server can verify that cookie’s token matches the token in request header. There are other options for cover on XSRF.

**Note:** If you are looking for certificates based api call security then you can read [**How to implement SSL Pinning in your Flutter App**](https://learnpainless.com/flutter/how-implement-ssl-pinning-your-flutter-app/)

### How to set cookie in flutter?

#### Steps to use cookie:

- Call login api without cookie, and we will get cookie in response header.
- Pass that cookie in request header of further api calls.
- If cookie doesn't match on server then api call will fail.

In this tutorial i will use [**dio library**](https://pub.dev/packages/dio) for HTTP calls.

#### code of api_provider.dart file

```dart
import 'package:dio/dio.dart';

class ApiProvider {
  Dio _dio;
  String aToken = '';

  final BaseOptions options = new BaseOptions(
    baseUrl: 'http://3.8.141.177:6001/gateway',
    connectTimeout: 15000,
    receiveTimeout: 13000,
  );
  static final ApiProvider _instance = ApiProvider._internal();

  factory ApiProvider() => _instance;

  ApiProvider._internal() {
    _dio = Dio(options);
    _dio.interceptors.add(InterceptorsWrapper(
        onRequest:(Options options) async {
          // to prevent other request enter this interceptor.
          _dio.interceptors.requestLock.lock();
          // We use a new Dio(to avoid dead lock) instance to request token.
          //Set the cookie to headers
          options.headers["cookie"] = aToken;

          _dio.interceptors.requestLock.unlock();
          return options; //continue
        }
    ));
  }

  Future login() async {
    final request = {
      "userName": "Chinmay@gmail.com",
      "password": "123456",
      "token": "123456"
    };
    final response = await _dio.post('/user/login', data: request);
    //get cooking from response
    final cookies = response.headers.map['set-cookie'];
    if (cookies.isNotEmpty && cookies.length == 2) {
      final authToken = cookies[1].split(';')[0]; //it depends on how your server sending cookie
      //save this authToken in local storage, and pass in further api calls.

      aToken = authToken; //saving this to global variable to refresh current api calls to add cookie.
      print(authToken);
    }

    print(cookies);
    //print(response.headers.toString());
  }

  /// If we call this function without cookie then it will throw 500 err.
  Future getRestaurants() async {
    final response = await _dio.post('/restaurant/all');

    print(response.data.toString());
  }
}
```

#### code of main.dart file

```dart
import 'package:flutter/material.dart';
import 'package:flutter_cookie_proto/api_provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              onPressed: () {
                ApiProvider().login().then((value) => {});
              },
              child: Text('Login'),
            ),
            RaisedButton(
              onPressed: () {
                ApiProvider().getRestaurants().then((value) => {});
              },
              child: Text('Get Restaurants'),
            ),
          ],
        ),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

```

So if we call `/restaurant/all` api without cookie then it will give error. So we have to call login api first, and we will get Cookie from response header of login api. And after that we can use that Cookie in request header of next api.

###### So this is how we can secure api calls in flutter using cookies in request header of every api call.