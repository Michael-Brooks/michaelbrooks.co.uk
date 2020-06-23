---
title: "Laravel 4: How To Use Jquery UI Sortable"
date: 2014-09-03
published: true
tags: ['ReactPHP','Symfony','PHP']
canonical_url: false
description: "On Saturday the 20th of October, I competed at Battle Cancer alongside 3 of my CrossFit friends; Pete, Phil and Matt. The event had somewhere around 1,000 people attending to watch a range of CrossFit teams compete with one another."
---

# Laravel 4: How To Use Jquery UI Sortable

## Click and drag sorting

I needed a way to change the sort order of my data inside of an admin interface which I have created. After a little
looking around, I found many tutorials which would show how to get this done with JQuery, but wouldn't show the best way
to handle this data (and in my case using Laravel to handle this data). I dug around for quite a bit, but I ended up
finding this lovely little tutorial by [dragonfire1119](https://tutsglobal.com/profile/1/dragonfire1119) which was
called [How To Use Jquery UI Sortable In Laravel 4](https://tutsglobal.com/discussion/11/how-to-use-jquery-ui-sortable-in-laravel-4).

The only trouble is, when you follow this tutorial, it could be tidied up a little, here is my version...

```php
// Place this inside your View

@foreach($categories as $category)
    sort me
@endforeach
```

Here is the JQuery...

```javascript
$(document).ready(function () {
    $('.sortable').sortable({ cursor: 'move', axis: 'y', update: function () {
        var order = $(this).sortable('toArray');
        $.post('{{ URL::route('Sliders::sort') }}', { order: order })
    }
    });
});
```

And then your Controller will look like this...

```php
<?php
public function sort() {
    $input = Input::get('order');
    $i = 1;
    
    foreach($input as $value) {
        $banner = Banner::find($value);
    
        $banner->sort_by = $i;
        $banner->save();
        
        $i++;
    }
}
```

The JQuery and Controller could also look like this...

```javascript
$(document).ready(function () {
    $('.sortable').sortable({ cursor: 'move', action (event, ui) {
        var data = $(this).sortable('serialize');
        
        $.ajax({ data: data, type: 'POST', url: '{{ URL::route('Sliders::sort') }}' });
    }
    });
});
```

Updated Controller...

```php
<?php
public function sort() {
    $input = Input::get('item');
    $i = 0;
    foreach($input as $value) { $banner = Banner::find($value);
        $banner->sort_by = $i;
        $banner->save();
        $i++;
    }
}
```

I think that both work just as well and it is down to personal preference. If you would like to know where I got the
second method from, you can take a look
[here](https://stackoverflow.com/questions/15633341/jquery-ui-sortable-then-write-order-into-a-database).

As always, if you have any comments/suggestion the please feel free to let me know in the comments.
