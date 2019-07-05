---
title: "Laravel Localhost removing /public/index.php"
date: "2014-05-29"
---

I have been in the Laravel chats for quite a while now and one question which I see regularly is how to remove the public/index.php directory on Localhost. The easiest way to do this (and the way I always use) is to open up your Command prompt or Terminal and cd into the main directory of your project then run "php artisan serve". That's it. You're done. Don't believe me? Check out \`https://localhost:8000\` and admire your Laravel work.

Another way, but a bit more complicated would be to set up a virtual host (vhost) and point it to the public folder inside your projects main directory. Have a [Google](https://google.com) around if this is what you prefer and you will find so many tutorials showing you just how to do this.

Something which is a lot newer is [Vagrant](https://vagrantup.com), now this will set up a Virtual Machine which you can SSH into and run a local environment for your PHP. Check it out and find some tutorials on installing a LAMP environment inside your [Vagrant](https://vagrantup.com) project.

Laravel's version 4.2 will be coming packaged with something called [Homestead](https://laravel.com/docs/homestead) which will have a Vagrant configuration. This will allow you to go straight into Laravel and run a Vagrant box straight away with little to no configuration what so ever.

So, try each of these examples out and find out which one is easiest for you. If you have another way then please let us know in the comments and share your experiences with setting up a Laravel project.
