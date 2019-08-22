---
title: The future of blogging is Headless and the JAMStack
date: 2019-07-29T13:19:29.370Z
type: post
description: Find out why I think Headless and the JAMStack is the future of blogs
coverImage: /images/daniel-jensen-363755.webp
---
I haven't made a blog post in a while, but as some of you may know, I migrated my website from WordPress to VuePress and moved hosting from SiteGround to Netlify. I am super happy with the results and everything just works and won't break randomly. My site can't get hacked because everything is completely static and I also get an added benifit of speed.
<!-- more -->
My site on SiteGround was going so slow, it was in the 20s for mobile and now it's in the 60s which is incredible. For desktop it's around 98 to 100 (Google PageSpeed results can vary). The speed improvements is now down to me to sort out since it's not the fault of Netlify. This is great, because it gives me more control on how to improve my site which I will be working on at some point. Right now I'm looking at moving [michaelbrooks.dev](https://michaelbrooks.dev) and [brookspetsitters.com](https://brookspetsitters.com) to Netlify which will be using Vue (not VuePress) and TailWind CSS as my main assets. Progress is slow due to other work commitments, but it's going great and I hope to be releasing michaelbrooks.dev very soon.

You may be wondering how I'm adding content which is another interesting thing. I could add or edit my posts locally and preview locally before pushing to Git and then deploying to Netlify, but an easier way is to use NetlifyCMS. You simply add a html file into a public admin directory, hook up "Identity" using the Netlify backend and finally creating a configuration file which tells Netlify where and how you want your pages to save. Once done, you can then go to /admin and create new pages or posts and once saved, Netlify will push it up to GitHub which will then automatically trigger a deploy ready for everyone to see.

It's well and truly amazing, and if you want to know how I got started using VuePress as my blog, you can check out this lovely [blog post by Howar31](https://blog.howar31.com/vuepress-blog-tutorial).

I hope you enjoyed this blog post and I will try to get back to more of a schedule very soon. I will also be constantly updating this site as there are lots of improvements to be made. Such as lazy loading images, a better RSS feed, and possibly a custom VuePress theme.

<div id="commento"></div>
<script src="https://cdn.commento.io/js/commento.js"></script>
