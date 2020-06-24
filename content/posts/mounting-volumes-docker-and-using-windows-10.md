---
title: Mounting Volumes in Docker and Using Windows 10
date: 2015-11-20
published: true
tags: ['Docker','tutorial']
canonical_url: false
description: "This is a quick post to details some issues I have found when trying to use Docker within a Mac or Windows environment."
---

This is a quick post to details some issues I have found when trying to use Docker within a Mac or Windows environment.

I had been following this tutorial on how to get [Laravel up and running on Docker](https://www.sitepoint.com/docker-and-dockerfiles-made-easy/) and my first pain I came across has been shared with both Mac and Windows environments.

Basically, when you go to mount a volume, by default you can only mount local directories in your User folder. To fix this, you first need to open up your VirtualBox GUI. Click on your current VM and click on "Settings", then head over to "Shared Folders". When you get here, you will want to click on the plus symbol to add a new folder share. For me, I wanted to mount my sites directory which could be found in my d drive...

[Shared folders in Virtual Box](https://tinypic.com/6duvxs.png)

I'm not 100% sure if "Auto-mount" and "Make Permanent" really matter, but I ticked it any way.

Once done, you will need to type something similar to the following...

docker-machine ssh docker-vm 'sudo mount -t vboxsf d/sites/laravel //d/sites/laravel'

(Please note that the double // is for Windows only and isn't needed in Mac, also, you should rename "docker-vm" to whatever your vm is called.)

Now this has been done, you can mount your volume as needed.

-----------------------------------------------------------------------------------

Next up is a Windows only issue, this one is quick and easy, but can be frustrating when you can't find the correct solution. If you are like me and run Docker using git bash, then you won't be able to mount your volume in the normal way which is usually something like this...

docker run -tid -p 80:80 -v /d/sites/laravel:/var/www nimmis/apache-php5

You will revieve an error...

"invalid value "D:\\sites\\laravel;C:\\Program Files\\Git\\var\\www" for flag -v: bad mode specified: Program FilesGitvarwww See 'C:Program FilesDocker Toolboxdocker.exe run --help'."

Instead you need to add a double forward slash at the beginning so it ends up like this...

`docker run -tid -p 80:80 -v //d/sites/laravel:/var/www nimmis/apache-php5`

-----------------------------------------------------------------------------------

I hope you enjoyed this post and if you have anything you would like to add to it, please feel free to leave a comment below.
