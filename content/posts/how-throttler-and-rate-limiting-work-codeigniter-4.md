---
title: How Throttler and Rate limiting work in codeigniter 4
date: 2020-07-19 03:15:00 +05:30
categories:
- php
- codeigniter4
tags:
- Codeigniter 4
- Rate limiting
- Throttler
- security
- featured
author: [pawneshwer]
description: How Throttler and Rate limiting work in codeigniter 4, security feature in codeigniter 4
comments: true
layout: post
draft: false
image: img/how-throttler-and-rate-limiting-work-codeigniter-4.png
---

import Gist from 'react-gist'

## How Throttler and Rate limiting work in codeigniter 4

### Throttler

**Throttler** is used to limit some actions for number of times for given time period.

for example, if you want to limit login attempt for 4 times in 1 minute, then you can use **Throttler**. And you don't need to write any logic to handle this. **Throttler** will do this internally.

this is how my LoginController will look like if i want to achieve this:

```php
<?php namespace App\Controllers;

class LoginController extends BaseController
{
	public function index()
	{
		return view('welcome_message');
	}

	//--------------------------------------------------------------------

  //this will be a post method sent from login form.
	public function doLogin()
	{
		$throttler = \Config\Services::throttler();
		$allowed = $throttler->check('login', 4, MINUTE);
    if($allowed) {
      //do your login process
    }
    else {
      //return error or do nothing according to your need.
    }
	}
}
```

And this will limit users to login 4 times in a minute.

### Explaination:

`$throttler->check('login', 4, MINUTE);` in this function

* `login` is identifier or you can say key.
* `4` is limit (how much operation we want to perform)
* `MINUTE` is constant in CI4 which is equivalent to `60`, and here `60` is seconds. So instead of `MINUTE` you can pass `60` or `45`.

### Rate Limiting

`Throttler` class does not provide system wide functionality to handle rate limiting, but we can achieve this by using [**Filters in Codeigniter 4**](https://www.youtube.com/watch?v=e8P0UxNKzDk). I have explained everything in this video. So checkit out to understand about [**Controller filters in Codeigniter 4**](https://www.youtube.com/watch?v=e8P0UxNKzDk).

So we will restrict requests from same IP to allow 1 request per 1 second. For this first of all create Filter. I will name my filter as `IPThrottler`. so create new file named `IPThrottler.php` in `app/Filters` directory of your **Codeigniter 4** project.

#### Code of `IPThrottler.php`

<Gist id='375e4b30ae088299a4d883d715ba3ea8' />

After creating filter class we have to create an aliases for our newly created filter. Open `/app/Config/Filters.php` file and declare aliase like below

```php
public $aliases = [
		...
		'ip_throttle' => \App\Filters\IPThrottler::class,
	];

public $globals = [
		'before' => [
			...
			'ip_throttle'
		],
		'after'  => [
      ...
		],
	];

public $methods = [
		'post' => ['CSRF', 'ip_throttle']
	];
```

After doing above chnages now try to open any page of your **Codeigniter 4** project and reload page again and again and you will notice that you will get error after reloading 4 times.