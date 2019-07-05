---
title: "Windows version of Linux's $(pwd)"
date: "2019-07-04"
---

Tonight I was playing around with Docker and I wanted to use Node to install my packages to my local environment. I found a command on [Chris Fidao's Laravel Vessel](https://vessel.shippingdocker.com/docs/common-issues/#catch22) website which looked like...

docker run --rm -it -v $(pwd):/opt -w /opt shippingdocker/php-composer:latest composer create-project laravel/laravel my-app

I modified it for use with npm to...

docker run --rm -it -v $(pwd):/opt -w /opt michaelbrooks/node:latest npm i vuepress

I ran the command and got the following...

docker: Error response from daemon: create $(pwd): "$(pwd)" includes invalid characters for a local volume name, only "\[a-zA-Z0-9\]\[a-zA-Z0-9\_.-\]"
 are allowed. If you intended to pass a host directory, use absolute path.
See 'docker run --help'.

A quick search and I found I could replace $(pwd) with %cd% which looked exactly like this...

docker run --rm -it -v %cd%:/opt -w /opt michaelbrooks/node npm i vuepress
