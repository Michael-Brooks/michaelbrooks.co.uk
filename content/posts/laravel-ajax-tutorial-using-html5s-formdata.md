---
title: Laravel AJAX Tutorial Using HTML5's FormData
date: 2014-08-28
published: true
tags: ['ReactPHP','Symfony','PHP']
canonical_url: false
description: "For this tutorial, I will show you guys how I managed to create an image uploader for your profile image. This is very similar to how Facebook's/Twitter's functionality."
---

# Laravel AJAX Tutorial Using HTML5's FormData

For this tutorial, I will show you guys how I managed to create an image uploader for your profile image. This is very
similar to how Facebook's/Twitter's functionality.

First of all, let's create the routes, for this, we will need to create a get and post route...

```php
<?php
Route::get('{username}', 'UsernameController@show');
Route::post('{username}/upload', 'UploadController@profileImage');
```

Remember that you can name the controllers and methods anything you like, as long as you keep everything consistent.
Now we need to create the controllers and methods which are as follows...

```php
<?php
// User Controller, index mehod
public function show($username) {
    $user = User::where('username', $username)->first(); $userData = User::find($user->id)->UserDetail;

    return View::make('user', array( 'userData'=> $userData ))->with('user', $user);
}
```

We are trying to get the user's information where it matches in the URI, as you can see, I have a one to one
relationship with a user and a user's information (called UserDetail). I believe the user array could be placed along
with the user data array, but I decided to place this inside the with a method.

Now we need to handle the image data which will upload the image to the background without anyone knowing it's
happening...

```php
<?php
// UploadController, profileImage method
public function profileImage($username){
    $user = User::where('username', $username)->first();

    $temp = $_FILES['upload']['tmp_name']; $image = $_FILES['upload']['name'];
    $ext = pathinfo($image, PATHINFO_EXTENSION);
    
    $newFilename = uniqid($user->id);
    
    if(!is_dir("images/$username/")) { mkdir("images/$username", 0777); }
    
    $img = Image::make($temp);
    
    $img->fit(130, 130);
    
    $src = "images/$username/$newFilename.$ext";
    
    $img->save($src);
    
    $query = User::find($user->id)->profileImage; $query->src = $src;
    $query->alt = $username . '\'s Profile Image';
    $query->save();
}
```

Firstly, we need to match the username with the username in the URI, after this, we grab the image and process it.
Please note that I am using the [Intervention/Image](https://github.com/Intervention/image) package, which you can
easily grab and install to implement it on your website. We check to see if the directory exists, if it doesn't, then we
create it with r/w permissions. I then use the image package to create an image which is 130px X 130px, the fit method
will automatically crop the image so it doesn't look stretched and horrible. We then give it a source which tells it
where to save this image which then gets saved. Afterwards, we call the database and find the user to set the image src
and alt rows.

Now that we have all the backend magic happening, we actually need to create a view which displays the form and
automatically refreshes the image upon upload completion...

```php
@extends('layout')

@section('content')

    <div class="row">
    
        <div id="profile-wrapper">
        
            <div class="large-2 columns pull-left">
                <img class="profile-thumb th" src="/{{ $user->profileImage->src }}"
                    alt="Profile Image" />
            </div>
            
            <h2>About</h2>
            
            @if(isset($loggedIn) && $loggedIn->username == $user->username)
                <a href="#" class="upload-link"> Upload a file </a>
                <div class="hidden-upload">
                    {{ Form::open(array(
                        'action' => array('User::upload',
                        $user->username),
                        'files' => 'true',
                        'id' => 'image-form')) }}
                        {{ Form::file('upload', array('class' => 'profile-upload')) }}
                    {{ Form::close() }}
                </div>
            @endif
        </div>
    
        {{ $userData->about }}
    </div>

@stop
```

We only want to show this hidden form if the user is logged in and it's the same logged in user which is seeing their
own profile. As you can see, we are using Laravel's blade syntax which makes this page look a lot cleaner and easier to
see what is going on. Right, now we need the JQuery which will send the image to the post controller we recently
created...

```html
<script>
    if(isset(user)) {
        form.change(function() {
            var formData = new FormData($('form')[0]);
            
            jQuery.ajax({
                url: '{{ $user->username }}/upload'
                data: formData,
                processData: false,
                contentType: false,
                type: 'post',
                success: function(
                    window.location.reload(true);
                )
            })
        })
    }
</script>
```

I have created my own scripts.blade.php which gets placed into my layout.blade.PHP, you can do the same, or you can
include this within the page itself. I added an if statement to avoid any errors for when a user isn't logged in. Our
JQuery creates a new format function and passes in the form we created, we then call the ajax method and pass it some
parameters.

* URL: sets the URL to where the image needs to get passed to, this is the route we created above.
* data: sets the data to formData.
* processData and contentType are both set to false, this has to be set to avoid any future errors.
* type: We set this to post as it is a post method. 
* success: On success, it will refresh the window to display the newly uploaded image.

And there you guys have it, this is all we need to create our really awesome AJAX upload form, but you guys might be
wondering, how do we hide the form? We here are the optional steps so you can create a hidden form which gets shown upon
mouse hover...

```css
.upload-link {
    position: absolute;
    top: 100px;
    left: 35px;
    z-index: 0;
}

#profile-wrapper:hover .upload-link {
    display: inline; background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 2px;
}

.hidden-upload {
    position: absolute;
    top: 100px;
    left: 35px;
    z-index: 1;
}

.hidden-upload .profile-upload {
    opacity: 0;
}
```

Now, that is all there is (I promise). If you have any questions, comments or feedback, then please feel free to drop a
comment down below. I always like to read what you guys have to say and love replying back to you. I hope you look
forward to my next Blog post.
