---
categories: content/categories/flutter.md
author: content/authors/pawneshwer.md
layout: post
comments: true
title: Flutter WorkManager not working in Release mode (Working in Debug mode)
date: 2022-09-07T00:00:00+05:30
tags:
- WorkManager
image: "./img/workmanager-in-release-mode.png"
description: 'The workmanager works debug mode with no problem but when I do "flutter
  run --release" on my phone, I get there errors:'
draft: false

---
If you are using flutter_workmanager plugin in flutter then probably you may face an issue that WorkManager works fine in Debug mode but in Release mode WorkManager failed to run tasks in background.

Its impossible to trace logs on release apk, so instead of building release apk and installing in device. Add "--release" argument while running app so that you can run release app in device and trace logs as well.

And if you look into logs you will see below issue.

### Describe the error

The workmanager works debug mode with no problem but when I do "flutter run --release" on my phone, I get there errors:

    √  Built build\app\outputs\flutter-apk\app-release.apk (7.9MB).
    Installing build\app\outputs\flutter-apk\app.apk...                10,3s
    
    E/flutter ( 6234): [ERROR:flutter/shell/common/shell.cc(93)] Dart Error: Dart_LookupLibrary: library 'package:my_project/services/background_service.dart' not found.
    E/flutter ( 6234): [ERROR:flutter/runtime/dart_isolate.cc(668)] Could not resolve main entrypoint function.
    E/flutter ( 6234): [ERROR:flutter/runtime/dart_isolate.cc(167)] Could not run the run main Dart entrypoint.
    E/flutter ( 6234): [ERROR:flutter/runtime/runtime_controller.cc(385)] Could not create root isolate.
    E/flutter ( 6234): [ERROR:flutter/shell/common/shell.cc(604)] Could not launch engine with configuration.
    E/flutter ( 6234): [ERROR:flutter/shell/common/shell.cc(93)] Dart Error: Dart_LookupLibrary: library 'package:my_project/services/background_service.dart' not found.
    E/flutter ( 6234): [ERROR:flutter/runtime/dart_isolate.cc(668)] Could not resolve main entrypoint function.
    E/flutter ( 6234): [ERROR:flutter/runtime/dart_isolate.cc(167)] Could not run the run main Dart entrypoint.
    E/flutter ( 6234): [ERROR:flutter/runtime/runtime_controller.cc(385)] Could not create root isolate.
    E/flutter ( 6234): [ERROR:flutter/shell/common/shell.cc(604)] Could not launch engine with configuration.

So according to logs **WorkManager** failed to call our headless **callbackDispatcher** function.

### Solution

I fixed this error by adding @pragma('vm:entry-point') on a top line of headless callbackDispatcher function. So like this:

    @pragma('vm:entry-point')
    void callbackDispatcher() {
      Workmanager().executeTask((task, inputData) async {
        print("Native called background task: $task");
        ....
        return Future.value(true);
      });
    }

Now try to run app in release mode and now WorkManager will work fine as expected.