---
title: 2 API requests serially using Retrofit2 and RxJava
date: 2018-05-08 02:37:00 +05:30
categories:
- android
- retrofit2
tags:
- android
- retrofit2
- featured
author: [pawneshwer]
description: 2 API requests serially using Retrofit2 and RxJava (one after another), 2nd api call will depend on result of 1st api call, pass parameters to 2nd api from 1st
comments: true
layout: post
draft: false
image: img/2-api-requests-serially-using-retrofit2-and-rxjava.png
---

## 2 API requests serially using Retrofit2 and RxJava

If you want to call 2 or 3 api serially (one after another), then you can use **RxJava** with **Retrofit2** and make this process simpler and easier.
We can use `flatMap()` function of **Rxjava's** `Observable` class, this function execute current `Observable` at same time, and then process them in serial. After processing all 3 `Observables` we can combines these 3 results and return them in `callback`.

### here is example in Java:

This is simple chaining of requests.

```java
List<String> result = new ArrayList<>();
Disposable disposable = retrofit.getApi_a()
  .subscribeOn(Schedulers.io())
  .flatMap((Function<ResponseType1, ObservableSource<ResponseType2>>) response1 -> {
    result.add(response1.data);
    return retrofit.getApi_b();
  })
  .flatMap((Function<ResponseType2, ObservableSource<ResponseType3>>) response2 -> {
      result.add(response2.data);
      return retrofit.getApi_c();
  })
  .map(response3 -> {
      result.add(response3.data);
      return response3;
  })
  .observeOn(AndroidSchedulers.mainThread())
  .subscribeWith(new DisposableObserver<Response3>() {

      @Override
      public void onNext(Response3 response3) {
          Log.d(TAG, "result variable will have all the data");
      }

      @Override
      public void onError(Throwable e) {
          Log.e(TAG, e.getMessage());
      }

      @Override
      public void onComplete() {

      }
  });
```

And you can see we added all `result` in `ArrayList` and we got List of result in `callback` function. So the `onNext()` function will call at the end of last API call.

### here is example in Kotlin:

1. first of all get `observable` from **retrofit** interface class.

```kotlin
val result = new ArrayList<>()
val disposable = retrofit.getApi_a()
  .subscribeOn(Schedulers.io())
  .flatMap { 
    result.add(response1.data)
    retrofit.getApi_b() 
  }
  .flatMap { 
    result.add(response2.data)
    retrofit.getApi_c() 
  }
  .map { 
    result.add(response3.data)
    response3
  }
  .observeOn(AndroidSchedulers.mainThread())
  .subscribe({
    Log.d(TAG, "**result** is the list with all the data")
  }, {
    Log.e(TAG, e.getMessage())
  })
```
