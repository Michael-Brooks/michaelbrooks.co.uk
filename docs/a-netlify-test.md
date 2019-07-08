---
title: A Netlify Test
date: 2019-07-08T10:56:06.722Z
type: post
---
Last week I signed into my WordPress blog and found I had errors. These errors seemed to have occurred through my Neve theme which may have been caused by an upgrade somewhere along the lines. I tried to trace the errors back through my daily backups, but it seemed no matter what I did, I still had errors.

Because of this, and because it's seemingly not my fault, I decided to move away from WordPress. I'm now using [VuePress](http://vuepress.vuejs.org/) which is based on VueJS and generates markdown files into the correct HTML format. It's not initially meant for blogging, which meant I had to tweak it a little, but I'm liking the change.

I hooked VuePress up to [NetlifyCMS](https://www.netlifycms.org/docs/intro/) which gives me a nice editor. It will then create new branches on GitHub whenever I save an article, and once I hit publish, it will merge the PR into my master branch.

This is powerful and it means there will be less errors because of how static it is. I can update the packages myself and rollback to any previous changes if need be. Netlify also allows you to preview any branches which can be very powerful, especially if you made some huge changes and you're not sure if they'll deploy the way you'd like.

You can also A/B test your branches and see what UI changes work best for you. It's an incredibly powerful system and I highly recommend it to anyone who thinking going to headless or static sites.
