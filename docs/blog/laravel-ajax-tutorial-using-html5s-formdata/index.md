---
title: "Laravel AJAX Tutorial Using HTML5's FormData"
date: "2014-08-28"
---

For this tutorial, I will show you guys how I managed to create an image uploader for your profile image. This is very similar to how Facebook's/Twitter's functionality.

First of all, let's create the routes, for this, we will need to create a get and post route...

\[code language="php"\] Route::get('{username}', 'UsernameController@show'); Route::post('{username}/upload', 'UploadController@profileImage'); \[/code\]

Remember that you can name the controllers and methods anything you like, as long as you keep everything consistent. Now we need to create the controllers and methods which are as follows...

\[code language="php"\] // User Controller, index mehod public function show($username) {

$user = User::where('username', $username)->first(); $userData = User::find($user->id)->UserDetail;

return View::make('user', array( 'userData'=> $userData ))->with('user', $user); } \[/code\]

We are trying to get the user's information where it matches in the URI, as you can see, I have a one to one relationship with a user and a user's information (called UserDetail). I believe the user array could be placed along with the user data array, but I decided to place this inside the with a method.

Now we need to handle the image data which will upload the image to the background without anyone knowing it's happening...

\[code language="php"\] // UploadController, profileImage method public function profileImage($username){ $user = User::where('username', $username)->first(); $temp = $\_FILES\['upload'\]\['tmp\_name'\]; $image = $\_FILES\['upload'\]\['name'\]; $ext = pathinfo($image, PATHINFO\_EXTENSION);

$newFilename = uniqid($user->id);

if(!is\_dir("images/$username/")) { mkdir("images/$username", 0777); }

$img = Image::make($temp);

$img->fit(130, 130);

$src = "images/$username/$newFilename.$ext";

$img->save($src);

$query = User::find($user->id)->profileImage; $query->src = $src; $query->alt = $username . ''s Profile Image'; $query->save(); } \[/code\]

Firstly, we need to match the username with the username in the URI, after this, we grab the image and process it. Please note that I am using the \[Intervention/Image\](https://github.com/Intervention/image) package, which you can easily grab and install to implement it on your website. We check to see if the directory exists, if it doesn't, then we create it with r/w permissions. I then use the image package to create an image which is 130px X 130px, the fit method will automatically crop the image so it doesn't look stretched and horrible. We then give it a source which tells it where to save this image which then gets saved. Afterwards, we call the database and find the user to set the image src and alt rows.

Now that we have all the backend magic happening, we actually need to create a view which displays the form and automatically refreshes the image upon upload completion...

\[code language="php"\] @extends('layout') @section('content')

<div class="row">

<div id="profile-wrapper">

<div class="large-2 columns pull-left"><img class="profile-thumb th" src="/{{ $user->profileImage->src }}" alt="Profile Image" /></div>

<h2>About</h2>

@if(isset($loggedIn) && $loggedIn->username == $user->username) <a href="#" class="upload-link"> Upload a file </a>

<div class="hidden-upload">{{ Form::open(array('action' => array('User::upload', $user->username), 'files' => 'true', 'id' => 'image-form')) }} {{ Form::file('upload', array('class' => 'profile-upload')) }} {{ Form::close() }}</div>

@endif

</div>

{{ $userData->about }}

</div>

@stop \[/code\]

We only want to show this hidden form if the user is logged in and it's the same logged in user which is seeing his/her own profile. As you can see, we are using Laravel's blade syntax which makes this page look a lot cleaner and easier to see what is going on. Right, now we need the JQuery which will send the image to the post controller we recently created...

\[code language="javascript"\] <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-wp-preserve="%3Cscript%3E%0A%20%20%20%20%40if(isset(%24user))%0A%20%20%20%20%20%20%20%20%24('form').change(function()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20fd%20%3D%20new%20FormData(%24('form')%5B0%5D)%3B%20%2F%2F%20Create%20an%20arbitrary%20FormData%20instance%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%24.ajax(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20url%3A%20'%2Fuser%2F%7B%7B%20%24user-%3Eusername%20%7D%7D%2Fupload'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%3A%20fd%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20processData%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20contentType%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'POST'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20success%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20dow.location.reload(true)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%40endif%0A%3C%2Fscript%3E" data-mce-resize="false" data-mce-placeholder="1" class="mce-object" width="20" height="20" alt="<script>" title="<script>" /> \[/code\]

I have created my own scripts.blade.php which gets placed into my layout.blade.PHP, you can do the same, or you can include this within the page itself. I added an if statement to avoid any errors for when a user isn't logged in. Our JQuery creates a new format function and passes in the form we created, we then call the ajax method and pass it some parameters.

\* URL: sets the URL to where the image needs to get passed to, this is the route we created above. \* data: sets the data to formData. \* processData and contentType are both set to false, this has to be set to avoid any future errors. \* type: We set this to post as it is a post method. \* success: On success, it will refresh the window to display the newly uploaded image.

And there you guys have it, this is all we need to create our really awesome AJAX upload form, but you guys might be wondering, how do we hide the form? We here are the optional steps so you can create a hidden form which gets shown upon mouse hover...

\[code language="css"\] //CSS file .upload-link { position: absolute; top: 100px; left: 35px; dex: 0; one; }

#profile-wrapper .upload-link { one; }

#profile-wrapper:hover .upload-link { display: inline; background: rgba(0, 0, 0, 0.8); color: #fff; padding: 2px; }

.hidden-upload { position: absolute; top: 100px; left: 35px; z-index: 1; }

.hidden-upload .profile-upload { opacity: 0; } \[/code\]

Now, that is all there is (I promise). If you have any questions, comments or feedback, then please feel free to drop a comment down below. I always like to read what you guys have to say and love replying back to you. I hope you look forward to my next Blog post.
