---
layout: book
title: Many Principles
date: 2014-05-21 15:20:40
---

## Generic Programming Principles

#### DRY: Don't Repeat Yourself

When you find it you are coding same thing twice, you are not DRY, and probably went wrong or missing.

When you try to <kbd>&#x2303;</kbd><kbd>C</kbd>, <kbd>&#x2303;</kbd><kbd>V</kbd> or <kbd>&#x2303;</kbd><kbd>X</kbd> more than two continuos line of codes into another place, you are probably violating DRY principle.

But that is not always true, sometime you have no choice. We knew it.

[![i_know](assets/img/i_know.gif)](assets/img/i_know.gif)

#### SoC: Seperation of Concern

You knew that in real world, we never only use one kind of computer language to make a complete GUI software or website.

Let take a website as example, we have HTML, JS, CSS or more. Make sure you only let them do only the thing they need to be. Never mixed one thing to another for the reason of "faster" deliver to your client or lecture.


#### CI: Continuous Integration

#### TDD: Test Driven Development

#### BDD: Behaviour Driven Development

#### Maintainabilty


#### Modularity

#### Lego

> Treat code like Lego. Break code into the smallest little blocks possible.
<cite>@csswizardry (via @stubbornella) #btconf</cite>

Do one thing at once, only.

Even the function only return you a value.

{% highlight php %}
<?php
function getFullName($user)
{
  return $user->first_name . ' ' . $user->last_name;
}
{% endhighlight %}

#### Scalability

#### Abstract when possible

#### Always, Refactor
>This is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.

>Its heart is a series of small behavior preserving transformations. Each transformation (called a “refactoring”) does little, but a sequence of transformations can produce a significant restructuring. Since each refactoring is small, it’s less likely to go wrong. The system is kept fully working after each small refactoring, reducing the chances that a system can get seriously broken during the restructuring.
<cite>[http://refactoring.com/](http://refactoring.com/)</cite>

## Web Development Principles


#### SoC again
- HTML - Markup you content only
- CSS - Structure/Layout, Presention, Visual Behavior
- JS - Behavior, Add-ons

You should come out with the HTML first before the other two, and make sure your HTML will work even CSS and JS is not there, this is a best practice that make sure you don't use and hack to archieve a result. "Hacking" is a very bad practice.

Do not make Javascript as **must-have** to use your apps. Let Javascript as a add-ons enhancement for your apps.

#### REST: Representational State Transfer

We heavily integrate proper english term into development. There is no point of creating a new fancy term for us.

GET, POST, PUT, DELETE, OPTIONS

#### API: Application Programming Interface

You need to have the mindset of API driven development, especially developing a server application. A server application like might not only serve the web platform, it could serve your native desktop application or native mobile application.

Therefore to talk to each other, the best way is to develop a consistence API, where the accessing/using method will be the same and the expected result will be compatible for few version of your API version.

Think of you are not coding directly for user, you code for other developers that will use your code to make the real apps for user. Most of the time you will be both of two roles. Coding directly for user make you apps extremely difficult to debug and maintain. Whilst you now make it into three layer, you are abstracting the jobs, this will just make your life much more easier in later days.
