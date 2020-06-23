---
title: Laravel Development with Vessel (Docker)
date: 2018-06-19
published: true
tags: ['ReactPHP','Symfony','PHP']
cover_image: ./images/subsea_vessels.webp
canonical_url: false
description: "Learn how to get started with Vessel"
---

# Getting started with Vessel

I have started using [Vessel](https://vessel.shippingdocker.com/) for my local development as it makes starting and developing a project so much easier. It seems more lightweight than Homestead and the start-up time is much quicker than Homestead.

# No PHP or Composer? No problem

If you don't have PHP7 or Composer installed on your machine, you can follow [these instructions](https://vessel.shippingdocker.com/docs/common-issues/#catch22) to help get you started. It will install PHP7 and Composer environments with Docker and allowing you to create a Laravel project and install Vessel as a package.

I also add /docker folder into my .gitignore as vessel will create this upon initialisation. You could also ignore the vessel and docker-compose.yml files as well, but I enjoy keeping it within my projects.

# Bash Commands

Vessel is a bash file and allows you to run any artisan, yarn or npm command of your choosing which makes it easier rather than ssh'ing into a homestead box or running the exec command.

# Only for development environments

It has fantastic documentation and should allow you to get running within 10 minutes. The only downside to Vessel is that it's only for development work and not production. So don't expect Lets Encrypt certificates or deployment strategies with this.

### If you enjoyed this article, please follow for more. Alternatively, you can [become a patron](https://www.patreon.com/MichaelBrooks)
