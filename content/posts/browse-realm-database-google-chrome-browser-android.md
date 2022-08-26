---
title: Browse Realm database in Google chrome browser
date: 2018-06-19 15:34:00 +05:30
categories:
- android
- realm
tags:
- database
- realm
author: [pawneshwer]
description: realm broswer for android in google chrome,WickeDev's stetho-realm latest
  version realm 5.3.0 and higher version supported,stetho-realm for realm latest version
  support
keywords: realm broswer for android in google chrome, stetho-realm latest version
  realm 5.3.0 and higher version supported,stetho-realm for realm latest version support
comments: true
layout: post
image: img/browse-realm-database-google-chrome-browser-android-min.png
---

## Browse Realm database in Google chrome browser

Hello all,
If you are using **Realm** as a Database system for your mobile app then its too hard to check if you have correctly inserted data or not, In **SQLite** database we have many apps available on play-store in which you can look into schema and data of your app's local db. But in case of Realm there is no app available on play-store in which you can check schema and data of your **Realm database**.

Facebook developed a plugin for android app named as "**Stetho**", which is used to read SQLite database of your mobile on "**Google Chrome browser**" using USB debugging. But there is no official support for Realm database in **Stetho**.
So someone developed a plugin for "**Stetho**" named as "**Stetho-Realm**" in which you can browse your Realm database's schema and data. You need to setup **Stetho** and **Stetho-Realm** plugin into your app and you are good to go.

to setup **Stetho-Realm** into your project follow these steps:

in your project's main **build.gradle** file add these lines under allprojects -> repositories

```xml

maven { url 'https://github.com/WickeDev/stetho-realm/raw/master/maven-repo' }

```

so your **build.gradle** file will look like below screenshot.

[Project level build.gradle file (Image)](img/project-build.gradle.PNG)

now in you app module's build.gradle file add these dependencies

```xml

implementation 'com.facebook.stetho:stetho:1.5.0'
implementation 'com.uphyca:stetho_realm:2.3.0'

```

and sync your project.

Now create new class which will extend Application class, if you already have that class which extends Application then goto onCreate() method of that class and

```java
//To initialize Realm.
Realm.init(this);

//To initialize Stetho and Stetho-Realm.
Stetho.initialize(
	Stetho.newInitializerBuilder(this)
		.enableDumpapp(Stetho.defaultDumperPluginsProvider(this))
		.enableWebKitInspector(
			RealmInspectorModulesProvider.builder(this)
				.withDeleteIfMigrationNeeded(true) //if there is any changes in database schema then rebuild bd.
				.withMetaTables() //extract table meta data
				.withLimit(10000) //by default limit of data id 250, but you can increase with this
				.build()
			)
		.build());

```
						
Now run your app on mobile or Emulator, after successfully running your app open chrome browser and in new tab enter this web address.

[chrome://inspect](chrome://inspect)

and you will see your **device/emulator** there as shown in below screenshot.

[Inspact devices list (Image)](img/inspact.PNG)

Now you will see you Application package name with "**inspect**" link as shown above

just click on that click and it will open new chrome window, wait till it load. By default it will open "**Elements**" tab.AS shown below.

[Elements tab in inspact window (Image)](img/inspact2.PNG)

now click on **resources** tab and there you will see "**Web SQL**" open that and you will see your **.realm** file and you can check its schema and data.

[Web SQL with Realm Database (Image)](img/inspact3.PNG)

## Tested this with following versions:
### Realm version 5.3.0
### Facebook Stetho version 1.5.0
### Stetho Realm version 2.3.0 (WickeDev's fork)
