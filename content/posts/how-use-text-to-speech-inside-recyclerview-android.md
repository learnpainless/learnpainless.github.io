---
title: How to use Text To Speech inside RecyclerView in Android
date: 2020-07-28 02:37:00 +05:30
categories:
- android
tags:
- Text To Speech
- RecyclerView
- android
author: [pawneshwer]
description: How to use Text To Speech inside RecyclerView in Android, Speak any word using TTS in android. Convert text into voice in android using Text to Speech service
comments: true
layout: post
draft: false
image: img/how-use-text-to-speech-inside-recyclerview-android.png
---

import Gist from 'react-gist'

## How to use Text To Speech inside RecyclerView in Android

### What is TTS (Text To Speech)?

TSS or Text To Speech is library provided by Android, which is used to convert any word into voice. This means it can speak any word or phrase provided to this library.

So if you are creating Android Application which require some speaking words then you don't need to record voice and play inside your application. You can simply pass your words to this library and it will do rest of the things.

We will use android.speech.tts.TextToSpeech library to convert our Strings into voice.

### Overview to TTS

* First step is to create instance of TextToSpeech.
* Pass context to TextToSpeech's contructor and Callback (which will be called when TextToSpeech will ready).
* There is 3rd optional parameter which is "engine" which is used to pass custom TextToSpeech engine. (eg. Samsung TTS etc.).
* After creating instance call speak() function from instance and it will speak the provided string.
* You can also specify language of your text to TextToSpeech library.

### Example Project:

#### TextToSpeech inside RecyclerView:

##### Code of MainActivity.kt

<Gist id='28775e41ba5560d3bb7b9d72549fbbfc' />

##### Code of activity_main.xml

<Gist id='793d8ff0792423d2525017b37120997f' />

##### Code of SpeechAdapter.kt

<Gist id='fd0ee483d4cf79ceb457055b48c0455d' />

##### Code of adapter_item_speech.xml

<Gist id='5285af9e13de2a62794010fca8c1749b' />

### Full Source Code

[SpeechTextRecyclerView on Github](https://github.com/learnpainless/SpeechTextRecyclerView)

###### Star this github repository and Share with your friends as well.