---
title: "Laracon US - Laravel 5.3 overview"
date: "2016-07-29"
type: "post"
---

The last two days I have been keeping an eye on the Laracon US live stream shown on [StreamACon](https://streamacon.com) and while the first day of the stream didn't go too well, the second days stream has been phenomenal (Review will be coming soon).

The reason for this post however, is to talk about the new features in Laravel 5.3 and oh boy has he put a lot in.

First off, he has removed a lot of unneeded folders, but these can be placed back in by running the simple artisan commands for when they are actually needed by the user. This makes the framework look a whole lot cleaner and less scary for newcomers. I have seen it time and time again where a newcomer will come into Reddit and they want to know all about every folder as soon as they can when it shouldn't be like that, they need to learn to start small and grow the framework which is exactly what 5.3 has tackled.

\## Laravel Passport ##

Laravel Passport adds oAuth 2 and JWT tokens. A lot of people are already jumping on the "goodbye Dingo, hello Passport" bandwagon, but I don't think people should be too quick to say this. It looks to me as Passport could be the perfect companion for Dingo. Dingo was never meant as a authentication layer and is in fact a JSON API layer to help with JSON requests and responses. No where has Taylor said that Passport will be doing the same, he just said it adds oAuth 2 and JWT.

\## Laravel Mailable ##

This is a nice option for sending mail, it makes for a more expressive API design choice and helps tidy up the sending of mail. If you send a lot of Mail and have used the less expressive syntax, you can move to something like this...

\`\`\` Mail::to('laravel@example.com')->send(new ContactForm) \`\`\`

Within your ContactForm class, you can build up the request and then return a Blade view on the response.

\## Laravel Scout ##

This is a pretty exciting new feature which allows full text searching using Algolia (Taylor currently only has the Algolio drivers, but asks that the community adds more drivers).

\`\`\` php artisan scout:import App\\Post \`\`\`

Running the above command will sync your Post model to Alogolia for indexing, you can then run searches like...

\`\`\` Post::search('Laravel')->get(); \`\`\`

You can even paginate the responses...

\`\`\` Post::search('Laravel')->paginate(); \`\`\`

\## Laravel Notifications ##

Laravel notifications enable you to notify you or a customer if something happens using Slack, SMS or email.

\`\`\` $this->line('Thank you for joining') ->action('Button Text', 'https://url.com') ->line('If you have any question, please reply to this email.') ->success(); \`\`\`

Or if you have an error...

\`\`\` $this->line('We are sorry, but something went wrong...') ->action('Button Text', 'https://url.com') ->error(); \`\`\`

\## VueJS ##

VueJS has been added as the default JS framework into the boilerplate of Laravel 5.3. This is easy enough to take out, but is very helpful if you want to use VueJS and even helps if you couldn't decide between VueJS, Angular or ReactJS.

\## Laravel Summary ##

As you can see, Taylor had a lot to talk about and there's bound to be something which has been missed. Taylor tried to squeeze as much in as possible, but I don't think he had enough time to discuss everything in detail. We will have to wait a couple of weeks to see what the official release brings.
