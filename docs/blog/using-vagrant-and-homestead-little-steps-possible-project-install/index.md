---
title: "Using Vagrant and Homestead In as Little Steps as Possible (Per Project Install)"
date: "2016-01-20"
---

I want to show you guys just how quick and easy it easy to get a Laravel project up and running alongside Vagrant/Homestead.

1 . Head over to your chosen directory and run something like...

composer create-project laravel/laravel PROJECTNAME

or if you have the Laravel installer...

laravel new PROJECTNAME

This will create a Laravel project directory with everything installed inside the given PROJECTNAME folder.

2 . When you cd into your PROJECTNAME directory, you can run the following...

composer require laravel/homestead --dev

This will add Homestead into your Composers require attribute under the dev tag, which means it will only be used for development purposes.

3 . You then need to run...

vendor/bin/homestead make

This will create the VagrantFile and Homestead.yaml file to be used for Vagrant.

The Homestead.yaml file is used to configure any settings to be used in your virtual machine. If you need more advanced settings, then check out \[the Homestead docs\](https://laravel.com/docs/5.1/homestead), which shows how to add Blackfire and Crons etc.

4 . Run

vagrant up

This will get your virtual machine up and running, once running, you can visit the site through 192.168.10.10, it should now be ready for dev work.

\---

If you're like me and don't like working on the IP address, you have a couple of options. Firstly, you can add a hostname manually in your computers hosts file. Something like...

192.168.10.10 homestead.app

You can change "homestead.app" to whatever host name you prefer. The better and more elegant way is to add a Vagrant plugin called "Vagrant Hosts Updater"...

vagrant plugin install vagrant-hostsupdater

This will automatically edit your hosts file using the settings inside your Homestead.yaml file. You can change the hostname by editing the following attributes; hostname, name and sites: -map to your chosen domain name e.g. example.app or example.dev etc.

Mac and Linux users will also be asked for their admin passwords, whilst in Windows, you will need to run the Command Line as an administrator.

\---

Here are some fantastic commands you should learn as well as documentation from other resources to learn more about Vagrant and Homestead environments.

up        Boots up the machine and fires provision

reload       Reboots the machine

provision      Runs only the provisioner(s)

init       Initializes a new Vagrantfile based on specified box url

halt         Turns off the machine

destroy       Destroys the virtual machine

suspend       Suspends execution

resume       Resumes execution

ssh       Logs in via ssh (no password is required)

status       Shows info about the current Vagrant environment

global-status       Shows info about all Vagrant's environments

\---

[Homestead Documentation](https://laravel.com/docs/5.2/homestead)

[Vagrant Documentation](https://www.vagrantup.com/docs/getting-started/)

[Awesome book about Vagrant written by Erika Heidi](https://leanpub.com/vagrantcookbook?utm_campaign=vagrantcookbook&utm_medium=embed&utm_source=www.erikaheidi.com)
