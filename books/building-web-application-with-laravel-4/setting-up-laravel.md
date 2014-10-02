---
layout: book
title:
---

#### Composer
A package manager for downloading a copy Laravel with all its dependencies.

First, install `composer` in your system, before you get a copy of Laravel.

<https://getcomposer.org/download/>

`composer` can be install locally or globally in your system. It is recommended to install `composer` globally therefore you no need to type `./composer.phar` everytime you use it.


#### Homestead
Before Homestead, to setup a local Laravel development environment we have to run a web server, install PHP, install a database management system and many other more application to start Laravel application. Although there are web stack like MAMP, LAMP, and XAMPP that bundle everything for you that let you install with one click. But it sometime just don't work so well, as these kind of stack environment are definitely different from your real hosting server, I guaranteed.

So here come Homestead, a virtual machine, that run the latest Ubuntu server, with all the required server application pre-installed. It acks like real hosting server but within your computer. So you can SSH login to this computer like real server or FTP, GIT, or anything. It is like a dedicated server.

Homestead require latest version Vagrant and VirtualBox.
Download and setup these two softwares, before you can get Homestead started.

Vagrant: <https://www.vagrantup.com/downloads.html>

VirtualBox: <https://www.virtualbox.org/wiki/Downloads>

After installation

<http://laravel.com/docs/4.2/homestead>