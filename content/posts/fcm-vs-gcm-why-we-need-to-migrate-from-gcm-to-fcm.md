---
title: FCM Vs GCM? Why we need to migrate from GCM to FCM
date: 2016-10-08 07:34:00 Z
categories:
- android
tags:
- gcm
- fcm
- push notifications
layout: post
modified_time: 2016-10-08 07:34
author: [lpl]
description: cloud messaging,google messaging service,google push notification,google
  push notification service,firebase vs google,who is best gcm or fcm,why use fcm
keywords: cloud messaging,google messaging service,google push notification,google
  push notification service,firebase vs google,who is best gcm or fcm,why use fcm
comments: true
image: img/fcm-vs-gcm-why-we-need-to-migrate-from-gcm-to-fcm-min.png
---

## FCM Vs GCM? Why we need to migrate from GCM to FCM

1.  ### Why we need this FCM.

**Answer :** FCM (Firebase Cloud Messaging) is a improved version of the Google Cloud Messaging API & it have all features of GCM with some additional features also. Google recommending this, they wrote "Firebase is known for being cross platform, so FCM now makes a natural fit in the Firebase suite of features designed for Android, iOS, and mobile web". Google just announced that Google Cloud Messaging is now Firebase Cloud Messaging. See new [Release](https://developers.google.com/android/guides/releases#may_2016_-_v90) Source URL : [https://developers.google.com/cloud-messaging/faq](https://developers.google.com/cloud-messaging/faq)

1.  ### FCM over GCM.

**Answer :** FCM is the new version of GCM under the Firebase brand. It inherits GCM’s core infrastructure, with new SDKs to make Cloud Messaging development easier. Benefits of upgrading to FCM SDK include:

> Simpler client development. You no longer have to write your own registration or subscription retry logic. An out-of-the-box notification solution. You can use Firebase Notifications, a serverless notifications solution with a web console that lets anyone send notifications to target specific audiences based on Firebase Analytics insights.

Source URL : [https://firebase.google.com/support/faq/#gcm-fcm](https://firebase.google.com/support/faq/#gcm-fcm)

1.  ### Is GCM now depreciated. Are they going to stop all services & support of gcm.

**Answer :** Yes some features of GCM is already depreciated and now in coming days GCM are going to fully depreciated. See [here](https://developers.google.com/cloud-messaging/android/legacy-regid#registration-state-sync-handling) , But Google says We will continue to support the current version of GCM Android and iOS SDKs because we know a lot of developers are using GCM SDKs today to handle notifications, and client app upgrade takes time. But all new client-side features will be added to FCM SDKs only moving forward. You are strongly encouraged to upgrade to FCM SDKs. Source URL : [https://developers.google.com/cloud-messaging/faq](https://developers.google.com/cloud-messaging/faq)

1.  ### How to update my old applications from GCM to FCM.

**Answer :** Import your GCM project as a Firebase project -:

> In the Firebase console, select Import Google Project. Select your GCM project from the list of existing projects and select Add Firebase. In the Firebase welcome screen, select Add Firebase to your Android App. Provide your package name and SHA-1, and select Add App. A new google-services.json file for your Firebase app is downloaded. Select Continue and follow the detailed instructions for adding the Google Services plugin in Android Studio.

Source URL : [https://developers.google.com/cloud-messaging/android/android-migrate-fcm](https://developers.google.com/cloud-messaging/android/android-migrate-fcm)

1.  ### Can anyone show me the original link where google announced the FCM over GCM, because i did not found this originally posted google.

**Answer :** Please see the below picture :- And for more reading please visit the below mentioned URL. [![enter image description here](http://i.stack.imgur.com/TvyRi.jpg)](http://i.stack.imgur.com/TvyRi.jpg) Source URL : [https://developers.google.com/cloud-messaging/android/android-migrate-fcm](https://developers.google.com/cloud-messaging/android/android-migrate-fcm)
