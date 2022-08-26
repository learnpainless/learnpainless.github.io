---
title: Flutter text to speech App Tutorial | flutter tts
date: 2020-07-30 02:37:00 +05:30
categories:
- Flutter
tags:
- flutter tts
- flutter text to speech
- flutter web
- google flutter
- featured
author: [pawneshwer]
description: Flutter text to speech App Tutorial flutter tts. Integrate to your project to speak texts on you app working on iOS, Android, and macOS. text to speech flutter.
comments: true
layout: post
draft: false
image: img/flutter-text-speech-app-tutorial-flutter-tts.png
---

## Flutter text to speech App Tutorial | flutter tts

A **flutter text to speech** plugin which is built in Swift for iOS and Java for Android.

It's Fully compatible on:

- [x] Android
- [x] iOS
- [x] macOS
- [x] Web

So if you are planning or developing **flutter text to speech** app then this will helpful for you.

### Features

- [x] Android, iOS, Web, & macOS
  - [x] speak
  - [x] stop
  - [x] get languages
  - [x] set language
  - [x] set speech rate
  - [x] set speech volume
  - [x] set speech pitch
  - [x] is language available
- [x] Android, iOS
  - [x] get voices
- [x] set voice
  - [x] speech marks (requires iOS 7+ and Android 26+)
  - [x] synthesize to file (requires iOS 13+)
- [x] iOS, Web
  - [x] pause
- [x] Android
  - [x] set Silence
- [x] iOS
  - [x] set shared instance
  - [x] set audio session category

### Implementation:

* add the dependency to your `pubspec.yaml` file.

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_tts:
```

* instantiate FlutterTts

```dart
final flutterTts = FlutterTts();
```
* To set shared audio instance (iOS only):

```dart
await flutterTts.setSharedInstance(true);
```
* To set audio [category and options](https://developer.apple.com/documentation/avfoundation/avaudiosession) (iOS only):

```dart
await flutterTts
        .setIosAudioCategory(IosTextToSpeechAudioCategory.playAndRecord, [
      IosTextToSpeechAudioCategoryOptions.allowBluetooth,
      IosTextToSpeechAudioCategoryOptions.allowBluetoothA2DP,
      IosTextToSpeechAudioCategoryOptions.mixWithOthers
    ]);
```
* After configuring above things you are ready to go, Now simply call `speak()` function and pass your word and it will speak your word. To stop **flutter tts** you can call `stop()` function from flutterTts instance and it will stop speaking.

#### Few optional things to do:

If you aim is not only speaking word on button click and stop speaking on button click. Then you can use following functions according to your need.

##### For example
`getLanguages()`, `setLanguage()`, `setSpeechRate()`, `setVolume()`, `setPitch()`, `isLanguageAvailable()`, `setSharedInstance()`

#### getLanguages

`getLanguages()` is used to get available supported languages on device for **flutter text to speech** plugin, it Returns a list of available languages.

#### setLanguage

`setLanguage()` is used to set language, for ex. `await flutterTts.setLanguage("en-US");`

#### and other functions

```dart
Future _speak() async{
    var result = await flutterTts.speak("Hello World");
    if (result == 1) setState(() => ttsState = TtsState.playing);
}

Future _stop() async{
    var result = await flutterTts.stop();
    if (result == 1) setState(() => ttsState = TtsState.stopped);
}

List<dynamic> languages = await flutterTts.getLanguages;

await flutterTts.setLanguage("en-US");

await flutterTts.setSpeechRate(1.0);

await flutterTts.setVolume(1.0);

await flutterTts.setPitch(1.0);

await flutterTts.isLanguageAvailable("en-US");

// iOS and Web only
await flutterTts.pause();

// iOS and Android only
await flutterTts.synthesizeToFile("Hello World", Platform.isAndroid ? "tts.wav" : "tts.caf");

// iOS only
await flutterTts.setSharedInstance(true);

// Android only
await flutterTts.setSilence(2);

await flutterTts.getEngines();
```

#### Few callbacks which are provided from platform

```dart
flutterTts.setStartHandler(() {
  setState(() {
    ttsState = TtsState.playing;
  });
});

flutterTts.setCompletionHandler(() {
  setState(() {
    ttsState = TtsState.stopped;
  });
});

flutterTts.setProgressHandler((String text, int startOffset, int endOffset, String word) {
  setState(() {
    _currentWord = word;
  });
});

flutterTts.setErrorHandler((msg) {
  setState(() {
    ttsState = TtsState.stopped;
  });
});

flutterTts.setCancelHandler((msg) {
  setState(() {
    ttsState = TtsState.stopped;
  });
});

// iOS and Web
flutterTts.setPauseHandler((msg) {
  setState(() {
    ttsState = TtsState.paused;
  });
});

flutterTts.setContinueHandler((msg) {
  setState(() {
    ttsState = TtsState.continued;
  });
});
```

###### If you wan't me to create dummy flutter text to speech app then comment below. I'll make demo app and share source code on Github.