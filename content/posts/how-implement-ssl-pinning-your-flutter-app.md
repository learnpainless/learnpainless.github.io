---
title: How to implement SSL Pinning in your Flutter App
date: 2020-08-01T06:37:00+05:30
categories:
- Flutter
tags:
- SSL-pinning
- security
- featured
author: [pawneshwer]
description: How to implement SSL Pinning in your Flutter App, prevent your flutter app from hijack attack by hackers by using this security feature to match certificates
comments: true
layout: post
draft: false
image: img/how-implement-ssl-pinning-your-flutter-app.png
---

## How to implement SSL Pinning in your Flutter App

### What is SSL-pinning?

**SSL-pinning** allows you to pin a server’s key or a public key to the client. one among the foremost efficient ways to realize this in mobile apps is embedding a trusted **SSL certificate**. this manner we ignore the system storage and may manually specify which certificate is trustworthy. This method comes in handy when it's necessary to use a self-signed certificate without having the top user install it.

### Why SSL-pinning needed?

The *HTTP protocol* was susceptible to this attack to start with, therefore a secure version of the protocol was created so as to repair this issue. It uses **SSL** or **TLS** to encrypt the connection between a client and a server. the server sends its certificate to the client for identification. The **X.509 certificate** may be a file that contains the subsequent information:

- Name
- Public key
- Serial number
- Signature algorithm
- Digital signature

#### The identification process requires that:

- The server name must precisely match the name given within the certificate, otherwise the certificate could also be considered compromised.
- The SSL certificate chain are often traced from a personal SSL certificate through intermediate certificates to the basis certificate of a trusted certificate authority.

#### Let us check out the second point more closely.

It would be impossible to put in each certificate separately, there are too many of them. Thus, the subsequent certificate management system comes into play. Since certificates are basically server identities, they're doing not appear on their own — they are issued by certificate authorities. The CA certificates, also referred to as root certificates, play the foremost significant role. CAs are publicly available and their keys are trusted by default. they're usually embedded within the OS and obtain updated alongside with it. Certificates operate during a strict hierarchy. CA certificates can sign other certificates which successively sign next-level certificates etc. If a certificate is compromised, it are often revoked along side its child certificates.
It seems fairly secure but what if the user compromises the certificate storage on their system by installing the intruder’s certificate?

### How to implement SSL-pinning in flutter?

#### Method 1:

Create your client with a `SecurityContext` with no trusted roots to force the bad certificate callback, even for a good certificate.

```dart
SecurityContext(withTrustedRoots: false);
```

In the bad certificate callback, parse the **DER encoded certificate** using the [asn1lib package](https://pub.dartlang.org/packages/asn1lib). 

##### For example:

```dart
ASN1Parser p = ASN1Parser(der);
ASN1Sequence signedCert = p.nextObject() as ASN1Sequence;
ASN1Sequence cert = signedCert.elements[0] as ASN1Sequence;
ASN1Sequence pubKeyElement = cert.elements[6] as ASN1Sequence;

ASN1BitString pubKeyBits = pubKeyElement.elements[1] as ASN1BitString;

List<int> encodedPubKey = pubKeyBits.stringValue;
// could stop here and compare the encoded key parts, or...

// parse them into their modulus/exponent parts, and test those
// (assumes RSA public key)
ASN1Parser rsaParser = ASN1Parser(encodedPubKey);
ASN1Sequence keySeq = rsaParser.nextObject() as ASN1Sequence;
ASN1Integer modulus = keySeq.elements[0] as ASN1Integer;
ASN1Integer exponent = keySeq.elements[1] as ASN1Integer;

print(modulus.valueAsBigInteger);
print(exponent);
```

#### Method 2:

You can use [ssl_pinning_plugin](https://pub.dev/packages/ssl_pinning_plugin) library. This will Check the equality between the known **SHA-1** or **SHA-256** fingerprint and the **SHA-1** or **SHA-256** of the target server.

##### example code.

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:ssl_pinning_plugin/ssl_pinning_plugin.dart';

void main() => runApp(new MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _PiningSslData {
  String serverURL = '';
  Map<String, String> headerHttp = new Map();
  String allowedSHAFingerprint = '';
  int timeout = 0;
  SHA sha;
}

class _MyAppState extends State<MyApp> {
  final GlobalKey<FormState> _formKey = new GlobalKey<FormState>();
  _PiningSslData _data = new _PiningSslData();
  BuildContext scaffoldContext;

  @override
  initState() {
    super.initState();
  }

  // Platform messages are asynchronous, so we initialize in an async method.
  check(String url, String fingerprint, SHA sha, Map<String, String> headerHttp, int timeout) async {

    List<String> allowedShA1FingerprintList = new List();
    allowedShA1FingerprintList.add(fingerprint);

    try {
      // Platform messages may fail, so we use a try/catch PlatformException.
      String checkMsg = await SslPinningPlugin.check(
          serverURL: url,
          headerHttp: headerHttp,
          sha: sha,
          allowedSHAFingerprints: allowedShA1FingerprintList,
          timeout: timeout
      );

      // If the widget was removed from the tree while the asynchronous platform
      // message was in flight, we want to discard the reply rather than calling
      // setState to update our non-existent appearance.
      if (!mounted)
        return;

      Scaffold.of(scaffoldContext).showSnackBar(
        new SnackBar(
          content: new Text(checkMsg),
          duration: Duration(seconds: 1),
          backgroundColor: Colors.green,
        ),

      );
    }catch (e){
      Scaffold.of(scaffoldContext).showSnackBar(
        new SnackBar(
          content: new Text(e.toString()),
          duration: Duration(seconds: 1),
          backgroundColor: Colors.red,
        ),

      );
    }

  }

  void submit() {
    // First validate form.
    if (_formKey.currentState.validate()) {
      _formKey.currentState.save(); // Save our form now.

      this.check(_data.serverURL, _data.allowedSHAFingerprint, _data.sha, _data.headerHttp, _data.timeout);
    }
  }

  @override
  Widget build(BuildContext context) {
    this.scaffoldContext = context;
    return new MaterialApp(
      home: new Scaffold(
          appBar: new AppBar(
            title: new Text('Ssl Pinning Plugin'),
          ),
          body:
          new Builder(builder: (BuildContext context) {
            this.scaffoldContext = context;
            return Container(
                padding: EdgeInsets.all(20.0),
                child: Form(
                  key: this._formKey,
                  child: new ListView(
                    children: <Widget>[
                      TextFormField(
                          keyboardType: TextInputType.url,
                          initialValue: "https://flutter.dev/",
                          decoration: InputDecoration(
                              hintText: 'https://yourdomain.com',
                              labelText: 'URL',
                          ),
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Please enter some url';
                            }
                            return null;
                          },
                          onSaved: (String value) {
                            this._data.serverURL = value;
                          }
                      ),
                      DropdownButton(
                        items: [DropdownMenuItem(child: Text(SHA.SHA1.toString()), value: SHA.SHA1,), DropdownMenuItem(child: Text(SHA.SHA256.toString()), value: SHA.SHA256,)],
                        value: _data.sha,
                        isExpanded: true,
                        onChanged: (SHA val){
                          setState(() {
                            this._data.sha = val;
                          });
                        },
                      ),
                      TextFormField(
                          keyboardType: TextInputType.text,
                          initialValue: "AC 67 AC 02 F7 5A 03 74 6B B5 08 3C 6B 9B 29 97 78 92 72 2A",
                          decoration: InputDecoration(
                              hintText: 'OO OO OO OO OO OO OO OO OO OO',
                              labelText: 'Fingerprint'
                          ),
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Please enter some fingerprint';
                            }
                            return null;
                          },
                          onSaved: (String value) {
                            this._data.allowedSHAFingerprint = value;
                          }
                      ),
                      TextFormField(
                          keyboardType: TextInputType.number,
                          initialValue: '60',
                          decoration: InputDecoration(
                              hintText: '60',
                              labelText: 'Timeout'
                          ),
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Please enter some timeout';
                            }
                            return null;
                          },
                          onSaved: (String value) {
                            this._data.timeout = int.parse(value);
                          }
                      ),
                      Container(
                        child: RaisedButton(
                          child: Text(
                            'Check',
                            style: TextStyle(
                                color: Colors.white
                            ),
                          ),
                          onPressed: () => submit(),
                          color: Colors.blue,
                        ),
                        margin: EdgeInsets.only(
                            top: 20.0
                        ),
                      )
                    ],
                  ),
                )
            );
          })
      ),
    );
  }
}
```

###### Main purpose of using SSL-pinning is to prevent your flutter app from hijack attack, and keep your app secure from hackers.