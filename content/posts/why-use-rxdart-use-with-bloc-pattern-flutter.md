---
title: Why use RxDart and how to use with BLoC Pattern in Flutter?
date: 2020-08-05 06:37:00 +05:30
categories:
- Flutter
tags:
- RxDart
- BLoC Pattern
- Flutter
- featured
author: [pawneshwer]
description: Why use RxDart and how to use with BLoC Pattern in Flutter? Have you already heard about rxdart in flutter. rxdart flutter is way for Bloc pattern in flutter.
comments: true
layout: post
draft: false
image: img/why-use-rxdart-use-with-bloc-pattern-flutter.png
---

## Why use RxDart and how to use with BLoC Pattern in Flutter?
**RxDart** is implementation of Reactive programming in dart. If you are coming from android development world then you may work on **RxJava** + **RxAndroid**. And the same thing is ported to dart programming language. **RxDart** may be a reactive functional programming library for Dart language, supported ReactiveX. Dart already features a decent package to figure with Streams, but *RxDart* involves adds functionality on top of it. But now you would possibly be asking, *what’s Stream*?

### Streams and Sinks in RxDart
**Streams** represent flow of data and events, and what it’s important for? With **Streams**, you'll listen/observe changes in data and event, and even as well, affect what’s coming from the Stream with listeners. How it are often applied to Flutter? for instance , we've a Widget in Flutter called StreamBuilder that builds itself supported the newest snapshot of interaction with a Stream, and when there’s a replacement flow of data the Widget reload to reflect the new data on UI. And about Sinks? If we've an output of a data flow, we also need an input, that’s what Sinks is employed for, seems simple right? Now let’s see about the **BLoC pattern** and the way can we combine both concepts into an excellent Flutter app.

### BLoC Pattern
The **BLoC**(*Bussiness Logic Component*) Pattern was announced officially by **Paolo Soares** within the Dart Conference 2018. If you saw the announcement video, probably you realized that the initial proposal was to reuse the code associated with the business logic in other platforms, during this case, Angular Dart. Shortly what the pattern seeks for, is take all business logic code off the UI, and using it only within the BLoC classes. It brings to the project and code, independence of environment and platform, besides put the responsibilities within the correct component. And now our talk will make far more sense, because **BLoC** Pattern only relies on the utilization of Streams.
The Widgets send data/event to the BLoC class through Sink and are notified by Stream. See that there’s no business logic within the widget, meaning what happened in BLoC isn't the priority of UI. This architecture improves even easier tests, during which the business logic tests cases needed to be applied only to the BLoC classes.

#### Observable class
Observable allow us to send a notification to Widgets which is observing it then affect the flow of data. Observable class in RxDart extends from Stream, which means in some great things like:
- All methods defined on the Stream class present on Observable also.
- All Observable are often passed to any API that expects a Dart Stream as an input (including for instance StreamBuilder Widget).

#### PublishSubject class
This one is pretty simple. This Subject allows sending data, error and done events to the listener. Here it'll work with Sinks, which we were talking about before.

##### See example below
```dart
PublishSubject<int> subject = new PublishSubject<int>();

/*this listener below will print every integer added to the subject: 1, 2, 3, ...*/
subject.stream.listen(print);
subject.add(1);
subject.add(2);

/* but this listener below will print only the integer added after his initialization: 3, ...*/
subject.stream.listen(print);
subject.add(3);
```

#### BehaviorSubject class
This one is analogous to the PublishSubject. It also allows sending data, error and done events to the listener, but the newest item that has been added to the topic are going to be sent to any new listeners of the topic. But don’t you are worried, then, any new events are going to be appropriately sent to the listeners.

##### See example below
```dart
BehaviorSubject<int> subject = new BehaviorSubject<int>();
subject.stream.listen(print); // prints 1,2,3 
subject.add(1);
subject.add(2);
subject.add(3);

subject.stream.listen(print); // prints 3
```

#### ReplaySubject class
The ReplaySubject allow us the same sending data, error and done events to the listener. But with an important difference here. As items are added to the topic , the ReplaySubject will store them and when the stream is listened to, those recorded items are going to be emitted to the listener.

##### See example below
```dart
ReplaySubject<int> subject = new ReplaySubject<int>();

subject.add(1);
subject.add(2);
subject.add(3);

subject.stream.listen(print); // prints 1, 2, 3
```

### How to start with RxDart?
So first of all, create a flutter project and import [rxdart](https://pub.dartlang.org/packages/rxdart) to your project.

##### See example below (code of main.dart)
```dart
import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _decrementCounter() {
    setState(() {
      _counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
      ),
      body: new Center(
        child: new Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Text('You have pushed the button this many times:',),
            new Text('$_counter', style: Theme.of(context).textTheme.display1),
          ],
        ),
      ),
      floatingActionButton: new Column(mainAxisAlignment: MainAxisAlignment.end, children: <Widget>[
        new Padding(padding: EdgeInsets.only(bottom: 10), child:
          new FloatingActionButton(
            onPressed: _incrementCounter,
            tooltip: 'Increment',
            child: new Icon(Icons.add),
          )
        ),
        new FloatingActionButton(
          onPressed: _decrementCounter,
          tooltip: 'Decrement',
          child: new Icon(Icons.remove),
        ),
      ])
    );
  }
}
```

As you'll see, this code implements the increment and decrement function, but still doesn’t apply the BLoC pattern or maybe Streams. This code works and it’s pretty simple, but if you took attention you’ll see that we've two logic business function within the UI code: increment and decrement. So imagine if this app was an enormous app that you simply was working hard, but now the need has been changed and therefore the increment must add two at time. does one accept as true with me (that during this case) a requirement changing within the business logic shouldn’t affect UI code, right? If yes, great! you bought it, that's the purpose to separate responsibilities.

##### Here the magic begins :)
Now let's apply Bloc pattern and separate our logic from UI.

##### See example below (code of counter_bloc.dart)
```dart
import 'package:rxdart/rxdart.dart';

class CounterBloc {

  int initialCount = 0; //if the data is not passed by paramether it initializes with 0
  BehaviorSubject<int> _subjectCounter;

  CounterBloc({this.initialCount}){
   _subjectCounter = new BehaviorSubject<int>.seeded(this.initialCount); //initializes the subject with element already
  }

  Observable<int> get counterObservable => _subjectCounter.stream; 

  void increment(){
    initialCount++;
    _subjectCounter.sink.add(initialCount);
  }

  void decrement(){
    initialCount--;
    _subjectCounter.sink.add(initialCount);
  }

  void dispose(){
    _subjectCounter.close();
  }
  
}
```

We created a new class called CounterBloc which imports the rxdart library. during this case, we'd like to receive the initialCount, that allow us to understand from which number our counter should begin. i select for this instance the BehaviorSubeject, then I initialized the topic with the info gone by parameter, in other words, when the Widget become a listener of the topic the primary value skilled the stream are going to be the initialCount which was set within the CounterBloc constructor.

#### Now we've four methods within the class:
- `increment()`: increment the initialCount and send to the topic listeners by Sink the new value.
- `decrement()`: decrement the initialCount and send to the topic listeners by Sink the new value.
- `dispose()`: close the opened subject.
- `counterObeservable()`: return an **Observable** of the topic , in other words, the thing which can be wont to notify the Widgets when changes happen within the Stream.

Now that we've the BLoC class created let’s see integrating it with the UI.

##### See example below (code of main.dart)
```dart
import 'package:flutter/material.dart';
import 'package:bloc_example/bloc/CounterBloc.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  CounterBloc _counterBloc = new CounterBloc(initialCount: 0);

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
      ),
      body: new Center(
        child: new Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Text('You have pushed the button this many times:'),
            new StreamBuilder(stream: _counterBloc.counterObservable, builder: (context, AsyncSnapshot<int> snapshot){
              return new Text('${snapshot.data}', style: Theme.of(context).textTheme.display1);
            })
          ],
        ),
      ),
      floatingActionButton: new Column(mainAxisAlignment: MainAxisAlignment.end, children: <Widget>[
        new Padding(padding: EdgeInsets.only(bottom: 10), child:
          new FloatingActionButton(
            onPressed: _counterBloc.increment,
            tooltip: 'Increment',
            child: new Icon(Icons.add),
          )
        ),
        new FloatingActionButton(
          onPressed: _counterBloc.decrement,
          tooltip: 'Decrement',
          child: new Icon(Icons.remove),
        ),
      ])
    );
  }

  @override
  void dispose() {
    _counterBloc.dispose();
    super.dispose();
  }
  
}
```

#### We changed some few things within the UI:
- Now we initialize the `CounterBloc` with `initialCount = 0`.
- Then we removed the increment and decrement methods. Those method implementations aren't the responsibility of UI anymore.
- When the both FloatingActionButton is clicked, it calls the correspondent method within the `CounterBloc`.
- Now we use StreamBuilder to point out our data on the screen. We called StreamBuilder passing as Stream our counterObservable method available by the `CounterBloc` class, and that we call the builder which must affect the info which comes from the Strem and return the acceptable Widget.

###### This way we can separate our logic from UI, so that we can reuse our logic in other UI without any changes.