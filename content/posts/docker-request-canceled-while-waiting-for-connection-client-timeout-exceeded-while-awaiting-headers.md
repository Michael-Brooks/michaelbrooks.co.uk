---
title: "Docker: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)"
date: 2019-07-05
published: true
tags: ['ReactPHP','Symfony','PHP']
canonical_url: false
description: How to overcome this annoying error.
---

This error has had a lot of people stumped by the looks of their [issues on GitHub](https://github.com/docker/kitematic/issues). I think the error stems from downloading Docker through their main landing page, I tried a lot to fix the issue and with no luck. This included switching the DNS over to 8.8.8.8 which has been suggested in the past and worked.

My answer to the issue is don't use the main landing page to install Docker, instead you want to [download it from here](https://docs.docker.com/install/#supported-platforms) and then everything should work as normal.

If you have any questions, or feel it hasn't worked for you, then please let me know.
