---
title: "Laravel user Registration and Login"
date: "2014-08-23"
type: "post"
---

## Using Laravel packages to help us

This will be a fairly simple tutorial as I'm not re-creating the wheel here. I started by developing a login/registration system by myself until I start talking to people in Laravel's IRC. There is a package which did everything I needed it to do which was as follows...

- Register a user with the following credentials; Username, Email, Password and of course Confirm Password.
- The user then gets sent an email to confirm registration.
- The user confirms registration and can now use the website by logging in.
- The link in case the user forgets the password, which then creates a link to confirm so the user can then change his/her password.
- Remember me functionality.
- Logging out
- Completely customisable in terms of layout and functionality.

Some people had spoken about a Laravel package which does all of this called [Zicaco/confide](https://github.com/Zizaco/confide). This package is absolutely brilliant and does everything I could ask for whilst still maintaining the simplicity of migrating it into something you have already developed.

We need to start off by installing this package, place "zizaco/confide": "~4.0@dev" into your Composer's require key. You then place ZizacoConfideServiceProvider', inside Laravel's provider's array. Finally, add this into Laravel's aliases array 'Confide' => 'ZizacoConfideFacade', .

(PLEASE NOTE: I am currently using version 3.2.\* of this package and I currently haven't upgraded. I am sure that the experience will be similar, but if you have any queries then feel free to email me).

Once you have installed your package successfully, you can run these commands to get everything up and running... "php artisan confide:controller", "php artisan confide:routes", "composer dump-autoload". And as the docs say, you are good to go.

You can test it out by going to localhost/users/create to see what it has made for you. Of course, you can go on and change the layout, the control and anything else which you find you need to change.

If you need any help, then please let me know and I will try to help you out. I will also be trying to upgrade to the latest version and will release a step by step guide on how to do this.
