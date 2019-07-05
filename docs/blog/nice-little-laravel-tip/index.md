---
title: "Nice little Laravel tip (Blade Ternary Operator)"
date: "2014-06-26"
---

Just today, I was looking at using a ternary operator in Laravel's Blade templating system and thought to myself... "There must be a better way of doing this". After a quick Google aanndd... BEHOLD THE OR STATEMENT! Since version 4.1 they managed to sneak in this "or" statement and it's managed to bypass so many people (I figured this out by the lack of voices shouting about this on Google).

So, instead of doing something like this...

```php
{{ (isset($title)) ? $title : 'default title here' }}
```

You can try using "or" like so...

```php
{{ $title or 'default title here' }}
```

And there you have it ladies and gentlemen, your future Blade documents will look even more lovely. Please, thank me
later. :)