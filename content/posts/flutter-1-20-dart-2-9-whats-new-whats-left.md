---
title: Flutter 1.20, Dart 2.9 and VSCode, what's new and what's left
date: 2020-08-05 06:37:00 +05:30
categories:
- Flutter
tags:
- Flutter 1.20
- Dart 2.9
- featured
author: [pawneshwer]
description: Flutter 1.20 release, what's new and what's left. let's discuss about what we got in flutter 1.20, Dart 2.9 and latest flutter extension for VS Code and support
comments: true
layout: post
draft: false
image: img/flutter-1-20-dart-2-9-whats-new-whats-left.png
---

## Flutter 1.20, Dart 2.9 and VSCode, what's new and what's left

Our ongoing vision with Flutter is to supply a transportable toolkit for building stunning experiences wherever you would possibly want to color pixels on the screen. With every release, we still push towards ensuring that Flutter is fast, beautiful, productive and open for each platform we support. In Flutter 1.20, which is released today to our stable channel.

To enable you to create Flutter apps that are ever more beautiful, this release has several UI enhancements, including the long-awaited support for autofill, a replacement thanks to layer your widgets to support pan and zoom, new mouse cursor support, updates to old favorite Material widgets (such because the time and date pickers), and an entire new responsive license page for the About box up your desktop and mobile form-factor Flutter apps.

To make sure that you simply still be more productive, we’ve got updates to the Flutter extension for Visual Studio Code that brings Dart DevTools directly into your IDE, automatically updating your import statements as you progress your files around and a replacement set of metadata for building your own tools.

### What's new in Flutter 1.20
- **Icon font tree shaking** removes the icons that you're not using in your app, thus reducing the size. 
- Reduces jank in the initial display of your animation using a warm-up phase.
- Refined our mouse support for desktop.
- Autofill for mobile text fields.
- **Zooming**, **panning**, **resizing**, **dragging** and **dropping** with the new `InteractiveViewer`.
- Updated Material Slider.
- Updated RangeSlider.
- Updated TimePicker.
- Updated DatePicker.
- Responsive Licenses page
- New `pubspec.yaml` format required for publishing plugins
- Adding tabSemanticsLabel to CupertinoLocalizations
- Add clipBehavior to widgets with clipRect
- Update Tab semantics in Cupertino to be the same as Material
- Remove deprecated child parameter for NestedScrollView’s overlap managing slivers
- iOS mid-drag activity indicator
- Fixes the navigator pages update crashes when there is still route
- And several UI enhancements

### What's new in Dart 2.9
- Adds `Stream.multi` constructor creating streams which can be listened to more than once
- When encoding a string containing unpaired surrogates as **UTF-8**, the unpaired surrogates will be encoded as replacement characters (`U+FFFD`)
- The signature of `exit` has been changed to `return` the Nevertype instead of `void`
- Class OSError now implements Exception
- Added `InternetAddress.tryParse`.
- `pub upgrade`: Show summary count of outdated packages after running.
- Publishing Flutter plugins using the old plugin format is no longer allowed.
- Better terminal color-detection. Use colors in terminals on Windows.
- Fix git folder names in cache, allowing for ssh-style git dependencies.
- Fix: Avoid precompilation of dependencies of global packages.

### What's new in Visual Studio Code
- Brings Dart **DevTools** directly into your IDE.
- Automatically updating your import statements as you move your files around.
- A new set of metadata for building your own tools.
- Color previews in the gutter will now show only the first preview on a line instead of the last.
- When using a new enough Flutter SDK, a small debounce delay when performing hot-reload has been removed
- A race condition that could cause a Flutter app run in Profile mode to hang on a white screen at startup has been resolved.
- A new setting `dart.enableSnippets` allows disabling the built-in Dart and Flutter code snippets.
- Updates to network tracking
- Improved Debug Discoverability
- Improved Handling of Unsupported Platforms
- Test File Creation
- CodeLens links will no longer jump around as you type on the line above.
- `pub get` no longer runs automatically for pubspecs modified inside `dot-folders` or the `build` folder.
- VS Code should no longer report "Timeout after 1000ms" when terminating a debug session.
- The limit on the number of `toString()` methods the debugger will call when inspecting values has been increased from 15 to 100.
- Quick-fixes like "Wrap with Column" now work correctly for multiline selections

### What's left in new version?
- Flutter web support is still in beta version.

###### So these are the listed changes in Flutter, Dart and VSCode. If you found anything else then let's know so we can update this post.