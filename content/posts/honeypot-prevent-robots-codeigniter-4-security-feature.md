---
title: How to use Honeypot to prevent from robots in Codeigniter 4 | Security Feature
date: 2020-06-16 03:15:00 +05:30
categories:
- php
- codeigniter4
tags:
- Codeigniter 4
- honeypot
- bot protection
- security
- featured
author: [pawneshwer]
description: How to enable honeypot class in codeigniter 4, honeypot codeigniter 4, codeigniter 4 security, codeigniter 4 honeypot, codeigniter 4 bot protection
keywords: How to enable honeypot class in codeigniter 4, honeypot codeigniter 4, codeigniter 4 security, codeigniter 4 honeypot, codeigniter 4 bot protection
comments: true
layout: post
draft: false
image: img/honeypot-prevent-robots-codeigniter-4-security-feature.png
---

import Gist from 'react-gist'

Honeypot Class in Codeigniter 4
-------------------------------

Honeypot Class makes it possible to determine when Bot make request using form in Codeigniter 4 project. This can be enabled inside "**_Application\\Config\\Filters.php_**" file of CI4 project. By attaching a hidden field in every form inside your CI4 project automatically. This hidden field is not visible to users but accessible to Bots. So when ever this field's value is not empty then CI4 throw "**HoneypotException**" and crash the webpage to abort request made by Bot and prevents your CI4 project from spam.

How to enable Honeypot in Codeigniter 4
---------------------------------------

To enable Honeypot class in your CI4 project you have to modify "**app/Config/Filters.php**" file. Just uncomment '**honeypot**' options from "**$globals**" array. Do the following change in this file. (_If you don't understand how to do this then you can watch our Youtube video, Video link is in the end of this post_).

<Gist id='804db234b6e06c8dbcfd59a1f90f1cc9' />

After making the above change your CI4 project is ready to protect from spam. You don't have to do anything with this. But you can customize settings according to your need which is totally optional.

Configuring Honeypot
--------------------

Honeypot can be customized. The fields below can be set either in app/Config/Honeypot.php or in .env.

*   **hidden** - _true|false_ to control visibility of the honeypot field; default is true
*   **label** - HTML label for the honeypot field, default is ‘_Fill This Field_’
*   **name** - name of the HTML form field used for the template; default is ‘_honeypot_’
*   **template** - form field template used for the honeypot; default is ‘_{label}_’

Video tutorial of Honeypot class
--------------------------------

`youtube:https://www.youtube.com/embed/zo1GT8DSEdo`

#### Github project link

You can get full source code of this project from github [here](https://github.com/prolongservices/Codeigniter-4)