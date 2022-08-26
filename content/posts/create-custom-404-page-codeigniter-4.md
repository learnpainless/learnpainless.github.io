---
title: How to create custom 404 page in Codeigniter 4
date: 2020-06-14 03:15:00 +05:30
categories:
- php
- codeigniter4
tags:
- Codeigniter 4
- custom 404
- error page
- featured
author: [pawneshwer]
description: Easy custom 404 page for Codeigniter 4, Advanced custom 404 page for Codeigniter 4, How to create custom 404 page in Codeigniter 4, set 404 page
keywords: Easy custom 404 page for Codeigniter 4, Advanced custom 404 page for Codeigniter 4, How to create custom 404 page in Codeigniter 4, set 404 page
comments: true
image: img/create-custom-404-page-codeigniter-4.png
layout: post
draft: false
---

import Gist from 'react-gist'

custom 404 page in Codeigniter 4
--------------------------------

In this tutorial, I will show you how you can create a fully customized 404 error page in **Codeignitor 4** (how to create a **_custom 404 error page in CodeIgniter 4_**). I will start by creating a controller and then proceed to set up routes.

Why 404 error not found
-----------------------

**404** not found is HTML error code indicating a special condition in which the connection between the server and the client is working correctly, but the server could not find the resource requested by the client.

The underlying causes of the error are many, but the normal process is the same in all cases. The server has received a request for a resource that does not exist on the server hosting PHP. A very common cause of this condition is broken links that point to pages or resources that have been removed (or taken down) by the website administrator. **CodeIgniter 4** displays a **_simple 404 error page_** whenever a user navigates to a broken link.

#### So lets start coding

create **_404.php_** file inside **_Views_** directory of your Codeigniter 4 project. And paste below code.

<Gist id='88fb6bb786bc598a4973d999c0f0c3f0' />

create or modify **_style.css_** inside "_**public/css**_" directory in Codeigniter 4 project, and paste below code:

<Gist id='d6e5e509aaab96431bdaf9de67e078e6' />

Download **[this](/shared/img/bg.jpg)** background image and paste into "_**public/img**_" directory in your codeigniter 4 project.

modify your **Routes.php** file inside "_**app/config**_" directory of your codeigniter 4 project. And copy code from below code starting from line number **22** to **24**.

<Gist id='0842a0d7c1ebbc6965e2afbde1b37837' />

That's it, Now your **_custom 404 not found page_** is ready. You will get output like below screenshot.

![custom 404 page in Codeigniter 4](img/create-custom-404-page-codeigniter-4.png)

**_custom 404 page in Codeigniter 4_**

You can easily customize it and make it more user friendly for the user.

You can also watch my video on Youtube about [**custom 404 page in Codeigniter 4**](https://www.youtube.com/watch?v=HLWlxiMH8zo)

`youtube:https://www.youtube.com/embed/HLWlxiMH8zo`

### The conclusion

In this small article, I have demonstrated a custom designed **_404 error page_** for your **Codeigniter 4** project. A **_custom 404 error page_** is an ideal way to retain visitors to the website and redirect them to the appropriate pages on the website. This greatly reduces the bounce rate of websites and ensures that visitors are interested in your website. If you have further questions and questions about creating **_custom 404 pages for Codeigniter 4_** projects, post them in the comments below.