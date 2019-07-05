---
title: "Using View Composers in Laravel 5.2"
date: "2016-02-03"
---
# Using View Composers in Laravel 5.2

I have started using Laravel's View Composers which come in handy when you have a navigation bar that constantly needs
certain data. For example, you have an e-commerce store and you need to poll how many items a user has in their basket
on pretty much every page they move onto, or you need a login/register button when a user isn't logged in and then a
profile options button when they are.

You could be really lazy and add the same code/query into every single controller, which yes, that will work, but then
that's not DRY (Don't Repeat Yourself). To fix this, we can complete a couple of simple steps and have one bit of code
which will constantly be in use every time a certain partial is called.

If you currently have a layout/template view which has the navigation menu already written in, then you will need to
move this out into a partial. Within your "resources > views" directory, you will need to create a new directory called
"partials". Once done, you will need to create a "nav.blade.php" file and paste in your navigation code. It should look
something like this...

```html
<nav class="navbar navbar-default">
  <div class="container-fluid navbar-header">
  <button class="navbar-toggle collapsed" type="button" data-toggle="collapse"
  data-target="#bs-example-navbar-collapse-1" aria-expanded="false" class="sr-only">
    Toggle navigation
    <br />
    <br />
    <br />
    <br />
    </button><br />
    <a class="navbar-brand" href="#">Brand</a><br />
  </div>
  <p><!-- Collect the nav links, forms, and other content for toggling --><br /></p>
  <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
      <li style="list-style-type: none;">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#">Link <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="nav navbar-nav">
      <li style="list-style-type: none;">
        <ul class="nav navbar-nav">
          <li><a href="#">Link</a></li>
        </ul>
      </li>
    </ul>
    <ul class="nav navbar-nav">
      <li style="list-style-type: none;">
        <ul class="nav navbar-nav">
          <li class="dropdown">dropdown
            <ul class="dropdown-menu">
              <li style="list-style-type: none;">
                <ul class="dropdown-menu">o</ul>
              </li>
            </ul>
            <p> </p>
            <ul class="dropdown-menu">
              <li style="list-style-type: none;">
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                </ul>
              </li>
            </ul>
            <ul class="dropdown-menu">
              <li style="list-style-type: none;">
                <ul class="dropdown-menu">
                  <li><a href="#">Another action</a></li>
                </ul>
              </li>
            </ul>
            <ul class="dropdown-menu">
              <li style="list-style-type: none;">
                <ul class="dropdown-menu">
                  <li><a href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <ul class="dropdown-menu">
              <li style="list-style-type: none;">
                <ul class="dropdown-menu">
                  <li class="divider" role="separator"> </li>
                </ul>
              </li>
            </ul>
            <p></p>
            <ul class="dropdown-menu">
              <li style="list-style-type: none;">
                <ul class="dropdown-menu">
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
            <p></p>
            <ul class="dropdown-menu">
              <li style="list-style-type: none;">
                <ul class="dropdown-menu">
                  <li class="divider" role="separator"> </li>
                </ul>
              </li>
            </ul>
            <p></p>
            <ul class="dropdown-menu">
              <li style="list-style-type: none;">
                <ul class="dropdown-menu">
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <p></p>
            <p></p>
          </li>
        </ul>
      </li>
    </ul>
    <p></p>
    <p></p>
    <form class="navbar-form navbar-left" role="search">
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Search" />
        <br />
      </div>
      <p>
        <button class="btn btn-default" type="submit">Submit</button>
        <br />
      </p>
    </form>
    <p></p>
    <ul class="nav navbar-nav navbar-right">
      <li style="list-style-type: none;">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <button class="btn btn-primary navbar-btn" type="button">
              Basket
              <span class="badge"></span>
            </button>
        </li>
        </ul>
      </li>
    </ul>
    <p></p>
    <p></p>
  </div>
  <p><!-- /.navbar-collapse --><br /></p>
  <p><!-- /.container-fluid --></p>
</nav>
```

Next, in your layout or template blade, you can add...
```php
<?php
require('partials.nav');
```

This will include your navigation file.

Now for setting up the View Composer, firstly we need to set up a ServiceProvider (for the sake of this tutorial I will
show an example for counting a basket)...

```php
<?php
...
public function boot() {
    view->composer(
      'partials.nav',
      'App\Http\ViewComposers\BasketComposer'
    );
}
```

The service provider will run whenever you use the nav partial and in the next attribute, it will use your
BasketComposer which should look something like this...

```php
<?php
class BasketComposer
{
  public function __construct()
  {
    $cart = Cart::Contents();
  }

  /**
   * Bind data to the view.
   *
   * @param View $view
   * @return void
   */
  public function compose(View $view)
  {
    $view->with('cart', $this->cart['result']['total_items']);
  }
}
```

Obviously, depending on your API or personal use, your code may vary here, but you should get an idea of how this is working. Every time we need the nav partial, the view will be rendered with our given items. This can also be passed to many views at once which makes it work really well. I also believe you can pass many different constant data sets into a single view, so you could in theory also add a user constant for login and edit profile data.

For more information, feel free to visit Laravel's documentation on [View Composers](https://laravel.com/docs/5.2/views#view-composers) and this nice [Laracasts video](https://laracasts.com/series/laravel-5-fundamentals/episodes/25) which helped me figure out how to use it correctly.

If you have a unique use case, please let me know and we can discuss as a community just how useful these View Composers are.
