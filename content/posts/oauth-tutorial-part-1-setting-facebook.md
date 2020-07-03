---
title: Oauth Tutorial - Part 1 - Setting up Facebook
date: 2015-04-05
published: true
tags: ['oauth','Facebook','Laravel','PHP','tutorial']
canonical_url: false
description: "Last week I promised that I will be creating some tutorials regarding Oauth and Laravel's Socialite plugin. Today, we will start with setting up each website and creating an app on these sites to accept our OAuth requests."
---

Last week I promised that I will be creating some tutorials regarding Oauth and Laravel's Socialite plugin. Today, we will start with setting up each website and creating an app on these sites to accept our OAuth requests.

Firstly, we will start with Facebook, then head on over to Twitter and Google+. I am using these as my website won't be for developers, it will be for everyday people so I don't expect them to have a Github or Linkedin account. If however, I want to implement these at a later date, I will post the setup of them here for you to see.

Start off by going to [developers.facebook.com/apps/](https://developers.facebook.com/apps/) and click on the "+ Add a New App" button. We then get a sort of pop up window which will ask us to select our desired target. We want the website, so click on that to get started.

Within the next page, it will ask us to search for an existing app or create a new one. For the purpose of our tutorial, we will create a new app called "FooBar". A type that in and select "Create New Facebook App ID". This is not a test version of another app (we will come to that in a bit) so we want to leave that as it is and select a category for our app. I'll just select "Entertainment", but you can select what ever's right for you at the time. Click on "Create App ID" and it will bring you to a nice setup page.

We can ignore the SDK code part as we won't be needing that. Tell Facebook about your website, I'm going to stick with foobar and give the URL https://foobar.com and the mobile site will be the same because we won't have m. when our site is going to be responsive (won't it?). After you have type in the URL to your website, click on the "Next" button and it will give you a "Next Steps" section, we can ignore this for now and click on "Skip Quick Start", this will then send us over to our dashboard.

You can browse your dashboard, but for this tutorial, that is pretty much it. Keep in mind that you will need your "App ID" and "App Secret" for use in the future.

Check out my previous tutorial on using [OAuth with localhost when needing](/local-oauth-curl-60-ssl-certificate-unable-get-local-issuer-certificate) and SSL Certificate Please also let me know what you think in the comments and if this tutorial has helped you in any way, please also let me know how you think I could improve on it for future posts.
