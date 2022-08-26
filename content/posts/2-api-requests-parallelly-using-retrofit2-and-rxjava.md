---
title: 2 API requests parallelly using Retrofit2 and RxJava
date: 2018-05-08 02:37:00 +05:30
categories:
- android
- retrofit2
tags:
- android
- retrofit2
- featured
author: [pawneshwer]
description: 2 API requests parallelly using Retrofit2 and RxJava (for parallel requests), 2nd api call will depend on result of 1st api call, pass parameters to 2nd api from
comments: true
layout: post
draft: false
image: img/2-api-requests-parallelly-using-retrofit2-and-rxjava.png
---

## 2 API requests parallelly using Retrofit2 and RxJava

If you want to call 2 or 3 api parallelly (for parallel requests), then you can use **RxJava** with **Retrofit2** and make this process simpler and easier.
We can use `zip()` operator of **Rxjava's** `Observable` class, this function accept 1, 2, or 3 `Observable` at same time, and then process them in serial. After processing all 3 `Observables` it combines 3 results and return them in `callback`.

### here is example in Java:

1. first of all get `observable` from `retrofit` interface class.

```java
Observable<ResponseType1> observable1 = retrofit.getApi_a();
Observable<ResponseType2> observable2 = retrofit.getApi_b();
Observable<ResponseType3> observable3 = retrofit.getApi_c();
```

2. Now Zip the `observables` to get a final observable.

```java
Observable<List<String>> result = 
Observable.zip(observable1.subscribeOn(Schedulers.io()), observable2.subscribeOn(Schedulers
            .io()), observable3.subscribeOn(Schedulers.io()), new Function3<ResponseType1, ResponseType2, ResponseType3, List<String>>() {
    @Override
    public List<String> apply(ResponseType1 type1, ResponseType2 type2, ResponseType3 type3) {
        List<String> list = new ArrayList();
        list.add(type1.data);
        list.add(type2.data);
        list.add(type3.data);
        return list;
    }
});
```

3. now subscribe on the result observable.

```java
result.observeOn(AndroidSchedulers.mainThread())
  .subscribeWith(new Observer<List<String>>() {
    @Override
    public void onSubscribe(Disposable d) {

    }

    @Override
    public void onNext(List<String> s) {
        Log.d(TAG, "s is the list with all the data");
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

And you can see we added all `results` in `ArrayList` and we got List of results in `callback` function. So the `onNext()` function will call at the end of last API call.

### here is example in Kotlin:

1. first of all get `observable` from **retrofit** interface class.

```kotlin
val observable1 = retrofit.getApi_a()
val observable2 = retrofit.getApi_b()
val observable3 = retrofit.getApi_c()
```

2. Now Zip the `observables` to get a final `observable`

```kotlin
val result = Observable.zip(
            observable1,
            observable2,
            observable3,
            BiFunction<ResponseType1, ResponseType2, ResponseType3, ArrayList<AddResponse>> { type1, type2, type3 ->
                arrayListOf(
                    type1.data,
                    type2.data,
                    type3.data
                )
            })
```

3. now subscribe on the result `observable`.

```kotlin
result.subscribeOn(Schedulers.io()).observeOn(AndroidSchedulers.mainThread())
  .subscribe({
    Log.d(TAG, "**it** is the list with all the data")
  }, {
    Log.e(TAG, e.getMessage())
  })
```