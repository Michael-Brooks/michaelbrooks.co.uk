---
title: Composer Private Repository Problems
date: 2014-04-08
published: true
tags:
- Windows
- Linux
- PHP
- development
- composer
cover_image: "./images/composer-400x267.webp"
canonical_url: false
description: Recently I have been finding out the slight differences between Windows
  and Linux for use with Laravel and Composer. One difference is Windows isn't picky
  about the way you set out Composer's packages which can be a major problem. Here's
  the issue I had and what I had to do to get it going...

---
## Cross development can be a pain...

Recently I have been finding out the slight differences between Windows and Linux for use with Laravel and Composer. One difference is Windows isn't picky about the way you set out Composer's packages which can be a major problem. Here's the issue I had and what I had to do to get it going...

```javascript
{
    "name"
}: 
"laravel/laravel",
"description": "The Laravel Framework.",
"keywords": ["framework", "laravel"],
"license": "MIT",
"repositories": [
    {
        "type": "vcs",
        "url": "git@bitbucket.org:mbrookspulse8/admin.git",
        "url": "git@bitbucket.org:pulse8/haulfryn-admin-sliders.git",
        "url": "git@bitbucket.org:pulse8/haulfryn-admin-parks.git",
        "branches-path": false,
        "tags-path": false
    }
],
"require": {
    "laravel/framework": "4.1.*",
    "cartalyst/sentry": "2.1.*",
    "imagine/Imagine": "0.5.0",
    "edvinaskrucas/notification": "2.*",
    "way/generators": "dev-master",
    "pulse8/admin": "dev-master",
    "pulse8/sliders": "dev-master",
    "pulse8/parks": "dev-master",
    "geedmo/yamm3": "dev-master"
},
"autoload": {
    "classmap":
    [
        "app/commands",
        "app/controllers",
        "app/models",
        "app/database/migrations",
        "app/database/seeds",
        "app/tests/TestCase.php"
    ]
},
"scripts": {
    "post-install-cmd"
}:
[ "php artisan clear-compiled", "php artisan optimize" ],
"post-update-cmd": [ "php artisan clear-compiled", "php artisan optimize" ],
"post-create-project-cmd": [ key:generate" ] },
"config": {
    "preferred-install": "dist"
},
"minimum-stability": "stable"
}
```

As you can see, I placed all of my private VPS URLs into one JSON object. On Windows, everything was fine and dandy, nothing was overwritten and everything could be found easily. However, when I placed it all on the server, this is where I ran into problems. Linux is more strict on standards (which is definitely not a bad thing) and caused a lot of aches and pains for me as I wasn't coding to these standards. It took me and my team a whole day to suss out what was wrong, but this was our finished code for the private VPS URLs...

```javascript
"repositories": 
[
    { 
        "type": "vcs",
        "url": "git@bitbucket.org:mbrookspulse8/admin.git",
        "branches-path": false,
        "tags-path": false
    },
    {
        "type": "vcs",
        "url": "git@bitbucket.org:pulse8/haulfryn-admin-sliders.git",
        "branches-path": false,
        "tags-path": false
    },
    {
        "type": "vcs",
        "url": "git@bitbucket.org:pulse8/haulfryn-admin-parks.git",
        "branches-path": false, "tags-path": false
    }
],
```

They have been separated into their own object and now runs perfectly fine on Windows and Linux. Had similar issues? If so then please feel free to share and let me know how you overcame them.