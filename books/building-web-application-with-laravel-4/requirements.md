---
layout: book
title:
---

#### Terminal
We will do quite a lot of thing in terminal, make sure you familiar with terminal.

A dollar($) sign indicate anything following is a shell command. You only copy and paste anything of the dollar sign.

```
$ composer create-project laravel/laravel MyApplicationName
```

#### GIT

#### Programming Skills
Expected you to know basic array, because in PHP we are basically have two kind of array, numerical indexed array and associative array.

```php
$indexedArray = ['apple', 'orange', 'banana', 'strawberry'];

echo $indexedArray[1]; // print out 'orange'

$associativeArray = [
  'name' => 'John',
  'age'  => '18',
  'gender' => 'female'
];

echo $associativeArray['gender']; // print out 'female'
```


#### PHP
PHP is a super flexible programming language that support several programming paradigm or style. But in Laravel we will mainly code in object-oriented style. If you are a beginner of object-oriented programming, you are good, because learning object-oriented using framework will definitely strengthen your object-oriented skills.

```
<?php

class HomeController extends Controller {

  public function index()
  {
    return 'Hello, you are in home';
  }
}

```



#### HTML
You use HTML to present your output from PHP to web browser.

You use HTML to prepare a form (input field) to send HTTP request to your php code for storing or processing.



#### CSS
You use CSS to give better visual for your UI. Animation as well.



#### JS
HTML and CSS could not do front-end logical thinking such as pointing out an invalid email address before sending to server. So you can use javascript to handle it for you.