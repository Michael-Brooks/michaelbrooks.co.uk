---
title: "First Laravel Tutorial - Controllers and Routes"
date: "2014-03-29"
---

## Commence quick and helpful tutorial...

Previously on a Laravel project, I had to have a slug within my routes which would point to two different tables within my database. I needed a controller which would do the thinking for me. And by this I mean, in my routes I would have...

[code language="php"] Route::get('{slug}', 'URLController@index'); [/code]

And in my Controller, I would have the following to do the thinking for me...

[code language="php"] public function index($slug) { if(Page::where('slug', $slug)) { //Show page property } else if(Blog::where('slug', $slug)) { //Show Blog property } } [/code]

So here we have our logic saying if there is anything in the page table where the slug matches. We show the page with that slug otherwise, show a blog post with the matching slug.

This might not be the best example as a lot of people would have a blog post going to 'blog/{slug}' and you might even have the page go to 'page/{slug}', but the page structure of a site is always changing and it depends on how you feel people should view your site.

I have found one problem with this mind, if nothing gets found then it will just show a blank page, I haven't found the good logic which will display errors. Or if you are in production a 404 page.
