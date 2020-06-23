---
title: ReactPHP and Symfony
date: 2016-07-18
published: true
tags: ['ReactPHP','Symfony','PHP']
canonical_url: false
description: "I started listening to a great Podcast series which talks a lot about different PHP and server technologies and on one of the later episodes, they talk about ReactPHP."
---

I started listening to a [great Podcast series](https://phptownhall.com/episode-49-async/) which talks a lot about different PHP and server technologies and on one of the later episodes, they talk about [ReactPHP](https://reactphp.org/).

[ReactPHP](https://reactphp.org/) is a great asynchronous solution for PHP and it offers non-blocking async which is fantastic and can be easily compared to NodeJS (although we won't be doing that here).

I have now started exploring the technology and what it is capable of, one of my great project ideas is to have it listen on [Twitter's Streaming API](https://dev.twitter.com/streaming/overview) and post coordinates of a certain search query. As it picks up new posts, it will cache them on a database server for historical reasons. This would be a great way to visualise certain stories or World events as they happen.

To start this project off, I decided to not only use [ReactPHP](https://reactphp.org/), but also to merge it in with the [Symfony framework](https://symfony.com/). This means, I can use ReactPHP within an MVC framework and have my code better organised.

A quick Google pointed me to this article [Super Speed Symfony](https://gnugat.github.io/2016/04/13/super-speed-sf-react-php.html). I followed his quick tutorial on getting these technologies working alongside one another (he had a mistake in his code which I quickly fixed) and now I was ready to get to work.

The barebones framework can be found on my Github for your personal use and exploration [here](https://github.com/Michael-Brooks/react-symfony) as the original poster had not thought of doing this himself. I thought I would take the lead so others can use it and help in the future.

If you clone my repo, you will be able to run in the project root...

``` php web/app.php ```

This will start up a web server running [ReactPHP](https://reactphp.org) on the web address 127.0.0.1:1337. You can see this code within app/AppKernal.php where it converts React's requests into a Symfony request so you can carry on using Symfony as needed. You should then be able to constantly listen in on requests and create some pretty nice async apps.

---

Some of you may be wondering why I didn't try going down the Laravel route as I'm a huge fan of that framework. However, I felt like it wouldn't fit in with how Laravel deals with Http requests, and it would be a lot more straight forward to implement with Symfony and their Http requests instead. Although I could be wrong and would love for someone to prove it if I am.

---

This is it for my post on this subject for now, but when I have a more solid app, I will be posting it here along with any tutorials to help others out. I hope this has helped others and I would love it if you shared your ReactPHP projects.
