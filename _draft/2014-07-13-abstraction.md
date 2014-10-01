---
layout: post
title: Abstraction
date: 2014-07-13 19:18:46
category: code
tags: []
---

Abstraction is about decoupling things.

Making things less depend on each other.

Layering things, and make sure the layer is exhangeable with other.

## Depend upon abstraction not concretion

For example,
Eloquent and Fluent are both ORM, instead of using either one directly, we create an interface/abstract/contract class and use this class in our apps.
This is to ensure we can switch between different ORM easily, or change the logic easily.