---
title: "Local OAUTH - Curl: (60) SSL certificate : Unable to get local issuer certificate"
date: 2015-03-28
published: true
tags: ['Xampp','tutorial','PHP']
canonical_url: false
description: "I've seen a couple of questions regarding the error Curl: (60) SSL certificate : Unable to get local issuer certificate and thought I would post some steps on the best way of setting it up locally."
---

I've seen a couple of questions regarding the error "Curl: (60) SSL certificate : Unable to get local issuer certificate" and thought I would post some steps on the best way of setting it up locally.

I use XAMPP as my local development environment, but this will work with WAMP or LAMP enviroments too.

(I know I should use Vagrant as my local environment, but I haven't got round to getting it up and running just yet).

Firstly, we need to download an SSL certificate to use for our local set up, to do this, head over to [Github](https://raw.githubusercontent.com/bagder/ca-bundle/master/ca-bundle.crt) and save the file. The best place to save it is in C:/xampp/apache/conf/ssl.crt. There is already a crt file here, but I have test that one and it doesn't work. You can either overwrite that one, or keep the name "ca-bundle.crt", I generally keep to the same name that way the other file is there in case you need it in the future.

Now you need to open up your php.ini file find the line "curl.cainfo" (if it isn't there) add/change it to... curl.cainfo = "C:xamppapacheconfssl.crtca-bundle.crt". Restart your Apache server and test it out using any Oauth API you are using or going to use for your projects.

This is the best and most permenant way to handle SSL within your local environment and I highly recommend it.

If you feel there is a better way or you need help, then please feel free to comment below.
