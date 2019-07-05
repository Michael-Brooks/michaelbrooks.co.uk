---
title: "Unique slug for news articles using Laravel's unique valitation"
date: "2015-01-27"
---

Just recently at work, I had to change the way my news articles worked. We have a client who has Holiday Homes, and they have news articles per park. When I redeveloped the website in Laravel, I created a one to many relationship based on one park has many news articles.

I really should have created a many to many relationship, as there could be the same articles per park, but I was young and naive. Because I worked in this way, I needed to figure out a way where I could have the same or similar articles with the same article slug, but unique only to that park.

So say if I had a park in Cornwall, I could create an article which has the slug of "owners-update", this slug could be used on another park which is in Devon, but the slug couldn't then be used again in Cornwall as it has been done.

Add a similar rule to the one below in your create method and you will get the results which I was looking for...

'slug' => 'required|unique:news,slug,NULL,id,park\_id,' . $input\['park\_id'\],

This rule will then ONLY apply to an article with the same park id.

Ref: [Laravel Unique Rule](https://laravel.com/docs/4.2/validation#rule-unique)
